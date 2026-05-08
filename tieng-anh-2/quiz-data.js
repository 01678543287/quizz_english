const quizData = [
    {
        "question": "Maria is a single mother who often .. stressed.",
        "option_a": "feeling",
        "option_b": "felt",
        "option_c": "feel",
        "option_d": "feels",
        "answer": "D"
    },
    {
        "question": "Her lower back often .. and her eyes get tired.",
        "option_a": "hurt",
        "option_b": "hurts",
        "option_c": "hurting",
        "option_d": "hurtese",
        "answer": "B"
    },
    {
        "question": "Maria .. a walk with a couple of friends.",
        "option_a": "enjoys to taking",
        "option_b": "enjoys take",
        "option_c": "enjoys taking",
        "option_d": "enjoy taking",
        "answer": "C"
    },
    {
        "question": "She enjoys the fresh air and talking with .. friends.",
        "option_a": "her",
        "option_b": "his",
        "option_c": "hers",
        "option_d": "she",
        "answer": "A"
    },
    {
        "question": "For lunch she usually .. a salad and fruit.",
        "option_a": "eat something light like",
        "option_b": "eats something like light",
        "option_c": "eats something light like",
        "option_d": "eat something like light",
        "answer": "C"
    },
    {
        "question": "At work she ..coffee or soda.",
        "option_a": "drinks water of instead",
        "option_b": "drink water instead of",
        "option_c": "drinks water instead of",
        "option_d": "drinks instead of water",
        "answer": "C"
    },
    {
        "question": "Maria ... be there when he arrives home from school.",
        "option_a": "cannot",
        "option_b": "can not",
        "option_c": "not can",
        "option_d": "can no",
        "answer": "A"
    },
    {
        "question": "Maria worries about not having .. pay the bills.",
        "option_a": "enough money to",
        "option_b": "to enough money",
        "option_c": "money enough to",
        "option_d": "enough to money",
        "answer": "A"
    },
    {
        "question": "Maria suffers from migraine headaches.",
        "option_a": "a kind of disease to one side of the head",
        "option_b": "a kind of disease to one side of the heart",
        "option_c": "a kind of disease to one side of the breast",
        "option_d": "a kind of disease to one side of the stomach",
        "answer": "A"
    },
    {
        "question": "Maria has high .. pressure. It means that the heart works harder to pump blood through the arteries.",
        "option_a": "stroke",
        "option_b": "arm",
        "option_c": "foot",
        "option_d": "blood",
        "answer": "D"
    },
    {
        "question": "Maria watches her weight and takes medicine for this disease.",
        "option_a": "tells",
        "option_b": "drinks",
        "option_c": "eats",
        "option_d": "smells",
        "answer": "B"
    },
    {
        "question": "She realizes she could have a heart attack.",
        "option_a": "heartburn",
        "option_b": "heart shaped",
        "option_c": "heart beat",
        "option_d": "heart disease",
        "answer": "D"
    },
    {
        "question": "At weekends she often goes bike riding with her son.",
        "option_a": "running",
        "option_b": "bicycle",
        "option_c": "car",
        "option_d": "on foot",
        "answer": "B"
    },
    {
        "question": "In the evenings she .. stretching exercises.",
        "option_a": "done",
        "option_b": "doing",
        "option_c": "do",
        "option_d": "does",
        "answer": "D"
    },
    {
        "question": "I'd like to make an appointment .. Doctor Jensen, Please!",
        "option_a": "to glance",
        "option_b": "to stare",
        "option_c": "to see",
        "option_d": "to look",
        "answer": "C"
    },
    {
        "question": "Have you been in to see Doctor Jensen before? Yes. I ...",
        "option_a": "do",
        "option_b": "have",
        "option_c": "has",
        "option_d": "am",
        "answer": "B"
    },
    {
        "question": "..is the emotional and physical strain that caused by the problems in someone's life.",
        "option_a": "tibia",
        "option_b": "smile",
        "option_c": "stress",
        "option_d": "fingernail",
        "answer": "C"
    },
    {
        "question": "What can you do to manage stress? You can take a walk; healthy activities; yoga;.",
        "option_a": "unhappy story",
        "option_b": "meditation",
        "option_c": "family trouble",
        "option_d": "bad situation",
        "answer": "B"
    },
    {
        "question": "It is the part of the face above the eyes and below the hair. What is it?",
        "option_a": "neck",
        "option_b": "forehead",
        "option_c": "hand",
        "option_d": "heel",
        "answer": "B"
    },
    {
        "question": "It is the part of the face below the mouth and above the neck. What is it?",
        "option_a": "tibia",
        "option_b": "hip",
        "option_c": "chin",
        "option_d": "chest",
        "answer": "C"
    },
    {
        "question": "It is the part of the body on top of the neck containing the eyes, nose, mouth and brain. What is it?",
        "option_a": "head",
        "option_b": "forehead",
        "option_c": "eyes",
        "option_d": "face",
        "answer": "A"
    },
    {
        "question": "It is the part of the face that sticks out above the mouth, used for breathing and smelling things. What is it?",
        "option_a": "neck",
        "option_b": "jaw",
        "option_c": "nose",
        "option_d": "chest",
        "answer": "C"
    },
    {
        "question": "It is a medical instrument with a long thin needle that is used to give someone an injection under their skin. What is it?",
        "option_a": "hypodermic needle",
        "option_b": "meditation",
        "option_c": "bathtub",
        "option_d": "barrel",
        "answer": "A"
    },
    {
        "question": "It is an infection of the tonsils in which they become swollen and sore. What is it?",
        "option_a": "neck",
        "option_b": "jaw",
        "option_c": "tonsillitis",
        "option_d": "hypodermic needle",
        "answer": "C"
    },
    {
        "question": "Marta's son drank a bottle of medicine. In this case The Poison Control told Marta to give him fluids to .. the medicine.",
        "option_a": "suicide",
        "option_b": "cure",
        "option_c": "poison",
        "option_d": "dilute",
        "answer": "D"
    },
    {
        "question": "She watched him and about an hour later he threw up. What does threw up mean in this sentence?",
        "option_a": "urinated",
        "option_b": "vomited",
        "option_c": "stroked",
        "option_d": "acknowledged",
        "answer": "B"
    },
    {
        "question": "A (An) is a sudden shaking movement of the body that cannot be controlled",
        "option_a": "bronchitis",
        "option_b": "slurred speech",
        "option_c": "convulsion",
        "option_d": "lack of concentration",
        "answer": "C"
    },
    {
        "question": "A (An) is a state like sleep caused by injury or illness, when you are unable to use your senses.",
        "option_a": "unconsciousness",
        "option_b": "seizure",
        "option_c": "skin problem",
        "option_d": "numbness",
        "answer": "A"
    },
    {
        "question": "Do you know how to deal with poisoning? What does to deal with mean in this sentence?",
        "option_a": "discourage",
        "option_b": "herniate",
        "option_c": "stare",
        "option_d": "solve",
        "answer": "D"
    },
    {
        "question": "A (An) is a vehicle with special equipment, used for taking sick or injured people to a hospital.",
        "option_a": "stethoscope",
        "option_b": "disposable syringe",
        "option_c": "ambulance",
        "option_d": "saliva",
        "answer": "C"
    },
    {
        "question": "Dr. Nam specializes in eye diseases. He is a (an)",
        "option_a": "ophthalmologist",
        "option_b": "orthopedist",
        "option_c": "oncologist",
        "option_d": "obstetrician",
        "answer": "A"
    },
    {
        "question": "Dr. Hoa specializes in tumor including cancer. She is a (an)",
        "option_a": "oncologist",
        "option_b": "pediatrician",
        "option_c": "hematologist",
        "option_d": "neurologist",
        "answer": "A"
    },
    {
        "question": "Dr. Lan specializes in hearts, arteries. She is a (an)",
        "option_a": "cardiologist",
        "option_b": "urologist",
        "option_c": "geriatrician",
        "option_d": "allergist",
        "answer": "A"
    },
    {
        "question": "Dr. Thu specializes in skin diseases. She is a (an)",
        "option_a": "gynaecologist",
        "option_b": "general practitioner",
        "option_c": "internist",
        "option_d": "dermatologist",
        "answer": "D"
    },
    {
        "question": "is a doctor who studies the use of medicine that makes a person unable to feel pain in all or part of the body.",
        "option_a": "otolaryngologist",
        "option_b": "anesthesiologist",
        "option_c": "otorhinologist",
        "option_d": "gastroenterologist",
        "answer": "B"
    },
    {
        "question": "Dr. John specializes in diseases of blood. He is a (an).",
        "option_a": "nephrologist",
        "option_b": "immunologist",
        "option_c": "pulmonologist",
        "option_d": "hematologist",
        "answer": "D"
    },
    {
        "question": "Dr. Mark specializes in diseases of lung. He is a (an).",
        "option_a": "pulmonologist",
        "option_b": "histologist",
        "option_c": "radiologist",
        "option_d": "anesthesiologist",
        "answer": "A"
    },
    {
        "question": "A (An) is a person's sex organs that are outside their body.",
        "option_a": "genitalia",
        "option_b": "fetus",
        "option_c": "hemorrhage",
        "option_d": "contaminated foods",
        "answer": "A"
    },
    {
        "question": "Which one is not women's?",
        "option_a": "uterus",
        "option_b": "prostate",
        "option_c": "ovary",
        "option_d": "ovum",
        "answer": "B"
    },
    {
        "question": "Mary’s eyes are itchy. Therefore she goes to see a (an)……………..",
        "option_a": "physiotherapist",
        "option_b": "dietician",
        "option_c": "ophthalmologist",
        "option_d": "cardiologist",
        "answer": "C"
    },
    {
        "question": "A (An) ……………………is the state of being or becoming a mother.",
        "option_a": "antibiotic",
        "option_b": "maternity",
        "option_c": "pathology",
        "option_d": "dermatology",
        "answer": "B"
    },
    {
        "question": "Dr. Mai specializes in gynecology. She is a (an)",
        "option_a": "dermatologist",
        "option_b": "gastroenterologist",
        "option_c": "cardiologist",
        "option_d": "obstetrician",
        "answer": "D"
    },
    {
        "question": "Dr. Loan specializes in nephric disease. She is a (an)",
        "option_a": "allergist",
        "option_b": "nephrologist",
        "option_c": "dentist",
        "option_d": "geriatrician",
        "answer": "B"
    },
    {
        "question": "Dr. Oanh specializes in allergy. She is a (an)",
        "option_a": "obstetrician",
        "option_b": "radiologist",
        "option_a": "allergist",
        "option_b": "general practitioner",
        "answer": "C"
    },
    {
        "question": "Dr. Hoa specializes in diseases of children. He is a (an)",
        "option_a": "pediatrician",
        "option_b": "neurologist",
        "option_c": "immunologist",
        "option_d": "otolaryngologist",
        "answer": "A"
    },
    {
        "question": "Mr. Binh has a toothache, so he need go to see a",
        "option_a": "dermatologist",
        "option_b": "allergist",
        "option_c": "obstetrician",
        "option_d": "dentist",
        "answer": "D"
    },
    {
        "question": "Dr. Thanh specializes in orthopedic disease. He is a (an)",
        "option_a": "cardiologist",
        "option_b": "pediatrician",
        "option_c": "orthopedist",
        "option_d": "urologist",
        "answer": "C"
    },
    {
        "question": "Dr. Smith specializes in urology. He is a (an)",
        "option_a": "urologist",
        "option_b": "cardiologist",
        "option_c": "oncologist",
        "option_d": "obstetrician",
        "answer": "A"
    },
    {
        "question": "Dr. Larry specializes in diseases of old patients. He is a (an)",
        "option_a": "geriatrician",
        "option_b": "pediatrician",
        "option_c": "hematologist",
        "option_d": "pulmonologist",
        "answer": "A"
    },
    {
        "question": "Which specialist do we need to make sure the fetus is healthy?",
        "option_a": "otorhinologist",
        "option_b": "cardiologist",
        "option_c": "oncologist",
        "option_d": "obstetrician",
        "answer": "D"
    },
    {
        "question": "I hate being stuck in a wheelchair. Which specialist do I need?",
        "option_a": "physical therapist",
        "option_b": "cardiologist",
        "option_c": "dermatologist",
        "option_d": "obstetrician",
        "answer": "A"
    },
    {
        "question": "The test results show that I have an advanced form of blood cancer. Which specialist do I need?",
        "option_a": "otorhinologist",
        "option_b": "allergist",
        "option_c": "oncologist",
        "option_d": "ophthalmologist",
        "answer": "C"
    },
    {
        "question": "My left eye has an infection and my vision has been blurry. Which specialist do I need?",
        "option_a": "orthopedist",
        "option_b": "pulmonologist",
        "option_c": "internist",
        "option_d": "ophthalmologist",
        "answer": "D"
    },
    {
        "question": "I've been having major chest pains this week and trouble breathing. Which specialist do I need?",
        "option_a": "geriatrician",
        "option_b": "gynecologist",
        "option_c": "oncologist",
        "option_d": "cardiologist",
        "answer": "D"
    },
    {
        "question": "I get terrible acne. Which specialist do I need?",
        "option_a": "dermatologist",
        "option_b": "dentist",
        "option_c": "neurologist",
        "option_d": "urologist",
        "answer": "A"
    },
    {
        "question": "The baby hasn't put on any weight and she keeps getting ear infections. Which specialist does my baby need?",
        "option_a": "pediatrician",
        "option_b": "hematologist",
        "option_c": "otorhinologist",
        "option_d": "radiologist",
        "answer": "A"
    },
    {
        "question": "Which specialist do we need for infertility problems?",
        "option_a": "pediatrician",
        "option_b": "hematologist",
        "option_c": "gynecologist",
        "option_d": "radiologist",
        "answer": "C"
    },
    {
        "question": "In what hospital ward would you find a patient who has had his appendix removed?",
        "option_a": "dermatological department",
        "option_b": "maternity ward",
        "option_c": "surgical department",
        "option_d": "neurological department",
        "answer": "C"
    },
    {
        "question": "In what hospital ward would you find a patient who has had his tonsils out?",
        "option_a": "ENT department",
        "option_b": "geriatric ward",
        "option_c": "surgical department",
        "option_d": "emergency department",
        "answer": "A"
    },
    {
        "question": "In what hospital ward would you find a patient with a broken leg?",
        "option_a": "ENT department",
        "option_b": "emergency department",
        "option_c": "dermatological department",
        "option_d": "geriatric ward",
        "answer": "B"
    },
    {
        "question": "In what hospital ward would you find a patient who has just had an accident?",
        "option_a": "ENT department",
        "option_b": "maternity ward",
        "option_c": "emergency department",
        "option_d": "neurological department",
        "answer": "C"
    },
    {
        "question": "In what hospital ward would you find a patient with cerebral hemorrhage?",
        "option_a": "neurological department",
        "option_b": "geriatric ward",
        "option_c": "surgical department",
        "option_d": "emergency department",
        "answer": "A"
    },
    {
        "question": "In what hospital ward would you find an elderly patient?",
        "option_a": "dermatological department",
        "option_b": "geriatric ward",
        "option_c": "x-ray department",
        "option_d": "emergency department",
        "answer": "B"
    },
    {
        "question": "In what hospital ward would you find a patient who is having an operation?",
        "option_a": "pharmacological department",
        "option_b": "operating room",
        "option_c": "x-ray department",
        "option_d": "neurological department",
        "answer": "B"
    },
    {
        "question": "In what hospital ward would you find a patient with a skin disease?",
        "option_a": "ENT department",
        "option_b": "emergency department",
        "option_c": "dermatological department",
        "option_d": "geriatric ward",
        "answer": "C"
    },
    {
        "question": "In what hospital ward would you find a woman who will have a baby in two months time?",
        "option_a": "neurological department",
        "option_b": "maternity ward",
        "option_c": "emergency department",
        "option_d": "neurological department",
        "answer": "B"
    },
    {
        "question": "Jack's immune system no longer works properly. He gets many infections and has cancer.",
        "option_a": "skeletal",
        "option_b": "adequate",
        "option_c": "irritable",
        "option_d": "resistant",
        "answer": "B"
    },
    {
        "question": "Jack caught AIDS by using a contaminated needle.",
        "option_a": "adequate",
        "option_b": "polluted",
        "option_c": "solemn",
        "option_d": "overweight",
        "answer": "B"
    },
    {
        "question": "Before coming down with AIDS. His in his neck and armpit began swelling.",
        "option_a": "urinary",
        "option_b": "migraine headaches",
        "option_c": "lymph glands",
        "option_d": "tumor",
        "answer": "C"
    },
    {
        "question": "A (An) ..is a person who does a job without being paid for it.",
        "option_a": "volunteer",
        "option_b": "dentist",
        "option_c": "obstetrician",
        "option_d": "ophthalmologist",
        "answer": "A"
    },
    {
        "question": "A (An) ..is a living thing, too small to be seen without a microscope, that causes infectious disease.",
        "option_a": "heartburn",
        "option_b": "obesity",
        "option_c": "virus",
        "option_d": "mammogram",
        "answer": "C"
    },
    {
        "question": "A (An) ..is a girl who has sex for money.",
        "option_a": "prostitute",
        "option_b": "pulmonologist",
        "option_c": "anesthesiologist",
        "option_d": "radiologist",
        "answer": "A"
    },
    {
        "question": "A (An) ..is a thin rubber covering that a man wears over his penis during sex.",
        "option_a": "condom",
        "option_b": "tumor",
        "option_c": "stethoscope",
        "option_d": "cartilage",
        "answer": "A"
    },
    {
        "question": "Jack caught AIDS. Then he began to lose weight, feel very tired, and had .",
        "option_a": "pregnancy",
        "option_b": "diarrhea",
        "option_c": "gym",
        "option_d": "mammogram",
        "answer": "B"
    },
    {
        "question": "So far, there is no . for AIDS.",
        "option_a": "tumor",
        "option_b": "stethoscope",
        "option_c": "phlegm",
        "option_d": "cure",
        "answer": "D"
    },
    {
        "question": "The only way to know for sure whether a person is infected with HIV is for them to have an HIV .",
        "option_a": "blood",
        "option_b": "test",
        "option_c": "disposable syringe",
        "option_d": "mothers",
        "answer": "B"
    },
    {
        "question": "Should people with AIDS be isolated from society?",
        "option_a": "trauma",
        "option_b": "meditated",
        "option_c": "separated",
        "option_d": "urinated",
        "answer": "C"
    },
    {
        "question": "Your temperature seems raised. Let me get a .to check.",
        "option_a": "vaccination",
        "option_b": "thermometer",
        "option_c": "diagnosis",
        "option_d": "urine sample",
        "answer": "B"
    },
    {
        "question": "I will give you a prescription for some .",
        "option_a": "paralysis",
        "option_b": "heartburns",
        "option_c": "antibiotics",
        "option_d": "tumors",
        "answer": "C"
    },
    {
        "question": "Dr. Nam works in the operating theatre. He is a (an)..",
        "option_a": "pediatrician",
        "option_b": "surgeon",
        "option_c": "radiologist",
        "option_d": "doctor",
        "answer": "B"
    },
    {
        "question": "Lan got a traffic accident. Her leg is broken then she had an X-ray film. Which doctor should she consult?",
        "option_a": "hematologist",
        "option_b": "radiologist",
        "option_c": "pulmonologist",
        "option_d": "pediatrician",
        "answer": "B"
    },
    {
        "question": "A (an).is a small vehicle with wheels used for carrying things in the hospitals.",
        "option_a": "ambulance",
        "option_b": "disposable syringe",
        "option_c": "trolley",
        "option_d": "stethoscope",
        "answer": "C"
    },
    {
        "question": "A (an).is a container used as a toilet by a person who is too sick to get out of bed.",
        "option_a": "pediatrician",
        "option_b": "bedpan",
        "option_c": "radiologist",
        "option_d": "bedroom",
        "answer": "B"
    },
    {
        "question": "When did your lump appear?",
        "option_a": "vomit",
        "option_b": "rash",
        "option_c": "tumor",
        "option_d": "snot",
        "answer": "C"
    },
    {
        "question": "…………… is the liquid that is produced in your mouth that helps you to swallow food.",
        "option_a": "snot",
        "option_b": "saliva",
        "option_c": "phlegm",
        "option_d": "tear",
        "answer": "B"
    },
    {
        "question": "The registration time is .. 8. am and 11.am.",
        "option_a": "near",
        "option_b": "on",
        "option_c": "in",
        "option_d": "between",
        "answer": "D"
    },
    {
        "question": "After .. a card, the patient fill in it and take it back to the desk.",
        "option_a": "get",
        "option_b": "gets",
        "option_c": "geting",
        "option_d": "getting",
        "answer": "D"
    },
    {
        "question": "My back is so ………….. that I can’t stand upright.",
        "option_a": "pain",
        "option_b": "pains",
        "option_c": "painful",
        "option_d": "paint",
        "answer": "C"
    },
    {
        "question": "The ………….. fee will be 5.000 VNĐ.",
        "option_a": "register",
        "option_b": "registering",
        "option_c": "registration",
        "option_d": "registered",
        "answer": "C"
    },
    {
        "question": "The child has a high ……………",
        "option_a": "temperature",
        "option_b": "temperate",
        "option_c": "temperer",
        "option_d": "tempering",
        "answer": "A"
    },
    {
        "question": "Her mother smoked more than two packs a day and had died .. lung cancer at the age of 52.",
        "option_a": "at",
        "option_b": "of",
        "option_c": "in",
        "option_d": "between",
        "answer": "B"
    },
    {
        "question": "A (An) ..is the top part of the front of the body, between the neck and the stomach.",
        "option_a": "head",
        "option_b": "forehead",
        "option_c": "chest",
        "option_d": "tumor",
        "answer": "C"
    },
    {
        "question": "Judy started thinking about how she might quit smoking.",
        "option_a": "sneeze",
        "option_b": "cure",
        "option_c": "discontinue",
        "option_d": "enjoy",
        "answer": "C"
    },
    {
        "question": "Smoking does not only cause lung cancer but is linked to heart disease.",
        "option_a": "connected",
        "option_b": "meditated",
        "option_c": "vomited",
        "option_d": "been",
        "answer": "A"
    },
    {
        "question": "Why is smoking dangerous for an expectant mother?",
        "option_a": "mother in law",
        "option_b": "stepmother",
        "option_c": "mother tongue",
        "option_d": "pregnant mother",
        "answer": "D"
    },
    {
        "question": "Cholesterol can build up in the ..",
        "option_a": "mammogram",
        "option_b": "tumor",
        "option_c": "chest",
        "option_d": "arteries",
        "answer": "D"
    },
    {
        "question": "The cholesterol can also break away and travel to the heart or brain, causing heart attacks or ...",
        "option_a": "tonsillitis",
        "option_b": "traumatology",
        "option_c": "strokes",
        "option_d": "miscarriage",
        "answer": "C"
    },
    {
        "question": "Chest pain, dizziness and shortness of breath are symptoms of heart diseases.",
        "option_a": "Chest pain",
        "option_b": "Sterilization",
        "option_c": "Phlegm",
        "option_d": "Saturated fats",
        "answer": "A"
    },
    {
        "question": "A (An) ………….. is a thin tube that is put into the body in order to remove liquid.",
        "option_a": "trolley",
        "option_b": "thermometer",
        "option_c": "catheter",
        "option_d": "stethoscope",
        "answer": "C"
    },
    {
        "question": "Regular exercise, regular examination and balanced diet are good things to prevent …………..",
        "option_a": "heart diseases",
        "option_b": "toothaches",
        "option_c": "thyroid diseases",
        "option_d": "tonsillitis",
        "answer": "A"
    },
    {
        "question": "Recently Nga's mother has got a serious heart attack, she should go to see the ..",
        "option_a": "cardiologist",
        "option_b": "urologist",
        "option_c": "geriatrician",
        "option_d": "allergist",
        "answer": "A"
    },
    {
        "question": "Lately Nam's paternal grandfather has got abnormal heart sounds.",
        "option_a": "painless",
        "option_b": "sleepless",
        "option_c": "heartless",
        "option_d": "irregular",
        "answer": "D"
    },
    {
        "question": "These hospital instruments have been sterilized .",
        "option_a": "lucrative",
        "option_b": "disinfected",
        "option_c": "vacant",
        "option_d": "occupied",
        "answer": "B"
    },
    {
        "question": "Have you ever visited the gynecological ward? It is a ward that specializes for curing diseases of …………..",
        "option_a": "students",
        "option_b": "women",
        "option_c": "pupils",
        "option_d": "children",
        "answer": "B"
    },
    {
        "question": "Some days ago Nam has got a terrible traffic accident. Then his leg has been fractured.",
        "option_a": "infected",
        "option_b": "dislocated",
        "option_c": "broken",
        "option_d": "exhibited",
        "answer": "C"
    },
    {
        "question": "Nga’s maternal grandmother started feeling weak a fortnight ago.",
        "option_a": "one week",
        "option_b": "three weeks",
        "option_c": "two weeks",
        "option_d": "four weeks",
        "answer": "C"
    },
    {
        "question": "A (an) ..is a deep unconscious state, usually lasting a long time and caused by serious illness or injury.",
        "option_a": "retia",
        "option_b": "coma",
        "option_c": "ligament",
        "option_d": "miscarriage",
        "answer": "B"
    },
    {
        "question": "Her aunt was very upset when she found out Angela was pregnant. What does found out mean in this sentence?",
        "option_a": "encouraged",
        "option_b": "collaborated",
        "option_c": "stroked",
        "option_d": "discovered",
        "answer": "D"
    },
    {
        "question": "Fortunately for Angela there is a teen pregnancy program at her school. What does Fortunately mean in this sentence?",
        "option_a": "beautifully",
        "option_b": "luckily",
        "option_c": "lately",
        "option_d": "lovely",
        "answer": "B"
    },
    {
        "question": "After Angela had lost her .. she became worried .",
        "option_a": "money",
        "option_b": "keys",
        "option_c": "period",
        "option_d": "weight",
        "answer": "C"
    },
    {
        "question": "The counselor suggested Angela enter the teen pregnancy program. What does suggested mean in this sentence?",
        "option_a": "recommended",
        "option_b": "herniate",
        "option_c": "dilute",
        "option_d": "sneeze",
        "answer": "A"
    },
    {
        "question": "Their instructor reminds pregnant women to drink plenty of ., at least eight glasses a day.",
        "option_a": "water",
        "option_b": "beer",
        "option_c": "alcohol",
        "option_d": "brandy",
        "answer": "A"
    },
    {
        "question": "Smoking increases the chances for mental and physical damage to the .",
        "option_a": "student",
        "option_b": "adult",
        "option_c": "cardiologist",
        "option_d": "fetus",
        "answer": "D"
    },
    {
        "question": "Pregnant women are told all drugs and pills should not be taken without the advice of a ..",
        "option_a": "geriatrician",
        "option_b": "pediatrician",
        "option_c": "obstetrician",
        "option_d": "cardiologist",
        "answer": "C"
    },
    {
        "question": "Pregnancy is having a baby that developing inside the ……. of a female.",
        "option_a": "skeleton",
        "option_b": "womb",
        "option_c": "ovary",
        "option_d": "artery",
        "answer": "B"
    },
    {
        "question": "How long does pregnancy typically last?",
        "option_a": "8 months",
        "option_b": "9 months",
        "option_c": "7 months",
        "option_d": "10 months",
        "answer": "B"
    },
    {
        "question": "What types of tests are commonly used to detect pregnancy?",
        "option_a": "saliva",
        "option_b": "snot",
        "option_c": "urine",
        "option_d": "phlegm",
        "answer": "C"
    }
];