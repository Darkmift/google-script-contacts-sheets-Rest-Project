//function onOpen() {
//    var ui = SpreadsheetApp.getUi();
//    ui.createMenu('Contacts')
//        .addItem('show Groups', 'showContactGroups')
//        .addItem('add Contact', 'addContact')
//        .addItem('Get all contacts', 'Importcontacts')
//         .addItem('Set Trigger', 'setTrigger')
//        .addToUi();
//}
//
//function setTrigger(){
//  var triggers = ScriptApp.getProjectTriggers();
//  for (var i=0;i<triggers.length;i++) {
//    ScriptApp.deleteTrigger(triggers[i]);
//  }
//  ScriptApp.newTrigger("performFunction").forSpreadsheet(SpreadsheetApp.getActiveSpreadsheet()).onEdit().create();
//}
//
//function performFunction() {
//    var ss = SpreadsheetApp.getActiveSpreadsheet();
//    var aSheet = ss.getActiveSheet();
//    var aSheetName = aSheet.getName();
//    var aCell = aSheet.getActiveCell();
//    var aRow = aCell.getRow();
//    
//    if(aSheetName == "" && aRow > 1){
//      var contactId = aSheet.getRange("A"+aRow).getDisplayValue();
//      
//      if(contactId == ""){
//       Logger.log("Contact Id is empty. Contact can't be added");
//       var ui = SpreadsheetApp.getUi();
//       ui.alert("Contact Id is empty in A column. Contact can't be added. Please check and try again.");
//       return;
//      }
//      
//      var givenName = aSheet.getRange("B"+aRow).getDisplayValue();
//      var familyName = aSheet.getRange("C"+aRow).getDisplayValue();
//      var email = aSheet.getRange("D"+aRow).getDisplayValue();
//      
//      //Getting contact by Id and updating saved fields
//      var contact = ContactsApp.getContactById(contactId);
//      contact.setGivenName(givenName);
//      contact.setFamilyName(familyName);
//      contact.addEmail("Home", email);
//    }
//
//}
//
////Backup of client's code
//function backup_onEditFunction(e) {
//    var range = e.range;
//    var col = range.getColumn();
//    var row = range.getRow()
//    var a1note = range.getA1Notation();
//    var value = range.getValue();
//    var id = range.offset(0, 1 - col).getValue();
//
//    Logger.log(col);
//    Logger.log(row);
//    Logger.log(a1note);
//    Logger.log(value);
//    Logger.log(range.offset(0, 1 - col).getValue());
//    
//    var contacts = ContactsApp.getContacts(); 
//    Logger.log(contacts[0].getEmails()[0].getAddress())
//    
//    for (var i in contacts) {
//      Logger.log(contacts[i].setGivenName(givenName));
//    }
//}
//
//function Importcontacts() {
//    Logger.log('trigger import')
//    var contacts = ContactsApp.getContacts(); // Fetches contact list of group 
//    var ss = SpreadsheetApp.getActiveSpreadsheet(); //Get currently Active sheets 
//    var sheet = ss.getSheets()[0]; //Get first from active sheets list 
//
//    clearSheet(sheet);
//
//    sheet.appendRow(['id', 'Full Name', 'Email Address']); // Creating Header
//    for (var i in contacts) {
//        var contact = contacts[i];
//        var id = contact.getId(); //get contact id
//        var fullname = contacts[i].getFullName(); // gets full name of contact 
//        var emails = contacts[i].getEmails(); //get emailid of contact 
//        var emailList = [];
//        for (email in emails) {
//            emailList.push(emails[email].getAddress());
//        }
//        var contactData = [id, fullname, emailList[0]];
//        sheet.appendRow(contactData); // append contact data to active sheet 
//        var lastRow = sheet.getLastRow();
//        var range = sheet.getRange(lastRow, contactData.length + 1); // getRange() can take 'A1' notation or (row, column) for a single cell
////        range.setFormula(`=editContact(${id})`);
//    }
//}
//
//function editContact(e) {
//    Logger.log(e)
//}
////function editContact(Contact) {
////    // var contact2 = ContactsApp.getContactsByName('firstname2 lastname2')
////    for (var i in Contact) {
////        contact2[i].setFamilyName('Doe-Smith');
////    }
////}
//
//function clearSheet(sheet) {
//    sheet.clearContents()
//}
//
//////////////
//
//function showContactGroups() {
//    var groups = ContactsApp.getContactGroups();
//    var str = 'Groups\n';
//    for (var g = 0; g < groups.length; g++) {
//        str += '\n' + groups[g].getName()
//
//    }
//
//    showOutputBox(str, 'Your Contact Groups');
//}
//
//
//function addContact() {
//    var sheet = SpreadsheetApp.getActiveSheet();
//    var cell = sheet.getActiveCell();
//    var active_row = cell.getRow();
//    var range = sheet.getDataRange();
//
//    var first_name = range.getCell(active_row, 2).getValue();
//    var last_name = range.getCell(active_row, 3).getValue();
//    var email = range.getCell(active_row, 4).getValue();
//
//
//    var contact = ContactsApp.createContact(first_name, last_name, email);
//
//    var mainGroup = ContactsApp.getContactGroup("System Group: My Contacts");
//
//    mainGroup.addContact(contact);
//
//    //var id = contact.getId();
//
//    var emails_ret = contact.getEmails();
//    var email_ret = emails_ret[0].getAddress();
//    
//    sheet.getRange("A"+active_row).setValue(contact.getId());
//
//    showOutputBox('first name |' + first_name + '| \nlast name |' + last_name + '| \nemail |' + email + '\n emailret ' + email_ret, "added contact");
//
//}
//
//function showOutputBox(str, title) {
//    var html = HtmlService.createHtmlOutput('<pre>' + str + '</pre>')
//        .setWidth(400)
//        .setHeight(300);
//
//    SpreadsheetApp.getUi()
//        .showModalDialog(html, title);
//}