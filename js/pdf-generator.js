// ==========================================
// ZAFII MEDICAL PORTAL - PDF MARKSHEET GENERATOR
// Fixed: Eliminates blank PDF bug via proper DOM paint cycle & A4 calibration
// ==========================================

// Populates student and exam details into the marksheet DOM
function populateMarksheetDOM(resultData) {
    const marksheetElement = document.getElementById('marksheet-template');
    if (!marksheetElement) return null;

    // Student Information
    const elName = document.getElementById('pdf-student-name');
    const elRoll = document.getElementById('pdf-student-roll');
    const elSem = document.getElementById('pdf-student-sem');
    const elSub = document.getElementById('pdf-exam-subject');
    const elDate = document.getElementById('pdf-exam-date');
    const elTime = document.getElementById('pdf-time-taken');

    if (elName) elName.textContent = resultData.studentName || "Medical Scholar";
    if (elRoll) elRoll.textContent = resultData.rollNo || "BSN-2026-001";
    if (elSem) elSem.textContent = resultData.semester || "Semester 1";
    if (elSub) elSub.textContent = `${resultData.subjectTitle} (${resultData.subjectCode})`;
    if (elDate) elDate.textContent = resultData.date || new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    if (elTime) elTime.textContent = resultData.timeTaken || "N/A";
    
    // Performance Metrics
    const elScore = document.getElementById('pdf-score-text');
    const elPercent = document.getElementById('pdf-percentage-text');
    const elGrade = document.getElementById('pdf-grade-badge');
    const statusBadge = document.getElementById('pdf-status-badge');

    if (elScore) elScore.textContent = `${resultData.score} / ${resultData.totalQuestions}`;
    if (elPercent) elPercent.textContent = `${resultData.percentage}%`;
    if (elGrade) elGrade.textContent = (resultData.grade || "A").split(' ')[0];
    
    if (statusBadge) {
        if (resultData.isPassed) {
            statusBadge.textContent = "PASSED (VERIFIED)";
            statusBadge.className = "marksheet-badge badge-passed";
        } else {
            statusBadge.textContent = "RE-ATTEMPT REQUIRED";
            statusBadge.className = "marksheet-badge badge-failed";
        }
    }

    // Populate Question Breakdown Rows
    const tableBody = document.getElementById('pdf-breakdown-body');
    if (tableBody) {
        tableBody.innerHTML = '';

        (resultData.breakdown || []).forEach((item, index) => {
            const row = document.createElement('tr');
            const isCorrect = item.userAnswerIndex === item.correctIndex;
            const isSkipped = item.userAnswerIndex === null || item.userAnswerIndex === undefined;

            let statusHtml = '';
            if (isCorrect) {
                statusHtml = '<span class="status-tag status-correct">✓ Correct</span>';
            } else if (isSkipped) {
                statusHtml = '<span class="status-tag status-skipped">— Skipped</span>';
            } else {
                statusHtml = '<span class="status-tag status-incorrect">✗ Incorrect</span>';
            }

            const userAnsText = isSkipped 
                ? "Not Answered" 
                : item.options[item.userAnswerIndex];
            const correctAnsText = item.options[item.correctIndex];

            row.innerHTML = `
                <td style="text-align:center; font-weight:700; width:35px; color:#475569;">${index + 1}</td>
                <td>
                    <div style="font-weight:700; color:#0f172a; margin-bottom:3px; line-height:1.35;">${escapeHtml(item.question)}</div>
                    <div style="font-size:10.5px; color:#475569; line-height:1.4;">
                        <strong>Selected:</strong> <span style="color:${isCorrect ? '#15803d' : '#b91c1c'}; font-weight:600;">${escapeHtml(userAnsText)}</span> &nbsp;|&nbsp; 
                        <strong>Correct:</strong> <span style="color:#15803d; font-weight:600;">${escapeHtml(correctAnsText)}</span>
                    </div>
                </td>
                <td style="text-align:center; width:95px; vertical-align:middle;">${statusHtml}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    return marksheetElement;
}

// Generates and downloads the official PDF marksheet
async function generateMarksheetPDF(resultData) {
    const marksheetElement = populateMarksheetDOM(resultData);
    if (!marksheetElement) {
        alert("Marksheet template error. Please refresh the page.");
        return;
    }

    const downloadBtn = document.getElementById('btn-download-pdf');
    const originalBtnHtml = downloadBtn ? downloadBtn.innerHTML : '';
    if (downloadBtn) {
        downloadBtn.disabled = true;
        downloadBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating PDF...';
    }

    const sanitizedStudentName = (resultData.studentName || 'Student').replace(/[^a-zA-Z0-9_-]/g, '_');
    const sanitizedSubject = (resultData.subjectCode || 'Quiz').replace(/[^a-zA-Z0-9_-]/g, '_');
    const fileName = `BSN_Marksheet_${sanitizedStudentName}_${sanitizedSubject}.pdf`;

    // Make visible in normal document flow (NOT fixed position, which causes blank html2canvas bug)
    marksheetElement.style.display = 'block';
    marksheetElement.style.position = 'relative';
    marksheetElement.style.visibility = 'visible';
    marksheetElement.style.opacity = '1';

    // Crucial: Wait 250ms for browser to perform layout reflow & paint the content
    await new Promise(resolve => setTimeout(resolve, 250));

    // Fallback if offline or html2pdf CDN is not reachable
    if (typeof html2pdf === 'undefined') {
        marksheetElement.style.display = 'none';
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = originalBtnHtml;
        }
        window.print();
        return;
    }

    // Clean, robust html2pdf options that avoid canvas clipping
    const options = {
        margin: [10, 8, 10, 8], // 10mm top/bottom, 8mm left/right
        filename: fileName,
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2, 
            useCORS: true,
            logging: false,
            letterRendering: true,
            scrollY: 0,
            scrollX: 0
        },
        jsPDF: { 
            unit: 'mm', 
            format: 'a4', 
            orientation: 'portrait'
        },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    try {
        await html2pdf().set(options).from(marksheetElement).save();
        marksheetElement.style.display = 'none';
        
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = '<i class="fa-solid fa-check"></i> PDF Downloaded!';
            setTimeout(() => {
                downloadBtn.innerHTML = originalBtnHtml;
            }, 3000);
        }
    } catch (err) {
        console.error("PDF generation error, falling back to print:", err);
        marksheetElement.style.display = 'none';
        if (downloadBtn) {
            downloadBtn.disabled = false;
            downloadBtn.innerHTML = originalBtnHtml;
        }
        window.print();
    }
}

// Direct Native Print / Save as PDF (Chrome Native)
function printMarksheetDirectly(resultData) {
    populateMarksheetDOM(resultData);
    window.print();
}

// Opens the live on-screen marksheet preview modal
function openMarksheetPreview(resultData) {
    populateMarksheetDOM(resultData);
    const modal = document.getElementById('marksheet-preview-modal');
    const previewContainer = document.getElementById('preview-marksheet-content');
    const template = document.getElementById('marksheet-template');

    if (modal && previewContainer && template) {
        // Clone marksheet content into modal
        previewContainer.innerHTML = template.innerHTML;
        modal.classList.add('active');
    }
}

function closeMarksheetPreview() {
    const modal = document.getElementById('marksheet-preview-modal');
    if (modal) modal.classList.remove('active');
}

function escapeHtml(string) {
    if (!string) return '';
    const div = document.createElement('div');
    div.innerText = string;
    return div.innerHTML;
}
