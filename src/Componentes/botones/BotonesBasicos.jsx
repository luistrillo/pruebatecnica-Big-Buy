import React from 'react'
import './BotonesBasicos.css'

export default function BotonesBasicos({enlace, texto, clase}) {
  return (
    <div>
      <a class={clase} href={enlace}>{texto}</a>
    </div>
      
  )
}
