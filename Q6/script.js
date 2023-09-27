document.addEventListener("DOMContentLoaded", function () {
  const table1Data = ["A", "B", "C", "D", "E"];
  const table2Data = ["1", "2", "3", "4", "5"];
  let table1Selected = [];
  let table2Selected = [];

  function generateTable(tableId, tableData, tableSelected) {
    const table = document.getElementById(tableId);
    let html =
      '<thead><tr><th><input type="checkbox" class="select-all"></th><th>Action</th><th>Sample Name</th></tr></thead><tbody>';
    tableData.forEach((item, index) => {
      html += `<tr><td><input type="checkbox" class="select-item" data-item="${item}"></td><td>Action</td><td>${item}</td></tr>`;
    });
    html += "</tbody>";
    table.innerHTML = html;

    table.querySelectorAll(".select-all").forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const checkboxes = table.querySelectorAll(".select-item");
        checkboxes.forEach((cb) => (cb.checked = this.checked));
        if (this.checked) {
          tableSelected.length = 0; // Clear the array
          tableData.forEach((item) => tableSelected.push(item)); // Fill with new items
        } else {
          tableSelected.length = 0; // Clear the array
        }
        console.log(tableSelected);
      });
    });

    table.querySelectorAll(".select-item").forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        const item = this.getAttribute("data-item");
        if (this.checked) {
          tableSelected.push(item);
        } else {
          const index = tableSelected.indexOf(item);
          if (index > -1) {
            tableSelected.splice(index, 1);
          }
        }
        console.log(tableSelected);
      });
    });
  }

  generateTable("table1", table1Data, table1Selected);
  generateTable("table2", table2Data, table2Selected);

  document.getElementById("saveButton").addEventListener("click", function () {
    console.log(table1Selected);
    console.log(table2Selected);
    const combinedSelected = [...table1Selected, ...table2Selected];
    const selectedValues = combinedSelected.join("、");
    alert(`已挑選 ${selectedValues}`);
  });
});
