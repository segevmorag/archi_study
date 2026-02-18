
import topics from './topics';

/*
 * Curated exam exercises per topic.
 * Extracted from PrintExtendedPage.jsx to ensure single source of truth.
 */
const textQuestions = {
    'intro': [
        {
            q: 'ציינו 3 מאפיינים של ארכיטקטורת תוכנה טובה.',
            a: 'גמישות (Flexibility), הרחבה (Extensibility), בהירות (Clarity).',
            why: 'אלו מאפייני איכות שנמדדים במדדי תוכנה (Software Metrics). KIS — Keep It Simple הוא עיקרון מפתח.'
        },
        {
            q: 'מהו ההבדל בין Software Architecture ל-Software Design?',
            a: 'Architecture = מבנה רמה גבוהה (רכיבים וחיבורים). Design = פירוט הרכיבים עצמם (מחלקות, פונקציות).',
            why: 'Architecture מחליטה "איזה רכיבים", Design מחליט "איך כל רכיב מיושם".'
        },
        {
            q: 'מפתח כתב פונקציה באורך 500 שורות. איזה עיקרון אדריכלי הוא מפר?',
            a: 'עקרון KIS (Keep It Simple) ועקרון הבהירות (Clarity).',
            why: 'פונקציה באורך 500 שורות קשה לתחזוקה, לבדיקה ולהבנה. צריך לפרק לפונקציות קטנות.'
        },
        {
            q: 'מהם היתרונות של מוסכמות קוד (Code Conventions)? ציינו 3.',
            a: '(1) קריאוּת אחידה בצוות. (2) תחזוקה קלה יותר. (3) הטמעת מפתחים חדשים מהירה.',
            why: 'מוסכמות = "שפה משותפת". ללא מוסכמות, כל מפתח כותב בסגנון שונה.'
        },
        {
            q: 'האם ארכיטקטורה טובה מבטיחה שהתוכנה תעבוד? הסבירו.',
            a: 'לא! ארכיטקטורה טובה מבטיחה שהתוכנה ניתנת לתחזוקה, הרחבה ושינוי — לא שהיא נטולת באגים.',
            why: 'ארכיטקטורה = מבנה. באגים = לוגיקה. אפשר ליצור ארכיטקטורה מושלמת עם לוגיקה שגויה.'
        }
    ],
    'requirements': [
        {
            q: 'דרישה: "המערכת תהיה מהירה". האם זו דרישה פונקציונלית או לא-פונקציונלית? מדוע היא בעייתית?',
            a: 'לא-פונקציונלית. בעייתית כי "מהירה" אינה מדידה — חסר מספר (למשל: "זמן תגובה < 200ms").',
            why: 'דרישות לא-פונקציונליות חייבות להיות מדידות. MBSE דורשת הגדרות מדויקות.'
        },
        {
            q: 'הסבירו את ההבדל בין דרישה פונקציונלית ללא-פונקציונלית. תנו דוגמה לכל אחת.',
            a: 'פונקציונלית: "המערכת תאפשר הרשמה עם אימייל וסיסמה". לא-פונקציונלית: "המערכת תתמוך ב-10,000 משתמשים בו-זמנית".',
            why: 'פונקציונלית = מה המערכת עושה. לא-פונקציונלית = איך היא עושה (ביצועים, אמינות, אבטחה).'
        },
        {
            q: 'מהו MBSE ואיך הוא שונה מפיתוח מסורתי מבוסס מסמכים?',
            a: 'Model-Based Systems Engineering — שימוש במודלים (כמו OPM) במקום מסמכי Word. המודל הוא המקור האמיתי (Single Source of Truth).',
            why: 'מסמכים מתיישנים ויוצרים סתירות. מודל מתעדכן ושומר על עקביות.'
        },
        {
            q: '"המערכת תהיה אמינה ב-99.9%". האם זו דרישה טובה? הסבירו.',
            a: 'כן — מדידה (99.9%), אבל חסרה הגדרה: 99.9% uptime? accuracy? ובאיזו תקופה?',
            why: 'דרישה טובה = SMART: ספציפית, מדידה, בת-השגה, רלבנטית, מוגבלת בזמן.'
        },
        {
            q: 'צוות פיתוח קיבל 200 דרישות פונקציונליות. ביצע 180. הלקוח לא מרוצה. למה?',
            a: 'כנראה הדרישות הלא-פונקציונליות לא טופלו (ביצועים, אבטחה, UX). או שהדרישות הפונקציונליות לא שיקפו את הצורך האמיתי.',
            why: 'ביצוע 100% מהדרישות הכתובות לא מבטיח הצלחה אם הדרישות עצמן לא נכונות.'
        }
    ],
    'opm': [
        {
            q: 'ציירו דיאגרמת OPM למערכת קפה אוטומטית: אובייקט "כוס", תהליך "הכנת קפה", מצבים: ריקה → מלאה.',
            a: 'מלבן "כוס" עם מצבים (ריקה/מלאה בפינות עגולות). אליפסה "הכנת קפה". חץ נכנס מ"ריקה" → תהליך, חץ יוצא מתהליך → "מלאה".',
            why: 'אובייקט = מלבן, תהליך = אליפסה, מצב = פינות עגולות בתוך מלבן. Consumption/Result links מחברים.'
        },
        {
            q: 'מה ההבדל בין Aggregation (▲) ל-Exhibition (▲ בתוך △) ב-OPM?',
            a: 'Aggregation = שלם וחלקיו (▲ משולש מלא/שחור). Exhibition = מאפיין/תכונה (▲ מלא בתוך △ ריק).',
            why: '▲ לבד = Part-of (חלקים). ▲ בתוך △ = Attribute (תכונה/ערך). Classification = ● בתוך △.'
        },
        {
            q: 'מהו ההבדל בין In-Zoom ל-Unfold? מה קורה לאובייקט בתוך In-Zoom של תהליך?',
            a: 'In-Zoom = פירוט תתי-תהליכים (מלמעלה למטה = סדר ביצוע). Unfold = עץ היררכי. אובייקט בתוך In-Zoom של תהליך הוא זמני — נעלם לאחר סיום התהליך.',
            why: 'In-Zoom: מלמעלה למטה = רצף ביצוע. אובייקט זמני = נוצר באמצע התהליך ונהרס בסוף.'
        },
        {
            q: 'מה ההבדל בין קשר זיקה (Relation) לקשר זיקה חד-כיווני (Uni-directional)?',
            a: 'Relation = קו דו-כיווני עם טקסט על כל כיוון (Exam «contains» Question). Uni-directional = חץ חד-כיווני (4 People «live in» House).',
            why: 'קשר זיקה הוא הכללי ביותר — משתמשים בו כשאף קשר מבני אחר לא מתאים.'
        },
        {
            q: 'ב-OPM, מה ההבדל בין Result link ל-Effect link?',
            a: 'Result = התהליך יוצר אובייקט חדש (האובייקט לא היה קיים). Effect = התהליך משנה מצב של אובייקט קיים.',
            why: 'Result = יצירה (חץ מהתהליך). Effect = שינוי מצב (חץ דו-כיווני).'
        }
    ],
    'web-dev': [
        {
            q: 'טענה: "בהוספת קובץ JavaScript לפרויקט נוכל לבצע בשרת עיבוד לקלט המשתמש." נכון או לא?',
            a: 'לא נכון. JavaScript רגיל רץ בצד הלקוח (בדפדפן), לא בשרת.',
            why: 'צד לקוח (Client-Side) ≠ צד שרת (Server-Side). צריך Node.js לשרת.'
        },
        {
            q: 'האם האלמנט <table> חייב להופיע בתוך <body>?',
            a: 'כן. כל אלמנט ויזואלי חייב להיות בתוך <body>. <head> מיועד למטא-נתונים בלבד.',
            why: '<head> = כותרת, CSS, מטא. <body> = תוכן מוצג.'
        },
        {
            q: 'מה ההבדל בין CSS class ל-id? מתי משתמשים בכל אחד?',
            a: 'class (.) = ניתן להחיל על אלמנטים רבים. id (#) = ייחודי — אחד בלבד בכל הדף.',
            why: 'id לזיהוי ספציפי (עוגנים, JS). class לעיצוב קבוצת אלמנטים.'
        },
        {
            q: 'כתבתם: colorChange(). הפונקציה משנה צבע רקע ב-click. באיזו שכבה (HTML/CSS/JS) נמצאת הלוגיקה?',
            a: 'JavaScript. HTML מגדיר מבנה, CSS מגדיר עיצוב, JS מגדיר התנהגות/אינטראקציה.',
            why: 'הפרדה לשלוש שכבות: Structure (HTML), Presentation (CSS), Behavior (JS).'
        },
        {
            q: 'מהו ההבדל בין radio button ל-checkbox?',
            a: 'radio = בחירת אפשרות אחת בלבד מתוך קבוצה. checkbox = בחירת אפשרויות מרובות.',
            why: 'radio עם אותו name מאפשר רק בחירה אחת. checkbox כל אחד עצמאי.'
        }
    ],
    'pipes-filters': [
        {
            q: 'מערכת מעבדת טקסט בשלבים: (1) קריאת קובץ (2) הסרת רווחים (3) המרה לאותיות קטנות (4) שמירה. איזה דפוס?',
            a: 'Pipes & Filters. כל שלב = Filter, הנתונים זורמים ב-Pipe בין השלבים.',
            why: 'כל filter עצמאי, מקבל קלט ומייצר פלט. ניתן להחליף/להוסיף שלבים.'
        },
        {
            q: 'מהם 3 היתרונות של ארכיטקטורת Pipes & Filters?',
            a: 'שימוש חוזר בפילטרים, הרחבה קלה (הוספת פילטר), ביצוע מקבילי.',
            why: 'הפילטרים עצמאיים לכן ניתן להריץ אותם במקביל ולהחליפם.'
        },
        {
            q: 'מה החיסרון המרכזי של Pipes & Filters?',
            a: 'צוואר בקבוק (Bottleneck) — המסנן האיטי ביותר קובע את מהירות כל הצינור. גם: תלות בסדר, אין שיתוף מצב, והמרות פורמט.',
            why: 'כל pipe צריך להמיר את הנתונים לפורמט שהפילטר הבא מצפה לו. שינוי סדר = שינוי תוצאה.'
        },
        {
            q: 'מערכת Unix: cat file.txt | grep "error" | wc -l — זיהו את ה-Filters וה-Pipes.',
            a: 'Filters: cat, grep, wc. Pipes: הסמל | (pipe). כל פקודה = filter שמעבד קלט ומוציא פלט.',
            why: 'Unix shell הוא הדוגמה הקלאסית ל-Pipes & Filters. כל פקודה עצמאית.'
        },
        {
            q: 'האם ניתן להריץ את הפילטרים במקביל? הסבירו.',
            a: 'כן! כל פילטר יכול לרוץ בחוט נפרד. ברגע שפילטר 1 מייצר פלט, פילטר 2 מתחיל לעבד אותו.',
            why: 'Pipeline parallelism — כל פילטר מעבד חלק אחר של הנתונים בו-זמנית.'
        }
    ],
    'software-metrics': [
        {
            q: 'מהו עקרון KIS ואיך הוא מתקשר למדדי תוכנה?',
            a: 'KIS = Keep It Simple. עיקרון שמנחה לבהירות מירבית. קשור לבהירות (Clarity) וניידות (Portability).',
            why: 'קוד פשוט = קל לתחזוקה, קל להעביר, קל להרחיב.'
        },
        {
            q: 'מהו גמישות (Flexibility) ומהו הרחבה (Extensibility)? מה ההבדל?',
            a: 'Flexibility = היכולת לשנות קוד קיים בקלות. Extensibility = היכולת להוסיף פונקציונליות חדשה בקלות.',
            why: 'גמישות = שינוי. הרחבה = הוספה. שניהם נמדדים ביחידות שונות.'
        },
        {
            q: 'מפתח כתב קוד שעובד אך אף אחד בצוות לא מצליח להבין אותו. איזה מדד נפגע?',
            a: 'בהירות (Clarity). אם הקוד לא ברור — אי אפשר לתחזק, לשנות או להרחיב.',
            why: 'בהירות היא דרישת בסיס. ללא בהירות, כל שאר המדדים נפגעים.'
        },
        {
            q: 'מערכת רצה על Windows בלבד. הלקוח רוצה שתרוץ גם על Linux. איזה מדד רלבנטי?',
            a: 'ניידות (Portability) — היכולת להעביר תוכנה בין סביבות שונות.',
            why: 'אם הקוד תלוי ב-Windows API, הניידות נמוכה. צריך הפשטה (abstraction).'
        },
        {
            q: 'יעילות (Efficiency) — האם זה רק מהירות?',
            a: 'לא. יעילות = ניצול מיטבי של כל המשאבים: CPU, זיכרון, דיסק, רשת, זמן.',
            why: 'תוכנה מהירה שצורכת 16GB RAM אינה יעילה. יעילות מודדת את היחס תועלת/עלות.'
        }
    ],
    'n-tier': [
        {
            q: '5 צוותי פיתוח: צוות 1+2 = ממשק משתמש, צוות 3 = לוגיקה עסקית, צוות 4 = גישה לנתונים. כמה שכבות?',
            a: '3 שכבות: Presentation (צוותים 1+2), Business Logic (צוות 3), Data (צוות 4).',
            why: 'מספר הצוותים ≠ מספר השכבות. שני צוותים יכולים לעבוד על אותה שכבה.'
        },
        {
            q: 'האם מערכת 3-Tier היא בהכרח מערכת מבוזרת?',
            a: 'לא בהכרח. 3-Tier הוא דפוס לוגי. השכבות יכולות לרוץ על אותו שרת פיזי.',
            why: 'Tier = שכבה לוגית. Server = מכונה פיזית. N-Tier לא מחייב N שרתים.'
        },
        {
            q: 'באיזו שכבה מתבצע עיבוד הנתונים לפני הכנסה למסד?',
            a: 'שכבת Business Logic (השכבה האמצעית). היא מבצעת וואלידציה, חישובים ועיבוד.',
            why: 'שכבת Presentation רק מציגה. שכבת Data רק שומרת. הלוגיקה — באמצע.'
        },
        {
            q: 'מהו היתרון העיקרי של הפרדה לשכבות?',
            a: 'אפשר להחליף שכבה אחת בלי לגעת באחרות. למשל, להחליף UI ללא שינוי בלוגיקה.',
            why: 'Separation of Concerns — כל שכבה אחראית לדבר אחד. שינוי מבודד.'
        },
        {
            q: 'אתר אינטרנט עם דפדפן (React), שרת (Node.js), ומסד נתונים (MongoDB). מהן 3 השכבות? ומה תפקיד localStorage?',
            a: 'Presentation = React. Business Logic = Node.js. Data = MongoDB. localStorage = אחסון בצד הלקוח (דפדפן), לא חלק משכבת ה-Data.',
            why: 'localStorage הוא Client-Side Storage. שומר רק מחרוזות — חובה JSON.stringify() לשמור אובייקט, JSON.parse() לקרוא.'
        }
    ],
    'distributed-saas-soa': [
        {
            q: 'חברת SaaS: MRR=3₪, סטודנט נשאר 4 שנים, CAC=7₪, 5 סטודנטים. האם כדאי?',
            a: 'כן! הכנסה: 3×12×4×5=720₪. הוצאה: 7×5=35₪. רווח: 720-35=685₪.',
            why: 'LTV = MRR × 12 × שנים = 144₪ לסטודנט. CAC = 7₪. LTV >> CAC → כדאי מאוד.'
        },
        {
            q: 'מהם 5 מאפיינים של מערכת מבוזרת?',
            a: 'שיתוף משאבים, שקיפות, בו-זמניות, פתיחות, סיבולת לתקלות.',
            why: 'אלו 5 המאפיינים לפי ההגדרה האקדמית. שאלה נפוצה במבחן.'
        },
        {
            q: 'רשת שבה סטודנטים מחוברים ישירות ללא שרת מרכזי — איזה דפוס זה?',
            a: 'Peer2Peer (P2P).',
            why: 'P2P = כל צומת הוא גם שרת וגם לקוח. אין שרת מרכזי.'
        },
        {
            q: 'מה ההבדל בין SaaS ל-SOA? מה יתרונות SOA?',
            a: 'SaaS = מודל עסקי (תוכנה כשירות). SOA = ארכיטקטורה (שירותים עצמאיים). יתרונות SOA: שימוש חוזר, עצמאות, גמישות טכנולוגית, Loose Coupling.',
            why: 'SaaS = How you sell. SOA = How you build. אפשר לבנות SaaS בארכיטקטורת SOA.'
        },
        {
            q: 'מה ההבדל בין Web 2.0, Web 3.0 ו-Web 4.0?',
            a: 'Web 2.0 = אינטראקטיבי, משתמשים יוצרים תוכן. Web 3.0 = מבוזר, בלוקצ\'יין. Web 4.0 = סימביוטי, AI + IoT פועלים עבור המשתמש.',
            why: 'Web 1.0 = קריאה. Web 2.0 = קריאה+כתיבה. Web 3.0 = קריאה+כתיבה+בעלות. Web 4.0 = AI אוטונומי.'
        }
    ],
    'oop': [
        {
            q: 'בפייתון: kirk = Student("Kirk", 23); spock = Student("Kirk", 23); האם kirk == spock?',
            a: 'False. כל קריאה ל-constructor יוצרת אובייקט חדש בזיכרון.',
            why: '== בפייתון משווה זהות (identity) כברירת מחדל, לא ערכים. שני אובייקטים שונים = False.'
        },
        {
            q: 'מה רץ קודם: __init__ או __new__?',
            a: '__new__ רץ ראשון (יוצר את האובייקט). __init__ רץ שני (מאתחל ערכים).',
            why: '__new__(cls) מחזיר אובייקט חדש. רק אם הוא מחזיר — Python מריץ __init__(self).'
        },
        {
            q: 'מה ההבדל בין Inheritance ל-Composition? מתי עדיף מה?',
            a: 'Inheritance = "is-a" (Student IS-A Person). Composition = "has-a" (Car HAS-A Engine). עדיף Composition כשאין קשר לוגי של "סוג של".',
            why: 'Composition גמיש יותר — מאפשר להחליף רכיבים. Inheritance יוצר צימוד חזק.'
        },
        {
            q: 'מהו Override? תנו דוגמה.',
            a: 'שכתוב מתודה ממחלקת אב במחלקת בן. דוגמה: Person.describe() מחזיר שם, Student.describe() מחזיר שם+מחלקה.',
            why: 'Override מאפשר לשנות התנהגות ירושה. השם זהה, המימוש שונה.'
        },
        {
            q: 'מה ההבדל בין Class variable ל-Instance variable?',
            a: 'Class variable (country = "Israel") = משותף לכל האובייקטים. Instance variable (self.name) = ייחודי לכל אובייקט.',
            why: 'Class var מוגדר מחוץ ל-__init__. Instance var מוגדר עם self. שינוי Class var משפיע על כולם.'
        }
    ],
    'design-patterns': [
        {
            q: 'מימשתם Singleton לחיבור DB. כתבתם: a = DB(); b = DB(); האם a is b? מדוע?',
            a: 'True. Singleton מבטיח אובייקט יחיד. __new__ בודק אם כבר קיים ומחזיר אותו.',
            why: 'cls.connection שומר את האובייקט. אם כבר קיים — __new__ מחזיר אותו במקום ליצור חדש.'
        },
        {
            q: 'ספריית Twitter שינתה את שם הפונקציה מ-send() ל-sendTweet(). איזה Pattern תשתמשו?',
            a: 'Adapter (Wrapper). יוצרים מחלקה עם send() שקוראת ל-sendTweet() בפנים.',
            why: 'Adapter מתרגם ממשק לא תואם (Incompatible Interface) לממשק שהמערכת מצפה לו.'
        },
        {
            q: 'מי הם ה-GOF?',
            a: 'Gang of Four — 4 מהנדסי תוכנה שכתבו את הספר Design Patterns (1994).',
            why: 'שאלת טריוויה. כריסטופר אלכסנדר (ארכיטקט בניין) המציא את הרעיון, GOF יישמו בתוכנה.'
        },
        {
            q: 'מהם 3 הקטגוריות של Design Patterns? תנו דוגמה לכל אחת.',
            a: 'Creational (יצירה): Singleton. Structural (מבנה): Adapter. Behavioral (התנהגות): Observer.',
            why: '23 תבניות מחולקות ל-3 קטגוריות. במבחן שואלים לסווג תבנית לקטגוריה.'
        },
        {
            q: 'Singleton הוא לא רק "אובייקט יחיד". מה עוד?',
            a: 'הוא גם מספק Global Access Point — נקודת גישה גלובלית לאובייקט היחיד.',
            why: 'שני חלקים בהגדרה: (1) מבטיח מופע יחיד. (2) מספק גישה גלובלית. רבים שוכחים את (2).'
        }
    ],
    'concurrency': [
        {
            q: '3 תהליכים, כל אחד צריך 2 מדפסות (לא בו-זמנית). לא ישחרר לפני שתפס שנייה. מה המינימום למניעת Deadlock?',
            a: '4 מדפסות.',
            why: 'נוסחה: n×(k-1)+1 = 3×1+1 = 4. במקרה הגרוע כל אחד תופס 1 (3 תפוסות). עם 4 — אחד מצליח לתפוס 2, מסיים ומשחרר.'
        },
        {
            q: '5 פילוסופים, 5 מזלגות, כל אחד צריך 2. כולם הרימו מזלג ימני. מה קורה?',
            a: 'Deadlock! כל אחד מחזיק 1 ומחכה ל-2. אף אחד לא ישחרר.',
            why: 'קיפאון מעגלי: 1→2→3→4→5→1. פתרון: שבירת סימטריה — פילוסוף אחד מרים שמאלי קודם.'
        },
        {
            q: 'מהם 5 הפתרונות לבעיית החלב ומהי בעיית כל אחד?',
            a: '(1) נעילת מקרר — חוסם גישה. (2) פתק — Race Condition. (3) 2 פתקים — Deadlock. (4) שבירת סימטריה — Busy Wait. (5) turn — Starvation. פתרון: TAS.',
            why: 'כל פתרון מתקן בעיה קודמת אך יוצר חדשה. רק פקודת חומרה אטומית (TAS) פותרת הכל.'
        },
        {
            q: 'מדוע Context Switch בין Threads זול יותר מאשר בין Processes?',
            a: 'Threads חולקים את אותו מרחב זיכרון. אין צורך לטעון טבלאות זיכרון חדשות.',
            why: 'Process Switch = שמירת כל הזיכרון + טעינת חדש. Thread Switch = רק שמירת registers.'
        },
        {
            q: 'x = 0; שני חוטים מריצים x += 1 מיליון פעמים כל אחד. התוצאה?',
            a: 'לא תמיד 2,000,000! x += 1 זה 3 פקודות (load, add, store) − אינה אטומית → Race Condition.',
            why: 'בין load ל-store חוט אחר יכול לשנות את x. הפתרון: Lock או TAS.'
        }
    ],
    'fidelity': [
        {
            q: 'מערכת הזמנת אוכל: מחיר סופי = מחיר×כמות + עמלה. עמלה = 5₪. 3 הזמנות. מה הבעיה שהתגלתה?',
            a: 'האם העמלה 5₪ סה"כ או 5₪ לכל הזמנה? המודל המילולי לא הבהיר. רק ההרצה (שלב 4 ב-MFH) חשפה.',
            why: 'MFH: רעיון → מודל → חישוב → הרצה. כל שלב חושף שגיאות חדשות.'
        },
        {
            q: 'ב-Silver Box: דרישה "המערכת תאפשר להזמין מנות". צוות א\' הבין X, צוות ב\' הבין Y. 25% מהבדיקות נכשלו. מה הבעיה?',
            a: 'Ambiguity (דו-משמעות) בדרישות. צוות א\' = אותה מנה כמה פעמים. צוות ב\' = מנות שונות.',
            why: 'Silver Box חושף באגים בהבנה האנושית, לא בקוד. פערים בפרשנות = דרישות לא ברורות.'
        },
        {
            q: 'מה היתרון של Low-Fi על פני Hi-Fi בשלב מוקדם של פיתוח?',
            a: 'אנשים מרגישים בנוח לתת ביקורת בונה ("זה רק סקיצה"). ב-Hi-Fi מתמקדים בפרטים ולא במהות.',
            why: 'Low-Fi = מהיר, זול, גמיש. Hi-Fi = יקר, איטי, קשה לשנות. מתחילים מהנמוך.'
        },
        {
            q: 'מה ההבדל בין White Box ל-Black Box testing?',
            a: 'White Box = הבודק רואה את הקוד (Unit Tests). Black Box = הבודק לא רואה קוד (בדיקות קלט/פלט).',
            why: 'מפתח עושה White Box. משתמש עושה Black Box. Gray Box = ידע חלקי (סכמת DB).'
        },
        {
            q: 'מהם 4 שלבי MFH (Model Fidelity Hierarchy)?',
            a: '(1) רעיון מנטלי. (2) מודל קונספטואלי (נייר). (3) מודל מחשובי (סימולציה). (4) הרצה ובדיקה מול המציאות.',
            why: 'כל שלב חושף שגיאות. דילוג = שגיאות מתגלות בשלב הקידוד — שם תיקון עולה פי 100.'
        }
    ]
};

