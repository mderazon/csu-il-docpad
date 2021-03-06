### מטרת השיעור ###
  הדגמת אלגוריתמים בהם משתמשים לתזמון דיסקים קשיחים, ע"י משחקים.
<br><br>

**עזרים לשיעור:**
 1. סטופר או שעון למדידת זמנים
 2. מדבקות ממוספרות
 3. מדבקות עגולות (עדיף בצבע אדום), או לחלופין קרטונים גזורים בצורת משולש פיצה
 4. סלים (או כוסות חד פעמיים)
 5. כדורים (או מסטיקים)
 6. קופסא
 7. סוכריות
 8. אופציונאלי: דיסק קשיח

# הקדמה (מיועדת למדריכ/ה בלבד)#
## א. מבנה הדיסק הקשיח ##

הדיסק הקשיח הינו אמצעי לאחסון מידע. הדיסק מורכב ממספר פלטות אשר מחזיקות את המידע בפועל. הפלטות מחוברות יחדיו לציר מרכזי המחובר למנוע. בפינת הדיסק הקשיח מורכבים מספר ראשי קריאה/כתיבה הקוראים או
כותבים מידע לפלטות המסתובבות.
כל פלטה שומרת את המידע על מעגלים בעלי מרכז משותף הנקראים מסילות (sectors).
כל מסילה מתחלקת לחתיכות אף קטנות יותר הנקראות סקטורים. כל סקטור מחזיק מספר קבוע של בתים ובהם מידע. כל המסילות בעלות אותו קוטר בפלטות שונות נקראות
צילינדר.
<div id="container" align="center">
<img class="img-responsive" src="img01.png" />
<br>
</div>

## ב. תזמון דיסק קשיח ##
כדי לקרוא או לכתוב נתון מסוים, שולחים לזרוע את מספר המסילה, והיא נעה קדימה או אחורה עד למסילה המבוקשת. הדבר יכול לקחת בין 3 ל 4 אלפיות השנייה. בזמן הזה, בקשות נוספות מצטברות בדיסק הקשיח.
נשאלת השאלה: כיצד לטפל בבקשות הללו?

## ג. שלושה סוגי אלגוריתמים לתזמון דיסקים <br>
####(אותם נמחיש לחניכים ע"י משחקים)
1. <u>**F**irst **C**ome **F**irst **S**erved:</u><br>
הבקשות מטופלות עפ"י הסדר שלהן: בקשה שהגיעה
קודם, תטופל קודם.<br>
_יתרון:_ הוגנות. <br>
_חיסרון:_ אינה יעילה -  עלולה לגרור תזוזה מיותרת של הזרוע קדימה ואחורה, כאשר סדר
הבקשות הן של בקשות במיקומים שונים ומרוחקים בדיסק. בזמן זה יצטברו בקשות נוספות ויעילות הטיפול בהן תהייה נמוכה.
2. <u>**S**hortest **S**eek **T**ime **F**irst:</u><br>
הבקשות מטופלות עפ"י הקרבה שלהן למיקום הנוכחי: בכל פעם הזרוע תטפל בבקשה שנמצאת במסילה הקרובה ביותר לזו שהזרוע נמצאת בה כרגע.<br>
_יתרון:_ יעילות - הזרוע תזוז פחות וכך מהירות הטיפול   תהייה גבוהה יותר.<br>
_חסרונות:_ הרעבה - עלולה לקפח בצורה קיצונית חלק מהבקשות, שלעולם לא
יטופלו, כי תמיד ייכנסו לתור בקשות אחרות שקרובות מהן.
חוסר הוגנות - בקשות שהגיעו קודם תטופלנה הרבה אחרי בקשות מאוחרות.
3. <u> שיטת המעלית (SCAN): </u><br>
שיטה שמנסה לשלב יעילות והוגנות - הזרוע נעה רק בכיוון אחד בכל פעם: בהתחלה מבחוץ לבפנים, ומטפלת בבקשות הנוגעות למסילה הנוכחית. לאחר מכן נעה מבפנים לבחוץ. הדבר עובד בדומה לדרך בה מעלית עובדת: הזרוע של הדיסק היא כמו מעלית האוספת נוסעים בדרך למעלה, ואז בדרך למטה. בצורה הזו נמנעת הרעבה, כיוון שהמעלית (הזרוע) תגיע לכל קומה
(מסילה) ולא תקפח אף נוסע (בקשה).<br>
 _יתרונות:_ מניעת הרעבה, יעילות.<br>
 _חסרונות:_ קיימת בעיית הוגנות יחסית- אפליה לרעה של הבקשות במסלולים חיצוניים
