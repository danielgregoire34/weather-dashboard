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
        $('p.current-temp').text('Temp: ' + currentTemp + ' Degrees Fahrenheit');
        var currentWind = response.wind.speed; 
        $('p.current-wind').text('Wind: ' + currentWind + 'mph');
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
    $('p#temp2').text('Temp: ' + temperature + ' Degrees Fahrenheit');
    var winds = response.list[0].wind.speed;
    $('p#wind2').text('Wind: ' + winds + 'mph');
    var humid = response.list[0].main.humid;
    $('p#humid2').text('Humidity: ' + humid + '%');

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