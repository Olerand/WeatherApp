import React,{FC} from 'react'
import cl from './WeekCards.module.css'
import WeekCard from './WeekCard/WeekCard'

interface WeekCardsProps{
    data:any
    weatherSystem:boolean
}


const WeekCards:FC<WeekCardsProps> = ({data,weatherSystem}) => {
  return (
    <div className={cl.week}>
      {data.forecast.forecastday.map((day:any,index:number) => (
        <WeekCard key={index} weatherSystem={weatherSystem} data={day}/>
      ))}
    </div>
  )
}

export default WeekCards
