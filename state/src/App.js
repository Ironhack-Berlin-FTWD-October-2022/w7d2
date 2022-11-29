import "./App.css"
import { useState } from "react"
import Display from "./Display"

function App() {
    // Naming-convention: [value, setValue]
    // Use the set-function to mutate the state. Don't mutate state directly (count = count + 1)
    // When the state gets updated, the component gets rerendered
    const [count, setCount] = useState(0)
    const [liked, setLiked] = useState(false)

    console.log("Render App component")

    function handleClick() {
        // console.log("click")

        // Increment the state of count
        // setCount(count + 1)

        // If you use the current state to calculate the new state better pass a callback:
        setCount(currentState => currentState + 1)
    }

    function handleLike() {
        setLiked(!liked)
    }

    return (
		<div className="App">
			<Display number={count} />
			<button onClick={handleClick}>click</button>

			<h1>{liked ? "You like this 😁" : "You don't like this 😥"}</h1>
			<button onClick={handleLike}>Like / Unlike</button>
		</div>
	)
}

export default App
