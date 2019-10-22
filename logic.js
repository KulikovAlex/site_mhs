
var header = undefined;
var liRefs = undefined;

var headerHeight = undefined;
var headerScrollTop = undefined;

var mainPageRef = undefined;
var aboutPageRef = undefined;
var contactsPageRef = undefined;

var contentElement = undefined;

window.onload = () => {
	console.log('hello');
	header = document.querySelector('.header');
	liRefs = document.querySelectorAll('li');

	mainPageRef = document.getElementsByTagName("ul")[0]
	.getElementsByTagName("li")[0];
	aboutPageRef = document.getElementsByTagName("ul")[0]
	.getElementsByTagName("li")[1];
	contactsPageRef = document.getElementsByTagName("ul")[0]
	.getElementsByTagName("li")[2];

	contentElement = document.getElementsByClassName("content")[0];

	contentElement.innerHTML = this.loadMain();

	mainPageRef.onmouseover = mainPageRef.onmouseout = (event) => {
		if(event.type == 'mouseover') {
			liRefs[0].classList.add('li_selected');
		} else if(event.type == 'mouseout') {
			liRefs[0].classList.remove('li_selected');
		}
	}
	aboutPageRef.onmouseover = aboutPageRef.onmouseout = (event) => {
		if(event.type == 'mouseover') {
			liRefs[1].classList.add('li_selected');
		} else if(event.type == 'mouseout') {
			liRefs[1].classList.remove('li_selected');
		}
	}
	contactsPageRef.onmouseover = contactsPageRef.onmouseout = (event) => {
		if(event.type == 'mouseover') {
			liRefs[2].classList.add('li_selected');
		} else if(event.type == 'mouseout') {
			liRefs[2].classList.remove('li_selected');
		}
	}
}

/*window.onscroll = () => {
	console.log('scrolling... ');
}*/
document.onscroll = () => {
	headerHeight = header.clientHeight;
	headerScrollTop = document.scrollingElement.scrollTop;
	
	console.log('scrolling... ');
	if (document.querySelector('.header.initial') && headerHeight < headerScrollTop) {
		header.classList.remove('initial');
		header.classList.add('changed');
		document.querySelector('nav').classList.add('shrink');
		document.querySelector('h1').classList.add('h1left');
	}
	if(document.querySelector('.header.changed') && headerHeight > headerScrollTop) {
		header.classList.remove('changed');
		header.classList.add('initial');
		document.querySelector('nav').classList.remove('shrink');
		document.querySelector('h1').classList.remove('h1left');
	}
	
}

async function loadAbout(){
	document.getElementsByClassName("content")[0].innerHTML=await (await fetch('http://localhost:8080/html/about.html')).text();
}
async function loadContacts(){
	document.getElementsByClassName("content")[0].innerHTML=await (await fetch('http://localhost:8080/html/contacts.html')).text();
}
async function loadMain(){
	document.getElementsByClassName("content")[0].innerHTML=await (await fetch('http://localhost:8080/html/main.html')).text();
}