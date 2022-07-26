// console.log('slider')

const slides = [
	'./img/01.jpg',
	'./img/02.jpg',
	'./img/03.jpg',
	'./img/04.jpg',
	'./img/05.jpg',
]

const liSlides = []

const slideWrapperElement = document.querySelector(".slides-wrapper");
const frecciaIndietro = document.querySelector(".arrow-prev");
const frecciaAvanti = document.querySelector(".arrow-next");


for(let i = 0; i < slides.length; i++) {

	// creazione variabile "src" avente lo stesso nome dell'attributo src 
	// presente nelle immagini 
	let src = slides[i];
	// creazione <li> e aggiunta classe .slide
	const liElement = document.createElement('li');
	liElement.classList.add('slide');
	// creazione <img>
	const imgElement = document.createElement('img');
	// Assegno all'attrubuto"src" delle <img>, il valore src equivalente a slides[i]
	imgElement.src = src
	// Aggiunta dell'<img> al <li>
	liElement.append(imgElement)
	// Aggiunto <li> a <ul> con classe .slides-wrapper
	slideWrapperElement.append(liElement)

	if(i === 0) {
		liElement.classList.add('active');
	}

	frecciaAvanti.addEventListener('click', function() {
		liSlides.push(liElement);
		liElement.classList.remove('active');
		src++ ;
		liElement.classList.add('active');
	})
}




