import React,{useState} from 'react'
import './WeatherApp.css'
import search_icon from "./Assets/search.png"
import clear_icon from "./Assets/clear.png" 
import cloud_icon from "./Assets/cloud.png"
import drizzle_icon from "./Assets/drizzle.png"
import rain_icon from "./Assets/rain.png"
import snow_icon from "./Assets/snow.png"
import wind_icon from "./Assets/wind.png"
import humidity_icon from "./Assets/humidity.png"

const WeatherApp = () => {

  let api_key="5ec09430ef457a205fe92fc4fb316962"

  const [icon,seticon]=useState(cloud_icon)

  const search = async () => {
    const element = document.getElementsByClassName("city");
    if (element[0].value === "") {
      alert("Enter a city name");
      return;
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`;
  
    let response = await fetch(url);
    let data = await response.json();
    
    if (!data.main) {
      alert("City not found");
      return;
    }

    const humidity = document.getElementsByClassName("percent");
    const windspeed = document.getElementsByClassName("rate");
    const location = document.getElementsByClassName("location");
    const t = document.getElementsByClassName("temp");
  
    humidity[0].innerHTML = data.main.humidity+"%";
    windspeed[0].innerHTML = data.wind.speed+"kmph";
    t[0].innerHTML = data.main.temp+"°C";
    location[0].innerHTML = data.name;
    if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")
    {
      seticon(clear_icon);
    }
    else if(data.weather[0].icon==="02d" ||data.weather[0].icon==="02n")
    {
      seticon(cloud_icon)
    }
    else if(data.weather[0].icon==="03d" ||data.weather[0].icon==="03n")
    {
      seticon(drizzle_icon)
    }
    else if(data.weather[0].icon==="04d" ||data.weather[0].icon==="04n")
    {
      seticon(drizzle_icon)
    }
    else if(data.weather[0].icon==="09d" ||data.weather[0].icon==="09n")
    {
      seticon(rain_icon)
    }
    else if(data.weather[0].icon==="10d" ||data.weather[0].icon==="10n")
    {
      seticon(rain_icon)
    }
    else if(data.weather[0].icon==="13d" ||data.weather[0].icon==="13n")
    {
      seticon(snow_icon)
    }
    else{
      seticon(clear_icon)
    }
  };
  
  return (
    <div className="container">
        <div className="top">
            <input type="text" className="city" placeholder="Enter City" />
            <div className="search" onClick={()=>{search()}}>
                <img src={search_icon} alt="" />
            </div>
        </div>
        <div className="image">
          <img src={icon} alt="" />
        </div>
        <div className="temp">24°C</div>
        <div className="location">Visakhapatnam</div>
        <div className="data-container">
          <div className="elements">
            <img src={humidity_icon} alt="" className='icon' />
            <div className="data">
            <div className="percent">64%</div>
            <div className="humidity">humidity</div>
            </div>
          </div>
          <div className="elements">
            <img src={wind_icon} alt="" className='icon' />
            <div className="data">
            <div className="rate">18kmph</div>
            <div className="windspeed">windspeed</div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default WeatherApp
