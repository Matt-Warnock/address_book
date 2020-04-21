function rowToDelete() {
  const userEntry = document.getElementById('user_contact_name');
  const allAddress = document.getElementById('contact_details');

  let rows = Array.from(allAddress.rows);

  return rows.find(row => row.cells[0].textContent === userEntry.value);
}


document.getElementById('user_contact_name').addEventListener('keydown', event => {

  if(event.code === 'Enter'){

  rowToDelete();

  }
});
