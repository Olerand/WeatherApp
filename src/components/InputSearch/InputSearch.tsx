import React,{FC,useState} from 'react'
import { WeatherData } from '../../types';
import cl from './InputSearch.module.css'


interface InputSearchProps{
      setCity:(value:string) => void;
      data:WeatherData
}

const InputSearch:FC<InputSearchProps> = ({setCity,data}) => {

    const [input,setInput] = useState<string>('')

  const handleClick = () =>
  {
    setCity(input)
    localStorage.lastCity = input
    setInput('')
  }



  return (
      <div className={cl.input}>
        <img className={cl.input__place} src="/icon/small_icons/Frame.png" alt="Place" />
        <input onChange={(e)=>setInput(e.target.value)} value={input} className={cl.input__search} type="text" placeholder={data.location.name + ',' + data.location.country}  />
        <button onClick={handleClick}  className={cl.input__button}>
          <img className={cl.input__vector}  src="/icon/small_icons/Vector.png" alt="Search" />
        </button>
      </div>
  )
}

export default InputSearch
