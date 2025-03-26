import React,{FC} from 'react'
import InputTogle from '../InputTogle/InputTogle'
import cl from './WeathercardMain.module.css'



interface WeatherCardMainProps{
  data:any
}

const WeatherCardMain:FC<WeatherCardMainProps> = ({data}) => {
   console.log(data)
  return (
    <div className={cl.main}>
      <div className={cl.main__radio}>
        <img src="/icon/WeatherIcon1.png" alt="Weather Icon"/>
        <InputTogle/>
      </div>
      <h1 className={cl.main__temperature}>{Math.round(data.current.temp_c)}<span className={cl.main__span}>℃</span></h1>
      <h2 className={cl.main__date}>17th Jun ‘21</h2>
      <h3 className={cl.main__time}>Thrusday   |   2:45 am</h3>
      <div className={cl.main__property}>
        <img style={{paddingRight: '7.5px'}} src="/icon/small_icons/wind-direction-icon.png" alt="Wind" />
        <h4 style={{paddingRight:'21px'}}>
          Wind
        </h4>
        <h4 style={{paddingRight:'21px'}}>
        10km/h
        </h4>
        <h4 style={{paddingRight:'21px'}}>
          |
        </h4>
        <img style={{paddingRight: '7.5px'}} src="/icon/small_icons/hum.png" alt="Humidility" />
        <h4 style={{paddingRight:'21px'}}>
          Hum
        </h4>
        <h4   style={{paddingRight:'21px'}}>
          %
        </h4>
        <h4 style={{paddingRight:'21px'}}>
          |
        </h4>
        <img style={{paddingRight: '7.5px'}} src="/icon/small_icons/cloud.png" alt="Cloud" />
        <h4 style={{paddingRight:'21px'}}>
          Rain 
        </h4>
        <h4>
          0.2%     
        </h4>     
      </div>
    </div>
  )
}

export default WeatherCardMain
