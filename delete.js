class Deleter {
  constructor(contactsObject) {
    this.name_colunm_index = 0;
    this.allContacts = contactsObject;
  }

  findContactToDelete(nameInput) {
    let rows = this.allContacts.buildContactList();
    return rows.find(row => row.cells[this.name_colunm_index].textContent === nameInput);
  }

  deleteContact(toBeDeleted) {
    toBeDeleted.remove();
  }
}

class DeletionUi {
  constructor(deleterObject, outputObject) {
    this._userEntry = document.getElementById('user_contact_name');
    this.eraser = deleterObject;
    this.outputer = outputObject;
  }

  get userEntry() {
    return this._userEntry.value;
  }

  _deletionProcedure() {
    let addressToDelete = this.eraser.findContactToDelete(this.userEntry);

    if(!addressToDelete){
      this.outputer.displayInfoMessage = 'That contact does not exist';
      return;
    }else {
      this.outputer.displayInfoMessage = '';
      this.eraser.deleteContact(addressToDelete);

    }
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
const deletionUi = new DeletionUi(deleter, mainUi);
deletionUi.initiaize();
