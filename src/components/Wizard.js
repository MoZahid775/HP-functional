
import React from 'react'
import { useState } from 'react'


export default function Wizard(props) {


//  console.log(props.wizardsObj)

 let {house, name, wand, image1, image2} = props.wizardsObj

 
 const [image, setImage]= useState(image2)


 let toggle = () => {
   if (image==image2){
       setImage(image1)
   }else{setImage(image2)}
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
              <button >
                Graduate
              </button>
            </div>
          </div>
        </li>





  )
}
