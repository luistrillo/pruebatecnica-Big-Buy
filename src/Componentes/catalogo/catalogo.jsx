import React, { Fragment } from 'react'
import './catalogo.css'
import Adidas from '../../assets/images/adidas.jpeg'
import Ck from '../../assets/images/ck.png'
import Lenovo from '../../assets/images/lenovo.png'
import Samsung from '../../assets/images/samsung.jpg'
import Video from '../../assets/video/catalogo.mp4'


const imagenes = [
  { id: 1, textalt: 'Adidas', url: Adidas },
  { id: 2, textalt: 'Calvin Klein', url: Ck },
  { id: 3, textalt: 'Lenovo', url: Lenovo },
  { id: 4, textalt: 'Samsung', url: Samsung },
];


export default function catalogo() {
  return (
    <section class="catalogo">
      <h3 class="catalogo__title">Amplio catálogo</h3>
      <p class="catalogo__descripcion">Ofrecemos un mundo de posibilidades con nuestro amplio catálogo que reúne las mejores marcas. Desde productos de alta calidad hasta las últimas tendencias. Podrás explorar y elegir aquello que tu negocio necesite.</p>
      <video type="video/mp4" autoPlay loop muted src={Video} className='catalogo__video'></video>
      <div class="catalogo__marcas marcas">
        
        {imagenes.map(images => (
          <div class="marcas__bloque">
            <img class="catalogo__logos" src={images.url} alt={images.textalt}>
            </img>
          </div>
        
        ))}
      </div>
    </section>
  )
}
