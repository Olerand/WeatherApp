import React,{FC, useEffect, useState} from 'react'
import cl from './WeatherCardSide.module.css'
import { WeatherData } from '../../types'
import InputSearch from '../InputSearch/InputSearch'
import Watch from '../Watch/Watch'
import Index from '../Index/Index'
interface WeatherCardSideProps{
  city:string
  setCity:(value:string) => void;
  data:WeatherData
  children?: React.ReactElement
}


const WeatherCardSide:FC<WeatherCardSideProps> = ({data,city,setCity}) => {
  
  return (
    <div className={cl.card}>
      <InputSearch data={data} setCity={setCity}  />
      <Watch data={data}   />
      <Index data={data}/>
    </div>
  )
}

export default WeatherCardSide
