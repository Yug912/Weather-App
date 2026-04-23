let cityname=document.querySelector('.cityname');
let searchbtn=document.querySelector('.searchbtn');
let weatherimage=document.querySelector('.weather-image')
let temp=document.querySelector('.temp');
let description=document.querySelector('.description');
let humidity=document.querySelector('#humidity');
let windspeed=document.querySelector('#wind-speed');
let locationnotfound=document.querySelector('.location-not-found');
let weatherbody=document.querySelector('.weather-body');


async function checkweather(city)
{
    const api_key = "acf76042bb8b8db038651fdc9667371b";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
   const weatherdata= await fetch(url).then(response=>response.json());
    console.log(weatherdata);
    if(weatherdata.cod === "404"||city=="")
    {
        weatherbody.style.display="none";
        locationnotfound.style.display="flex";
       
        return;
    }
    
    weatherbody.style.display="flex";
    locationnotfound.style.display="none";
    temp.innerHTML= `${Math.round(weatherdata.main.temp-273.15)}°C`;
    description.innerHTML= `${weatherdata.weather[0].description}`;
    humidity.innerHTML= `${weatherdata.main.humidity}%`;
    windspeed.innerHTML= `${weatherdata.wind.speed} km/h`;

    switch(weatherdata.weather[0].main)
    {
        case 'Clouds':
            weatherimage.src="cloud.png";
            break;
        case 'Clear':
            weatherimage.src="clear.png";
            break;
        case 'Rain':
            weatherimage.src="rain.png";
            break;
        case 'Snow':
            weatherimage.src="snow.png";
            break;
        case 'Mist':
            weatherimage.src="mist.png";
            break;
        case 'Haze':
            weatherimage.src="Haze.png";
            break;
    }
   
}


searchbtn.addEventListener('click',()=>{
      checkweather(cityname.value);
});