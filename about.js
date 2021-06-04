console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

function duckOver(evt) {
	evt.preventDefault();

	alert('DUCKS RULE!');
}


let form = document.querySelector('form#contact');
let duck = document.querySelector('img')

form.addEventListener('submit', handleSubmit);
duck.addEventListener('mouseover', duckOver);