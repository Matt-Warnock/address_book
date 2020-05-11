const addressBook = {
  allAddress: document.getElementById('contact_details'),

  buildContactList() {
    return Array.from(this.allAddress.rows);
  },

  findContactToDelete(nameInput) {
    let rows = this.buildContactList();
    return rows.find(row => row.cells[0].textContent === nameInput);
  },

  deleteContact(toBeDeleted) {
    toBeDeleted.remove();
  }
};

const deletionUi = {
  _userEntry: document.getElementById('user_contact_name'),
  _messageOutput: document.getElementById('error_message'),

  get userEntry() {
    return this._userEntry.value;
  },

  set displayInfoMessage(userResult) {
    if (typeof userResult === 'string') {
      this._messageOutput.textContent = userResult;
    }else {
      console.error('data type should be string!');
    }
  },

  _deletionProcedure() {
    let addressToDelete = addressBook.findContactToDelete(this.userEntry);

    if(addressToDelete !== undefined){
      this.displayInfoMessage = '';
      addressBook.deleteContact(addressToDelete);
    }else {
      this.displayInfoMessage = 'That contact does not exist';
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
