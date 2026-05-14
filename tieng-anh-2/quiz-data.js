const quizData = [
  // UNIT 01: STRESS
  {
    "question": "Unit 1 - Câu 1: Maria is a single mother who often .. stressed.",
    "option_a": "feeling",
    "option_b": "felt",
    "option_c": "feel",
    "option_d": "feels",
    "answer": "D"
  },
  {
    "question": "Unit 1 - Câu 2: Her lower back often .. and her eyes get tired.",
    "option_a": "hurt",
    "option_b": "hurts",
    "option_c": "hurting",
    "option_d": "hurtese",
    "answer": "B"
  },
  {
    "question": "Unit 1 - Câu 3: Maria .. a walk with a couple of friends.",
    "option_a": "enjoys to taking",
    "option_b": "enjoys take",
    "option_c": "enjoys taking",
    "option_d": "enjoy taking",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 4: She enjoys the fresh air and talking with .. friends.",
    "option_a": "her",
    "option_b": "his",
    "option_c": "hers",
    "option_d": "she",
    "answer": "A"
  },
  {
    "question": "Unit 1 - Câu 5: For lunch she usually .. a salad and fruit.",
    "option_a": "eat something light like",
    "option_b": "eats something like light",
    "option_c": "eats something light like",
    "option_d": "eat something like light",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 6: At work she ..coffee or soda.",
    "option_a": "drinks water of instead",
    "option_b": "drink water instead of",
    "option_c": "drinks water instead of",
    "option_d": "drinks instead of water",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 7: Maria ... be there when he arrives home from school.",
    "option_a": "cannot",
    "option_b": "can not",
    "option_c": "not can",
    "option_d": "can no",
    "answer": "A"
  },
  {
    "question": "Unit 1 - Câu 8: Maria worries about not having .. pay the bills.",
    "option_a": "enough money to",
    "option_b": "to enough money",
    "option_c": "money enough to",
    "option_d": "enough to money",
    "answer": "A"
  },
  {
    "question": "Unit 1 - Câu 9: Maria suffers from migraine headaches. It means:",
    "option_a": "a kind of disease to one side of the head",
    "option_b": "a kind of disease to one side of the heart",
    "option_c": "a kind of disease to one side of the breast",
    "option_d": "a kind of disease to one side of the stomach",
    "answer": "A"
  },
  {
    "question": "Unit 1 - Câu 10: Maria has high .. pressure.",
    "option_a": "stroke",
    "option_b": "arm",
    "option_c": "foot",
    "option_d": "blood",
    "answer": "D"
  },
  {
    "question": "Unit 1 - Câu 11: Maria watches her weight and takes medicine for this disease. 'Takes' means:",
    "option_a": "tells",
    "option_b": "drinks",
    "option_c": "eats",
    "option_d": "smells",
    "answer": "B"
  },
  {
    "question": "Unit 1 - Câu 12: She realizes she could have a heart attack. A heart attack is a:",
    "option_a": "heartburn",
    "option_b": "heart shaped",
    "option_c": "heart beat",
    "option_d": "heart disease",
    "answer": "D"
  },
  {
    "question": "Unit 1 - Câu 13: At weekends she often goes bike riding with her son. 'Bike' means:",
    "option_a": "running",
    "option_b": "bicycle",
    "option_c": "car",
    "option_d": "on foot",
    "answer": "B"
  },
  {
    "question": "Unit 1 - Câu 14: In the evenings she .. stretching exercises.",
    "option_a": "done",
    "option_b": "doing",
    "option_c": "do",
    "option_d": "does",
    "answer": "D"
  },
  {
    "question": "Unit 1 - Câu 15: I'd like to make an appointment .. Doctor Jensen, Please!",
    "option_a": "to glance",
    "option_b": "to stare",
    "option_c": "to see",
    "option_d": "to look",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 16: Have you been in to see Doctor Jensen before? Yes, I ...",
    "option_a": "do",
    "option_b": "have",
    "option_c": "has",
    "option_d": "am",
    "answer": "B"
  },
  {
    "question": "Unit 1 - Câu 17: ..is the emotional and physical strain that caused by the problems in someone's life.",
    "option_a": "tibia",
    "option_b": "smile",
    "option_c": "stress",
    "option_d": "fingernail",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 18: What can you do to manage stress? You can take a walk; healthy activities; yoga;..",
    "option_a": "unhappy story",
    "option_b": "meditation",
    "option_c": "family trouble",
    "option_d": "bad situation",
    "answer": "B"
  },
  {
    "question": "Unit 1 - Câu 19: It is the part of the face above the eyes and below the hair. What is it?",
    "option_a": "neck",
    "option_b": "forehead",
    "option_c": "hand",
    "option_d": "heel",
    "answer": "B"
  },
  {
    "question": "Unit 1 - Câu 20: It is the part of the face below the mouth and above the neck. What is it?",
    "option_a": "tibia",
    "option_b": "hip",
    "option_c": "chin",
    "option_d": "chest",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 21: It is the part of the body on top of the neck containing the eyes, nose, mouth and brain.",
    "option_a": "head",
    "option_b": "forehead",
    "option_c": "eyes",
    "option_d": "face",
    "answer": "A"
  },
  {
    "question": "Unit 1 - Câu 22: It is the part of the face that sticks out above the mouth, used for breathing and smelling things.",
    "option_a": "neck",
    "option_b": "jaw",
    "option_c": "nose",
    "option_d": "chest",
    "answer": "C"
  },
  {
    "question": "Unit 1 - Câu 23: It is a medical instrument with a long thin needle that is used to give someone an injection under their skin.",
    "option_a": "hypodermic needle",
    "option_b": "meditation",
    "option_c": "bathtub",
    "option_d": "barrel",
    "answer": "A"
  },
  {
    "question": "Unit 1 - Câu 24: It is an infection of the tonsils in which they become swollen and sore.",
    "option_a": "neck",
    "option_b": "jaw",
    "option_c": "tonsillitis",
    "option_d": "hypodermic needle",
    "answer": "C"
  },

  // UNIT 02: POISON
  {
    "question": "Unit 2 - Câu 1: Marta's son drank a bottle of medicine. The Poison Control told Marta to give him fluids to .. the medicine.",
    "option_a": "suicide",
    "option_b": "cure",
    "option_c": "poison",
    "option_d": "dilute",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 2: She watched him and about an hour later he threw up. What does 'threw up' mean?",
    "option_a": "urinated",
    "option_b": "vomited",
    "option_c": "stroked",
    "option_d": "acknowledged",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 3: A (An) is a sudden shaking movement of the body that cannot be controlled",
    "option_a": "bronchitis",
    "option_b": "slurred speech",
    "option_c": "convulsion",
    "option_d": "lack of concentration",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 4: A (An) is a state like sleep caused by injury or illness, when you are unable to use your senses.",
    "option_a": "unconsciousness",
    "option_b": "seizure",
    "option_c": "skin problem",
    "option_d": "numbness",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 5: Do you know how to deal with poisoning? What does 'to deal with' mean?",
    "option_a": "discourage",
    "option_b": "herniate",
    "option_c": "stare",
    "option_d": "solve",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 6: A (An) is a vehicle with special equipment, used for taking sick or injured people to a hospital.",
    "option_a": "stethoscope",
    "option_b": "disposable syringe",
    "option_c": "ambulance",
    "option_d": "saliva",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 7: Dr. Nam specializes in eye diseases. He is a (an)",
    "option_a": "ophthalmologist",
    "option_b": "orthopedist",
    "option_c": "oncologist",
    "option_d": "obstetrician",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 8: Dr. Hoa specializes in tumor including cancer. She is a (an)",
    "option_a": "oncologist",
    "option_b": "pediatrician",
    "option_c": "hematologist",
    "option_d": "neurologist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 9: Dr. Lan specializes in hearts, arteries. She is a (an)",
    "option_a": "cardiologist",
    "option_b": "urologist",
    "option_c": "geriatrician",
    "option_d": "allergist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 10: Dr. Thu specializes in skin diseases. She is a (an)",
    "option_a": "gynaecologist",
    "option_b": "general practitioner",
    "option_c": "internist",
    "option_d": "dermatologist",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 11: ... is a doctor who studies the use of medicine that makes a person unable to feel pain.",
    "option_a": "otolaryngologist",
    "option_b": "anesthesiologist",
    "option_c": "otorhinologist",
    "option_d": "gastroenterologist",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 12: Dr. John specializes in diseases of blood. He is a (an).",
    "option_a": "nephrologist",
    "option_b": "immunologist",
    "option_c": "pulmonologist",
    "option_d": "hematologist",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 13: Dr. Mark specializes in diseases of lung. He is a (an).",
    "option_a": "pulmonologist",
    "option_b": "histologist",
    "option_c": "radiologist",
    "option_d": "anesthesiologist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 14: A (An)is a person's sex organs that are outside their body.",
    "option_a": "genitalia",
    "option_b": "fetus",
    "option_c": "hemorrhage",
    "option_d": "contaminated foods",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 15: Which one is NOT women's?",
    "option_a": "uterus",
    "option_b": "prostate",
    "option_c": "ovary",
    "option_d": "ovum",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 16: Mary’s eyes are itchy. Therefore she goes to see a (an)……………..",
    "option_a": "physiotherapist",
    "option_b": "dietician",
    "option_c": "ophthalmologist",
    "option_d": "cardiologist",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 17: A (An) ……………………is the state of being or becoming a mother.",
    "option_a": "antibiotic",
    "option_b": "maternity",
    "option_c": "pathology",
    "option_d": "dermatology",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 18: Dr. Mai specializes in gynecology. She is a (an)",
    "option_a": "dermatologist",
    "option_b": "gastroenterologist",
    "option_c": "cardiologist",
    "option_d": "obstetrician",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 19: Dr. Loan specializes in nephric disease. She is a (an)",
    "option_a": "allergist",
    "option_b": "nephrologist",
    "option_c": "dentist",
    "option_d": "geriatrician",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 20: Dr. Oanh specializes in allergy. She is a (an)",
    "option_a": "obstetrician",
    "option_b": "radiologist",
    "option_c": "allergist",
    "option_d": "general practitioner",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 21: Dr. Hoa specializes in diseases of children. He is a (an)",
    "option_a": "pediatrician",
    "option_b": "neurologist",
    "option_c": "immunologist",
    "option_d": "otolaryngologist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 22: Mr. Binh has a toothache, so he need go to see a",
    "option_a": "dermatologist",
    "option_b": "allergist",
    "option_c": "obstetrician",
    "option_d": "dentist",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 23: Dr. Thanh specializes in orthopedic disease. He is a (an)",
    "option_a": "cardiologist",
    "option_b": "pediatrician",
    "option_c": "orthopedist",
    "option_d": "urologist",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 24: Dr. Smith specializes in urology. He is a (an)",
    "option_a": "urologist",
    "option_b": "cardiologist",
    "option_c": "oncologist",
    "option_d": "obstetrician",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 25: Dr. Larry specializes in diseases of old patients. He is a (an)",
    "option_a": "geriatrician",
    "option_b": "pediatrician",
    "option_c": "hematologist",
    "option_d": "pulmonologist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 26: Home pregnancy test came out positive. We want to make sure the fetus is healthy. Which specialist?",
    "option_a": "otorhinologist",
    "option_b": "cardiologist",
    "option_c": "oncologist",
    "option_d": "obstetrician",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 27: I still can't walk since my accident. Which specialist do I need?",
    "option_a": "physical therapist",
    "option_b": "cardiologist",
    "option_c": "dermatologist",
    "option_d": "obstetrician",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 28: Test results show advanced form of blood cancer. Which specialist do I need?",
    "option_a": "otorhinologist",
    "option_b": "allergist",
    "option_c": "oncologist",
    "option_d": "ophthalmologist",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 29: Left eye infection and blurry vision for two weeks. Which specialist do I need?",
    "option_a": "orthopedist",
    "option_b": "pulmonologist",
    "option_c": "internist",
    "option_d": "ophthalmologist",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 30: Major chest pains and trouble breathing. Which specialist do I need?",
    "option_a": "geriatrician",
    "option_b": "gynecologist",
    "option_c": "oncologist",
    "option_d": "cardiologist",
    "answer": "D"
  },
  {
    "question": "Unit 2 - Câu 31: Terrible acne and pharmacy products don't work. Which specialist do I need?",
    "option_a": "dermatologist",
    "option_b": "dentist",
    "option_c": "neurologist",
    "option_d": "urologist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 32: Baby hasn't put on weight and gets ear infections. Which specialist?",
    "option_a": "pediatrician",
    "option_b": "hematologist",
    "option_c": "otorhinologist",
    "option_d": "radiologist",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 33: Trying to get pregnant for three years. Which specialist do we need?",
    "option_a": "pediatrician",
    "option_b": "hematologist",
    "option_c": "gynecologist",
    "option_d": "radiologist",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 34: A patient who has had his appendix removed would be in:",
    "option_a": "dermatological department",
    "option_b": "maternity ward",
    "option_c": "surgical department",
    "option_d": "neurological department",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 35: A patient who has had his tonsils out would be in:",
    "option_a": "ENT department",
    "option_b": "geriatric ward",
    "option_c": "surgical department",
    "option_d": "emergency department",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 36: A patient with a broken leg would be in:",
    "option_a": "ENT department",
    "option_b": "emergency department",
    "option_c": "dermatological department",
    "option_d": "geriatric ward",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 37: A patient who has just had an accident would be in:",
    "option_a": "ENT department",
    "option_b": "maternity ward",
    "option_c": "emergency department",
    "option_d": "neurological department",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 38: A patient with cerebral hemorrhage would be in:",
    "option_a": "neurological department",
    "option_b": "geriatric ward",
    "option_c": "surgical department",
    "option_d": "emergency department",
    "answer": "A"
  },
  {
    "question": "Unit 2 - Câu 39: An elderly patient would be in:",
    "option_a": "dermatological department",
    "option_b": "geriatric ward",
    "option_c": "x-ray department",
    "option_d": "emergency department",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 40: A patient who is having an operation would be in:",
    "option_a": "pharmacological department",
    "option_b": "operating room",
    "option_c": "x-ray department",
    "option_d": "neurological department",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 41: A patient with a skin disease would be in:",
    "option_a": "ENT department",
    "option_b": "emergency department",
    "option_c": "dermatological department",
    "option_d": "geriatric ward",
    "answer": "C"
  },
  {
    "question": "Unit 2 - Câu 42: A woman who will have a baby in two months' time would be in:",
    "option_a": "neurological department",
    "option_b": "maternity ward",
    "option_c": "emergency department",
    "option_d": "neurological department",
    "answer": "B"
  },
  {
    "question": "Unit 2 - Câu 43: A patient who is being admitted would be in:",
    "option_a": "neurological department",
    "option_b": "Admitting room",
    "option_c": "emergency department",
    "option_d": "neurological ward",
    "answer": "B"
  },

  // UNIT 03: AIDS
  {
    "question": "Unit 3 - Câu 1: Jack's immune system no longer works properly. He gets many infections and has cancer.",
    "option_a": "skeletal",
    "option_b": "adequate",
    "option_c": "irritable",
    "option_d": "resistant",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 2: Jack caught AIDS by using a contaminated needle. 'Contaminated' means:",
    "option_a": "adequate",
    "option_b": "polluted",
    "option_c": "solemn",
    "option_d": "overweight",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 3: Before coming down with AIDS, his .. in his neck and armpit began swelling.",
    "option_a": "urinary",
    "option_b": "migraine headaches",
    "option_c": "lymph glands",
    "option_d": "tumor",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 4: A (An) ..is a person who does a job without being paid for it.",
    "option_a": "volunteer",
    "option_b": "dentist",
    "option_c": "obstetrician",
    "option_d": "ophthalmologist",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 5: A (An) ..is a living thing, too small to be seen without a microscope, that causes infectious disease.",
    "option_a": "heartburn",
    "option_b": "obesity",
    "option_c": "virus",
    "option_d": "mammogram",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 6: Mark used to have many sex partners. What does 'partners' mean?",
    "option_a": "medical records",
    "option_b": "malignant tumor",
    "option_c": "collaborators",
    "option_d": "ophthalmologist",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 7: A (An) ..is a girl who has sex for money.",
    "option_a": "prostitute",
    "option_b": "pulmonologist",
    "option_c": "anesthesiologist",
    "option_d": "radiologist",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 8: A (An) ..is a thin rubber covering used to protect against disease during sex.",
    "option_a": "condom",
    "option_b": "tumor",
    "option_c": "stethoscope",
    "option_d": "cartilage",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 9: Jerry has numerous sex partners. 'Numerous' means:",
    "option_a": "some",
    "option_b": "a",
    "option_c": "half",
    "option_d": "little",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 10: Jack's immune system no longer works well. He gets many .. and has cancer.",
    "option_a": "medical records",
    "option_b": "recommends",
    "option_c": "swellings",
    "option_d": "infections",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 11: Jack caught AIDS. Then he began to lose weight, feel very tired, and had .",
    "option_a": "pregnancy",
    "option_b": "diarrhea",
    "option_c": "gym",
    "option_d": "mammogram",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 12: So far, there is no . for AIDS.",
    "option_a": "tumor",
    "option_b": "stethoscope",
    "option_c": "phlegm",
    "option_d": "cure",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 13: The only way to know for sure whether a person is infected with HIV is to have an HIV .",
    "option_a": "blood",
    "option_b": "test",
    "option_c": "disposable syringe",
    "option_d": "mothers",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 14: People living with HIV may look completely well, but their immune systems may be ..",
    "option_a": "meditated",
    "option_b": "stroked",
    "option_c": "suicided",
    "option_d": "damaged",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 15: Should people with AIDS be isolated from society? 'Isolated' means:",
    "option_a": "trauma",
    "option_b": "meditated",
    "option_c": "separated",
    "option_d": "urinated",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 16: Your temperature seems raised. Let me get a .to check.",
    "option_a": "vaccination",
    "option_b": "thermometer",
    "option_c": "diagnosis",
    "option_d": "urine sample",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 17: I will give you a prescription for some .",
    "option_a": "paralysis",
    "option_b": "heartburns",
    "option_c": "antibiotics",
    "option_d": "tumors",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 18: Dr. Nam works in the operating theatre. He is a (an)..",
    "option_a": "pediatrician",
    "option_b": "surgeon",
    "option_c": "radiologist",
    "option_d": "doctor",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 19: Lan got a traffic accident. Her leg is broken then she had an X-ray film. Which doctor?",
    "option_a": "hematologist",
    "option_b": "radiologist",
    "option_c": "pulmonologist",
    "option_d": "pediatrician",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 20: A (an).is a small vehicle with wheels used for carrying things in the hospitals.",
    "option_a": "ambulance",
    "option_b": "disposable syringe",
    "option_c": "trolley",
    "option_d": "stethoscope",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 21: A (an).is a container used as a toilet by a person too sick to get out of bed.",
    "option_a": "pediatrician",
    "option_b": "bedpan",
    "option_c": "radiologist",
    "option_d": "bedroom",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 22: The day before yesterday they nursed pneumonia patients. 'Nursed' means:",
    "option_a": "meditated",
    "option_b": "took care of",
    "option_c": "sneezed",
    "option_d": "attacked",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 23: When did your lump appear? 'Lump' means:",
    "option_a": "vomit",
    "option_b": "rash",
    "option_c": "tumor",
    "option_d": "snot",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 24: …………… is the liquid produced in your mouth that helps you to swallow food.",
    "option_a": "snot",
    "option_b": "saliva",
    "option_c": "phlegm",
    "option_d": "tear",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 25: When did you undergo your operation. 'Undergo' means:",
    "option_a": "meditate",
    "option_b": "suffer",
    "option_c": "smell",
    "option_d": "swallow",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 26: You must go up to the .. floor and you'll see a pharmacy on your right.",
    "option_a": "one",
    "option_b": "Once",
    "option_c": "firt",
    "option_d": "first",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 27: The registration time is .. 8. am and 11.am.",
    "option_a": "near",
    "option_b": "on",
    "option_c": "in",
    "option_d": "between",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 28: What .. the problem?",
    "option_a": "were",
    "option_b": "has",
    "option_c": "is",
    "option_d": "a",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 29: After .. a card, the patient fill in it and take it back to the desk.",
    "option_a": "get",
    "option_b": "gets",
    "option_c": "geting",
    "option_d": "getting",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 30: Excuse me, where do I queue up .. register?",
    "option_a": "for",
    "option_b": "to",
    "option_c": "in",
    "option_d": "at",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 31: If you don't wait, you won't be able to .. the chance to see the doctor.",
    "option_a": "get",
    "option_b": "got",
    "option_c": "be",
    "option_d": "has",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 32: In that case, you'd better go to the medical department. 'd' means:",
    "option_a": "could",
    "option_b": "should",
    "option_c": "would",
    "option_d": "had",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 33: Which way .. I go now?",
    "option_a": "was",
    "option_b": "were",
    "option_c": "do",
    "option_d": "does",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 34: There .. so many people here.",
    "option_a": "be",
    "option_b": "is",
    "option_c": "are",
    "option_d": "was",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 35: If you don't wait, a lot of patients .. before you.",
    "option_a": "would be",
    "option_b": "would have",
    "option_c": "will be",
    "option_d": "would have been",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 36: My back is so ………….. that I can’t stand upright.",
    "option_a": "pain",
    "option_b": "pains",
    "option_c": "painful",
    "option_d": "paint",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 37: The ………….. fee will be 5.000 VNĐ.",
    "option_a": "register",
    "option_b": "registering",
    "option_c": "registration",
    "option_d": "registered",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 38: The child has a high ……………",
    "option_a": "temperature",
    "option_b": "temperate",
    "option_c": "temperer",
    "option_d": "tempering",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 39: .. you know if your family has a history of diabetes?",
    "option_a": "are",
    "option_b": "have",
    "option_c": "did",
    "option_d": "do",
    "answer": "D"
  },
  {
    "question": "Unit 3 - Câu 40: Do you know if your family .. a history of lung cancer?",
    "option_a": "has",
    "option_b": "had",
    "option_c": "is",
    "option_d": "was",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 41: Her mother died .. lung cancer at the age of 52.",
    "option_a": "at",
    "option_b": "of",
    "option_c": "in",
    "option_d": "between",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 42: A (An) ..is the top part of the front of the body, between the neck and the stomach.",
    "option_a": "head",
    "option_b": "forehead",
    "option_c": "chest",
    "option_d": "tumor",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 43: The doctor had told her she had lung cancer. Lung cancer is a:",
    "option_a": "pulmonic cancer",
    "option_b": "malignant tumor",
    "option_c": "diabetic",
    "option_d": "mouth cancer",
    "answer": "B"
  },
  {
    "question": "Unit 3 - Câu 44: Judy started thinking about how she might quit smoking. 'Quit' means:",
    "option_a": "sneeze",
    "option_b": "cure",
    "option_c": "discontinue",
    "option_d": "enjoy",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 45: Pregnant women who smoke have premature babies. 'Premature' means:",
    "option_a": "late",
    "option_b": "too late",
    "option_c": "early",
    "option_d": "too high",
    "answer": "C"
  },
  {
    "question": "Unit 3 - Câu 46: A (An) ...is the process of giving birth to a baby before it is fully developed.",
    "option_a": "miscarriage",
    "option_b": "mammogram",
    "option_c": "meditation",
    "option_d": "menopause",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 47: Judy said quitting smoking was the best birthday present she'd received.",
    "option_a": "gift",
    "option_b": "present perfect",
    "option_c": "present tense",
    "option_d": "presentation",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 48: Smoking does not only cause lung cancer but is linked to heart disease.",
    "option_a": "connected",
    "option_b": "meditated",
    "option_c": "vomited",
    "option_d": "been",
    "answer": "A"
  },
  {
    "question": "Unit 3 - Câu 49: Why is smoking dangerous for an expectant mother? 'Expectant mother' means:",
    "option_a": "mother in law",
    "option_b": "stepmother",
    "option_c": "mother tongue",
    "option_d": "pregnant mother",
    "answer": "D"
  },

  // UNIT 04: HEART DISEASE
  {
    "question": "Unit 4 - Câu 1: Cholesterol can build up in the ..",
    "option_a": "mammogram",
    "option_b": "tumor",
    "option_c": "chest",
    "option_d": "arteries",
    "answer": "D"
  },
  {
    "question": "Unit 4 - Câu 2: His doctor measured Robert's blood cholesterol level. 'Cholesterol' is a:",
    "option_a": "malignant tumor",
    "option_b": "fatty deposit",
    "option_c": "menopause",
    "option_d": "sterilization",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 3: The cholesterol can also break away causing heart attacks or ...",
    "option_a": "tonsillitis",
    "option_b": "traumatology",
    "option_c": "strokes",
    "option_d": "miscarriage",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 4: ., dizziness and shortness of breath are symptoms of heart diseases.",
    "option_a": "Chest pain",
    "option_b": "Sterilization",
    "option_c": "Phlegm",
    "option_d": "Saturated fats",
    "answer": "A"
  },
  {
    "question": "Unit 4 - Câu 5: A (An) ………….. is a thin tube that is put into the body in order to remove liquid.",
    "option_a": "trolley",
    "option_b": "thermometer",
    "option_c": "catheter",
    "option_d": "stethoscope",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 6: There are different therapies being used today for heart attack. 'Therapies' means:",
    "option_a": "mammogram",
    "option_b": "pregnant mother",
    "option_c": "treatments",
    "option_d": "sterilization",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 7: Regular exercise and balanced diet are good things to prevent …………..",
    "option_a": "heart diseases",
    "option_b": "toothaches",
    "option_c": "thyroid diseases",
    "option_d": "tonsillitis",
    "answer": "A"
  },
  {
    "question": "Unit 4 - Câu 8: The doctor suggests a treatment to help us better. 'Treatment' means:",
    "option_a": "therapy",
    "option_b": "health problems",
    "option_c": "traumatology",
    "option_d": "examination",
    "answer": "A"
  },
  {
    "question": "Unit 4 - Câu 9: Recently Nga's mother has got a serious heart attack, she should go to see the ..",
    "option_a": "cardiologist",
    "option_b": "urologist",
    "option_c": "geriatrician",
    "option_d": "allergist",
    "answer": "A"
  },
  {
    "question": "Unit 4 - Câu 10: Lately Nam's paternal grandfather has got abnormal heart sounds.",
    "option_a": "painless",
    "option_b": "sleepless",
    "option_c": "heartless",
    "option_d": "irregular",
    "answer": "D"
  },
  {
    "question": "Unit 4 - Câu 11: You just go along the corridor and turn right to see X-ray department. 'Corridor' means:",
    "option_a": "passage way",
    "option_b": "thermometer",
    "option_c": "phlegm",
    "option_d": "stethoscope",
    "answer": "A"
  },
  {
    "question": "Unit 4 - Câu 12: He did not exhibit regular heart attack symptoms. 'Exhibit' means:",
    "option_a": "come down",
    "option_b": "dislocate",
    "option_c": "herniate",
    "option_d": "display",
    "answer": "D"
  },
  {
    "question": "Unit 4 - Câu 13: He's showing signs of continuously high blood ..",
    "option_a": "group",
    "option_b": "pressure",
    "option_c": "mishap",
    "option_d": "pressure cooker",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 14: Mr. Marvin needs a diet regime. It means:",
    "option_a": "a meditation",
    "option_b": "a rehabilitation",
    "option_c": "a relaxation",
    "option_d": "a balance diet control",
    "answer": "D"
  },
  {
    "question": "Unit 4 - Câu 15: Mr Bao adjusted to his new diet, he has to give up the cigarettes. 'Give up' means:",
    "option_a": "to enjoy smoking",
    "option_b": "to practise smoking",
    "option_c": "to stop smoking",
    "option_d": "to abate smoking",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 16: These hospital instruments have been sterilized. 'Sterilized' means:",
    "option_a": "lucrative",
    "option_b": "disinfected",
    "option_c": "vacant",
    "option_d": "occupied",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 17: Recently this ………….. has been catheterized.",
    "option_a": "trolley",
    "option_b": "stethoscope",
    "option_c": "patient",
    "option_d": "thermometer",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 18: The gynecological ward specializes for curing diseases of …………..",
    "option_a": "students",
    "option_b": "women",
    "option_c": "pupils",
    "option_d": "children",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 19: Mary has just seen the operating theatre. 'Theatre' means:",
    "option_a": "picture show",
    "option_b": "room",
    "option_c": "movies",
    "option_d": "cinema",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 20: Some days ago Nam has got a terrible traffic accident. Then his leg has been fractured.",
    "option_a": "infected",
    "option_b": "dislocated",
    "option_c": "broken",
    "option_d": "exhibited",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 21: Thanh started coughing up .. last April.",
    "option_a": "snot",
    "option_b": "blood",
    "option_c": "sweat",
    "option_d": "tear",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 22: Nga’s maternal grandmother started feeling weak a fortnight ago.",
    "option_a": "one week",
    "option_b": "three weeks",
    "option_c": "two weeks",
    "option_d": "four weeks",
    "answer": "C"
  },
  {
    "question": "Unit 4 - Câu 23: Toan’s urinary system got some troubles. Then he noticed some ………… in his urine.",
    "option_a": "saliva",
    "option_b": "blood",
    "option_c": "snot",
    "option_d": "phlegm",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 24: A (an) ..is a deep unconscious state, usually lasting a long time.",
    "option_a": "retia",
    "option_b": "coma",
    "option_c": "ligament",
    "option_d": "miscarriage",
    "answer": "B"
  },
  {
    "question": "Unit 4 - Câu 25: Toan's father drank so much brandies, he began vomiting .. in the following morning.",
    "option_a": "sweat",
    "option_b": "blood",
    "option_c": "snot",
    "option_d": "tear",
    "answer": "B"
  },

  // UNIT 05: PREGNANCY
  {
    "question": "Unit 5 - Câu 1: Her aunt was very upset when she found out Angela was pregnant. 'Found out' means:",
    "option_a": "encouraged",
    "option_b": "collaborated",
    "option_c": "stroked",
    "option_d": "discovered",
    "answer": "D"
  },
  {
    "question": "Unit 5 - Câu 2: Fortunately for Angela there is a teen pregnancy program at her school. 'Fortunately' means:",
    "option_a": "beautifully",
    "option_b": "luckily",
    "option_c": "lately",
    "option_d": "lovely",
    "answer": "B"
  },
  {
    "question": "Unit 5 - Câu 3: After Angela had lost her .. she became worried. Then she did a pregnancy test.",
    "option_a": "money",
    "option_b": "keys",
    "option_c": "period",
    "option_d": "weight",
    "answer": "C"
  },
  {
    "question": "Unit 5 - Câu 4: The counselor suggested Angela enter the teen pregnancy program. 'Suggested' means:",
    "option_a": "recommended",
    "option_b": "herniate",
    "option_c": "dilute",
    "option_d": "sneeze",
    "answer": "A"
  },
  {
    "question": "Unit 5 - Câu 5: Angela received a general examination which included blood pressure measured.",
    "option_a": "saliva",
    "option_b": "phlegm",
    "option_c": "blood",
    "option_d": "snot",
    "answer": "C"
  },
  {
    "question": "Unit 5 - Câu 6: She received a pregnancy test therefore her samples of urine and .. were taken.",
    "option_a": "snot",
    "option_b": "saliva",
    "option_c": "blood",
    "option_d": "phlegm",
    "answer": "C"
  },
  {
    "question": "Unit 5 - Câu 7: They discuss problems that occur in pregnancy. 'Occur' means:",
    "option_a": "take place",
    "option_b": "urinate",
    "option_c": "sneeze",
    "option_d": "dilute",
    "answer": "A"
  },
  {
    "question": "Unit 5 - Câu 8: Their instructor tells pregnant women not wearing high heeled shoes.",
    "option_a": "wearing",
    "option_b": "drinking",
    "option_c": "eating",
    "option_d": "sleeping",
    "answer": "A"
  },
  {
    "question": "Unit 5 - Câu 9: Their instructor reminds pregnant women to drink plenty of ..",
    "option_a": "water",
    "option_b": "beer",
    "option_c": "alcohol",
    "option_d": "brandy",
    "answer": "A"
  },
  {
    "question": "Unit 5 - Câu 10: A couple of the girls wear . to prevent varicose veins.",
    "option_a": "support stockings",
    "option_b": "sun glasses",
    "option_c": "old gloves",
    "option_d": "nice hats",
    "answer": "A"
  },
  {
    "question": "Unit 5 - Câu 11: Angela attends a class about .. nutrition for a balanced diet.",
    "option_a": "nutrition",
    "option_b": "fashion",
    "option_c": "vacation",
    "option_d": "situation",
    "answer": "A"
  },
  {
    "question": "Unit 5 - Câu 12: To prevent indigestion and heartburn Angela avoids ..",
    "option_a": "fresh fruits",
    "option_b": "vegetables",
    "option_c": "bananas",
    "option_d": "fried foods",
    "answer": "D"
  },
  {
    "question": "Unit 5 - Câu 13: She makes sure she brushes her . after each meal.",
    "option_a": "heel",
    "option_b": "teeth",
    "option_c": "finger",
    "option_d": "cheek",
    "answer": "B"
  },
  {
    "question": "Unit 5 - Câu 14: Smoking increases the chances for damage to the .",
    "option_a": "student",
    "option_b": "adult",
    "option_c": "cardiologist",
    "option_d": "fetus",
    "answer": "D"
  },
  {
    "question": "Unit 5 - Câu 15: Pills should not be taken without the advice of a ..",
    "option_a": "geriatrician",
    "option_b": "pediatrician",
    "option_c": "obstetrician",
    "option_d": "cardiologist",
    "answer": "C"
  },
  {
    "question": "Unit 5 - Câu 16: Heavy drinking can damage the baby's ..",
    "option_a": "obesity",
    "option_b": "brain",
    "option_c": "thyroid",
    "option_d": "tonsil",
    "answer": "B"
  },
  {
    "question": "Unit 5 - Câu 17: Angela hopes to have adequate rest and a healthy pregnancy. 'Adequate' means:",
    "option_a": "biopsy",
    "option_b": "leukemia",
    "option_c": "enough",
    "option_d": "tonsil",
    "answer": "C"
  },
  {
    "question": "Unit 5 - Câu 18: Pregnancy is having a baby that developing inside the ……. of a female.",
    "option_a": "skeleton",
    "option_b": "womb",
    "option_c": "ovary",
    "option_d": "artery",
    "answer": "B"
  },
  {
    "question": "Unit 5 - Câu 19: How long does pregnancy typically last?",
    "option_a": "8 months",
    "option_b": "9 months",
    "option_c": "7 months",
    "option_d": "10 months",
    "answer": "B"
  },
  {
    "question": "Unit 5 - Câu 20: What types of tests are commonly used to detect pregnancy?",
    "option_a": "saliva",
    "option_b": "snot",
    "option_c": "urine",
    "option_d": "phlegm",
    "answer": "C"
  }
];