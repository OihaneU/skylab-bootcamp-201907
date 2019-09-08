
import React from 'react'

export default function(onPublish) {
    return  <>
        <section class="publish__content">
            <h3 class="publish__title">Publica tu anuncio</h3>
                <form onSubmit={event => {
                event.preventDefault()

                const { target: { image: {value:image},  tittle:{value:title}, description: {value:description}, location:{value:location}}} = event

                onPublish(image, title, description, location)
            }}>
                    <label for="">Image</label>
                    <input class="modal__input"  type="text" name="image" id=""/>
                    <label for="">Título del anuncio</label>
                    <input class="modal__input"  type="text" name="title" id=""/>
                    <label for="">Descrición del producto</label>
                    <input class="modal__input"type="text" name="description" id=""/>
                    <label for="">Localización</label>
                    <input class="modal__input"type="text" name="location" id=""/>
                    <button class= "button">Subir tu anuncio</button>

            </form>

        </section>
        
    </>
}