(אם לדוגמא הזרוע תנוע 10 פעמים לבפנים ולבחוץ, אז היא תגיע למסילה הפנימית  ביותר 5 פעמים, אך לאמצעית 10 פעמים).
# מהלך השיעור #
## פעילות 1: משחק שליח הפיצה (sstf)##

יש לחלק את הכיתה ל-2 קבוצות, ולהעמידן כשתי שורות מקבילות, כאשר לכל תלמיד מדביקים מדבקה עם מספר סידורי (כמתואר במיצג 2). <br>החלוקה אמורה לדמות רחוב, בו כל תלמיד מהווה בית. בכל סיבוב, בוחרים <br>באחד מהתלמידים להיות "שליח הפיצה".
בכל סבב, המדריך רושם על הלוח רשימת הזמנות לפיצה לפי מספר בית. <br>על השליח לספק את הפיצה ע"י הדבקת מדבקה (בצבע אחר) על התלמיד הנכון. <br>הצעה: כדי לדמות שליח פיצה באופן מוחשי יותר, אפשר במקום להשתמש במדבקות, לחלק משולשי קרטון שידמו משולשי פיצה, או לחלופין לגזור מרובעים עם הכיתוב : "פיצה [שם בית הספר]" שידמו מגש פיצה.<br>
שיטת העבודה של השליח היא לספק פיצה לכתובת <u>שהכי קרובה אליו</u>, מבין רשימת ההזמנות. בכל סיבוב המדריך ימדוד את הזמן שלקח לכל שליח לבצע את ההזמנות, כאשר הוא מגביל את הזמן של כל סיבוב (על מנת להדגים הרעבה) וירשום את התוצאות על הלוח. יש לבצע לפחות שלושה סבבים על מנת להדגים את יתרונות וחסרונות השיטה.
<div id="container" align="center">
<img class="img-responsive" src="img02.png" />
<br>
</div>

 <br>סדרות של הזמנות לדוגמא, משמאל לימין:

* תמחיש חוסר הוגנות: 1 ,2 ,3 ,4 ,6 ,5 ,9 ,7 ,
8 ,10 ,9 ,11 ,20 ,22 ,2
<br>
* תמחיש יעילות: 23 ,21 ,19 ,17 ,15 ,13 ,11 ,
  9 ,7 ,5 ,3 ,1
<br>
* תמחיש הרעבה: 2,1 ... 1 ,2 ,1 ,2 ,1 ,3 ,4 ,6 ,7 ,5 ,4 ,2 ,3 ,1 ,6 ,4 ,2 ,24

### דיון ###
<u>שאלה:</u> האם קיימת בעייתיות בצורת העבודה הזאת?<br>
<u>שאלה:</u> האם כך עובד שליח פיצה במציאות? <br>
<u>תשובה:</u> לא! מדוע? כיוון שהשיטה הזו אינה הוגנת. יכול להיות שהאיש שהזמין פיצה ראשון,
יהיה האחרון לקבל את הפיצה. <br>
ציינו את העובדה שבאחד הסבבים יש מישהו שנשאר
"רעב" כיוון שהשליח כלל לא הספיק להגיע אליו.
<br>
<u>שאלה:</u> כיצד אתם חושבים שניתן לשפר את ההגינות?<br>
<u>תשובה:</u> על ידי טיפול בבקשות לפי סדר הגעתן.

## פעילות 2: תחרות כדורים בסלים (fcfs)##

יש לחלק את הכיתה ל- 2 קבוצות, כל קבוצה עומדת בטור. <br>מול כל קבוצה יש להניח טור של סלים ממוספרים (ניתן להשתמש גם בכוסות חד פעמיים). בכל סבב, מחלקים לנציג הראשון של כל קבוצה כדורים (ניתן להשתמש במסטיקים). המדריך רושם על הלוח מספרי סלים, ועל כל נציג לשים את הכדורים בסלים <u>לפי סדר הקריאות</u> שרשומות על הלוח. על שאר חברי הקבוצה לעזור לו ע"י הכוונה לאיזה סל הוא אמור לגשת בכל רגע. תוך כדי התחרות, המדריך מודד זמן. בסיום כל סבב רושמים את התוצאות על הלוח ומחליפים לנציג הבא.<br>
(הערה: במידה וישנם שני מדריכים ניתן לבצע את התחרות במקביל, אך במידה וישנו מדריך אחד בכיתה גדולה, על מנת למנוע המולה וניסיונות לרמות, ניתן לבצע את התחרות כך שבכל פעם יש ריצה של נציג מקבוצה אחת בלבד, ובסיום הסבב בא תורו של נציג מהקבוצה השנייה.)<br>
<div id="container" align="center">
<img class="img-responsive" src="img03.png" />
<br>
</div>

 <br>סדרות של כדורים לדוגמא, משמאל לימין:

