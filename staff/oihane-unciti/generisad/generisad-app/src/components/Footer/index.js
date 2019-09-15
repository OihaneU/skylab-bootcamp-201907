import React from 'react'
import logic from '../../logic'
import { withRouter, Route, Redirect } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  } from '@fortawesome/free-solid-svg-icons'

function Footer (){

    return <>
    <footer class="footer">
        <ul class="footer__menu">

        <li class="footer__list">
                    <p className= "footer__title">Contacta con nosotros en <strong>buscoropa@gmail.com</strong><br/>O a través de nuestras redes sociales </p>
                    <img className="icons_social_media" width="50"  src={require('../../img/iconfinder_Facebook.png')}alt="Facebook.png"></img>
                    <img className="icons_social_media" width="50"  src={require('../../img/iconfinder_Pinterest.png')}alt="Pinterest.png"></img>
                    <img className="icons_social_media" width="50"  src={require('../../img/iconfinder_Twitter.png')}alt="Twitter.png"></img>
                    <img className="icons_social_media" width="50"  src={require('../../img/iconfinder_Youtube.png')}alt="Youtube.png"></img>

            </li>

        <li class="footer__list">
        </li>
        </ul>
        </footer>  
    </>
}

export default withRouter (Footer);