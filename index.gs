function onOpen() {
    var ui = SpreadsheetApp.getUi();
    ui.createMenu('Contacts')
        .addItem('show Groups', 'showContactGroups')
        .addItem('Edit Contact', 'editContact')
        .addItem('Get all contacts', 'Importcontacts')
        .addToUi();
}