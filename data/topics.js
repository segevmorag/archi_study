// נושאי הקורס — ארכיטקטורת מערכות תוכנה
const topics = [
  {
    id: 'intro',
    title: 'מבוא לארכיטקטורת תוכנה',
    icon: '',
    lecture: 1,
    color: '#6366f1',
    keyConcepts: [
      {
        title: 'מהי ארכיטקטורת תוכנה?',
        content: 'ארכיטקטורת תוכנה מתארת את המבנה או המבנים של מערכת, הכוללים רכיבי תוכנה, התכונות החיצוניות של רכיבים אלו והיחסים ביניהם. היא עוסקת בהחלטות העיצוב הגדולות של המערכת.',
        detailedContent: 'ארכיטקטורת תוכנה היא התוכנית הגדולה — ה-Blueprint — של המערכת. היא מגדירה את הרכיבים (Components), הממשקים (Interfaces) והקשרים (Relationships) ביניהם. ההחלטות הארכיטקטוניות הן "הגדולות" — בחירת טכנולוגיות, חלוקה לשכבות, פרוטוקולי תקשורת — שקשה לשנות בהמשך. ארכיטקטורה טובה מפרידה בין concerns, מצמצמת coupling ומגדילה cohesion.',
        image: '/assets/intro-concept-1.png',
        examTip: 'במבחן: "ארכיטקטורה" ≠ "קוד". ארכיטקטורה עוסקת בהחלטות ברמה הגבוהה (מבנה, שכבות, רכיבים), לא בפרטי מימוש. אם שואלים "מה תפקיד הארכיטקט" — התשובה היא החלטות עיצוב גדולות, לא כתיבת קוד.'
      },
      {
        title: 'מערכת עם ארכיטקטורה טובה vs רעה',
        content: 'תכן טוב: ניתן לשנות רכיב אחד ללא בעיה, יש מענה נפרד לכל חלק לוגי, מבנה פשוט, עלות נמוכה, קשר לוגי בין חלקים, ניתן להרחבה.\nתכן רע: שינוי רכיב גורר שינויים נוספים, שכפול לוגיקה, מבנה מסובך, עלות גבוהה, קשה להבנה ולהרחבה.',
        detailedContent: 'תכן טוב מאופיין ב: (1) Low Coupling — תלות מינימלית בין רכיבים, שינוי ברכיב אחד לא שובר אחרים. (2) High Cohesion — כל רכיב עושה דבר אחד טוב. (3) KISS — Keep It Simple, Stupid. (4) DRY — ללא שכפול לוגיקה. (5) Open/Closed — פתוח להרחבה, סגור לשינוי.\nתכן רע: Spaghetti Code — הכל קשור בהכל. שינוי בפונקציה אחת שובר 5 פונקציות אחרות. כפילויות בקוד גורמות לבאגים כי מתקנים במקום אחד ושוכחים באחר.',
        image: '/assets/intro-concept-2.png',
        examTip: 'במבחן: שאלות "נכון/לא נכון" על ארכיטקטורה טובה — המפתח הוא Coupling vs Cohesion. Coupling נמוך = טוב (רכיבים עצמאיים). Cohesion גבוה = טוב (רכיב ממוקד). אל תתבלבלו ביניהם!'
      },
      {
        title: 'למה ארכיטקטורה חשובה?',
        content: 'ארכיטקטורה טובה מאפשרת: גמישות לשינויים, הרחבה קלה, יעילות במשאבים, בהירות ולמידה קלה, ניידות בין סביבות שונות. KIS – Keep It Simple.',
        detailedContent: 'ארכיטקטורה חשובה כי 80% מעלות התוכנה היא תחזוקה, לא פיתוח ראשוני. ארכיטקטורה טובה מפחיתה את עלות התחזוקה דרמטית. יתרונות עיקריים:\n• גמישות — קל לשנות דרישות ללא שבירת המערכת\n• הרחבה (Scalability) — הוספת פיצ\'רים בלי לכתוב הכל מחדש\n• יעילות — שימוש מיטבי בזיכרון, מעבד ורשת\n• בהירות — מפתח חדש מבין את המערכת מהר\n• ניידות (Portability) — המערכת עובדת על פלטפורמות שונות\n• KIS = Keep It Simple — עקרון על: תמיד העדיפו את הפתרון הפשוט ביותר.',
        image: '/assets/intro-concept-3.png',
        examTip: 'במבחן: כש-KIS מופיע, זיכרו — זה Keep It Simple (לא KISS). אם שואלים "למה ארכיטקטורה חשובה" — התשובה הראשית היא הפחתת עלות תחזוקה, לא מהירות פיתוח ראשוני.'
      }
    ],
    codeExamples: [],
    keyTerms: [
      { term: 'ארכיטקטורה', definition: 'מבנה המערכת, רכיביה והקשרים ביניהם' },
      { term: 'קישוריות (Coupling)', definition: 'מידת התלות בין רכיבים שונים במערכת' },
      { term: 'לכידות (Cohesion)', definition: 'מידת הקשר הפנימי בין חלקי הרכיב' }
    ]
  },
  {
    id: 'code-conventions',
    title: 'מוסכמות קוד',
    icon: '',
    lecture: 2,
    color: '#8b5cf6',
    keyConcepts: [
      {
        title: 'נכונות קוד',
        content: 'הקוד צריך לעבוד כמצופה, לטפל בשגיאות בצורה נאותה, ולעמוד בכל הדרישות הפונקציונליות והלא פונקציונליות.',
        detailedContent: 'נכונות קוד כוללת את כל החוקים והתקמונים שמוסכמים לכתיבת קוד איכותי:\n• נכונות — הקוד עושה מה שהוא אמור לעשות\n• נראות — קוד קריא עם שמות משמעותיים והערות\n• יעילות — שימוש אופטימלי במשאבים\n• תחזוקה — קל לתקן באגים ולהוסיף פיצ\'רים',
        image: '/assets/code-conventions-concept-1.png',
        examTip: 'במבחן: נכונות קוד ≠ נראות קוד בלבד. נכונות = הקוד עובד נכון. נראות = הקוד קריא ומובן. אם הקוד עובד אבל לא קריא — יש נכונות אבל אין נראות.'
      },
      {
        title: 'נראות קוד',
        content: 'שמות משמעותיים למשתנים ופונקציות, הזחה עקבית, הערות מתאימות, קוד קריא ומובן.',
        detailedContent: 'נראות קוד כוללת:\n• שמות משמעותיים — calculate_total_price ולא f או x\n• הזחה עקבית — 4 רווחים או Tab אחד (העיקר — לא לערבב!)\n• הערות — להסביר למה, לא מה (לא לכתוב מה השורה עושה — זה ברור מהקוד)\n• מבנה — פונקציות קצרות שעושות דבר אחד',
        image: '/assets/code-conventions-concept-2.png',
        examTip: 'במבחן: שאלות על נראות קוד — לא מספיק לכתוב קוד נכון. קוד נראה = קוד שמפתח אחר מבין אותו תוך ימים, לא רק הכותב.'
      },
      {
        title: 'מבנה קוד',
        content: 'חלוקה לוגית לפונקציות ומחלקות, הימנעות מכפילויות (DRY), שמירה על עקרון האחריות הבודדת.',
        detailedContent: 'מבנה קוד טוב:\n• DRY (Don\'t Repeat Yourself) — לוגיקה משוכפלת = באגים. שינוי במקום אחד ושכחת באחר\n• SRP (Single Responsibility) — כל פונקציה/מחלקה אחראית על דבר אחד\n• Refactoring — שיפור מבנה הקוד בלי שינוי התנהגות\n• Code Review — סקירת קוד ע"י מפתח אחר לגילוי באגים ושיפור האיכות',
        image: '/assets/code-conventions-concept-3.png',
        examTip: 'במבחן: DRY ≠ "לכתוב פחות קוד". DRY = לא לשכפל לוגיקה. Refactoring = שיפור מבנה בלי שינוי התנהגות — זה ההגדרה המדויקת!'
      }
    ],
    codeExamples: [
      {
        title: 'שמות משמעותיים',
        language: 'python',
        code: `# ❌ שמות לא טובים
x = 5
def f(a, b):
    return a + b

# ✅ שמות טובים
student_age = 5
def calculate_total_price(base_price, tax):
    return base_price + tax`
      }
    ],
    keyTerms: [
      { term: 'DRY', definition: "Don't Repeat Yourself — הימנעות משכפול קוד" },
      { term: 'Code Review', definition: 'סקירת קוד על ידי מפתח אחר' },
      { term: 'Refactoring', definition: 'שיפור מבנה הקוד ללא שינוי ההתנהגות' }
    ]
  },
  {
    id: 'requirements',
    title: 'דרישות מערכת',
    icon: '',
    lecture: 3,
    color: '#a855f7',
    keyConcepts: [
      {
        title: 'דרישות פונקציונליות',
        content: 'מתארות מה המערכת אמורה לעשות. דוגמאות: המערכת תאפשר שליחת מיילים, ביצוע Login, הוספת/מחיקת משתמש, הזנת מחיר למוצרים, ניהול הרשאות.',
        detailedContent: 'דרישה פונקציונלית עונה על השאלה "מה המערכת עושה?". היא מתארת את הפעולות שהמערכת מבצעת.\nדוגמאות: "המערכת תאפשר למשתמש לשלוח מייל", "המערכת תאפשר להוסיף משתמש", "המערכת תאפשר להזין מחיר למוצר".\nנוסחה מפתח: שימו לב למילה "תאפשר" — היא מציינת דרישה פונקציונלית.',
        image: '/assets/requirements-concept-1.png',
        examTip: 'מלכודת נפוצה במבחן: "המערכת תאפשר הוספת משתמש" = פונקציונלית (מה). "הוספת משתמש תתבצע ע"י מנהל בלבד" = לא פונקציונלית (איך). המילה "תאפשר" = מה. המילה "רק ע"י" = איך.'
      },
      {
        title: 'דרישות לא פונקציונליות',
        content: 'מתארות איך המערכת תעשה את מה שהיא אמורה לעשות — המגבלות והאילוצים. דוגמאות: מיילים ישלחו רק לאחר Login, Login עם שם משתמש וסיסמא, הוספת משתמש על ידי מנהל בלבד.',
        detailedContent: 'דרישה לא פונקציונלית עונה על "איך" — האילוצים והמגבלות. היא לא מוסיפה פונקציונליות חדשה, אלא מצמצמת דרישה פונקציונלית קיימת.\nדוגמאות:\n• "מיילים ישלחו רק לאחר Login" — מגבלת את שליחת המיילים\n• "Login עם שם משתמש וסיסמא" — איך ה-Login עובד\n• "הוספת משתמש רק ע"י מנהל" — הרשאה/אילוץ',
        image: '/assets/requirements-concept-2.png',
        examTip: 'טריק מבחן: אם כתוב "תאפשר" — זו פונקציונלית. אם כתוב "רק ע"י" או "עם" או "לאחר" — זו לא פונקציונלית. זה הכלל הכי חשוב!'
      },
      {
        title: 'MBSE',
        content: 'Model Based Systems Engineering — העיקרון שהמודל הקונספטואלי של המערכת מבוטא מוקדם ככל האפשר, רצוי כבר משלב הדרישות. שימוש פורמלי במודלים לתמיכה בדרישות, תכנון, ניתוח ואימות.',
        detailedContent: 'MBSE הוא גישה להנדסת מערכות שבה המודל הוא המרכזי — לא מסמכים, אלא מודלים פורמליים. הרעיון — לבנות את המודל מוקדם ככל האפשר — כבר משלב הדרישות ולא רק אחרי הקידוד.\nOPM הוא דוגמה למתודולוגיה שמממשת MBSE.',
        image: '/assets/requirements-concept-3.png',
        examTip: 'במבחן: MBSE ≠ תכנות. MBSE = הנדסת מערכות מבוססת מודלים, משלב הדרישות. אם שואלים "מה הקשר בין MBSE ל-OPM" — OPM היא מתודולוגיה שמיישמת MBSE.'
      }
    ],
    codeExamples: [],
    keyTerms: [
      { term: 'דרישה פונקציונלית', definition: 'מה המערכת עושה — הפונקציות שלה' },
      { term: 'דרישה לא פונקציונלית', definition: 'איך המערכת עושה — המגבלות והאילוצים' },
      { term: 'MBSE', definition: 'הנדסת מערכות מבוססת מודלים' }
    ]
  },
  {
    id: 'web-dev',
    title: 'פיתוח Web — HTML, CSS, JavaScript',
    icon: '',
    lecture: '4-6',
    color: '#ec4899',
    keyConcepts: [
      {
        title: 'יישום רשת (Web Application)',
        content: 'יישום רשת הוא תוכנה שרצה על שרת ומשתמשים ניגשים אליה דרך דפדפן. מורכב מצד לקוח (Client — HTML/CSS/JS בדפדפן) וצד שרת (Server — עיבוד ומסד נתונים).',
        detailedContent: 'יישום רשת (Web Application) שונה מאתר רגיל — הוא מספק אינטראקטיביות ופונקציונליות (כמו Gmail, Google Docs).\nמבנה קלאסי: Client-Server.\n• Client (לקוח/דפדפן): HTML (מבנה) + CSS (עיצוב) + JS (לוגיקה)\n• Server (שרת): עיבוד נתונים, לוגיקה עסקית, מסד נתונים\n\nיתרונות יישום רשת:\n• גישה מכל מקום — רק צריך דפדפן\n• עדכון מרכזי — שינוי בשרת משפיע על כולם\n• ללא התקנה — חוסך משאבי לקוח\n• Cross-Platform — עובד בכל מערכת הפעלה\n\nחסרונות:\n• תלות באינטרנט — ללא חיבור, אין גישה\n• ביצועים מוגבלים — איטי יותר מתוכנה מקומית (Native)\n• אבטחה — חשוף להתקפות רשת (XSS, SQL Injection)\n• חוויית משתמש מוגבלת — תלוי ביכולויות הדפדפן',
        image: '/assets/web-dev-concept-1.png',
        examTip: 'במבחן: יישום רשת ≠ אתר סטטי. אתר סטטי = עמודי HTML קבועים. יישום רשת = תוכנה אינטראקטיבית שרצה בדפדפן. Client-Side = HTML+CSS+JS. Server-Side = עיבוד נתונים.'
      },
      {
        title: 'HTML — מבנה הדף, תגיות וקלטים',
        content: 'HTML (HyperText Markup Language) אחראית על מבנה הדף. תגיות מרכזיות: <h1>-<h6> כותרות, <p> פסקה, <a> קישור, <img> תמונה, <table> טבלה, <form> טופס, <input> קלט, <div> חלוקה, <span> טקסט inline.',
        detailedContent: 'HTML מגדירה את השלד של הדף באמצעות תגיות (Tags):\n\nתגיות מבנה:\n• <html> — עוטפת את כל הדף\n• <head> — מטא-נתונים (title, CSS, meta)\n• <body> — כל התוכן המוצג\n• <h1>-<h6> — כותרות (h1 הגדולה ביותר)\n• <p> — פסקה\n• <br> — שבירת שורה (ללא תגית סגירה!)\n• <div> — קונטיינר (block) לחלוקת אזורים\n• <span> — קונטיינר (inline) בתוך טקסט\n\nתגיות תוכן:\n• <a href="url"> — קישור (anchor)\n• <img src="path" alt="תיאור"> — תמונה (ללא סגירה!)\n• <table>, <tr>, <td>, <th> — טבלה, שורה, תא, כותרת תא\n• <ul>/<ol>, <li> — רשימה לא ממוספרת/ממוספרת\n\nתגיות טפסים וקלטים:\n• <form action="url" method="GET/POST"> — טופס\n• <input type="text"> — שדה טקסט\n• <input type="password"> — שדה סיסמה (מוסתר)\n• <input type="radio" name="group"> — בחירה אחת מקבוצה\n• <input type="checkbox"> — סימון (מרובה)\n• <input type="submit"> — כפתור שליחה\n• <select> + <option> — רשימה נפתחת\n• <textarea> — שטח טקסט גדול (multi-line)\n\nשגיאות נפוצות: תגיות שלא נסגרו, קינון אסור (<tr> מחוץ ל-<table>), חסר <title> ב-<head>.',
        image: '/assets/web-dev-concept-1.png',
        examTip: 'במבחן: (1) radio עם אותו name = בחירה אחת. (2) <img> ו-<br> — אין תגית סגירה. (3) <table> חייב להכיל <tr> ו-<td>. (4) <head> רק למטא-נתונים, לא לתוכן ויזואלי!'
      },
      {
        title: 'CSS — עיצוב ועיצוב מתקדם',
        content: 'CSS (Cascading Style Sheets) אחראית על העיצוב. 3 דרכי הוספה: Inline (style=""), Internal (<style>), External (קובץ .css). בוררים: לפי תגית (h1), מחלקה (.class), מזהה (#id). מודל קופסה: margin, border, padding, content.',
        detailedContent: 'CSS מפרידה תוכן (HTML) מעיצוב. 3 דרכים להוסיף CSS:\n1. Inline — style="color: red;" על תגית ספציפית (עדיפות הגבוהה ביותר)\n2. Internal — <style> בתוך <head> (ברמת הדף)\n3. External — <link rel="stylesheet" href="style.css"> (הכי מומלץ — הפרדה מלאה)\n\nבוררים (Selectors):\n• h1 { } — לפי שם תגית (כל ה-h1 בדף)\n• .className { } — לפי מחלקה (class) — רב-שימושי\n• #idName { } — לפי מזהה (id) — ייחודי בדף!\n• * { } — כל האלמנטים (Universal Selector)\n\nתכונות נפוצות במבחן:\n• color — צבע טקסט\n• background-color — צבע רקע\n• font-size — גודל גופן (px, em, %)\n• text-align — יישור טקסט (center, right, left)\n• margin — מרווח חיצוני (מחוץ לגבול)\n• padding — מרווח פנימי (בתוך הגבול)\n• border — גבול (border: 1px solid black)\n• width/height — רוחב/גובה\n• display — אופן תצוגה (block, inline, none)\n\nמודל קופסה (Box Model):\nכל אלמנט = Content + Padding + Border + Margin (מבפנים החוצה)',
        image: '/assets/web-dev-concept-2.png',
        examTip: 'במבחן: ההבדל בין margin ל-padding: margin = מרווח מבחוץ (בין אלמנטים). padding = ריפוד מבפנים (בין הגבול לתוכן). id (#) עדיף על class (.) שעדיף על tag בעדיפות CSS.'
      },
      {
        title: 'JavaScript — לוגיקה',
        content: 'JS מאפשרת אינטראקטיביות ושינוי הדף בזמן אמת (Client Side). הקוד רץ בדפדפן של המשתמש.',
        detailedContent: 'JavaScript משמשת לשינוי ה-DOM (תוכן הדף) כתגובה לפעולות משתמש.\nפונקציות נפוצות: `document.getElementById()`, שינוי `innerHTML`, שינוי `style`.\nחשוב: בדיקות קלט ב-JS (Client) אינן מספיקות לאבטחה, חייבים לבדוק גם בשרת (Slide 458).',
        image: '/assets/intro-concept-3.png',
        examTip: 'נכון/לא נכון: "הוספת JS לבדיקת קלט חוסכת בדיקה בשרת?" לא נכון! קוד צד לקוח הוא רק לנוחות, השרת חייב לבדוק תמיד.'
      }
    ],
    codeExamples: [
      {
        title: 'שינוי צבע (Slide 431)',
        language: 'javascript',
        code: `function colorChange() {
    var currentColor = document.getElementById('h3').innerHTML;
    if(currentColor == 'Black') {
        document.getElementById('HelloWorld').src = "colorYellow.jpg";
        document.getElementById('h3').innerHTML = 'Yellow';
        document.getElementById('h3').style.color = 'yellow';
    }
    // ... המשך הקוד להחלפת צבעים נוספים
}`
      },
      {
        title: 'דוגמה מלאה — HTML עם טופס וקלטים',
        language: 'html',
        code: `<!DOCTYPE html>
<html>
<head>
    <title>טופס הרשמה</title>
</head>
<body>
    <h1>טופס הרשמה</h1>
    <form action="/register" method="POST">
        <label>שם:</label>
        <input type="text" name="username">
        <br>
        <label>סיסמה:</label>
        <input type="password" name="pass">
        <br>
        <label>מגדר:</label>
        <input type="radio" name="gender" value="M"> זכר
        <input type="radio" name="gender" value="F"> נקבה
        <br>
        <label>תחביבים:</label>
        <input type="checkbox" name="hobby" value="sport"> ספורט
        <input type="checkbox" name="hobby" value="music"> מוזיקה
        <br>
        <input type="submit" value="שלח">
    </form>
</body>
</html>`
      },
      {
        title: 'CSS — בוררים ותכונות נפוצות',
        language: 'css',
        code: `/* בורר לפי תגית — כל ה-h1 */
h1 {
    text-align: center;
    color: navy;
    font-size: 24px;
}

/* בורר לפי מחלקה (.class) — רב-שימושי */
.highlight {
    background-color: yellow;
    padding: 10px;
    border: 1px solid orange;
}

/* בורר לפי מזהה (#id) — ייחודי */
#main-title {
    font-size: 32px;
    margin: 20px auto;
}

/* מודל קופסה: margin > border > padding > content */
.box {
    margin: 20px;        /* מרווח חיצוני */
    border: 2px solid;   /* גבול */
    padding: 15px;       /* ריפוד פנימי */
    width: 300px;
}`
      },
      {
        title: 'שגיאות HTML נפוצות (Slide 455)',
        language: 'html',
        code: `<!-- ❌ שגיאות: -->
<form>
    <table> <!-- קינון בעייתי לעיתים -->
        <tr>
            <td>Name:</td>
            <td><input type="text"></td>
        <!-- ❌ חסרה תגית סגירה ל-tr -->
    </table>
</form>
<!-- חסרה תגית Title ב-Head -->`
      }
    ],
    keyTerms: [
      { term: 'HTML', definition: 'מבנה הדף (HyperText Markup Language)' },
      { term: 'CSS', definition: 'עיצוב הדף (Cascading Style Sheets)' },
      { term: 'Client Side', definition: 'קוד שרץ אצל הלקוח (בדפדפן) — כמו JavaScript' },
      { term: 'Server Side', definition: 'קוד שרץ בשרת — בטוח יותר לבדיקות' },
      { term: 'DOM', definition: 'Document Object Model — ייצוג עץ של הדף ב-JS' },
      { term: 'Box Model', definition: 'מודל קופסה: Content → Padding → Border → Margin' },
      { term: '<form>', definition: 'תגית טופס — מכילה קלטים ושדות' },
      { term: '<input>', definition: 'שדה קלט — type קובע סוג (text, password, radio, checkbox, submit)' }
    ]
  },
  {
    id: 'opm',
    title: 'OPM — מתודולוגיית עצם-תהליך',
    icon: '',
    lecture: 7,
    color: '#14b8a6',
    keyConcepts: [
      {
        title: 'מהי OPM — OPD ו-OPL',
        content: 'OPM מורכבת משני חלקים משלימים: OPD (התרשים הגרפי) ו-OPL (הטקסט בשפה טבעית). כל קו בתרשים מתורגם למשפט ב-OPL.',
        detailedContent: 'הייחודיות של OPM היא הדו-כיווניות (Bimodality): לכל אלמנט בתרשים (OPD - Object Process Diagram) יש ביטוי טקסטואלי מדויק (OPL - Object Process Language). זה מאפשר לבעלי עניין שאינם מהנדסים להבין את המערכת ע"י קריאת המשפטים שנוצרים אוטומטית.\nהתרשים מציג אובייקטים (מלבנים), תהליכים (אליפסות) וקשרים (חצים).',
        examTip: 'במבחן: OPM היא שפה בי-מודאלית (גרפית וטקסטואלית). ה-OPL נוצר אוטומטית מה-OPD.',
        images: ['/assets/opm-diagram-main.png', '/assets/opm-opl-text.png']
      },
      {
        title: 'קשרים מבניים (Structural Links)',
        content: 'קשרים קבועים בין אובייקטים. כוללים: אגרגציה (▲ משולש מלא), אפיון/Exhibition (▲ משולש מלא בתוך △ ריק), הכללה/Generalization (△ משולש ריק בלבד), סיווג/Classification (● עיגול מלא בתוך △ משולש ריק).',
        detailedContent: 'קשרים מבניים מתארים את היחסים הסטטיים (הקבועים) במערכת:\n• Aggregation (אגרגציה) — שלם וחלקיו (▲ משולש מלא/שחור). דוגמה: מכונית מורכבת מגלגל ודלת. OPL: "Car consists of Wheel and Door".\n• Exhibition (אפיון) — מאפיין/תכונה (▲ משולש מלא בתוך △ משולש ריק). דוגמה: למכונית יש צבע ומשקל. OPL: "Car exhibits Color and Weight".\n• Generalization (הכללה) — הורשה/הכללה (△ משולש ריק בלבד). דוגמה: כלי רכב הוא הכללה של מכונית ואופנוע. OPL: "Vehicle generalizes Car and Motorcycle".\n• Classification (סיווג) — מופע/אובייקט של מחלקה (● עיגול מלא בתוך △ משולש ריק). דוגמה: מחלקה Person → מופע Dan. OPL: "Person classifies Dan".\n• קשר זיקה (Relation) — קו דו-כיווני עם טקסט על כל כיוון. ניתן להוסיף ריבוי. דוגמה: Exam «contains» Question, ו-Question «appears in» Exam.\n• קשר זיקה חד-כיווני (Uni-directional) — חץ חד-כיווני עם טקסט וריבוי. דוגמה: 4 People «live in» House.',
        examTip: 'שימו לב לצורות — זה התרגיל הכי נפוץ במבחן:\n• ▲ משולש מלא (שחור) = Aggregation (שלם וחלקיו).\n• ▲ מלא בתוך △ ריק = Exhibition (אפיון/תכונות).\n• △ ריק בלבד = Generalization (הכללה).\n• ● עיגול מלא בתוך △ ריק = Classification (סיווג/מופע).\nקשר זיקה (Relation) = הקשר הכללי — משתמשים כשאף קשר מבני אחר לא מתאים.',
        images: ['/assets/opm-structural-1.png', '/assets/opm-structural-2.png']
      },
      {
        title: 'קשרים פרוצדורליים (Procedural Links)',
        content: 'קשרים המתארים את דינמיקת המערכת. כוללים: צריכה, יצירה, השפעה, סוכן, מכשיר.',
        detailedContent: 'קשרים שמחברים בין תהליכים לאובייקטים (או בין תהליכים):\n• Consumption (צריכה) — חץ מאובייקט לתהליך. התהליך מעלים את האובייקט.\n• Result (יצירה) — חץ מתהליך לאובייקט. התהליך יוצר את האובייקט.\n• Effect (השפעה) — חץ דו-כיווני. האובייקט משתנה אך לא נעלם.\n• Agent (סוכן) — סוכריה שחורה (עיגול שחור). אדם שמבצע את התהליך (Human).\n• Instrument (מכשיר) — סוכריה לבנה (עיגול לבן). כלי שמשמש לביצוע התהליך (Non-human).\n• Invocation (הפעלה) — חץ "ברק" בין תהליכים. סיום תהליך אחד מפעיל את הבא אחריו.\n• Condition (תנאי) — קישור עם האות c. התהליך יקרה רק אם האובייקט נמצא במצב מסוים (Pre-condition).\n• Event (אירוע) — קישור עם האות e. שינוי מצב באובייקט "דוחף" (Triggers) את התהליך לפעולה.',
        examTip: 'הבדל קריטי: Agent (סוכן) הוא אנושי/חכם. Instrument (מכשיר) הוא כלי/חומרה. \nשימו לב לטריגרים: Condition (c) הוא תנאי סף (אם המצב קיים -> תפעל). Event (e) הוא דחיפה (כשקורה שינוי -> תפעל).',
        images: ['/assets/opm-procedural-1.png', '/assets/opm-procedural-2.png']
      },
      {
        title: 'מנגנוני פירוט (Abstract/Refine)',
        content: 'In-Zoom (הגדלה פנימית), Unfold (חשיפת מבנה), Fold (הסתרה). מאפשרים ניהול מורכבות ע"י הצגת פרטים רק כשצריך.',
        detailedContent: 'ניהול המורכבות נעשה ע"י מנגנוני הפשטה ועידון:\n\nIn-Zoom — נכנסים "לתוך" האליפסה של תהליך כדי לראות את תתי-התהליכים שבתוכה.\n• תתי-התהליכים מוצגים מלמעלה למטה — הסדר מייצג את רצף הביצוע (קודם העליון, אחריו מתחתיו וכו\').\n• אובייקט שמופיע בתוך In-Zoom של תהליך הוא אובייקט זמני — הוא קיים רק בזמן ביצוע התהליך ונעלם לאחר סיומו!\n• דוגמה: In-Zoom של "הכנת קפה" → תתי-תהליכים: (1) טחינת פולים (2) חימום מים (3) מזיגה. "קפה טחון" הוא אובייקט זמני שנוצר באמצע.\n\n• Out-Zoom — חזרה למבט על (ההפך של In-Zoom).\n\nUnfold — חשיפת המרכיבים של אובייקט או תהליך בהיררכיית עץ (בד"כ בקשר אגרגציה).\n• Fold — הסתרת המרכיבים (ההפך של Unfold).',
        examTip: 'In-Zoom = "לתוך" הבועה. הסדר חשוב — מלמעלה למטה = סדר ביצוע!\nאובייקט בתוך In-Zoom של תהליך = זמני (ייעלם בסוף).\nUnfold = עץ היררכי "מתחת" לבועה.',
        images: ['/assets/opm-inzoom-1.png', '/assets/opm-inzoom-2.png', '/assets/opm-unfold-1.png', '/assets/opm-unfold-2.png']
      }
    ],
    codeExamples: [],
    keyTerms: [
      { term: 'Object (אובייקט)', definition: 'ישות שקיימת — מיוצגת כמלבן' },
      { term: 'Process (תהליך)', definition: 'פעולה שמשנה אובייקטים — מיוצגת כאליפסה' },
      { term: 'In-Zoom', definition: 'הגדלת פירוט של רכיב במודל' },
      { term: 'Unfold', definition: 'פריסת היררכיה של רכיב' },
      { term: 'OPL', definition: 'Object-Process Language — שפה טבעית שמתארת את המודל' }
    ]
  },
  {
    id: 'pipes-filters',
    title: 'צינורות ומסננים — Pipes & Filters',
    icon: '',
    lecture: 7,
    color: '#f59e0b',
    keyConcepts: [
      {
        title: 'עקרון הארכיטקטורה',
        content: 'דפוס ארכיטקטורה שבו מעבדים נתונים בשלבים עוקבים. כל שלב (מסנן/Filter) מבצע עיבוד מסוים על המידע ומעביר אותו דרך צינור (Pipe) למסנן הבא.',
        detailedContent: 'Pipes & Filters הוא דפוס זרימת נתונים (Data Flow). הרעיון: כל רכיב (Filter) הוא "קופסה שחורה" שמקבלת קלט, מעבדת אותו ומוציאה פלט. הרכיבים לא מכירים זה את זה — הם רק יודעים לקרוא/לכתוב מהצינור (Pipe).\nדוגמה: הקומפיילר (מקור לקוד -> Lexer -> Parser -> Optimization -> Code Gen).',
        image: '/assets/pipes-filters-concept-1.png',
        examTip: 'במבחן: Filters הם עצמאיים לחלוטין (לא יודעים מי לפני/אחרי). Pipes הם רק מובילי מידע (Buffering/Sychronization) ולא מעבדים מידע.'
      },
      {
        title: 'יתרונות וחסרונות',
        content: 'יתרונות: שימוש חוזר, הרחבה קלה, ביצוע מקבילי, תחזוקה פשוטה. חסרונות: צוואר בקבוק, תלות בסדר הרצה, המרות פורמט, אין שיתוף מצב.',
        detailedContent: 'יתרונות:\n• שימוש חוזר (Reuse) — קל להרכיב צינורות חדשים ממסננים קיימים\n• תחזוקה — קל להחליף מסנן אחד בלי להשפיע על האחרים\n• מקביליות — מסננים יכולים לרוץ במקביל (Pipeline Processing)\n• הרחבה — הוספת מסנן חדש לצינור בלי לשנות את הקיימים\n• גמישות — קל לשנות סדר או להסיר מסנן\n\nחסרונות:\n• צוואר בקבוק (Bottleneck) — אם מסנן אחד איטי, כל הצינור מאט. כל הזרימה "תקועה" על המסנן הכי איטי\n• תלות בסדר הרצה — שינוי הסדר עלול לשבור את התוצאה (למשל: סינון לפני מיון ≠ מיון לפני סינון)\n• ירידה בביצועים — המרות פורמט (Parsing/Unparsing) בין מסננים. כל מסנן צריך לפענח את הקלט ולארוז את הפלט\n• אין שיתוף מצב (No Shared State) — מסננים לא יכולים לשתף מידע ביניהם בדרך ישירה\n• ניהול שגיאות מורכב — קשה לדעת איפה בצינור התרחשה השגיאה',
        image: '/assets/pipes-filters-concept-2.png',
        examTip: 'במבחן: יתרון = Reuse, מקביליות, גמישות. חיסרון = צוואר בקבוק (Bottleneck — המסנן הכי איטי קובע את המהירות), תלות בסדר (שינוי סדר = שינוי תוצאה), overhead של המרות פורמט.'
      }
    ],
    codeExamples: [],
    keyTerms: [
      { term: 'Filter (מסנן)', definition: 'רכיב שמבצע עיבוד על נתונים' },
      { term: 'Pipe (צינור)', definition: 'ערוץ העברת נתונים בין מסננים' }
    ]
  },
  {
    id: 'software-metrics',
    title: 'מדדים בפיתוח תוכנה',
    icon: '',
    lecture: 9, // Slide 299
    color: '#be185d',
    keyConcepts: [
      {
        title: 'גמישות (Flexibility) והרחבה (Extensibility)',
        content: 'גמישות: היכולת לבצע שינויים בתוכנה ללא מאמץ רב. הרחבה: היכולת להוסיף פונקציונליות חדשה למערכת (שגדלה עם הזמן).',
        detailedContent: 'מערכת טובה מאפשרת שינויים (גמישות) והוספת פיצ\'רים (הרחבה) בלי לשבור קוד קיים.\nזה מושג ע"י:\n• Low Coupling (תלות נמוכה)\n• High Cohesion (לכידות גבוהה)\n• שימוש ב-Design Patterns',
        image: '/assets/code-conventions-concept-2.png',
        examTip: 'במבחן: ההבדל החשוב — גמישות היא על **שינוי** הקיים. הרחבה היא על **הוספת** החדש.'
      },
      {
        title: 'יעילות (Efficiency)',
        content: 'ניצול משאבי מקום (זיכרון) וזמן (CPU) שצורכים מרכיבי המערכת.',
        detailedContent: 'מערכת יעילה לא מבזבזת משאבים. זה כולל אלגוריתמים נכונים, ניהול זיכרון חכם, ומניעת חישובים מיותרים.\nמדדים: זמן תגובה (Latency), תפוקה (Throughput).',
        image: '/assets/intro-concept-1.png',
        examTip: 'יעילות היא מילת מפתח חשובה. לפעמים יעילות באה על חשבון פשטות (Trade-off).'
      },
      {
        title: 'בהירות (Clarity)',
        content: 'היכולת ללמוד את המערכת ללא מאמץ רב ובזמן קצר.',
        detailedContent: 'קוד בהיר הוא קוד שמפתח חדש יכול להיכנס אליו ולהבין מה קורה תוך זמן קצר.\nמושג ע"י: שמות משמעותיים, תיעוד, ומבנה לוגי ברור.',
        image: '/assets/intro-concept-3.png',
        examTip: 'בהירות = קריאות. אם הקוד עובד אבל אף אחד לא מבין אותו — הציון ב"בהירות" הוא נכש.'
      },
      {
        title: 'ניידות (Portability)',
        content: 'יכולת הסבה של התוכנה לספריות, מערכות הפעלה ומחשבים שונים.',
        detailedContent: 'היכולת לקחת את הקוד ולהריץ אותו בסביבה אחרת (למשל: Windows ו-Linux, או מעבר בין ספקי ענן) במינימום שינויים.',
        image: '/assets/distributed-saas-soa-concept-1.png',
        examTip: 'דוגמה לניידות: Java (Write Once, Run Anywhere).'
      },
      {
        title: 'KIS — Keep It Simple',
        content: 'עקרון על: שמרו על הפשטות. פתרון פשוט עדיף על פתרון מסובך (גם אם הוא "חכם" יותר).',
        detailedContent: 'KIS (Keep It Simple) הוא עקרון מנחה. סיבוכיות גוררת באגים וקושי בתחזוקה. תמיד תעדיפו את הדרך הפשוטה ביותר לפתור את הבעיה.',
        image: '/assets/intro-concept-2.png',
        // examTip intentionally omitted if not needed, or add generic one
        examTip: 'במבחן: KIS הוא קריטריון עיצובי. אם הפתרון שלכם עובד אבל מסובך — ירדו נקודות על KIS.'
      }
    ],
    codeExamples: [],
    keyTerms: [
      { term: 'Flexibility', definition: 'גמישות לשינויים' },
      { term: 'Extensibility', definition: 'יכולת הרחבה' },
      { term: 'Efficiency', definition: 'יעילות (משאבים/זמן)' },
      { term: 'Clarity', definition: 'בהירות וקריאות הקוד' },
      { term: 'Portability', definition: 'ניידות בין סביבות' },
      { term: 'KIS', definition: 'Keep It Simple — פשטות' }
    ]
  },
  {
    id: 'n-tier',
    title: 'ארכיטקטורה רב-שכבתית (N-Tier)',
    icon: '',
    lecture: 8,
    color: '#0284c7', /* Blue (was Red) */
    keyConcepts: [
      {
        title: 'ארכיטקטורת שכבות',
        content: 'חלוקת המערכת לשכבות לוגיות. ארכיטקטורת 3 שכבות היא הנפוצה ביותר: שכבת תצוגה (Presentation), שכבת לוגיקה עסקית (Business Logic), ושכבת נתונים (Data).',
        detailedContent: 'N-Tier (או Layered Architecture) מחלקת את המערכת היררכית. כל שכבה נותנת שירות לשכבה שמעליה ומשתמשת בשירותי השכבה שמתחתיה.\nשלוש השכבות הקלאסיות:\n1. Presentation (UI) — הקלט והפלט למשתמש\n2. Business Logic (BLL) — החוקים העסקיים, חישובים, ולידציות\n3. Data Access (DAL) — שמירה ושליפה ממסד נתונים',
        image: '/assets/n-tier-concept-1.png',
        examTip: 'במבחן: החוק החשוב — שכבה מכירה רק את השכבה שמתחתיה! ה-UI לא מדבר ישירות עם ה-DB (אסור!). הוא חייב לעבור דרך הלוגיקה.'
      },
      {
        title: 'דוגמה: חברת "תוכנה בקטנה"',
        content: '4 צוותים: צוות 1 — עיצוב מסכים, צוות 2 — פיתוח מסכים (יחד הם שכבת תצוגה), צוות 3 — עיבוד קלט (שכבת לוגיקה), צוות 4 — ניהול מסד נתונים (שכבת נתונים). סה"כ: 3 שכבות, לא 4!',
        detailedContent: 'מספר הצוותים לא קובע את מספר השכבות! אם שני צוותים עובדים על ה-UI (אחד מעצב, אחד מפתח React), שניהם שייכים לשכבת ה-Presentation. השכבות הן פונקציונליות-לוגיות, לא ארגוניות.',
        image: '/assets/n-tier-concept-2.png',
        examTip: 'השאלה הקלאסית: "יש 4 צוותים... כמה שכבות יש?" התשובה היא לפי התפקיד, לא לפי מספר הצוותים. עיצוב+פיתוח מסכים = שכבה 1. עיבוד = שכבה 2. DB = שכבה 3.'
      },
      {
        title: 'יתרונות',
        content: 'הפרדת אחריות, קלות תחזוקה, גמישות לשינויים, אפשרות להחליף שכבה אחת מבלי להשפיע על האחרות.',
        detailedContent: 'יתרונות N-Tier:\n• Modularity — קל להבין ולתחזק כל חלק בנפרד\n• Scalability — אפשר לשים את ה-DB בשרת נפרד ואת הלוגיקה בשרת נפרד\n• Security — ה-UI לא נוגע ב-DB ישירות (מונע SQL Injection ישיר מהלקוח)',
        image: '/assets/n-tier-concept-3.png',
        examTip: 'במבחן: היתרון הגדול הוא שאפשר להחליף את ה-UI (למשל מ-Web ל-Mobile) בלי לגעת בלוגיקה וב-DB. זה נקרא "Separation of Concerns".'
      },
      {
        title: 'Local Storage ו-JSON',
        content: 'localStorage מאפשר שמירת נתונים בדפדפן הלקוח באופן קבוע (לא נמחק בסגירת הדפדפן). JSON.stringify() ממיר אובייקט למחרוזת לשמירה, JSON.parse() ממיר חזרה.',
        detailedContent: 'localStorage הוא מנגנון אחסון בצד הלקוח (Client-Side Storage) ששומר נתונים כ-key-value:\n• localStorage.setItem(key, value) — שמירה\n• localStorage.getItem(key) — שליפה\n• localStorage.removeItem(key) — מחיקה\n\nJSON — פורמט להעברת נתונים:\n• JSON.stringify(obj) — ממיר אובייקט JavaScript למחרוזת JSON (לשמירה ב-localStorage)\n• JSON.parse(str) — ממיר מחרוזת JSON חזרה לאובייקט\n\nחשוב: localStorage שומר רק מחרוזות! לכן חובה להשתמש ב-stringify/parse לשמירת אובייקטים ומערכים.',
        image: '/assets/n-tier-concept-3.png',
        examTip: 'במבחן: localStorage שומר רק מחרוזות. לשמור אובייקט → JSON.stringify(). לקרוא → JSON.parse(). ללא stringify, האובייקט יישמר כ-"[object Object]"!'
      }
    ],
    codeExamples: [
      {
        title: 'localStorage ו-JSON.stringify',
        language: 'javascript',
        code: `// שמירת אובייקט ב-localStorage
var student = { name: "Kirk", age: 23 };
localStorage.setItem("student", JSON.stringify(student));

// שליפת אובייקט מ-localStorage
var saved = JSON.parse(localStorage.getItem("student"));
console.log(saved.name); // "Kirk"

// ❌ שגיאה נפוצה — בלי stringify:
localStorage.setItem("student", student);
// יישמר כ-"[object Object]" ← לא שימושי!`
      }
    ],
    keyTerms: [
      { term: 'Presentation Layer', definition: 'שכבת תצוגה — ממשק המשתמש' },
      { term: 'Business Logic Layer', definition: 'שכבת לוגיקה — עיבוד נתונים' },
      { term: 'Data Layer', definition: 'שכבת נתונים — מסד נתונים' },
      { term: '2-Tier', definition: 'לקוח ושרת בלבד' },
      { term: 'N-Tier', definition: 'ארכיטקטורה עם N שכבות' },
      { term: 'localStorage', definition: 'אחסון קבוע בדפדפן (key-value)' },
      { term: 'JSON.stringify()', definition: 'המרת אובייקט למחרוזת JSON' },
      { term: 'JSON.parse()', definition: 'המרת מחרוזת JSON לאובייקט' }
    ]
  },
  {
    id: 'distributed-saas-soa',
    title: 'מערכות מבוזרות, SaaS ו-SOA',
    icon: '',
    lecture: 8,
    color: '#0ea5e9',
    keyConcepts: [
      {
        title: 'מערכת מבוזרת',
        content: 'מערכת שרכיביה ממוקמים על מחשבים שונים המקושרים ברשת. מאפיינים: שיתוף משאבים, פתיחות, בו-זמניות, סיבולת לתקלות, שקיפות.',
        detailedContent: 'מערכת מבוזרת מורכבת מרכיבים שרצים על מחשבים נפרדים ומתקשרים ברשת. \nחמישה מאפיינים מרכזיים:\n1. שיתוף משאבים (Resource Sharing) — מדפסות, קבצים, כוח עיבוד\n2. פתיחות (Openness) — אפשרות להרחיב ולהוסיף רכיבים (Standard Interfaces)\n3. בו-זמניות (Concurrency) — תהליכים רצים במקביל\n4. סיבולת לתקלות (Fault Tolerance) — אם רכיב נפל, המערכת ממשיכה לעבוד\n5. שקיפות (Transparency) — המשתמש לא מרגיש שהמערכת מבוזרת (נראית מקומית)',
        image: '/assets/distributed-saas-soa-concept-1.png',
        examTip: 'במבחן: Transparency (שקיפות) היא המאפיין הכי מבלבל. הכוונה היא שהביזור **שקוף למשתמש** (הוא לא רואה אותו), לא שהמערכת "שקופה" במובן של "רואים הכל". להיפך — הביזור מוסתר.'
      },
      {
        title: 'SaaS — תוכנה כשירות',
        content: 'Software as a Service — רכישת גישה לתוכנה כמנוי במקום התקנה מקומית. מדדי הצלחה: MRR (הכנסה חודשית חוזרת), ARR (הכנסה שנתית חוזרת), LTV (ערך חיי לקוח), CAC (עלות גיוס לקוח), ARPU (הכנסה ממוצעת למשתמש), Churn (שיעור נטישה).',
        detailedContent: 'SaaS (כמו Netflix, Gmail, Office 365) משנה את המודל העסקי ממכירת רישיון (חד-פעמי) למנוי (מתמשך).\n\nמדדי הצלחה (עם תרגום לעברית):\n• MRR (Monthly Recurring Revenue) — הכנסה חודשית חוזרת\n• ARR (Annual Recurring Revenue) — הכנסה שנתית חוזרת\n• CAC (Customer Acquisition Cost) — עלות גיוס לקוח (שיווק + מכירות)\n• LTV (Customer Lifetime Value) — ערך חיי לקוח (כמה ישלם לכל אורך חייו)\n• ARPU (Average Revenue Per User) — הכנסה ממוצעת למשתמש\n• Churn Rate — שיעור נטישה (אחוז הלקוחות שעוזבים)\n• NPS (Net Promoter Score) — מדד שביעות רצון\n\nנוסחת כדאיות: LTV > CAC → כדאי!\n\nיתרונות SaaS:\n• עדכונים אוטומטיים — המשתמש תמיד בגרסה האחרונה\n• ללא התקנה — נגיש מכל מכשיר עם דפדפן\n• עלות כניסה נמוכה — מנוי חודשי במקום רכישה חד-פעמית יקרה\n• גמישות — קל להוסיף/לבטל משתמשים\n• קנה מידה (Scalability) — הספק מנהל את התשתית\n\nחסרונות SaaS:\n• תלות בספק — אם הספק נסגר, אתה בלי שירות\n• פרטיות — הנתונים שלך נשמרים אצל הספק\n• עלות מצטברת — לאורך שנים, מנוי עלול לעלות יותר מרכישה\n• תלות באינטרנט — ללא חיבור = ללא שירות\n• התאמה אישית מוגבלת — אי אפשר לשנות את התוכנה כרצונך',
        image: '/assets/distributed-saas-soa-concept-2.png',
        examTip: 'חישוב כדאיות במבחן: LTV > CAC → כדאי. LTV = MRR × 12 × שנות שימוש. אם עולה 100₪ להביא לקוח (CAC) והוא משלם רק 50₪ כל חייו (LTV) → הפסד!\nזכרו את המדדים בעברית: MRR = הכנסה חודשית, CAC = עלות גיוס, LTV = ערך חיי לקוח, Churn = נטישה.'
      },
      {
        title: 'SOA — ארכיטקטורה מוכוונת שירותים',
        content: 'Service-Oriented Architecture — ארכיטקטורה שבה רכיבים מספקים שירותים לרכיבים אחרים דרך פרוטוקול תקשורת, בדרך כלל ברשת.',
        detailedContent: 'SOA היא גישה ארכיטקטונית שבה המערכת מורכבת מ"שירותים" (Services) עצמאיים. כל שירות הוא יחידה עסקית (למשל: "שירות תשלומים", "שירות משלוחים"). השירותים מתקשרים בפרוטוקול תקני (כמו REST, SOAP).\n\nיתרונות SOA:\n• שימוש חוזר (Reuse) — אותו שירות משמש מערכות שונות\n• עצמאות — כל שירות מפותח, נפרש ומתוחזק בנפרד\n• גמישות טכנולוגית — כל שירות יכול להיכתב בשפה אחרת (Java, Python...)\n• קנה מידה — אפשר להרחיב שירות ספציפי בלי להשפיע על אחרים\n• Loose Coupling — שירותים מתקשרים דרך ממשקים תקניים, לא תלויים זה בזה\n• קל לשלב APIs חיצוניים — למשל שירות תשלומים של Stripe',
        image: '/assets/distributed-saas-soa-concept-3.png',
        examTip: 'במבחן: ההבדל בין SOA ל-SaaS: SOA זו **ארכיטקטורה** (איך בונים). SaaS זה **מודל עסקי** (איך מוכרים). מערכת SaaS יכולה להיבנות ב-SOA. יתרונות SOA = Reuse, עצמאות, גמישות טכנולוגית.'
      },
      {
        title: 'Web 1.0 עד Web 4.0',
        content: 'Web 1.0 — קריאה בלבד. Web 2.0 — קריאה+כתיבה (רשתות חברתיות). Web 3.0 — קריאה+כתיבה+בעלות (בלוקצ\'יין). Web 4.0 — אינטרנט סימביוטי (AI + IoT).',
        detailedContent: 'האבולוציה של ה-Web:\n• Web 1.0 (1990-2004) — Read Only. אתרים סטטיים, המשתמש רק קורא ("אינטרנט של מידע").\n• Web 2.0 (2004-היום) — Read-Write. רשתות חברתיות, המשתמש יוצר תוכן (UGC). דוגמאות: Facebook, YouTube, Wikipedia. הבעיה: הנתונים שייכים לתאגידים.\n• Web 3.0 (מתפתח) — Read-Write-Own. ביזור, בלוקצ\'יין, המשתמש בעלים של המידע שלו (Tokens, NFT, Smart Contracts). אין גורם מרכזי שליט.\n• Web 4.0 (עתיד) — Symbiotic Web / אינטרנט סימביוטי. שילוב בינה מלאכותית (AI) עם IoT (אינטרנט של הדברים). המערכת "מבינה" את המשתמש ופועלת עבורו באופן אוטונומי. דוגמה: עוזרים וירטואליים שפועלים בשם המשתמש.',
        image: '/assets/distributed-saas-soa-concept-4.png',
        examTip: 'זיהוי במבחן: Web 1.0 = סטטי (קריאה). Web 2.0 = אינטראקטיבי (המשתמש כותב). Web 3.0 = מבוזר (המשתמש בעלים). Web 4.0 = סימביוטי (AI ו-IoT פועלים עבור המשתמש).\nמילת מפתח: "אין גורם מרכזי" = Web 3.0. "AI פועל בשם המשתמש" = Web 4.0.'
      }
    ],
    codeExamples: [
      {
        title: 'חישוב כדאיות SaaS (Slide 461)',
        language: 'text',
        code: `נתון:
  MMR = 3 (רווח חודשי למשתמש)
  סטודנט נשאר 4 שנים
  CAC = 7 (עלות גיוס לקוח)
  5 סטודנטים

חישוב:
  הכנסה: 3 × 12 × 4 × 5 = 720₪
  הוצאה: 7 × 5 = 35₪
  רווח: 720 - 35 = 685₪ ← כדאי!`
      }
    ],
    keyTerms: [
      { term: 'SaaS', definition: 'Software as a Service — תוכנה כשירות' },
      { term: 'SOA', definition: 'Service-Oriented Architecture — ארכיטקטורה מוכוונת שירותים' },
      { term: 'MRR', definition: 'Monthly Recurring Revenue — רווח חודשי חוזר' },
      { term: 'LTV', definition: 'Customer Lifetime Value — ערך חיי לקוח' },
      { term: 'CAC', definition: 'Customer Acquisition Cost — עלות גיוס לקוח' },
      { term: 'Peer2Peer', definition: 'תקשורת ישירה בין מחשבים ללא שרת מרכזי' }
    ]
  },
  {
    id: 'oop',
    title: 'OOP — תכנות מונחה עצמים',
    icon: '',
    lecture: 8,
    color: '#22c55e',
    keyConcepts: [
      {
        title: 'מחלקה ואובייקט',
        content: 'מחלקה (Class) — מבנה מופשט בעל תכונות (attributes) ושיטות (methods). אובייקט (Object) — מופע (instance) של מחלקה. לכל אובייקט יש ערכים ספציפיים לתכונות.',
        detailedContent: 'מחלקה (Class) היא התבנית/השרטוט (Blueprint). אובייקט (Object) הוא הבית שנבנה מהשרטוט.\nאפשר לבנות אינסוף אובייקטים מאותה מחלקה. לכל אחד יהיה State (ערכים) משלו, אבל אותה התנהגות (Methods).',
        image: '/assets/oop-concept-1.png',
        examTip: 'במבחן: המחלקה קיימת בקוד (בזמן כתיבה). האובייקט קיים בזיכרון (בזמן ריצה). ה-Class הוא סטטי, ה-Object הוא דינמי.'
      },
      {
        title: 'הגדרת מחלקה בפייתון',
        content: '__init__ — קונסטרקטור שמאתחל את תכונות האובייקט (self). __new__ — יוצר את האובייקט (cls). new נקרא לפני init. self — האובייקט עצמו, מועבר אוטומטית כפרמטר ראשון.',
        detailedContent: 'בפייתון יש הפרדה בין יצירה לאתחול:\n1. __new__(cls) — **יוצר** את האובייקט בזיכרון ומחזיר אותו. (פעולה נדירה, משמשת בעיקר ל-Singleton או מחלקות Immutable).\n2. __init__(self) — **מאתחל** את האובייקט שכבר נוצר (הגדרת ערכים ראשוניים).\n3. self — הרפרנס לאובייקט הנוכחי (כמו this ב-Java/C++).',
        image: '/assets/oop-concept-2.png',
        examTip: 'השאלה הכי נפוצה: מי רץ קודם? __new__ רץ ראשון (יוצר), ורק אם הוא מחזיר אובייקט — Python מריץ את __init__ (מאתחל).'
      },
      {
        title: 'הורשה (Inheritance)',
        content: 'מחלקת בן יורשת ממחלקת אב ומקבלת את כל התכונות והמתודות שלה. ניתן להוסיף תכונות ומתודות חדשות, או לשכתב (override) מתודות קיימות.',
        detailedContent: 'הורשה מאפשרת ליצור היררכיה ("is-a relationship"). דוגמה: Student הוא Person.\nיתרונות: שימוש חוזר בקוד (המחלקת אב מכילה את המשותף).\nOverride (שכתוב/דריסה): מחלקת הבן מגדירה מחדש פונקציה שהייתה באב כדי לשנות את ההתנהגות שלה.',
        image: '/assets/oop-concept-3.png',
        examTip: 'במבחן: אם שתי מחלקות חולקות קוד אבל אין ביניהן קשר לוגי של "סוג של" — עדיף להשתמש ב-Composition (הכלה) ולא ב-Inheritance (הורשה).'
      }
    ],
    codeExamples: [
      {
        title: 'הגדרת מחלקת Student',
        language: 'python',
        code: `class Student:
    country = "Israel"  # מאפיין משותף לכל הסטודנטים

    def __init__(self, name, age, department, startYear):
        self.name = name
        self.age = age
        self.department = department
        self.startYear = startYear

    def description(self):
        return f"{self.name} is {self.age} years old"

# יצירת אובייקטים
kirk = Student("James Kirk", 23, "Software Engineering", 2020)
spock = Student("Spock", 27, "Mathematics", 2019)
print(kirk.description())  # James Kirk is 23 years old`
      },
      {
        title: 'הורשה',
        language: 'python',
        code: `class Student:
    country = "Israel"
    def __init__(self, name, age, startYear):
        self.name = name
        self.age = age
        self.startYear = startYear

class SoftwareStudent(Student):
    def dept(self):
        return f"{self.name} is studying at Software Engineering"

class MathematicsStudent(Student):
    def dept(self):
        return f"{self.name} is studying at Mathematics"

kirk = SoftwareStudent("James Kirk", 23, 2020)
print(kirk.dept())  # James Kirk is studying at Software Engineering`
      }
    ],
    keyTerms: [
      { term: 'Class (מחלקה)', definition: 'תבנית מופשטת לאובייקטים' },
      { term: 'Object (אובייקט)', definition: 'מופע של מחלקה עם ערכים ספציפיים' },
      { term: 'Inheritance (הורשה)', definition: 'מחלקת בן יורשת ממחלקת אב' },
      { term: '__init__', definition: 'קונסטרקטור — מאתחל תכונות' },
      { term: '__new__', definition: 'יוצר את האובייקט בפועל' },
      { term: 'self', definition: 'הפניה לאובייקט הנוכחי' },
      { term: 'Override', definition: 'שכתוב מתודה ממחלקת האב' }
    ]
  },
  {
    id: 'design-patterns',
    title: 'תבניות עיצוב — Design Patterns',
    icon: '',
    lecture: 9,
    color: '#f97316',
    keyConcepts: [
      {
        title: 'מהן תבניות עיצוב?',
        content: 'פתרון לבעיה כללית וחוזרת בתכנות. נבדקו ונוסו בהצלחה פעמים רבות. GOF (Gang of Four) — ארבעה מהנדסים שכתבו את הספר הקלאסי על Design Patterns. מטרות: גמישות, הרחבה, יעילות, בהירות, ניידות.',
        detailedContent: 'Pattern הוא פתרון מוכח לבעיה נפוצה. לא צריך להמציא את הגלגל.\nהספר של ה-GOF (Gang of Four) הגדיר 23 תבניות בסיסיות המחולקות ל-3 קטגוריות:\n1. Creational (יצירה) — Singleton, Factory\n2. Structural (מבנה) — Adapter, Decorator\n3. Behavioral (התנהגות) — Observer, Strategy',
        image: '/assets/design-patterns-concept-1.png',
        examTip: 'נקודה חשובה: כריסטופר אלכסנדר (ארכיטקט בניין) הוא הוגה הרעיון המקורי, וה-GOF יישמו אותו בעולם התוכנה.'
      },
      {
        title: 'Singleton',
        content: 'הגבלת מספר האובייקטים מסוג מסוים ל-1 בלבד + גישה גלובלית לאובייקט היחיד. דוגמה: DatabaseConnection — חיבור אחד בלבד למסד נתונים. מימוש: שימוש ב-__new__ לבדיקה אם כבר קיים אובייקט.',
        detailedContent: 'המטרה: להבטיח שיש רק מופע אחד (Instance) של המחלקה בכל המערכת.\nשימושים נפוצים: מנהל הגדרות (Configuration Manager), חיבור ל-DB, לוגר (Logger).\nמימוש בפייתון: ע"י דריסת __new__ — נשמור משתנה סטטי (cls.instance), אם הוא ריק ניצור, אחרת נחזיר את הקיים.',
        image: '/assets/design-patterns-concept-2.png',
        examTip: 'מלכודת: Singleton הוא לא רק "יחיד", הוא גם מספק "גישה גלובלית" (Global Access Point). זה חלק מההגדרה.'
      },
      {
        title: 'Adapter (Wrapper)',
        content: 'יצירת שיתוף פעולה בין מחלקות עם ממשקים לא תואמים. דוגמה: Twitter שינו את שם הפונקציה מ-send ל-sendTweet. במקום לשנות בכל המקומות — יוצרים Adapter שמתרגם בין הממשקים.',
        detailedContent: 'ה-Adapter מתרגם ממשק אחד לממשק אחר שהלקוח מצפה לו. כמו מתאם שקע חשמל (אמריקאי לאירופאי).\nנקרא גם Wrapper (עוטף).\nדוגמה: המערכת שלי קוראת ל-`send()`, אבל הספריה החדשה דורשת `sendTweet()`. אני אצור מחלקה שעוטפת את הספריה וחושפת `send()` שקורא ל-`sendTweet()`.',
        image: '/assets/design-patterns-concept-3.png',
        examTip: 'במבחן: מתי משתמשים ב-Adapter? כשיש מחלקה קיימת שעושה את העבודה אבל הממשק שלה לא מתאים למה שאנחנו צריכים (Incompatible Interface).'
      }
    ],
    codeExamples: [
      {
        title: 'Singleton — DatabaseConnection',
        language: 'python',
        code: `class DatabaseConnection:
    connection = None

    def __new__(cls):
        if cls.connection is not None:
            return cls.connection
        cls.connection = super().__new__(cls)
        return cls.connection

first = DatabaseConnection()
second = DatabaseConnection()
print(first is second)  # True — אותו אובייקט!`
      },
      {
        title: 'Adapter — Twitter to SendTweet',
        language: 'python',
        code: `class Twitter:
    def sendTweet(self, msg):  # שם חדש של API
        print(msg)

class SocialAdapter:
    def send(self, msg):
        pass  # ממשק אחיד

class TwitterAdapter(SocialAdapter):
    def __init__(self):
        self.tw = Twitter()
    def send(self, msg):
        self.tw.sendTweet(msg)  # מתרגם לממשק החדש

class FacebookAdapter(SocialAdapter):
    def __init__(self):
        self.fb = Facebook()
    def send(self, msg):
        self.fb.updateStatus(msg)

# שימוש אחיד:
adapter = TwitterAdapter()
adapter.send("Hello!")  # עובד!`
      }
    ],
    keyTerms: [
      { term: 'Design Pattern', definition: 'פתרון לבעיה חוזרת בתכנות מונחה עצמים' },
      { term: 'GOF', definition: 'Gang of Four — מחברי ספר ה-Design Patterns' },
      { term: 'Singleton', definition: 'תבנית שמגבילה ליצירת אובייקט אחד בלבד' },
      { term: 'Adapter', definition: 'תבנית שמתרגמת בין ממשקים לא תואמים' },
      { term: 'Wrapper', definition: 'עטיפה — שם נוסף ל-Adapter' }
    ]
  },
  {
    id: 'concurrency',
    title: 'תהליכים, חוטים ומקביליות',
    icon: '',
    lecture: 10,
    color: '#7c3aed', /* Violet (was Rose) */
    keyConcepts: [
      {
        title: 'תהליכים (Processes) וחוטים (Threads)',
        content: 'תהליך — תוכנית שרצה עם מרחב זיכרון וירטואלי משלה. חוט — רצף פעולות עצמאי שרץ בתוך תהליך. חוטים חולקים זיכרון עם תהליכם ולכן המעבר ביניהם זול יותר מ-Context Switch בין תהליכים.',
        detailedContent: 'Process (תהליך) = "תוכנית בביצוע". יש לו זיכרון משלו, קבצים פתוחים ומשאבים. מבודד מתהליכים אחרים.\nThread (חוט) = "לייט". רץ בתוך תהליך. חולק זיכרון עם חוטים אחרים באותו תהליך.\nיתרון חוטים: תקשורת מהירה (Shared Memory) ומעבר מהיר (Context Switch זול).\nחיסרון: חוט אחד שקורס או נתקע יכול להפיל את כל התהליך.',
        image: '/assets/concurrency-concept-1.png',
        examTip: 'במבחן: תהליכים לא חולקים זיכרון (צריך IPC כדי לדבר). חוטים כן חולקים זיכרון (ולכן מסוכנים בגלל Race Conditions).'
      },
      {
        title: 'מקביליות',
        content: 'Multiprocessing — מספר תהליכים במקביל, כל אחד בזיכרון משלו. Multithreading — מספר חוטים בתוך תהליך אחד, חולקים זיכרון. Context Switch — מעבר יקר בין תהליכים.',
        detailedContent: 'מקביליות מאפשרת לבצע כמה משימות בו-זמנית.\n• Multiprocessing — ניצול ליבות מעבד (CPU Cores). כל תהליך בליבה אחרת.\n• Multithreading — ניצול זמן המתנה (I/O). בזמן שחוט אחד מחכה לרשת, אחר רץ.\n• Context Switch — הפעולה שהמעבד עושה כשהוא עובר מביצוע תהליך אחד לאחר. פעולה יקרה (שמירת מצב, טעינת מצב חדש).',
        image: '/assets/concurrency-concept-2.png',
        examTip: 'במבחן: Context Switch בין Threadים הוא זול יותר מאשר בין Processים (כי הם חולקים את אותו מרחב זיכרון).'
      },
      {
        title: 'מניעה הדדית (Mutual Exclusion)',
        content: 'דרישה: לכל היותר תהליך אחד משתמש במשאב מסוים בקטע קריטי. פתרון: שימוש במנעולים (locks) ופקודות אטומיות כמו TAS (Test-And-Set).',
        detailedContent: 'Mutual Exclusion (מניעה הדדית) נועד למנוע Race Condition.\n• Critical Section (קטע קריטי) — קטע קוד שניגש למשאב משותף.\n• המטרה: רק תהליך אחד נמצא בקטע הקריטי בכל רגע נתון.\n• המימוש: שימוש ב-Lock/Mutex (מנעול). לפני הכניסה נועלים, ביציאה משחררים.',
        image: '/assets/concurrency-concept-3.png',
        examTip: 'במבחן: TAS (Test-And-Set) היא פקודת חומרה אטומית שמאפשרת לממש מנעולים. היא בודקת ומשנה בבת אחת, כך שאי אפשר להפריע לה באמצע.'
      },
      {
        title: 'בעיות מקביליות',
        content: 'חבק (Deadlock) — שני תהליכים מחכים זה לזה. הרעבה (Starvation) — תהליך אף פעם לא מקבל גישה למשאב. דוגמה קלאסית: בעיית הפילוסופים הסועדים, בעיית החלב.',
        detailedContent: 'בעיות קלאסיות:\n• Deadlock (קיפאון/חבק) — מצב מעגלי: א\' מחכה ל-ב\', ב\' מחכה ל-א\'. שניהם תקועים לנצח.\n• Starvation (הרעבה) — תהליך לא תקוע, אבל לא מקבל הזדמנות לרוץ (למשל כי יש תהליכים בעדיפות גבוהה יותר שתמיד עוקפים אותו).\n• הפילוסופים הסועדים — 5 פילוסופים, 5 מזלגות, כל אחד צריך 2. אם כולם הרימו מזלג ימני — Deadlock!\n\nשאלת מבחן (Slide 453): 3 תהליכים, כל אחד צריך 2 מדפסות (לא בו-זמנית). לא ישחרר מדפסת לפני שתפס את השנייה. מה המינימום למניעת Deadlock?\nתשובה: 4 מדפסות. הסבר: במקרה הגרוע כל תהליך תופס מדפסת אחת (3 תפוסות). עם 4 מדפסות — לפחות תהליך אחד מצליח לתפוס 2, מסיים ומשחרר. אז יש 2 פנויות ל-2 תהליכים שנותרו.',
        image: '/assets/concurrency-concept-4.png',
        examTip: 'ההבדל במבחן: Deadlock = אף אחד לא זז (תקיעות מוחלטת). Starvation = המערכת עובדת, אבל מישהו ספציפי מקופח.\nחישוב מדפסות: הנוסחה הכללית — n תהליכים שכל אחד צריך k משאבים → מינימום למניעת Deadlock = n×(k-1) + 1. כאן: 3×1+1 = 4.'
      },
      {
        title: 'בעיית החלב — 5 פתרונות (Slides 364-379)',
        content: 'בעיית סנכרון קלאסית: שני שותפים לדירה (ראובן ושמעון) — שניהם רואים שאין חלב ושניהם קונים → עודף חלב. 5 פתרונות, כל אחד עם בעיה, עד לפתרון TAS.',
        detailedContent: 'בעיית החלב — סדרת 5 פתרונות לסנכרון:\n\nפתרון 1 — נעילת המקרר: ראובן נועל את המקרר לפני שיוצא לקנות.\n❌ בעיה: שמעון לא יכול לגשת למקרר בכלל (גם לא לשתות מיץ).\n\nפתרון 2 — פתק על המקרר: לפני שיוצא, משאיר פתק.\n❌ בעיה: Race Condition — שניהם בודקים "אין פתק?" בו-זמנית, שניהם שמים פתק, שניהם קונים.\n\nפתרון 3 — שני פתקים (כל אחד משלו): Thread A משאיר פתק A, בודק אם אין פתק B.\n❌ בעיה: אם שניהם משאירים פתק בו-זמנית → שניהם רואים שיש פתק של השני → אף אחד לא קונה!\n\nפתרון 4 — שבירת סימטריה: Thread A בודק ויוצא, Thread B מחכה בלולאה (while NoteA).\n✅ עובד! ❌ חסרונות: (1) עובד רק ל-2 תהליכים. (2) לא הוגן (B תמיד מחכה). (3) Busy Wait — B צורך CPU בזמן ההמתנה.\n\nפתרון 5 — משתנה turn: turn=A או turn=B, כל אחד מחכה לתורו.\n❌ בעיה: הרעבה! אם A נשאר ב-non-critical, B לעולם לא ייכנס לקטע הקריטי.\n\nפתרון TAS — Test-And-Set: פקודה אטומית שבודקת ומשנה בבת אחת.\n✅ פותר את כל הבעיות!',
        image: '/assets/concurrency-concept-4.png',
        examTip: 'במבחן: זיכרו את הסדר — כל פתרון מתקן בעיה אחת אבל יוצר חדשה. הפתרונות מדגימים: Locking (1), Race Condition (2), Deadlock (3), Unfairness+Busy Wait (4), Starvation (5). רק TAS (פקודת חומרה אטומית) פותר הכל.'
      }
    ],
    codeExamples: [
      {
        title: 'שימוש בחוטים בפייתון',
        language: 'python',
        code: `from time import sleep, perf_counter
from threading import Thread

def task():
    print('starting a task...')
    sleep(1)
    print('done')

start_time = perf_counter()

# יצירת שני חוטים
t1 = Thread(target=task)
t2 = Thread(target=task)

# התחלת ריצה
t1.start()
t2.start()

# המתנה לסיום
t1.join()
t2.join()

end_time = perf_counter()
print(f'It took {end_time - start_time} seconds')
# בזמן ~ שנייה אחת במקום שתיים!`
      },
      {
        title: 'בעיית Race Condition',
        language: 'python',
        code: `import threading

x = 0

def increment():
    global x
    for _ in range(1000000):
        x += 1  # 3 פקודות: load, add, store

def main():
    global x
    x = 0
    t1 = threading.Thread(target=increment)
    t2 = threading.Thread(target=increment)
    t1.start()
    t2.start()
    t1.join()
    t2.join()
    # התוצאה לא תמיד 2,000,000!
    # כי x += 1 אינה פעולה אטומית

main()
print("x =", x)`
      },
      {
        title: 'פתרון עם TAS (Test-And-Set)',
        language: 'text',
        code: `boolean lock = false;

function Critical() {
    while TestAndSet(lock);  // המתן עד שהמנעול פנוי
    <critical section>       // קטע קריטי
    lock = false;            // שחרור המנעול
}`
      }
    ],
    keyTerms: [
      { term: 'Process (תהליך)', definition: 'תוכנית שרצה עם זיכרון וירטואלי משלה' },
      { term: 'Thread (חוט)', definition: 'רצף פעולות עצמאי בתוך תהליך' },
      { term: 'Deadlock (חבק)', definition: 'שני תהליכים מחכים זה לזה — תקיעה' },
      { term: 'Starvation (הרעבה)', definition: 'תהליך לעולם לא מקבל גישה למשאב' },
      { term: 'Mutual Exclusion', definition: 'מניעה הדדית — רק תהליך אחד בקטע קריטי' },
      { term: 'Critical Section', definition: 'קטע קוד שרק תהליך אחד יכול לבצע' },
      { term: 'TAS', definition: 'Test-And-Set — פקודה אטומית למימוש מנעולים' },
      { term: 'Context Switch', definition: 'מעבר יקר בין תהליכים במעבד' }
    ]
  },
  {
    id: 'fidelity',
    title: 'נאמנות תוכנה — Fidelity',
    icon: '',
    lecture: 11,
    color: '#06b6d4',
    keyConcepts: [
      {
        title: 'נאמנות — Fidelity',
        content: 'נאמנות מתארת עד כמה אב-טיפוס או מודל מייצג את המוצר הסופי מבחינת: פונקציונליות, עיצוב ויזואלי, אינטראקציה, תוכן. 3 רמות: נמוכה (Low-Fi — סקיצות), בינונית (Mid-Fi — wireframes), גבוהה (Hi-Fi — עיצוב מלא).',
        detailedContent: 'רמות נאמנות של אב טיפוס:\n• Low-Fi (סקיצות נייר) — מהיר, זול, מאפשר לבדוק רעיונות כלליים. לא יפה, לא אינטראקטיבי.\n• Mid-Fi (Wireframes) — מבנה המסכים, זרימה, אבל שחור-לבן וללא עיצוב גרפי.\n• Hi-Fi (Mockups) — נראה כמו הדבר האמיתי. כולל צבעים, פונטים, תמונות. יקר ואיטי לשינוי.',
        image: '/assets/fidelity-concept-1.png',
        examTip: 'במבחן: היתרון של Low-Fi הוא שאנשים מרגישים בנוח לתת ביקורת בונה ("זה רק סקיצה"). ב-Hi-Fi אנשים מתמקדים בפרטים ("הכפתור אדום מדי") ולא במהות.'
      },
      {
        title: 'MFH — היררכיית נאמנות המודל',
        content: 'Model Fidelity Hierarchy — מעבר הדרגתי ללא אובדן מידע מרעיון מופשט למודל בר-ביצוע. שלבים: (1) רעיון, (2) מודל קונספטואלי, (3) מודל חישובי, (4) הרצה ובדיקה. כל שלב חושף שגיאות חדשות.',
        detailedContent: 'גישה הדרגתית לפיתוח מודלים. במקום לקפוץ ישר לקוד (רמה 4), עוברים שלבים:\n1. רעיון מנטלי (בראש)\n2. מודל קונספטואלי (על הנייר/לוח)\n3. מודל מחשובי (סימולציה/קוד)\n4. מודל ולדילי (בדיקה מול המציאות)\nכל שלב חושף בעיות שלא ראינו בשלב הקודם.\n\nדוגמה — מערכת הזמנת מנות אוכל בקמפוס (Slide 414):\nשלב 1 — רעיון: "רוצים מערכת להזמנת אוכל"\nשלב 2 — מודל קונספטואלי: ישויות לקוח, מנה, הזמנה\nשלב 3 — מודל חישובי: מחיר סופי = מחיר בסיס × כמות + עמלה\nשלב 4 — הרצה עם ערכים: מחיר 40₪, עמלה 5₪, 3 הזמנות\n❌ גילוי שגיאה: האם העמלה 5₪ סה"כ או 5₪ לכרטיס? במודל המילולי זה לא היה ברור — רק ההרצה חשפה את הבעיה!\n\nדוגמה נוספת — מערכת כן נסע במטוס (Slide 405-406):\nבמודל OPM הוכנסו מספרים אמיתיים ← שני אובייקטים עם ערך 5 ← נוסחת חיסור נתנה 0 ← "האם עומס המשקל המירבי הוא 0?" ← טעות במספרים!',
        image: '/assets/fidelity-concept-2.png',
        examTip: 'העיקרון במבחן: אי אפשר לדלג באמת. אם דילגת על שלב המודל — השגיאות יתגלו בשלב הקידוד, שם תיקון עולה פי 100. דוגמת הזמנת אוכל: רק בהרצה (שלב 4) גילו שהעמלה מחושבת לא נכון!'
      },
      {
        title: 'Silver Box Testing',
        content: 'שילוב של בדיקות קופסה לבנה, שחורה ואפורה. כמה צוותים מפתחים את אותה פונקציונליות ואז מצליבים בדיקות — כל צוות בודק את המוצר של צוות אחר. חושף פערים בפרשנות.',
        detailedContent: 'שיטת בדיקה ייחודית שמשלבת פיתוח ובדיקות. N צוותים מקבלים אותו מפרט. כל צוות מפתח גרסה משלו (N גרסאות). לאחר מכן, כל צוות בודק את הגרסה של הצוות האחר (Cross Testing).\nהמטרה: למצוא אי-הבנות במפרט הדרישות. אם שני צוותים הבינו אחרת את המסמך — יש בעיה בדרישות, לא בקוד.\n\nדוגמה — מערכת הזמנת אוכל בקמפוס (Slide 415):\nהדרישה: "המערכת תאפשר להזמין מנות אוכל בקמפוס"\n• צוות א\' מפרש: המשתמש יכול להזמין אותה מנה מספר פעמים באותה הזמנה.\n• צוות ב\' מפרש: המשתמש יכול להזמין מנות שונות בהזמנה אחת.\n❌ בדיקת Silver Box: צוות א\' בודק את המערכת של צוות ב\' ומגלה שלא ניתן להזמין 3 פעמים את אותה מנה.\n→ 25% מהבדיקות נכשלו כי הפרשנות הייתה שונה!\n\nתוצאות ניסוי אקדמי (158 סטודנטים): 98 מתוך 131 בדיקות קבלה עברו (~74.8%). 25.2% נכשלו וחשפו שגיאות שהיו חומקות בבדיקות מסורתיות.',
        image: '/assets/fidelity-concept-3.png',
        examTip: 'במבחן: Silver Box נועד לחשוף "Ambiguity" (דו-משמעות) בדרישות. דוגמה: "להזמין מנות" — הזמנה של אותה מנה כמה פעמים? או מנות שונות? שני צוותים הבינו אחרת → 25% מהבדיקות נכשלו!'
      },
      {
        title: 'סוגי בדיקות',
        content: 'White Box — בדיקה פנימית עם גישה לקוד. Black Box — בדיקה חיצונית ללא ידע בקוד. Gray Box — שילוב עם ידע חלקי. Silver Box — פיתוח מקבילי + הצלבת בדיקות.',
        detailedContent: '• White Box (קופסה לבנה) — הבודק רואה את הקוד. בודק לוגיקה פנימית, כיסוי שורות.\n• Black Box (קופסה שחורה) — הבודק לא רואה קוד. בודק קלט/פלט, דרישות משתמש.\n• Gray Box (קופסה אפורה) — שילוב. ידע חלקי על המבנה (למשל סכמת DB) אבל בדיקה דרך הממשק החיצוני.',
        image: '/assets/fidelity-concept-4.png',
        examTip: 'במבחן: משתמש רגיל מבצע Black Box (הוא לא יודע מה קורה בפנים). מפתח שמריץ Unit Tests מבצע White Box.'
      }
    ],
    codeExamples: [],
    keyTerms: [
      { term: 'Low Fidelity', definition: 'נאמנות נמוכה — סקיצות ו-wireframes פשוטים' },
      { term: 'High Fidelity', definition: 'נאמנות גבוהה — עיצוב מלא הנראה כמו המוצר הסופי' },
      { term: 'MFH', definition: 'Model Fidelity Hierarchy — היררכיית נאמנות המודל' },
      { term: 'White Box', definition: 'בדיקה עם גישה מלאה לקוד הפנימי' },
      { term: 'Black Box', definition: 'בדיקה חיצונית ללא ידע בקוד' },
      { term: 'Silver Box', definition: 'פיתוח מקבילי + הצלבת בדיקות בין צוותים' }
    ]
  }
];

export default topics;
