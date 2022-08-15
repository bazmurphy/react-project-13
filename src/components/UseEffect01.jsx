import React from "react"

export default function UseEffect01() {
  
  const [count, setCount] = React.useState(0)

  console.log("Component rendered")

  // introducing... useEffect()

  // useEffect has two parameters, the first one is REQUIRED, the second one is OPTIONAL

  // the first parameter is a CALLBACK FUNCTION
  // the function is the place we can put our SIDE EFFECTS code
  // the fetch request above is considered a SIDE EFFECT
  // because it is reaching OUTSIDE of REACTs ecosystem
  // but also trying to set some REACT STATE in the process

  // so we must MOVE our fetch request INSIDE the useEffect callback function
  // inside here we are allowed to put ANY CODE that interacts with things OUTSIDE of REACT
  // interact with those outside systems to keep them IN SYNC with our local state in this Component

  // However.. we are still getting an infinite loop... Why?
  // IF WE DO NOT PROVIDE A SECOND PARAMETER TO useEffect
  // there is almost no difference between putting our code INSIDE or OUTSIDE of useEffect on the Top Level of our Component
  // there is ONE small difference, everything we put inside useEffect is GUARANTEED to run ONLY AFTER the UI has been painted to the screen
  // (only after react has taken our JSX elements and created real elements on our page)
  
  // the second parameter is a DEPENDENCIES ARRAY
  // (yes above we said its optional, but you will almost ALWAYS use it)
  // the array that we pass as a second parameter to useEffect...
  // will contain values that, if they change from one render to the next, will cause useEffect to run
  // in other words it limits the number of times that useEffect will run
  // it determines WHEN useEffect will run, instead of running after every single Render

  // if you leave it as an empty array, it effectively tells React i want to run the callback function (inside useEffect)
  // on the very first render of the Component
  // but then there are no Dependencies to WATCH and trigger this useEffect to run again
  // so it runs once when the Component first loads and that's it, never again.

  // React.useEffect(function() {
  //   ..some code
  // }, [])  <--- DEPENDENCIES ARRAY

  // if you wanted it so everytime "count" changed, 
    // React.useEffect(function() {
  //   ..some code
  // }, [count])

  // every time we change the state of count, the useEffect will also run.

  // REACT compares the VALUES in the array with the LAST TIME it ran.
  // so if count starts out at 0
  // and we add 1 to count
  // the next to it runs, it will compare [0] and [1]
  // and because they are different, it will run the useEffect callback function again.

  // thats why its called a DEPENDENCIES ARRAY, useEffect DEPENDS on the values in the array,
  // to know whether or not it should re-render the component

  /**
  * Challenge: re-write the useEffect
  * It should run any time `count` changes
  * For now, just console.log("Effect function ran")
  */

  React.useEffect(function() {
    console.log("useEffect function ran")
  }, [count])

  return (
    <div className="App">
      <h2>The count is {count}</h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
    </div>
  )
}