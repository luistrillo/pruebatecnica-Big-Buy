import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './Componentes/header/nav'
import Hero from './Componentes/hero/hero'
import Catalogo from './Componentes/catalogo/catalogo'
import SeccionImpar from './Componentes/SeccionImpar/SeccionImpar'
import Almacen from '../src/assets/images/almacen.jpg'
import Pedidos from '../src/assets/images/pedidos.jpg'
import Ecommerce from '../src/assets/images/marketplaces3.svg'
import BotonesBasicos from './Componentes/botones/BotonesBasicos'
import Resultados from './Componentes/resultados/Resultados'
import Card from './Componentes/card/card'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav></Nav>
    <Hero></Hero>
    <h3 className='title-section'>Ventajas de trabajar con BigBuy</h3>
    <SeccionImpar 
      Titulo="Almacen y Envio" 
      Descripcion="Nuestro almacén logístico, con una impresionante extensión de 20.000 m², donde resguardamos y distribuimos nuestro stock, en el que la eficiencia y la organización se unen para garantizar que cada producto esté listo para llegar a las manos de tu cliente en tiempo récord. Nuestro compromiso con la excelencia logística se refleja en cada rincón de este espacio, asegurando que cada artículo que eliges para tu tienda se almacene con cuidado y dedicación. Trabajamos en colaboración con diferentes agencias de transporte para ofrecer una gran flexibilidad de envio a diferntes partes de europa. Descubre la sinfonía perfecta entre espacio, tecnología y servicio mientras hacemos que la velocidad de recepción sea simplemente extraordinaria" 
      url={Almacen} 
      clase="seccion"
    ></SeccionImpar>
    <SeccionImpar 
      Titulo="Pedidos y Empaquetado" 
      Descripcion="En nuestro compromiso con la excelencia, nos encargamos con especial dedicación de la preparación de los pedidos y el meticuloso empaquetado.. Embalamos con esmero cada paquete, con la garantía de que llegará a las manos de tus clientes con la misma calidad y atención que depositarias tu mismo al. Descubre la diferencia de una preparación de pedidos que va más allá de lo convencional" 
      url={Pedidos} 
      clase="seccion seccion-invert"
    ></SeccionImpar>
    <SeccionImpar 
      Titulo="Sincronización con Ecommerce o Marketplace" 
      Descripcion="Revoluciona tu ecommerce o emarketplace incorporando los productos de BigBuy. Con un extenso catálogo que abarca desde artículos de tendencia hasta productos de alta calidad, nuestra oferta está diseñada para satisfacer las demandas de tus clientes más exigentes. Desde gadgets innovadores hasta elegantes accesorios, cada artículo ha sido cuidadosamente seleccionado para ofrecer variedad y calidad. Aprovecha esta oportunidad para diferenciarte y enriquecer tu oferta con productos que destacan por su calidad y originalidad sin necesidad de invertir en stock. ¡Transforma tu ecommerce con la exclusiva selección de BigBuy y haz que tus clientes vivan una experiencia de compra inigualable!" 
      url={Ecommerce} 
      clase="seccion"
    ></SeccionImpar>
    <BotonesBasicos enlace="#packs" texto="+ información" clase="btn btn-amarillo"></BotonesBasicos>
    <Catalogo></Catalogo>
    <Card></Card>
  </React.StrictMode>,
)
