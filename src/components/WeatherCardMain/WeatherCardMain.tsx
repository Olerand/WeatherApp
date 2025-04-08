import React,{FC, useState} from 'react'
import InputTogle from '../InputTogle/InputTogle'
import cl from './WeathercardMain.module.css'
import Info from '../Info/Info'
import WeekCards from '../WeekCards/WeekCards'
import { WeatherData } from '../../types'
import Property from '../Property/Property'

interface WeatherCardMainProps{
  data:WeatherData
  children?:React.ReactElement 
}

const WeatherCardMain:FC<WeatherCardMainProps> = ({data}) => {

  const [weatherSystem,setWeatherSystem]  = useState<boolean>(true)
   console.log(data)
  return (
    <div className={cl.main}>
      <div className={cl.main__radio}>
        <img className={cl.main__img} src={`https://${data.current.condition.icon}`} alt="Weather condition" />
        <InputTogle setWeatherSystem = {setWeatherSystem}  weatherSystem = {weatherSystem} />
      </div>
      <Info data={data} weatherSystem={weatherSystem}/>
      <Property data={data} weatherSystem={weatherSystem}/>
      <WeekCards weatherSystem={weatherSystem} data={data} />
    </div>
  )
}

export default WeatherCardMain
