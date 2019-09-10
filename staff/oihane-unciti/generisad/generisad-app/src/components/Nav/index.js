
import React from 'react'
import logic from '../../logic'


export default function({ }) {

    function handleLogout (){
        delete sessionStorage.clear()
    }

    // const { credentials} = useContext(Context)
    
    const token = logic.userCredentials

    return <>
       <nav class="nav">   
        <div class="nav__menuToggle"> 
            <input type="checkbox" />
                <span></span>
                <span></span>
                <span></span>

                {!token ?
                   <ul class="nav__menu">
                        <a class= "menu-nav__list" href={`/#/ads`}><li>Busca un anuncio</li></a>
                        <a class= "menu-nav__list"  href={`/#/publish`}><li>Publica tu anuncio</li></a>
                        <hr/>
                        <a class= "menu-nav__list" href={`/#/register`}><li>Registrate</li></a>
                        <a class= "menu-nav__list" href={`/#/auth`}><li>Accede</li></a> 
                  </ul> :
                

                    <ul class="nav__menu">
                        <a class= "menu-nav__list" href={`/#/ads`}><li>Busca un anuncio</li></a>
                        <a class= "menu-nav__list"  href={`/#/publish`}><li>Publica tu anuncio</li></a>
                        <a class= "menu-nav__list"  href={`/#/publish`}><li>Ver mis anuncios</li></a>
                        <hr/>
                        <a class= "menu-nav__list" href={`/#/message`}><li>Mensajes</li></a>
                        <a class= "menu-nav__list"  href={`/#/`} onClick={() => handleLogout()}><li>Logout</li></a> 
                  </ul>

                }
              
        </div>         
        <p class="nav__branch">Marca de Web</p>
    </nav>


    </>
}