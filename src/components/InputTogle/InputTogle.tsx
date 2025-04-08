import React,{FC} from 'react';
import cl from './InputTogle.module.css';



interface InputToggleProps{
  weatherSystem:boolean,
  setWeatherSystem: (value:boolean)=>void;
}



const InputToggle:FC<InputToggleProps> = ({weatherSystem,setWeatherSystem}) => {
  return (
    <div className={`${cl.button} ${cl.r}`}>
      <input type="checkbox" className={cl.checkbox} onChange={()=>setWeatherSystem(!weatherSystem)} />
      <div className={cl.knobs}></div>
      <div className={cl.layer}></div>
    </div>
  );
};

export default InputToggle;