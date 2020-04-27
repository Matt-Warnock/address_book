function initializeSortingStatus() {
  let rows = buildContactList();
  colunmAmount = rows[0].cells.length;

  columnStatus = new Array(colunmAmount);
  columnStatus.fill(false);
}

function columnAlphabetical(userSelected) {
  let rows = buildContactList();

  return rows.sort((a, b) => {
    let firstCell = a.cells[userSelected].textContent;
    let nextCell = b.cells[userSelected].textContent;
    if(firstCell < nextCell){
      return -1;
    }
    if(firstCell > nextCell){
      return 1;
    }
    return 0;
  });
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

  if(columnStatus[columnClicked]) {
    updateContactsOrder(orderedContacts.reverse());
    columnStatus.splice(columnClicked, 1 , false);
  }else {
    updateContactsOrder(orderedContacts);
    columnStatus.splice(columnClicked, 1 , true);
  }

  changeDisplayArrow(columnClicked);
});
