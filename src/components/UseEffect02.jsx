import React from "react"

export default function UseEffect02() {

  const [starWarsData, setStarWarsData] = React.useState({})
  
  const [count, setCount] = React.useState(0)

  console.log("Component rendered")

  /**
  * Quiz:
  * 1. What will happen if I put back our Star Wars API call
  *    into the effect function?
  */
  
  // React.useEffect(function() {
  //     fetch("https://swapi.dev/api/people/1")
  //         .then(res => res.json())
  //         .then(data => console.log(data))
  // }, [count])
  
  // Quiz:
  // 1. What will happen if I put back our Star Wars API call into the effect function?
  // 2. How will the useEffect be different if I use setStarWarsData() instead of console.log()

  // our Component runs
  // our Component renders the first time
  // that triggers useEffect to run (because it always runs on the first render)
  // that triggers the fetch request to get the star wars data from the api
  // which then "set" the starWarsData (state value)
  // setting the starWarsData (state value) caused a CHANGE IN STATE
  // which causes the Component to render again
  // so starWarsData is now the object that gets rendered as a JSON Object below inside the <pre> tag
  // then useEffect checked to see if the old "count" matched the new "count"
  // and it did, and so useEffect did not run again
  // because it did not re-run useEffect, we did not get the star wars data again
  // which would have caused the infinite loop
  // if we removed the dependencies array, that will cause the infinite loop
  // because we keep setting the starWarsData STATE which causes the Re-Render, which sets the starWarsData etc etc.
  
  // React.useEffect(function() {
  //   console.log("useEffect ran")
  //   fetch("https://swapi.dev/api/people/1")
  //     .then(res => res.json())
  //     .then(data => setStarWarsData(data))
  // }, [count])

  // count shouldn't really be used here as the dependency
  // usually what you put in a dependencies array will also show up somewhere in the useEffect callback function
  // but right now we are not using count to determine how the useEffect callback function runs at all
  // so if count shouldn't be in our dependencies array..

  // 3. What SHOULD be in our dependencies array in this case?

  React.useEffect(function() {
    console.log("useEffect ran")
    fetch("https://swapi.dev/api/people/1")
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [])

  // it should be an empty dependencies array, because then it will only run ONCE

  return (
    <div className="App">
      <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}