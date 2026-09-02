# 🏥 Zafii MedPortal - BSN Nursing Quiz & Marksheet System

Ek premium, modern (VIP Glassmorphism) web portal jo medical aur BSN (Bachelor of Science in Nursing) students ke liye banaya gaya hai. Isme live quizzes, automatic grading, aur Chrome me direct official PDF Marksheet download karne ki suvidha mojood hai.

---

## 🌟 Features (Khusoosiyat)

1. **VIP Glassmorphic Design**:
   - Modern dark medical theme jisme glowing borders aur frosted glass cards hain.
   - Koi chotey ya boring words nahi, spacious buttons aur clean typography.
2. **Instant Demo Student Login**:
   - Front page par **"⚡ One-Click Demo Student Login"** button mojood hai taake baghair type kiye test kiya ja sake.
   - Student Name aur Password ke sath normal login bhi mojood hai.
3. **Semester & Subject Partition**:
   - Semester 1 se Semester 8 tak tabs.
   - Har subject card par MCQs count, duration, aur badge icons hain.
4. **Live Quiz Arena**:
   - Real-time countdown timer jo aakhri 1 minute me pulse warning deta hai.
   - Progress bar, clear option selection (A, B, C, D), Previous / Next buttons.
5. **Instant Result & Review**:
   - Total Score, Percentage, Grade (A+, A, B, C, F) aur Pass/Fail status.
   - Confetti celebration animation pass hone par!
   - Har question ka detailed breakdown aur medical explanation/rationale.
6. **Official PDF Marksheet (Direct Chrome Download)**:
   - Button click karne par direct browser me official styled marksheet download ho jati hai.
   - File name automatically format hota hai: `BSN_Marksheet_[Student]_[Subject].pdf`.
7. **Supabase & Vercel Ready**:
   - Vercel par zero-config deployment.
   - Supabase configuration file tayyar hai.

---

## 🚀 How to Run Locally (Apne Computer Par Chalana)

Aapko kisi software ya install karne ki zaroorat nahi hai:
1. `d:\Aap For Android\Zafii WEB` folder me jayein.
2. **`index.html`** par double-click karein. Yeh Chrome ya kisi bhi browser me direct open ho jaye gi.
3. Front page par **"One-Click Demo Student Login"** par click karein aur dashboard explore karein!

---

## ☁️ How to Deploy on Vercel (Vercel Par Upload Karna)

Yeh website static frontend hai, is liye Vercel par 1 minute me live ho sakti hai:

### Tareeqa 1: GitHub ke zariye (Sab se Aasan)
1. Apne is folder ko GitHub repository me push karein.
2. [vercel.com](https://vercel.com) par login karein.
3. **"Add New Project"** click karein aur apni repo select karein.
4. Vercel automatically `vercel.json` detect karega. Sirf **"Deploy"** click karein!
5. Aapki website ka live URL (e.g. `zafii-medportal.vercel.app`) tayyar ho jaye ga.

### Tareeqa 2: Vercel CLI ke zariye
Terminal me run karein:
```bash
npm install -g vercel
vercel
```

---

## 🗄️ Supabase Database Connect Kaise Karein

Jab aap database connect karna chahein:
1. [supabase.com](https://supabase.com) par jayein aur free account bana kar naya project banayein.
2. Supabase Dashboard me **SQL Editor** me jakar yeh table create karein:
```sql
-- 1. Students Profile Table (New & Existing Student Sync)
CREATE TABLE students (
    id BIGSERIAL PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    roll_no TEXT,
    semester TEXT DEFAULT 'Semester 1',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Assessment Results & Marksheet History Table
CREATE TABLE quiz_results (
    id BIGSERIAL PRIMARY KEY,
    student_name TEXT NOT NULL,
    roll_no TEXT,
    semester TEXT,
    subject_title TEXT,
    subject_code TEXT,
    score INT,
    total_questions INT,
    percentage INT,
    grade TEXT,
    passed BOOLEAN,
    time_taken TEXT,
    breakdown JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```
3. Supabase Project Settings -> **API** me jayein aur `Project URL` aur `anon public key` copy karein.
4. File `js/supabase-config.js` open karein aur values paste kar dain:
```javascript
const SUPABASE_CONFIG = {
    url: "https://YOUR_PROJECT_ID.supabase.co",
    anonKey: "YOUR_ANON_KEY",
    ...
};
```
Bas! Ab saare students ke results real-time me Supabase me save hote rahen ge.

---

## 📝 Naye Questions Ya Subjects Kaise Add Karein?

File `js/quiz-data.js` open karein. Wahan structured format me har semester ke subjects aur MCQs likhe hain. Aap naye questions copy-paste karke asaani se add kar sakte hain.