* כל סדרה תמחיש הגינות
* סדרה שתמחיש חוסר יעילות : 30 ,90 ,50 ,77 ,48 ,79 ,45 ,83 ,42 ,90 ,70 ,30 ,99
(ובאופן כללי: כל סדרה בה כל זוג מספרים עוקבים הם
רחוקים אחד מהשני פיזית)

### דיון ###
<u>שאלה:</u> מה שיפרנו בהתייחס לשיטה הקודמת?<br>
<u>תשובה:</u> השיטה הזו יותר הוגנת, כיוון שהבקשות מתבצעות לפי סדר הגעתן.<br>
<u>שאלה:</u> האם בשיטה הזו נוצרת בעיה אחרת?<br>
<u>תשובה:</u> השיטה הזו יכולה להיות מאוד לא יעילה.<br>
מדוע? השיטה הזו עלולה לגרור תזוזה מיותרת של הנציג קדימה ואחורה, כאשר סדר הפעולות הן של סלים בקצוות מרוחקים אחד מהשני.
<br>
<u>שאלה לדיון:</u> כיצד ניתן לשפר את היעילות, אך בו בעת לדאוג להגינות?<br>
נראה זאת במשחק הבא.

## פעילות 3: חבילה עוברת   (scan)##

מושיבים את הכיתה בחצי מעגל, או בשורה ארוכה. מעבירים קופסא, ובה סוכריות, מסוף השורה להתחלתה וחוזר חלילה בקצב קבוע. כאשר המנחה קורא בשמו של חניך מסוים (אם ישנם הרבה תלמידים, ניתן גם לחלק מספרים כמו במשחק שליח הפיצה) – אותו חניך יכול לקחת סוכרייה מהקופסא כאשר היא תגיע אליו. על כל אחד מהחניכים לזכור כמה זמן עבר מהרגע שהקריאו בשמו ועד לרגע קבלת הסוכרייה. המטרה בכך שהם זוכרים כמה זמן עבר – להמחיש בהשוואה לשיטות קודמות כי הזמן שהם מחכים הוא יחסית סביר והוגן, וגם על מנת להסביר את בעיית ההוגנות היחסית בשלב הדיון. (הערה: כדי שכולם יהיו מרוצים, יש להקריא את השמות של כל החניכים, כך שכולם יקבלו סוכרייה).

### דיון ###
<u>שאלה:</u> מה ההבדל בין השיטה הזו לשיטות הקודמות?<br>
<u>שאלה:</u> אילו היבטים שיפרנו ביחס לשיטות קודמות?<br>
<u>תשובה:</u> בשיטה זו שילבנו בין יעילות להגינות.<br>
הסבירו לחניכים את הדמיון לשיטה בה מעלית עובדת.
<br>
<u>שאלה:</u> האם ניתן לשפר שיטה זו?<br>
<u>תשובה:</u> כן! בדומה למעלית, מספיק שהמעלית תנוע עד לקומה האחרונה שבה יש נוסעים
שמחכים לה. כל עוד אין נוסעים שמחכים לה בקומות עליונות יותר, היא יכולה לרדת חזרה  לקומות אחרות, ובכך לא לבזבז זמן מיותר על הגעה לקומות שאין בהם אנשים שמחכים לה
(לשיטה זו קוראים וריאציית look).
<br>
<u>שאלה:</u> האם ישנה בעיית הוגנות בשיטה הזו?<br>
<u>תשובה:</u> ישנה בעיית הוגנות יחסית. הוא מפלה לרעה את הבקשות שבקומות הגבוהות והנמוכות
ביחס לאלה שבאמצע. אם לדוגמא המעלית תנוע 10 פעמים לבפנים ולבחוץ, אז היא תגיע לקומה  העליונה ביותר 5 פעמים, אך לאמצעית 10 פעמים.<br>
<u>שאלה:</u> כיצד מומחשת בעיית ההוגנות היחסית בפעילות שביצענו?<br>
<u>תשובה:</u> כל חניך זכר כמה זמן עבר מרגע הקראת שמו ועד לרגע קבלת הסוכריה. התוצאה היא
ככל הנראה שהילדים שישבו במקומו הקיצוניים יותר חיכו זמן רב יותר, ואלו שבמקומות הפנימיים חיכו פחות.<br>
<u>שאלה:</u> האם ישנה דרך לשפר את בעיית ההוגנות בשיטת המעלית?<br>
<u>תשובה:</u>  שיפור נוסף, שגם הוא נמצא בעולם המעליות, הוא בכך שכאשר המעלית מגיעה לקומה
העליונה ביותר, היא תרד ישירות לקומת הקרקע בלי לעצור ותתחיל בעלייה מחדש. אם נוסעים  ישירות מהקומה האחרונה לראשונה, הדבר מהיר בהרבה מאשר עם ירידה עם עצירות ביניים. במצב כזה נשמרת ההגינות בין הקומות העליונות לבין הקומות המרכזיות
(וריאציה זו נקראת circular scan).
<br>

