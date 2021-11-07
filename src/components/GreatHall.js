import React from 'react';
import Wizard from './Wizard'


const GreatHall = (props) => {

console.log(props.wizards)



  // [{}{}{}]--->[</></></>]
  let arrOfComponents = props.wizards.map((wizardsObj) => {
    return <Wizard key={wizardsObj.id} wizardsObj={wizardsObj}/>
  })



return (
 
  <section>
    <h2>Students of Hogwarts</h2>
    <ul className="cards">
      {arrOfComponents}
    </ul>
  </section>
)
}


export default GreatHall;
