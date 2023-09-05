const searchInput = document.getElementById('searchInput');
const tableRows = document.querySelectorAll('#tableBody tr');

searchInput.addEventListener('input', function () {
  const searchText = searchInput.value.toLowerCase();
  tableRows.forEach(row => {
    const rowData = row.textContent.toLowerCase();
    row.style.display = rowData.includes(searchText) ? '' : 'none';
  });
});