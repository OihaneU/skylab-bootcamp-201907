
import React from 'react'
import Nav from "../Nav"



export default function() {
    return <>

        <Nav/>

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