// Flatten key terms
const getAllKeyTerms = () => {
    return topics.flatMap(topic =>
        (topic.keyTerms || []).map(term => ({
            id: `term-${topic.id}-${term.term}`,
            type: 'term',
            topic: topic.id,
            topicName: topic.title,
            question: `מה זה: ${term.term}?`,
            answer: term.definition,
            why: `מוגדר בנושא: ${topic.title}`
        }))
    );
};

// Flatten code examples
const getAllCodeExamples = () => {
    return topics.flatMap(topic =>
        (topic.codeExamples || []).map((ex, i) => ({
            id: `code-${topic.id}-${i}`,
            type: 'code',
            topic: topic.id,
            topicName: topic.title,
            question: 'מהו דפוס העיצוב או העקרון המוצג בקוד?',
            code: ex.code,
            language: ex.language,
            answer: ex.title,
            why: `דוגמה מתוך נושא: ${topic.title}`
        }))
    );
};

// Flatten diagram images
const getAllImages = () => {
    return topics.flatMap(topic =>
        (topic.keyConcepts || []).flatMap((concept, cIdx) =>
            (concept.images || [concept.image]).filter(Boolean).map((img, imgIdx) => ({
                id: `img-${topic.id}-${cIdx}-${imgIdx}`,
                type: 'image',
                topic: topic.id,
                topicName: topic.title,
                question: 'זהו את הדיאגרמה והסבירו אותה.',
                image: img,
                answer: concept.title, // Title is the main answer
                detailedAnswer: concept.content, // Content is the detail
                why: `מתוך נושא: ${topic.title}`
            }))
        )
    );
};

