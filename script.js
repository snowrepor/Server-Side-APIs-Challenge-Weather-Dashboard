$(document).ready(function() {
    console.log("ready");
// variables that are global
var cityInput="";
var queryUrl="";

storeCities();

// click after city is entered
$("#cityInput").on("click", function(event) {
    event.preventDefault();
    console.log("you have clicked the button");

    //
    cityInput = $("input").val();
    console.log(cityInput, "cityInput")
});
//

// function that retrieves cities
function storeCities () {

// query url open weather app
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?q="
+ cityInput + "&appid=" + "45e45c0bb2ef540df33fa21a29aafa8a"
console.log(queryUrl);

// ajax call
$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {
    console.log(response);
    console.log(response.city)
}) // end ajax
} //end store city function

// append details to the site 
$("#dailyWeather").append(
    //styling
    "<div class='col s12 m6'>"

    // weather contents 
    +  "<h2>" + response.city + "</h2>"

    //close out card styling 
    + "</div>"
    ); // end of append 

}); // end of document ready function