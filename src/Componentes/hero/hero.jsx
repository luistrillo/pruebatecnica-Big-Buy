import React from 'react'
import './hero.css'
import Btn from '../botones/BotonesBasicos'


export default function hero() {
    return (

        <section class="hero">
            <div class="hero__filtro"></div>
            <div class="hero__contenido">
                <div class="hero__hr"></div>
                <h1 class="hero__titulo">Packs mayorista</h1>
                <h2 class="hero__subtitulo">Vende sin preocupaciones, nosotros hacemos el resto</h2>
                <Btn enlace="#packs" texto="Ver Packs" clase="btn btn-amarillo btn-hero"></Btn>
            </div>
            

        </section>

    )
}
