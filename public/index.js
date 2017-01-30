var tempLog = {name:null, data: [], categories: []};
var tempLog2 = {name:null, data: [], categories: []};

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open('GET', url);
  request.onload = callback;
  request.send();
}

var loopTimes = function(data,ul){
  var liTemp = document.createElement('li');
  liTemp.innerText = "Temperature @ " + data.dt_txt +" :"+ Math.round(data.main.temp-273.15) + "°C";
  ul.appendChild(liTemp);
  tempLog.data.push(data.main.temp-273.15);
  tempLog.categories.push(data.dt_txt)
}

var loopTimesWind = function(data,ul){
  var liTemp = document.createElement('li');
  liTemp.innerText = "Wind Speed @ " + data.dt_txt +" :"+ Math.round(data.wind.speed) + " mph";
  ul.appendChild(liTemp);
  tempLog2.data.push(data.wind.speed);
  tempLog2.categories.push(data.dt_txt)
}


var display = function(data){
  var cityForecast = document.querySelector('#city-forecast')
  cityForecast.innerHTML = ""
  var ul = document.createElement('ul');
  var liName = document.createElement('li');
  liName.innerText = "City Name: " + data.city.name
  tempLog.name = data.city.name;
  console.log(data)
  data.list.forEach(function (data) { 
    loopTimes(data,ul)
  })
  ul.appendChild(liName);
  cityForecast.appendChild(ul);
  new ColumnChart(tempLog)
}


var windSpeed = function(data){
  var cityForecast2 = document.querySelector('#city-forecast2')
  cityForecast2.innerHTML = ""
  var ul = document.createElement('ul');
  var liName = document.createElement('li');
  liName.innerText = "City Name: " + data.city.name
  tempLog.name = data.city.name;
  console.log(data)
  data.list.forEach(function (data) { 
    loopTimesWind(data,ul)
  })
  ul.appendChild(liName);
  cityForecast2.appendChild(ul);
  new ColumnChart2(tempLog)
}

var requestComplete = function(){
  if(this.status !== 200) return;
  var jsonString = this.responseText;
  var data = JSON.parse(jsonString);
  display(data);
  windSpeed(data);

}


var handleClick = function(){
  var searchQuery = document.querySelector('#search-query');
  var cityName = searchQuery.value;
  var url = 'http://api.openweathermap.org/data/2.5/forecast?q=' +cityName +'&appid=56445a578563841864f436c7c7a65e4f';
  makeRequest(url, requestComplete)
}


var app = function(){
  var button = document.querySelector('#button');
  button.onclick = handleClick;

}

window.onload = app;