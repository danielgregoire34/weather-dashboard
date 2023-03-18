var weatherSearch =document.querySelector('#weatherSearch');
var searchForm =document.querySelector('#searchForm');
var textSearch =document.querySelector('#textSearch');
var searchBtn =document.querySelector('#searchBtn');
var lastSearches = [];
var dgWeatherKey = '75611633ad3b112fdba7848cde5411b5';


document.getElementById('searchBtn').onclick = function(event) {
    currentWeather();
    event.preventDefault();

};


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
        fetch(`https://api.openweathermap.org/data/2.5/forcast?lat=${lat}&lon=${lon}&appid=${dgWeatherKey}`)
        .then(function(response){
            return response.json();
        })
        .then(function(response){
            console.log(response)
    
            var icon = response.list[0].weather[0].icon;
            var icon = 'http://openweathermap.org/img/w/' + icon + ".png";
            $('img.icon1').attr('src', icon);
            
            var hours = response.list[0].dt_txt.substring(0, 10);
            $('p#hours1').text('Date: ' + hours);

            var temperature = response.list[0].main.temp_max;
            $('p#temp1').text('Temp: ' + temperature + ' Degrees Fahrenheit');
        
            var winds = response.list[0].wind.speed;
            $('p#wind1').text('Wind: ' + winds + 'mph');
        
            var humid = response.list[0].main.humid;
            $('p#humid1').text('Humidity: ' + humid + '%');
        
        
        
    
        })
    





    })


}


function searchHistory()
{

for (var i=0;i<lastSearches.length;i++)
{
    

}

}