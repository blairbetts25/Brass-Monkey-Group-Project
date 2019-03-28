$(document).ready(function () {
    var apiKey = "bf0fe2b0776e786b0b03723a094e6d31";
    var citySelected;
    var daysForcasted = 5
    var dayOneHumidity;
    var dayOneTemp;
    var dayOneDescription;
    var dayOneWind;
    var dayOneDate;
    var dayTwoHumidity;
    var dayTwoTemp;
    var dayTwoDescription;
    var dayTwoWind;
    var dayTwoDate;
    var dayThreeHumidity;
    var dayThreeTemp;
    var dayThreeDescription;
    var dayThreeWind;
    var dayThreeDate;
    var dayFourHumidity;
    var dayFourTemp;
    var dayFourDescription;
    var dayFourWind;
    var dayFourDate;
    var dayFiveHumidity;
    var dayFiveTemp;
    var dayFiveDescription;
    var dayFiveWind;
    var dayFiveDate;
    var config = {
        apiKey: "AIzaSyD2ZqCn7UFWz3oqrz2slSa5rU1IATRuKg0",
        authDomain: "brass-monkey-project.firebaseapp.com",
        databaseURL: "https://brass-monkey-project.firebaseio.com",
        projectId: "brass-monkey-project",
        storageBucket: "brass-monkey-project.appspot.com",
        messagingSenderId: "384344100286"
    };
    firebase.initializeApp(config);
    var database = firebase.database();

    function createButtons() {
        for (i = 0; i < daysForcasted; i++) {
            var newButton = $("<button>");
            newButton.attr("data", [i]);
            $("#date").append(newButton);
        }
    };

    $("#searchCity").on("click", function () {
        citySelected = $("#city").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + citySelected + "&mode=json&units=imperial&appid=" + apiKey;
        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function weatherData(response) {
                console.log(queryURL);
                console.log(response);
                console.log(response.list[0].weather);
                console.log("humidity " + response.list[0].main.humidity);
                console.log("temp" + response.list[0].main.temp);
                console.log(response.list[0].weather[0].description);
                console.log("wind speed " + response.list[0].wind.speed);
                console.log(response.list[0].dt_txt);

                dayOneHumidity = "humidity " + response.list[0].main.humidity + "%";
                dayOneTemp = "temp " + response.list[0].main.temp + " F";
                dayOneDescription = response.list[0].weather[0].description;
                dayOneWind = "wind speed " + response.list[0].wind.speed + " MPH";
                dayOneDate = response.list[0].dt_txt;

                var dayOne = {
                    dayOneTemp: dayOneTemp,
                    dayOneHumidity: dayOneHumidity,
                    dayOneDescription: dayOneDescription,
                    dayOneWind: dayOneWind,
                    dayOneDate: dayOneDate
                };
                dayTwoHumidity = "humidity " + response.list[8].main.humidity + "%";
                dayTwoTemp = "temp " + response.list[8].main.temp + " F";
                dayTwoDescription = response.list[8].weather[0].description;
                dayTwoWind = "wind speed " + response.list[8].wind.speed + " MPH";
                dayTwoDate = response.list[8].dt_txt;
                var dayTwo = {
                    dayTwoTemp: dayTwoTemp,
                    dayTwoHumidity: dayTwoHumidity,
                    dayTwoDescription: dayTwoDescription,
                    dayTwoWind: dayTwoWind,
                    dayTwoDate: dayTwoDate
                };
                dayThreeHumidity = "humidity " + response.list[16].main.humidity + "%";
                dayThreeTemp = "temp " + response.list[16].main.temp + " F";
                dayThreeDescription = response.list[16].weather[0].description;
                dayThreeWind = "wind speed " + response.list[16].wind.speed + " MPH";
                dayThreeDate = response.list[16].dt_txt;
                var dayThree = {
                    dayThreeTemp: dayThreeTemp,
                    dayThreeHumidity: dayThreeHumidity,
                    dayThreeDescription: dayThreeDescription,
                    dayThreeWind: dayThreeWind,
                    dayThreeDate: dayThreeDate
                };
                dayFourHumidity = "humidity " + response.list[24].main.humidity + "%";
                dayFourTemp = "temp " + response.list[24].main.temp + " F";
                dayFourDescription = response.list[24].weather[0].description;
                dayFourWind = "wind speed " + response.list[24].wind.speed + " MPH";
                dayFourDate = response.list[24].dt_txt;
                var dayFour = {
                    dayFourTemp: dayFourTemp,
                    dayFourHumidity: dayFourHumidity,
                    dayFourDescription: dayFourDescription,
                    dayFourWind: dayFourWind,
                    dayFourDate: dayFourDate
                };
                dayFiveHumidity = "humidity " + response.list[32].main.humidity + "%";
                dayFiveTemp = "temp " + response.list[32].main.temp + " F";
                dayFiveDescription = response.list[32].weather[0].description;
                dayFiveWind = "wind speed " + response.list[32].wind.speed + " MPH";
                dayFiveDate = response.list[32].dt_txt;
                dayFive = {
                    dayFiveTemp: dayFiveTemp,
                    dayFiveHumidity: dayFiveHumidity,
                    dayFiveDescription: dayFiveDescription,
                    dayFiveWind: dayFiveWind,
                    dayFiveDate: dayFiveDate
                };

                database.ref().push(dayOne);
                database.ref().push(dayTwo);
                database.ref().push(dayThree);
                database.ref().push(dayFour);
                database.ref().push(dayFive);



                var mapURL = "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&zoom=10";
                console.log(mapURL);
                $("#map").append(mapURL);
                $("#map").attr("href", "https://openweathermap.org/weathermap?basemap=map&cities=false&layer=pressure&lat=" + response.city.coord.lat + "&lon=" + response.city.coord.lon + "&zoom=10");
                createButtons();
            })
    })
    database.ref().on("child_added", function (childSnapshot) {

    })
})