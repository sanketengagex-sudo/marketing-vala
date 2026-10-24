# Marketing Vala - Google Sheets Lead Capture Integration

This directory contains the Google Apps Script (`Code.gs`) that automatically logs website inquiries into your Google Spreadsheet.

---

## Required Google Sheets Columns
Your spreadsheet will have the following 10 columns in Row 1:

1. **Lead ID** (Unique identifier, e.g. `MV-M39K4F-2940`)
2. **Timestamp** (ISO Date and Time of submission)
3. **Name** (Client's full name)
4. **Phone** (Client's contact number)
5. **Email** (Client's email address)
6. **Company** (Business / Organization name)
7. **Service** (Selected service of interest)
8. **Source** (`Marketing Vala Website Form`)
9. **Status** (`New Lead`)
10. **Notes** (Client project requirements & message)

---

## English Setup Instructions (Step-by-Step)

1. Open [Google Sheets](https://sheets.new) in your web browser.
2. Title the sheet: `Marketing Vala - Lead Pipeline`.
3. In the top menu, click **Extensions** > **Apps Script**.
4. Delete any code currently in `Code.gs` and copy-paste the entire code from [`Code.gs`](./Code.gs).
5. Click the floppy disk icon or press `Ctrl + S` to save the project.
6. Click the blue **Deploy** button (top right) > **New deployment**.
7. In the left panel, click the gear icon ⚙️ next to "Select type" and choose **Web app**.
8. Fill in:
   - **Description**: `Marketing Vala Lead Capture API`
   - **Execute as**: `Me (your_email@gmail.com)`
   - **Who has access**: `Anyone` *(Crucial: allows the website form to submit leads without requiring visitors to sign in to Google)*
9. Click **Deploy**.
10. If prompted with "Authorization required", click **Review Permissions**, choose your Google account, click **Advanced**, and then click **Go to Untitled project (unsafe)** to allow access.
11. Copy the **Web app URL** (starts with `https://script.google.com/macros/s/.../exec`).
12. Open `assets/js/config.js` in your project folder, and paste your URL into:
    ```javascript
    googleAppsScriptUrl: "https://script.google.com/macros/s/AKfycb.../exec",
    ```
13. Save the file. Your website form is now 100% connected to Google Sheets!

---

## मराठीत सोप्या सूचना (Marathi Beginner-Friendly Instructions)

### Google Sheets मध्ये लीड्स आपोआप सेव्ह कसे करायचे?

1. तुमच्या ब्राऊझरमध्ये [Google Sheets (sheets.new)](https://sheets.new) उघडा.
2. शीटला नाव द्या: **Marketing Vala - Lead Pipeline**.
3. वरच्या मेनूमधून **Extensions** वर क्लिक करा आणि नंतर **Apps Script** निवडा.
4. तिथला आधीचा कोड काढून टाका आणि या फोल्डरमधील `Code.gs` फाईलचा संपूर्ण कोड कॉपी करून तिथे पेस्ट (Paste) करा.
5. वरच्या सेव्ह (Save - Ctrl+S) बटनावर क्लिक करा.
6. उजव्या कोपऱ्यात असलेल्या निळ्या रंगाच्या **Deploy** बटनावर क्लिक करा > **New deployment** निवडा.
7. डाव्या बाजूला ⚙️ गियर आयकॉनवर क्लिक करून **Web app** निवडा.
8. खालील सेटिंग्ज निवडा:
   - **Execute as**: **Me** (तुमचा गुगल ईमेल)
   - **Who has access**: **Anyone** (कोणीही - जेणेकरून वेबसाईटवरून येणारी चौकशी गुगल शीटमध्ये सेव्ह होईल)
9. **Deploy** वर क्लिक करा.
10. गुगल परवानगी (Authorization) मागेल, तेव्हा:
    - **Review Permissions** वर क्लिक करा.
    - तुमचा गुगल ईमेल निवडा.
    - **Advanced** वर क्लिक करा.
    - **Go to Untitled project (unsafe)** वर क्लिक करा आणि **Allow** करा.
11. आता तुम्हाला **Web app URL** मिळेल (ही लिंक `https://script.google.com/macros/s/.../exec` अशी असते). ती कॉपी करा.
12. तुमच्या प्रोजेक्टमधील `assets/js/config.js` फाईल उघडा आणि तिथे `googleAppsScriptUrl` मध्ये ही लिंक पेस्ट करा:
    ```javascript
    googleAppsScriptUrl: "तुमची_कॉपी_केलेली_वेब_अ‍ॅप_लिंक",
    ```
13. फाईल सेव्ह करा. आता तुमच्या वेबसाईटवरून येणारा प्रत्येक लीड थेट तुमच्या गुगल शीटमध्ये जमा होईल!
