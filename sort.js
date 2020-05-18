class Sorter {
  constructor(addressBook) {
    this.columnStatus = [];
    this._addressBook = addressBook;
  }

  initializeSortingStatus() {
    let numberOfColumns = document.querySelectorAll('th').length;

    this.columnStatus = new Array(numberOfColumns);
    this.columnStatus.fill(false);
  }

  columnAlphabetical(userSelected) {
    let rows = this._addressBook.buildContactList();

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

    if(this.columnStatus[userSelected]) {
      orderedRows.reverse();
    }
    this.columnStatus[userSelected] = !this.columnStatus[userSelected];

    return orderedRows;
  }
}

class SorterUi {
  constructor(sorter) {
    this._headerRowIndex = 0;
    this._table = document.getElementById('contact_details');
    this._arrows = document.getElementById('column_names');
    this._sorter = sorter;
  }
  set table (updatedRows) {
    this._table.appendChild(updatedRows);
  }

  _updateContactsOrder(orderedContacts) {
    let fragment = new DocumentFragment();

    orderedContacts.forEach(row => fragment.appendChild(row));
    this.table = fragment;
  }

  set changeDisplayArrow(userSelected) {
    this._arrows.rows[this._headerRowIndex].cells[userSelected].classList.toggle('decending');
  }

  initiaize() {
    this._sorter.initializeSortingStatus();
    document.getElementById('column_names').addEventListener('click', event => {
      let columnClicked = event.target.cellIndex,
      orderedContacts = this._sorter.columnAlphabetical(columnClicked);

      this._updateContactsOrder(orderedContacts);
      this.changeDisplayArrow = columnClicked;
    });
  }
}
const sorter = new Sorter(addressBook);
(new SorterUi(sorter)).initiaize();
