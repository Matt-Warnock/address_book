const addressBook = {
  allAddress: document.getElementById('contact_details'),

  buildContactList() {
    return Array.from(this.allAddress.rows);
  }
};

const mainUi = {
    _messageOutput: document.getElementById('error_message'),

    set displayInfoMessage(userResult) {
        this._messageOutput.textContent = userResult;
    }
};
