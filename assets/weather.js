$(document).ready(function() {
    
    $(".date").text(moment().format("(MM/DD/YYYY)"));

    let cityInput = "Boston";
    let searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial";
    

    function updateWeather() {
        $.ajax({
            url: searchURL,
            method: "GET",
        }).then(function (response) {
            $(".city-name").text(cityInput);
            $("#today-temp").text(response.main.temp + " degrees F");
        });
    };

    $(".search-btn").on("click" , updateWeather());



});