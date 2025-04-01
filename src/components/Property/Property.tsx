import React,{FC} from 'react'
import cl from './Property.module.css'
import { WeatherData } from '../../types'

interface PropertyProps{
    data:WeatherData
    weatherSystem:boolean
}



const Property:FC<PropertyProps> = ({data,weatherSystem}) => {
  return (
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

  )
}

export default Property
