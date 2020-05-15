class Searcher {
  findMatchingContacts(searchText, rows) {
    return rows.filter(row => {
      return Array.from(row.cells).some(cell => cell.textContent.toLowerCase().includes(searchText));
    });
  }
}

class SearcherUi {
  constructor(searcherObject, mainObject) {
    this._userSearch = document.getElementById('search_word');
    this.finder = searcherObject;
    this.allContacts = mainObject.addressBook;
    this.outputer = mainObject.mainUi;
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
    let rows = this.allContacts.buildContactList(),
    result = this.finder.findMatchingContacts(this.userSearch, rows);

    if (result.length > 0) {
      this.outputer.displayInfoMessage = '';
      this._hideAllAddress(rows);
      result.forEach(contact => contact.classList.remove('hide_address'));
    }else {
      this._restoreAllAddress(rows);
      this.outputer.displayInfoMessage = 'I can not find any match with your search!';
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
const searcher = new Searcher(),
searcherUi = new SearcherUi(searcher, addressMain);
searcherUi.initiaize();
