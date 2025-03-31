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
        <h1 className={cl.title}>Sunrise</h1>
        <div className={cl.watch}>   
          <img  className={cl.arrows} src={watchIcon} alt="watch" />
          <h2 className={cl.timeMain}>
              11:24
            </h2>
            <h2 className={cl.timeSide}>
              11:24
            </h2>
        </div>
      </div>
      <div   className={cl.wrapper}>
        <h1 className={cl.title}>Golden Hour</h1>
        <div  className={cl.watch}>
          <img className={cl.arrows} src={watchIcon} alt="watch" />
          <h2 className={cl.timeMain}>
              11:24 <span>AM</span>
            </h2>
            <h2 className={cl.timeSide}>
              11:24 <span>PM</span>
            </h2>
        </div>
      </div >
      <div  className={cl.wrapper}>
        <h1 className={cl.title}>Sunset</h1>
        <div className={cl.watch}>
            <img className={cl.arrows} src={watchIcon} alt="watch" />
            <h2 className={cl.timeMain}>
              11:24
            </h2>
            <h2 className={cl.timeSide}>
              11:24
            </h2>
        </div>
      </div>
    </div>
  )
}

export default Watch