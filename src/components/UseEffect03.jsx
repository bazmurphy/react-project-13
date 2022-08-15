import React from "react"

export default function UseEffect03() {

  const [starWarsData, setStarWarsData] = React.useState({})
  
  const [count, setCount] = React.useState(1)

  console.log("Component rendered")

// Challenge: Combine `count` with the request URL
// so pressing the "Get Next Character" button will
// get a new character from the Star Wars API.
// Remember: don't forget to consider the dependencies
// array!

  React.useEffect(function() {
    console.log("useEffect ran")
    fetch(`https://swapi.dev/api/people/${count}`)
      .then(res => res.json())
      .then(data => setStarWarsData(data))
  }, [count])

  return (
    <div className="use-effect-03">
        <h1>React<span className="use-effect">.useEffect()</span></h1>
        <h2>React.useState <i>count</i>: <span className="count">{count}</span></h2>
        <p>Star Wars API</p>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
    </div>
    )
}