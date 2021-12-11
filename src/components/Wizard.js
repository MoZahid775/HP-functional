
import React from 'react'
import { useState } from 'react'


export default function Wizard(props) {




 let {house, name, wand, image1, image2, id} = props.wizardsObj


 
 const [image, setImage]= useState(image2)


 let toggle = () => {
   if (image==image2){
       setImage(image1)
   }else{setImage(image2)}
   }


//GRADUATE BUTTON-----------------------

  let graduateHandler=() => {
     fetch(`http://localhost:4000/wizards/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      // .then(() => console.log("Deleted"));
   
      props.deleteWizard(id)



  }

  return (
 
    <li className="card">
          <div className="decorative">
            <div className="top">
              <div className="name">
                <h3>{name}</h3>
              </div>
              <div className="border">
               <img src={image} alt={name} onClick={toggle}></img>
              </div>
            </div>
            <div className="card_bottom">
              <p className="house_name">{house}</p>
              <p className="description">Wand: {wand}</p>
              <button onClick={graduateHandler} >
                Graduate
              </button>
            </div>
          </div>
        </li>





  )
}
