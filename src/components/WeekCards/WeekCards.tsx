import React,{FC} from 'react'
import cl from './WeekCards.module.css'
import WeekCard from './WeekCard/WeekCard'
import { WeatherData, WeatherDay } from '../../types'

interface WeekCardsProps{
    data:WeatherData
    weatherSystem:boolean
}


const WeekCards:FC<WeekCardsProps> = ({data,weatherSystem}) => {
  return (
    <div className={cl.week}>
      {data.forecast.forecastday.map((day:WeatherDay,index:number) => (
        <WeekCard key={index} weatherSystem={weatherSystem} data={day}/>
      ))}
    </div>
  )
}

export default WeekCards
