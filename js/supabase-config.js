// ===================================================
// ZAFII MEDICAL PORTAL - SUPABASE & LOCAL DATA SYNC
// Handles New Student Registration, Existing Student Fetching,
// and Historical Quiz Marksheet Persistence.
// ===================================================

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

    // Fetch student profile by name (Checks if old student exists)
    async getStudentProfile(studentName) {
        const cleanName = (studentName || '').trim().toLowerCase();
        
        // Try Supabase first
        if (this.client) {
            try {
                const { data, error } = await this.client
                    .from('students')
                    .select('*')
                    .ilike('name', cleanName)
                    .maybeSingle();

                if (data && !error) {
                    return { 
                        isNew: false, 
                        profile: {
                            name: data.name,
                            rollNo: data.roll_no || data.rollNo,
                            password: data.password || '123456',
                            semester: data.semester || 'Semester 5',
                            semesterKey: 'sem-5',
                            createdAt: data.created_at || new Date().toISOString()
                        }
                    };
                }
            } catch (err) {
                console.warn("Supabase fetch student profile failed, trying local storage:", err);
            }
        }

        // Fallback / Offline LocalStorage
        const localStudents = JSON.parse(localStorage.getItem('zafii_students') || '{}');
        if (localStudents[cleanName]) {
            return { isNew: false, profile: localStudents[cleanName] };
        }

        // Brand New Student
        return { isNew: true, profile: null };
    },

    // Save or register student profile
    async saveStudentProfile(profileData) {
        const cleanName = profileData.name.trim().toLowerCase();

        // Save to Supabase
        if (this.client) {
            try {
                await this.client
                    .from('students')
                    .upsert([
                        {
                            name: profileData.name,
                            roll_no: profileData.rollNo,
                            password: profileData.password || '123456',
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
            localStudents[cleanName] = profileData;
            localStorage.setItem('zafii_students', JSON.stringify(localStudents));
        } catch (e) {
            console.error("Local storage profile save failed:", e);
        }

        return profileData;
    },

    // ----------------- QUIZ RESULTS & HISTORY -----------------

    // Save Quiz Result to Supabase & LocalStorage
    async saveQuizResult(resultData) {
        // Save to Supabase
        if (this.client) {
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
                console.log("✅ Result saved to Supabase:", data);
            } catch (err) {
                console.error("Error saving to Supabase:", err);
            }
        }

        // Save locally for student history
        this.saveResultLocally(resultData);
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
    }
};

// Auto-run init
document.addEventListener('DOMContentLoaded', () => {
    SUPABASE_CONFIG.init();
});
