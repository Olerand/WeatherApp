import React,{FC} from 'react'
import { WeatherData } from '../../types'
import cl from './Index.module.css'

interface IndexProps{
    data:WeatherData
}



const Index:FC<IndexProps> = ({data}) => {


  
  function getLevelOfAirQuality(level:number):string{
    switch(level){
      case 0:return 'Good'
      case 1:return 'Moderate'
      case 2:return 'Unhealthy'
      case 3: return 'Very unhealthy'
      default:return 'Hazardous'
    }
  }
  function getLevelOfUV(level:number):string{
    switch(level){
      case 0:return 'Low'
      case 1:return 'Low'
      case 2:return 'Low'
      case 3:return 'Medium'
      case 4:return 'Medium'
      case 5:return 'Medium'
      case 6:return 'High'
      case 7:return 'High'
      case 8:return 'Very high'
      case 9:return 'Very high'
      case 10:return 'Very high'
      default:return 'Extremly high'
    }
  }

  return (
    <div className={cl.index}>
        <div className={cl.lineInfo}>
            <hr  className={cl.lineInfo__hr} />
            <button className={cl.lineInfo__button}><h1 className={cl.lineInfo__text}>i</h1></button>
        </div>
        <div className={cl.input}>
            <div className={cl.input__chunk}>
              <h1 className={cl.input__title}>
                Air Quality
              </h1>
              <input disabled min={0} max={6} defaultValue={data.current.air_quality['us-epa-index']} className={cl.input__range} type="range" />
              <h2 className={cl.input__text}>{data.current.air_quality['us-epa-index']}\6</h2>
              <h2 className={cl.input__text}> {getLevelOfAirQuality(data.current.air_quality['us-epa-index'])}</h2>
            </div>
            <div className={cl.input__chunk}>
              <h1 className={cl.input__title}>
                UV Index
              </h1>
              <input disabled min={0} max={11} defaultValue={data.current.uv}  className={cl.input__range} type="range" />
              <h2 className={cl.input__text}>{data.current.uv}/11 </h2>
              <h2 className={cl.input__text}>{getLevelOfUV(data.current.uv)} </h2>
            </div>
        </div>
    </div>
  )
}

export default Index
