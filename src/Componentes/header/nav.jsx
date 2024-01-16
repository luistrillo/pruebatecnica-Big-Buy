import React from 'react'
import './style.css'
import BotonesBasicos from '../botones/BotonesBasicos'
import Logo from '../logo/Logo';

const links = [
  { id: 1, text: 'Conocenos', url: '#' },
  { id: 2, text: 'Soluciones', url: '#' },
  { id: 3, text: 'Tecnología & operaciones', url: '#' },
  { id: 4, text: 'Precio', url: '#' },
  { id: 5, text: 'Catálogo', url: 'https://www.bigbuy.eu/es/tiendab2b.html' },
];

const PrimerComponente = () => {
  return (
    <header>
      <nav class="menu">
        <Logo UrlBigBuy="https://bigbuy.eu" ImgBigBuy="/src/assets/logo/logo-bigbuy.svg" clase="menu__logo"></Logo>
        <ul class="menu__ul">
          {links.map(link => (
            <li class="menu__li" key={link.id}>
              <a class="menu__enlaces" href={link.url}>{link.text}
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
                </svg>
              </a>
            </li>
          ))}
        </ul>
        <BotonesBasicos enlace="https://google.es" texto="Iniciar sesión"></BotonesBasicos>
      </nav>
    </header>

  )
}

export default PrimerComponente
