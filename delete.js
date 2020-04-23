function buildContactList() {
  const allAddress = document.getElementById('contact_details');
  return Array.from(allAddress.rows);
}

function displayInfoMessage(userResult) {
  const note = document.getElementById('error_message');
  note.textContent = userResult;
}

function deleteContact(toBeDeleted) {
  toBeDeleted.remove();
}

function contactDatabaseDeletion(nameInput) {
  let rows = buildContactList();
  let addressToDelete = rows.find(row => row.cells[0].textContent === nameInput.value);

  if(addressToDelete !== undefined){
    displayInfoMessage('');
    deleteContact(addressToDelete);
  }else {
    displayInfoMessage('That contact does not exist');
  }
}

document.getElementById('user_contact_name').addEventListener('keydown', event => {
  const userEntry = document.getElementById('user_contact_name');

  if(event.code === 'Enter'){
    contactDatabaseDeletion(userEntry);
  }
});
