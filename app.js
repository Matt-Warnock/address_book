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

  let addressToDelete = rows.find(row => row.cells[0].textContent === nameInput.value);

  displayInfoMessage(addressToDelete);
  deleteContact(addressToDelete);
}

function hideAllAddress() {
  let rows = buildContactList();

  rows.forEach(row => row.classList.add('hide_address'));
}

function findMatchingContacts(searchText) {
  let rows = buildContactList();

  return rows.filter(row => {
    return Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(searchText));
  });
}

function displayActions(searchText) {
  let result = findMatchingContacts(searchText);

  if (result.length > 0) {
    hideAllAddress();
  }
  displayInfoMessage(result);

  result.forEach(contact => contact.classList.remove('hide_address'));
}


document.getElementById('user_contact_name').addEventListener('keydown', event => {
  const userEntry = document.getElementById('user_contact_name');

  if(event.code === 'Enter'){
    contactDatabaseDeletion(userEntry);
  }
});

document.getElementById('search_word').addEventListener('keydown', event => {
  const userSearch = document.getElementById('search_word').value.toLowerCase();

  if (event.code === 'Enter'){

    displayActions(userSearch);
  }
});
