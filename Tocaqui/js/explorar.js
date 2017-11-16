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
let ListaIdeias = document.querySelector('.lista-ideias');

let footer = document.querySelector('footer');

let barraPesquisa = document.querySelector('.barra-pesquisa');

let buttonPesquisar = document.querySelector('.pesquisar img');

let bgBarraPesquisa = document.querySelector('.bg-barra-pesquisa')

buttonPesquisar.addEventListener('click', abrirBarraPesquisa)

bgBarraPesquisa.addEventListener('click', fecharBarraPesquisa)

function abrirBarraPesquisa() {

	if (barraPesquisa.classList.contains('barra-pesquisa-active')) {

		function display() {
			barraPesquisa.style.display = ''
		}
		barraPesquisa.classList.remove('barra-pesquisa-active')

		bgBarraPesquisa.style.display = 'none';
		ListaIdeias.style.filter = '';
		footer.style.filter = '';

		setTimeout(display, 700)


	} else {
		function display() {

			barraPesquisa.classList.add('barra-pesquisa-active')
		}

		bgBarraPesquisa.style.display = 'block'
		barraPesquisa.style.display = 'block'
		ListaIdeias.style.filter = 'blur(2px)'
		footer.style.filter = 'blur(2px)'


		setTimeout(display, 10)


	}


}

function fecharBarraPesquisa() {
	function display() {
		barraPesquisa.style.display = ''
	}
	barraPesquisa.classList.remove('barra-pesquisa-active')

	bgBarraPesquisa.style.display = 'none'
	ListaIdeias.style.filter = '';
	footer.style.filter = '';

	setTimeout(display, 700)

}

//



// Expandir categorias de ideias 

let buttonTitleCategorias = document.querySelector('.title-categorias');
let categoriasContainer = document.querySelector('.categorias');
let buttonOkCategorias = document.querySelector('.button-ok-categorias')

buttonTitleCategorias.addEventListener('click', expandirCategorias);

function expandirCategorias() {
	console.log('entrou')

	if (categoriasContainer.classList.contains('categorias-expandir')) {

		categoriasContainer.classList.remove('categorias-expandir')
		categoriasContainer.classList.add('categorias')

		buttonOkCategorias.style.display = ''


	} else {
		categoriasContainer.classList.add('categorias-expandir')
		categoriasContainer.classList.remove('categorias')
		buttonOkCategorias.style.display = 'flex'

	}



}

// 



// expandir ideia 

let ideiaContent = document.querySelectorAll('.ideia-content');
let buttonTituloIdeiaContent = document.querySelectorAll('.titulo-ideia-content');

for (let i = 0; i < buttonTituloIdeiaContent.length; i++) {
	buttonTituloIdeiaContent[i].addEventListener('click', function () {
		expandirIdeia(i)
	})

}



function expandirIdeia(j) {

	if (ideiaContent[j].classList.contains('a-ideia-content')) {

		ideiaContent[j].classList.remove('a-ideia-content')
		ideiaContent[j].classList.add('ideia-content')

	} else {
		ideiaContent[j].classList.remove('ideia-content')
		ideiaContent[j].classList.add('a-ideia-content')

	}
}
//

//  resgatar dados do localstorage

let userDataExplorar = null;

//userDataExplorar = JSON.parse(localStorage.userData);

testar12()
let lStorageUser = localStorage.userData = JSON.stringify(userDataExplorar)


let l2StorageUser = JSON.parse(lStorageUser)

if (localStorage.userData != null) {

	console.log('entrei')
	console.log(lStorageUser)

	alterarPaginaUserName()
	aparecerIdeias()

}


function testar12() {
	userDataExplorar = {
		'idUser': '1',
		'name': 'Jefferson Costa',
		'email': 'jefferson@mail.com',
		'senha': '123456',
		'sobre': 'Sou uma pessoa muito legal eheheheh',
		'conquistas': ['1', '2'],
		'minhasIdeias': [''],
		'ideiasParticipo': ['']
	}

}


function alterarPaginaUserName() {

	let spanUserNameMenu = document.createElement('span')
	let userNameMenu = document.querySelector('.user-name-menu')
	let spanText = document.createTextNode(l2StorageUser.name)
	spanUserNameMenu.appendChild(spanText)
	userNameMenu.appendChild(spanUserNameMenu)

}

function aparecerIdeias() {

	$.ajax({
		type: 'GET',
		url: 'http://rest.learncode.academy/api/tocaqui/teste-ideias/',
		success: function (data) {

		}
	});
}
