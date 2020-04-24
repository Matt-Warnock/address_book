document.getElementById('column_names').addEventListener('click', event => {
  let changeThisColomnIndex = event.target.cellIndex;
  console.log(columndescent(changeThisColomnIndex));
});

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
