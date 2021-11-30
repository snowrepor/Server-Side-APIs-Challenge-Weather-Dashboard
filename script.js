$(document).ready(function() {
    console.log("ready");
// query url weather app
var queryUrl = "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=" +
"45e45c0bb2ef540df33fa21a29aafa8a";
// ajax call
$.ajax({
    url: queryUrl,
    method: "GET",
}).then(function(response) {
    console.log(response);
    for(var i = 0; i < response.data.length; i++) { // loop responses
        console.log("TITLE' response.data[i]. title");
    }
});
});