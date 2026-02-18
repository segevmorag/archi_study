
export const concurrencyLessons = [
    {
        id: 'gil',
        title: 'The Python GIL (Global Interpreter Lock)',
        level: 'Basic',
        content: `
### למה פייתון לא "באמת" מקבילי?
ב-CPython (המימוש הסטנדרטי של פייתון), קיים מנגנון בשם **GIL**.
זהו מנעול גלובלי שמונע משני Threads להריץ Bytecode של פייתון **בו-זמנית** באותו Process.

**המשמעות:**
גם אם יש לך מעבד עם 16 ליבות, תוכנית פייתון אחת (Process אחד) תשתמש תמיד ב-**100% מליבה אחת בלבד**, גם אם תפתח 1000 Threads.

### אז למה להשתמש ב-Threads?
1. **I/O Bound Tasks**: כשהתוכנית מחכה לרשת, לדיסק או למסד נתונים, ה-GIL משוחרר! בזמן הזה, חוטים אחרים יכולים לרוץ.
2. **User Interface**: כדי שהממשק לא יקפא בזמן חישוב ברקע.
        `,
        code: {
            language: 'python',
            title: 'CPU Bound vs IO Bound',
            content: `import threading
import time

# CPU Bound: המעבד עובד קשה (מושפע מה-GIL)
def cpu_task():
    count = 0
    for _ in range(10**7):
        count += 1

# IO Bound: המתנה (לא מושפע מה-GIL)
def io_task():
    time.sleep(2) # ה-GIL משוחרר כאן!

# הרצת משימת CPU במקביל - לא תיתן שיפור ביצועים משמעותי
t1 = threading.Thread(target=cpu_task)
t2 = threading.Thread(target=cpu_task)
t1.start(); t2.start()
`
        }
    },
    {
        id: 'race-condition',
        title: 'Race Conditions (מרוץ תהליכים)',
        level: 'Basic',
        content: `
### כשדברים משתבשים
**Race Condition** קורה כששני חוטים מנסים לשנות משאב משותף בו-זמנית, והתוצאה תלויה ב"מי יגיע קודם" או איך המעבד מחלק את הזמן.

בדוגמה משמאל, הפעולה \`x += 1\` נראית אטומית, אבל למעשה היא מורכבת מ-3 פעולות מכונה:
1. **Load**: קריאת הערך של x לזיכרון המעבד.
2. **Add**: הוספת 1.
3. **Store**: שמירת הערך החדש ב-x.

אם ה-Context Switch קורה באמצע (אחרי Load ולפני Store), החוט השני יקרא ערך ישן, ושני החוטים יכתבו את **אותו ערך** במקום לקדם פעמיים.
        `,
        code: {
            language: 'python',
            title: 'The Famous "x += 1" Bug',
            content: `import threading

x = 0

def increment():
    global x
    for _ in range(1000000):
        # לא בטוח! (Not Thread-Safe)
        x += 1 

threads = [threading.Thread(target=increment) for _ in range(2)]
for t in threads: t.start()
for t in threads: t.join()

print(f"Final x: {x}") 
# ציפייה: 2,000,000
# תוצאה בפועל: 1,452,321 (משתנה כל ריצה!)
`
        }
    },
    {
        id: 'lock',
        title: 'Locks (מנעולים)',
        level: 'Basic',
        content: `
### הפתרון: Lock (Mutex)
כדי למנוע Race Condition, אנו משתמשים ב-**Lock**.
בלוק קוד שמוגן ע"י Lock נקרא **Critical Section**.

רק חוט אחד יכול להחזיק את המנעול ברגע נתון.
אם חוט אחר מנסה לנעול (\`acquire\`) מנעול תפוס, הוא **נכנס להמתנה (Block)** עד שהמנעול ישוחרר (\`release\`).

**Context Manager:**
בפייתון מומלץ להשתמש ב-\`with lock:\` שדואג לעשות \`acquire\` בכניסה ו-\`release\` ביציאה (גם אם הייתה שגיאה).
        `,
        code: {
            language: 'python',
            title: 'Fixing with threading.Lock',
            content: `import threading

x = 0
lock = threading.Lock() # יצירת מנעול

def increment_safe():
    global x
    for _ in range(1000000):
        # כניסה לקטע קריטי
        with lock:
            x += 1
        # המנעול משוחרר אוטומטית כאן

threads = [threading.Thread(target=increment_safe) for _ in range(2)]
for t in threads: t.start()
for t in threads: t.join()

print(f"Final x: {x}") # תוצאה: 2,000,000 (מובטח!)
`
        }
    },
    {
        id: 'rlock',
        title: 'RLock (Reentrant Lock)',
        level: 'Advanced',
        content: `
### הבעיה עם Lock רגיל
אם חוט מחזיק ב-Lock ומנסה לנעול אותו **שוב** (למשל, בפונקציה רקורסיבית או בקריאה לפונקציה פנימית שגם נועלת), הוא ייתקע לנצח (**Deadlock עצמי**).

### הפתרון: RLock
**Reentrant Lock** מאפשר לאותו חוט לנעול את המנעול מספר פעמים.
הוא סופר כמה פעמים בוצעה נעילה, ומשתחרר רק כשהמונה מגיע ל-0 (כלומר, אותו מספר שחרורים).

זה שימושי מאוד במחלקות מורכבות, כשיש מתודה ציבורית שנועלת, וקוראת למתודה פרטית שצריכה גם היא הגנה אם קוראים לה בנפרד.
        `,
        code: {
            language: 'python',
            title: 'RLock allowing recursive locking',
            content: `import threading

class SafeList:
    def __init__(self):
        self.items = []
        self.lock = threading.RLock() # RLock במקום Lock

    def add(self, item):
        with self.lock:
            self.items.append(item)

    def add_many(self, items):
        with self.lock: # נעילה ראשונה
            for item in items:
                self.add(item) # נעילה שנייה (באותו חוט!)
                # עם Lock רגיל, היינו נתקעים כאן ב-Deadlock

my_list = SafeList()
my_list.add_many([1, 2, 3])
`
        }
    },
    {
        id: 'producer-consumer',
        title: 'Producer-Consumer & Queue',
        level: 'Advanced',
        content: `
### התבנית הנפוצה ביותר
במקום לנהל מנעולים ידנית, הדרך הטובה ביותר לתקשר בין חוטים היא באמצעות **תור (Queue)**.

**מודל יצרן-צרכן:**
*   **Producers**: מייצרים משימות ושמים בתור.
*   **Consumers**: לוקחים משימות מהתור ומבצעים אותן.

מודול \`queue.Queue\` בפייתון הוא **Thread-Safe** לחלוטין. הוא מטפל בנעילות בפנים, וחוסם את הצרכן אם התור ריק (במקום שיצרוך CPU בבדיקות חוזרות).
        `,
        code: {
            language: 'python',
            title: 'Thread-Safe Queue',
            content: `import threading
import queue
import time

q = queue.Queue()

def producer():
    for i in range(5):
        print(f"Producing {i}")
        q.put(i) # הכנסה לתור
        time.sleep(0.5)

def consumer():
    while True:
        item = q.get() # חוסם אם התור ריק!
        if item is None: break # סימן יציאה
        print(f"Consuming {item}")
        q.task_done()

t1 = threading.Thread(target=consumer)
t1.start()

producer()
q.put(None) # Signal to stop
t1.join()
`
        }
    },
    {
        id: 'events',
        title: 'Thread Signaling (Events)',
        level: 'Advanced',
        content: `
### סנכרון ותיאום
לפעמים חוט אחד צריך "להודיע" לחוט אחר שמשהו קרה (למשל: "האתחול הסתיים, אפשר להתחיל לעבוד").

**threading.Event**:
אובייקט פשוט שמחזיק דגל (Flag).
*   \`wait()\` - חוסם את החוט עד שהדגל הופך ל-True.
*   \`set()\` - מרים את הדגל (משחרר את כל מי שמחכה).
*   \`clear()\` - מוריד את הדגל.

זה יעיל יותר מ-Busy Wait (לולאת while שמבזבזת מעבד).
        `,
        code: {
            language: 'python',
            title: 'Waiting for Event',
            content: `import threading
import time

start_event = threading.Event()

def runner(name):
    print(f"{name} waiting at starting line...")
    start_event.wait() # החוט נעצר כאן
    print(f"{name} GO!")

t1 = threading.Thread(target=runner, args=("Bolt",))
t2 = threading.Thread(target=runner, args=("Blake",))

t1.start(); t2.start()

print("Ready...")
time.sleep(2)
print("Set...")
start_event.set() # משחרר את כולם בבת אחת!
`
        }
    },
    {
        id: 'futures',
        title: 'Modern Concurrency (Futures)',
        level: 'Expert',
        content: `
### העתיד כבר כאן
המודול \`concurrent.futures\` מציע רמת הפשטה גבוהה יותר מ-\`threading\`.
במקום ליצור חוטים ידנית (\`t.start\`, \`t.join\`), אנחנו משתמשים ב-**Executor**.

**ThreadPoolExecutor**:
מנהל מאגר (Pool) של חוטים. אתה זורק משימות (\`submit\`), והוא דואג להקצות להן חוט פנוי.

**יתרונות:**
1. שימוש חוזר בחוטים (חוסך overhead של יצירה).
2. ממשק נקי יותר.
3. קבלת ערך החזרה מהפונקציה (מה שקשה לעשות עם \`Thread\` רגיל).
        `,
        code: {
            language: 'python',
            title: 'ThreadPoolExecutor',
            content: `from concurrent.futures import ThreadPoolExecutor
import time

def square(n):
    time.sleep(1)
    return n * n

# יצירת מאגר של 2 חוטים
with ThreadPoolExecutor(max_workers=2) as executor:
    # שליחת משימות
    future1 = executor.submit(square, 5)
    future2 = executor.submit(square, 10)
    
    # קבלת תוצאות (נחסם עד שמוכן)
    print(f"Result 1: {future1.result()}")
    print(f"Result 2: {future2.result()}")

# החוטים מנוהלים ונסגרים אוטומטית בסוף הבלוק
`
        }
    },
    {
        id: 'daemon',
        title: 'Daemon Threads (חוטי רקע)',
        level: 'Expert',
        content: `
### חוטים שלא עוצרים את התוכנית
כברירת מחדל, תוכנית פייתון לא מסתיימת עד ש**כל** החוטים מסתיימים.

**Daemon Thread**:
חוט שרץ ברקע (כמו Service/Agent). אם התוכנית הראשית מסתיימת, ה-Daemon נהרס מיידית, גם אם הוא באמצע עבודה.

**שימושים:**
*   Heartbeat signals.
*   Garbage Collection.
*   שמירה אוטומטית (Auto-save).
        `,
        code: {
            language: 'python',
            title: 'Daemon vs Non-Daemon',
            content: `import threading
import time
import sys

def background_task():
    while True:
        print("Daemon heartbeat...")
        time.sleep(0.5)

# יצירת חוט Daemon
t = threading.Thread(target=background_task, daemon=True)
t.start()

time.sleep(2)
print("Main program exiting!")
# התוכנית תסתיים כאן, והחוט t ייהרג מיידית.
# ללא daemon=True, התוכנית הייתה נתקעת לנצח.
`
        }
    }
];

export default concurrencyLessons;
