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
    var inputElement0 = d3.select("#datetime");
    var inputElement1 = d3.select("#city");
    var inputElement2 = d3.select("#state");
    var inputElement3 = d3.select("#country");
    var inputElement4 = d3.select("#shape");
    // Get the value property of the input element
    var inputValue0 = inputElement0.property("value");
    var inputValue1 = inputElement1.property("value");
    var inputValue2 = inputElement2.property("value");
    var inputValue3 = inputElement3.property("value");
    var inputValue4 = inputElement4.property("value");



    // Explanation on filtering logic:
    // The code functions by going through user input from top to bottom (date time -> shape)
    // Until it runs into a form that is filled with input, the database (filterdData) will maintain at the default state
    // Once input is detected, the code will check if the input is a match with any object of the designated array
    // If it is, filtering will occur on the default database and update it as the new default database.
    // Further filtering will be using this new database, and refresh the variable after filtering.
    // If it is not, the default database will pass on to the next step of filtering without any alteration.
    // The code will only output the result after the final step of filtering, under the variable filteredDataF.

    if  (inputValue0.length == 0)
    { var filteredData = tableData;}
    else if (inputValue0.length > 0) {
      filteredData = tableData.filter(e=> e.datetime === inputValue0);
    }


    if (inputValue0.length == 0 && inputValue1.length == 0)
    {var filteredData = tableData;}
    else if (inputValue1.length == 0)
    { var filteredData = filteredData;}
    else if (inputValue1.length > 0) {
      filteredData = filteredData.filter(e => e.city === inputValue1);
    }


    if (inputValue0.length == 0 && inputValue1.length == 0 && inputValue2.length == 0)
    {var filteredData = tableData;}
    else if (inputValue2.length == 0)
    { var filteredData = filteredData;}
    else if (inputValue2.length > 0) {
      filteredData = filteredData.filter(e => e.state === inputValue2);
    }


    if (inputValue0.length == 0 && inputValue1.length == 0 && inputValue2.length == 0 && inputValue3.length == 0)
    {var filteredData = tableData;}
    else if (inputValue3.length == 0)
    { var filteredData = filteredData;}
    else if (inputValue3.length > 0) {
      filteredData = filteredData.filter(e => e.country === inputValue3);
    }


    if (inputValue0.length == 0 && inputValue1.length == 0 && inputValue2.length == 0 && inputValue3.length == 0 && inputValue4.length == 0)
    {return false;}
    else if (inputValue4.length == 0)
    { var filteredDataF = filteredData;}
    else if (inputValue4.length > 0) {
      filteredDataF = filteredData.filter(e => e.shape === inputValue4);
    }


    console.log(inputValue0);
    console.log(inputValue1);
    console.log(inputValue2);
    console.log(inputValue3);
    console.log(inputValue4);
  
    console.log(filteredDataF);

    // Get a reference to the table body
    var tbody = d3.select("tbody");

    filteredDataF.forEach((ufoReport) => {
      var row = tbody.append("tr");
      Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
};