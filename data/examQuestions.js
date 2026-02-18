// שאלות מבחן — ארכיטקטורת מערכות תוכנה
const examQuestions = [
    // ===== ארכיטקטורה רב שכבתית =====
    {
        id: 1,
        topic: 'n-tier',
        topicName: 'ארכיטקטורה רב-שכבתית',
        question: 'בחברת "תוכנה בקטנה" יש 4 צוותים: צוות 1 — עיצוב מסכים, צוות 2 — פיתוח מסכים, צוות 3 — עיבוד קלט, צוות 4 — ניהול DB. טענה: הארכיטקטורה היא 4 שכבות. נכון?',
        options: ['נכון — 4 צוותים = 4 שכבות', 'לא נכון — 3 שכבות בלבד', 'לא נכון — 2 שכבות בלבד', 'נכון — כל צוות הוא שכבה'],
        correct: 1,
        explanation: '3 שכבות: צוותים 1+2 הם שכבת התצוגה (Presentation), צוות 3 הוא שכבת הלוגיקה (Business Logic), צוות 4 הוא שכבת הנתונים (Data).'
    },
    {
        id: 2,
        topic: 'n-tier',
        topicName: 'ארכיטקטורה רב-שכבתית',
        question: 'במערכת 3-Tier, באיזו שכבה מתבצע עיבוד הנתונים לפני הכנסה למסד הנתונים?',
        options: ['שכבת תצוגה (Presentation)', 'שכבת לוגיקה עסקית (Business Logic)', 'שכבת נתונים (Data)', 'שכבת רשת (Network)'],
        correct: 1,
        explanation: 'שכבת הלוגיקה העסקית אחראית על עיבוד הנתונים ותהליכים עסקיים לפני שהנתונים מגיעים לשכבת הנתונים.'
    },

    // ===== מערכות מבוזרות =====
    {
        id: 3,
        topic: 'distributed-saas-soa',
        topicName: 'מערכות מבוזרות, SaaS ו-SOA',
        question: 'החברה שודרגה — כעת 3 שרתים מבצעים חיפוש באינטרנט, שרת אחד מעבד לפני ו-2 אחרי. האם זו מערכת מבוזרת?',
        options: ['לא — זו מערכת מרכזית', 'כן — לפי מאפייני מערכת מבוזרת', 'רק אם השרתים במדינות שונות', 'לא ניתן לקבוע'],
        correct: 1,
        explanation: 'כן, המערכת מבוזרת. לפי המאפיינים: שיתוף משאבים, שקיפות, בו-זמניות, פתיחות וסיבולת לתקלות.'
    },
    {
        id: 4,
        topic: 'distributed-saas-soa',
        topicName: 'מערכות מבוזרות, SaaS ו-SOA',
        question: 'Adobe העלתה את Photoshop לענן ומספקת שירותי עריכה באמצעות מנוי. זוהי דוגמה ל:',
        options: ['SOA', 'Web 2.0', 'SaaS', 'Peer2Peer'],
        correct: 2,
        explanation: 'SaaS — Software as a Service. התוכנה מסופקת כשירות ענן עם מנוי חודשי.'
    },
    {
        id: 5,
        topic: 'distributed-saas-soa',
        topicName: 'מערכות מבוזרות, SaaS ו-SOA',
        question: 'מערכת שבה סטודנטים מכל רחבי העולם מתקשרים ישירות זה עם זה (בלי שרת מרכזי) נקראת:',
        options: ['Client-Server', 'SaaS', 'Peer2Peer', 'SOA'],
        correct: 2,
        explanation: 'Peer2Peer — תקשורת ישירה בין מחשבים ללא שרת מרכזי.'
    },
    {
        id: 6,
        topic: 'distributed-saas-soa',
        topicName: 'מערכות מבוזרות, SaaS ו-SOA',
        question: 'MMR=3, סטודנט נשאר 4 שנים, CAC=7, 5 סטודנטים. האם כדאי להכניס SaaS?',
        options: ['לא — ההוצאות גבוהות מההכנסות', 'כן — רווח של 685₪', 'לא ניתן לחשב', 'כדאי רק אם יש יותר מ-10 סטודנטים'],
        correct: 1,
        explanation: 'הכנסה = 3×12×4×5 = 720₪, הוצאה = 7×5 = 35₪, רווח = 685₪ — כדאי!'
    },
    {
        id: 7,
        topic: 'distributed-saas-soa',
        topicName: 'מערכות מבוזרות, SaaS ו-SOA',
        question: 'משה מנסה להתקבל לעבודה באינטרנט, מקבל תשובה מעליבה אוטומטית, ואין לו אמצעים להנפיק "אסימון" לתביעה. באיזה Web הוא חי?',
        options: ['Web 1.0', 'Web 2.0', 'Web 3.0', 'Web 4.0'],
        correct: 2,
        explanation: 'Web 3.0 — אינטרנט מבוזר עם בלוקצ\'יין ואסימונים (tokens).'
    },

    // ===== OPM =====
    {
        id: 8,
        topic: 'opm',
        topicName: 'OPM',
        question: 'ב-OPM, כיצד מיוצג אובייקט?',
        options: ['אליפסה', 'מלבן', 'עיגול', 'מעוין'],
        correct: 1,
        explanation: 'אובייקט (Object) — ישות שקיימת, מיוצגת כמלבן. תהליך (Process) מיוצג כאליפסה.'
    },
    {
        id: 9,
        topic: 'opm',
        topicName: 'OPM',
        question: 'מה ההבדל בין In-Zoom ל-Unfold ב-OPM?',
        options: [
            'אין הבדל — שניהם מגדילים פירוט',
            'In-Zoom מראה מבנה פנימי, Unfold מראה היררכיה',
            'Unfold מראה מבנה פנימי, In-Zoom מראה היררכיה',
            'שניהם מקטינים פירוט'
        ],
        correct: 1,
        explanation: 'In-Zoom — הגדלת הפירוט של רכיב, מראה מבנה פנימי. Unfold — פריסת רמות ההיררכיה.'
    },

    // ===== Design Patterns =====
    {
        id: 10,
        topic: 'design-patterns',
        topicName: 'Design Patterns',
        question: 'מהי תבנית Singleton?',
        options: [
            'יצירת אובייקטים ממחלקות שונות',
            'הגבלה ליצירת אובייקט אחד בלבד + גישה גלובלית',
            'המרה בין ממשקים',
            'יצירת עותקים של אובייקטים'
        ],
        correct: 1,
        explanation: 'Singleton — מוודאת שיווצר רק אובייקט אחד מהמחלקה ומספקת גישה גלובלית אליו. דוגמה: חיבור למסד נתונים.'
    },
    {
        id: 11,
        topic: 'design-patterns',
        topicName: 'Design Patterns',
        question: 'מתי נשתמש ב-Adapter?',
        options: [
            'כשרוצים ליצור אובייקט יחיד',
            'כשרוצים להעתיק אובייקטים',
            'כשצריך לגשר בין ממשקים לא תואמים',
            'כשרוצים ליצור אובייקטים בצורה דינמית'
        ],
        correct: 2,
        explanation: 'Adapter — יוצר שיתוף פעולה בין מחלקות על ידי המרה בין ממשק מתקבל לממשק מצופה.'
    },
    {
        id: 12,
        topic: 'design-patterns',
        topicName: 'Design Patterns',
        question: 'מי כתבו את ספר ה-Design Patterns המפורסם?',
        options: ['Microsoft', 'GOF — Gang of Four', 'Christopher Alexander', 'Alan Turing'],
        correct: 1,
        explanation: 'GOF (Gang of Four) — 4 מהנדסים: Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides. כריסטופר אלכסנדר היה הארכיטקט (בניין) שהתחיל את הרעיון.'
    },

    // ===== מקביליות =====
    {
        id: 13,
        topic: 'concurrency',
        topicName: 'תהליכים וחוטים',
        question: '3 תהליכים, כל אחד צריך 2 מדפסות. לא ישחרר מדפסת לפני שיסיים. מה מספר המדפסות המינימלי ללא deadlock?',
        options: ['3', '4', '5', '6'],
        correct: 1,
        explanation: '4 מדפסות. במקרה הגרוע כל תהליך תופס מדפסת אחת (3 תפוסות). עם 4 מדפסות — לפחות תהליך אחד מצליח לתפוס 2 ולסיים, ואז משחרר לאחרים.'
    },
    {
        id: 14,
        topic: 'concurrency',
        topicName: 'תהליכים וחוטים',
        question: 'קטע קוד שמשתמש במדפסות (ורק תהליך אחד בכל פעם) נקרא:',
        options: ['קטע קריטי (Critical Section)', 'חבק (Deadlock)', 'הרעבה (Starvation)', 'Context Switch'],
        correct: 0,
        explanation: 'קטע קריטי — אזור קוד שרק תהליך אחד יכול לבצע בכל רגע נתון.'
    },
    {
        id: 15,
        topic: 'concurrency',
        topicName: 'תהליכים וחוטים',
        question: 'מהו Deadlock (חבק)?',
        options: [
            'תהליך שלא מקבל משאבים לעולם',
            'שני תהליכים מחכים זה לשחרור המשאב של זה — שניהם תקועים',
            'תהליך שרץ לאט',
            'ריבוי תהליכים על מעבד אחד'
        ],
        correct: 1,
        explanation: 'Deadlock — תהליך א\' מחזיק במשאב ומחכה למשאב של תהליך ב\', ותהליך ב\' מחכה למשאב של א\'. שניהם תקועים.'
    },
    {
        id: 16,
        topic: 'concurrency',
        topicName: 'תהליכים וחוטים',
        question: 'מהי הרעבה (Starvation)?',
        options: [
            'שני תהליכים תקועים',
            'תהליך בעדיפות נמוכה לעולם לא מקבל גישה למשאב',
            'מעבד שלא עובד',
            'חוסר בזיכרון'
        ],
        correct: 1,
        explanation: 'הרעבה — תהליך בעדיפות נמוכה. תמיד מגיעים תהליכים בעדיפות גבוהה יותר ומונעים ממנו גישה למשאב.'
    },
    {
        id: 17,
        topic: 'concurrency',
        topicName: 'תהליכים וחוטים',
        question: 'בבעיית הפילוסופים הסועדים, מה קורה אם כולם הרימו את המזלג הימני בו-זמנית?',
        options: ['כולם אוכלים', 'Deadlock — אף אחד לא יכול לאכול', 'רק אחד אוכל', 'Starvation'],
        correct: 1,
        explanation: 'Deadlock — כל אחד מחזיק מזלג אחד ומחכה לשני. אף אחד לא ישחרר את המזלג שלו כי הוא מחכה לקבל את השני.'
    },

    // ===== Web =====
    {
        id: 18,
        topic: 'web-dev',
        topicName: 'Web Development',
        question: 'טענה: בהוספת קובץ JavaScript לפרויקט נוכל לבצע בשרת עיבוד לקלט המשתמש. נכון?',
        options: ['נכון', 'לא נכון — JS רץ בצד הלקוח בלבד', 'נכון — אם משתמשים ב-Node.js', 'תלוי בדפדפן'],
        correct: 1,
        explanation: 'קוד JavaScript של בדיקת קלט רץ רק בסביבת הלקוח (בדפדפן). בשרת רץ קוד אחר (כגון Python, Java, Node.js).'
    },
    {
        id: 19,
        topic: 'web-dev',
        topicName: 'Web Development',
        question: 'בקוד HTML, תגית <table> חייבת להיות מקוננת בתוך:',
        options: ['<div>', '<form>', '<body>', '<head>'],
        correct: 2,
        explanation: 'אלמנטים ויזואליים כמו טבלאות חייבים להופיע בתוך <body>. <head> מכיל מטא-נתונים בלבד.'
    },

    // ===== OOP =====
    {
        id: 20,
        topic: 'oop',
        topicName: 'OOP',
        question: 'מה ההבדל בין __init__ ל-__new__ בפייתון?',
        options: [
            'אין הבדל',
            '__new__ יוצר אובייקט, __init__ מאתחל תכונות',
            '__init__ יוצר אובייקט, __new__ מוחק אותו',
            'שניהם יוצרים אובייקטים'
        ],
        correct: 1,
        explanation: '__new__(cls) — יוצר את האובייקט ומקצה זיכרון. __init__(self) — מאתחל את תכונות האובייקט שכבר נוצר. new רץ לפני init.'
    },
    {
        id: 21,
        topic: 'oop',
        topicName: 'OOP',
        question: 'Student("Kirk", 23, "SW", 2020) נקרא פעמיים. התוצאה תהיה:',
        options: [
            'אותו אובייקט',
            'שני אובייקטים שונים עם ערכים זהים',
            'שגיאה',
            'אובייקט אחד עם ערכים כפולים'
        ],
        correct: 1,
        explanation: 'כל קריאה ל-constructor יוצרת אובייקט חדש במקום אחר בזיכרון. אמנם הערכים זהים אך הם אובייקטים שונים (== מחזיר False).'
    },

    // ===== נאמנות =====
    {
        id: 22,
        topic: 'fidelity',
        topicName: 'נאמנות תוכנה',
        question: 'מהי נאמנות נמוכה (Low Fidelity)?',
        options: [
            'עיצוב מלא עם אנימציות',
            'סקיצות פשוטות ו-wireframes בסיסיים',
            'קוד מלא ופונקציונלי',
            'בדיקות קופסה שחורה'
        ],
        correct: 1,
        explanation: 'Low Fidelity — סקיצות ביד, wireframes פשוטים. יתרונות: מהיר, זול, קל לשינוי, מתמקד בפונקציונליות.'
    },
    {
        id: 23,
        topic: 'fidelity',
        topicName: 'נאמנות תוכנה',
        question: 'מה מטרת Silver Box Testing?',
        options: [
            'בדיקת ביצועים',
            'חשיפת פערי פרשנות בין צוותים',
            'ניפוי שגיאות בקוד',
            'בדיקת אבטחה'
        ],
        correct: 1,
        explanation: 'Silver Box Testing — כמה צוותים מפתחים את אותה פונקציונליות ואז מצליבים בדיקות. חושפים פערים בפרשנות הדרישות.'
    },

    // ===== Pipes & Filters =====
    {
        id: 24,
        topic: 'pipes-filters',
        topicName: 'Pipes & Filters',
        question: 'בארכיטקטורת Pipes & Filters, מהו Filter?',
        options: [
            'ערוץ העברת נתונים',
            'רכיב שמבצע עיבוד על נתונים',
            'מסד נתונים',
            'ממשק משתמש'
        ],
        correct: 1,
        explanation: 'Filter (מסנן) — רכיב שמבצע עיבוד מסוים על המידע. Pipe (צינור) — ערוץ ההעברה בין מסננים.'
    },

    // ===== דרישות =====
    {
        id: 25,
        topic: 'requirements',
        topicName: 'דרישות מערכת',
        question: '"המערכת תאפשר הוספת משתמש" — זוהי דרישה:',
        options: ['לא פונקציונלית', 'פונקציונלית', 'טכנית', 'עיצובית'],
        correct: 1,
        explanation: 'דרישה פונקציונלית — מתארת מה המערכת אמורה לעשות.'
    },
    {
        id: 26,
        topic: 'requirements',
        topicName: 'דרישות מערכת',
        question: '"הוספת משתמש תתבצע על ידי מנהל המערכת בלבד" — זוהי דרישה:',
        options: ['פונקציונלית', 'לא פונקציונלית', 'טכנית', 'עיצובית'],
        correct: 1,
        explanation: 'דרישה לא פונקציונלית — מתארת איך המערכת תעשה את מה שהיא אמורה (מגבלה/אילוץ).'
    }
];

export default examQuestions;
