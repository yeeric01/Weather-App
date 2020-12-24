//key
let mykey = config.MY_KEY;

//load info from Dallas
fetch(`http://api.openweathermap.org/data/2.5/weather?q=Dallas&units=imperial&APPID=${mykey}`, {mode: 'cors'})
.then(function(response) { 
    return response.json();
})
.then(function(response){
    let weather = document.querySelector(".weather");
    let tmp = document.querySelector(".tmp");
    let location = document.querySelector(".location");
    let description = document.querySelector(".description");
    let windspeed = document.querySelector(".wind-speed");

    weather.innerHTML = response.weather[0].main;
    tmp.innerHTML = response.main.temp+'\u2109';
    location.innerHTML = response.name+", "+response.sys.country;
    description.innerHTML = response.weather[0].description;
    windspeed.innerHTML = response.wind.speed;
});



let input = document.querySelector('.actualbar');
//get text from user
window.onkeyup = keyup;
var inputTextValue;
input.addEventListener('input', keyup);
function keyup(e) {
  inputTextValue = e.target.value;
  if (e.keyCode == 13) {
    //get info from API
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputTextValue}&units=imperial&APPID=${mykey}`, {mode: 'cors'})
    .then(function(response) { 
        return response.json();
    })
    .then(function(response){
        let weather = document.querySelector(".weather");
        let tmp = document.querySelector(".tmp");
        let location = document.querySelector(".location");
        let description = document.querySelector(".description");
        let windspeed = document.querySelector(".wind-speed");

        weather.innerHTML = response.weather[0].main;
        tmp.innerHTML = response.main.temp+'\u2109';
        location.innerHTML = response.name+", "+response.sys.country;
        description.innerHTML = response.weather[0].description;
        windspeed.innerHTML = response.wind.speed;
    });


    e.target.value= "";
  }
}