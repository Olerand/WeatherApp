import React from 'react'
import cl from  './Preloader.module.css'

const Preloader = () => {
  return (
    <div className={cl.loader}>
        <svg className={cl.loader__svg} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.0" width="256px" height="256px" viewBox="0 0 128 128" xmlSpace="preserve"><defs><linearGradient id="linear-gradient"><stop offset="0%" stopColor="#ffffff" /><stop offset="100%" stopColor="#ff31ac" /></linearGradient></defs><g><path d="M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z" fill="url(#linear-gradient)" fillRule="evenodd" /><animateTransform attributeName="transform" type="rotate" from="0 64 64" to="360 64 64" dur="240ms" repeatCount="indefinite" /></g></svg>
        <h1  className={cl.loader__title}>Loading...</h1>
    </div>
  )
}

export default Preloader
