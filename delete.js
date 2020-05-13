const deleter = {
  name_colunm_index: 0,

  findContactToDelete(nameInput) {
    let rows = addressBook.buildContactList();
    return rows.find(row => row.cells[this.name_colunm_index].textContent === nameInput);
  },

  deleteContact(toBeDeleted) {
    toBeDeleted.remove();
  }
};

const deletionUi = {
  _userEntry: document.getElementById('user_contact_name'),

  get userEntry() {
    return this._userEntry.value;
  },

  _deletionProcedure() {
    let addressToDelete = deleter.findContactToDelete(this.userEntry);

    if(!addressToDelete){
      mainUi.displayInfoMessage = 'That contact does not exist';
      return;
    }else {
      mainUi.displayInfoMessage = '';
      deleter.deleteContact(addressToDelete);

    }
  },

  initiaize() {
    document.getElementById('user_contact_name').addEventListener('keydown', event => {
      if(event.code === 'Enter'){
        this._deletionProcedure();
      }
    });
  }
};
deletionUi.initiaize();
