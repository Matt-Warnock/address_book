class Searcher {
  findMatchingContacts(searchText, rows) {
    return rows.filter(row => {
      return Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(searchText));
    });
  }
}

class SearcherUi {
  constructor(searcher, addressBook, mainUi) {
    this._userSearch = document.getElementById('search_word');
    this._searcher = searcher;
    this._addressBook = addressBook;
    this._mainUi = mainUi;
  }
  get userSearch() {
    return this._userSearch.value.toLowerCase();
  }

  _hideAllAddress(rows) {
    rows.forEach(row => row.classList.add('hide_address'));
  }

  _restoreAllAddress(rows) {
    rows.forEach(row => row.classList.remove('hide_address'));
  }

  displaySearchResult() {
    let rows = this._addressBook.buildContactList(),
    result = this._searcher.findMatchingContacts(this.userSearch, rows);

    if (result.length > 0) {
      this._mainUi.displayInfoMessage = '';
      this._hideAllAddress(rows);
      result.forEach(contact => contact.classList.remove('hide_address'));
    }else {
      this._restoreAllAddress(rows);
      this._mainUi.displayInfoMessage = 'I can not find any match with your search!';
    }
  }

  initiaize() {
    document.getElementById('search_word').addEventListener('keydown', event => {
      if (event.code === 'Enter'){
        this.displaySearchResult();
      }
    });
  }
}
const searcher = new Searcher();
(new SearcherUi(searcher, addressBook, mainUi)).initiaize();
