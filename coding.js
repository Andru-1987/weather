// valores del input
let $button=document.querySelector('.button');
let inputValue=document.querySelector('.inputValue').value;
let header=document.querySelector('.headline');

// Valores de info
var displayCity=document.querySelector('.displayCity');
var temperature=document.querySelector('.temperature');
var temperatureCelsius=document.querySelector('.temperatureCelsius');
var weatherOvercast=document.querySelector('.weatherOvercast');

//Function change to Celcius degrees plus Farenheith degrees

      function celsius(temp) {
      let celsiusTemp=temp-273.15;
      return celsiusTemp;
      };

      function faren(temp) {
      let farenTemp=(temp*(9/5))-459.67;
      return farenTemp;
      };


// retriving info releated to the Weather API

$button.onclick=function(){
let valor =document.querySelector('.inputValue').value;
const url=`http://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=808ed00cf43e6f99dec53060b078baea`;
      fetch(url)
      .then(response => response.json())
      // .then(data => console.log(data))
      .then(data =>
                {
                let nameValue=data['name'];

                let tempValue=data['main']['temp'];
                let temperatureValue=Number(tempValue);
                let weatherOvercastValue=data['weather']['0']['description'];

                displayCity.innerHTML = nameValue;
                header.innerHTML=nameValue;

                // Grados Farenheith
                temperature.innerHTML=Math.round(faren(temperatureValue))+' ºFarenheith';
                // Grados Celsius
                temperatureCelsius.innerHTML=Math.round(celsius(temperatureValue)) + ' ºCelsius';
                weatherOvercast.innerHTML=weatherOvercastValue;
                })

      .catch(err => alert("Wrong city's name!"));
      return false;
}
