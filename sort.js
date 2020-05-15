const colunms = {
  columnStatus: [],

  initializeSortingStatus() {
    let numberOfColumns = document.querySelectorAll('th').length;

    this.columnStatus = new Array(numberOfColumns);
    this.columnStatus.fill(false);
  },

  columnAlphabetical(userSelected) {
    let rows = addressBook.buildContactList();

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
};

const sorterUi = {
  _table: document.getElementById('contact_details'),
  _arrows: document.getElementById('column_names'),

  set table (updatedRows) {
    this._table.appendChild(updatedRows);
  },

  _updateContactsOrder(orderedContacts) {
    let fragment = new DocumentFragment();

    orderedContacts.forEach(row => fragment.appendChild(row));
    this.table = fragment;
  },

  set changeDisplayArrow(userSelected) {
    this._arrows.rows[0].cells[userSelected].classList.toggle('decending');
  },

  initiaize() {
    colunms.initializeSortingStatus();
    document.getElementById('column_names').addEventListener('click', event => {
      let columnClicked = event.target.cellIndex;
      let orderedContacts = colunms.columnAlphabetical(columnClicked);

      this._updateContactsOrder(orderedContacts);
      this.changeDisplayArrow = columnClicked;
    });
  }
};
sorterUi.initiaize();
