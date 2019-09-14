
import React from 'react'
import Nav from "../Nav"
import Footer from "../Footer"




export default function() {
    return <>

        <Nav/>

            <main>

                <section class="mosaic__tile">
                    <a href={`/#/ad`}>
                        <div class="mosaic__text">
                            <p>Encuentra lo que necesites</p>
                        </div>
                        <img src="../../../img/bistro.jpg" alt="img_00.jpg"></img>
                    </a>
                </section>

                <section class="mosaic__tile">
                <a href={`/#/publish`}>
                        <div class="mosaic__text">
                            <p>Publica tu anuncio</p>
                        </div>
                        <img src="../../public/img/confort.jpg" alt="img_00.jpg"></img>
                    </a>
                </section> 
            </main>

        <Footer/>

        
    </>
}