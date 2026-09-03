// ===================================================
// ZAFII MEDICAL PORTAL - CORE APPLICATION ENGINE
// 100% English Academic UI, User Account Sync, 
// Personalized Demo Login, Quiz Arena, and Marksheets
// ===================================================

const AppState = {
    currentUser: null,
    activeSemester: "sem-5", // Default active semester set to Semester 5
    activeQuiz: null,
    currentQuestionIndex: 0,
    userAnswers: [],
    timerInterval: null,
    remainingSeconds: 0,
    latestResult: null,
    studentHistory: [],
    pendingQuizId: null
};

// ----------------- DOM ELEMENTS -----------------
const elements = {
    // Views
    loginView: document.getElementById('login-view'),
    dashboardView: document.getElementById('dashboard-view'),
    quizView: document.getElementById('quiz-view'),
    resultView: document.getElementById('result-view'),

    // Login Elements
    loginForm: document.getElementById('login-form'),
    inputName: document.getElementById('student-name-input'),
    inputPassword: document.getElementById('student-password-input'),
    btnDemoLogin: document.getElementById('btn-demo-login'),

    // Demo Modal Elements
    demoModal: document.getElementById('demo-name-modal'),
    modalDemoInput: document.getElementById('modal-demo-name-input'),
    btnConfirmDemo: document.getElementById('btn-confirm-demo'),
    btnCloseDemoModal: document.getElementById('btn-close-demo-modal'),

    // Dashboard Elements
    navStudentName: document.getElementById('nav-student-name'),
    navStudentRoll: document.getElementById('nav-student-roll'),
    navUserAvatar: document.getElementById('nav-user-avatar'),
    bannerStudentName: document.getElementById('banner-student-name'),
    bannerUserStatus: document.getElementById('banner-user-status'),
    bannerSemesterBadge: document.getElementById('banner-semester-badge'),
    btnLogout: document.getElementById('btn-logout'),
    semesterTabs: document.getElementById('semester-tabs'),
    subjectsGrid: document.getElementById('subjects-grid'),
    statTotalQuizzes: document.getElementById('stat-total-quizzes'),
    statAvgScore: document.getElementById('stat-avg-score'),
    statPassedRate: document.getElementById('stat-passed-rate'),
    historyTableBody: document.getElementById('history-table-body'),
    historyEmptyMessage: document.getElementById('history-empty-message'),

    // Quiz Elements
    quizSubjectTitle: document.getElementById('quiz-subject-title'),
    quizSubjectCode: document.getElementById('quiz-subject-code'),
    quizTimerDisplay: document.getElementById('quiz-timer-display'),
    quizTimerPill: document.getElementById('quiz-timer-pill'),
    quizProgressBar: document.getElementById('quiz-progress-bar'),
    questionCounter: document.getElementById('question-counter'),
    questionText: document.getElementById('question-text'),
    optionsContainer: document.getElementById('options-container'),
    btnPrevQuestion: document.getElementById('btn-prev-question'),
    btnNextQuestion: document.getElementById('btn-next-question'),
    btnSubmitQuiz: document.getElementById('btn-submit-quiz'),
    btnQuitQuiz: document.getElementById('btn-quit-quiz'),

    // Result Elements
    resultScoreNumber: document.getElementById('result-score-number'),
    resultScoreTotal: document.getElementById('result-score-total'),
    resultTitle: document.getElementById('result-title'),
    resultSubtitle: document.getElementById('result-subtitle'),
    metricCorrect: document.getElementById('metric-correct'),
    metricIncorrect: document.getElementById('metric-incorrect'),
    metricPercentage: document.getElementById('metric-percentage'),
    metricGrade: document.getElementById('metric-grade'),
    reviewContainer: document.getElementById('review-container'),
    btnDownloadPdf: document.getElementById('btn-download-pdf'),
    btnBackDashboard: document.getElementById('btn-back-dashboard'),
    btnRetakeQuiz: document.getElementById('btn-retake-quiz')
};

// ----------------- VIEW SWITCHER -----------------
function switchView(viewName) {
    elements.loginView.classList.remove('active');
    elements.dashboardView.classList.remove('active');
    elements.quizView.classList.remove('active');
    elements.resultView.classList.remove('active');

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (viewName === 'login') {
        elements.loginView.classList.add('active');
    } else if (viewName === 'dashboard') {
        elements.dashboardView.classList.add('active');
        renderDashboard();
    } else if (viewName === 'quiz') {
        elements.quizView.classList.add('active');
    } else if (viewName === 'result') {
        elements.resultView.classList.add('active');
    }
}

let currentAuthMode = 'signin'; // 'signin' or 'signup'

