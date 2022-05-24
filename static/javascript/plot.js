//sort the cities by growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

//slice only the top five cities
var topFiveCities = sortedCities.slice(0,5);

//use map() to create a separate array of the top five city names and the top five growth figures
var topFiveCityNames = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

//render these arrays in Plotly
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
  };
  var data = [trace];
  var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City" },
    yaxis: {title: "Population Growth, 2016-2017"}
  };
  Plotly.newPlot("bar-plot", data, layout);