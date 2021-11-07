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


 let addWizard = (wizard) => {
   let copyOfWizards = [...wizards, wizard]

    setWizards(copyOfWizards)
 }

 let filterWizzard = (filter) => {
    setWhatIsChosen(filter)

    let filteredWizards = wizards.filter((wizardObj)=>{
     return wizardObj.house == WhatIsChosen}
      )
      console.log(filteredWizards)
 }



  console.log(wizards)

   let arrOfWizzards = wizards

  return (
    <main>
        <MaraudersMap WhatIsChosen={WhatIsChosen} filterWizard={filterWizzard}/>
        <GreatHall wizards={arrOfWizzards}/>
        <SortingHat addWizard={addWizard} />
    </main>
  )
}
