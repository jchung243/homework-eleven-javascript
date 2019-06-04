// from data.js

// select data from data.js
var tableData = data;

// select table body element
var tbody = d3.select("tbody");

// foreach to loop through each object from the tableData and create rows
// also loops through to create individual cells using object.entries
data.forEach(function(ufoevent) {
    console.log(ufoevent);
    var row = tbody.append("tr");
    Object.entries(ufoevent).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// create event handler to attack to button
d3.select("#filter-btn").on("click", function() {
    // prevents default reload
    d3.event.preventDefault();

    // select date out of the input field
    var dateInput = d3.select("#datetime").property("value");

    // filter out data and create new array to pass to foreach
    var filterData = tableData.filter(ufoevent => ufoevent.datetime === dateInput);

    // reset tbody to zero
    tbody.html("")

    // use for each to construct new table from filtered data
    filterData.forEach(function(ufoevent) {
        console.log(ufoevent);
        var row = tbody.append("tr");
        Object.entries(ufoevent).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});