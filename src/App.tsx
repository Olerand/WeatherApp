import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";

import WeatherCardMain from './components/WeatherCardMain/WeatherCardMain';
import WeatherCardSide from './components/WeatherCardSide/WeatherCardSide';


const API_KEY:string = process.env.REACT_APP_API_KEY as string;

const  App = () =>{

  const [weatherData,setWeatherData] = useState<any>(null)
  const [city,setCity] = useState<string>('Mariupol')
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
        <div>
          <WeatherCardMain 
            data = {weatherData}/>
          <WeatherCardSide/>
        </div>
        :
        null
      }
     
    </div>

    
  );
}

export default App;
