function Importcontacts() {
    Logger.log('trigger import')
    var contacts = ContactsApp.getContacts(); // Fetches contact list of group 
    var ss = SpreadsheetApp.getActiveSpreadsheet(); //Get currently Active sheets 
    var sheet = ss.getSheets()[0]; //Get first from active sheets list 

    clearSheet(sheet);

    sheet.appendRow(['id', 'Display Name', 'Given Name', 'Last Name', 'Email Address']); // Creating Header
    for (var i in contacts) {
        var contact = contacts[i];
        var id = contact.getId(); //get contact id
        var displayName = contact.getFullName(); // gets full name of contact 
        var givenName = contact.getGivenName(); // gets given name of contact 
        var lastName = contact.getFamilyName(); // gets family anme name of contact 
        var emails = contact.getEmails(); //get emailid of contact 
        var emailList = [];
        for (email in emails) {
            emailList.push(emails[email].getAddress());
        }
        var contactData = [id, displayName, givenName, lastName, emailList[0]];
        sheet.appendRow(contactData); // append contact data to active sheet 
        var lastRow = sheet.getLastRow();
        var range = sheet.getRange(lastRow, contactData.length + 1); // getRange() can take 'A1' notation or (row, column) for a single cell
        //        range.setFormula(`=editContact(${id})`);
    }
}