class Deleter {
  constructor(addressBook) {
    this._name_colunm_index = 0;
    this._addressBook = addressBook;
  }

  findContactToDelete(nameInput) {
    let rows = this._addressBook.buildContactList();
    return rows.find(row => row.cells[this._name_colunm_index].textContent === nameInput);
  }

  deleteContact(toBeDeleted) {
    toBeDeleted.remove();
  }
}

class DeletionUi {
  constructor(deleter, mainUi) {
    this._userEntry = document.getElementById('user_contact_name');
    this._deleter = deleter;
    this._mainUi = mainUi;
  }

  get userEntry() {
    return this._userEntry.value;
  }

  _deletionProcedure() {
    let addressToDelete = this._deleter.findContactToDelete(this.userEntry);

    if(!addressToDelete){
      this._mainUi.displayInfoMessage = 'That contact does not exist';
      return;
    }
    this._mainUi.displayInfoMessage = '';
    this._deleter.deleteContact(addressToDelete);
  }

  initiaize() {
    document.getElementById('user_contact_name').addEventListener('keydown', event => {
      if(event.code === 'Enter'){
        this._deletionProcedure();
      }
    });
  }
}
const deleter = new Deleter(addressBook);
(new DeletionUi(deleter, mainUi)).initiaize();
