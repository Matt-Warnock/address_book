function initializeSortingStatus() {
  let rows = buildContactList();
  colunmAmount = rows[0].cells.length;

  columnStatus = new Array(colunmAmount);
  columnStatus.fill(false);
}

function columnAlphabetical(userSelected) {
  let rows = buildContactList();

  let orderedRows = rows.sort((a, b) => {
    let firstCell = a.cells[userSelected].textContent,
    nextCell = b.cells[userSelected].textContent;
    if(firstCell < nextCell){
      return -1;
    }
    if(firstCell > nextCell){
      return 1;
    }
    return 0;
  });

  if(columnStatus[userSelected]) {
    orderedRows.reverse();
  }
  columnStatus[userSelected] = !columnStatus[userSelected];
  
  return orderedRows;
}

function updateContactsOrder(orderedContacts) {
  let table = document.getElementById('contact_details');
  let fragment = new DocumentFragment();

  orderedContacts.forEach(row => fragment.appendChild(row));
  table.appendChild(fragment);
}

function changeDisplayArrow(userSelected) {
  let arrows = document.getElementById('column_names').rows[0].cells[userSelected];

  arrows.classList.toggle('decending');
}


let columnStatus;

initializeSortingStatus();

document.getElementById('column_names').addEventListener('click', event => {
  let columnClicked = event.target.cellIndex;
  let orderedContacts = columnAlphabetical(columnClicked);

  updateContactsOrder(orderedContacts);
  changeDisplayArrow(columnClicked);
});
