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
    historySection: document.querySelector('.history-section'),

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
    const adminView = document.getElementById('admin-view');
    if (adminView) adminView.classList.remove('active');

    if (viewName === 'login') {
        elements.loginView.classList.add('active');
    } else if (viewName === 'dashboard') {
        elements.dashboardView.classList.add('active');
        renderDashboard();
    } else if (viewName === 'quiz') {
        elements.quizView.classList.add('active');
    } else if (viewName === 'result') {
        elements.resultView.classList.add('active');
    } else if (viewName === 'admin') {
        if (adminView) adminView.classList.add('active');
    }

    if (window.location.hash) {
        try {
            history.replaceState(null, document.title, window.location.pathname + window.location.search);
        } catch (e) {}
    }
    if (document.activeElement && document.activeElement !== document.body) {
        try { document.activeElement.blur(); } catch (e) {}
    }

    const resetScroll = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    };

    resetScroll();
    requestAnimationFrame(resetScroll);
    setTimeout(resetScroll, 50);
    setTimeout(resetScroll, 150);
    setTimeout(resetScroll, 300);
}

let currentAuthMode = 'signin'; // 'signin' or 'signup'

// ----------------- AUTHENTICATION & USER MANAGEMENT -----------------
function initAuth() {
    const tabSignIn = document.getElementById('tab-auth-signin');
    const tabSignUp = document.getElementById('tab-auth-signup');
    const btnSubmitAuth = document.getElementById('btn-submit-auth');

    const lblPassword = document.getElementById('lbl-password-input');
    const lblName = document.getElementById('lbl-name-input');
    const groupFullName = document.getElementById('student-fullname-group');
    const inputFullName = document.getElementById('student-fullname-input');

    // Password Eye Visibility Toggle Listener
    const toggles = [
        { btnId: 'btn-toggle-student-password', inputId: 'student-password-input', iconId: 'icon-student-password' },
        { btnId: 'btn-toggle-admin-passcode', inputId: 'admin-passcode-input', iconId: 'icon-admin-passcode' }
    ];

    toggles.forEach(({ btnId, inputId, iconId }) => {
        const btn = document.getElementById(btnId);
        const input = document.getElementById(inputId);
        const icon = document.getElementById(iconId);

        if (btn && input && icon) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const isPassword = input.type === 'password';
                input.type = isPassword ? 'text' : 'password';
                if (icon.tagName === 'I') {
                    icon.className = isPassword ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye';
                    icon.style.color = isPassword ? 'var(--cyan-primary)' : 'var(--text-muted)';
                } else {
                    icon.textContent = isPassword ? '🙈' : '👁️';
                }
            });
        }
    });

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
            if (lblPassword) lblPassword.innerHTML = `<i class="fa-solid fa-lock" style="color:var(--cyan-primary); margin-right:4px;"></i> Account Password / PIN`;
            if (lblName) lblName.innerHTML = `<i class="fa-solid fa-envelope" style="color:var(--cyan-primary); margin-right:4px;"></i> Email Address`;
            if (elements.inputPassword) {
                elements.inputPassword.placeholder = "••••••••";
                elements.inputPassword.required = false;
            }
            if (elements.inputName) elements.inputName.placeholder = "e.g. student@gmail.com";
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
                btnSubmitAuth.innerHTML = `<span>Create Account & Register</span> <i class="fa-solid fa-user-plus"></i>`;
            }
            if (lblPassword) lblPassword.innerHTML = `<i class="fa-solid fa-lock" style="color:var(--cyan-primary); margin-right:4px;"></i> Create Password / PIN <span style="color:#f43f5e; font-weight:800;">*</span>`;
            if (lblName) lblName.innerHTML = `<i class="fa-solid fa-envelope" style="color:var(--cyan-primary); margin-right:4px;"></i> Email Address <span style="color:#f43f5e; font-weight:800;">*</span>`;
            if (elements.inputPassword) {
                elements.inputPassword.placeholder = "•••••••• (Create Password)";
                elements.inputPassword.required = true;
            }
            if (elements.inputName) elements.inputName.placeholder = "e.g. student@gmail.com";
        });
    }

    // Unified form submit handler (handles button click & Enter key submission without double firing)
    if (elements.loginForm) {
        elements.loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const email = elements.inputName ? elements.inputName.value.trim() : '';
            const password = elements.inputPassword ? elements.inputPassword.value.trim() : '';

            if (!email) {
                alert("Please enter your Email Address.");
                return;
            }

            await processStudentLogin(email, password, currentAuthMode, false);
        });
    }

    // Unified Google / Gmail Sign-In Handler
    const btnGoogleLogin = document.getElementById('btn-google-login');
    const btnAssignmentGoogle = document.getElementById('btn-assignment-google');
    const btnShowFullPortal = document.getElementById('btn-show-full-portal');
    const assignmentCard = document.getElementById('assignment-landing-card');
    const fullPortalCard = document.getElementById('full-portal-login-card');

    // Default State: Full Portal Sign In / Sign Up Card is active
    if (assignmentCard && fullPortalCard) {
        assignmentCard.style.display = 'none';
        fullPortalCard.style.display = 'block';
    }

    if (btnShowFullPortal && assignmentCard && fullPortalCard) {
        btnShowFullPortal.addEventListener('click', () => {
            assignmentCard.style.display = 'none';
            fullPortalCard.style.display = 'block';
        });
    }

    async function handleGoogleSignIn(isAssignmentMode = false) {
        if (SUPABASE_CONFIG.client) {
            try {
                const { error } = await SUPABASE_CONFIG.client.auth.signInWithOAuth({
                    provider: 'google',
                    options: {
                        redirectTo: window.location.origin + window.location.pathname
                    }
                });
                if (!error) return; // Supabase OAuth redirecting...
                console.warn("Supabase Google OAuth notice:", error.message);
            } catch (e) {
                console.warn("Google OAuth exception:", e);
            }
        }

        // Direct candidate prompt or use name typed in input box
        let candidateInput = elements.inputName ? elements.inputName.value.trim() : '';

        if (!candidateInput) {
            candidateInput = prompt("🌐 Sign in with Google / Gmail Account:\n\nEnter your Candidate Full Name or Gmail Address to verify identity and sign in:", "student@gmail.com");
        }

        if (candidateInput && candidateInput.trim()) {
            const cleanInput = candidateInput.trim().toLowerCase();
            const isAdmin = cleanInput.includes('zafiione6119@gmail') || 
                            cleanInput.includes('saadalimaxxup02@gmail') || 
                            cleanInput.includes('huzaifamushtaqahmed');

            await processStudentLogin(candidateInput.trim(), 'google_oauth_verified', 'signup');
            
            if (isAssignmentMode && !isAdmin) {
                setTimeout(() => {
                    startQuiz('PED-501-MODEL');
                }, 300);
            }
        }
    }

    if (btnGoogleLogin) {
        btnGoogleLogin.addEventListener('click', () => handleGoogleSignIn(false));
    }

    if (btnAssignmentGoogle) {
        btnAssignmentGoogle.addEventListener('click', () => handleGoogleSignIn(true));
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

// Helper function to update all Student UI Header & Banner elements
function updateUIWithUserData(userData) {
    if (!userData) return;

    if (!userData.accountId || userData.accountId.length !== 8 || isNaN(userData.accountId)) {
        userData.accountId = window.generateAccountId ? window.generateAccountId() : Math.floor(10000000 + Math.random() * 90000000).toString();
    }

    AppState.currentUser = userData;
    AppState.activeSemester = "sem-5";

    const name = userData.name || userData.email || 'Medical Scholar';
    const rollNo = userData.rollNo || 'BSN-2026-0000';
    const accountId = userData.accountId;
    const email = userData.email || (userData.name && userData.name.includes('@') ? userData.name : '');
    const initials = name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || "ST";

    if (elements.navUserAvatar) elements.navUserAvatar.textContent = initials;
    if (elements.navStudentName) elements.navStudentName.textContent = name;
    if (elements.navStudentRoll) elements.navStudentRoll.textContent = rollNo;
    
    const elNavAccId = document.getElementById('nav-student-account-id');
    if (elNavAccId) elNavAccId.innerHTML = `<i class="fa-solid fa-key" style="font-size:10px; margin-right:3px;"></i> ID: ${accountId}`;

    const elNavEmail = document.getElementById('nav-student-email');
    if (elNavEmail) elNavEmail.textContent = email ? `(${email})` : '';

    if (elements.bannerStudentName) elements.bannerStudentName.textContent = name;
    
    const elBannerRollBadge = document.getElementById('banner-student-roll-badge');
    if (elBannerRollBadge) elBannerRollBadge.textContent = rollNo;

    const elBannerAccId = document.getElementById('banner-student-account-id');
    if (elBannerAccId) elBannerAccId.textContent = accountId;

    const elBannerEmail = document.getElementById('banner-student-email');
    if (elBannerEmail) elBannerEmail.textContent = email || 'N/A';

    if (elements.bannerSemesterBadge) {
        elements.bannerSemesterBadge.textContent = "Semester 5 (Active Exam)";
    }

    if (elements.bannerUserStatus) {
        elements.bannerUserStatus.textContent = userData.isNewStudent 
            ? "Fresh Account Created" 
            : "Returning Student (Records Restored)";
    }

    const elBtnNavAdmin = document.getElementById('btn-nav-admin');
    if (elBtnNavAdmin) elBtnNavAdmin.style.display = 'inline-flex';
}

// Function to show Roll Number & Verification Badge Popup with [X] close button
function showRollNumberPopup(userObj, callback) {
    if (!userObj.accountId) {
        userObj.accountId = window.generateAccountId ? window.generateAccountId() : "8A92F4K7";
    }
    updateUIWithUserData(userObj);

    const modal = document.getElementById('roll-number-popup-modal');
    const elName = document.getElementById('popup-student-name');
    const elRoll = document.getElementById('popup-student-roll');
    const elAccId = document.getElementById('popup-student-account-id');
    const elEmail = document.getElementById('popup-student-email');
    const btnClose = document.getElementById('btn-close-roll-popup');
    const btnConfirm = document.getElementById('btn-confirm-roll-popup');

    if (elName) elName.textContent = userObj.name || 'Medical Scholar';
    if (elRoll) elRoll.textContent = userObj.rollNo || 'BSN-2026-0000';
    if (elAccId) elAccId.textContent = userObj.accountId;
    if (elEmail) elEmail.textContent = userObj.email || userObj.name || '-';

    if (modal) {
        modal.classList.add('active');
        modal.onclick = (e) => {
            if (e.target === modal) closeHandler();
        };
    }

    const closeHandler = async () => {
        if (modal) modal.classList.remove('active');
        AppState.studentHistory = await SUPABASE_CONFIG.getStudentQuizHistory(userObj.name);
        switchView('dashboard');
        if (callback) callback();
    };

    if (btnClose) btnClose.onclick = closeHandler;
    if (btnConfirm) btnConfirm.onclick = closeHandler;
}

// Function to open Student Full Name Setup Modal for new accounts
function openNameSetupModal(userObj, callback) {
    if (!userObj.accountId) {
        userObj.accountId = window.generateAccountId ? window.generateAccountId() : "8A92F4K7";
    }
    const modal = document.getElementById('student-name-setup-modal');
    const input = document.getElementById('setup-student-name-input');
    const btnSave = document.getElementById('btn-save-student-name');

    if (modal) modal.classList.add('active');
    if (input) {
        input.value = (userObj.name && !userObj.name.includes('@')) ? userObj.name : '';
        setTimeout(() => input.focus(), 200);
    }

    const saveHandler = async () => {
        const enteredName = input ? input.value.trim() : '';
        if (!enteredName) {
            alert("Please enter your Full Student Name.");
            return;
        }

        // Generate a new random roll number if missing
        if (!userObj.rollNo || userObj.rollNo === 'BSN-2026-0000') {
            userObj.rollNo = "BSN-2026-" + Math.floor(1000 + Math.random() * 9000);
        }

        userObj.name = enteredName;
        userObj.needsNameSetup = false;
        userObj.isNewStudent = true;

        // Save permanently to Supabase and LocalStorage
        await SUPABASE_CONFIG.saveStudentProfile(userObj);

        try {
            localStorage.setItem('zafii_active_session', JSON.stringify(userObj));
        } catch (e) {}

        updateUIWithUserData(userObj);

        if (modal) modal.classList.remove('active');

        if (callback) callback(userObj);
    };

    if (btnSave) btnSave.onclick = saveHandler;

    if (input) {
        input.onkeypress = (e) => {
            if (e.key === 'Enter') saveHandler();
        };
    }
}

// Handles New vs Existing Student Profiles with Unique Email Authentication
async function processStudentLogin(studentInput, password = '', authMode = 'signin', skipViewSwitch = false, providedFullName = '') {
    const rawInput = studentInput.trim();
    if (!rawInput) {
        alert("Please enter your Email Address.");
        return;
    }

    let userEmail = rawInput.toLowerCase().trim();
    if (!userEmail.includes('@')) {
        userEmail = userEmail.replace(/\s+/g, '.') + '@gmail.com';
    } else {
        userEmail = userEmail.replace(/\s+/g, '');
    }

    // Check if student exists in Supabase or LocalStorage by unique email
    const check = await SUPABASE_CONFIG.getStudentProfile(userEmail, userEmail);
    let userData = null;

    if (check.isNew || !check.profile) {
        // NEW STUDENT REGISTRATION (Sign Up / Google OAuth / Direct Email)
        if (authMode === 'signin' && password !== 'google_oauth_verified') {
            alert(`⚠️ Account Not Found:\n\nNo account is registered with email '${userEmail}'. Please click the 'Sign Up' tab above to create your student account.`);
            return;
        }
        if (authMode === 'signup' && password !== 'google_oauth_verified') {
            if (!password || !password.trim()) {
                alert("⚠️ Password Required:\n\nPlease create a password to complete your account registration.");
                return;
            }
        }

        // Generate permanent unique roll number
        const generatedRoll = "BSN-2026-" + Math.floor(1000 + Math.random() * 9000);
        const isNameProvided = providedFullName && !providedFullName.includes('@') && password !== 'google_oauth_verified';
        const initialName = isNameProvided ? providedFullName.trim() : '';

        userData = {
            name: initialName,
            email: userEmail,
            rollNo: generatedRoll,
            accountId: window.generateAccountId ? window.generateAccountId() : "8A92F4K7",
            password: password || '12345678',
            semester: "Semester 5",
            semesterKey: "sem-5",
            createdAt: new Date().toISOString(),
            isNewStudent: true,
            needsNameSetup: !isNameProvided || !initialName
        };

        updateUIWithUserData(userData);

        if (!isNameProvided || !initialName) {
            openNameSetupModal(userData, (updatedUser) => {
                showRollNumberPopup(updatedUser);
            });
        } else {
            await SUPABASE_CONFIG.saveStudentProfile(userData);
            try {
                localStorage.setItem('zafii_active_session', JSON.stringify(userData));
            } catch (e) {}
            showRollNumberPopup(userData);
        }
        return;

    } else {
        // EXISTING STUDENT (Returning Candidate - Strict Password Authentication Required)
        if (password !== 'google_oauth_verified') {
            const storedPassword = check.profile.password || '12345678';
            if (!password || (storedPassword && password !== storedPassword)) {
                if (authMode === 'signup') {
                    alert(`❌ Account Already Registered:\n\nAn account with email '${userEmail}' is already registered.\n\nTo access this account, please click the 'Sign In' tab and enter your correct password.`);
                } else {
                    alert(`❌ Incorrect Password:\n\nThe password entered for '${userEmail}' is incorrect. Please enter your correct password to sign in.`);
                }
                return;
            }

            if (authMode === 'signup') {
                alert(`ℹ️ Account Already Registered:\n\nAn account with email '${userEmail}' is already registered with Roll Number (${check.profile.rollNo}). Password verified cleanly, logging in...`);
            }
        }

        userData = {
            ...check.profile,
            email: userEmail || check.profile.email || '',
            semester: "Semester 5",
            semesterKey: "sem-5",
            isNewStudent: false
        };

        // If existing profile lacks rollNo or accountId, assign permanent unique ones
        if (!userData.rollNo || userData.rollNo === 'BSN-2026-0000' || !userData.accountId) {
            if (!userData.rollNo || userData.rollNo === 'BSN-2026-0000') {
                userData.rollNo = "BSN-2026-" + Math.floor(1000 + Math.random() * 9000);
            }
            if (!userData.accountId) {
                userData.accountId = window.generateAccountId ? window.generateAccountId() : "8A92F4K7";
            }
            await SUPABASE_CONFIG.saveStudentProfile(userData);
        }

        try {
            localStorage.setItem('zafii_active_session', JSON.stringify(userData));
        } catch (e) {}

        updateUIWithUserData(userData);

        // Fetch student's past quiz history from Supabase / LocalStorage
        AppState.studentHistory = await SUPABASE_CONFIG.getStudentQuizHistory(userData.name);

        // Check if name setup is needed
        if (!userData.name || userData.name.includes('@') || userData.needsNameSetup) {
            openNameSetupModal(userData, (updatedUser) => {
                showRollNumberPopup(updatedUser);
            });
        } else {
            showRollNumberPopup(userData);
        }
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

// Live Exam Access Window Configuration (4 Sep 6:00 PM PKT to 5 Sep 6:00 PM PKT)
const EXAM_WINDOW = {
    // 04 Sep 2026 18:00:00 PKT (UTC+5)
    startTime: new Date('2026-09-04T18:00:00+05:00').getTime(),
    // 05 Sep 2026 18:00:00 PKT (UTC+5)
    endTime: new Date('2026-09-05T18:00:00+05:00').getTime()
};

window.isUserAdmin = function() {
    const userName = (AppState.currentUser?.name || '').trim().toLowerCase();
    const userEmail = (AppState.currentUser?.email || '').trim().toLowerCase();
    return userEmail.includes('zafiione6119@gmail') ||
           userName.includes('zafiione6119@gmail') ||
           userEmail.includes('saadalimaxxup02@gmail') ||
           userName.includes('saadalimaxxup02@gmail') ||
           userEmail.includes('huzaifamushtaqahmed') ||
           userName.includes('huzaifamushtaqahmed');
};

function checkExamWindowStatus() {
    const isTimerHidden = localStorage.getItem('zafii_exam_timer_hidden') === 'true';
    const countdownCard = document.getElementById('exam-countdown-card');
    const btnStart = document.getElementById('btn-pediatric-exam-start');

    if (isTimerHidden) {
        if (countdownCard) countdownCard.style.display = 'none';

        if (btnStart) {
            btnStart.disabled = false;
            btnStart.style.opacity = '1';
            btnStart.style.cursor = 'pointer';
            btnStart.innerHTML = `<span>Start Assessment</span> <i class="fa-solid fa-arrow-right"></i>`;
        }
        return { isAvailable: true, status: 'UNRESTRICTED' };
    }

    if (countdownCard) countdownCard.style.display = 'block';

    const now = Date.now();
    const elTimerText = document.getElementById('live-exam-timer-text');
    const isAuthorizedAdmin = window.isUserAdmin();

    if (now < EXAM_WINDOW.startTime) {
        const diff = EXAM_WINDOW.startTime - now;
        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        const timeStr = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (elTimerText) elTimerText.innerHTML = `⏳ Exam Opens In: <strong style="color:var(--cyan-primary); font-size:13.5px;">${timeStr}</strong> (06:00 PM PKT)`;
        
        if (btnStart && !isAuthorizedAdmin) {
            btnStart.disabled = true;
            btnStart.style.opacity = '0.6';
            btnStart.style.cursor = 'not-allowed';
            btnStart.innerHTML = `<i class="fa-solid fa-lock"></i> <span>Opens Today at 6:00 PM PKT</span>`;
        } else if (btnStart && isAuthorizedAdmin) {
            btnStart.disabled = false;
            btnStart.style.opacity = '1';
            btnStart.style.cursor = 'pointer';
            btnStart.innerHTML = `<i class="fa-solid fa-user-shield"></i> <span>Admin Test Access</span>`;
        }
        return { isAvailable: isAuthorizedAdmin, status: 'NOT_OPEN_YET' };
    } else if (now >= EXAM_WINDOW.startTime && now <= EXAM_WINDOW.endTime) {
        const diff = EXAM_WINDOW.endTime - now;
        const hrs = Math.floor(diff / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        const timeStr = `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

        if (elTimerText) elTimerText.innerHTML = `🔥 LIVE ACTIVE | Closes In: <strong style="color:#25d366; font-size:13.5px;">${timeStr}</strong>`;
        if (btnStart) {
            btnStart.disabled = false;
            btnStart.style.opacity = '1';
            btnStart.style.cursor = 'pointer';
            btnStart.innerHTML = `<span>Start Assessment</span> <i class="fa-solid fa-arrow-right"></i>`;
        }
        return { isAvailable: true, status: 'ACTIVE' };
    } else {
        if (elTimerText) elTimerText.innerHTML = `<span style="color:#f43f5e; font-weight:800;">🔒 Examination Window Closed</span>`;
        if (btnStart && !isAuthorizedAdmin) {
            btnStart.disabled = true;
            btnStart.style.opacity = '0.5';
            btnStart.style.cursor = 'not-allowed';
            btnStart.innerHTML = `<i class="fa-solid fa-lock"></i> <span>Assessment Deadline Ended</span>`;
        } else if (btnStart && isAuthorizedAdmin) {
            btnStart.disabled = false;
            btnStart.style.opacity = '1';
            btnStart.style.cursor = 'pointer';
            btnStart.innerHTML = `<i class="fa-solid fa-user-shield"></i> <span>Admin Test Access</span>`;
        }
        return { isAvailable: isAuthorizedAdmin, status: 'CLOSED' };
    }
}

window.startQuiz = function(quizId) {
    const windowStatus = checkExamWindowStatus();
    if (!windowStatus.isAvailable) {
        alert("🔒 Examination Window Notice:\n\nLive assessment model papers for Pediatric Health Nursing open today at 06:00 PM PKT (Sep 4) and close tomorrow at 06:00 PM PKT (Sep 5).\n\nPlease return during the examination window to submit your paper!");
        return;
    }

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
    // Strict Admin Button Visibility Guard (Exclusively for Authorized Admin Emails)
    const btnNavAdmin = document.getElementById('btn-nav-admin');
    if (btnNavAdmin) {
        const isAuthorizedAdmin = window.isUserAdmin();
        btnNavAdmin.style.display = isAuthorizedAdmin ? 'inline-flex' : 'none';
    }

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
    const historySec = elements.historySection || document.querySelector('.history-section');
    elements.historyTableBody.innerHTML = '';

    if (history.length === 0) {
        if (historySec) historySec.style.display = 'none';
        if (elements.historyEmptyMessage) elements.historyEmptyMessage.style.display = 'none';
        return;
    }

    if (historySec) historySec.style.display = 'block';
    if (elements.historyEmptyMessage) elements.historyEmptyMessage.style.display = 'none';

    const isAuthorizedAdmin = window.isUserAdmin();
    const isResultsReleased = localStorage.getItem('zafii_results_released') === 'true';

    history.forEach((record, index) => {
        const row = document.createElement('tr');
        
        if (isAuthorizedAdmin || isResultsReleased) {
            // Full detailed view for Admins OR when results are released by Admin
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
        } else {
            // Student View: Result Pending Notice (Redirects to WhatsApp Group)
            const pendingBadge = `<span class="badge" style="background:rgba(245,158,11,0.15); color:var(--amber-warning); border:1px solid rgba(245,158,11,0.3); font-size:11px; padding:4px 10px; border-radius:12px;"><i class="fa-solid fa-clock"></i> Result Pending</span>`;

            row.innerHTML = `
                <td style="font-weight:600; color:#fff;">${record.date}</td>
                <td>
                    <div style="font-weight:700; color:#fff;">${escapeHtml(record.subjectTitle)}</div>
                    <div style="font-size:11px; color:var(--cyan-primary); font-weight:700;">${escapeHtml(record.subjectCode)} • ${escapeHtml(record.semester)}</div>
                </td>
                <td style="font-weight:700; color:var(--amber-warning); font-size:12.5px;">⏳ Pending Announcement</td>
                <td><span class="subject-code-tag" style="background:rgba(255,255,255,0.08); color:var(--text-muted);">Under Review</span></td>
                <td>${pendingBadge}</td>
                <td>
                    <a href="https://chat.whatsapp.com/EoHSF3h2DV02GvOErsPhoK" target="_blank" rel="noopener noreferrer" class="btn-table-action" style="background:linear-gradient(135deg,#25d366,#128c7e); color:#fff; text-decoration:none; display:inline-flex; align-items:center; gap:6px;">
                        <i class="fa-brands fa-whatsapp"></i>
                        <span>Join Group</span>
                    </a>
                </td>
            `;
        }

        elements.historyTableBody.appendChild(row);
    });
}

// Global authorization helper functions
window.isUserAdmin = function() {
    const userName = (AppState.currentUser?.name || '').trim().toLowerCase();
    const userEmail = (AppState.currentUser?.email || '').trim().toLowerCase();
    return userEmail.includes('zafione6119@gmail') ||
           userName.includes('zafione6119@gmail') ||
           userEmail.includes('saadalimaxxup02@gmail') ||
           userName.includes('saadalimaxxup02@gmail') ||
           userEmail.includes('huzaifamushtaqahmed') ||
           userName.includes('huzaifamushtaqahmed');
};

window.checkCanAccessMarksheet = function() {
    if (window.isUserAdmin()) return true;
    return localStorage.getItem('zafii_results_released') === 'true';
};

// Triggered when user re-downloads a previous test's marksheet
window.reDownloadHistoricalMarksheet = function(index) {
    if (!window.checkCanAccessMarksheet()) {
        alert("🔒 Examination results and marksheets are currently protected by administration. Official results will be announced in the student WhatsApp group.");
        return;
    }
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
        accountId: AppState.currentUser ? (AppState.currentUser.accountId || (window.generateAccountId ? window.generateAccountId() : "8A92F4K7")) : (window.generateAccountId ? window.generateAccountId() : "8A92F4K7"),
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
    const isAuthorizedAdmin = window.isUserAdmin();
    const isResultsReleased = localStorage.getItem('zafii_results_released') === 'true';

    // Force result protection for regular students unless results have been published globally by Admin
    const isProtectedResult = !isAuthorizedAdmin && !isResultsReleased;

    const elModelCard = document.getElementById('model-paper-result-card');
    const elStandardCard = document.getElementById('standard-result-card');
    const elReviewWrapper = document.getElementById('review-wrapper');

    if (isProtectedResult) {
        // Show WhatsApp Announcement & Candidate Submission Receipt
        if (elModelCard) elModelCard.style.display = 'block';
        if (elStandardCard) elStandardCard.style.display = 'none';
        if (elReviewWrapper) elReviewWrapper.style.display = 'none';

        // Populate receipt
        const recName = document.getElementById('receipt-student-name');
        const recRoll = document.getElementById('receipt-student-roll');
        const recAccId = document.getElementById('receipt-student-account-id');
        const recExam = document.getElementById('receipt-exam-title');
        const recTime = document.getElementById('receipt-timestamp');
        const recToken = document.getElementById('receipt-token');
        const linkWa = document.getElementById('link-join-whatsapp');

        if (recName) recName.textContent = res.studentName;
        if (recRoll) recRoll.textContent = res.rollNo;
        if (recAccId) recAccId.textContent = res.accountId || (AppState.currentUser?.accountId) || 'N/A';
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
    initPWAInstallation();
    initAdminModule();

    // Sync global result release/protection status & timer hidden status from Supabase
    await SUPABASE_CONFIG.getResultsReleasedStatus();
    await SUPABASE_CONFIG.getExamTimerHiddenStatus();

    // Start Live Examination Access Window Countdown (04 Sep 6:00 PM - 05 Sep 6:00 PM PKT)
    checkExamWindowStatus();
    setInterval(checkExamWindowStatus, 1000);
    setInterval(async () => {
        const wasHidden = localStorage.getItem('zafii_exam_timer_hidden') === 'true';
        const isHiddenNow = await SUPABASE_CONFIG.getExamTimerHiddenStatus();
        if (wasHidden !== isHiddenNow) {
            checkExamWindowStatus();
        }
    }, 4000);

    // Initial check & auto-background sync for offline queued submissions
    if (navigator.onLine) {
        SUPABASE_CONFIG.syncOfflinePendingResults();
    }
    window.addEventListener('online', () => {
        console.log("📡 Device reconnected to internet! Triggering background sync...");
        SUPABASE_CONFIG.syncOfflinePendingResults();
    });

    const runningQuizSaved = localStorage.getItem('zafii_running_quiz');
    const hasRunningQuiz = !!runningQuizSaved;

    // 1. Check if returning from Google OAuth Permission Screen
    if (SUPABASE_CONFIG.client) {
        try {
            const { data: { session } } = await SUPABASE_CONFIG.client.auth.getSession();
            if (session && session.user) {
                const googleUser = session.user;
                const googleName = googleUser.user_metadata?.full_name || googleUser.user_metadata?.name || googleUser.email?.split('@')[0] || "Google Student";
                
                // Clean hash token from URL address bar
                if (window.location.hash && window.location.hash.includes('access_token')) {
                    history.replaceState(null, document.title, window.location.pathname + window.location.search);
                }

                // Do not auto-trust parent Google account name; require student to type their own Full Name on first setup
                await processStudentLogin(googleUser.email, 'google_oauth_verified', 'signin', false, '');
                return;
            }
        } catch (e) {
            console.warn("Supabase auth session restore error:", e);
        }
    }

    // 2. Fallback check active student session in LocalStorage
    try {
        const savedSession = localStorage.getItem('zafii_active_session');
        if (savedSession) {
            const parsed = JSON.parse(savedSession);
            if (parsed && (parsed.email || parsed.name)) {
                // Double check if account profile still exists in Supabase
                const identifier = parsed.email ? parsed.email.split('@')[0] : parsed.name;
                const check = await SUPABASE_CONFIG.getStudentProfile(identifier, parsed.email || '');
                if (!check.isNew && check.profile) {
                    const activeProfile = {
                        ...check.profile,
                        rollNo: check.profile.rollNo || parsed.rollNo || ("BSN-2026-" + Math.floor(1000 + Math.random() * 9000))
                    };
                    updateUIWithUserData(activeProfile);
                    AppState.studentHistory = await SUPABASE_CONFIG.getStudentQuizHistory(activeProfile.name);
                    switchView('dashboard');
                } else {
                    // Stale or deleted account session -> Purge local storage and force login view!
                    localStorage.removeItem('zafii_active_session');
                    switchView('login');
                }
            } else {
                switchView('login');
            }
        } else {
            switchView('login');
        }
    } catch (e) {
        console.warn("Auto session restore failed:", e);
        switchView('login');
    }

    // 3. Auto-resume active running exam if page was refreshed during assessment!
    if (hasRunningQuiz) {
        restoreRunningQuizState();
    }
});

// Global Admin Passcode Modal Trigger Fallback
window.openAdminModal = function() {
    const adminModal = document.getElementById('admin-passcode-modal');
    const inputPasscode = document.getElementById('admin-passcode-input');
    if (inputPasscode) inputPasscode.value = '';
    if (adminModal) adminModal.classList.add('active');
    if (inputPasscode) setTimeout(() => inputPasscode.focus(), 200);
};

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

// ----------------- ADMIN CONTROLLER MODULE -----------------
function initAdminModule() {
    const btnNavAdmin = document.getElementById('btn-nav-admin');
    const adminModal = document.getElementById('admin-passcode-modal');
    const btnCloseAdminModal = document.getElementById('btn-close-admin-modal');
    const inputPasscode = document.getElementById('admin-passcode-input');
    const btnSubmitPasscode = document.getElementById('btn-submit-admin-passcode');
    const btnAdminExit = document.getElementById('btn-admin-exit');

    if (btnNavAdmin) {
        btnNavAdmin.onclick = window.openAdminModal;
        btnNavAdmin.addEventListener('click', window.openAdminModal);
    }

    if (adminModal) {
        adminModal.addEventListener('click', (e) => {
            if (e.target === adminModal) adminModal.classList.remove('active');
        });
    }

    if (btnCloseAdminModal && adminModal) {
        btnCloseAdminModal.addEventListener('click', () => {
            adminModal.classList.remove('active');
        });
    }

    async function handleAdminAuth() {
        const entered = inputPasscode ? inputPasscode.value.trim() : '';
        if (entered === 'Huzaifa.1234' || entered === 'huzaifamushtaqahmed') {
            adminModal.classList.remove('active');
            switchView('admin');
            await loadAdminDashboardData();
        } else {
            alert("❌ Unauthorized Access Denied:\nIncorrect Master Admin Passcode. Please check your admin credentials.");
            if (inputPasscode) inputPasscode.value = '';
        }
    }

    if (btnSubmitPasscode) {
        btnSubmitPasscode.addEventListener('click', handleAdminAuth);
    }

    if (inputPasscode) {
        inputPasscode.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleAdminAuth();
        });
    }

    if (btnAdminExit) {
        btnAdminExit.addEventListener('click', () => {
            switchView(AppState.currentUser ? 'dashboard' : 'login');
        });
    }

    // Master Admin Result Release Toggle (Publishes scores & marksheets to student dashboards)
    const btnPublishResults = document.getElementById('btn-admin-publish-results');
    const lblPublish = document.getElementById('btn-publish-label');
    const descPublish = document.getElementById('admin-results-status-desc');

    function updatePublishUI() {
        const released = localStorage.getItem('zafii_results_released') === 'true';
        if (lblPublish) {
            lblPublish.textContent = released ? "Protect Results (Hide from Students)" : "Release Results to Student Dashboards";
        }
        if (descPublish) {
            descPublish.textContent = released 
                ? "Currently: Results & Marksheets are RELEASED (Visible on Student Dashboards)."
                : "Currently: Results are Protected (Hidden from Student Dashboards).";
        }
        if (btnPublishResults) {
            btnPublishResults.style.background = released 
                ? "linear-gradient(135deg, #f43f5e, #e11d48)" 
                : "linear-gradient(135deg, #10b981, #06b6d4)";
        }
    }

    updatePublishUI();

    if (btnPublishResults) {
        btnPublishResults.addEventListener('click', async () => {
            const current = localStorage.getItem('zafii_results_released') === 'true';
            const newState = !current;
            await SUPABASE_CONFIG.setResultsReleasedStatus(newState);
            updatePublishUI();
            
            alert(newState 
                ? "🎉 Results & Marksheets Released!\n\nAll student accounts can now view their score breakdowns and PDF marksheets on their student dashboard!" 
                : "🔒 Results Protected!\n\nStudent marksheets are now hidden. Scores are strictly accessible in the Admin Controller Panel.");
            
            renderAssessmentHistory();
        });
    }

    // Master Admin Exam Countdown Banner & Schedule Lock Toggle
    const btnToggleTimer = document.getElementById('btn-admin-toggle-timer');
    const lblTimerToggle = document.getElementById('btn-timer-toggle-label');
    const descTimerStatus = document.getElementById('admin-timer-status-desc');

    function updateExamTimerControlUI() {
        const isHidden = localStorage.getItem('zafii_exam_timer_hidden') === 'true';
        if (lblTimerToggle) {
            lblTimerToggle.textContent = isHidden 
                ? "Show Countdown Banner & Enforce Live Schedule" 
                : "Hide Countdown Banner (Enable Open Exam Access)";
        }
        if (descTimerStatus) {
            descTimerStatus.textContent = isHidden 
                ? "Currently: Countdown Banner is HIDDEN (Exam is OPEN to all candidates anytime)."
                : "Currently: Live Schedule Enforced & Countdown Banner Visible on Student Dashboards.";
        }
        if (btnToggleTimer) {
            btnToggleTimer.style.background = isHidden 
                ? "linear-gradient(135deg, #10b981, #06b6d4)" 
                : "linear-gradient(135deg, #8b5cf6, #ec4899)";
        }
    }

    updateExamTimerControlUI();

    if (btnToggleTimer) {
        btnToggleTimer.addEventListener('click', async () => {
            const current = localStorage.getItem('zafii_exam_timer_hidden') === 'true';
            const newState = !current;
            await SUPABASE_CONFIG.setExamTimerHiddenStatus(newState);
            updateExamTimerControlUI();
            checkExamWindowStatus();

            alert(newState 
                ? "👁️ Countdown Banner Hidden & Global Access Unlocked!\n\nThe countdown timer card is now hidden for ALL candidates across all devices. Every student can freely access and start their examination paper!" 
                : "⏰ Countdown Banner Visible & Global Schedule Enforced!\n\nThe live examination schedule is now active globally across all devices. Countdown timer banner is visible and candidate access is strictly governed by the official time window.");
        });
    }
}

async function loadAdminDashboardData() {
    const elTotalStudents = document.getElementById('admin-total-students');
    const elTotalQuizzes = document.getElementById('admin-total-quizzes');
    const elAvgPassRate = document.getElementById('admin-avg-pass-rate');
    const tbodyStudents = document.getElementById('admin-students-tbody');
    const tbodyResults = document.getElementById('admin-results-tbody');

    // 1. Fetch Students and Quiz Submissions concurrently
    const [students, results] = await Promise.all([
        SUPABASE_CONFIG.getAllStudents(),
        SUPABASE_CONFIG.getAllQuizResults()
    ]);

    if (elTotalStudents) elTotalStudents.textContent = students.length;
    if (elTotalQuizzes) elTotalQuizzes.textContent = results.length;

    if (results.length > 0) {
        const passCount = results.filter(r => r.isPassed).length;
        const avgRate = Math.round((passCount / results.length) * 100);
        if (elAvgPassRate) elAvgPassRate.textContent = `${avgRate}%`;
    } else {
        if (elAvgPassRate) elAvgPassRate.textContent = `0%`;
    }

    // Map student email/name to their quiz results
    const resultMap = {};
    results.forEach(r => {
        const key = (r.studentName || '').trim().toLowerCase();
        if (!resultMap[key]) resultMap[key] = [];
        resultMap[key].push(r);
    });

    // 2. Render Live Student Roster Directory Table
    if (tbodyStudents) {
        tbodyStudents.innerHTML = '';
        if (students.length === 0) {
            tbodyStudents.innerHTML = `<tr><td colspan="4" style="text-align:center; color:var(--text-muted); padding:20px;">No registered student profiles found in database.</td></tr>`;
        } else {
            students.forEach(s => {
                const tr = document.createElement('tr');
                const key = (s.name || '').trim().toLowerCase();
                const studentQuizzes = resultMap[key] || [];
                const sem5Exam = studentQuizzes.find(q => q.subjectCode === 'PED-501-MODEL') || studentQuizzes[0];
                
                const examStatusBadge = sem5Exam 
                    ? `<span class="badge badge-passed" style="font-size:11px; padding:3px 8px;"><i class="fa-solid fa-check"></i> Sem 5 Exam Completed (${sem5Exam.score}/${sem5Exam.totalQuestions})</span>` 
                    : `<span class="badge" style="background:rgba(245,158,11,0.15); color:var(--amber-warning); font-size:11px; padding:3px 8px;"><i class="fa-solid fa-hourglass-half"></i> Pending Exam</span>`;

                tr.innerHTML = `
                    <td style="vertical-align:middle;">
                        <div style="font-weight:800; color:#ffffff; font-size:14px;">${escapeHtml(s.name)}</div>
                        <div style="font-size:11px; color:var(--text-muted); margin-top:2px;">${examStatusBadge}</div>
                    </td>
                    <td style="vertical-align:middle;">
                        <code style="background:rgba(6,182,212,0.12); border:1px solid rgba(6,182,212,0.3); padding:4px 10px; border-radius:12px; color:var(--cyan-primary); font-weight:800; font-size:12px;">${escapeHtml(s.rollNo)}</code>
                        <code style="background:rgba(236,72,153,0.12); border:1px solid rgba(236,72,153,0.3); padding:4px 10px; border-radius:12px; color:#f472b6; font-weight:800; font-size:12px; margin-left:4px;">ID: ${escapeHtml(s.accountId || 'N/A')}</code>
                    </td>
                    <td style="vertical-align:middle; font-weight:600; color:#cbd5e1;">${escapeHtml(s.semester || 'Semester 5')}</td>
                    <td style="vertical-align:middle; color:var(--text-muted); font-size:12.5px;">${escapeHtml(s.createdAt)}</td>
                `;
                tbodyStudents.appendChild(tr);
            });
        }
    }

    // 3. Render All Student Quiz Submissions Table
    if (tbodyResults) {
        tbodyResults.innerHTML = '';
        if (results.length === 0) {
            tbodyResults.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:20px;">No quiz submissions recorded yet. Complete a quiz to view live marksheets.</td></tr>`;
        } else {
            results.forEach((r, idx) => {
                const tr = document.createElement('tr');
                const statusBadge = r.isPassed 
                    ? '<span class="status-tag status-correct">✓ PASSED</span>' 
                    : '<span class="status-tag status-incorrect">✗ RE-TAKE</span>';

                tr.innerHTML = `
                    <td style="vertical-align:middle;">
                        <div style="font-weight:800; color:#ffffff; font-size:14px;">${escapeHtml(r.studentName)}</div>
                        <div style="font-size:11px; color:var(--cyan-primary); font-weight:700; margin-top:2px;">
                            ${escapeHtml(r.rollNo)} &bull; <span style="color:#f472b6; font-weight:800;">ID: ${escapeHtml(r.accountId || 'N/A')}</span>
                        </div>
                    </td>
                    <td style="vertical-align:middle;">
                        <div style="font-weight:700; color:#fff; font-size:13px;">${escapeHtml(r.subjectTitle)}</div>
                        <div style="font-size:11px; color:var(--text-muted); font-weight:600; margin-top:2px;">${escapeHtml(r.subjectCode)} • ${escapeHtml(r.semester || 'Semester 5')}</div>
                    </td>
                    <td style="vertical-align:middle;">
                        <div style="font-weight:800; color:#ffffff; font-size:13.5px;">${r.score} / ${r.totalQuestions} (${r.percentage}%)</div>
                        <div style="font-size:11px; color:var(--amber-warning); font-weight:700; margin-top:2px;">${escapeHtml(r.grade)}</div>
                    </td>
                    <td style="vertical-align:middle;">${statusBadge}</td>
                    <td style="vertical-align:middle; color:var(--text-muted); font-size:12px; font-weight:600;">${escapeHtml(r.date)}<div style="font-size:10.5px; opacity:0.8;">${escapeHtml(r.timeTaken || '')}</div></td>
                    <td style="vertical-align:middle; text-align:right;">
                        <button class="btn-table-action btn-admin-view-marksheet" data-index="${idx}" style="white-space:nowrap;">
                            <i class="fa-solid fa-file-pdf"></i>
                            <span>View Marksheet</span>
                        </button>
                    </td>
                `;
                tbodyResults.appendChild(tr);
            });

            // Bind Marksheet Inspector buttons for Admin
            tbodyResults.querySelectorAll('.btn-admin-view-marksheet').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idx = e.currentTarget.getAttribute('data-index');
                    const targetResult = results[idx];
                    if (targetResult) {
                        generateMarksheetPDF(targetResult);
                    }
                });
            });
        }
    }

    // 4. Render BSN Semester 5 Master Merit List Table
    const tbodyMasterMerit = document.getElementById('admin-master-merit-tbody');
    if (tbodyMasterMerit) {
        tbodyMasterMerit.innerHTML = '';
        if (results.length === 0) {
            tbodyMasterMerit.innerHTML = `<tr><td colspan="6" style="text-align:center; color:var(--text-muted); padding:20px;">No exam submissions recorded yet to generate Master Merit List.</td></tr>`;
        } else {
            results.forEach((r) => {
                const tr = document.createElement('tr');
                const isPassed = r.percentage >= 40; // Rule: <40% is FAILED, >=40% is PASSED
                const statusBadge = isPassed 
                    ? '<span class="badge badge-passed" style="font-size:11.5px; padding:4px 10px;"><i class="fa-solid fa-check"></i> PASSED</span>' 
                    : '<span class="badge badge-failed" style="font-size:11.5px; padding:4px 10px;"><i class="fa-solid fa-xmark"></i> FAILED</span>';

                tr.innerHTML = `
                    <td style="vertical-align:middle;">
                        <code style="background:rgba(6,182,212,0.12); border:1px solid rgba(6,182,212,0.3); padding:4px 10px; border-radius:12px; color:var(--cyan-primary); font-weight:800; font-size:12px;">${escapeHtml(r.rollNo)}</code>
                        <code style="background:rgba(236,72,153,0.12); border:1px solid rgba(236,72,153,0.3); padding:3px 8px; border-radius:8px; color:#f472b6; font-weight:800; font-size:11px; margin-left:4px;">ID: ${escapeHtml(r.accountId || 'N/A')}</code>
                    </td>
                    <td style="vertical-align:middle; font-weight:800; color:#ffffff; font-size:13.5px;">${escapeHtml(r.studentName)}</td>
                    <td style="vertical-align:middle; font-weight:800; color:#ffffff;">${r.score} / ${r.totalQuestions}</td>
                    <td style="vertical-align:middle; font-weight:800; color:var(--cyan-primary);">${r.percentage}%</td>
                    <td style="vertical-align:middle; font-weight:700; color:var(--amber-warning);">${escapeHtml(r.grade.split(' ')[0])}</td>
                    <td style="vertical-align:middle;">${statusBadge}</td>
                `;
                tbodyMasterMerit.appendChild(tr);
            });
        }
    }
}

