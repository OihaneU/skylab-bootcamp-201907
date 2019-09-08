
import React from 'react'

export default function() {
    return <>

        <nav class="nav">   
                <div class="nav__menuToggle"> 
                    <input type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul>
                            <a class= "menu-nav__list" href={`/#/ads`}><li>Busca tu anuncio</li></a>
                            <a class= "menu-nav__list"  href={`/#/publish`}><li>Publica tu anuncio</li></a>
                            <hr/>
                            <a class= "menu-nav__list" href={`/#/register`}><li>Registrate</li></a>
                            <a class= "menu-nav__list" href={`/#/auth`}><li>Accede</li></a> 
                        </ul>
                    
                </div>
                <p class="nav__branch">Marca de Web</p>
            </nav >

            <main>

                <section class="mosaic__tile">
                    <a href={`/#/ad`}>
                        <div class="mosaic__text">
                            <p>Encuentra lo que necesites</p>
                        </div>
                        <img src="http://source.unsplash.com/random/2000x1250" alt="img_00.jpg"></img>
                    </a>
                </section>

                <section class="mosaic__tile">
                <a href={`/#/publish`}>
                        <div class="mosaic__text">
                            <p>Publica tu anuncio</p>
                        </div>
                        <img src="http://source.unsplash.com/random/2000x1250" alt="img_00.jpg"></img>
                    </a>
                </section> 
            </main>

        
    </>
}