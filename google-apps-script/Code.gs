/**
 * ===================================================================
 * MARKETING VALA - GOOGLE APPS SCRIPT WEB APP FOR LEAD CAPTURE
 * ===================================================================
 * 
 * Target Google Sheets Columns (Row 1):
 * [Lead ID, Timestamp, Name, Phone, Email, Company, Service, Source, Status, Notes]
 * 
 * Deployment Instructions:
 * 1. Open Google Sheets (https://sheets.new) and name it "Marketing Vala Leads".
 * 2. Click "Extensions" > "Apps Script".
 * 3. Replace all default code with the contents of this file (Code.gs).
 * 4. Click "Deploy" > "New deployment".
 * 5. Select type: "Web app".
 * 6. Execute as: "Me" (your Google account).
 * 7. Who has access: "Anyone" (allows website form POST submissions).
 * 8. Click "Deploy", authorize permissions, and copy the Web App URL.
 * 9. Paste that URL into /assets/js/config.js as `googleAppsScriptUrl: "YOUR_URL_HERE"`.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000); // 10 second lock to prevent concurrent write collisions

  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Auto-initialize headers if sheet is empty
    ensureHeaders(sheet);

    // Parse incoming payload
    var data = {};
    if (e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (jsonErr) {
        // Fallback for form-encoded payloads
        data = e.parameter || {};
      }
    } else if (e.parameter) {
      data = e.parameter;
    }

    // Extract values matching required column order:
    // Lead ID, Timestamp, Name, Phone, Email, Company, Service, Source, Status, Notes
    var leadId = data.leadId || ("MV-" + new Date().getTime());
    var timestamp = data.timestamp || new Date().toISOString();
    var name = data.name || "";
    var phone = data.phone || "";
    var email = data.email || "";
    var company = data.company || "";
    var service = data.service || "";
    var source = data.source || "Marketing Vala Website";
    var status = data.status || "New Lead";
    var notes = data.notes || "";

    // Append to sheet
    sheet.appendRow([
      leadId,
      timestamp,
      name,
      phone,
      email,
      company,
      service,
      source,
      status,
      notes
    ]);

    // Send optional email notification to the agency admin
    try {
      var recipient = "marketingvala.in@gmail.com";
      var subject = "🚀 New Lead: " + name + " (" + service + ") - Marketing Vala";
      var body = "You have received a new consultation enquiry on Marketing Vala website:\n\n" +
                 "Lead ID: " + leadId + "\n" +
                 "Name: " + name + "\n" +
                 "Phone: " + phone + "\n" +
                 "Email: " + email + "\n" +
                 "Company: " + company + "\n" +
                 "Service: " + service + "\n" +
                 "Notes / Requirements: " + notes + "\n\n" +
                 "Google Sheet: " + SpreadsheetApp.getActiveSpreadsheet().getUrl();
      
      MailApp.sendEmail(recipient, subject, body);
    } catch (mailErr) {
      Logger.log("Email notification skipped: " + mailErr.toString());
    }

    // Return standard JSON success response
    var output = ContentService.createTextOutput(JSON.stringify({
      status: "success",
      leadId: leadId,
      timestamp: timestamp,
      message: "Lead successfully recorded to Marketing Vala Google Sheets."
    }));
    output.setMimeType(ContentService.MimeType.JSON);
    return output;

  } catch (error) {
    var errorOutput = ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    }));
    errorOutput.setMimeType(ContentService.MimeType.JSON);
    return errorOutput;

  } finally {
    lock.releaseLock();
  }
}

/**
 * Health check endpoint for testing Web App availability
 */
function doGet(e) {
  var output = ContentService.createTextOutput(JSON.stringify({
    status: "online",
    service: "Marketing Vala Lead Capture API",
    timestamp: new Date().toISOString()
  }));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}

/**
 * Ensures Row 1 contains the 10 required columns
 */
function ensureHeaders(sheet) {
  var headers = [
    "Lead ID",
    "Timestamp",
    "Name",
    "Phone",
    "Email",
    "Company",
    "Service",
    "Source",
    "Status",
    "Notes"
  ];

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
    var headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setBackground("#0E0E13");
    headerRange.setFontColor("#E5B869");
    headerRange.setFontWeight("bold");
    sheet.setFrozenRows(1);
  }
}
