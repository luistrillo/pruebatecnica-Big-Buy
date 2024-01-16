import React from 'react'
import './card.css'

const cards = [
    {
        id: 1, Titulo: 'Pack B2B',
        Precio: 'Sin cuota mensual',
        Subtitulo: 'Para clientes que quieren iniciarse en el dropshipping o realizar compras al por mayor',
        Ventaja1: 'Ideal para testear el servicio dropshipping y comprar al por mayor sin cuota mensual.',
        Ventaja2: 'Pagando esta cuota de alta puedes migrar a Ecommerce y Marketplace sin volver a pagarla.',
        Ventaja3: 'Hasta 3 envíos dropshipping al mes',
        BotonCompra:'Quiero el Pack B2B',
        Enlace: '#'
    },
    {
        id: 2, Titulo: 'Pack Ecommerce',
        Precio: '74,17€',
        Subtitulo: 'Para clientes que quieren vender en ecommerce',
        Ventaja1: 'Compatible con Tienda Dropshipping 360º',
        Ventaja2: 'Acceso a conectores ecommerce (Shopify, Prestashop, Woocommerce, etc.)',
        Ventaja3: 'Envíos dropshipping ilimitados',
        BotonCompra:'Quiero el Pack Ecommerce',
        Enlace: '#'
    },
    {
        id: 2, Titulo: 'Pack Ecommerce',
        Precio: '74,17€',
        Subtitulo: 'Para clientes que quieren vender en ecommerce',
        Ventaja1: 'Compatible con Tienda Dropshipping 360º',
        Ventaja2: 'Acceso a conectores ecommerce (Shopify, Prestashop, Woocommerce, etc.)',
        Ventaja3: 'Envíos dropshipping ilimitados',
        BotonCompra:'Quiero el Pack Ecommerce',
        Enlace: '#'
    },

];

function card() {
    return (
        <section className='cards' id='packs'>
            {cards.map(card => (
                <div class="card">
                    <div class="card__header">
                        <span class="card__title">{card.Titulo}</span>
                        <span class="card__price">{card.Precio}</span>
                    </div>
                    <p class="card__desc">{card.Subtitulo}</p>
                    <ul class="card__lists lists">
                        <li class="lists__list">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>{card.Ventaja1}</span>
                        </li>
                        <li class="lists__list">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>{card.Ventaja2}</span>
                        </li>
                        <li class="lists__list">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                            </svg>
                            <span>{card.Ventaja3}</span>
                        </li>
                    </ul>
                    <a type="button" class="card__action" href={card.Enlace}>{card.BotonCompra}</a>
                </div>
            ))}
        </section>
    )
}

export default card
