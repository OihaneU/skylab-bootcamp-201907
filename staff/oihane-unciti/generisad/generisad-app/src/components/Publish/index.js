
import React from 'react'
import logic from '../../logic'
import { withRouter } from 'react-router-dom'

function Publish ({history}) {
    let adId

    function handleSubmit(event){
        event.preventDefault()
    
        if (logic.isUserLoggedIn()){
            const { target: { image: {files:[image]},  title:{value:title}, description: {value:description}, price: {value:price}, location:{value:location}}} = event
            onPublish(image, title, description,price, location)
        }
        else{
            history.push('/auth')
        }
    }

    async function onPublish(image, title, description, price, location){
        try{
            const publish= await logic.publish(image,title, description, price, location)
            adId=publish
          
            
            await logic.upload(adId, image)

            history.push("/")



        }catch(error){
            console.log(error.message)

        }
    }
    return  <>
        <section class="publish__content">
            <h3 class="publish__title">Publica tu anuncio</h3>

                <form onSubmit={handleSubmit} method="post" enctype="multipart/form-data" > 
                    <label htmlFor="">Image</label>
                    <input class="modal__input"  type="file" name="image" id="" />
                    <label htmlFor="">Título del anuncio</label>
                    <input class="modal__input"  type="text" name="title" id=""/>
                    <label htmlFor="">Descrición del producto</label>
                    <input class="modal__input"type="text" name="description" id=""/>
                    <label htmlFor="">Precio</label>
                    <input class="modal__input"type="text" name="price" id=""/>
                    <label htmlFor="">Localización</label>
                    <input class="modal__input"type="text" name="location" id=""/>
                     {/* {error && <Feedback message={error} />} */}  
                    <button class= "button">Subir tu anuncio</button>

            </form>

        </section>
        
    </>
}

export default withRouter(Publish)