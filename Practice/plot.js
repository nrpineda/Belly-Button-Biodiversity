// console.log(cityGrowths);

// // Sort the cities by population growth

// var sortedCities = cityGrowths.sort((a, b) => 
// a.Increase_from_2016 - b.Increase_from_2016).reverse();
// console.log(sortedCities);

// // Select only the top five cities by population growth, using
// // slice()

// var topFiveCities = sortedCities.slice(0,5);
// console.log(topFiveCities);

// // Create Arrays of City Names and Growth Figures
// // create two arrays: an array of city names, and an array of corresponding population growths.
// var topFiveCityNames = topFiveCities.map(city => city.City);
// var topFiveCityGrowths = topFiveCities.map(city => parseInt(city.Increase_from_2016));
// console.log(topFiveCityGrowths);
// console.log(topFiveCityNames);

// // Create a Bar Chart with the Arrays
// var trace = {
//   x: topFiveCityNames,
//   y: topFiveCityGrowths,
//   type: "bar"
// };
// var data = [trace];
// var layout = {
//   title: "Most Rapidly Growing Cities",
//   xaxis: {title: "City" },
//   yaxis: {title: "Population Growth, 2016-2017"}
// };
// Plotly.newPlot("bar-plot", data, layout);


function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] 
  }];
  Plotly.newPlot("plot", data);
};

d3.selectAll("#dropdownMenu").on("change", updatePlotly);
function updatePlotly() {
  var dropdownMenu = d3.select("#dropdownMenu");
  var dataset = dropdownMenu.property("value");

  var xData = [1, 2, 3, 4, 5];
  var yData = [];

  if (dataset === 'dataset1') {
    yData = [1, 2, 4, 8, 16];
  };

  if (dataset === 'dataset2') {
    yData = [1, 10, 100, 1000, 10000];
  };

  var trace = {
    x: [xData],
    y: [yData],
  };
  Plotly.restyle("plot", trace);
};

init();








