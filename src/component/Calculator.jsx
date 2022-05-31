function add(a,b){
	return (a+b);
}


function sub(a,b){
	return (a-b);
}

function multi(a,b){
	return (a*b);
}

function divi(a,b){
	return (a/b);
}


export default function Calculator(){
	return(
				<ul>
					<li>sum: {add(44,5)}</li>
					<li>sub: {sub(44,5)}</li>
					<li>multi: {multi(4,5)}</li>
					<li>divi: {divi(50,5)}</li>
				</ul>
		)
}
// export default add
// export sub
// export multi
// export divi