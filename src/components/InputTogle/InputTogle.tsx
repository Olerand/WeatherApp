import React from 'react';
import cl from './InputTogle.module.css';

const InputToggle = () => {
  return (
    <div className={`${cl.button} ${cl.r}`}>
      <input type="checkbox" className={cl.checkbox} onChange={()=>console.log(1)} />
      <div className={cl.knobs}></div>
      <div className={cl.layer}></div>
    </div>
  );
};

export default InputToggle;