
function buildContactList() {
  const allAddress = document.getElementById('contact_details');
  return Array.from(allAddress.rows);
}

function displayInfoMessage(userResult) {
  const note = document.getElementById('error_message');

    if(userResult === undefined || userResult.length < 1) {
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

  displayInfoMessage(rowIndex);
  deleteContact(rowIndex);
}


document.getElementById('user_contact_name').addEventListener('keydown', event => {
  const userEntry = document.getElementById('user_contact_name');

  if(event.code === 'Enter'){
    contactDatabaseDeletion(userEntry);
  }
});

function hideAllAddress() {
  let rows = buildContactList();

  rows.forEach(row => row.classList.add('hide_address'));
}

function findMatchingContacts() {
  const userSearch = document.getElementById('search_word');
  let rows = buildContactList();

  return rows.filter(row => {
     return Array.from(row.cells).some(cell => cell.textContent.includes(userSearch.value));
  });
}

function displayActions() {
  let result = findMatchingContacts();

  if (result.length > 0) {
    hideAllAddress();
  }

  displayInfoMessage(result);

  result.forEach(contact => contact.classList.remove('hide_address'));
}

document.getElementById('search_word').addEventListener('keydown', event => {

  if (event.code === 'Enter'){

    displayActions();
  }
});
