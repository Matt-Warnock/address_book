
function deleteRow(toBeDeleted, array) {
  const note = document.getElementById('error_message');

  if (toBeDeleted === undefined) {
    note.textContent = 'This contact doesnt exist';
  } else {
    note.textContent = '';
    toBeDeleted.remove();
  }

}


function contactDatabaseDeletion() {
  const allAddress = document.getElementById('contact_details');
  const userEntry = document.getElementById('user_contact_name');

  let rows = Array.from(allAddress.rows);
  let rowIndex = rows.find(row => row.cells[0].textContent === userEntry.value);

  deleteRow(rowIndex, rows);
}



document.getElementById('user_contact_name').addEventListener('keydown', event => {

  if(event.code === 'Enter'){

  contactDatabaseDeletion();

  }
});
