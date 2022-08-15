1. What is a "side effect" in React? What are some examples?

anything that you want to interact with outside of REACTs functionality
using APIs, subscriptions, etc.

(they need to be contained within useEffect.)

T:
any code you want to run that REACT is not in charge of.
any code that will have some kind of effect on an OUTSIDE system

Any code that affects an outside system
localStorage, API, websocket subscriptions, (two pieces of STATE that you want to keep in sync with each other)

2. What is NOT a "side effect" in React? Examples?

I dont know...

T: 
Anything that REACT is in charge of.
Maintaining STATE from one render to the next, and keeping the UI in sync with the Data (state, or props, etc), render DOM elements.
-Work with the DOM/Browser to render UI to the page
-Manage state for us between render cycles (ie. state values are "rememebered" from one render to the next)
-Keep the UI updated whenever stage changes occcur

3. When does React run your useEffect function? When does it NOT run
   the effect function?

useEffect function runs after the Component has been rendered.

T:
It always runs on when the Component loads, on the first render.
On every re-render of the component (assuming no dependencies array)
Will NOT run the effect when the vlaues of the dependencies in the array stay the same between renders.


4. How would you explain what the "dependecies array" is?

The dependencies array is the place that stores the variables/values (eg. count) that useEffect "uses"
the useEffect function checks to see if those those variables/values have changed from its PREVIOUS run, 
and if they have, the useEffect function will run, but they have not changed, then useEffect will not run.

T: 
Second parameter to the useEffect function
A way for React to know whether it should re-run the effect function