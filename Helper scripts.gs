function clearSheet(sheet) {
    sheet.clearContents()
}

function showOutputBox(str, title) {
    var html = HtmlService.createHtmlOutput('<pre>' + str + '</pre>')
        .setWidth(400)
        .setHeight(300);

    SpreadsheetApp.getUi()
        .showModalDialog(html, title);
}

function getContact(id){
  var contact = ContactsApp.getContactById(id)
  return contact;
}

/* example: 
 *  console.log(stringMaker(["one", 1, "two", 2]))
 *  "one : 1
 *  two : 2"
 */
function stringMaker(strArray) {
    var string = "";
    var lineBreak = "\n";
    var count = 1;
    strArray.forEach(function(element) {
        if (count % 2 === 0) {
            string += element + lineBreak;
        } else {
            string += element + " : ";
        }
        count++;
    });
    return string;
}

//returns id from first cell in active row
function grabId() {
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getActiveSheet();
    var aCell = sheet.getActiveCell();
    var id = aCell.offset(0, 1 - aCell.getColumn()).getDisplayValue();
//    var id = aCell.offset(0, 1 - aCell.getColumn()).getValue();
    return id;
}
