import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";
import Preloader from './components/Preloader/Preloader';
import WeatherCardMain from './components/WeatherCardMain/WeatherCardMain';
import WeatherCardSide from './components/WeatherCardSide/WeatherCardSide';
import { WeatherData } from './types';

const API_KEY:string = process.env.REACT_APP_API_KEY as string;
localStorage.lastCity = localStorage.lastCity || 'Moscow'

const  App = () =>{


  const [weatherData,setWeatherData] = useState<WeatherData>()
  const [city,setCity] = useState<string>(localStorage.lastCity)
  async function fetchWeather(city:string){
    try{
      const response =  await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=5&aqi=no&alerts=no`)
      setWeatherData(response.data)
    }catch (error){
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchWeather(city)
  },[city])
 


  return (
    <div className='card'>
      {
        weatherData != null ? 
        <>
          <WeatherCardMain 
            data = {weatherData}/>
          <WeatherCardSide 
          data={weatherData} 
          city={city} 
          setCity={setCity}  />
        </>
        :
        null
      }
    </div>
  );
}

export default App;
