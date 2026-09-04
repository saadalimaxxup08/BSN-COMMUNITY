// Global Unique 8-Digit Pure Numeric Account ID Generator (Math Digits Only)
window.generateAccountId = function() {
    let result = '';
    for (let i = 0; i < 8; i++) {
        result += Math.floor(Math.random() * 10).toString();
    }
    return result;
};

const SUPABASE_CONFIG = {
    // Active Supabase Credentials (Project: nzouoopsknvcwlhlxytz)
    url: "https://nzouoopsknvcwlhlxytz.supabase.co",
    anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56b3Vvb3Bza252Y3dsaGx4eXR6Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc4ODM0MDUzNSwiZXhwIjoyMTAzOTE2NTM1fQ.1Wtd_GyBknc1nN7iw7BIqrs7OmQ8tKOAqOZ_1mlEG_0",
    
    client: null,

    // Initialize Supabase client
    init() {
        if (typeof supabase !== 'undefined' && this.url !== "https://YOUR_SUPABASE_PROJECT_ID.supabase.co") {
            try {
                this.client = supabase.createClient(this.url, this.anonKey);
                console.log("✅ Supabase successfully connected!");
                return true;
            } catch (err) {
                console.warn("⚠️ Supabase initialization failed:", err);
            }
        } else {
            console.log("ℹ️ Running in Local / Offline Storage mode.");
        }
        return false;
    },

    // ----------------- STUDENT PROFILES -----------------

    // Fetch student profile by unique Gmail / Email account or name
    async getStudentProfile(identifier, email = '') {
        const cleanEmail = (email || '').trim().toLowerCase();
        const cleanName = (identifier || '').trim().toLowerCase();
        const searchKey = cleanEmail || cleanName;

        // Try Supabase first
        if (this.client) {
            try {
                const { data, error } = await this.client.from('students').select('*');

                if (data && !error && data.length > 0) {
                    const match = data.find(s => {
                        if (s.name === 'SYSTEM_SETTINGS_RESULTS_RELEASED') return false;
                        const sName = (s.name || '').trim().toLowerCase();
                        const sRoll = (s.roll_no || '').trim().toLowerCase();
                        
                        if (cleanName && sName === cleanName) return true;
                        if (cleanEmail && sRoll.includes(cleanEmail)) return true;
                        if (cleanEmail && sName === cleanEmail.split('@')[0]) return true;
                        return false;
                    });

                    if (match) {
                        const parts = (match.roll_no || '').split('|');
                        const parsedRoll = parts[0] || 'BSN-2026-0000';
                        const parsedAccountId = parts[1] || match.account_id || window.generateAccountId();
                        const parsedEmail = parts[2] || cleanEmail || match.email || '';
                        const parsedPassword = parts[3] || match.password || '';

                        return { 
                            isNew: false, 
                            profile: {
                                name: match.name,
                                email: parsedEmail,
                                rollNo: parsedRoll,
                                accountId: parsedAccountId,
                                password: parsedPassword,
                                semester: match.semester || 'Semester 5',
                                semesterKey: 'sem-5',
                                createdAt: match.created_at || new Date().toISOString()
                            }
                        };
                    }
                }
            } catch (err) {
                console.warn("Supabase fetch student profile failed, trying local storage:", err);
            }
        }

        // Fallback / Offline LocalStorage
        const localStudents = JSON.parse(localStorage.getItem('zafii_students') || '{}');
        if (localStudents[searchKey] || localStudents[cleanName]) {
            const locProfile = localStudents[searchKey] || localStudents[cleanName];
            if (!locProfile.accountId) locProfile.accountId = window.generateAccountId();
            return { isNew: false, profile: locProfile };
        }

        // Brand New Student
        return { isNew: true, profile: null };
    },

    // Save or register student profile indexed by unique Gmail / Email account
    async saveStudentProfile(profileData) {
        if (!profileData || !profileData.name || profileData.name.trim() === '') {
            console.warn("Skipping profile save until student enters their Full Name.");
            return profileData;
        }

        const cleanEmail = (profileData.email || '').trim().toLowerCase();
        const cleanName = (profileData.name || '').trim().toLowerCase();
        const primaryKey = cleanEmail || cleanName;

        if (!profileData.accountId) {
            profileData.accountId = window.generateAccountId();
        }

        const rollPayload = `${profileData.rollNo || 'BSN-2026-0000'}|${profileData.accountId}|${cleanEmail}|${profileData.password || ''}`;

        // Save to Supabase
        if (this.client) {
            try {
                await this.client
                    .from('students')
                    .upsert([
                        {
                            name: profileData.name,
                            roll_no: rollPayload,
                            semester: profileData.semester || "Semester 5",
                            created_at: profileData.createdAt || new Date().toISOString()
                        }
                    ], { onConflict: 'name' });
            } catch (err) {
                console.warn("Supabase save profile failed:", err);
            }
        }

        // Cache in LocalStorage
        try {
            const localStudents = JSON.parse(localStorage.getItem('zafii_students') || '{}');
            localStudents[primaryKey] = profileData;
            localStudents[cleanName] = profileData;
            localStorage.setItem('zafii_students', JSON.stringify(localStudents));
        } catch (e) {
            console.error("Local storage profile save failed:", e);
        }

        return profileData;
    },

    // ----------------- QUIZ RESULTS & HISTORY -----------------

    // Save Quiz Result to Supabase & LocalStorage (With Offline Resilience Queue)
    async saveQuizResult(resultData) {
        let isSavedToSupabase = false;

        // Try saving to Supabase first
        if (this.client && navigator.onLine) {
            try {
                const { data, error } = await this.client
                    .from('quiz_results')
                    .insert([
                        {
                            student_name: resultData.studentName,
                            roll_no: resultData.rollNo,
                            semester: resultData.semester,
                            subject_title: resultData.subjectTitle,
                            subject_code: resultData.subjectCode,
                            score: resultData.score,
                            total_questions: resultData.totalQuestions,
                            percentage: resultData.percentage,
                            grade: resultData.grade,
                            passed: resultData.isPassed,
                            breakdown: resultData.breakdown,
                            time_taken: resultData.timeTaken,
                            created_at: new Date().toISOString()
                        }
                    ]);

                if (error) throw error;
                isSavedToSupabase = true;
                console.log("✅ Result saved to Supabase cleanly:", data);
            } catch (err) {
                console.warn("⚠️ Supabase save failed (offline or network drop). Queueing for background sync:", err);
            }
        }

        // If Supabase save failed or device is offline, add to pending sync queue
        if (!isSavedToSupabase) {
            try {
                const queue = JSON.parse(localStorage.getItem('zafii_offline_pending_results') || '[]');
                queue.push(resultData);
                localStorage.setItem('zafii_offline_pending_results', JSON.stringify(queue));
                console.log("📦 Result safely queued in LocalStorage offline buffer.");
            } catch (e) {
                console.error("Could not queue offline result:", e);
            }
        }

        // Save locally for student history UI
        this.saveResultLocally(resultData);
    },

    // Background Sync Engine: Flushes offline pending quiz submissions to Supabase
    async syncOfflinePendingResults() {
        if (!this.client || !navigator.onLine) return;

        try {
            const queue = JSON.parse(localStorage.getItem('zafii_offline_pending_results') || '[]');
            if (queue.length === 0) return;

            console.log(`📡 Reconnected to Internet! Syncing ${queue.length} pending offline submissions to Supabase...`);
            const remainingQueue = [];

            for (const item of queue) {
                try {
                    const { error } = await this.client
                        .from('quiz_results')
                        .insert([
                            {
                                student_name: item.studentName,
                                roll_no: item.rollNo,
                                semester: item.semester,
                                subject_title: item.subjectTitle,
                                subject_code: item.subjectCode,
                                score: item.score,
                                total_questions: item.totalQuestions,
                                percentage: item.percentage,
                                grade: item.grade,
                                passed: item.isPassed,
                                breakdown: item.breakdown,
                                time_taken: item.timeTaken,
                                created_at: item.createdAt || new Date().toISOString()
                            }
                        ]);

                    if (error) {
                        remainingQueue.push(item);
                    } else {
                        console.log(`✅ Synced offline submission for candidate ${item.studentName} (${item.rollNo})`);
                    }
                } catch (e) {
                    remainingQueue.push(item);
                }
            }

            localStorage.setItem('zafii_offline_pending_results', JSON.stringify(remainingQueue));
        } catch (err) {
            console.warn("Offline sync process warning:", err);
        }
    },

    // Cache result in local storage indexed by student
    saveResultLocally(resultData) {
        try {
            const cleanName = (resultData.studentName || '').trim().toLowerCase();
            const allResults = JSON.parse(localStorage.getItem('zafii_all_results') || '[]');
            allResults.unshift(resultData);
            localStorage.setItem('zafii_all_results', JSON.stringify(allResults));

            // Also keep student-specific array
            const key = `zafii_history_${cleanName}`;
            const studentResults = JSON.parse(localStorage.getItem(key) || '[]');
            studentResults.unshift(resultData);
            localStorage.setItem(key, JSON.stringify(studentResults));
        } catch (e) {
            console.error("Failed to save result locally", e);
        }
    },

    // Fetch quiz history for a specific student
    async getStudentQuizHistory(studentName) {
        const cleanName = (studentName || '').trim().toLowerCase();

        // Try Supabase if connected
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('quiz_results')
                    .select('*')
                    .ilike('student_name', cleanName)
                    .order('created_at', { ascending: false });

                if (data && !error && data.length > 0) {
                    return data.map(item => ({
                        studentName: item.student_name,
                        rollNo: item.roll_no,
                        semester: item.semester,
                        subjectTitle: item.subject_title,
                        subjectCode: item.subject_code,
                        score: item.score,
                        totalQuestions: item.total_questions,
                        percentage: item.percentage,
                        grade: item.grade,
                        isPassed: item.passed,
                        breakdown: item.breakdown || [],
                        timeTaken: item.time_taken,
                        date: new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                    }));
                }
            } catch (err) {
                console.warn("Supabase fetch history error, using local fallback:", err);
            }
        }

        // Offline / LocalStorage fallback
        try {
            const key = `zafii_history_${cleanName}`;
            const studentResults = JSON.parse(localStorage.getItem(key) || '[]');
            if (studentResults.length > 0) return studentResults;

            // Fallback to all results filtering
            const all = JSON.parse(localStorage.getItem('zafii_all_results') || '[]');
            return all.filter(r => (r.studentName || '').trim().toLowerCase() === cleanName);
        } catch (e) {
            return [];
        }
    },

    // ----------------- ADMIN CONTROLLER METHODS -----------------

    // Fetch all registered students for Admin Controller (Bulletproof multi-source merge)
    async getAllStudents() {
        const studentMap = {};

        // 1. Fetch from Supabase students table
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('students')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (data && !error && data.length > 0) {
                    data.forEach(s => {
                        const key = (s.email || s.name || '').trim().toLowerCase();
                        if (key && !studentMap[key] && s.name !== 'SYSTEM_SETTINGS_RESULTS_RELEASED') {
                            const rawRoll = s.roll_no || s.rollNo || '';
                            const parts = rawRoll.split('|');
                            studentMap[key] = {
                                name: s.name,
                                email: s.email || '',
                                rollNo: parts[0] || 'BSN-2026',
                                accountId: parts[1] || s.accountId || s.account_id || 'N/A',
                                password: s.password || '',
                                semester: s.semester || 'Semester 5',
                                createdAt: new Date(s.created_at || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                            };
                        }
                    });
                }
            } catch (err) {
                console.warn("Supabase fetch all students error:", err);
            }

            // 2. Cross-reference quiz_results to ensure no student who took an exam is missed
            try {
                const { data: qData } = await this.client
                    .from('quiz_results')
                    .select('student_name, roll_no, semester, created_at')
                    .order('created_at', { ascending: false });

                if (qData && qData.length > 0) {
                    qData.forEach(item => {
                        const key = (item.student_name || '').trim().toLowerCase();
                        if (key && !studentMap[key]) {
                            const rawRoll = item.roll_no || '';
                            const parts = rawRoll.split('|');
                            studentMap[key] = {
                                name: item.student_name,
                                email: '',
                                rollNo: parts[0] || 'BSN-2026',
                                accountId: parts[1] || item.account_id || 'N/A',
                                password: '',
                                semester: item.semester || 'Semester 5',
                                createdAt: new Date(item.created_at || Date.now()).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
                            };
                        }
                    });
                }
            } catch (e) {}
        }

        // 3. Merge LocalStorage Fallback Profiles
        try {
            const localMap = JSON.parse(localStorage.getItem('zafii_students') || '{}');
            Object.values(localMap).forEach(s => {
                const key = (s.email || s.name || '').trim().toLowerCase();
                if (key && !studentMap[key]) {
                    const rawRoll = s.rollNo || s.roll_no || '';
                    const parts = rawRoll.split('|');
                    studentMap[key] = {
                        name: s.name,
                        email: s.email || '',
                        rollNo: parts[0] || 'BSN-2026',
                        accountId: parts[1] || s.accountId || 'N/A',
                        password: s.password || '',
                        semester: s.semester || 'Semester 5',
                        createdAt: s.createdAt ? new Date(s.createdAt).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) : 'Recent'
                    };
                }
            });
        } catch (e) {}

        return Object.values(studentMap);
    },

    // Fetch all quiz submissions for Admin Controller
    async getAllQuizResults() {
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('quiz_results')
                    .select('*')
                    .order('created_at', { ascending: false });

                if (data && !error) {
                    return data.map(item => {
                        const rawRoll = item.roll_no || '';
                        const parts = rawRoll.split('|');
                        return {
                            studentName: item.student_name,
                            rollNo: parts[0] || 'BSN-2026',
                            accountId: parts[1] || item.account_id || item.accountId || 'N/A',
                            semester: item.semester,
                            subjectTitle: item.subject_title,
                            subjectCode: item.subject_code,
                            score: item.score,
                            totalQuestions: item.total_questions,
                            percentage: item.percentage,
                            grade: item.grade,
                            isPassed: item.passed,
                            breakdown: item.breakdown || [],
                            timeTaken: item.time_taken,
                            date: new Date(item.created_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
                        };
                    });
                }
            } catch (err) {
                console.warn("Supabase fetch all results error, using local fallback:", err);
            }
        }

        // LocalStorage Fallback
        try {
            return JSON.parse(localStorage.getItem('zafii_all_results') || '[]');
        } catch (e) {
            return [];
        }
    },

    // ----------------- GLOBAL SYSTEM SETTINGS -----------------
    async getResultsReleasedStatus() {
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('students')
                    .select('*')
                    .eq('name', 'SYSTEM_SETTINGS_RESULTS_RELEASED')
                    .maybeSingle();

                if (data && !error) {
                    const isReleased = data.roll_no === 'true';
                    localStorage.setItem('zafii_results_released', isReleased ? 'true' : 'false');
                    return isReleased;
                }
            } catch (err) {
                console.warn("Supabase fetch results release status failed:", err);
            }
        }
        return localStorage.getItem('zafii_results_released') === 'true';
    },

    async setResultsReleasedStatus(isReleased) {
        const valueStr = isReleased ? 'true' : 'false';
        localStorage.setItem('zafii_results_released', valueStr);

        if (this.client) {
            try {
                await this.client
                    .from('students')
                    .upsert([
                        {
                            name: 'SYSTEM_SETTINGS_RESULTS_RELEASED',
                            roll_no: valueStr,
                            semester: 'SYSTEM_CONFIG',
                            created_at: new Date().toISOString()
                        }
                    ], { onConflict: 'name' });
            } catch (err) {
                console.warn("Supabase save results release status failed:", err);
            }
        }
        return isReleased;
    }
};

// Auto-run init
document.addEventListener('DOMContentLoaded', () => {
    SUPABASE_CONFIG.init();
});
