function modal() {

	document.getElementById('modal').className = 'deslizar-direita';
	document.getElementById('bg-fixo').style.display = 'block';
	document.getElementById('body').style.overflow = 'hidden';
}

function closeModal() {

	document.getElementById('modal').className = 'deslizar-esquerda';
	document.getElementById('bg-fixo').style.display = 'none';
	document.getElementById('body').style.overflow = 'auto';
}



function semContaPopUp() {

	semConta.style.animationName = 'deslizar-cima';
	popUpP.style.animationName = 'aparecer';

}

function byeContaPopUp() {

	semConta.style.animationName = 'deslizar-baixo';
	popUpP.style.animationName = 'desaparecer';


}



function focarPesquisa() {


	for (let j = 0; j < pesquisaIcon.length; j++) {

		pesquisaIcon[j].className = 'busc-hover busc';


	}

	searchGeral.className = 'busc busc-hover search-geral search-geral-hover';
	searchGps.className = 'busc busc-hover search-gps search-gps-hover';

}

function fecharPesquisa() {


	for (let x = 0; x < pesquisaIcon.length; x++) {

		pesquisaIcon[x].className = 'busc';


	}
	searchGeral.className = 'busc search-geral ';
	searchGps.className = 'busc  search-gps ';
}


let semContaLink = document.querySelector('.sem-conta');
let semConta = document.querySelector('.sem-conta-popup');
let popUpP = document.querySelector('.pop-up-text')


semContaLink.addEventListener("mouseenter", semContaPopUp);
semContaLink.addEventListener("mouseleave", byeContaPopUp);





let pesquisaBar = document.querySelector('.centro');
let pesquisaIcon = document.querySelectorAll('.busc');
let searchGeral = document.querySelector('.search-geral');
let searchGps = document.querySelector('.search-gps');

for (let b = 0; b < pesquisaIcon.length; b++) {

	pesquisaIcon[b].addEventListener("mouseover", focarPesquisa);

}

pesquisaBar.addEventListener("mouseleave", fecharPesquisa);



$(function () {
	// This will select everything with the class smoothScroll
	// This should prevent problems with carousel, scrollspy, etc...
	$('.smoothScroll').click(function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top
				}, 1000); // The number here represents the speed of the scroll in milliseconds
				return false;
			}
		}
	});
});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference
