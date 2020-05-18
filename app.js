var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp=document.querySelector('.temp');
var mintemp = document.querySelector('.mintemp');
var humidity=document.querySelector('.humidity');
var maxtemp=document.querySelector('.maxtemp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=61e6ea96f2526945bbbf2c39dc061cd6')
.then(response => response.json())
.then(data => {
  var tempValue=data['main']['temp'];
  var mintempValue = data['main']['temp_min'];
  var maxtempValue= data['main']['temp_max'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var humidityValue=data['main']['humidity'];

  main.innerHTML = nameValue;
  temp.innerHTML="Temperature - "+tempValue+" F";
  desc.innerHTML = "Description - "+descValue;
  mintemp.innerHTML = "Min - "+mintempValue+" F";
  maxtemp.innerHTML="Max - "+maxtempValue+" F";
  humidity.innerHTML="Humidity - "+humidityValue+" %";
  
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})