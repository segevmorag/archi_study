
# מדריך העלאת הפרויקט ל-GitHub

מכיוון שסביבת העבודה הנוכחית לא זיהתה התקנה של Git, הכנתי לך מדריך פשוט לביצוע הפעולה בעצמך.

## שלב 1: בדיקת התקנת Git
פתח את הטרמינל (ב-VS Code או Cmd) והקלד:
```bash
git --version
```
אם אתה רואה גרסה (למשל `git version 2.x`), מעולה! דלג לשלב 2.
אם אתה רואה שגיאה שהפקודה לא מזוהה, עליך להתקין את Git:
- [הורדת Git לווינדוס](https://git-scm.com/download/win)
- התקן את התוכנה (Next, Next...) ופתח מחדש את הטרמינל.

## שלב 2: הכנת התיקייה
כבר דאגתי לנקות קבצים מיותרים ולוודא שקובץ `.gitignore` תקין (כדי לא להעלות את `node_modules` הכבד).

## שלב 3: הפקודות בטרמינל
הרץ את הפקודות הבאות אחת אחרי השנייה בתיקיית הפרויקט:

1. **אתחול המאגר:**
   ```bash
   git init
   ```

2. **הוספת כל הקבצים:**
   ```bash
   git add .
   ```

3. **שמירת הגרסה הראשונה:**
   ```bash
   git commit -m "Initial commit - Architecture Study App"
   ```

## שלב 4: יצירת מאגר ב-GitHub
1. היכנס ל-[GitHub.com](https://github.com) והתחבר לחשבונך.
2. לחץ על כפתור **New** (או ה-`+` למעלה) כדי ליצור מאגר חדש (Repository).
3. תן לו שם (למשל `architecture-study-app`).
4. אל תסמן שום V (אל תוסיף README או gitignore בשלב זה, כבר יש לנו).
5. לחץ **Create repository**.

## שלב 5: חיבור והעלאה
במסך שנוצר ב-GitHub, העתק את 3 הפקודות תחת הכותרת **…or push an existing repository from the command line**.
הן ייראו בערך ככה (החלף את ה-URL בשלך):

```bash
git remote add origin https://github.com/YOUR_USER/architecture-study-app.git
git branch -M main
git push -u origin main
```

הדבק אותן בטרמינל שלך ולחץ Enter.

---

### 💡 טיפ ללינקדאין
לאחר ההעלאה, הקישור למאגר יהיה:
`https://github.com/YOUR_USER/architecture-study-app`

בפוסט בלינקדאין כדאי להוסיף:
- **צילום מסך** יפה של האפליקציה (מהעמוד הראשי וה-Masterclass).
- תיאור קצר: "פיתחתי אפליקציה ללימוד ארכיטקטורת תוכנה עם React, הכוללת סימולציות אינטראקטיביות, מצבי מבחן ותרגול, ודף נוסחאות חכם."
- קישור ל-Repo.
- (אופציונלי) אם תרצה, אפשר גם להעלות את האתר ל-GitHub Pages בחינם כדי שכולם יוכלו להשתמש בו ממש! (חפש בגוגל "Deploy React Vite to GitHub Pages").
