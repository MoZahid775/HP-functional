import React from 'react'
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'
import { useEffect, useState } from 'react'


export default function Hogwarts() {

  const [wizards, setWizards] = useState([])

  const [WhatIsChosen, setWhatIsChosen] = useState("All")

  useEffect(() => {
    fetch('http://localhost:4000/wizards')
    .then(res => res.json())
    .then((wizardArr) => {setWizards(wizardArr)})
  }, [])


//Add Wizard adds a new wizard to state
 let addWizard = (wizard) => {
   let copyOfWizards = [...wizards, wizard]

    setWizards(copyOfWizards)
 }


// DELETE WIZARD removes a wizard from the front end
  let deleteWizard =(id) => {
    let removedArray = wizards.filter((wizard) => {return wizard.id !== id})

       setWizards(removedArray)
  }



 let filterWizzard = (filter) => {
 
    setWhatIsChosen(filter)
 }


    let filteredWizards = wizards.filter((wizardObj)=>{
     return wizardObj.house == WhatIsChosen}
    )



   let arrOfWizzards = wizards
   if (WhatIsChosen !== "All"){
     arrOfWizzards = filteredWizards
   }

  return (
    

    <main>
        <MaraudersMap WhatIsChosen={WhatIsChosen} filterWizard={filterWizzard}/>
        <GreatHall wizards={arrOfWizzards} deleteWizard={deleteWizard}/>
        <SortingHat addWizard={addWizard} />
    </main>
  )
}
