var weatherSearch =document.querySelector('#weatherSearch');
var searchForm =document.querySelector('#searchForm');
var textSearch =document.querySelector('#textSearch');
var searchBtn =document.querySelector('#searchBtn');
var dgWeatherKey = '75611633ad3b112fdba7848cde5411b5';


searchBtn.addEventListener("click",function(event){
    event.preventDefault();
    currentWeather();
    searchHistory();
})


function currentWeather()
{
var textSearch = document.getElementById('textSearch').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${textSearch}&appid=${dgWeatherKey}`)
    .then(function(response){
        return response.json();
    }).then(function(response){
        const weatherDate = new Date();
        let weatherDay = weatherDate.getDate();
        let weatherMonth = weatherDate.getMonth() + 1;
        let weatherYear = weatherDate.getFullYear();
        let currentDate = `${weatherMonth}/${weatherDay}/${weatherYear}`;
        $('p.date').text(''+currentDate);
        var currentTemp = response.main.temp;
        $('p.current-temp').text('Temp: ' + currentTemp + ' °F');
        var currentWind = response.wind.speed; 
        $('p.current-wind').text('Wind: ' + currentWind + ' MPH');
        var currentHumidity = response.main.humidity;
        $('p.current-humidity').text('Humidity: ' + currentHumidity + '%');
        var iconCode = response.weather[0].icon;
        var iconUrl = 'http://openweathermap.org/img/w/' + iconCode + ".png";
        $('img.icon').attr('src', iconUrl);
        var lat = response.coord.lat;
        var lon = response.coord.lon;
        console.log(response);
        console.log(lon);
        console.log(lat);
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${dgWeatherKey}`)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response)
            forcastOne(response);
            forcastTwo(response);
            forcastThree(response);
            forcastFour(response);
            forcastFive(response);
        })


    })


}

function forcastOne(response)
{
    var icon = response.list[0].weather[0].icon;
    var icon = 'http://openweathermap.org/img/w/' + icon + ".png";
    $('img.icon2').attr('src', icon);
    var hours = response.list[0].dt_txt.substring(0, 10);
    $('p#hours2').text('Date: ' + hours);
    var temperature = response.list[0].main.temp_max;
    $('p#temp2').text('Temp: ' + temperature + ' °F');
    var winds = response.list[0].wind.speed;
    $('p#wind2').text('Wind: ' + winds + ' MPH');
    var humids = response.list[0].main.humidity;
    $('p#humid2').text('Humidity: ' + humids + '%');
}

function forcastTwo(response)
{
    var icon = response.list[8].weather[0].icon;
    var icon = 'http://openweathermap.org/img/w/' + icon + ".png";
    $('img.icon3').attr('src', icon);
    var hours = response.list[8].dt_txt.substring(0, 10);
    $('p#hours3').text('Date: ' + hours);
    var temperature = response.list[8].main.temp_max;
    $('p#temp3').text('Temp: ' + temperature + ' °F');
    var winds = response.list[8].wind.speed;
    $('p#wind3').text('Wind: ' + winds + ' MPH');
    var humids = response.list[8].main.humidity;
    $('p#humid3').text('Humidity: ' + humids + '%');
}

function forcastThree(response)
{
    var icon = response.list[16].weather[0].icon;
    var icon = 'http://openweathermap.org/img/w/' + icon + ".png";
    $('img.icon4').attr('src', icon);
    var hours = response.list[16].dt_txt.substring(0, 10);
    $('p#hours4').text('Date: ' + hours);
    var temperature = response.list[16].main.temp_max;
    $('p#temp4').text('Temp: ' + temperature + ' °F');
    var winds = response.list[16].wind.speed;
    $('p#wind4').text('Wind: ' + winds + ' MPH');
    var humids = response.list[16].main.humidity;
    $('p#humid4').text('Humidity: ' + humids + '%');
}

function forcastFour(response)
{
    var icon = response.list[24].weather[0].icon;
    var icon = 'http://openweathermap.org/img/w/' + icon + ".png";
    $('img.icon5').attr('src', icon);
    var hours = response.list[24].dt_txt.substring(0, 10);
    $('p#hours5').text('Date: ' + hours);
    var temperature = response.list[24].main.temp_max;
    $('p#temp5').text('Temp: ' + temperature + ' °F');
    var winds = response.list[24].wind.speed;
    $('p#wind5').text('Wind: ' + winds + ' MPH');
    var humids = response.list[24].main.humidity;
    $('p#humid5').text('Humidity: ' + humids + '%');
}

function forcastFive(response)
{
    var icon = response.list[32].weather[0].icon;
    var icon = 'http://openweathermap.org/img/w/' + icon + ".png";
    $('img.icon6').attr('src', icon);
    var hours = response.list[32].dt_txt.substring(0, 10);
    $('p#hours6').text('Date: ' + hours);
    var temperature = response.list[32].main.temp_max;
    $('p#temp6').text('Temp: ' + temperature + ' °F');
    var winds = response.list[32].wind.speed;
    $('p#wind6').text('Wind: ' + winds + ' MPH');
    var humids = response.list[32].main.humidity;
    $('p#humid6').text('Humidity: ' + humids + '%');
}


function searchHistory()
{
    var lastSearches=[]
    lastSearches.push($('#textSearch').val());
    $.each(lastSearches,function(index,value){
        const p = document.createElement("p");
        p.innerHTML=value;
        document.getElementById("lastSearchHistory").appendChild(p);
    })


}