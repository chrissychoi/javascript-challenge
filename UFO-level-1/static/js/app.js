// from data.js
var tableData = data;

// Select the button
var button = d3.select("#filter-btn");

// Select the form
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit", runEnter);

// YOUR CODE HERE!
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // overwrite content with 'nothing'
    document.getElementById("ufo-table-content").innerHTML = ""
    
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue0 = inputElement.property("value");
  
    console.log(inputValue0);
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue0);

    console.log(filteredData)


  
    // Get a reference to the table body
    var tbody = d3.select("tbody");

    filteredData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
};