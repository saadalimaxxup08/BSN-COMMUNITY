// ==========================================
// ZAFII MEDICAL PORTAL - BSN QUIZ DATA
// ==========================================
// Aap is file me asaani se naye semesters, subjects aur questions add kar sakte hain.

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
            id: "s2-micro",
            title: "Microbiology for Nurses",
            code: "MIC-201",
            semester: "Semester 2",
            description: "Bacterial classification, sterilization techniques, virology, and clinical asepsis.",
            durationMinutes: 10,
            icon: "fa-virus-covid",
            badgeColor: "purple",
            totalQuestions: 4,
            questions: [
                {
                    id: 1,
                    question: "In Gram staining technique, Gram-positive bacteria retain crystal violet dye and appear:",
                    options: [
                        "Bright Pink/Red",
                        "Deep Purple/Blue",
                        "Colorless",
                        "Yellow"
                    ],
                    correctIndex: 1,
                    explanation: "Gram-positive bacteria have thick peptidoglycan walls that retain crystal violet dye, appearing purple/blue."
                },
                {
                    id: 2,
                    question: "Autoclaving uses steam under pressure for sterilization. What is the standard temperature and pressure?",
                    options: [
                        "100°C at 10 psi for 5 mins",
                        "121°C at 15 psi for 15-20 mins",
                        "150°C at 30 psi for 45 mins",
                        "80°C at 5 psi for 1 hour"
                    ],
                    correctIndex: 1,
                    explanation: "Standard autoclave parameters for complete sterilization are 121°C (250°F) at 15 psi for 15 to 20 minutes."
                },
                {
                    id: 3,
                    question: "Which organism is the most common cause of catheter-associated urinary tract infections (CAUTIs)?",
                    options: [
                        "Escherichia coli (E. coli)",
                        "Staphylococcus aureus",
                        "Candida albicans",
                        "Pseudomonas aeruginosa"
                    ],
                    correctIndex: 0,
                    explanation: "Uropathogenic E. coli accounts for the majority of CAUTIs in clinical settings."
                },
                {
                    id: 4,
                    question: "Which type of hepatitis virus is primarily transmitted through the fecal-oral route?",
                    options: [
                        "Hepatitis B",
                        "Hepatitis C",
                        "Hepatitis A",
                        "Hepatitis D"
                    ],
                    correctIndex: 2,
                    explanation: "Hepatitis A and Hepatitis E are transmitted via contaminated food and water (fecal-oral route)."
                }
            ]
        },
        {
            id: "s2-physio",
            title: "Applied Physiology II",
            code: "PHYS-202",
            semester: "Semester 2",
            description: "Renal clearance, endocrine regulation, and neural pathway mechanics.",
            durationMinutes: 10,
            icon: "fa-brain",
            badgeColor: "amber",
            totalQuestions: 4,
            questions: [
                {
                    id: 1,
                    question: "What is the structural and functional unit of the human kidney?",
                    options: [
                        "Neuron",
                        "Nephron",
                        "Alveolus",
                        "Hepatocyte"
                    ],
                    correctIndex: 1,
                    explanation: "The nephron is the microscopic structural and functional filtering unit of the kidney."
                },
                {
                    id: 2,
                    question: "Which endocrine hormone decreases blood glucose levels by facilitating cellular uptake?",
                    options: [
                        "Glucagon",
                        "Cortisol",
                        "Insulin",
                        "Thyroxine"
                    ],
                    correctIndex: 2,
                    explanation: "Insulin, secreted by pancreatic beta cells, promotes cellular glucose uptake and glycogen storage."
                },
                {
                    id: 3,
                    question: "What is the normal Glomerular Filtration Rate (GFR) in a healthy young adult?",
                    options: [
                        "30 - 45 mL/min",
                        "60 - 80 mL/min",
                        "90 - 125 mL/min",
                        "180 - 200 mL/min"
                    ],
                    correctIndex: 2,
                    explanation: "Normal healthy GFR is typically 90 to 125 mL/min/1.73 m²."
                },
                {
                    id: 4,
                    question: "Which part of the brain is the primary control center for regulating body temperature, hunger, and thirst?",
                    options: [
                        "Cerebellum",
                        "Hypothalamus",
                        "Medulla Oblongata",
                        "Thalamus"
                    ],
                    correctIndex: 1,
                    explanation: "The hypothalamus acts as the body's internal thermostat and neuroendocrine coordinator."
                }
            ]
        }
    ],

    // SEMESTER 3
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
    "sem-5": [
        {
        "id": "s5-model-paper",
        "title": "Pediatric Health Nursing - 70 Scenario Mock Paper",
        "code": "PED-501-MODEL",
        "semester": "Semester 5",
        "description": "Official 70-scenario Pediatric Health Nursing examination. Strict 70-minute timer with protected candidate answers.",
        "durationMinutes": 70,
        "icon": "fa-baby",
        "badgeColor": "rose",
        "isModelPaper": true,
        "showAnswersImmediately": false,
        "whatsappGroupUrl": "https://chat.whatsapp.com/EoHSF3h2DV02GvOErsPhoK",
        "totalQuestions": 70,
        "questions": [
                {
                        "id": 1,
                        "question": "RN Sidra is caring for a neonate in NICU with clinical feature of respiratory rate > 60 B/min, nasal flaring, intercostal and substernal retractions, and expiratory grunting. Which grade of respiratory distress is this?",
                        "options": [
                                "Grade I",
                                "Grade II",
                                "Grade III",
                                "Grade IV"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 2,
                        "question": "A 4-year-old child admitted with severe nephrotic syndrome shows localized facial puffiness around the eyes in the morning. Which pathophysiological mechanism accounts for this periorbital edema?",
                        "options": [
                                "Increased hydrostatic pressure secondary to sodium retention",
                                "Decreased plasma oncotic pressure due to severe proteinuria",
                                "Obstruction of renal lymphatic drainage",
                                "Glomerular hyperfiltration leading to fluid overload"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 3,
                        "question": "What is the benefit of taking a child on a tour of the hospital before their visit?",
                        "options": [
                                "It increases the child's anxiety and stress levels.",
                                "It helps familiarize the child with the hospital environment.",
                                "It restricts the child's movement and play.",
                                "It minimizes the child's exposure to healthcare professionals."
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 4,
                        "question": "Nurse Ahmad is monitoring an infant with Tetralogy of Fallot who suddenly becomes dyspneic, cyanotic, and hyperpneic during a crying episode. What is the nurse\u2019s immediate priority action?",
                        "options": [
                                "Administer high-flow oxygen via facemask",
                                "Place the infant in a knee-chest position",
                                "Administer IV morphine sulfate",
                                "Notify the pediatric cardiologist"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 5,
                        "question": "Which of the following can be a common stressor for a hospitalized patient?",
                        "options": [
                                "Familiar surroundings",
                                "Regular daily routines",
                                "Separation from loved ones",
                                "Access to electronic devices"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 6,
                        "question": "A 6-month-old infant is brought to the clinic with persistent vomiting, weight loss, and a palpable sausage-shaped mass in the right upper quadrant. The mother notes red, jelly-like stools. Which condition is suspected?",
                        "options": [
                                "Hypertrophic Pyloric Stenosis",
                                "Intussusception",
                                "Hirschsprung\u2019s Disease",
                                "Meckel\u2019s Diverticulum"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 7,
                        "question": "Which of the following is a risk factor for the development of congenital heart disease in infants?",
                        "options": [
                                "Maternal smoking during pregnancy",
                                "Consuming caffeine during pregnancy",
                                "Lack of physical activity during pregnancy",
                                "Exposure to sunlight during pregnancy"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 8,
                        "question": "A 3-year-old child diagnosed with acute laryngotracheobronchitis (Croup) presents with inspiratory stridor at rest and intercostal retractions. Which medication order should the nurse execute first?",
                        "options": [
                                "Oral Dexamethasone",
                                "Nebulized Racemic Epinephrine",
                                "IV Ampicillin",
                                "Inhaled Salbutamol"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 9,
                        "question": "Which of the following is a common symptom seen in patients with cyanotic heart disease?",
                        "options": [
                                "Pale skin",
                                "Clubbing",
                                "Hypotension",
                                "Rapid weight gain"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 10,
                        "question": "While caring for a 5-year-old child admitted with acute acute post-streptococcal glomerulonephritis (APSGN), which clinical finding requires immediate intervention by the nurse?",
                        "options": [
                                "Tea-colored urine output of 1.5 mL/kg/hr",
                                "Blood pressure reading of 140/90 mmHg with severe headache",
                                "Serum potassium level of 4.2 mEq/L",
                                "Mild periorbital edema in the morning"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 11,
                        "question": "Rheumatic heart disease mainly affects which part of the heart?",
                        "options": [
                                "Aortic valve",
                                "Mitral valve",
                                "Pulmonary valve",
                                "Tricuspid valve"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 12,
                        "question": "A newborn is diagnosed with Hirschsprung\u2019s disease. Which characteristic clinical presentation would the nurse expect to observe during the initial neonatal assessment?",
                        "options": [
                                "Projectile non-bilious vomiting after feeding",
                                "Failure to pass meconium within the first 24\u201348 hours of life",
                                "Scaphoid abdomen with respiratory distress",
                                "Continuous drooling and choking during first oral feed"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 13,
                        "question": "Which type of hernia occurs when a portion of the stomach protrudes through the diaphragm into the chest cavity?",
                        "options": [
                                "Inguinal hernia",
                                "Hiatal hernia",
                                "Umbilical hernia",
                                "Incisional hernia"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 14,
                        "question": "A 2-year-old child with a history of ventricular septal defect (VSD) is prescribed Digoxin. Prior to administering the morning dose, the nurse measures the apical pulse for one full minute and notes a rate of 82 beats per minute. What is the appropriate nursing action?",
                        "options": [
                                "Administer the dose as prescribed and document the pulse",
                                "Hold the medication and notify the healthcare provider",
                                "Recheck the pulse in 30 minutes before giving the dose",
                                "Give half of the prescribed dose"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 15,
                        "question": "Which nursing intervention is important when caring for a patient with a liver abscess?",
                        "options": [
                                "Encouraging high-protein diet",
                                "Administering anticoagulant medications",
                                "Promoting bed rest and immobilization",
                                "Providing pain relief and comfort measures"
                        ],
                        "correctIndex": 3,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 16,
                        "question": "A 10-month-old infant is admitted with severe dehydration secondary to acute gastroenteritis. Which clinical sign indicates to the nurse that the infant is progressing into hypovolemic shock?",
                        "options": [
                                "Depressed anterior fontanelle",
                                "Capillary refill time of 5 seconds and cool extremities",
                                "Absence of tears when crying",
                                "Dry mucous membranes"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 17,
                        "question": "Esophageal atresia is typically diagnosed:",
                        "options": [
                                "At birth",
                                "During the prenatal period",
                                "During the first month of life",
                                "During the first year of life"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 18,
                        "question": "A 6-year-old child with sickle cell anemia is admitted in a severe vaso-occlusive crisis. Which nursing intervention takes the highest priority in the plan of care?",
                        "options": [
                                "Administering prophylactic antibiotics",
                                "Intravenous hydration and pain management",
                                "Arranging blood transfusion therapy",
                                "Administering high-dose folic acid supplements"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 19,
                        "question": "In infants with esophageal atresia, feeding should mutually be done via:",
                        "options": [
                                "Oral feeding with specialized nipples",
                                "Bottle feeding with thickened formula",
                                "Nasogastric tube feeding",
                                "Intravenous (IV) nutrition only"
                        ],
                        "correctIndex": 3,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 20,
                        "question": "A 2-year-old toddler is diagnosed with Developmental Dysplasia of the Hip (DDH). Which physical assessment finding would the nurse expect to find during physical examination?",
                        "options": [
                                "Symmetric thigh skin folds",
                                "Positive Barlow and Ortolani signs with limited abduction on the affected side",
                                "Equal leg lengths bilaterally",
                                "Hyperextension of the affected knee"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 21,
                        "question": "End-stage renal disease (ESRD) is a genitourinary disorder characterized by:",
                        "options": [
                                "Irreversible loss & need for renal replacement",
                                "Urinary incontinence",
                                "Enlarged kidneys",
                                "Prostate enlargement"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 22,
                        "question": "A 5-year-old child evaluated for suspected acute rheumatic fever demonstrates rapid, uncoordinated, involuntary movements of the limbs and face. The nurse documents this finding as:",
                        "options": [
                                "Erythema marginatum",
                                "Sydenham\u2019s chorea",
                                "Subcutaneous nodules",
                                "Migratory polyarthritis"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 23,
                        "question": "Which preventive measure can help reduce the risk of UTIs?",
                        "options": [
                                "Drinking plenty of fluids",
                                "Avoiding public toilets",
                                "Wearing tight-fitting underwear",
                                "Consuming sugary drinks"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 24,
                        "question": "A nurse is providing discharge instructions to parents of a child who underwent a tonsillectomy. Which instruction is most critical for the early detection of postoperative hemorrhage?",
                        "options": [
                                "Monitor for frequent, continuous swallowing or throat clearing",
                                "Report a mild low-grade fever of 37.8\u00b0C",
                                "Encourage coughing and deep breathing exercises",
                                "Serve hot liquids and citrus juices to soothe throat pain"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 25,
                        "question": "What is a potential complication of untreated UTIs?",
                        "options": [
                                "Dehydration",
                                "Kidney damage",
                                "Vision loss",
                                "Hair loss"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 26,
                        "question": "A 4-year-old child with hemophilia A injures his knee while playing and presents with acute hemarthrosis. Which immediate nursing intervention is indicated?",
                        "options": [
                                "Apply warm compresses and perform gentle passive range of motion",
                                "Immobilize the joint, elevate the limb, and apply ice packs",
                                "Administer aspirin for pain relief",
                                "Encourage weight-bearing exercise to prevent joint stiffness"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 27,
                        "question": "Which dietary modification is recommended for patients with nephrotic syndrome?",
                        "options": [
                                "High protein intake",
                                "Low sodium intake",
                                "High potassium intake",
                                "Low fluid intake"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 28,
                        "question": "A 2-month-old infant presents to the emergency department with lethargy, bulging anterior fontanelle, high-pitched crying, and fever. Lumbar puncture confirms bacterial meningitis. Which isolation precaution must the nurse implement immediately?",
                        "options": [
                                "Standard Precautions only",
                                "Droplet Precautions for at least 24 hours after initiating antibiotics",
                                "Airborne Precautions with N95 respirator",
                                "Contact Precautions"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 29,
                        "question": "A patient with nephrotic syndrome is at risk of developing which of the following complications?",
                        "options": [
                                "Hypernatremia",
                                "Thromboembolism",
                                "Hypoglycemia",
                                "Hypercalcemia"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 30,
                        "question": "An 18-month-old child ingested an unknown quantity of iron tablets approximately 1 hour ago. Which antidote should the nurse anticipate administering for severe iron toxicity?",
                        "options": [
                                "Deferoxamine",
                                "N-acetylcysteine",
                                "Calcium gluconate",
                                "Naloxone"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 31,
                        "question": "Which electrolyte imbalance is commonly observed in patients with Bartter syndrome?",
                        "options": [
                                "Hypernatremia",
                                "Hypokalemia",
                                "Hypercalcemia",
                                "Hypermagnesemia"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 32,
                        "question": "A nurse is assessing a newborn with suspected Transposition of the Great Arteries (TGA). Which intervention is essential to maintain ductal patency prior to surgical correction?",
                        "options": [
                                "Continuous infusion of Alprostadil (Prostaglandin E1)",
                                "High-dose Indomethacin therapy",
                                "Surgical ligation of the ductus arteriosus",
                                "Administration of IV Furosemide"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 33,
                        "question": "Which of the following hormones plays a crucial role in regulating fluid balance and electrolyte levels?",
                        "options": [
                                "Aldosterone",
                                "Thyroid hormone",
                                "Growth hormone",
                                "Insulin"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 34,
                        "question": "A 3-year-old child is brought to the clinic with fever, conjunctival injection without exudate, strawberry tongue, fissured lips, and erythema of the palms and soles. The nurse recognizes these findings as characteristic of:",
                        "options": [
                                "Scarlet Fever",
                                "Kawasaki Disease",
                                "Measles (Rubeola)",
                                "Infectious Mononucleosis"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 35,
                        "question": "Severe hypernatremia can lead to a potentially life-threatening condition known as:",
                        "options": [
                                "Cerebral edema",
                                "Hyperkalemia",
                                "Hypokalemia",
                                "Seizures"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 36,
                        "question": "A 12-year-old child with Type 1 Diabetes Mellitus presents to the emergency room with deep, rapid respiration (Kussmaul breathing), fruity acetone breath, and a blood glucose of 420 mg/dL. The nurse identifies this condition as DKA. Which initial IV fluid should be started?",
                        "options": [
                                "5% Dextrose in Water (D5W)",
                                "0.9% Normal Saline",
                                "5% Dextrose in 0.45% Normal Saline",
                                "Ringers Lactate with Potassium Chloride"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 37,
                        "question": "The best way to rehydrate during dehydration is:",
                        "options": [
                                "Drinking large amounts of water at once",
                                "Consuming beverages high in sugar and caffeine",
                                "Sipping on water or oral rehydration solutions",
                                "Avoiding fluids until the symptoms subside"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 38,
                        "question": "During the assessment of a neonate, the nurse notes a midline spinal defect in the lumbosacral region with a sac-like protrusion containing meninges, spinal cord element, and cerebrospinal fluid. How should the nurse document this neural tube defect?",
                        "options": [
                                "Spina Bifida Occulta",
                                "Meningocele",
                                "Myelomeningocele",
                                "Encephalocele"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 39,
                        "question": "Which of the following is the most common cause of acute otitis media?",
                        "options": [
                                "Viral infection",
                                "Bacterial infection",
                                "Fungal infection",
                                "Allergic reaction"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 40,
                        "question": "A 3-year-old child with acute asthma exacerbation receives nebulized albuterol. Which side effect should the nurse monitor for following administration?",
                        "options": [
                                "Bradycardia and sedation",
                                "Tachycardia, restlessness, and fine tremors",
                                "Hypotension and urinary retention",
                                "Hypoglycemia and lethargy"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 41,
                        "question": "A nurse assesses a patient with pneumonia and finds dullness to percussion over a specific area of the lung. This finding is indicative of:",
                        "options": [
                                "Pleural effusion",
                                "Atelectasis",
                                "Pneumothorax",
                                "Consolidation"
                        ],
                        "correctIndex": 3,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 42,
                        "question": "Which of the following best describes asthma?",
                        "options": [
                                "A bacterial infection of the lungs",
                                "An autoimmune disorder affecting the respiratory system",
                                "A chronic inflammatory disease of the airways",
                                "A viral illness causing bronchitis"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 43,
                        "question": "Lordosis is commonly associated with which of the following conditions?",
                        "options": [
                                "Scoliosis",
                                "Kyphosis",
                                "Osteoporosis",
                                "Rheumatoid arthritis"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 44,
                        "question": "The part of the nervous system primarily affected by Guillain-Barr\u00e9 Syndrome (GBS) is the:",
                        "options": [
                                "Central nervous system",
                                "Peripheral nervous system",
                                "Autonomic nervous system",
                                "Cranial nerves"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 45,
                        "question": "The most common preceding event or infection associated with GBS is:",
                        "options": [
                                "Influenza vaccination",
                                "Gastrointestinal infection",
                                "Urinary tract infection",
                                "Allergic reaction to medication"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 46,
                        "question": "What is the term used to describe a seizure that involves both sides of the brain simultaneously?",
                        "options": [
                                "Focal seizure",
                                "Absence seizure",
                                "Generalized seizure",
                                "Complex partial seizure"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 47,
                        "question": "The chromosomal abnormality observed in Down syndrome is:",
                        "options": [
                                "Trisomy 21",
                                "Monosomy X",
                                "Trisomy 18",
                                "Trisomy 13"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 48,
                        "question": "The presence of blast cells in the bone marrow is a characteristic feature of:",
                        "options": [
                                "Acute leukemia",
                                "Chronic leukemia",
                                "Hodgkin's lymphoma",
                                "Multiple myeloma"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 49,
                        "question": "The presence of which of the following in the peripheral blood is a characteristic finding in leukemia?",
                        "options": [
                                "Erythrocytosis",
                                "Thrombocytopenia",
                                "Leukocytosis",
                                "Hypercalcemia"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 50,
                        "question": "The primary defect in thalassemia is:",
                        "options": [
                                "Abnormal hemoglobin structure",
                                "Excessive production of red blood cells",
                                "Deficiency of iron in the blood",
                                "Malfunctioning bone marrow"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 51,
                        "question": "Iron deficiency anemia is the most common type of anemia and is primarily caused by:",
                        "options": [
                                "Inadequate dietary iron intake",
                                "Excessive iron absorption",
                                "Autoimmune disorders",
                                "Genetic mutations"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 52,
                        "question": "Megaloblastic anemia is typically caused by a deficiency of:",
                        "options": [
                                "Vitamin B12",
                                "Folic acid",
                                "Vitamin C",
                                "Both A and B"
                        ],
                        "correctIndex": 3,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 53,
                        "question": "The term \"phimosis\" refers to:",
                        "options": [
                                "Inability to retract the foreskin over the glans penis",
                                "Urethral opening on the dorsal side",
                                "Urethral opening on the ventral side",
                                "Undescended testicles"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 54,
                        "question": "What is the Glasgow Coma Score (GCS) for a patient who is pulseless and apneic?",
                        "options": [
                                "03",
                                "05",
                                "07",
                                "00"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 55,
                        "question": "In the burn ward, a patient is admitted with third-degree burns of the hand, chest, and face. Which nursing diagnosis takes priority?",
                        "options": [
                                "Ineffective airway clearance",
                                "Disturbed body image",
                                "Impaired urinary elimination",
                                "Risk for infection"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 56,
                        "question": "Which action does a nurse need to include when caring for a newborn receiving phototherapy?",
                        "options": [
                                "Expose all surfaces without protection",
                                "Prevent all sensory stimulation",
                                "Cover the eyes with a shield",
                                "Change position every 4 hours only"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 57,
                        "question": "A 7-year-old child is admitted to the emergency department with a head injury. The child is oriented to place, person, and time and spontaneously obeys commands. Which PGCS score should the nurse record?",
                        "options": [
                                "8",
                                "12",
                                "15",
                                "10"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 58,
                        "question": "A neonate is admitted with a diagnosis of probable meconium aspiration syndrome. Weight is 4,650g at 40 weeks gestation. Which would be the priority nursing diagnosis?",
                        "options": [
                                "Impaired skin integrity",
                                "Hyperglycemia",
                                "Risk for impaired parent-infant attachment",
                                "Impaired gas exchange"
                        ],
                        "correctIndex": 3,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 59,
                        "question": "A 9-year-old patient with ongoing potassium infusion has a burning sensation at the site. Which action should the nurse take first?",
                        "options": [
                                "Stop infusion",
                                "Document as normal finding",
                                "Slow infusion rate",
                                "Inform the doctor"
                        ],
                        "correctIndex": 0,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 60,
                        "question": "When examining the tympanic membrane of an infant with an otoscope, the nurse should move the pinna in which direction?",
                        "options": [
                                "Down and forward",
                                "Up and back",
                                "Up and forward",
                                "Down and back"
                        ],
                        "correctIndex": 3,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 61,
                        "question": "Which of the following is the most common disease of amino acid metabolism?",
                        "options": [
                                "Homocystinuria",
                                "Albinism",
                                "Phenylketonuria",
                                "Maple Syrup Urine Disease"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 62,
                        "question": "At 9 months of age, an infant can typically:",
                        "options": [
                                "Sit with slight support",
                                "Sit alone steadily",
                                "Crawl",
                                "Creep well"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 63,
                        "question": "In infants with hydrocephalus, early signs of ventricular shunt malfunction include:",
                        "options": [
                                "High-pitched cry, colic, and pupillary changes",
                                "Tense fontanelle, vomiting, and irritability",
                                "Anorexia and pulse changes",
                                "Headaches and loss of appetite"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 64,
                        "question": "Kernicterus is a pathological condition affecting which organ?",
                        "options": [
                                "Liver",
                                "Brain",
                                "Kidney",
                                "Heart"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 65,
                        "question": "Injury to soft tissue of the baby's scalp during birth that crosses suture lines is called:",
                        "options": [
                                "Cephalhematoma",
                                "Caput succedaneum",
                                "Dystocia",
                                "Fracture"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 66,
                        "question": "When flexion of the neck causes involuntary flexion of the hip and knee, this finding is known as:",
                        "options": [
                                "Kernig's sign",
                                "Brudzinski's sign",
                                "Chvostek's sign",
                                "Trousseau's sign"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 67,
                        "question": "In a child with cleft palate, frequent episodes of otitis media are primarily due to:",
                        "options": [
                                "Lowered resistance from malnutrition",
                                "Ineffective functioning of the Eustachian tubes",
                                "Plugging of Eustachian tubes with food",
                                "Congenital defects of middle ear"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 68,
                        "question": "On abdominal palpation, an olive-shaped mass in the upper right quadrant of an infant indicates:",
                        "options": [
                                "Intestinal obstruction",
                                "Pyloric stenosis",
                                "Imperforate anus",
                                "Appendicitis"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 69,
                        "question": "An infant typically doubles their birth weight by what age?",
                        "options": [
                                "3 months",
                                "6 months",
                                "9 months",
                                "12 months"
                        ],
                        "correctIndex": 1,
                        "explanation": "Verified clinical response."
                },
                {
                        "id": 70,
                        "question": "The normal range of Occipito-Frontal Circumference (OFC) at birth is:",
                        "options": [
                                "30\u201335 cm",
                                "32\u201337 cm",
                                "33\u201335 cm",
                                "35\u201338 cm"
                        ],
                        "correctIndex": 2,
                        "explanation": "Verified clinical response."
                }
        ]
    },
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
