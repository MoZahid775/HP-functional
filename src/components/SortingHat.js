import React from 'react'
import { useState } from 'react'


export default function SortingHat(props) {


  const [name, setName]=useState("")

  const [wand, setWand]=useState("")

  const [house, setHouse]=useState("Gryffindor")

  const [image1, setImage1]=useState("")

  const [image2, setImage2]=useState("")


 let handleNameChange = (event) => {
   setName(event.target.value)}

 let handleWandChange = (event) => {
    setWand(event.target.value)}

  let handleHouseChange = (event) => {
      setHouse(event.target.value)}

  let handleImage1Change = (event) => {
      setImage1(event.target.value)}

  let handleImage2Change = (event) => {
      setImage2(event.target.value)}


  let submitHandler = (event) => {
    event.preventDefault()
    let wizard = {
       name:name,
       wand:wand,
       image1:image1,
       image2:image2,
       house:house
     }
     fetch("http://localhost:4000/wizards", {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
     },
     body: JSON.stringify(wizard),
     })
     .then((r) => r.json())
     .then((wizardObj) => props.addWizard(wizardObj))
     
     setName("")
     setWand("")
     setHouse("Gryffindor")
     setImage1("")
     setImage2("")
  }



  return (
    <section>
    <h2>You Could Be Great, You Know...</h2>
    <form  className="new_container" onSubmit={submitHandler}>

      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" onChange={handleNameChange} value={name}/>

      <label htmlFor="wand">Wand:</label>
      <input type="text" name="wand" id="wand" onChange={handleWandChange} value={wand} />

      <label htmlFor="house">House:</label>
      <select name="house" id="house" onChange={handleHouseChange} value={house}>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Hufflepuff">Hufflepuff</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Slytherin">Slytherin</option>
      </select>

      <label htmlFor="image1">Image 1:</label>
      <input type="url" name="image1" id="image1" onChange={handleImage1Change} value={image1}/>

      <label htmlFor="image2">Image 2:</label>
      <input type="url" name="image2" id="image2" onChange={handleImage2Change} value={image2}/>

      <input type="submit" value="Log A New Wizard" />

    </form>
  </section>
  )
}
