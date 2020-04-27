let sortingFlag;

function createSortingFlag() {
  let rows = buildContactList();
  colunmAmount = rows[0].cells.length;

  sortingFlag = new Array(colunmAmount);
  sortingFlag.fill(false);
}

function columndescent(userSelected) {
  let rows = buildContactList();
  let colunmClicked = userSelected;

  return rows.sort((a, b) => {
    let firstCell = a.cells[colunmClicked].textContent;
    let nextCell = b.cells[colunmClicked].textContent;
    if(firstCell < nextCell){
      return -1;
    }
    if(firstCell > nextCell){
      return 1;
    }
    return 0;
  });
}

function updateAddressOrder(orderedRows) {
  let table = document.getElementById('contact_details');
  let fragment = new DocumentFragment();

  orderedRows.forEach(row => fragment.appendChild(row));

  table.appendChild(fragment);
}

createSortingFlag();

document.getElementById('column_names').addEventListener('click', event => {
  let changeThisColomnIndex = event.target.cellIndex;
  let orderedRows = columndescent(changeThisColomnIndex);

  if(sortingFlag[changeThisColomnIndex]) {
  updateAddressOrder(orderedRows.reverse());
  sortingFlag.splice(changeThisColomnIndex, 1 , false);
  }else {
  updateAddressOrder(orderedRows);
  sortingFlag.splice(changeThisColomnIndex, 1 , true);
  }
});
