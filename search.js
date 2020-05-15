const addressList = {
  findMatchingContacts(searchText, rows) {
    return rows.filter(row => {
      return Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(searchText));
    });
  }
};

const searcherUi = {
  _userSearch: document.getElementById('search_word'),

  get userSearch() {
    return this._userSearch.value.toLowerCase();
  },

  _hideAllAddress(rows) {
    rows.forEach(row => row.classList.add('hide_address'));
  },

  _restoreAllAddress(rows) {
    rows.forEach(row => row.classList.remove('hide_address'));
  },

  displaySearchResult() {
    let rows = addressBook.buildContactList();
    let result = addressList.findMatchingContacts(this.userSearch, rows);

    if (result.length > 0) {
      mainUi.displayInfoMessage = '';
      this._hideAllAddress(rows);
      result.forEach(contact => contact.classList.remove('hide_address'));
    }else {
      this._restoreAllAddress(rows);
      mainUi.displayInfoMessage = 'I can not find any match with your search!';
    }
  },

  initiaize() {
    document.getElementById('search_word').addEventListener('keydown', event => {
      if (event.code === 'Enter'){
        this.displaySearchResult();
      }
    });
  }
};
searcherUi.initiaize();
