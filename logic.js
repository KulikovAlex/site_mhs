
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

	contentElement.innerHTML = this.getMainPage();

	aboutPageRef.onclick = () => {
		contentElement.innerHTML = this.getAbout();
	}

	mainPageRef.onclick = () => {
		contentElement.innerHTML = this.getMainPage();
	}

	contactsPageRef.onclick = () => {
		contentElement.innerHTML = this.getContactsPage();
	}

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