// ==========================================
// ZAFII MEDICAL PORTAL - BSN QUIZ DATA
// ==========================================
// You can easily add new semesters, subjects, and questions in this file.

const QUIZ_DATA = {
    // SEMESTER 1
    "sem-1": [
        {
            id: "s1-anatomy",
            title: "Anatomy & Physiology I",
            code: "ANAT-101",
            semester: "Semester 1",
            description: "Cell biology, skeletal system, muscular system & basic cardiovascular physiology.",
            durationMinutes: 10,
            icon: "fa-heart-pulse",
            badgeColor: "cyan",
            totalQuestions: 5,
            questions: [
                {
                    id: 1,
                    question: "Which organelle is famously known as the 'Powerhouse of the Cell'?",
                    options: [
                        "Ribosome",
                        "Mitochondria",
                        "Golgi apparatus",
                        "Endoplasmic Reticulum"
                    ],
                    correctIndex: 1,
                    explanation: "Mitochondria produce ATP (adenosine triphosphate), the primary energy currency of human cells."
                },
                {
                    id: 2,
                    question: "How many total bones are present in the adult human skeleton?",
                    options: [
                        "198",
                        "206",
                        "214",
                        "220"
                    ],
                    correctIndex: 1,
                    explanation: "An adult human skeleton is composed of 206 bones, divided into axial and appendicular divisions."
                },
                {
                    id: 3,
                    question: "Which chamber of the human heart pumps oxygenated blood into the systemic circulation via the Aorta?",
                    options: [
                        "Right Atrium",
                        "Right Ventricle",
                        "Left Atrium",
                        "Left Ventricle"
                    ],
                    correctIndex: 3,
                    explanation: "The left ventricle has the thickest muscular wall and pumps oxygenated blood into the aorta for systemic distribution."
                },
                {
                    id: 4,
                    question: "What is the normal resting arterial blood pressure range in a healthy adult?",
                    options: [
                        "120/80 mmHg",
                        "140/95 mmHg",
                        "90/50 mmHg",
                        "160/100 mmHg"
                    ],
                    correctIndex: 0,
                    explanation: "Normal adult blood pressure is clinically classified as approximately 120/80 mmHg."
                },
                {
                    id: 5,
                    question: "Which protein in red blood cells is responsible for binding and transporting oxygen throughout tissues?",
                    options: [
                        "Myoglobin",
                        "Hemoglobin",
                        "Albumin",
                        "Fibrinogen"
                    ],
                    correctIndex: 1,
                    explanation: "Hemoglobin is the iron-rich protein in erythrocytes that binds oxygen in lungs and releases it into peripheral tissues."
                }
            ]
        },
        {
            id: "s1-fon",
            title: "Fundamentals of Nursing I",
            code: "FON-101",
            semester: "Semester 1",
            description: "Core nursing ethics, patient hygiene, infection control, and vital signs monitoring.",
            durationMinutes: 8,
            icon: "fa-user-nurse",
            badgeColor: "emerald",
            totalQuestions: 4,
            questions: [
                {
                    id: 1,
                    question: "What is considered the single most effective method for preventing hospital-acquired infections (HAIs)?",
                    options: [
                        "Wearing sterile gowns all day",
                        "Frequent routine hand hygiene",
                        "Using strong prophylactic antibiotics",
                        "Isolating all admitted patients"
                    ],
                    correctIndex: 1,
                    explanation: "According to WHO & CDC, proper hand hygiene before and after patient contact is the most crucial action to stop pathogen transmission."
                },
                {
                    id: 2,
                    question: "What is the normal resting respiratory rate range for an adult at rest?",
                    options: [
                        "8 to 10 breaths/min",
                        "12 to 20 breaths/min",
                        "25 to 35 breaths/min",
                        "30 to 40 breaths/min"
                    ],
                    correctIndex: 1,
                    explanation: "Normal adult eupnea (resting breathing rate) ranges between 12 to 20 breaths per minute."
                },
                {
                    id: 3,
                    question: "Which position is best suited for a patient experiencing acute dyspnea (shortness of breath)?",
                    options: [
                        "Trendelenburg position",
                        "Prone position",
                        "Fowler's / High Fowler's position",
                        "Supine position"
                    ],
                    correctIndex: 2,
                    explanation: "Fowler's position allows maximum lung expansion by allowing the diaphragm to move downward easily."
                },
                {
                    id: 4,
                    question: "Which of the following is considered the '5th Vital Sign' in clinical assessment?",
                    options: [
                        "Pain score",
                        "Urine output",
                        "Pupil reactivity",
                        "Blood glucose"
                    ],
                    correctIndex: 0,
                    explanation: "Pain is widely monitored alongside Pulse, BP, Respiration, and Temperature as the fifth vital sign."
                }
            ]
        }
    ],

    // SEMESTER 2
    "sem-2": [
        {
        "id": "s2-qr-model-paper",
        "title": "Quantitative Reasoning - 70 Scenario Mock Paper",
        "code": "QR-201-MODEL",
        "semester": "Semester 2",
        "description": "70-scenario Quantitative Reasoning examination. Fully unlocked access with instant marksheet generation, score analytics, and answer explanations.",
        "durationMinutes": 70,
        "icon": "fa-calculator",
        "badgeColor": "amber",
        "isModelPaper": false,
        "showAnswersImmediately": true,
        "totalQuestions": 70,
        "questions": [
                {
                        "id": 1,
                        "question": "A patient is prescribed 1.5 L of IV fluid over 10 hours. After 6 hours, only 600 mL has been infused. What new hourly rate is required to complete the infusion on time?",
                        "options": [
                                "150 mL/hr",
                                "180 mL/hr",
                                "200 mL/hr",
                                "225 mL/hr"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) 225 mL/hr. Verified quantitative reasoning response."
                },
                {
                        "id": 2,
                        "question": "In a survey of 100 patients, 60 have symptom X, 40 have symptom Y, and 30 have symptom Z. Among them, 25 have X and Y, 15 have X and Z, 10 have Y and Z, and 5 have all three symptoms. How many patients have at least one symptom?",
                        "options": [
                                "65",
                                "75",
                                "85",
                                "95"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 85. Verified quantitative reasoning response."
                },
                {
                        "id": 3,
                        "question": "A nurse records the temperatures of 5 patients in a ward as 98.6\u00b0F, 99.0\u00b0F, 99.2\u00b0F, 100.1\u00b0F, and 100.5\u00b0F (mean = 99.48\u00b0F). If the nurse realizes the first reading was misread and should be 99.0\u00b0F instead of 98.6\u00b0F, what is the new mean?",
                        "options": [
                                "99.48\u00b0F",
                                "99.56\u00b0F",
                                "99.64\u00b0F",
                                "99.72\u00b0F"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 99.56\u00b0F. Verified quantitative reasoning response."
                },
                {
                        "id": 4,
                        "question": "A child weighing 18 kg is ordered Cephalexin 20 mg/kg/day in 2 divided doses. Stock available is 250 mg tablets. How many tablets are required per dose (rounded to a whole tablet as clinically noted)?",
                        "options": [
                                "0.75 tablet",
                                "1 tablet",
                                "1.5 tablets",
                                "2 tablets"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 1 tablet. Verified quantitative reasoning response."
                },
                {
                        "id": 5,
                        "question": "Why is Celsius temperature classified on the interval scale rather than the ratio scale?",
                        "options": [
                                "It lacks equal spacing between degrees",
                                "It has no true zero point representing absolute absence of heat",
                                "It cannot be used to compute averages or standard deviations",
                                "Values cannot be negative"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) It has no true zero point representing absolute absence of heat. Verified quantitative reasoning response."
                },
                {
                        "id": 6,
                        "question": "Using the same patient symptom survey from Q2 (100 patients: 60 with X, 40 with Y, 30 with Z; 25 with X\u2229Y, 15 with X\u2229Z, 10 with Y\u2229Z; 5 with all three), how many patients have exactly one symptom?",
                        "options": [
                                "25",
                                "35",
                                "45",
                                "55"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 45. Verified quantitative reasoning response."
                },
                {
                        "id": 7,
                        "question": "A patient is to receive 500 mL of normal saline over 4 hours using an IV set with a drop factor of 15 gtt/mL. Approximately what drip rate in drops per minute (gtt/min) is needed?",
                        "options": [
                                "31 gtt/min",
                                "32 gtt/min",
                                "33 gtt/min",
                                "34 gtt/min"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 31 gtt/min. Verified quantitative reasoning response."
                },
                {
                        "id": 8,
                        "question": "A researcher studies nurse burnout across Pakistan but only has access to nurses in Lahore hospitals. In research terminology, all diabetics/nurses accessible in Lahore hospitals represent the:",
                        "options": [
                                "Target population",
                                "Accessible (study) population",
                                "Sampling frame error",
                                "Parameter group"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Accessible (study) population. Verified quantitative reasoning response."
                },
                {
                        "id": 9,
                        "question": "If the mode of a dataset is 15 and the mean is 20, what does this pattern typically indicate about the distribution?",
                        "options": [
                                "Symmetric distribution",
                                "Skewed left",
                                "Skewed right",
                                "Uniform distribution"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Skewed right. Verified quantitative reasoning response."
                },
                {
                        "id": 10,
                        "question": "A 56-kg patient has a Body Surface Area (BSA) of 1.53 m^2. A chemotherapy order specifies 320 mg/m^2. What is the prescribed dose?",
                        "options": [
                                "420.6 mg",
                                "489.6 mg",
                                "90.6 mg",
                                "81.6 mg"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 489.6 mg. Verified quantitative reasoning response."
                },
                {
                        "id": 11,
                        "question": "A nurse observes that a patient has a fever, cough, and fatigue, and infers that influenza is the most likely explanation while keeping other possibilities open. This type of reasoning is best classified as:",
                        "options": [
                                "Deductive reasoning",
                                "Inductive reasoning",
                                "Abductive reasoning",
                                "Analogical reasoning"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Abductive reasoning. Verified quantitative reasoning response."
                },
                {
                        "id": 12,
                        "question": "A 25% solution is diluted to prepare 500 mL of a 10% solution. Using C_1V_1 = C_2V_2, how much of the 25% solution is required?",
                        "options": [
                                "150 mL",
                                "200 mL",
                                "250 mL",
                                "300 mL"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 200 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 13,
                        "question": "For a sample dataset with a sum of squared deviations from the mean equal to 100 across 10 observations (n = 10), what is the sample variance?",
                        "options": [
                                "10.00",
                                "11.11",
                                "100.00",
                                "1000.00"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 11.11. Verified quantitative reasoning response."
                },
                {
                        "id": 14,
                        "question": "A pediatric patient weighing 22 kg is ordered Ibuprofen 12 mg/kg/dose every 8 hours. Available suspension is 100 mg/5 mL. How many mL should be given per dose?",
                        "options": [
                                "10 mL",
                                "12 mL",
                                "13.2 mL",
                                "15 mL"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 13.2 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 15,
                        "question": "Given sets A = {1, 2, 3 and B = {a, b, consider the relation R = {(1, a), (2, a), (2, b). Is R a function?",
                        "options": [
                                "Yes, because every element of A appears",
                                "No, because element 2 maps to more than one element in B",
                                "Yes, because a is shared by two inputs",
                                "Only if inverted to R^{-1"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) No, because element 2 maps to more than one element in B. Verified quantitative reasoning response."
                },
                {
                        "id": 16,
                        "question": "In a hospital OPD, average waiting time is 20 minutes with a standard deviation of 5 minutes. Assuming a normal distribution, approximately what percentage of patients wait between 15 and 25 minutes?",
                        "options": [
                                "50%",
                                "68%",
                                "95%",
                                "99%"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 68%. Verified quantitative reasoning response."
                },
                {
                        "id": 17,
                        "question": "A patient is prescribed Enoxaparin 1 mg/kg SC every 12 hours and weighs 65 kg. Available pre-filled concentration is 60 mg/0.6 mL (100 mg/mL). By direct calculation, what volume corresponds to the ordered dose?",
                        "options": [
                                "0.5 mL",
                                "0.6 mL",
                                "0.65 mL",
                                "0.7 mL"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 0.65 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 18,
                        "question": "A nurse counts the number of occupied beds in a 20-bed ward. How is this variable classified in terms of continuity and measurement scale?",
                        "options": [
                                "Continuous and Interval",
                                "Discrete and Ratio",
                                "Discrete and Ordinal",
                                "Continuous and Ratio"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Discrete and Ratio. Verified quantitative reasoning response."
                },
                {
                        "id": 19,
                        "question": "A hospital averages 4 emergency cases per hour. Which probability distribution is most appropriate for modeling the count of emergency cases occurring in the next hour?",
                        "options": [
                                "Normal distribution",
                                "Binomial distribution",
                                "Poisson distribution",
                                "Uniform distribution"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Poisson distribution. Verified quantitative reasoning response."
                },
                {
                        "id": 20,
                        "question": "A 40-kg patient is prescribed a rescue drug at 2 mg/kg every 4 hours for 24 hours. What is the total daily dose administered over 24 hours?",
                        "options": [
                                "80 mg",
                                "240 mg",
                                "320 mg",
                                "480 mg"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) 480 mg. Verified quantitative reasoning response."
                },
                {
                        "id": 21,
                        "question": "A nurse calculates a patient's BMI as 35.16 and then counsels the patient on weight management. In the quantitative reasoning process, counseling the patient represents:",
                        "options": [
                                "Performing mathematical analysis",
                                "Translating the clinical issue into a formula",
                                "Communicating findings / taking action",
                                "Identifying the problem"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Communicating findings / taking action. Verified quantitative reasoning response."
                },
                {
                        "id": 22,
                        "question": "In a class of 50 students, 10 take Guitar, 20 take Singing, and 4 take both. How many students take neither Guitar nor Singing?",
                        "options": [
                                "16",
                                "20",
                                "24",
                                "30"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 24. Verified quantitative reasoning response."
                },
                {
                        "id": 23,
                        "question": "A dataset has a mean of 20 and a standard deviation of 5. What is the z-score corresponding to a value of 30?",
                        "options": [
                                "1",
                                "2",
                                "3",
                                "4"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 2. Verified quantitative reasoning response."
                },
                {
                        "id": 24,
                        "question": "Order: Heparin 1,200 units/hour IV. Available bag contains 25,000 units in 250 mL. What is the required infusion rate in mL/hr?",
                        "options": [
                                "10 mL/hr",
                                "11 mL/hr",
                                "12 mL/hr",
                                "13 mL/hr"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 12 mL/hr. Verified quantitative reasoning response."
                },
                {
                        "id": 25,
                        "question": "Which of the following graphs does NOT display percentages, while showing median, quartiles, and outliers?",
                        "options": [
                                "Pie chart",
                                "Histogram",
                                "Box-and-whisker plot",
                                "Frequency polygon"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Box-and-whisker plot. Verified quantitative reasoning response."
                },
                {
                        "id": 26,
                        "question": "A patient receives 450 mL normal saline, 350 mL glucose, and 700 mL Ringer's lactate IV, plus 250 mL oral juice. What is the total fluid intake?",
                        "options": [
                                "1,500 mL",
                                "1,750 mL",
                                "1,850 mL",
                                "2,000 mL"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 1,850 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 27,
                        "question": "What is the symmetric difference (A \u0394 B or A \u2295 B) of two sets A and B?",
                        "options": [
                                "Elements common to both A and B",
                                "Elements in A or B, but **not** in both",
                                "Elements in A that are not in B",
                                "The union of A and B minus their complement"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Elements in A or B, but **not** in both. Verified quantitative reasoning response."
                },
                {
                        "id": 28,
                        "question": "Daily OPD patient counts are 10, 15, 20, 25, 30. If on a busy day 50 patients visit, how are the range and standard deviation affected?",
                        "options": [
                                "Range increases, SD increases",
                                "Range increases, SD decreases",
                                "Range decreases, SD increases",
                                "Range decreases, SD decreases"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Range increases, SD increases. Verified quantitative reasoning response."
                },
                {
                        "id": 29,
                        "question": "A pediatric oncology patient is prescribed a drug at 150 mg/m^2/day with a BSA of 0.67 m^2, given in 2 divided doses. How much medication is given per dose?",
                        "options": [
                                "45 mg",
                                "50 mg",
                                "50.25 mg",
                                "51.25 mg"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 50.25 mg. Verified quantitative reasoning response."
                },
                {
                        "id": 30,
                        "question": "If events A and B are mutually exclusive, what is P(A and B)?",
                        "options": [
                                "P(A) \u00d7 P(B)",
                                "P(A) + P(B)",
                                "0",
                                "1"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 0. Verified quantitative reasoning response."
                },
                {
                        "id": 31,
                        "question": "Solve the system of equations for x: 2x + 4y = 12 and x - y = 2.",
                        "options": [
                                "1",
                                "2",
                                "3",
                                "4"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 3. Verified quantitative reasoning response."
                },
                {
                        "id": 32,
                        "question": "A nurse records hemoglobin levels of 5 patients: 12, 13, 14, 15, and 16 g/dL (mean = 14 g/dL). If a sixth patient with a hemoglobin of 8 g/dL is added, what is the new mean?",
                        "options": [
                                "13 g/dL",
                                "13.5 g/dL",
                                "14 g/dL",
                                "14.5 g/dL"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 13 g/dL. Verified quantitative reasoning response."
                },
                {
                        "id": 33,
                        "question": "Order: Dextrose 5% 1500 mL over 9 hours using an IV set of 60 gtt/mL. What is the approximate flow rate in gtt/min?",
                        "options": [
                                "166 gtt/min",
                                "167 gtt/min",
                                "168 gtt/min",
                                "170 gtt/min"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 167 gtt/min. Verified quantitative reasoning response."
                },
                {
                        "id": 34,
                        "question": "If 3 nurses take 8 hours to complete ward assessments, how many hours will 4 nurses take to complete the same task (assuming inverse proportion)?",
                        "options": [
                                "6 hours",
                                "8 hours",
                                "10 hours",
                                "12 hours"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 6 hours. Verified quantitative reasoning response."
                },
                {
                        "id": 35,
                        "question": "A diagnostic test has 95% sensitivity. Out of 100 infected individuals, how many are expected to test positive?",
                        "options": [
                                "5",
                                "50",
                                "95",
                                "100"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 95. Verified quantitative reasoning response."
                },
                {
                        "id": 36,
                        "question": "A patient needs 3/4 of a tablet three times daily for 7 days. How many whole tablets are required in total?",
                        "options": [
                                "15 tablets",
                                "16 tablets",
                                "18 tablets",
                                "21 tablets"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 16 tablets. Verified quantitative reasoning response."
                },
                {
                        "id": 37,
                        "question": "Which statement accurately distinguishes inductive reasoning from deductive reasoning in clinical and analytical thinking?",
                        "options": [
                                "Inductive moves from specific observations to probable general conclusions; deductive moves from general premises to specific conclusions",
                                "Inductive guarantees truth when premises are true; deductive risks overgeneralization",
                                "Inductive relies on ethical values; deductive relies on random sampling",
                                "Both move from general principles to certain outcomes"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Inductive moves from specific observations to probable general conclusions; deductive moves from general premises to specific conclusions. Verified quantitative reasoning response."
                },
                {
                        "id": 38,
                        "question": "A solution is mixed in a 2:7 ratio (drug:saline). For a 450 mL total mixture, how much drug is needed?",
                        "options": [
                                "90 mL",
                                "100 mL",
                                "125 mL",
                                "150 mL"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 100 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 39,
                        "question": "The mean of five numbers is 10. Four of the numbers are 8, 9, 10, and 11. What is the fifth number?",
                        "options": [
                                "10",
                                "12",
                                "13",
                                "14"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 12. Verified quantitative reasoning response."
                },
                {
                        "id": 40,
                        "question": "A nurse is ordered to administer 150 mg of a medication available as 50 mg per 2 mL. How many mL should be administered?",
                        "options": [
                                "3 mL",
                                "6 mL",
                                "7.5 mL",
                                "10 mL"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 6 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 41,
                        "question": "A frequency polygon is constructed by plotting and connecting:",
                        "options": [
                                "Cumulative frequencies along a line graph",
                                "Midpoints of the tops of bars in a histogram",
                                "Sector angles of a pie chart",
                                "Quartiles of a box-and-whisker plot"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Midpoints of the tops of bars in a histogram. Verified quantitative reasoning response."
                },
                {
                        "id": 42,
                        "question": "Given functions f = {(1, 2), (2, 3), (3, 4) and g = {(2, a), (3, b), (4, c), what is the composite function (g \u2218 f)?",
                        "options": [
                                "{(1, 2), (2, 3), (3, 4)",
                                "{(1, a), (2, b), (3, c)",
                                "{(2, a), (3, b), (4, c)",
                                "{(a, 1), (b, 2), (c, 3)"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) {(1, a), (2, b), (3, c). Verified quantitative reasoning response."
                },
                {
                        "id": 43,
                        "question": "A patient is ordered 0.9% NaCl 2500 mL to infuse over 24 hours. What is the approximate infusion rate in mL/min?",
                        "options": [
                                "1.70 mL/min",
                                "1.72 mL/min",
                                "1.74 mL/min",
                                "1.80 mL/min"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 1.74 mL/min. Verified quantitative reasoning response."
                },
                {
                        "id": 44,
                        "question": "If 8 workers complete a task in 6 days, how many days will 12 workers take to complete the same task?",
                        "options": [
                                "4 days",
                                "9 days",
                                "16 days",
                                "18 days"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 4 days. Verified quantitative reasoning response."
                },
                {
                        "id": 45,
                        "question": "Which of the following is a non-terminating, non-recurring decimal?",
                        "options": [
                                "0.75",
                                "0.333...",
                                "0.636363...",
                                "0.728459..."
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) 0.728459.... Verified quantitative reasoning response."
                },
                {
                        "id": 46,
                        "question": "A nurse calculates that a ward with 28 patients requires 7 nurses based on a 1:4 nurse-to-patient ratio. This application of quantitative reasoning primarily supports:",
                        "options": [
                                "Dosage conversion",
                                "Staffing and scheduling",
                                "Diagnostic test sensitivity",
                                "Ethical conflict resolution"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Staffing and scheduling. Verified quantitative reasoning response."
                },
                {
                        "id": 47,
                        "question": "If 25% of a number is 30, what is 40% of that same number?",
                        "options": [
                                "20",
                                "24",
                                "36",
                                "48"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) 48. Verified quantitative reasoning response."
                },
                {
                        "id": 48,
                        "question": "A patient's intake includes 0.5 L of water and 250 mL of IV fluids, while output is 0.3 L of urine. What is the total fluid intake in mL?",
                        "options": [
                                "500 mL",
                                "750 mL",
                                "800 mL",
                                "1050 mL"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 750 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 49,
                        "question": "A dataset has a mean of 100 and a standard deviation of 15. What value lies two standard deviations above the mean?",
                        "options": [
                                "115",
                                "130",
                                "145",
                                "150"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 130. Verified quantitative reasoning response."
                },
                {
                        "id": 50,
                        "question": "A medication order is for 1/2 gram of a drug, and available tablets are 250 mg each. How many tablets should be administered?",
                        "options": [
                                "1/2 tablet",
                                "1 tablet",
                                "2 tablets",
                                "4 tablets"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 2 tablets. Verified quantitative reasoning response."
                },
                {
                        "id": 51,
                        "question": "If y is inversely proportional to x (y \u221d 1/x) and y = 10 when x = 2, what is the constant of proportionality k?",
                        "options": [
                                "5",
                                "12",
                                "20",
                                "40"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 20. Verified quantitative reasoning response."
                },
                {
                        "id": 52,
                        "question": "A nurse records intake of 2200 mL and output of 1800 mL over a shift. This indicates:",
                        "options": [
                                "Negative fluid balance",
                                "Positive fluid balance",
                                "Zero fluid balance",
                                "Dehydration shock"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Positive fluid balance. Verified quantitative reasoning response."
                },
                {
                        "id": 53,
                        "question": "Which statistical concept is especially helpful for interpreting diagnostic test results accurately (such as sensitivity and specificity)?",
                        "options": [
                                "Conditional probability",
                                "Nominal scaling",
                                "Stem-and-leaf plotting",
                                "Arithmetic mean"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Conditional probability. Verified quantitative reasoning response."
                },
                {
                        "id": 54,
                        "question": "A vial contains 1 g of drug in 10 mL. To administer a 350 mg dose, how many mL are needed?",
                        "options": [
                                "2.5 mL",
                                "3.0 mL",
                                "3.5 mL",
                                "5.0 mL"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 3.5 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 55,
                        "question": "A 70-kg adult has a BSA of 1.78 m^2 and is ordered Doxorubicin 60 mg/m^2. What is the required dose?",
                        "options": [
                                "90 mg",
                                "100.8 mg",
                                "106.8 mg",
                                "115.8 mg"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 106.8 mg. Verified quantitative reasoning response."
                },
                {
                        "id": 56,
                        "question": "Why is median preferred over mean as a measure of central tendency for skewed distributions or ordinal ratings (e.g., pain or satisfaction scales)?",
                        "options": [
                                "It uses every observation equally",
                                "It is less affected by extreme values / outliers and suits ordered ranks",
                                "It always equals the mode",
                                "It requires a true zero point"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) It is less affected by extreme values / outliers and suits ordered ranks. Verified quantitative reasoning response."
                },
                {
                        "id": 57,
                        "question": "A wound is 75% healed. What fraction of the wound remains unhealed?",
                        "options": [
                                "1/4",
                                "1/3",
                                "2/5",
                                "3/4"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 1/4. Verified quantitative reasoning response."
                },
                {
                        "id": 58,
                        "question": "A pediatric patient weighs 22.4 kg and is ordered Cefotaxime 150 mg/kg/day divided q8h. How many mg are given per dose?",
                        "options": [
                                "860 mg",
                                "1120 mg",
                                "1450 mg",
                                "3360 mg"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 1120 mg. Verified quantitative reasoning response."
                },
                {
                        "id": 59,
                        "question": "If a sector of a pie chart measures 90\u00b0, what percentage of the whole does that sector represent?",
                        "options": [
                                "20%",
                                "25%",
                                "30%",
                                "50%"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 25%. Verified quantitative reasoning response."
                },
                {
                        "id": 60,
                        "question": "A drug dosage is 0.25 mg/kg of body weight. For a patient weighing 72.4 kg, what dose is needed?",
                        "options": [
                                "16.5 mg",
                                "18.1 mg",
                                "20.0 mg",
                                "24.5 mg"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 18.1 mg. Verified quantitative reasoning response."
                },
                {
                        "id": 61,
                        "question": "A nurse uses the reasoning: \"Drug A lowered blood pressure in adults; Drug B has similar properties, so Drug B might also lower blood pressure.\" This demonstrates:",
                        "options": [
                                "Deductive reasoning",
                                "Analogical reasoning",
                                "Ethical reasoning",
                                "Causal proof"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Analogical reasoning. Verified quantitative reasoning response."
                },
                {
                        "id": 62,
                        "question": "What is the range of a dataset if the range is 50 and the lowest value is 10? (Find the highest value.)",
                        "options": [
                                "40",
                                "50",
                                "60",
                                "70"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 60. Verified quantitative reasoning response."
                },
                {
                        "id": 63,
                        "question": "A 1000 mL bag of Dextrose 5% is ordered over 8 hours. What is the infusion rate in mL/min?",
                        "options": [
                                "1.50 mL/min",
                                "2.00 mL/min",
                                "2.08 mL/min",
                                "2.20 mL/min"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 2.08 mL/min. Verified quantitative reasoning response."
                },
                {
                        "id": 64,
                        "question": "In a relative frequency distribution, if a class has a relative frequency of 0.25 and the total number of observations is 40, what is the frequency of that class?",
                        "options": [
                                "10",
                                "16",
                                "20",
                                "25"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 10. Verified quantitative reasoning response."
                },
                {
                        "id": 65,
                        "question": "A hospital's infection control report records 5 CLABSI events per 1,000 line days. This metric is an example of a:",
                        "options": [
                                "Ratio",
                                "Rate",
                                "Inverse proportion",
                                "Complement"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Rate. Verified quantitative reasoning response."
                },
                {
                        "id": 66,
                        "question": "A medication capsule is shaped like a cylinder with two hemispherical ends. Geometrically, this is best described as a:",
                        "options": [
                                "2D polygon",
                                "Composite 3D shape",
                                "Regular polyhedron",
                                "Open plane figure"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Composite 3D shape. Verified quantitative reasoning response."
                },
                {
                        "id": 67,
                        "question": "If 20% of a number is 40, what is 30% of that number?",
                        "options": [
                                "40",
                                "50",
                                "60",
                                "70"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 60. Verified quantitative reasoning response."
                },
                {
                        "id": 68,
                        "question": "A patient is prescribed Insulin Glargine 0.4 units/kg SC daily at bedtime, weighing 75 kg. Available concentration is 100 units/mL. How many mL are administered per dose?",
                        "options": [
                                "0.25 mL",
                                "0.30 mL",
                                "0.35 mL",
                                "0.40 mL"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 0.30 mL. Verified quantitative reasoning response."
                },
                {
                        "id": 69,
                        "question": "In a frequency distribution, what is the cumulative frequency of the last class always equal to?",
                        "options": [
                                "0",
                                "1",
                                "Total frequency (N)",
                                "Relative frequency"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Total frequency (N). Verified quantitative reasoning response."
                },
                {
                        "id": 70,
                        "question": "Which reason explains why studying an entire population in healthcare research can sometimes be unethical?",
                        "options": [
                                "It reduces sample size",
                                "It may expose participants to unnecessary risk or harm",
                                "It prevents use of percentages",
                                "It eliminates standard deviation"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) It may expose participants to unnecessary risk or harm. Verified quantitative reasoning response."
                }
        ]
},
        {
        "id": "s2-theories-model-paper",
        "title": "Nursing Theories - 70 Scenario Mock Paper",
        "code": "NUR-202-MODEL",
        "semester": "Semester 2",
        "description": "70-scenario Nursing Theories examination covering Grand, Middle-Range, and Practice models with instant marksheet generation, score analytics, and rationales.",
        "durationMinutes": 70,
        "icon": "fa-book-medical",
        "badgeColor": "purple",
        "isModelPaper": false,
        "showAnswersImmediately": true,
        "totalQuestions": 70,
        "questions": [
                {
                        "id": 1,
                        "question": "A nursing theory is best described as:",
                        "options": [
                                "Factual",
                                "Definite",
                                "Dynamic",
                                "Universal"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Dynamic. Verified Nursing Theories response."
                },
                {
                        "id": 2,
                        "question": "Which statement accurately reflects how nursing theories are classified and evaluated?",
                        "options": [
                                "A theory usually fits one category only and is valid only if backed by major nursing organizations.",
                                "The category in which a theory fits depends on how it is interpreted, and theories lacking specificity are not limited solely to scholars.",
                                "Evaluating a theory begins primarily by checking whether other nursing scholars have received it well.",
                                "A theory is invalidated whenever a nurse's personal observations do not support it."
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) The category in which a theory fits depends on how it is interpreted, and theories lacking specificity are not limited solely to scholars.. Verified Nursing Theories response."
                },
                {
                        "id": 3,
                        "question": "A nursing student asks why examining nursing theory sometimes feels unresolved rather than settled around fixed rules. Which learning approach is least productive when engaging with nursing theory?",
                        "options": [
                                "Listening",
                                "Adopting another person's position",
                                "Expecting a firm answer",
                                "Evaluating"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Expecting a firm answer. Verified Nursing Theories response."
                },
                {
                        "id": 4,
                        "question": "A nurse theorist argues that valid knowledge claims must rest on sensory experiences verified through scientific methodology, whereas another emphasizes the nature of existence and \"what really exists.\" Which pairing accurately matches these philosophical branches?",
                        "options": [
                                "Empiricism and Ontology",
                                "Epistemology and Logic",
                                "Aesthetics and Metaphysics",
                                "Existentialism and Epistemology"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Empiricism and Ontology. Verified Nursing Theories response."
                },
                {
                        "id": 5,
                        "question": "Which branch of philosophy is specifically concerned with demonstrable principles, the structure of arguments and statements, and why an argument is valid?",
                        "options": [
                                "Metaphysics",
                                "Logic",
                                "Ontology",
                                "Epistemology"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Logic. Verified Nursing Theories response."
                },
                {
                        "id": 6,
                        "question": "In deductive reasoning, a statement or proposition used as a basis for forming or deriving a conclusion is a:",
                        "options": [
                                "Assumption",
                                "Testing",
                                "Premise",
                                "Theorem"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Premise. Verified Nursing Theories response."
                },
                {
                        "id": 7,
                        "question": "A concept in a theory that is as constrained as possible so that only elements strictly needed are included exemplifies:",
                        "options": [
                                "Parsimony",
                                "Ontology",
                                "Aesthetic",
                                "Construct"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Parsimony. Verified Nursing Theories response."
                },
                {
                        "id": 8,
                        "question": "A nurse is caring for a patient who recently underwent a mastectomy and wants to assess psycho-spiritual comfort needs rather than physical dressing status or pain scores alone. Which nursing action best addresses this?",
                        "options": [
                                "Asking the patient to rate her current level of pain",
                                "Listening to the way the patient describes herself",
                                "Checking the patient's dressings frequently",
                                "Noticing how many visitors the patient receives"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Listening to the way the patient describes herself. Verified Nursing Theories response."
                },
                {
                        "id": 9,
                        "question": "Which component of a nursing theory translates theoretical concepts into application within nursing practice?",
                        "options": [
                                "Definition",
                                "Assumptions",
                                "Models",
                                "Process"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Models. Verified Nursing Theories response."
                },
                {
                        "id": 10,
                        "question": "A nurse reflects on clinical observations to generate new inquiries and validate nursing knowledge systematically. Which statement best captures how theory, research, and practice relate?",
                        "options": [
                                "Practice only applies rules without generating questions for theory.",
                                "Theory, research, and practice affect each other in ways that are reciprocal, cyclical, and interactive.",
                                "Nursing knowledge relies on trial and error rather than research validation.",
                                "Theory replaces clinical skills and protocols in practice."
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Theory, research, and practice affect each other in ways that are reciprocal, cyclical, and interactive.. Verified Nursing Theories response."
                },
                {
                        "id": 11,
                        "question": "Which of the following is NOT one of the common concepts included across nursing theories?",
                        "options": [
                                "Nursing history",
                                "The person or patient",
                                "Health and environment",
                                "Nursing goals and functions"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Nursing history. Verified Nursing Theories response."
                },
                {
                        "id": 12,
                        "question": "A framework that explains how all parts of a system work together as a whole while each part also operates in relation to the whole independently is:",
                        "options": [
                                "Developmental theory",
                                "Adaptation theory",
                                "General System theory",
                                "Functional theory"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) General System theory. Verified Nursing Theories response."
                },
                {
                        "id": 13,
                        "question": "Which nurse theorist used \"General Systems Theory\" as a framework for theory development?",
                        "options": [
                                "Florence Nightingale",
                                "Betty Neuman",
                                "Hildegard Peplau",
                                "Martha E. Rogers"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Betty Neuman. Verified Nursing Theories response."
                },
                {
                        "id": 14,
                        "question": "According to the integrated knowledge stage of knowing, what characterizes a nurse at this stage?",
                        "options": [
                                "Relying strictly on unspoken intuition without external input",
                                "Assimilation and application of knowledge from nursing and other healthcare disciplines",
                                "Memorizing isolated procedures without clinical context",
                                "Rejecting theoretical frameworks in favor of routine"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Assimilation and application of knowledge from nursing and other healthcare disciplines. Verified Nursing Theories response."
                },
                {
                        "id": 15,
                        "question": "Florence Nightingale's view of nursing's role regarding the body and the environment is best summarized as:",
                        "options": [
                                "Curing disease directly through medical interventions",
                                "Facilitating the body's reparative processes by manipulating the client's environment so nature can act",
                                "Replacing physician diagnosis and treatment plans",
                                "Viewing human beings as open systems in constant energy exchange"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Facilitating the body's reparative processes by manipulating the client's environment so nature can act. Verified Nursing Theories response."
                },
                {
                        "id": 16,
                        "question": "According to Nightingale's theory, what does the canon of \"petty management\" mean?",
                        "options": [
                                "Empathy for the patient",
                                "Continuity of care when the nurse is absent",
                                "Standard of care",
                                "Environmental alteration"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Empathy for the patient. Verified Nursing Theories response."
                },
                {
                        "id": 17,
                        "question": "Which statement is an EXCEPTION among the assumptions of Florence Nightingale's Environmental Theory?",
                        "options": [
                                "Nurses should be trained",
                                "Nursing is both an empirical art and science",
                                "The disease process is important to nursing",
                                "Spirituality is the core of nursing care"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Spirituality is the core of nursing care. Verified Nursing Theories response."
                },
                {
                        "id": 18,
                        "question": "Which of the following is a criticism of Florence Nightingale's Theory?",
                        "options": [
                                "Overemphasis on health promotion and maintenance",
                                "Absence of a conceptual diagram",
                                "Neglect of environmental hygiene",
                                "Excessive focus on assisting the individual"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Absence of a conceptual diagram. Verified Nursing Theories response."
                },
                {
                        "id": 19,
                        "question": "Virginia Henderson defined the unique function of the nurse as assisting the individual toward health, recovery, or peaceful death with activities they would perform unaided if they had the necessary strength, will, or knowledge, aiming to:",
                        "options": [
                                "Ensure lifelong dependency on nursing care",
                                "Help the individual gain independence as rapidly as possible",
                                "Focus exclusively on medical cure phases",
                                "Standardize care around 12 physiological components"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Help the individual gain independence as rapidly as possible. Verified Nursing Theories response."
                },
                {
                        "id": 20,
                        "question": "In Henderson's framework, providing a comfortable bed, checking wheel locks, and keeping the call bell within the patient's reach addresses which patient need?",
                        "options": [
                                "Biological",
                                "Physical",
                                "Spiritual",
                                "Safety"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Safety. Verified Nursing Theories response."
                },
                {
                        "id": 21,
                        "question": "When a nurse performs daily passive exercises to reduce knee joint stiffness and the patient walks without difficulty after one week, how is this evaluation categorized?",
                        "options": [
                                "Positive patient outcomes",
                                "Positive nursing intervention's outcomes",
                                "Improved health strategies",
                                "Successful implementation of exercise"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Positive nursing intervention's outcomes. Verified Nursing Theories response."
                },
                {
                        "id": 22,
                        "question": "Henderson's view of the nursing process as \"really the application of the logical approach to the solution of a problem\" rests on which reason?",
                        "options": [
                                "Diagnoses are selected from NANDA classification",
                                "The steps are developed on the scientific method",
                                "It replaces individualized patient assessment",
                                "It applies only to community settings"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) The steps are developed on the scientific method. Verified Nursing Theories response."
                },
                {
                        "id": 23,
                        "question": "A patient works full-time during the day while attending nursing school at night, balancing competing demands on health and self-care. In Dorothea Orem's theory, which term best applies to the total set of self-care actions required to meet current health needs?",
                        "options": [
                                "Self-care agency",
                                "Self-care deficit",
                                "Therapeutic self-care demand",
                                "Partially compensatory system"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Therapeutic self-care demand. Verified Nursing Theories response."
                },
                {
                        "id": 24,
                        "question": "A nurse teaches a diabetic patient how to self-administer insulin independently while the patient manages daily routines. Which Orem nursing system does this reflect?",
                        "options": [
                                "Wholly compensatory",
                                "Partially compensatory",
                                "Supportive-educative",
                                "Dependent-care system"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Supportive-educative. Verified Nursing Theories response."
                },
                {
                        "id": 25,
                        "question": "Which of the following is NOT a category of self-care requisites in Orem's theory?",
                        "options": [
                                "Universal",
                                "Developmental",
                                "Health deviation",
                                "Fundamental"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Fundamental. Verified Nursing Theories response."
                },
                {
                        "id": 26,
                        "question": "In Orem's theory, variables such as gender, age, developmental state, health state, socio-cultural orientation, family system, and living pattern are termed:",
                        "options": [
                                "Attributory factors",
                                "Conditioning factors",
                                "Secondary factors",
                                "Privileges"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Conditioning factors. Verified Nursing Theories response."
                },
                {
                        "id": 27,
                        "question": "Which of the following is NOT related to Orem's theory?",
                        "options": [
                                "Theory of self-curing",
                                "Theory of self-care",
                                "Theory of self-care deficit",
                                "Theory of nursing systems"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Theory of self-curing. Verified Nursing Theories response."
                },
                {
                        "id": 28,
                        "question": "In Faye Glenn Abdellah's framework, care needs focused on facilitating the maintenance of oxygen and nutrition supply to body cells are classified as:",
                        "options": [
                                "Basic to all patients",
                                "Sustenal care needs",
                                "Remedial care needs",
                                "Restorative care needs"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Sustenal care needs. Verified Nursing Theories response."
                },
                {
                        "id": 29,
                        "question": "In Abdellah's theory, care needs that involve identifying and accepting positive and negative expressions, feelings, and reactions, and recognizing the emotional interrelatedness of illness, correspond to:",
                        "options": [
                                "Basic to all patients",
                                "Sustenal care needs",
                                "Remedial care needs",
                                "Restorative care needs"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Remedial care needs. Verified Nursing Theories response."
                },
                {
                        "id": 30,
                        "question": "Care needs that include accepting the optimum possible goals in light of physical and emotional limitations are classified under Abdellah's framework as:",
                        "options": [
                                "Basic to all patients",
                                "Sustenal care needs",
                                "Remedial care needs",
                                "Restorative care needs"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Restorative care needs. Verified Nursing Theories response."
                },
                {
                        "id": 31,
                        "question": "Which of the following is NOT included in Abdellah's 21 nursing problems?",
                        "options": [
                                "Hygiene and physical comfort",
                                "Drug administration errors",
                                "Activity and rest",
                                "Oxygen supply"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Drug administration errors. Verified Nursing Theories response."
                },
                {
                        "id": 32,
                        "question": "Which of the following is NOT a concept related to Faye Abdellah's theory?",
                        "options": [
                                "Sustenal care needs",
                                "The twenty-one nursing problems",
                                "Restorative care needs",
                                "Therapeutic self-care demand"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Therapeutic self-care demand. Verified Nursing Theories response."
                },
                {
                        "id": 33,
                        "question": "Abdellah's theory is best classified as a:",
                        "options": [
                                "Practice theory",
                                "Middle-range theory",
                                "Grand theory",
                                "Meta theory"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Middle-range theory. Verified Nursing Theories response."
                },
                {
                        "id": 34,
                        "question": "Understanding the role of social problems as influencing factors in illness belongs to which need category in Abdellah's framework?",
                        "options": [
                                "Basic to all patients",
                                "Remedial care need",
                                "Sustenal care need",
                                "Restorative care need"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Remedial care need. Verified Nursing Theories response."
                },
                {
                        "id": 35,
                        "question": "According to Hildegard Peplau's theory, which term represents \"a word symbol that implies forward movement of personality and other ongoing human processes in the direction of creative, constructive, productive, personal and community living\"?",
                        "options": [
                                "Health",
                                "Environment",
                                "Person",
                                "Nursing"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Health. Verified Nursing Theories response."
                },
                {
                        "id": 36,
                        "question": "In Peplau's interpersonal model, during which phase does the patient participate in goal setting, develop a feeling of belonging, and respond selectively to those who meet his or her needs?",
                        "options": [
                                "Orientation",
                                "Identification",
                                "Exploitation",
                                "Resolution"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Identification. Verified Nursing Theories response."
                },
                {
                        "id": 37,
                        "question": "According to Peplau, during which phase of the nurse-patient relationship is active listening most important?",
                        "options": [
                                "During the termination phase",
                                "During the working phase",
                                "During the orientation phase",
                                "During the planning phase"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) During the working phase. Verified Nursing Theories response."
                },
                {
                        "id": 38,
                        "question": "Which of the following is NOT one of the sequential phases of the interpersonal relationship in Peplau's theory?",
                        "options": [
                                "Orientation",
                                "Identification",
                                "Restoration",
                                "Exploitation"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Restoration. Verified Nursing Theories response."
                },
                {
                        "id": 39,
                        "question": "Serving as a substitute for another person, such as a parent or sibling, corresponds to which nursing role?",
                        "options": [
                                "Surrogate",
                                "Resource person",
                                "Teacher",
                                "Counselor"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Surrogate. Verified Nursing Theories response."
                },
                {
                        "id": 40,
                        "question": "Which of the following is NOT a concept related to the personal system in Imogene King's Theory?",
                        "options": [
                                "Perception",
                                "Self",
                                "Body image",
                                "Organization"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Organization. Verified Nursing Theories response."
                },
                {
                        "id": 41,
                        "question": "In Imogene King's Goal Attainment Theory, \"stress\" belongs to which system?",
                        "options": [
                                "Personal system",
                                "Interpersonal system",
                                "Social system",
                                "Transaction"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Interpersonal system. Verified Nursing Theories response."
                },
                {
                        "id": 42,
                        "question": "Imogene King's Goal Attainment Theory is classified under which category of theories?",
                        "options": [
                                "Need theories",
                                "Interaction theories",
                                "Outcome theories",
                                "Humanistic theories"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Interaction theories. Verified Nursing Theories response."
                },
                {
                        "id": 43,
                        "question": "Which theorist stated that \"each human being perceives the world as a total person in making transactions with individuals and things in environment\"?",
                        "options": [
                                "Neuman",
                                "Nightingale",
                                "Peplau",
                                "Imogene King"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Imogene King. Verified Nursing Theories response."
                },
                {
                        "id": 44,
                        "question": "According to Ida Jean Orlando's Nursing Process Theory, what initiates the nursing process, and what defines \"distress\"?",
                        "options": [
                                "Physician orders initiate it; distress is total inability to communicate.",
                                "Patient behavior or nurse observations initiate it; distress is the experience of a patient whose need has not been met (or has been only partially met).",
                                "Care plans initiate it; distress is refusal of medication.",
                                "Environmental changes initiate it; distress is anxiety before discharge."
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Patient behavior or nurse observations initiate it; distress is the experience of a patient whose need has not been met (or has been only partially met).. Verified Nursing Theories response."
                },
                {
                        "id": 45,
                        "question": "Which of the following is identified as a main weakness of Ida Jean Orlando's Nursing Process Theory?",
                        "options": [
                                "Overemphasis on rigid hospital hierarchies",
                                "Lack of operational definitions of society or environment",
                                "Exclusion of immediate patient needs",
                                "Focus only on long-term community health"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Lack of operational definitions of society or environment. Verified Nursing Theories response."
                },
                {
                        "id": 46,
                        "question": "In Lydia E. Hall's Care, Core, and Cure model, which component is based on pathological and therapeutic sciences?",
                        "options": [
                                "Care",
                                "Core",
                                "Cure",
                                "All three equally"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Cure. Verified Nursing Theories response."
                },
                {
                        "id": 47,
                        "question": "A nurse provides emotional support to a terminally ill patient, whereas another nurse bathes and feeds a dependent elderly patient. Which components of Lydia Hall's model do these two actions represent respectively?",
                        "options": [
                                "Care, then Core",
                                "Core, then Care",
                                "Cure, then Core",
                                "Care, then Cure"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Core, then Care. Verified Nursing Theories response."
                },
                {
                        "id": 48,
                        "question": "Which statement is EXCLUDED from the weaknesses of Lydia E. Hall's theory?",
                        "options": [
                                "Only applicable to adult patients",
                                "Acute-stage patients are not included",
                                "Only related to those who are ill",
                                "It appears to be completely and simply logical"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) It appears to be completely and simply logical. Verified Nursing Theories response."
                },
                {
                        "id": 49,
                        "question": "According to Lydia E. Hall, to whom does her theory apply?",
                        "options": [
                                "Adults",
                                "Children",
                                "16 years and above",
                                "16 years and below"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Adults. Verified Nursing Theories response."
                },
                {
                        "id": 50,
                        "question": "Ernestine Wiedenbach's conceptual model of nursing is called:",
                        "options": [
                                "The Helping Art of Clinical Nursing",
                                "Modeling and Role Modeling Theory",
                                "Health As Expanding Consciousness",
                                "Human-To-Human Relationship Model"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) The Helping Art of Clinical Nursing. Verified Nursing Theories response."
                },
                {
                        "id": 51,
                        "question": "In Callista Roy's Adaptation Model, which subsystem responds through four cognitive-emotive channels (perceptual and information processing, learning, judgment, and emotion)?",
                        "options": [
                                "Regulator subsystem",
                                "Cognator subsystem",
                                "Physiologic mode",
                                "Self-concept mode"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Cognator subsystem. Verified Nursing Theories response."
                },
                {
                        "id": 52,
                        "question": "Which of the following is NOT one of Roy's adaptive modes?",
                        "options": [
                                "Physiologic-physical / physiologic needs",
                                "Self-concept or group identity mode",
                                "Role function",
                                "Achievement"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Achievement. Verified Nursing Theories response."
                },
                {
                        "id": 53,
                        "question": "When applying Roy's Adaptation Model, which stimulus is NOT among the stimuli assessed?",
                        "options": [
                                "Focal stimulus",
                                "Contextual stimulus",
                                "Perceptual stimulus",
                                "Residual stimulus"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Perceptual stimulus. Verified Nursing Theories response."
                },
                {
                        "id": 54,
                        "question": "Which of the following is NOT a concept related to Roy's Adaptation Model?",
                        "options": [
                                "Focal stimuli",
                                "Cognator subsystem",
                                "Role function",
                                "Flexible line of defense"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Flexible line of defense. Verified Nursing Theories response."
                },
                {
                        "id": 55,
                        "question": "In Betty Neuman's Systems Model, the increase in energy occurring in relation to the degree of reaction to a stressor is termed:",
                        "options": [
                                "Reconstitution",
                                "Lines of resistance",
                                "Primary prevention",
                                "Secondary prevention"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Lines of resistance. Verified Nursing Theories response."
                },
                {
                        "id": 56,
                        "question": "According to Neuman's Systems Model, what serves as the standard for determining wellness-deviance?",
                        "options": [
                                "Flexible line of defense",
                                "Normal line of defense",
                                "Line of resistance",
                                "Core structure"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Line of resistance. Verified Nursing Theories response."
                },
                {
                        "id": 57,
                        "question": "Which environment in Neuman's model is unconsciously developed and used by the client to support protective coping?",
                        "options": [
                                "Internal environment",
                                "External environment",
                                "Created environment",
                                "All of the above"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Created environment. Verified Nursing Theories response."
                },
                {
                        "id": 58,
                        "question": "In Betty Neuman's model, \"cooling measures\" are considered part of which level of prevention?",
                        "options": [
                                "Primary prevention",
                                "Secondary prevention",
                                "Tertiary prevention",
                                "Primordial prevention"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Secondary prevention. Verified Nursing Theories response."
                },
                {
                        "id": 59,
                        "question": "Which of the following is NOT a concept in Dorothy Johnson's Behavioral Systems Model?",
                        "options": [
                                "Affiliation",
                                "Dependency",
                                "Achievement",
                                "Energy fields"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Energy fields. Verified Nursing Theories response."
                },
                {
                        "id": 60,
                        "question": "In Johnson's Behavioral System Model, \"predisposition to act with reference to the goal, in certain ways rather than other ways\" refers to:",
                        "options": [
                                "Drive",
                                "Set",
                                "Goal",
                                "Scope of action"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Set. Verified Nursing Theories response."
                },
                {
                        "id": 61,
                        "question": "\"Social inclusion, intimacy and the formation and attachment of a strong social bond\" are explained in which subsystem of Johnson's model?",
                        "options": [
                                "Dependency subsystem",
                                "Attachment or affiliative subsystem",
                                "Achievement subsystem",
                                "Aggressive subsystem"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Attachment or affiliative subsystem. Verified Nursing Theories response."
                },
                {
                        "id": 62,
                        "question": "Which of the following is NOT one of the four structural characteristics of each subsystem in Johnson's model?",
                        "options": [
                                "Drives",
                                "Set",
                                "Choices",
                                "Demands"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Demands. Verified Nursing Theories response."
                },
                {
                        "id": 63,
                        "question": "In Martha Rogers' Science of Unitary Human Beings, \"continuous and mutual interaction between man and environment\" is termed:",
                        "options": [
                                "Pattern",
                                "Integrality",
                                "Resonancy",
                                "Helicy"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Integrality. Verified Nursing Theories response."
                },
                {
                        "id": 64,
                        "question": "Which term refers to the \"irreducible, pan-dimensional energy field identified by pattern and integral with the human field\"?",
                        "options": [
                                "Health",
                                "Environment",
                                "Person",
                                "Nursing"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Environment. Verified Nursing Theories response."
                },
                {
                        "id": 65,
                        "question": "According to Rogers' theory, human beings cannot be divided into parts but must be viewed as a whole; this concept is called:",
                        "options": [
                                "Unitary human beings",
                                "Similarity of all human beings",
                                "Integrity of human beings",
                                "Dignity of human beings"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Unitary human beings. Verified Nursing Theories response."
                },
                {
                        "id": 66,
                        "question": "Rosemarie Rizzo Parse's Human Becoming Theory includes Meaning, Rhythmicity, and Cotranscendence. Which of the following is NOT part of Parse's framework?",
                        "options": [
                                "Helicy",
                                "Meaning",
                                "Rhythmicity",
                                "Cotranscendence"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Helicy. Verified Nursing Theories response."
                },
                {
                        "id": 67,
                        "question": "Which of the following is NOT one of Margaret Newman's assumptions?",
                        "options": [
                                "Pathological conditions serve as a manifestation of the total pattern of the individual",
                                "Pathology is primary and exists prior to structural and functional changes",
                                "Removal of pathology will change the pattern of the individual",
                                "Health encompasses conditions previously described as illness or pathology"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Pathology is primary and exists prior to structural and functional changes. Verified Nursing Theories response."
                },
                {
                        "id": 68,
                        "question": "Which of the following is NOT a weakness of Margaret Newman's theory?",
                        "options": [
                                "Abstract nature",
                                "Multidimensional nature",
                                "Qualitatively focused",
                                "Quantitatively focused"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Quantitatively focused. Verified Nursing Theories response."
                },
                {
                        "id": 69,
                        "question": "Which of the following is an EXCEPTION among the assumptions of Jean Watson's Theory of Human Caring?",
                        "options": [
                                "Effective caring promotes health and individual and family growth",
                                "The practice of caring is central to nursing",
                                "Caring is more healthogenic than curing",
                                "The development of a helping-trust relationship"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) The development of a helping-trust relationship. Verified Nursing Theories response."
                },
                {
                        "id": 70,
                        "question": "Which of the following is NOT among Jean Watson's carative factors?",
                        "options": [
                                "Forming humanistic-altruistic value system",
                                "Cultivating sensitivity to self and others",
                                "Strengthening flexible lines of defense",
                                "Instilling faith-hope"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Strengthening flexible lines of defense. Verified Nursing Theories response."
                }
        ]
},
        {
        "id": "s2-nutrition-model-paper",
        "title": "Applied Nutrition - 70 Scenario Mock Paper",
        "code": "NUT-203-MODEL",
        "semester": "Semester 2",
        "description": "70-scenario Applied Nutrition examination covering clinical diets, maternal & child nutrition, metabolic disorders, and TPN with instant marksheet generation.",
        "durationMinutes": 70,
        "icon": "fa-apple-whole",
        "badgeColor": "emerald",
        "isModelPaper": false,
        "showAnswersImmediately": true,
        "totalQuestions": 70,
        "questions": [
                {
                        "id": 1,
                        "question": "A pregnant woman with a pre-pregnancy BMI of 24.0 kg/m^2 is in her fourth week of a twin gestation. Which gestational weight gain range is recommended for a twin pregnancy?",
                        "options": [
                                "25\u201330 pounds",
                                "31\u201350 pounds",
                                "37\u201354 pounds",
                                "50\u201362 pounds"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 37\u201354 pounds. Verified Applied Nutrition response."
                },
                {
                        "id": 2,
                        "question": "A patient with chronic kidney disease (CKD) not on dialysis is prescribed a low-protein diet. Which daily protein range is standard for managing chronic kidney disease?",
                        "options": [
                                "0.4\u20130.8 g/kg/day",
                                "0.6\u20130.8 g/kg/day",
                                "1.0\u20131.2 g/kg/day",
                                "1.5\u20131.7 g/kg/day"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 0.6\u20130.8 g/kg/day. Verified Applied Nutrition response."
                },
                {
                        "id": 3,
                        "question": "A patient with kidney failure is placed on a strict 24-hour fluid restriction of 1000 mL. How should the nurse distribute this fluid allowance across the day?",
                        "options": [
                                "Eliminate liquids between meal times",
                                "Proportion more fluids during the day than during the night",
                                "Divide the fluids equally among the three nursing shifts",
                                "Include only clear fluids in the restriction plan"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Proportion more fluids during the day than during the night. Verified Applied Nutrition response."
                },
                {
                        "id": 4,
                        "question": "Which vitamin supplement is contraindicated in the treatment of hepatitis?",
                        "options": [
                                "Vitamin A",
                                "Vitamin B12",
                                "Vitamin B9",
                                "Vitamin E"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Vitamin A. Verified Applied Nutrition response."
                },
                {
                        "id": 5,
                        "question": "All of the following are standard dietary recommendations in hemochromatosis EXCEPT:",
                        "options": [
                                "Avoid foods high in iron",
                                "Avoid using iron pots and pans",
                                "Avoid taking iron-containing supplements/pills",
                                "Use iron pots and pans for cooking"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Use iron pots and pans for cooking. Verified Applied Nutrition response."
                },
                {
                        "id": 6,
                        "question": "Which enteral feeding tube starts in the nose and ends in the intestines?",
                        "options": [
                                "Nasogastric",
                                "Orogastric",
                                "Enterogastric",
                                "Nasoenteric"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Nasoenteric. Verified Applied Nutrition response."
                },
                {
                        "id": 7,
                        "question": "The \"physiological anemia of pregnancy\" is primarily a result of:",
                        "options": [
                                "A decrease in the mother's iron absorption",
                                "A decrease in the mother's water consumption",
                                "A decrease in the mother's red blood cell production",
                                "An increase in the mother's blood volume"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) An increase in the mother's blood volume. Verified Applied Nutrition response."
                },
                {
                        "id": 8,
                        "question": "Which of the following confirmed values meets the diagnostic threshold for diabetes mellitus?",
                        "options": [
                                "Random glucose > 120 mg/dL",
                                "2-hour post-meal glucose 126 mg/dL",
                                "Fasting blood glucose 100 mg/dL",
                                "HbA1c value of 6.5% or higher"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) HbA1c value of 6.5% or higher. Verified Applied Nutrition response."
                },
                {
                        "id": 9,
                        "question": "The glycosylated hemoglobin (HbA1c) test measures average blood glucose over the previous three months. Which value is considered a diagnosis of pre-diabetes?",
                        "options": [
                                "6.5\u20137%",
                                "5.7\u20136.4%",
                                "5\u20135.6%",
                                "Above 7%"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 5.7\u20136.4%. Verified Applied Nutrition response."
                },
                {
                        "id": 10,
                        "question": "Increased sodium intake is considered a risk factor for nephrolithiasis because it:",
                        "options": [
                                "Enhances urinary calcium excretion",
                                "Produces bile salts",
                                "Causes systemic water loss",
                                "Increases intestinal absorption of oxalates"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Enhances urinary calcium excretion. Verified Applied Nutrition response."
                },
                {
                        "id": 11,
                        "question": "Which renal disorder is characterized by high proteinuria, hypoproteinemia, and generalized edema?",
                        "options": [
                                "Chronic renal failure",
                                "Nephrotic syndrome",
                                "Nephrolithiasis",
                                "Acute renal failure"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Nephrotic syndrome. Verified Applied Nutrition response."
                },
                {
                        "id": 12,
                        "question": "Which diet is recommended for managing nephrotic syndrome?",
                        "options": [
                                "Low salt, low fat, and high cholesterol diet",
                                "Moderate salt, low fat, and low cholesterol diet",
                                "Low salt, moderate fat, and low cholesterol diet",
                                "Low salt, low fat, and low cholesterol diet"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Low salt, low fat, and low cholesterol diet. Verified Applied Nutrition response."
                },
                {
                        "id": 13,
                        "question": "Total parenteral nutrition (TPN) solutions contain high concentrations of:",
                        "options": [
                                "Protein and dextrose",
                                "Lipid emulsion alone",
                                "Electrolytes and water-soluble vitamins only",
                                "Fiber and disaccharides"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Protein and dextrose. Verified Applied Nutrition response."
                },
                {
                        "id": 14,
                        "question": "Which of the following accurately describes the greatest risk related to having a feeding tube?",
                        "options": [
                                "Electrolyte imbalance",
                                "Fluid volume overload",
                                "Aspiration",
                                "Local skin infection"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Aspiration. Verified Applied Nutrition response."
                },
                {
                        "id": 15,
                        "question": "Which set represents the five classic signs of intolerance to tube feeding?",
                        "options": [
                                "Nausea, diarrhea, cramping, constipation, dehydration",
                                "Nausea, diarrhea, cramping, constipation, heartburn",
                                "Nausea, diarrhea, dehydration, vomiting, abdominal distension",
                                "Vomiting, constipation, fever, hematuria, dehydration"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Nausea, diarrhea, cramping, constipation, dehydration. Verified Applied Nutrition response."
                },
                {
                        "id": 16,
                        "question": "A child has a deficiency in both protein and calories leading to stunted growth and severe wasting. Which condition is most likely present?",
                        "options": [
                                "Rickets",
                                "Kwashiorkor",
                                "Marasmus",
                                "Scurvy"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Marasmus. Verified Applied Nutrition response."
                },
                {
                        "id": 17,
                        "question": "A child exhibits a swollen belly (edema), hair discoloration, and skin lesions. Which condition is most likely present?",
                        "options": [
                                "Kwashiorkor",
                                "Scurvy",
                                "Marasmus",
                                "Rickets"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Kwashiorkor. Verified Applied Nutrition response."
                },
                {
                        "id": 18,
                        "question": "In Vitamin K deficiency, blood prothrombin content decreases markedly and blood clotting time is:",
                        "options": [
                                "Decreased",
                                "Increased",
                                "Extremely decreased",
                                "Unchanged"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Increased. Verified Applied Nutrition response."
                },
                {
                        "id": 19,
                        "question": "Which supplement is routinely given shortly after birth to newborns because they lack intestinal bacteria to synthesize it?",
                        "options": [
                                "Vitamin K",
                                "Vitamin B",
                                "Vitamin A",
                                "Vitamin C"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Vitamin K. Verified Applied Nutrition response."
                },
                {
                        "id": 20,
                        "question": "The clinical signs of Vitamin A deficiency are predominantly:",
                        "options": [
                                "Cardiac in origin",
                                "Gastric in origin",
                                "Neurological in origin",
                                "Ocular in origin"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Ocular in origin. Verified Applied Nutrition response."
                },
                {
                        "id": 21,
                        "question": "In adults, Vitamin D deficiency results in:",
                        "options": [
                                "Conjunctival xerosis",
                                "Night blindness",
                                "Osteomalacia",
                                "Scurvy"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Osteomalacia. Verified Applied Nutrition response."
                },
                {
                        "id": 22,
                        "question": "The activity of which vitamin depends upon efficient kidney function?",
                        "options": [
                                "Ascorbic acid",
                                "Vitamin B12",
                                "Vitamin D",
                                "Retinol"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Vitamin D. Verified Applied Nutrition response."
                },
                {
                        "id": 23,
                        "question": "What is the primary rationale for complex carbohydrate intake in a diabetic patient?",
                        "options": [
                                "Enhances cellular glucose uptake independent of insulin",
                                "Absorbs gradually into the blood",
                                "Promotes renal glucose reabsorption",
                                "Directly stimulates pancreatic beta-cell hyperplasia"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Absorbs gradually into the blood. Verified Applied Nutrition response."
                },
                {
                        "id": 24,
                        "question": "A nurse provides a bedtime snack for a patient. This intervention is based on the knowledge that intermediate-acting insulins are effective for an approximate duration of:",
                        "options": [
                                "6\u20138 hours",
                                "10\u201314 hours / 14\u201318 hours",
                                "24\u201328 hours",
                                "2\u20134 hours"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 10\u201314 hours / 14\u201318 hours. Verified Applied Nutrition response."
                },
                {
                        "id": 25,
                        "question": "The primary goal of exercise for diabetic patients is to:",
                        "options": [
                                "Increase cellular sensitivity to insulin",
                                "Promote peripheral blood circulation alone",
                                "Increase appetite",
                                "Decrease glucose utilization by skeletal muscle"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Increase cellular sensitivity to insulin. Verified Applied Nutrition response."
                },
                {
                        "id": 26,
                        "question": "Which food sources have a high glycemic index?",
                        "options": [
                                "White bread, potatoes, white rice",
                                "Mushrooms, zucchini, cabbage",
                                "Plain yogurt and milk",
                                "Non-starchy green leafy vegetables"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) White bread, potatoes, white rice. Verified Applied Nutrition response."
                },
                {
                        "id": 27,
                        "question": "According to diabetes prevention trials, high-risk individuals can reduce their risk of developing diabetes by:",
                        "options": [
                                "Taking a strict zero-carbohydrate diet",
                                "Consuming only saturated fats",
                                "Losing 5\u20137% of body weight through a hypocaloric low-fat diet and 30 minutes of daily activity",
                                "Skipping breakfast and dinner daily"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Losing 5\u20137% of body weight through a hypocaloric low-fat diet and 30 minutes of daily activity. Verified Applied Nutrition response."
                },
                {
                        "id": 28,
                        "question": "Which lipoprotein profile is essential for good cardiovascular health?",
                        "options": [
                                "High HDL and low LDL",
                                "High LDL and low HDL",
                                "Only high LDL",
                                "Only low HDL"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) High HDL and low LDL. Verified Applied Nutrition response."
                },
                {
                        "id": 29,
                        "question": "What is the optimal/healthy level of HDL cholesterol in adults?",
                        "options": [
                                "< 20 mg/dL",
                                "15\u201330 mg/dL",
                                "< 35 mg/dL",
                                "40 mg/dL or higher"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) 40 mg/dL or higher. Verified Applied Nutrition response."
                },
                {
                        "id": 30,
                        "question": "Monounsaturated fats are found in which dietary sources?",
                        "options": [
                                "Olive oil, canola oil, cashews, almonds, peanuts, avocados",
                                "Corn, soybean, safflower, and cottonseed oils",
                                "Whole milk, butter, cheese, red meat, egg yolks",
                                "Margarines, deep-fried chips, commercial baked goods"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Olive oil, canola oil, cashews, almonds, peanuts, avocados. Verified Applied Nutrition response."
                },
                {
                        "id": 31,
                        "question": "Why is sodium restriction important for cardiovascular patients?",
                        "options": [
                                "It promotes weight gain",
                                "It helps lower blood pressure and prevent edema",
                                "It increases HDL cholesterol levels",
                                "It minimizes urinary sodium excretion"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) It helps lower blood pressure and prevent edema. Verified Applied Nutrition response."
                },
                {
                        "id": 32,
                        "question": "Which dietary component has been shown to improve hypertension in humans?",
                        "options": [
                                "Sodium",
                                "Potassium",
                                "Saturated fats",
                                "Dietary cholesterol"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Potassium. Verified Applied Nutrition response."
                },
                {
                        "id": 33,
                        "question": "Which of the following is a modifiable risk factor for hypertension?",
                        "options": [
                                "Obesity",
                                "Genetic predisposition",
                                "Biological sex",
                                "Family history"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Obesity. Verified Applied Nutrition response."
                },
                {
                        "id": 34,
                        "question": "How do antioxidants in fruits and vegetables promote cardiovascular health?",
                        "options": [
                                "Raise blood pressure",
                                "Promote vascular inflammation",
                                "Reduce oxidative stress",
                                "Increase LDL cholesterol levels"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Reduce oxidative stress. Verified Applied Nutrition response."
                },
                {
                        "id": 35,
                        "question": "Which diet should be restricted for cardiovascular patients EXCEPT:",
                        "options": [
                                "Fried foods",
                                "Red meats",
                                "Margarine",
                                "Salmon"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Salmon. Verified Applied Nutrition response."
                },
                {
                        "id": 36,
                        "question": "Why are whole grains recommended for cardiovascular health?",
                        "options": [
                                "They increase LDL cholesterol levels",
                                "They help reduce blood pressure",
                                "They promote unwanted blood clotting",
                                "They contribute directly to excess weight gain"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) They help reduce blood pressure. Verified Applied Nutrition response."
                },
                {
                        "id": 37,
                        "question": "Which vitamin plays an important role in reducing the risk of neural tube defects during pregnancy?",
                        "options": [
                                "Vitamin C",
                                "Vitamin B12",
                                "Vitamin B9 (Folate)",
                                "Vitamin K"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Vitamin B9 (Folate). Verified Applied Nutrition response."
                },
                {
                        "id": 38,
                        "question": "To produce a healthy baby, a mother should ideally have an adequate diet:",
                        "options": [
                                "Only during the gestational period",
                                "Only during the first trimester",
                                "Only during the second and third trimesters",
                                "From before conception through the lactation period"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) From before conception through the lactation period. Verified Applied Nutrition response."
                },
                {
                        "id": 39,
                        "question": "The third trimester of pregnancy is the main time for fetal storage of:",
                        "options": [
                                "Iron, calcium, and folate",
                                "Iron, fat, and calcium",
                                "Vitamin D, vitamin K, and fat",
                                "Fat, calcium, and folate"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Iron, fat, and calcium. Verified Applied Nutrition response."
                },
                {
                        "id": 40,
                        "question": "What is the adequate intake of calcium (mg/day) for pregnant women under the age of 19?",
                        "options": [
                                "1300 mg/day",
                                "1000 mg/day",
                                "1100 mg/day",
                                "800 mg/day"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) 1300 mg/day. Verified Applied Nutrition response."
                },
                {
                        "id": 41,
                        "question": "A pregnant woman experiencing nausea and vomiting (morning sickness) should be advised to:",
                        "options": [
                                "Drink a large glass of water with high-fat food before rising",
                                "Eat small, frequent meals",
                                "Increase intake of high-fat, spicy, or salty foods",
                                "Limit all fluid intake throughout the day"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Eat small, frequent meals. Verified Applied Nutrition response."
                },
                {
                        "id": 42,
                        "question": "Persistent ingestion of non-nutritive substances for at least 1 month at a developmentally inappropriate age (such as during pregnancy) is known as:",
                        "options": [
                                "Behavioral food cult",
                                "Pica",
                                "Traditional food belief",
                                "Hyperemesis"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Pica. Verified Applied Nutrition response."
                },
                {
                        "id": 43,
                        "question": "Which of the following is a characteristic sign of preeclampsia?",
                        "options": [
                                "Vomiting",
                                "Abdominal pain",
                                "Hypertension",
                                "Loss of appetite"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Hypertension. Verified Applied Nutrition response."
                },
                {
                        "id": 44,
                        "question": "A perinatal complication of a diabetic pregnancy includes:",
                        "options": [
                                "Neonatal hypoglycemia",
                                "Hydrocephalus",
                                "Maternal postpartum hemorrhage",
                                "Small-for-gestational-age infant only"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Neonatal hypoglycemia. Verified Applied Nutrition response."
                },
                {
                        "id": 45,
                        "question": "What is the recommended weight gain during pregnancy for a woman with a normal pre-pregnancy BMI?",
                        "options": [
                                "At least 15 pounds",
                                "15\u201320 pounds",
                                "25\u201335 pounds",
                                "35\u201345 pounds"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 25\u201335 pounds. Verified Applied Nutrition response."
                },
                {
                        "id": 46,
                        "question": "How long is a full-term pregnancy?",
                        "options": [
                                "34 weeks",
                                "36 weeks",
                                "40 weeks",
                                "42 weeks"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 40 weeks. Verified Applied Nutrition response."
                },
                {
                        "id": 47,
                        "question": "Which of the following factors is LEAST likely to pose a risk to maternal and fetal health during pregnancy and childbirth?",
                        "options": [
                                "Multiple closely spaced pregnancies",
                                "Underweight mother",
                                "Maternal age of 15 years or under",
                                "Maternal age of 30 to 35 years"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Maternal age of 30 to 35 years. Verified Applied Nutrition response."
                },
                {
                        "id": 48,
                        "question": "Colostrum is a thick yellowish fluid that is higher in:",
                        "options": [
                                "Protein and minerals/antibodies",
                                "Fat and lactose sugar",
                                "Total calories compared to mature milk",
                                "Free fatty acids and cholesterol"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Protein and minerals/antibodies. Verified Applied Nutrition response."
                },
                {
                        "id": 49,
                        "question": "When a mother asks when breastfeeding should be started for her newborn baby after delivery, the best nursing response is:",
                        "options": [
                                "Soon after delivery / within one hour",
                                "After 6 hours",
                                "Within 24 hours",
                                "Whenever the mother feels rested"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Soon after delivery / within one hour. Verified Applied Nutrition response."
                },
                {
                        "id": 50,
                        "question": "Foods or fluids given to newborns before breastfeeding is established or before breast milk \"comes in,\" usually on the first day of life, are called:",
                        "options": [
                                "Mandatory feeds",
                                "Energy feeds",
                                "Prelacteal feeds",
                                "Weaning feeds"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Prelacteal feeds. Verified Applied Nutrition response."
                },
                {
                        "id": 51,
                        "question": "According to the WHO, at what age should weaning (complementary feeding) be started?",
                        "options": [
                                "3\u20134 months",
                                "5 months",
                                "6 months",
                                "9\u201310 months"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 6 months. Verified Applied Nutrition response."
                },
                {
                        "id": 52,
                        "question": "When an infant spits out new food and pulls faces during early feeding, what does this most commonly indicate?",
                        "options": [
                                "An indicator of permanent food dislike",
                                "Reaction to a new sensation and taste",
                                "Acute abdominal pain",
                                "Nausea and vomiting"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) Reaction to a new sensation and taste. Verified Applied Nutrition response."
                },
                {
                        "id": 53,
                        "question": "Foods for infants should be prepared without added:",
                        "options": [
                                "Sugar and salt",
                                "Salt and herbs",
                                "Water and oils",
                                "Vegetables and fruits"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Sugar and salt. Verified Applied Nutrition response."
                },
                {
                        "id": 54,
                        "question": "Which food is the least allergy-causing option and a great first solid food for an infant?",
                        "options": [
                                "Rice cereal",
                                "Skim cow's milk",
                                "Whole egg",
                                "Fish"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Rice cereal. Verified Applied Nutrition response."
                },
                {
                        "id": 55,
                        "question": "Some babies are intolerant to cow's milk formulas; in these cases, which option is used as a substitute?",
                        "options": [
                                "Casein-based milk",
                                "Whey-based milk",
                                "Soy formula",
                                "Unmodified evaporated milk"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Soy formula. Verified Applied Nutrition response."
                },
                {
                        "id": 56,
                        "question": "\"Stay-down\" formula milk is thickened formula used in babies with the aim of:",
                        "options": [
                                "Treating cow's milk allergy",
                                "Managing lactose intolerance",
                                "Preventing reflux",
                                "Replacing breast milk in healthy term infants"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Preventing reflux. Verified Applied Nutrition response."
                },
                {
                        "id": 57,
                        "question": "A low-birth-weight infant weighs less than:",
                        "options": [
                                "1500 g",
                                "2500 g",
                                "3000 g",
                                "3500 g"
                        ],
                        "correctIndex": 1,
                        "explanation": "Correct Option: (B) 2500 g. Verified Applied Nutrition response."
                },
                {
                        "id": 58,
                        "question": "The ratio of nutrient content to total energy content is termed:",
                        "options": [
                                "Nutrient density",
                                "Calorie density",
                                "Energy density",
                                "Glycemic load"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Nutrient density. Verified Applied Nutrition response."
                },
                {
                        "id": 59,
                        "question": "Which of the following statements regarding macronutrient energy value is accurate?",
                        "options": [
                                "Carbohydrates yield 4 kcal/g and fats yield 9 kcal/g",
                                "Protein yields 9 kcal/g",
                                "Fat yields 7 kcal/g",
                                "Carbohydrates yield 9 kcal/g"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) Carbohydrates yield 4 kcal/g and fats yield 9 kcal/g. Verified Applied Nutrition response."
                },
                {
                        "id": 60,
                        "question": "Calculate the BMI of a patient weighing 84 kg with a height of 2 m:",
                        "options": [
                                "18.5 kg/m^2",
                                "20 kg/m^2",
                                "21 kg/m^2",
                                "27 kg/m^2"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) 21 kg/m^2. Verified Applied Nutrition response."
                },
                {
                        "id": 61,
                        "question": "A young adult calculates her BMI and finds it to be 27 kg/m^2. What does this BMI range suggest about her weight status?",
                        "options": [
                                "Underweight",
                                "Normal weight",
                                "Overweight",
                                "Obese"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Overweight. Verified Applied Nutrition response."
                },
                {
                        "id": 62,
                        "question": "The difference between total body weight and body fat weight is called:",
                        "options": [
                                "Resting metabolic rate (RMR)",
                                "Basal metabolic rate (BMR)",
                                "Body mass index (BMI)",
                                "Lean body mass (LBM)"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Lean body mass (LBM). Verified Applied Nutrition response."
                },
                {
                        "id": 63,
                        "question": "What is the primary purpose of calculating Basal Metabolic Rate (BMR)?",
                        "options": [
                                "Estimate daily water intake",
                                "Assess specific vitamin deficiencies",
                                "Determine calorie needs at rest",
                                "Measure skeletal muscle strength"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Determine calorie needs at rest. Verified Applied Nutrition response."
                },
                {
                        "id": 64,
                        "question": "As a nurse, what is the best core approach to suggest for sustainable weight loss to a patient?",
                        "options": [
                                "Avoid all dietary fats",
                                "Avoid all carbohydrates",
                                "Skip two meals every day",
                                "Increase energy expenditure relative to energy intake"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) Increase energy expenditure relative to energy intake. Verified Applied Nutrition response."
                },
                {
                        "id": 65,
                        "question": "A patient has an intense fear of gaining weight and severely restricts food intake. The patient most likely suffers from:",
                        "options": [
                                "Anxiety nervosa",
                                "Bulimia nervosa",
                                "Anorexia nervosa",
                                "Binge eating disorder"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) Anorexia nervosa. Verified Applied Nutrition response."
                },
                {
                        "id": 66,
                        "question": "As a registered nurse educating a patient with gallbladder disease, why should you advise avoiding carbonated drinks?",
                        "options": [
                                "They increase gastric acidity",
                                "They increase blood pressure",
                                "They increase serum cholesterol",
                                "They increase gas/distension and movement of stones or discomfort"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) They increase gas/distension and movement of stones or discomfort. Verified Applied Nutrition response."
                },
                {
                        "id": 67,
                        "question": "Which of the following statements is NOT true of liver cirrhosis?",
                        "options": [
                                "It involves scar formation replacing healthy liver cells",
                                "It can result from chronic alcohol use or fatty/inflamed liver disease",
                                "It mostly affects only obese individuals",
                                "It represents advanced structural liver damage"
                        ],
                        "correctIndex": 2,
                        "explanation": "Correct Option: (C) It mostly affects only obese individuals. Verified Applied Nutrition response."
                },
                {
                        "id": 68,
                        "question": "Which test is primarily performed to detect liver damage?",
                        "options": [
                                "LFTs (Liver Function Tests)",
                                "RFTs (Renal Function Tests)",
                                "CBC (Complete Blood Count)",
                                "DHEA-sulfate serum test"
                        ],
                        "correctIndex": 0,
                        "explanation": "Correct Option: (A) LFTs (Liver Function Tests). Verified Applied Nutrition response."
                },
                {
                        "id": 69,
                        "question": "Why does alcoholic liver disease compromise nutritional status?",
                        "options": [
                                "Alcohol alters metabolism of protein, vitamins, and minerals",
                                "Alcohol consumption displaces nutrient intake",
                                "Nutrients may not be absorbed efficiently",
                                "All of the above"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) All of the above. Verified Applied Nutrition response."
                },
                {
                        "id": 70,
                        "question": "For planning a balanced diet, it is essential to consider:",
                        "options": [
                                "Knowledge of Recommended Dietary Allowances (RDAs)",
                                "Physiological status",
                                "Food groups",
                                "All of the above"
                        ],
                        "correctIndex": 3,
                        "explanation": "Correct Option: (D) All of the above. Verified Applied Nutrition response."
                }
        ]
}
    ],
    "sem-3": [
        {
            id: "s3-pharma",
            title: "Clinical Pharmacology I",
            code: "PHARM-301",
            semester: "Semester 3",
            description: "Drug classes, pharmacokinetic calculations, antibiotics, and cardiovascular drugs.",
            durationMinutes: 12,
            icon: "fa-capsules",
            badgeColor: "rose",
            totalQuestions: 5,
            questions: [
                {
                    id: 1,
                    question: "Before administering Digoxin, the nurse must assess the patient's apical pulse for 1 full minute and withhold if below:",
                    options: [
                        "50 bpm",
                        "60 bpm",
                        "70 bpm",
                        "80 bpm"
                    ],
                    correctIndex: 1,
                    explanation: "Digoxin has negative chronotropic effects. In adults, withhold and inform physician if apical heart rate is < 60 bpm."
                },
                {
                    id: 2,
                    question: "What is the primary antidote for acute Acetaminophen (Paracetamol) hepatotoxicity?",
                    options: [
                        "Naloxone",
                        "N-Acetylcysteine (NAC)",
                        "Flumazenil",
                        "Vitamin K"
                    ],
                    correctIndex: 1,
                    explanation: "N-Acetylcysteine replenishes glutathione reserves in the liver to neutralize toxic acetaminophen metabolites."
                },
                {
                    id: 3,
                    question: "Which opioid antagonist is administered to rapidly reverse respiratory depression caused by Morphine overdose?",
                    options: [
                        "Naloxone (Narcan)",
                        "Protamine sulfate",
                        "Atropine",
                        "Neostigmine"
                    ],
                    correctIndex: 0,
                    explanation: "Naloxone is a pure mu-opioid receptor antagonist that quickly restores ventilation in opioid toxicity."
                },
                {
                    id: 4,
                    question: "Which class of antibiotic is notoriously associated with potential ototoxicity and nephrotoxicity?",
                    options: [
                        "Macrolides",
                        "Aminoglycosides (e.g., Gentamicin)",
                        "Penicillins",
                        "Cephalosporins"
                    ],
                    correctIndex: 1,
                    explanation: "Aminoglycosides (Gentamicin, Amikacin) require careful therapeutic drug monitoring due to ear and kidney toxicity risks."
                },
                {
                    id: 5,
                    question: "The 'Six Rights' of medication administration include Right Patient, Right Drug, Right Dose, Right Route, Right Time, and Right:",
                    options: [
                        "Hospital",
                        "Documentation",
                        "Syringe size",
                        "Brand name"
                    ],
                    correctIndex: 1,
                    explanation: "Right Documentation is crucial in preventing medication errors and ensuring clinical accountability."
                }
            ]
        },
        {
            id: "s3-patho",
            title: "Pathophysiology I",
            code: "PATHO-301",
            semester: "Semester 3",
            description: "Cellular adaptations, inflammatory cascades, oncology, and shock mechanisms.",
            durationMinutes: 10,
            icon: "fa-microscope",
            badgeColor: "teal",
            totalQuestions: 4,
            questions: [
                {
                    id: 1,
                    question: "What cellular adaptation occurs when cells shrink in size due to disuse, denervation, or malnutrition?",
                    options: [
                        "Hypertrophy",
                        "Atrophy",
                        "Hyperplasia",
                        "Metaplasia"
                    ],
                    correctIndex: 1,
                    explanation: "Atrophy is a decrease in cell size leading to reduced organ or tissue mass."
                },
                {
                    id: 2,
                    question: "What is the hallmark physiological finding in Hypovolemic Shock?",
                    options: [
                        "Bradycardia with hypertension",
                        "Decreased circulating blood volume with tachycardia and hypotension",
                        "Bounding pulse with fever",
                        "High central venous pressure"
                    ],
                    correctIndex: 1,
                    explanation: "Loss of intravascular fluid triggers tachycardia to compensate for decreased stroke volume and falling blood pressure."
                },
                {
                    id: 3,
                    question: "The classic cardinal signs of acute inflammation include Rubor, Calor, Tumor, Dolor, and:",
                    options: [
                        "Functio laesa (loss of function)",
                        "Necrosis",
                        "Hyperemia",
                        "Fibrosis"
                    ],
                    correctIndex: 0,
                    explanation: "The 5 cardinal signs are redness (rubor), heat (calor), swelling (tumor), pain (dolor), and loss of function (functio laesa)."
                },
                {
                    id: 4,
                    question: "Type 1 Diabetes Mellitus is fundamentally caused by:",
                    options: [
                        "Peripheral insulin resistance",
                        "Autoimmune destruction of pancreatic beta cells",
                        "Excess glucagon secretion",
                        "Adrenal gland insufficiency"
                    ],
                    correctIndex: 1,
                    explanation: "Type 1 DM involves autoimmune destruction of pancreatic beta cells resulting in absolute insulin deficiency."
                }
            ]
        }
    ],

    // SEMESTER 4
    "sem-4": [
        {
            id: "s4-adult-health",
            title: "Adult Health Nursing I",
            code: "AHN-401",
            semester: "Semester 4",
            description: "Care of patients with cardiac, respiratory, and endocrine disorders.",
            durationMinutes: 12,
            icon: "fa-hospital-user",
            badgeColor: "indigo",
            totalQuestions: 4,
            questions: [
                {
                    id: 1,
                    question: "In a patient presenting with acute myocardial infarction (STEMI), what ECG change is diagnostic?",
                    options: [
                        "Flattened P waves",
                        "ST-segment elevation",
                        "Shortened PR interval",
                        "Inverted U wave"
                    ],
                    correctIndex: 1,
                    explanation: "ST-segment elevation indicates acute myocardial transmural injury requiring urgent reperfusion therapy."
                },
                {
                    id: 2,
                    question: "What is the primary immediate nursing intervention for a hospitalized patient actively having a tonic-clonic seizure?",
                    options: [
                        "Restrain limbs tightly to prevent injury",
                        "Insert a wooden tongue depressor into mouth",
                        "Protect the patient's head, turn them to lateral position, and ensure open airway",
                        "Administer oral water immediately"
                    ],
                    correctIndex: 2,
                    explanation: "Turning patient to lateral side prevents aspiration, and protecting head prevents blunt trauma. Never insert objects in the mouth."
                },
                {
                    id: 3,
                    question: "A chronic COPD patient receiving oxygen therapy should generally be kept at what target SpO2 to prevent hypercapnic respiratory failure?",
                    options: [
                        "99% - 100%",
                        "88% - 92%",
                        "70% - 75%",
                        "Always 95% minimum"
                    ],
                    correctIndex: 1,
                    explanation: "In chronic CO2 retainers, high flow oxygen can blunt hypoxic respiratory drive; 88-92% is the standard safe target."
                },
                {
                    id: 4,
                    question: "Which laboratory electrolyte abnormality is most dangerous for precipitating lethal cardiac dysrhythmias like Ventricular Fibrillation?",
                    options: [
                        "Mild Hyponatremia (132 mEq/L)",
                        "Severe Hyperkalemia (> 6.5 mEq/L)",
                        "Slight Hypocalcemia",
                        "Hyperuricemia"
                    ],
                    correctIndex: 1,
                    explanation: "Potassium levels directly influence cardiac membrane resting potentials. Severe hyperkalemia causes peaked T waves and ventricular arrest."
                }
            ]
        }
    ],

    // SEMESTER 5
    "sem-5": [],

    "sem-6": [
        {
            id: "s6-mental-health",
            title: "Mental Health Nursing",
            code: "MHN-601",
            semester: "Semester 6",
            description: "Psychiatric disorders, therapeutic communication, mood stabilizers, and counseling.",
            durationMinutes: 10,
            icon: "fa-hands-holding-child",
            badgeColor: "cyan",
            totalQuestions: 2,
            questions: [
                {
                    id: 1,
                    question: "What is the primary therapeutic communication technique when a patient experiences auditory hallucinations?",
                    options: [
                        "Argue that the voices are not real",
                        "Pretend to hear the voices as well",
                        "Acknowledge the patient's feelings while stating reality gently",
                        "Leave the patient alone immediately"
                    ],
                    correctIndex: 2,
                    explanation: "Nurses validate emotional distress while maintaining therapeutic reality ('I believe the voices seem frightening to you, but I do not hear them')."
                },
                {
                    id: 2,
                    question: "Which medication requires close monitoring of serum levels to prevent toxicity (therapeutic range 0.6 - 1.2 mEq/L)?",
                    options: [
                        "Lithium Carbonate",
                        "Sertraline",
                        "Haloperidol",
                        "Diazepam"
                    ],
                    correctIndex: 0,
                    explanation: "Lithium has a very narrow therapeutic window (0.6 to 1.2 mEq/L) requiring frequent blood serum monitoring."
                }
            ]
        }
    ],
    "sem-7": [
        {
            id: "s7-critical-care",
            title: "Critical Care Nursing",
            code: "CCN-701",
            semester: "Semester 7",
            description: "ICU management, invasive arterial lines, mechanical ventilation, and vasoactive infusions.",
            durationMinutes: 10,
            icon: "fa-heart-circle-bolt",
            badgeColor: "rose",
            totalQuestions: 2,
            questions: [
                {
                    id: 1,
                    question: "What is the phlebostatic axis location used to zero the pressure transducer for central venous lines?",
                    options: [
                        "2nd intercostal space, mid-clavicular line",
                        "4th intercostal space, mid-axillary line",
                        "6th intercostal space, anterior axillary line",
                        "Xiphoid process level"
                    ],
                    correctIndex: 1,
                    explanation: "The phlebostatic axis represents the level of the atria, located at the 4th intercostal space, mid-anterior-posterior chest level (mid-axillary)."
                },
                {
                    id: 2,
                    question: "A high-pressure alarm on a mechanical ventilator most commonly indicates:",
                    options: [
                        "A leak or disconnection in circuit",
                        "Endotracheal tube secretions, biting the tube, or coughing",
                        "Decreased airway resistance",
                        "Cuff deflation"
                    ],
                    correctIndex: 1,
                    explanation: "High-pressure alarms alert to airway obstructions such as mucus plugging, kinking, or patient coughing/biting."
                }
            ]
        }
    ],
    "sem-8": [
        {
            id: "s8-leadership",
            title: "Nursing Leadership & Management",
            code: "NLM-801",
            semester: "Semester 8",
            description: "Healthcare ethics, delegation rules, hospital administration, and evidence-based practice.",
            durationMinutes: 10,
            icon: "fa-clipboard-user",
            badgeColor: "emerald",
            totalQuestions: 2,
            questions: [
                {
                    id: 1,
                    question: "Which leadership style involves staff participation in decision-making and fosters team empowerment?",
                    options: [
                        "Autocratic leadership",
                        "Democratic / Participative leadership",
                        "Laissez-faire leadership",
                        "Bureaucratic leadership"
                    ],
                    correctIndex: 1,
                    explanation: "Democratic leaders encourage collaborative decision-making, increasing staff morale and clinical engagement."
                },
                {
                    id: 2,
                    question: "Which task can a Registered Nurse (RN) appropriately delegate to a certified nursing assistant (CNA)?",
                    options: [
                        "Initial admission assessment",
                        "Formulating a nursing care plan",
                        "Assisting a stable postoperative patient with ambulation",
                        "Administering intravenous medication"
                    ],
                    correctIndex: 2,
                    explanation: "Assessment, teaching, and intravenous medication administration cannot be delegated. Assisting stable patients with ambulation is appropriate for CNAs."
                }
            ]
        }
    ]
};

// Helper: Get subjects for a semester
function getSubjectsBySemester(semesterKey) {
    return QUIZ_DATA[semesterKey] || [];
}

// Helper: Find a specific quiz by ID
function findQuizById(quizId) {
    for (const semKey in QUIZ_DATA) {
        const found = QUIZ_DATA[semKey].find(q => q.id === quizId);
        if (found) return found;
    }
    return null;
}
