//get group names
function showContactGroups() {
  var groups = ContactsApp.getContactGroups();
  var str = 'Groups\n';
  for (var g = 0; g < groups.length; g++) {
      str += '\n' + groups[g].getName()

  }

  showOutputBox(str, 'Your Contact Groups');
}