## פעילות 4: פעילות מסכמת ##
חלק/י את הכיתה לשלוש קבוצות.
<br>
קבוצה 1 – תפעל לפי שיטת שליח הפיצה (sstf) – לפי כללי המשחק הראשון
<br>
קבוצה 2 – תפעל לפי שיטת כדורים בסלים (fcfs) – לפי כללי המשחק השני
<br>
קבוצה 3 – תפעל לפי אלגוריתם המעלית
<br>
בכל קבוצה ייבחר נציג. לכל תלמיד בקבוצה יחולק מספר סידורי ע"י מדבקות.
על המדריך לתת לנציג מספר פתקים כמספר הנציגים בקבוצה, כאשר בכל פתק כתובה מילה ומספר סידורי. כעת על הנציגים להעביר את הפתקים לכל תלמיד בקבוצה שלהם עם המספר הסידורי התואם את הפתק, אך לפי האלגוריתם שהוגדר לקבוצה הספציפית של הנציג!
<br>
כאשר השליח מסיים להעביר את הפתקים שהיו בידו, הוא יסמן למדריך, והמדריך יכתוב על הלוח את הישגי הנציגים מבחינת זמנים.
<br>
לאחר שכל הפתקים חולקו, כל קבוצה תצטרך לנסות ולהרכיב את השיר המתאים שאמור להתקבל מרצף הפתקים.
<br>
הערה חשובה: על המדריך לדעת מראש כמה תלמידים יהיו בכל קבוצה ולהכין שיר ומספר פתקים בהתאם. רצץ המילים ירכיב שורה משיר מפורסם, שמוכר לתלמידים.

# סיכום #
ניתן לבצע סיכום על הלוח של יתרונות וחסרונות השיטות שהודגמו במשחקים ע"י טבלה:
<br>
<div id="container" align="center">
<img class="img-responsive" src="img04.png" />
<br>
</div>

# הקשר לעולם המחשוב (אופציונאלי)#
במידה והחניכים מתעניינים בקשר של השיעור לעולם המחשבים, או במידה ונשאר זמן ורוצים להרחיב בנושא: כדאי לשאול
את החניכים האם הם מכירים את המושג דיסק קשיח? האם הם יודעים מהו תפקידו של הדיסק הקשיח?
<br>
אפשר להסביר בקצרה שהדיסק הקשיח הוא הכונן בו אנו שומרים את המידע שלנו. לאחר מכן, ניתן להציג בפני הכיתה את סעיפי ההקדמה של המערך , העוסקים במבנה הדיסק הקשיח, תוך כדי הצגת התמונות או ציור מבנה הדיסק הקשיח על הלוח. לאחר מכן להסביר בקצרה על תזמון הבקשות של דיסקים קשיחים.
<br>
על מנת להמחיש את ההיכרות עם הדיסק הקשיח מהמחשב הביתי, נזכיר לחניכים שהרציונל הוא שהמידע בדיסק לא יהיה מפוזר על מנת שלא להזיז את הראש הקורא/כותב יותר מדי. כיוון
שמערכת ההפעלה ( כדאי לומר windows עבור תלמידים שאינם יודעים מה היא מערכת הפעלה), מעוניינת שהדיסק הקשיח יפעל באופן אופטימלי, היא מבקשת מדי פעם לבצע איחוי דיסק, או מבצעת אותו באופן אוטומטי אחת לכמה זמן. אותו תהליך של איחוי דיסק ממקם את הקבצים בדיסק מחדש בצורה שבה יהיו רציפים, מה שממזער את תזוזת הראש הקורא כותב ובכך מפחית את משך הזמן של כתיבת וקריאת נתונים מהדיסק.
<br>
במידה והכיתה היא ברמה גבוהה, אפשר להשליך את השיטות שבהן השתמשנו במשחקים השונים על פעולת הדיסק הקשיח. אפשרות נוספת היא להביא לכיתה דיסק קשיח ולהעביר בין החניכים להתרשמות.
<br>
הערה: את חלק זה ניתן לבצע בכמה וריאציות:
<br>
* הסבר על מבנה הדיסק הקשיח בתחילת השיעור, ולאחר מכן בסיום כל פעילות הסבר על
יישום השיטה בדיסק הקשיח
* העברת החלק רק בסוף השיעור
