function hideAllAddress(rows) {
  rows.forEach(row => row.classList.add('hide_address'));
}

function restoreAllAddress(rows) {
  rows.forEach(row => row.classList.remove('hide_address'));
}

function findMatchingContacts(searchText, rows) {
  return rows.filter(row => {
    return Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(searchText));
  });
}

function displaySearchResult(searchText) {
  let rows = buildContactList();
  let result = findMatchingContacts(searchText, rows);

  if (result.length > 0) {
    displayInfoMessage('');
    hideAllAddress(rows);
    result.forEach(contact => contact.classList.remove('hide_address'));
  }else {
    restoreAllAddress(rows);
    displayInfoMessage('Even With all of the power of Matt\'s javascript, I can not find any match with your search!' );
  }
}

document.getElementById('search_word').addEventListener('keydown', event => {
  const userSearch = document.getElementById('search_word').value.toLowerCase();

  if (event.code === 'Enter'){
    displaySearchResult(userSearch);
  }
});
