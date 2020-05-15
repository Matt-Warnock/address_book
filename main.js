class AddressBook {
  constuctor() {
  this.allAddress = document.getElementById('contact_details');
}
  buildContactList() {
    return Array.from(this.allAddress.rows);
  }
}

class MainUi {
  constuctor() {
    this._messageOutput = document.getElementById('error_message');
}
    set displayInfoMessage(userResult) {
        this._messageOutput.textContent = userResult;
    }
}
const addressBook = new AddressBook();
const mainUi = new MainUi();
