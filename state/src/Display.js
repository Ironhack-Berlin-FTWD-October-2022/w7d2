function Display(props) {
	// props are immutable (cannot be updated)
	// When props get updated, the component gets rerendered
	console.log("Render Display component")
	
	return (
		<h1>{props.number}</h1>
	)
}

export default Display