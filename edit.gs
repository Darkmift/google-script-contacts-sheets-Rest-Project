function editContact() {
    //get highlighted (active) cell data and first cell in its row(id)
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var aCell = sheet.getActiveCell();
    var aRow = aCell.getRow();
    var id = grabId(aCell)

    var strArray = [];
    //fetch contact
    var contact = ContactsApp.getContactById(id);

    /* shitty code    
      contact.setFamilyName('Doe-Smith');
      var contactName = contact.getFullName()
      strArray.push("contact", contactName);
    */

    /* operational!
      contact.setGivenName('FirstName');
      contact.setFamilyName('Lastname');
      contact.setFullName('SomeName');
    */

    if (aRow > 1) {

        if (id == "") {
            Logger.log("Contact Id is empty. Contact can't be added");
            var ui = SpreadsheetApp.getUi();
            ui.alert("Contact Id is empty in A column. Contact can't be added. Please check and try again.");
            return;
        }
        var displayName = sheet.getRange("B" + aRow).getDisplayValue();
        var givenName = sheet.getRange("C" + aRow).getDisplayValue();
        var familyName = sheet.getRange("D" + aRow).getDisplayValue();
        var email = sheet.getRange("E" + aRow).getDisplayValue();

        //Getting contact by Id and updating saved fields
        var contact = ContactsApp.getContactById(id);
        contact.setFullName(displayName);
        contact.setGivenName(givenName);
        contact.setFamilyName(familyName);
        contact.addEmail("Home", email);
    }

    var title = "Target cell info"
    var str = stringMaker(strArray)

    showOutputBox(str, title);
}