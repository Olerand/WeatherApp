import './App.css'
import axios from "axios";
import { useEffect, useState } from "react";

import WeatherCardMain from './components/WeatherCardMain/WeatherCardMain';
import WeatherCardSide from './components/WeatherCardSide/WeatherCardSide';


const apiKey:string = process.env.REACT_APP_API_KEY as string;
const  App = () =>{

  const [weatherData,setWeatherData] = useState<any>('')

  async function fetchWeather(city:string){
    try{
      const response =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
      setWeatherData(response.data)
    }catch (error){
      console.log(error)

    }
  
  }


  useEffect(()=>{
    fetchWeather('Taranto')
  },[])


  return (
    <div className='card'>
      <WeatherCardMain  data = {weatherData}/>
      <WeatherCardSide/>
    </div>

    
  );
}

export default App;
