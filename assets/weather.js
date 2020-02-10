$(document).ready(function() {
    
    let today = moment().format("MM/DD/YYYY")
    $(".date").text(today);
    
    let forecastOneDay = moment().add(1, 'day').format("MM/DD/YYYY");
    let forecastTwoDay = moment().add(2, 'day').format("MM/DD/YYYY");
    let forecastThreeDay = moment().add(3, 'day').format("MM/DD/YYYY");
    let forecastFourDay = moment().add(4, 'day').format("MM/DD/YYYY");
    let forecastFiveDay = moment().add(5, 'day').format("MM/DD/YYYY");
    



    let cityInput = "Boston";
    let searchURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial&date=" + today;
    

    function updateWeather() {
        $.ajax({
            url: searchURL,
            method: "GET",
        }).then(function (response) {
            $(".city-name").text(cityInput);
            $("#today-temp").text(Math.floor(response.main.temp) + " degrees F");
            $("#today-humid").text(response.main.humidity + "%");
            $("#today-wind").text(response.wind.speed + " MPH");
        });
    };

    let dayTwoURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial&date=" + forecastOneDay;
    

    function dayTwoWeather() {
        $.ajax({
            url: dayTwoURL,
            method: "GET",
        }).then(function (response1) {
            $(".date-day-1").text(forecastOneDay);
            $(".temp-day-1").text(Math.floor(response1.main.temp) + " degrees F");
            $(".humid-day-1").text(response1.main.humidity + "%");
        });
    };

    let dayThreeURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial&date=" + forecastTwoDay;
    

    function dayThreeWeather() {
        $.ajax({
            url: dayThreeURL,
            method: "GET",
        }).then(function (response2) {
            $(".date-day-2").text(forecastTwoDay);
            $(".temp-day-2").text(Math.floor(response2.main.temp) + " degrees F");
            $(".humid-day-2").text(response2.main.humidity + "%");
        });
    };

    let dayFourURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial&date=" + forecastThreeDay;
    

    function dayFourWeather() {
        $.ajax({
            url: dayFourURL,
            method: "GET",
        }).then(function (response3) {
            $(".date-day-3").text(forecastThreeDay);
            $(".temp-day-3").text(Math.floor(response3.main.temp) + " degrees F");
            $(".humid-day-3").text(response3.main.humidity + "%");
        });
    };

    let dayFiveURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial&date=" + forecastFourDay;
    

    function dayFiveWeather() {
        $.ajax({
            url: dayFiveURL,
            method: "GET",
        }).then(function (response4) {
            $(".date-day-4").text(forecastFourDay);
            $(".temp-day-4").text(Math.floor(response4.main.temp) + " degrees F");
            $(".humid-day-4").text(response4.main.humidity + "%");
        });
    };

    let daySixURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInput + "&appid=63ce6f2372091607c7b3b632b1337e15&units=imperial&date=" + forecastFiveDay;
    

    function daySixWeather() {
        $.ajax({
            url: daySixURL,
            method: "GET",
        }).then(function (response5) {
            $(".date-day-5").text(forecastFiveDay);
            $(".temp-day-5").text(Math.floor(response5.main.temp) + " degrees F");
            $(".humid-day-5").text(response5.main.humidity + "%");
        });
    };

    $(".search-btn").on("click" , 
        updateWeather(), 
        dayTwoWeather(), 
        dayThreeWeather(), 
        dayFourWeather(),
        dayFiveWeather(),
        daySixWeather(),
    );



});