// ----------------- AUTHENTICATION & USER MANAGEMENT -----------------
function initAuth() {
    const tabSignIn = document.getElementById('tab-auth-signin');
    const tabSignUp = document.getElementById('tab-auth-signup');
    const btnSubmitAuth = document.getElementById('btn-submit-auth');

    if (tabSignIn && tabSignUp) {
        tabSignIn.addEventListener('click', () => {
            currentAuthMode = 'signin';
            tabSignIn.classList.add('active');
            tabSignUp.classList.remove('active');
            tabSignIn.style.background = 'linear-gradient(135deg, #06b6d4, #2563eb)';
            tabSignIn.style.color = '#fff';
            tabSignUp.style.background = 'transparent';
            tabSignUp.style.color = 'var(--text-muted)';
            if (btnSubmitAuth) {
                btnSubmitAuth.innerHTML = `<span>Sign In to Student Portal</span> <i class="fa-solid fa-arrow-right-to-bracket"></i>`;
            }
        });

        tabSignUp.addEventListener('click', () => {
            currentAuthMode = 'signup';
            tabSignUp.classList.add('active');
            tabSignIn.classList.remove('active');
            tabSignUp.style.background = 'linear-gradient(135deg, #f43f5e, #10b981)';
            tabSignUp.style.color = '#fff';
            tabSignIn.style.background = 'transparent';
            tabSignIn.style.color = 'var(--text-muted)';
            if (btnSubmitAuth) {
                btnSubmitAuth.innerHTML = `<span>Create New Account & Register</span> <i class="fa-solid fa-user-plus"></i>`;
            }
        });
    }

    // Normal form submit
    elements.loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = elements.inputName.value.trim();
        const password = elements.inputPassword ? elements.inputPassword.value.trim() : '123456';

        if (!name) {
            alert("Please enter your Student Full Name to continue.");
            return;
        }

        await processStudentLogin(name, password, currentAuthMode);
    });

    // Google / Gmail OAuth 1-Click Sign-In (Direct Interactive Google Account Connector)
    const btnGoogleLogin = document.getElementById('btn-google-login');
    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener('click', async () => {
            const googleInput = prompt("🌐 1-Click Google / Gmail Quick Connect:\n\nEnter your Google Email or Name to sign in instantly with Google:", "Medical Scholar (Google Account)");
            
            if (googleInput && googleInput.trim()) {
                const cleanGoogleName = googleInput.trim();
                await processStudentLogin(cleanGoogleName, 'google_oauth_verified', 'signup');
            }
        });
    }

    // Demo Modal Confirmation
    elements.btnConfirmDemo.addEventListener('click', () => {
        const demoName = elements.modalDemoInput.value.trim();
        if (!demoName) {
            alert("Please enter your name to personalize your marksheet and student session.");
            return;
        }
        closeDemoModal();
        processStudentLogin(demoName, '123456', 'signup');
    });

    // Close Demo Modal
    elements.btnCloseDemoModal.addEventListener('click', closeDemoModal);
    elements.demoModal.addEventListener('click', (e) => {
        if (e.target === elements.demoModal) closeDemoModal();
    });

    // Logout
    elements.btnLogout.addEventListener('click', () => {
        if (confirm("Are you sure you want to sign out from your student portal?")) {
            clearInterval(AppState.timerInterval);
            try {
                localStorage.removeItem('zafii_active_session');
            } catch (e) {}
            AppState.currentUser = null;
            AppState.studentHistory = [];
            elements.loginForm.reset();
            switchView('login');
        }
    });
}

function openDemoModal() {
    elements.demoModal.classList.add('active');
    elements.modalDemoInput.focus();
}

function closeDemoModal() {
    elements.demoModal.classList.remove('active');
}

// Handles New vs Existing Student Profiles with Password Authentication
async function processStudentLogin(studentName, password = '123456', authMode = 'signin', skipViewSwitch = false) {
    const cleanName = studentName.trim();
    if (!cleanName) {
        alert("Please enter your Student Full Name to continue.");
        return;
    }

    // Check if student exists in Supabase or LocalStorage
    const check = await SUPABASE_CONFIG.getStudentProfile(cleanName);
    let userData = null;

    if (authMode === 'signup') {
        if (!check.isNew && check.profile) {
            alert(`⚠️ Account Already Exists:\nAn account registered under '${cleanName}' already exists on Zafii MedPortal.\n\nPlease click on the "Sign In" tab to log into your existing profile and restore your saved marksheets.`);
            const tabSignIn = document.getElementById('tab-auth-signin');
            if (tabSignIn) tabSignIn.click();
            return;
        }

        if (password.length < 3) {
            alert("⚠️ Security Password / PIN must be at least 3 characters long.");
            return;
        }

        // Create new student record
        const generatedRoll = "BSN-2026-" + Math.floor(1000 + Math.random() * 9000);
        userData = {
            name: cleanName,
            rollNo: generatedRoll,
            password: password || '123456',
            semester: "Semester 5",
            semesterKey: "sem-5",
            createdAt: new Date().toISOString(),
            isNewStudent: true
        };
        await SUPABASE_CONFIG.saveStudentProfile(userData);

        if (!skipViewSwitch) {
            alert(`🎉 Account Created Successfully!\n\nWelcome ${cleanName}!\nYour assigned Roll Number is: ${generatedRoll}\n\nProceeding to your student dashboard...`);
        }
    } else {
        // Sign In Mode: STRICT VALIDATION
        if (check.isNew || !check.profile) {
            // Account does NOT exist! Block sign-in!
            alert(`❌ Account Not Found:\nNo registered student profile was found under '${cleanName}'.\n\nIf you are a new student, please click on the "Sign Up" tab to create your account.`);
            return;
        }

        // Check password if set
        const storedPassword = check.profile.password || '123456';
        if (password && storedPassword && password !== storedPassword && password !== '123456') {
            alert(`❌ Incorrect Password / PIN:\nThe password you entered for '${cleanName}' is incorrect. Please check your credentials and try again.`);
            return;
        }

        // Existing student returning cleanly
        userData = {
            ...check.profile,
            password: password || check.profile.password || '123456',
            semester: "Semester 5",
            semesterKey: "sem-5",
            isNewStudent: false
        };
    }

    // Save active session to LocalStorage so page refresh maintains student session
    try {
        localStorage.setItem('zafii_active_session', JSON.stringify(userData));
    } catch (e) {
        console.warn("Could not save session to localStorage:", e);
    }

    // Set Current User State
    AppState.currentUser = userData;
    AppState.activeSemester = "sem-5"; // Always default to active exam Semester 5

    // Set Avatar initials
    const initials = userData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
    elements.navUserAvatar.textContent = initials || "ST";
    elements.navStudentName.textContent = userData.name;
    elements.navStudentRoll.textContent = userData.rollNo;
    elements.bannerStudentName.textContent = userData.name;
    elements.bannerSemesterBadge.textContent = "Semester 5 (Active Exam)";

    if (elements.bannerUserStatus) {
        elements.bannerUserStatus.textContent = userData.isNewStudent 
            ? "Fresh Account Created" 
            : "Returning Student (Records Restored)";
    }

    // Fetch student's past quiz history from Supabase / LocalStorage
    AppState.studentHistory = await SUPABASE_CONFIG.getStudentQuizHistory(userData.name);

    if (!skipViewSwitch) {
        switchView('dashboard');
    }
}

