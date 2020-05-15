class AddressBook {
  constructor() {
    this.allAddress = document.getElementById('contact_details');
  }
  buildContactList() {
    return Array.from(this.allAddress.rows);
  }
}

class MainUi {
  constructor() {
    this._messageOutput = document.getElementById('error_message');
  }
  set displayInfoMessage(userResult) {
    this._messageOutput.textContent = userResult;
  }
}
const addressMain = {
  addressBook: new AddressBook(),
  mainUi: new MainUi()
};
