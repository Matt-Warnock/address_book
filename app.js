
function buildContactList() {
  const allAddress = document.getElementById('contact_details');
  return Array.from(allAddress.rows);
}

function infoMessage(toBeDeleted) {
  const note = document.getElementById('error_message');

    if(toBeDeleted === undefined) {
    note.textContent = 'This contact doesnt exist';
  }else {
    note.textContent = '';
  }
}

function deleteContact(toBeDeleted) {
    if(toBeDeleted !== undefined) {
      toBeDeleted.remove();
  }
}

function contactDatabaseDeletion(nameInput) {
  let rows = buildContactList();

  let rowIndex = rows.find(row => row.cells[0].textContent === nameInput.value);

  infoMessage(rowIndex);
  deleteContact(rowIndex);
}


document.getElementById('user_contact_name').addEventListener('keydown', event => {
  const userEntry = document.getElementById('user_contact_name');

  if(event.code === 'Enter'){
    contactDatabaseDeletion(userEntry);
  }
});
