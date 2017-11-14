// service worker pwa

if ('serviceWorker' in navigator) {

	navigator.serviceWorker.register('sw.js')
		.then(function () {


				console.log('sw registrado')
			}



		)


}


//



//Abrir e fechar o modal do menu

let botaoMenuModal = document.querySelector('.menu-1');
let menuModal = document.querySelector('.menu-modal');
let menuModalBg = document.querySelector('.menu-modal-bg');


botaoMenuModal.addEventListener('click', abrirMenuModal)

menuModalBg.addEventListener('click', fecharMenuModal)

function abrirMenuModal() {


	menuModal.style.display = 'flex';
	menuModalBg.style.display = 'block'


}

function fecharMenuModal() {
	function display() {
		menuModal.style.display = 'none';
		menuModal.style.animationName = '';
	}
	menuModal.style.animationName = 'fechar-menu-modal';
	menuModalBg.style.display = 'none'
	setTimeout(display, 700)
}

//

//Abrir e fechar pesquisa

let barraPesquisa = document.querySelector('.barra-pesquisa');

let buttonPesquisar = document.querySelector('.pesquisar img');

let bgBarraPesquisa = document.querySelector('.bg-barra-pesquisa')

buttonPesquisar.addEventListener('click', abrirBarraPesquisa)

bgBarraPesquisa.addEventListener('click', fecharBarraPesquisa)

function abrirBarraPesquisa() {

	if (barraPesquisa.classList.contains('barra-pesquisa-active')) {

		barraPesquisa.classList.remove('barra-pesquisa-active')

		bgBarraPesquisa.style.display = 'none'

	} else {
		bgBarraPesquisa.style.display = 'block'
		barraPesquisa.classList.add('barra-pesquisa-active')

	}


}

function fecharBarraPesquisa() {

	barraPesquisa.classList.remove('barra-pesquisa-active')

	bgBarraPesquisa.style.display = 'none'

}

//


//Abrir e fechar cadastro

let modalCadastrar = document.querySelector('.modal-cadastrar');

let buttonCadastrar = document.querySelector('#button-cadastrar');

let buttonCloseModalCadastrar = document.querySelector('#close-modalcadastrar');

let buttonPublicarIdeiaHome = document.querySelector('#button-publicar-home')

let buttonExplorarIdeiaHome = document.querySelector('#button-explorar-home')



buttonCadastrar.addEventListener('click', abrirModalCadastrar);

buttonPublicarIdeiaHome.addEventListener('click', abrirModalCadastrar)

buttonExplorarIdeiaHome.addEventListener('click', abrirModalCadastrar)


buttonCloseModalCadastrar.addEventListener('click', fecharModalCadastrar)

function abrirModalCadastrar() {
	if (menuModal.style.display != 'flex') {
		console.log('entrou')


		modalCadastrar.style.display = 'block';

	} else {

		fecharMenuModal()
		modalCadastrar.style.display = 'block';
	}



}


function fecharModalCadastrar() {
	console.log('entrei')

	function display() {
		modalCadastrar.style.display = 'none';
		modalCadastrar.style.animationName = '';
	}
	modalCadastrar.style.animationName = 'fechar-menu-modal';

	setTimeout(display, 700)
}
