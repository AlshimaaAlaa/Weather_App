import React, { useState } from 'react';
import "./WeatherApp.css";
import "bootstrap/dist/css/bootstrap.min.css";
function WeatherApp() {
  const apiKey = "488fa9f511507c5a61a0ab1d1cbcb912";
  const [icon , setIcon] = useState('/Assets/cloud.png');
  async function searchCity(){
    const element = document.querySelector('.search-input');
    const inputVaue = element.value;

    //عشان لو ضغطت علي السيرش و مش جواه كلام مكتوب ميطلعش ايرور
    if(inputVaue === ""){
      return 0;
    }

    const url =  `https://api.openweathermap.org/data/2.5/weather?q=${inputVaue}&units=Metric&appid=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)

    const humidity = document.querySelector('.humidity-percent');
    const wind = document.querySelector(".wind-rate");
    const temprture = document.querySelector(".temprtures");
    const city = document.querySelector(".location");

    humidity.innerHTML = data.main.humidity +"%";
    wind.innerHTML = data.wind.speed +"Km/h";
    temprture.innerHTML =  data.main.temp + `C`;
    city.innerHTML = data.name;

    if(data.weather[0].icon === "01d" || data.weather[0].icon === "01n"){
      setIcon('/Assets/clear.png');
    }else if(data.weather[0].icon === "02d" || data.weather[0].icon === "02n"){
      setIcon('/Assets/cloud.png');
    }else if(data.weather[0].icon === "03d" || data.weather[0].icon === "03n"){
      setIcon('/Assets/drizzle.png');
    }else if(data.weather[0].icon === "04d" || data.weather[0].icon === "04n"){
      setIcon('/Assets/drizzle.png');
    }else if(data.weather[0].icon === "09d" || data.weather[0].icon === "09n"){
      setIcon('/Assets/rain.png');
    }else if(data.weather[0].icon === "010d" || data.weather[0].icon === "010n"){
      setIcon('/Assets/rain.png');
    }else if(data.weather[0].icon === "013d" || data.weather[0].icon === "013n"){
      setIcon('/Assets/snow.png');
    }else{
      setIcon('/Assets/clear.png');
    }
  }
  return (
    <div className='weather-container' >
      <div className='searc-div'>
        <input type='text' placeholder='Search' className='search-input'/>
        <img src='/Assets/search.png' className='search-icon' onClick={searchCity}/>
      </div>
      <div className='icon'>
        <img src={icon}/>
      </div>
      <div className='temprture'><h1 className='temprtures'>24 <sup>o</sup> C</h1></div>
      <div className='city'>
        <h1 className='location'>London</h1></div>
      <div className='data'>
        <div className='element'>
          <div><img src='/Assets/humidity.png'/></div>
          <div className='humidity'>
            <h5 className='m-0 humidity-percent'>64%</h5>
            <p className='m-0 fw-lighter '>Humidity</p>
          </div>
        </div>
        <div className='element '>
          <div><img src='/Assets/wind.png'/></div>
            <div className='wind'>
              <h5 className='m-0 wind-rate'>18 Km/h</h5>
              <p className='m-0 fw-lighter '>Wind Speed</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default WeatherApp;