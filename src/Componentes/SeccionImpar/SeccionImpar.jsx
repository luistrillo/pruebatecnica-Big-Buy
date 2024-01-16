import React from 'react'

import './SeccionImpar.css'

export default function logistica({Titulo, Descripcion, url, clase}) {
  return (
    <section className={clase}>
        <div className="seccion__img">
            <img className='almacen__foto' src={url} alt="" />
        </div>
        <div class="seccion__desc desc">
            <p class="desc__title">{Titulo}</p>
            <p class="desc__text">{Descripcion}</p>
        </div>
    </section>
  )
}
