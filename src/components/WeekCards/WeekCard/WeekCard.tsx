import React,{FC} from 'react'
import cl from './WeekCard.module.css'
import {getNameOfDayWeek} from '../../../helpers/helper'
import { WeatherDay } from '../../../types'

interface WeekCardProps{
  data:WeatherDay
  weatherSystem:boolean
}


const WeekCard:FC<WeekCardProps> = ({data,weatherSystem}) => {
  return (
    <div className={cl.card}>
      <h2 className={cl.card__title}>
        {weatherSystem ? data.day.avgtemp_c+' ℃' : data.day.avgtemp_f+' ℉'}
      </h2>
      <img src={`https:${data.day.condition.icon}`}  alt={data.day.condition.text} />
      <h2 className={cl.card__title}>
        {getNameOfDayWeek(data.date)}
      </h2>
    </div>
  )
}

export default WeekCard
