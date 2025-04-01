import React,{FC} from 'react'
import { WeatherData } from '../../types'
import cl from './Info.module.css'
import { getDayOfMonth,getMonthName,getNameOfDayWeek,getTime,getYear } from '../../helpers/helper'
interface InfoProps{
    data:WeatherData
    weatherSystem:boolean
}


const Info:FC<InfoProps> = ({data,weatherSystem}) => {
  return (
    <>
    <h1 className={cl.main__temperature}>
        {weatherSystem ? Math.round(data.current.temp_c): Math.round(data.current.temp_f)}
        <span className={cl.main__span}>{weatherSystem ? '℃' : '℉'}</span></h1>
      <h2 className={cl.main__date}>{getDayOfMonth(data.location.localtime)}th {getMonthName(data.location.localtime)}  ‘{getYear(data.location.localtime)}</h2>
      <h3 className={cl.main__time}>{getNameOfDayWeek(data.location.localtime)}   |   {getTime(data.location.localtime,weatherSystem)}</h3>
    </>
  )
}

export default Info
