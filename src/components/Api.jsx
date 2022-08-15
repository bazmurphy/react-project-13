import React from "react"

export default function Api() {

  const [starWarsData, setStarWarsData] = React.useState({})

  console.log("Component rendered")

  // if we try to do this within our Component:

  fetch("https://swapi.dev/api/people/1")
    .then(res => res.json())
    .then(data => setStarWarsData(data))

  // this infinitely loops because it runs the FETCH 
  // and sets the StarWarsData STATE, which is "MODIFYING STATE"
  // which means REACT re-renders the component
  // which runs all the code again, in an infinite loop

  return (
    <div>
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
  )
}