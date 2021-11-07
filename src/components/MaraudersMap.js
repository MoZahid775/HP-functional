import React from 'react'

export default function MaraudersMap(props) {

console.log(props.WhatIsChosen)



  let changeHandler = (event) => {
   props.filterWizard(event.target.value) 
  }



  return (
    <nav>
    <h2>Houses of Hogwarts</h2>
    <select id="map" value={props.WhatIsChosen} onChange={changeHandler}>
      <option value="All">All</option>
      <option value="Gryffindor">Gryffindor</option>
      <option value="Hufflepuff">Hufflepuff</option>
      <option value="Ravenclaw">Ravenclaw</option>
      <option value="Slytherin">Slytherin</option>
    </select>
  </nav>
  )
}

