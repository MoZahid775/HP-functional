import React from 'react'
import GreatHall from './GreatHall'
import SortingHat from './SortingHat'
import MaraudersMap from './MaraudersMap'
import { useEffect, useState } from 'react'


export default function Hogwarts() {

  const [wizards, setWizards] = useState([])


  useEffect(() => {
    fetch('http://localhost:4000/wizards')
    .then(res => res.json())
    .then((wizardArr) => {setWizards(wizardArr)})
  }, [])


  console.log(wizards)

  return (
    <main>
        <MaraudersMap />
        <GreatHall />
        <SortingHat />
    </main>
  )
}