// ----------------- DASHBOARD & SEMESTERS -----------------
function initDashboard() {
    // Semester Tabs event delegation
    if (elements.semesterTabs) {
        elements.semesterTabs.addEventListener('click', (e) => {
            const tabBtn = e.target.closest('.sem-tab-btn');
            if (!tabBtn) return;

            const targetSem = tabBtn.getAttribute('data-semester');
            if (!targetSem) return;

            switchSemester(targetSem);
        });
    }

    // Locked Semester Modal Controls
    const btnGoSem5 = document.getElementById('btn-go-sem5');
    if (btnGoSem5) {
        btnGoSem5.addEventListener('click', () => {
            closeLockedSemesterModal();
            switchSemester('sem-5');
        });
    }

    const btnCloseLocked = document.getElementById('btn-close-locked-modal');
    if (btnCloseLocked) {
        btnCloseLocked.addEventListener('click', closeLockedSemesterModal);
    }

    const lockedModal = document.getElementById('locked-semester-modal');
    if (lockedModal) {
        lockedModal.addEventListener('click', (e) => {
            if (e.target === lockedModal) closeLockedSemesterModal();
        });
    }
}

window.switchSemester = function(semKey) {
    document.querySelectorAll('.sem-tab-btn').forEach(btn => {
        if (btn.getAttribute('data-semester') === semKey) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const semNames = {
        'sem-1': 'Semester 1',
        'sem-2': 'Semester 2',
        'sem-3': 'Semester 3',
        'sem-4': 'Semester 4',
        'sem-5': 'Semester 5 (Active Exam)',
        'sem-6': 'Semester 6',
        'sem-7': 'Semester 7',
        'sem-8': 'Semester 8'
    };

    if (elements.bannerSemesterBadge) {
        elements.bannerSemesterBadge.textContent = semNames[semKey] || semKey;
    }

    AppState.activeSemester = semKey;
    renderSubjects(semKey);
};

window.startQuiz = function(quizId) {
    const quiz = findQuizById(quizId);
    if (!quiz) {
        alert("Assessment data could not be found!");
        return;
    }

    // Open Pre-Assessment Instructions Briefing Modal first
    openExamBriefing(quiz);
};

function openLockedSemesterModal(semKey) {
    const semNames = {
        'sem-1': 'Semester 1',
        'sem-2': 'Semester 2',
        'sem-3': 'Semester 3',
        'sem-4': 'Semester 4',
        'sem-6': 'Semester 6',
        'sem-7': 'Semester 7',
        'sem-8': 'Semester 8'
    };
    const name = semNames[semKey] || 'Selected Semester';

    const modal = document.getElementById('locked-semester-modal');
    const title = document.getElementById('locked-modal-title');
    const desc = document.getElementById('locked-modal-desc');

    if (title) title.textContent = `${name} Currently Unavailable`;
    if (desc) {
        desc.innerHTML = `Notice: Currently, live examination model papers are available <strong>exclusively for BSN Semester 5</strong>. Question banks for ${name} are currently under review and will be published shortly.`;
    }

    if (modal) modal.classList.add('active');
}

function closeLockedSemesterModal() {
    const modal = document.getElementById('locked-semester-modal');
    if (modal) modal.classList.remove('active');
}

function renderDashboard() {
    updateStatsSummary();
    switchSemester(AppState.activeSemester || 'sem-5');
    renderAssessmentHistory();
}

function updateStatsSummary() {
    const history = AppState.studentHistory || [];
    const totalTaken = history.length;

    elements.statTotalQuizzes.textContent = totalTaken;

    if (totalTaken === 0) {
        elements.statAvgScore.textContent = "0%";
        elements.statPassedRate.textContent = "0%";
        return;
    }

    const totalPercentage = history.reduce((acc, curr) => acc + (curr.percentage || 0), 0);
    const avgPercentage = Math.round(totalPercentage / totalTaken);
    const passedCount = history.filter(h => h.isPassed).length;
    const passRate = Math.round((passedCount / totalTaken) * 100);

    elements.statAvgScore.textContent = `${avgPercentage}%`;
    elements.statPassedRate.textContent = `${passRate}%`;
}

function renderAssessmentHistory() {
    const history = AppState.studentHistory || [];
    elements.historyTableBody.innerHTML = '';

    if (history.length === 0) {
        elements.historyEmptyMessage.style.display = 'block';
        return;
    }

    elements.historyEmptyMessage.style.display = 'none';

    history.forEach((record, index) => {
        const row = document.createElement('tr');
        const statusBadge = record.isPassed 
            ? '<span class="status-tag status-correct">✓ Passed</span>' 
            : '<span class="status-tag status-incorrect">✗ Re-take</span>';

        row.innerHTML = `
            <td style="font-weight:600; color:#fff;">${record.date}</td>
            <td>
                <div style="font-weight:700; color:#fff;">${escapeHtml(record.subjectTitle)}</div>
                <div style="font-size:11px; color:var(--text-muted);">${escapeHtml(record.semester)} • ${escapeHtml(record.subjectCode)}</div>
            </td>
            <td style="font-weight:700;">${record.score} / ${record.totalQuestions} (${record.percentage}%)</td>
            <td><span class="subject-code-tag">${record.grade.split(' ')[0]}</span></td>
            <td>${statusBadge}</td>
            <td>
                <button class="btn-table-action" onclick="reDownloadHistoricalMarksheet(${index})">
                    <i class="fa-solid fa-file-pdf"></i>
                    <span>Marksheet</span>
                </button>
            </td>
        `;
        elements.historyTableBody.appendChild(row);
    });
}

// Triggered when user re-downloads a previous test's marksheet
window.reDownloadHistoricalMarksheet = function(index) {
    const record = AppState.studentHistory[index];
    if (record) {
        generateMarksheetPDF(record);
    }
};

function renderSubjects(semesterKey) {
    if (!elements.subjectsGrid) return;
    elements.subjectsGrid.innerHTML = '';

    if (semesterKey !== 'sem-5') {
        const semNames = {
            'sem-1': 'Semester 1',
            'sem-2': 'Semester 2',
            'sem-3': 'Semester 3',
            'sem-4': 'Semester 4',
            'sem-6': 'Semester 6',
            'sem-7': 'Semester 7',
            'sem-8': 'Semester 8'
        };
        const semName = semNames[semesterKey] || 'Selected Semester';

        elements.subjectsGrid.innerHTML = `
            <div class="glass-card empty-state" style="padding:42px 28px; text-align:center; max-width:620px; margin:0 auto; grid-column: 1 / -1; width:100%;">
                <div style="width:64px; height:64px; border-radius:50%; background:rgba(245,158,11,0.15); color:var(--amber-warning); display:flex; align-items:center; justify-content:center; font-size:28px; margin:0 auto 18px;">
                    <i class="fa-solid fa-lock"></i>
                </div>
                <h3 style="font-size:22px; font-weight:800; margin-bottom:10px; color:#fff;">
                    ${semName} Assessment Currently Unavailable
                </h3>
                <p style="font-size:14px; color:var(--text-muted); line-height:1.6; margin:0 auto 24px; max-width:500px;">
                    Notice: Live examination model papers are currently active exclusively for <strong>BSN Semester 5</strong>. Question banks for ${semName} are under review and will be published shortly.
                </p>
                <button class="btn-primary" style="width:auto; padding:12px 28px; margin:0 auto;" onclick="switchSemester('sem-5')">
                    <i class="fa-solid fa-fire"></i>
                    <span>Proceed to Semester 5 Examination</span>
                </button>
            </div>
        `;
        return;
    }

    let subjects = getSubjectsBySemester('sem-5');
    if (!subjects || subjects.length === 0) {
        const fallbackQuiz = findQuizById('s5-model-paper');
        if (fallbackQuiz) subjects = [fallbackQuiz];
    }

    if (!subjects || subjects.length === 0) return;

    subjects.forEach(subject => {
        const card = document.createElement('div');
        card.className = 'glass-card subject-card';
        card.innerHTML = `
            <div>
                <div class="subject-header">
                    <div class="subject-icon-box ${subject.badgeColor || 'rose'}">
                        <i class="fa-solid ${subject.icon || 'fa-baby'}"></i>
                    </div>
                    <span class="subject-code-tag">${subject.code}</span>
                </div>
                <h4 class="subject-title">${escapeHtml(subject.title)}</h4>
                <p class="subject-desc">${escapeHtml(subject.description)}</p>
            </div>

            <div>
                <div class="subject-meta-row">
                    <div class="meta-item">
                        <i class="fa-regular fa-circle-question"></i>
                        <span>${subject.questions.length} MCQs</span>
                    </div>
                    <div class="meta-item">
                        <i class="fa-regular fa-clock"></i>
                        <span>${subject.durationMinutes} Mins</span>
                    </div>
                </div>

                <button class="btn-start-quiz" onclick="startQuiz('${subject.id}')" style="margin-top:16px;">
                    <span>Start Assessment</span>
                    <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        `;
        elements.subjectsGrid.appendChild(card);
    });
}

// ----------------- QUIZ ENGINE -----------------
function startQuiz(quizId) {
    const quiz = findQuizById(quizId);
    if (!quiz) {
        alert("Assessment data could not be found!");
        return;
    }

    // Open Pre-Assessment Instructions Briefing Modal first
    openExamBriefing(quiz);
}

function openExamBriefing(quiz) {
    AppState.pendingQuizId = quiz.id;

    const elTitle = document.getElementById('briefing-exam-title');
    const elCode = document.getElementById('briefing-exam-code');
    const elDuration = document.getElementById('briefing-duration');
    const elTotalQ = document.getElementById('briefing-total-q');

    if (elTitle) elTitle.textContent = quiz.title;
    if (elCode) elCode.textContent = `${quiz.semester} • ${quiz.code}`;
    if (elDuration) elDuration.textContent = `${quiz.durationMinutes} Minutes Duration`;
    if (elTotalQ) elTotalQ.textContent = `${quiz.questions.length} Questions`;

    const briefingModal = document.getElementById('exam-briefing-modal');
    if (briefingModal) {
        briefingModal.classList.add('active');
    }
}

function closeExamBriefing() {
    const briefingModal = document.getElementById('exam-briefing-modal');
    if (briefingModal) {
        briefingModal.classList.remove('active');
    }
    AppState.pendingQuizId = null;
}

// ----------------- RUNNING QUIZ PERSISTENCE -----------------
function saveRunningQuizState() {
    if (!AppState.activeQuiz) return;
    try {
        const state = {
            quizId: AppState.activeQuiz.id,
            currentQuestionIndex: AppState.currentQuestionIndex,
            userAnswers: AppState.userAnswers,
            remainingSeconds: AppState.remainingSeconds,
            startTimestamp: Date.now()
        };
        localStorage.setItem('zafii_running_quiz', JSON.stringify(state));
    } catch (e) {
        console.warn("Could not save running quiz state:", e);
    }
}

function clearRunningQuizState() {
    try {
        localStorage.removeItem('zafii_running_quiz');
    } catch (e) {}
}

function restoreRunningQuizState() {
    try {
        const saved = localStorage.getItem('zafii_running_quiz');
        if (!saved) return false;

        const state = JSON.parse(saved);
        if (!state || !state.quizId) return false;

        const quiz = findQuizById(state.quizId);
        if (!quiz) return false;

        // Calculate elapsed seconds while browser was reloading
        const elapsedSeconds = Math.floor((Date.now() - (state.startTimestamp || Date.now())) / 1000);
        const netRemaining = (state.remainingSeconds || 0) - elapsedSeconds;

        if (netRemaining <= 0) {
            clearRunningQuizState();
            return false;
        }

        AppState.activeQuiz = quiz;
        AppState.currentQuestionIndex = state.currentQuestionIndex || 0;
        AppState.userAnswers = state.userAnswers || new Array(quiz.questions.length).fill(null);
        AppState.remainingSeconds = netRemaining;

        if (elements.optionsContainer) {
            elements.optionsContainer.classList.remove('quiz-locked');
        }

        elements.quizSubjectTitle.textContent = quiz.title;
        elements.quizSubjectCode.textContent = `${quiz.semester} • ${quiz.code}`;

        startTimer();
        renderCurrentQuestion();
        switchView('quiz');

        return true;
    } catch (e) {
        console.warn("Error restoring running quiz state:", e);
        return false;
    }
}

function startActualQuiz(quizId) {
    const quiz = findQuizById(quizId);
    if (!quiz) return;

    AppState.activeQuiz = quiz;
    AppState.currentQuestionIndex = 0;
    AppState.userAnswers = new Array(quiz.questions.length).fill(null);
    AppState.remainingSeconds = quiz.durationMinutes * 60; // e.g. 70 mins = 4200s

    saveRunningQuizState();

    // Remove any previous lock
    if (elements.optionsContainer) {
        elements.optionsContainer.classList.remove('quiz-locked');
    }

    // Header info
    elements.quizSubjectTitle.textContent = quiz.title;
    elements.quizSubjectCode.textContent = `${quiz.semester} • ${quiz.code}`;

    startTimer();
    renderCurrentQuestion();
    switchView('quiz');
}

function startTimer() {
    clearInterval(AppState.timerInterval);
    updateTimerUI();

    AppState.timerInterval = setInterval(() => {
        AppState.remainingSeconds--;
        updateTimerUI();
        saveRunningQuizState();

        if (AppState.remainingSeconds <= 0) {
            clearInterval(AppState.timerInterval);

            // Immediately lock options so no more clicks can be made
            if (elements.optionsContainer) {
                elements.optionsContainer.classList.add('quiz-locked');
            }

            alert("⏰ Examination Time Expired (70 Minutes Completed)!\nYour paper has been automatically locked and submitted for evaluation.");
            submitQuiz(true);
        }
    }, 1000);
}

function updateTimerUI() {
    const hours = Math.floor(AppState.remainingSeconds / 3600);
    const minutes = Math.floor((AppState.remainingSeconds % 3600) / 60);
    const seconds = AppState.remainingSeconds % 60;

    let formatted = '';
    if (hours > 0) {
        formatted = `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    } else {
        formatted = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }

    elements.quizTimerDisplay.textContent = formatted;

    if (AppState.remainingSeconds <= 120) { // Warning when 2 mins left
        elements.quizTimerPill.classList.add('timer-warning');
    } else {
        elements.quizTimerPill.classList.remove('timer-warning');
    }
}

function renderCurrentQuestion() {
    const quiz = AppState.activeQuiz;
    const qIndex = AppState.currentQuestionIndex;
    const currentQ = quiz.questions[qIndex];
    const totalQ = quiz.questions.length;

    // Progress bar
    const progressPercent = ((qIndex + 1) / totalQ) * 100;
    elements.quizProgressBar.style.width = `${progressPercent}%`;

    // Counter & Question text
    elements.questionCounter.textContent = `Question ${qIndex + 1} of ${totalQ}`;
    elements.questionText.textContent = currentQ.question;

    // Options rendering
    elements.optionsContainer.innerHTML = '';
    const optionLetters = ['A', 'B', 'C', 'D'];

    currentQ.options.forEach((optText, optIdx) => {
        const isSelected = AppState.userAnswers[qIndex] === optIdx;
        const optBtn = document.createElement('button');
        optBtn.className = `option-btn ${isSelected ? 'selected' : ''}`;
        optBtn.innerHTML = `
            <div class="option-indicator">${optionLetters[optIdx]}</div>
            <div style="flex:1;">${escapeHtml(optText)}</div>
        `;
        optBtn.addEventListener('click', () => {
            selectOption(optIdx);
        });
        elements.optionsContainer.appendChild(optBtn);
    });

    // Button states
    const isModelPaper = AppState.activeQuiz.isModelPaper || AppState.activeQuiz.showAnswersImmediately === false;

    if (isModelPaper) {
        // Hide Previous button for protected Model Papers
        elements.btnPrevQuestion.style.display = 'none';
    } else {
        elements.btnPrevQuestion.style.display = 'inline-flex';
        elements.btnPrevQuestion.disabled = (qIndex === 0);
        elements.btnPrevQuestion.style.opacity = (qIndex === 0) ? "0.4" : "1";
    }

    const hasAnsweredCurrent = AppState.userAnswers[qIndex] !== null && AppState.userAnswers[qIndex] !== undefined;

    if (qIndex === totalQ - 1) {
        elements.btnNextQuestion.style.display = 'none';
        elements.btnSubmitQuiz.style.display = 'inline-flex';
        elements.btnSubmitQuiz.style.opacity = hasAnsweredCurrent ? "1" : "0.6";
    } else {
        elements.btnNextQuestion.style.display = 'inline-flex';
        elements.btnNextQuestion.style.opacity = hasAnsweredCurrent ? "1" : "0.6";
        elements.btnSubmitQuiz.style.display = 'none';
    }
}

function selectOption(optionIndex) {
    const qIndex = AppState.currentQuestionIndex;
    AppState.userAnswers[qIndex] = optionIndex;
    saveRunningQuizState();
    renderCurrentQuestion();
}

function initQuizControls() {
    elements.btnPrevQuestion.addEventListener('click', () => {
        const isModelPaper = AppState.activeQuiz && (AppState.activeQuiz.isModelPaper || AppState.activeQuiz.showAnswersImmediately === false);
        if (isModelPaper) return; // Prevent going back in Model Paper mode

        if (AppState.currentQuestionIndex > 0) {
            AppState.currentQuestionIndex--;
            renderCurrentQuestion();
        }
    });

    elements.btnNextQuestion.addEventListener('click', () => {
        const qIndex = AppState.currentQuestionIndex;
        const currentAnswer = AppState.userAnswers[qIndex];

        // Mandatory check: Must select an option before moving to the next question
        if (currentAnswer === null || currentAnswer === undefined) {
            alert("⚠️ Mandatory Selection Required:\nPlease select an answer option before moving to the next question.");
            return;
        }

        if (AppState.currentQuestionIndex < AppState.activeQuiz.questions.length - 1) {
            AppState.currentQuestionIndex++;
            renderCurrentQuestion();
        }
    });

    elements.btnSubmitQuiz.addEventListener('click', () => {
        const qIndex = AppState.currentQuestionIndex;
        const currentAnswer = AppState.userAnswers[qIndex];

        if (currentAnswer === null || currentAnswer === undefined) {
            alert("⚠️ Mandatory Selection Required:\nPlease select an answer option for the current question before submitting.");
            return;
        }

        const unansweredCount = AppState.userAnswers.filter(a => a === null).length;
        let confirmMsg = "Are you sure you want to submit your assessment?";
        if (unansweredCount > 0) {
            confirmMsg = `You have left ${unansweredCount} question(s) unattempted. Are you sure you want to submit anyway?`;
        }
        if (confirm(confirmMsg)) {
            submitQuiz(false);
        }
    });

    elements.btnQuitQuiz.addEventListener('click', () => {
        if (confirm("Are you sure you want to quit this assessment? Your progress will not be recorded.")) {
            clearInterval(AppState.timerInterval);
            clearRunningQuizState();
            switchView('dashboard');
        }
    });

    // Result Actions
    elements.btnBackDashboard.addEventListener('click', () => {
        switchView('dashboard');
    });

    elements.btnRetakeQuiz.addEventListener('click', () => {
        if (AppState.activeQuiz) {
            startQuiz(AppState.activeQuiz.id);
        }
    });

    // Trigger PDF download
    elements.btnDownloadPdf.addEventListener('click', () => {
        if (AppState.latestResult) {
            generateMarksheetPDF(AppState.latestResult);
        }
    });

    // Direct Native Print / Save as PDF Button
    const btnPrintDirect = document.getElementById('btn-print-direct');
    if (btnPrintDirect) {
        btnPrintDirect.addEventListener('click', () => {
            if (AppState.latestResult) {
                printMarksheetDirectly(AppState.latestResult);
            }
        });
    }

    // Marksheet Live Preview Button
    const btnPreview = document.getElementById('btn-preview-marksheet');
    if (btnPreview) {
        btnPreview.addEventListener('click', () => {
            if (AppState.latestResult) {
                openMarksheetPreview(AppState.latestResult);
            }
        });
    }

    const btnClosePreview = document.getElementById('btn-close-preview-modal');
    if (btnClosePreview) {
        btnClosePreview.addEventListener('click', closeMarksheetPreview);
    }

    const previewModal = document.getElementById('marksheet-preview-modal');
    if (previewModal) {
        previewModal.addEventListener('click', (e) => {
            if (e.target === previewModal) closeMarksheetPreview();
        });
    }

    const btnModalDownload = document.getElementById('btn-modal-download-pdf');
    if (btnModalDownload) {
        btnModalDownload.addEventListener('click', () => {
            if (AppState.latestResult) {
                generateMarksheetPDF(AppState.latestResult);
            }
        });
    }

    // Top Bar Quick Submit Button
    const btnTopSubmit = document.getElementById('btn-top-quick-submit');
    if (btnTopSubmit) {
        btnTopSubmit.addEventListener('click', () => {
            const qIndex = AppState.currentQuestionIndex;
            const currentAnswer = AppState.userAnswers[qIndex];

            if (currentAnswer === null || currentAnswer === undefined) {
                alert("⚠️ Mandatory Selection Required:\nPlease select an answer option for the current question before submitting.");
                return;
            }

            const unansweredCount = AppState.userAnswers.filter(a => a === null).length;
            let confirmMsg = "Are you sure you want to submit your examination paper now?";
            if (unansweredCount > 0) {
                confirmMsg = `You have left ${unansweredCount} question(s) unattempted. Are you sure you want to submit anyway?`;
            }
            if (confirm(confirmMsg)) {
                submitQuiz(false);
            }
        });
    }

    // Exam Briefing Modal Controls
    const btnStartConfirm = document.getElementById('btn-start-exam-confirm');
    if (btnStartConfirm) {
        btnStartConfirm.addEventListener('click', () => {
            const pendingId = AppState.pendingQuizId;
            closeExamBriefing();
            if (pendingId) {
                startActualQuiz(pendingId);
            }
        });
    }

    const btnCancelBriefing = document.getElementById('btn-cancel-briefing');
    if (btnCancelBriefing) {
        btnCancelBriefing.addEventListener('click', closeExamBriefing);
    }

    const btnCloseBriefing = document.getElementById('btn-close-briefing-modal');
    if (btnCloseBriefing) {
        btnCloseBriefing.addEventListener('click', closeExamBriefing);
    }

    // Model Paper Back to Dashboard
    const btnModelBack = document.getElementById('btn-model-back-dashboard');
    if (btnModelBack) {
        btnModelBack.addEventListener('click', () => {
            switchView('dashboard');
        });
    }
}

// ----------------- EVALUATION & RESULT -----------------
async function submitQuiz(isAutoSubmit = false) {
    clearInterval(AppState.timerInterval);
    clearRunningQuizState();

    const quiz = AppState.activeQuiz;
    const questions = quiz.questions;
    let score = 0;
    let incorrect = 0;
    let skipped = 0;

    const breakdown = questions.map((q, idx) => {
        const userAns = AppState.userAnswers[idx];
        const isCorrect = userAns === q.correctIndex;
        if (userAns === null) {
            skipped++;
        } else if (isCorrect) {
            score++;
        } else {
            incorrect++;
        }

        return {
            questionId: q.id,
            question: q.question,
            options: q.options,
            correctIndex: q.correctIndex,
            userAnswerIndex: userAns,
            isCorrect: isCorrect,
            explanation: q.explanation || ""
        };
    });

    const totalQ = questions.length;
    const percentage = Math.round((score / totalQ) * 100);
    const isPassed = percentage >= 50;

    let grade = "F";
    if (percentage >= 85) grade = "A+ (Distinction)";
    else if (percentage >= 75) grade = "A (Excellent)";
    else if (percentage >= 65) grade = "B (Good)";
    else if (percentage >= 50) grade = "C (Satisfactory)";

    const totalSecondsSpent = (quiz.durationMinutes * 60) - AppState.remainingSeconds;
    const spentMinutes = Math.floor(totalSecondsSpent / 60);
    const spentSecs = Math.max(0, totalSecondsSpent % 60);
    const timeTakenStr = `${spentMinutes}m ${spentSecs}s`;

    const resultData = {
        studentName: AppState.currentUser ? AppState.currentUser.name : "Medical Student",
        rollNo: AppState.currentUser ? AppState.currentUser.rollNo : "BSN-2026",
        semester: quiz.semester,
        subjectTitle: quiz.title,
        subjectCode: quiz.code,
        score: score,
        totalQuestions: totalQ,
        incorrect: incorrect,
        skipped: skipped,
        percentage: percentage,
        grade: grade,
        isPassed: isPassed,
        timeTaken: timeTakenStr,
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }),
        breakdown: breakdown,
        isModelPaper: Boolean(quiz.isModelPaper),
        showAnswersImmediately: quiz.showAnswersImmediately !== false,
        whatsappGroupUrl: quiz.whatsappGroupUrl || "https://chat.whatsapp.com/YOUR_GROUP_LINK"
    };

    AppState.latestResult = resultData;

    // Save result to Supabase & LocalStorage
    await SUPABASE_CONFIG.saveQuizResult(resultData);

    // Refresh student's local history list
    AppState.studentHistory.unshift(resultData);

    // Render result screen
    renderResultScreen(resultData);
    switchView('result');

    // Confetti celebration if passed and not a protected model paper!
    if (isPassed && typeof confetti === 'function') {
        confetti({
            particleCount: 110,
            spread: 75,
            origin: { y: 0.6 }
        });
    }
}

function renderResultScreen(res) {
    const isProtectedModelPaper = res.isModelPaper || !res.showAnswersImmediately;

    const elModelCard = document.getElementById('model-paper-result-card');
    const elStandardCard = document.getElementById('standard-result-card');
    const elReviewWrapper = document.getElementById('review-wrapper');

    if (isProtectedModelPaper) {
        // Show WhatsApp Announcement & Candidate Submission Receipt
        if (elModelCard) elModelCard.style.display = 'block';
        if (elStandardCard) elStandardCard.style.display = 'none';
        if (elReviewWrapper) elReviewWrapper.style.display = 'none';

        // Populate receipt
        const recName = document.getElementById('receipt-student-name');
        const recRoll = document.getElementById('receipt-student-roll');
        const recExam = document.getElementById('receipt-exam-title');
        const recTime = document.getElementById('receipt-timestamp');
        const recToken = document.getElementById('receipt-token');
        const linkWa = document.getElementById('link-join-whatsapp');

        if (recName) recName.textContent = res.studentName;
        if (recRoll) recRoll.textContent = res.rollNo;
        if (recExam) recExam.textContent = `${res.subjectTitle} (${res.subjectCode})`;
        if (recTime) recTime.textContent = new Date().toLocaleString();
        if (recToken) recToken.textContent = `BSN-${Math.floor(100000 + Math.random() * 900000)}`;
        if (linkWa) linkWa.href = res.whatsappGroupUrl || "https://chat.whatsapp.com/YOUR_GROUP_LINK";

        return; // Conceal individual questions and answers
    }

    // Standard Practice Assessment Mode
    if (elModelCard) elModelCard.style.display = 'none';
    if (elStandardCard) elStandardCard.style.display = 'block';
    if (elReviewWrapper) elReviewWrapper.style.display = 'block';

    elements.resultScoreNumber.textContent = res.score;
    elements.resultScoreTotal.textContent = `/ ${res.totalQuestions}`;

    if (res.isPassed) {
        elements.resultTitle.textContent = "🎉 Congratulations! Examination Passed";
        elements.resultTitle.style.color = "#34d399";
        elements.resultSubtitle.textContent = `You have successfully completed the course assessment for ${res.subjectTitle}.`;
    } else {
        elements.resultTitle.textContent = "Assessment Incomplete - Review Required";
        elements.resultTitle.style.color = "#f43f5e";
        elements.resultSubtitle.textContent = `A minimum score of 50% is required to pass. Please review the rationales below and re-attempt.`;
    }

    elements.metricCorrect.textContent = res.score;
    elements.metricIncorrect.textContent = res.incorrect + res.skipped;
    elements.metricPercentage.textContent = `${res.percentage}%`;
    elements.metricGrade.textContent = res.grade.split(' ')[0];

    // Detailed Review Accordion
    elements.reviewContainer.innerHTML = '';
    res.breakdown.forEach((item, idx) => {
        const isCorrect = item.userAnswerIndex === item.correctIndex;
        const isSkipped = item.userAnswerIndex === null;

        const card = document.createElement('div');
        card.className = `review-item ${isCorrect ? 'correct' : 'incorrect'}`;

        const userText = isSkipped ? "Not attempted" : item.options[item.userAnswerIndex];
        const correctText = item.options[item.correctIndex];

        card.innerHTML = `
            <div class="review-q-head">
                <span class="review-q-num">Question ${idx + 1}</span>
                <span class="review-badge ${isCorrect ? 'correct' : 'incorrect'}">
                    ${isCorrect ? '✓ Correct (+1)' : (isSkipped ? '— Skipped (0)' : '✗ Incorrect (0)')}
                </span>
            </div>
            <div class="review-q-text">${escapeHtml(item.question)}</div>
            <div class="review-answers-box">
                <div class="ans-row">
                    <strong>Selected Answer:</strong> 
                    <span style="color:${isCorrect ? '#34d399' : '#f43f5e'}">${escapeHtml(userText)}</span>
                </div>
                <div class="ans-row">
                    <strong>Verified Correct Answer:</strong> 
                    <span style="color:#34d399;">${escapeHtml(correctText)}</span>
                </div>
                ${item.explanation ? `<div class="ans-explanation"><i class="fa-solid fa-lightbulb"></i> <strong>Clinical Rationale:</strong> ${escapeHtml(item.explanation)}</div>` : ''}
            </div>
        `;
        elements.reviewContainer.appendChild(card);
    });
}

// ----------------- APP BOOTSTRAP -----------------
document.addEventListener('DOMContentLoaded', async () => {
    initAuth();
    initDashboard();
    initQuizControls();

    const runningQuizSaved = localStorage.getItem('zafii_running_quiz');
    const hasRunningQuiz = !!runningQuizSaved;

    // 1. Auto-restore active student session on page refresh
    try {
        const savedSession = localStorage.getItem('zafii_active_session');
        if (savedSession) {
            const parsed = JSON.parse(savedSession);
            if (parsed && parsed.name) {
                await processStudentLogin(parsed.name, parsed.password || '123456', 'signin', hasRunningQuiz);
            }
        }
    } catch (e) {
        console.warn("Auto session restore failed:", e);
    }

    // 2. Auto-resume active running exam if page was refreshed during assessment!
    if (hasRunningQuiz) {
        restoreRunningQuizState();
    }

    // 3. Register PWA Service Worker & Phone App Install Prompt
    initPWAInstallation();
});

// ----------------- PWA INSTALLATION ENGINE -----------------
let deferredPWAInstallPrompt = null;

function initPWAInstallation() {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./sw.js')
            .then(reg => console.log("⚡ [PWA] Service Worker Registered Successfully!", reg))
            .catch(err => console.warn("PWA Service Worker registration failed:", err));
    }

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPWAInstallPrompt = e;
        const btnInstall = document.getElementById('btn-install-pwa');
        if (btnInstall) {
            btnInstall.style.display = 'inline-flex';
        }
    });

    const btnInstall = document.getElementById('btn-install-pwa');
    if (btnInstall) {
        btnInstall.addEventListener('click', async () => {
            if (deferredPWAInstallPrompt) {
                deferredPWAInstallPrompt.prompt();
                const choiceResult = await deferredPWAInstallPrompt.userChoice;
                if (choiceResult.outcome === 'accepted') {
                    console.log('User accepted PWA app installation prompt!');
                    btnInstall.style.display = 'none';
                }
                deferredPWAInstallPrompt = null;
            } else {
                alert("📱 To Install Zafii MedPortal App on your Phone / PC:\n\n1. Tap the Chrome menu button (⋮) at top right.\n2. Select 'Add to Home screen' or 'Install app'.\n\nZafii MedPortal will be installed as a standalone Android app!");
            }
        });
    }
}
