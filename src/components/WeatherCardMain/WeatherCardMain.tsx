import React,{FC, useState,useEffect} from 'react'
import InputTogle from '../InputTogle/InputTogle'
import cl from './WeathercardMain.module.css'
import { getDayOfMonth,getMonthName,getNameOfDayWeek,getTime,getYear } from '../../helpers/helper'
import WeekCards from '../WeekCards/WeekCards'

interface WeatherCardMainProps{
  data:any
}

const WeatherCardMain:FC<WeatherCardMainProps> = ({data}) => {

  const [weatherSystem,setWeatherSystem]  = useState<boolean>(true)
   console.log(data)
  return (
    <div className={cl.main}>
     
      <div className={cl.main__radio}>
        <img className={cl.main__img} src={`https://${data.current.condition.icon}`} alt="Image of weather" />
        <InputTogle setWeatherSystem = {setWeatherSystem}  weatherSystem = {weatherSystem} />
      </div>
      <h1 className={cl.main__temperature}>
        {weatherSystem ? Math.round(data.current.temp_c): Math.round(data.current.temp_f)}
        <span className={cl.main__span}>{weatherSystem ? '℃' : '℉'}</span></h1>
      <h2 className={cl.main__date}>{getDayOfMonth(data.location.localtime)}th {getMonthName(data.location.localtime)}  ‘{getYear(data.location.localtime)}</h2>
      <h3 className={cl.main__time}>{getNameOfDayWeek(data.location.localtime)}   |   {getTime(data.location.localtime,weatherSystem)}</h3>
      <div className={cl.main__property}>
        <img style={{paddingRight: '7.5px'}} src="/icon/small_icons/wind-direction-icon.png" alt="Wind" />
        <h4 style={{paddingRight:'21px'}}>
          Wind
        </h4>
        <h4 style={{paddingRight:'21px'}}>
        {weatherSystem ? Math.round(data.current.wind_kph) + 'km/h' : Math.round(data.current.wind_mph) + 'm/h'}
        </h4>
        <h4 style={{paddingRight:'21px'}}>
          |
        </h4>
        <img style={{paddingRight: '7.5px'}} src="/icon/small_icons/hum.png" alt="Humidility" />
        <h4 style={{paddingRight:'21px'}}>
          Hum
        </h4>
        <h4   style={{paddingRight:'21px'}}>
          {data.current.humidity}%
        </h4>
        <h4 style={{paddingRight:'21px'}}>
          |
        </h4>
        <img style={{paddingRight: '7.5px'}} src="/icon/small_icons/cloud.png" alt="Cloud" />
        <h4 style={{paddingRight:'21px'}}>
          Rain 
        </h4>
        <h4>
          {data.forecast.forecastday[0].day.daily_chance_of_rain} %     
        </h4>     
      </div>
      <WeekCards weatherSystem={weatherSystem} data={data} />
    </div>
  )
}

export default WeatherCardMain
