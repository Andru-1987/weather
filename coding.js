// valores del input
let $button=document.querySelector('.button');
let inputValue=document.querySelector('.inputValue').value;
// Valores de info
var displayCity=document.querySelector('.displayCity');
var temperature=document.querySelector('.temperature');
var weatherOvercast=document.querySelector('.weatherOvercast');

    console.log(inputValue);


$button.onclick=function(){

      console.log(document.querySelector('.inputValue').value);
      let valor =document.querySelector('.inputValue').value;
      console.log(typeof(document.querySelector('.inputValue').value));
      console.log(valor);
      const url=`http://api.openweathermap.org/data/2.5/weather?q=${valor}&appid=808ed00cf43e6f99dec53060b078baea`;
      console.log(url);
      fetch(url)
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(err => alert("Wrong city's name!"));
      // return false;


}
