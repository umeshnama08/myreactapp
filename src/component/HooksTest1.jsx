


export default function HooksTest1(){
let Digit = 0;
let newTime = new Date().toLocaleTimeString();

	 const press = () => {
		console.log("dfdsf")
	};

 function greetUser() {
    console.log("Hi there, user!");
  }

	return(
			<>
				<h1>{newTime}</h1>
				<button onClick={press}>Press</button>
				<button onClick={greetUser}>Press</button>

			</>
		)
}
// export default add
// export sub
// export multi
// export divi