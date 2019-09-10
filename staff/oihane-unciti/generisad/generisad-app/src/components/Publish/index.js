
import React from 'react'
import logic from "../../logic"
import { withRouter } from 'react-router-dom'

function Publish (props) {

    function handleSubmit(event){
        event.preventDefault()
    
        if (logic.isUserLogged()){
            const { target: { image: {value:image},  title:{value:title}, description: {value:description}, location:{value:location}}} = event

            onPublish(image, title, description, location)
        }
        else{
            props.history.push('/auth')
        }
    }

    async function onPublish(image, title, description, location){
        try{
            logic.publih(userId)
            history.push("/publish/succes")

        }catch(error){
            console.log(error.message)

        }
    }
    return  <>
        <section class="publish__content">
            <h3 class="publish__title">Publica tu anuncio</h3>



                <form onSubmit={handleSubmit}> 
                    <label htmlFor="">Image</label>
                    <input class="modal__input"  type="file" name="image" id=""/>
                    <label htmlFor="">Título del anuncio</label>
                    <input class="modal__input"  type="text" name="title" id=""/>
                    <label htmlFor="">Descrición del producto</label>
                    <input class="modal__input"type="text" name="description" id=""/>
                    <label htmlFor="">Localización</label>
                    <input class="modal__input"type="text" name="location" id=""/>
                     {/* {error && <Feedback message={error} />} */}  
                    <button class= "button">Subir tu anuncio</button>

            </form>

        </section>
        
    </>
}

export default withRouter(Publish)