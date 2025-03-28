import React,{FC} from 'react'
import { WeatherData } from '../../types'
import cl from './Watch.module.css'
import watchIcon from './../../assets/icon/watch.png'


interface WatchProps{
      data:WeatherData
}


const Watch:FC<WatchProps> = ({data}) => {
  return (
    <div  className={cl.watches} >
      <div className={cl.wrapper}>
        Sunrise
        <div className={cl.watch}>   
            <img src={watchIcon} alt="watch" />
        </div>
      </div>
      <div   className={cl.wrapper}>
        Golden Hour
        <div style={{width:'130px',height:'245px'}} className={cl.watch}>
        <img src={watchIcon} alt="watch" />
        </div>
      </div >
      <div  className={cl.wrapper}>
        Sunset
        <div className={cl.watch}>
            <img src={watchIcon} alt="watch" />
        </div>
      </div>
    </div>
  )
}

export default Watch