// Flatten text questions
const getAllTextQuestions = () => {
    return Object.entries(textQuestions).flatMap(([topicId, exercises]) => {
        const topic = topics.find(t => t.id === topicId);
        return exercises.map((ex, i) => ({
            id: `text-${topicId}-${i}`,
            type: 'text',
            topic: topicId,
            topicName: topic ? topic.title : topicId,
            question: ex.q,
            answer: ex.a,
            why: ex.why
        }));
    });
};



// Composite Questions (Mixed Content)
const getCompositeQuestions = () => {
    return [
        {
            id: 'comp-opm-1',
            type: 'composite',
            topic: 'opm',
            topicName: 'OPM',
            question: 'נתחו את הדיאגרמה הבאה וקבעו מה מתאר את הקשרים המוצגים.',
            content: [
                { type: 'text', text: 'לפניכם דיאגרמת OPM המתארת מערכת בקרת כניסה.' },
                { type: 'image', src: '/assets/opm-structural-1.png', alt: 'OPM Structural Links' },
                { type: 'text', text: 'התייחסו לקשר בין "Person" ל-"Employee" ול-"Student".' },
                { type: 'code', language: 'opl', code: 'Person exhibits Name.\nEmployee is a Person.\nStudent is a Person.' }
            ],
            answer: 'הורשה (Generalization).',
            detailedAnswer: 'המשולש הריק (△) מייצג הכללה/הורשה. Person הוא האב, Employee ו-Student הם הבנים.',
            why: 'ב-OPM, משולש ריק מסמן שישות אחת היא מקרה פרטי של ישות אחרת.'
        },
        {
            id: 'comp-n-tier-1',
            type: 'composite',
            topic: 'n-tier',
            topicName: 'ארכיטקטורה רב-שכבתית',
            question: 'עיינו בקוד ובתרשים. איזו שכבה חסרה במימוש?',
            content: [
                { type: 'text', text: 'התרשים מתאר ארכיטקטורת 3-Tier קלאסית.' },
                { type: 'image', src: '/assets/n-tier-concept-1.png', alt: 'N-Tier Architecture' },
                { type: 'text', text: 'להלן קוד ה-Server:' },
                { type: 'code', language: 'javascript', code: 'app.get("/users", async (req, res) => {\n  // Direct DB access in Controller?\n  const users = await db.collection("users").find().toArray();\n  res.json(users);\n});' }
            ],
            answer: 'שכבת הלוגיקה העסקית (Business Logic).',
            detailedAnswer: 'הקוד ניגש ישירות ל-DB מתוך ה-API (Controller), ומדלג על שכבת הלוגיקה. זה מפר את עקרונות ה-N-Tier.',
            why: 'בארכיטקטורה תקינה, ה-Controller צריך לקרוא ל-Service (Logic) ורק הוא ניגש ל-DAL (Data).'
        },
        {
            id: 'comp-singleton-1',
            type: 'composite',
            topic: 'design-patterns',
            topicName: 'Design Patterns',
            question: 'האם המימוש הבא של Singleton הוא Thread-Safe?',
            content: [
                { type: 'code', language: 'python', code: 'class Singleton:\n    _instance = None\n    def __new__(cls):\n        if cls._instance is None:\n             # Context Switch might happen here\n            cls._instance = super().__new__(cls)\n        return cls._instance' },
                { type: 'text', text: 'הניחו שיש סביבת Multi-threaded עם Preemptive Scheduling.' }
            ],
            answer: 'לא. יש Race Condition.',
            detailedAnswer: 'אם שני Threads נכנסים ל-if בו-זמנית (לפני היצירה), שניהם יצרו אובייקט. נדרש מנעול (Lock).',
            why: 'בדיקה ושינוי (Check-Then-Act) אינה אטומית ללא נעילה.'
        },
        {
            id: 'comp-api-1',
            type: 'composite',
            topic: 'distributed-saas-soa',
            topicName: 'API & Microservices',
            question: 'כיצד שימוש ב-API מקדם את עקרון ה-Loose Coupling (צימוד רפוי)?',
            content: [
                { type: 'text', text: 'API (Application Programming Interface) הוא החוזה בין רכיבי תוכנה.' },
                { type: 'code', language: 'javascript', code: '// Client Code\nfetch("https://api.service.com/users")\n  .then(data => show(data));\n\n// The Client doesn\'t know if the Server is Java, Python or Node.js.' },
                { type: 'text', text: 'בתרשים למטה (מערכת SOA), כל שירות חושף API.' },
                { type: 'image', src: '/assets/distributed-saas-soa-concept-3.png', alt: 'SOA Architecture' }
            ],
            answer: 'ה-API מסתיר את המימוש הפנימי.',
            detailedAnswer: 'הצרכן (Client) מכיר רק את הממשק (החוזה/URL). הוא לא תלוי בטכנולוגיה, בבסיס הנתונים או בקוד הפנימי של הספק (Server). ניתן להחליף את השרת לחלוטין כל עוד ה-API נשמר.',
            why: 'ביזור ואבסטרקציה. זה מאפשר לפתח כל שירות בנפרד (כמו ב-Microservices).'
        }
    ];
};



export const repository = [
    ...getAllTextQuestions(),
    ...getAllCodeExamples(),
    ...getAllImages(),
    ...getAllTextQuestions(),
    ...getAllCodeExamples(),
    ...getAllImages(),
    ...getAllKeyTerms(),
    ...getCompositeQuestions()
];

export { textQuestions as topicExercises };
export default repository;