// ----------------- MASTER MERIT LIST PDF EXPORTER ENGINE -----------------
window.exportMasterMeritListPDF = async function() {
    const results = await SUPABASE_CONFIG.getAllQuizResults();
    if (!results || results.length === 0) {
        alert("⚠️ No student exam submissions found to generate Master Merit List!");
        return;
    }

    const printWin = window.open('', '_blank');
    if (!printWin) {
        alert("Please allow popups in your browser to export the Master Merit List PDF.");
        return;
    }

    const rowsHTML = results.map((r, idx) => {
        const isPassed = r.percentage >= 40; // Rule: <40% is FAILED, >=40% is PASSED
        const statusText = isPassed ? "PASSED" : "FAILED";
        const statusColor = isPassed ? "#10b981" : "#f43f5e";
        const statusBg = isPassed ? "rgba(16,185,129,0.12)" : "rgba(244,63,94,0.12)";

        return `
            <tr style="border-bottom:1px solid #e2e8f0;">
                <td style="padding:10px 12px; font-weight:700; color:#0f172a; text-align:center;">${idx + 1}</td>
                <td style="padding:10px 12px; font-family:monospace; font-weight:800; color:#0284c7;">${escapeHtml(r.rollNo)}</td>
                <td style="padding:10px 12px; font-weight:700; color:#0f172a;">${escapeHtml(r.studentName)}</td>
                <td style="padding:10px 12px; font-weight:800; text-align:center;">${r.score} / ${r.totalQuestions}</td>
                <td style="padding:10px 12px; font-weight:800; text-align:center; color:#0284c7;">${r.percentage}%</td>
                <td style="padding:10px 12px; font-weight:700; text-align:center; color:#d97706;">${escapeHtml(r.grade.split(' ')[0])}</td>
                <td style="padding:10px 12px; text-align:center;">
                    <span style="background:${statusBg}; color:${statusColor}; font-weight:800; font-size:11px; padding:4px 10px; border-radius:12px; border:1px solid ${statusColor};">
                        ${statusText}
                    </span>
                </td>
            </tr>
        `;
    }).join('');

    const htmlContent = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>ZAFII NURSING CARE - Master Merit List Report</title>
            <style>
                @page { 
                    size: A4 portrait; 
                    margin: 12mm 15mm 15mm 15mm; 
                }
                body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; margin: 20px; color: #0f172a; background: #ffffff; }
                .header { text-align: center; border-bottom: 3px solid #0284c7; padding-bottom: 12px; margin-bottom: 16px; page-break-after: avoid; }
                .header h1 { margin: 0; font-size: 22px; color: #0f172a; font-weight: 800; letter-spacing: 1px; }
                .header h3 { margin: 6px 0 0 0; font-size: 13.5px; color: #0284c7; font-weight: 700; }
                .meta-bar { display: flex; justify-content: space-between; font-size: 12px; color: #475569; margin-bottom: 16px; background: #f8fafc; padding: 10px 16px; border-radius: 8px; border: 1px solid #e2e8f0; }
                table { width: 100%; border-collapse: collapse; font-size: 12px; }
                thead { display: table-header-group; }
                tfoot { display: table-footer-group; }
                tr { page-break-inside: avoid; break-inside: avoid; }
                th { background: #0f172a; color: #ffffff; padding: 10px 12px; text-align: left; font-weight: 700; text-transform: uppercase; font-size: 11px; }
                th.center { text-align: center; }
                td { padding: 9px 12px; }
                .footer { margin-top: 16px; text-align: center; font-size: 11px; color: #64748b; border-top: 1px solid #e2e8f0; padding-top: 12px; }
                @media print {
                    body { margin: 0; }
                    .no-print { display: none; }
                }
            </style>
        </head>
        <body>
            <div class="header">
                <h1>ZAFII NURSING CARE</h1>
                <h3>SEMESTER 5 ASSESSMENT MASTER MERIT LIST REPORT</h3>
            </div>
            
            <div class="meta-bar">
                <span><strong>Course:</strong> Pediatric Health Nursing (PED-501)</span>
                <span><strong>Total Candidates:</strong> ${results.length} Candidates</span>
                <span><strong>Generated:</strong> ${new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>

            <table>
                <thead>
                    <tr>
                        <th class="center" style="width:35px;">#</th>
                        <th>Roll Number</th>
                        <th>Candidate Name</th>
                        <th class="center">Score / 70</th>
                        <th class="center">Percentage</th>
                        <th class="center">Grade</th>
                        <th class="center">Result Status</th>
                    </tr>
                </thead>
                <tbody>
                    ${rowsHTML}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="7" style="border:none; padding-top:14px;">
                            <div class="footer">
                                <p><strong>Verification Document:</strong> Passing Criteria: Minimum 40% (28/70) required for certification.</p>
                                <p>© ZAFII NURSING CARE Examination Board • Protected Record</p>
                            </div>
                        </td>
                    </tr>
                </tfoot>
            </table>

            <script>
                window.onload = function() {
                    setTimeout(() => {
                        window.print();
                    }, 400);
                }
            </script>
        </body>
        </html>
    `;

    printWin.document.write(htmlContent);
    printWin.document.close();
};
