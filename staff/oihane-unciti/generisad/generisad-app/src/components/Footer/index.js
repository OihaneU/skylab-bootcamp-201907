import React from 'react'
import logic from '../../logic'
import { withRouter, Route, Redirect } from 'react-router-dom'

function Footer (){

    return <>
    <footer class="footer">
        <ul class="footer__menu">
        <li class="menu-footer__list">
                <p className= "fotter__title">Empresa</p>
                <img></img>
        </li>
        <li class="menu-footer__list">
                    <p className= "fotter__title">Contacto </p>
                    <p className= "fotter__description">Puesde contactanos el en buscoropa@gmail.com o en el telefono 636262624</p>
            </li>

        <li class="menu-footer__list">
                <p className= "fotter__title">Dirección </p>
                <p className= "fotter__description"> Puedes encontrarnos en Calle Principal nº24 Barcelona </p>
        </li>
        </ul>
        </footer>  
    </>
}

export default withRouter (Footer);