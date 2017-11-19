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

function expandirIdeiaAposRequis() {

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


}


//


// abrir submenu
let buttonMinhasIdeias = document.querySelector("#button-minhas-ideias")

buttonMinhasIdeias.addEventListener('click', abrirUlMinhasIdeias)

function abrirUlMinhasIdeias() {
	let ulMinhasIdeias = document.querySelector('#ul-minhas-ideias')
	if (ulMinhasIdeias.style.display == 'block') {
		$("#ul-minhas-ideias").slideUp('slow');


	} else {
		$("#ul-minhas-ideias").slideDown('slow');

	}

}

//



//ABRIR POSTAR NOVA IDEIA 

let buttonPostarNovaIdeia = document.querySelector('#button-li-postar-nova-ideia');

buttonPostarNovaIdeia.addEventListener('click', abrirPostarNovaIdeia)

function abrirPostarNovaIdeia() {

	window.location.replace("postar-ideia.html");

}



// SAIR 

let buttonSair = document.querySelector("#button-sair");

buttonSair.addEventListener("click", sairLogout)


function sairLogout() {

	fecharMenuModal()

	$(".loadings")
		.css("display", "flex")
		.fadeIn();

	localStorage.userData = null;
	localStorage.saberLog = 1;

	function display() {

		$(".loadings")
			.css("display", "flex")
			.fadeOut();

		window.location.replace("index.html")


	}

	setTimeout(display, 700)

}
//




//

//  resgatar dados do localstorage

//let userDataExplorar = null;
//
let userDataExplorar = JSON.parse(localStorage.userData);
//
//testar12()

let lStorageUser = localStorage.userData = JSON.stringify(userDataExplorar)


let l2StorageUser = JSON.parse(lStorageUser)

if (localStorage.userData != null) {

	console.log('entrei')
	console.log(lStorageUser)

	alterarPaginaUserName()
	aparecer1()

} else {

	window.location.replace("index.html")


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
// APARECER IDEIAS
function aparecer1() {
	console.log('aparecer ideias');

	$(".loadings")
		.css("display", "flex")
		.fadeIn();

	$.ajax({
		data: '{"some":"json"}',
		dataType: 'json',
		type: 'GET',
		url: 'http://rest.learncode.academy/api/tocaqui/teste-ideias6/',
		success: function (data) {

			$(".loadings")
				.css("display", "flex")
				.fadeOut();

			for (let i = 0; i < data.length; i++) {

				let participantesContar = null;
				for (let x = 0; x < data[i].participantes.length; x++) {

					participantesContar++




				}
				aparecerIdeiasPagina(data[i].nomeIdeia, data[i].nomeCriador, data[i].habilidadesCriador, data[i].descricaoDaIdeia, data[i].oqPrecisa, participantesContar, data[i].termometro)

			}

			expandirIdeiaAposRequis()

		}
	});
}

function aparecerIdeiasPagina(titulo, criador, habilidades, descricao, precisaDe, pessoasPart, termometro) {

	let ListaIdeias =
		document.querySelector('.lista-ideias');

	let ideiaContent = document.createElement('div')
	ideiaContent.classList.add('ideia-content');

	ListaIdeias.appendChild(ideiaContent);

	// titulo e span titulo
	let tituloIdeiaContent = document.createElement('div');
	let tituloIdeiaContentSpan = document.createElement('span');
	let spanTituloText = document.createTextNode(titulo);
	let spanButton = document.createElement('span');

	tituloIdeiaContentSpan.appendChild(spanTituloText);
	tituloIdeiaContent.appendChild(tituloIdeiaContentSpan);
	tituloIdeiaContent.appendChild(spanButton);

	tituloIdeiaContent.classList.add('titulo-ideia-content');
	spanButton.classList.add('expandir-icon-2');

	ideiaContent.appendChild(tituloIdeiaContent);


	//criador
	let criadorIdeiaContent = document.createElement('div');
	let criadorIdeiaContentSpan = document.createElement('span');
	let spanCriadorIdeiaText = document.createTextNode(criador);
	let TextNodeCriador = document.createTextNode('Ideia de ')

	criadorIdeiaContentSpan.appendChild(spanCriadorIdeiaText);
	criadorIdeiaContent.appendChild(TextNodeCriador);
	criadorIdeiaContent.appendChild(criadorIdeiaContentSpan);

	criadorIdeiaContent.classList.add('criador-ideia-content');

	ideiaContent.appendChild(criadorIdeiaContent);


	//habilidades do criador
	let habilidadeCriadorIdeiaContent = document.createElement('div');
	let habilidadeCriadorSpan = document.createElement('span');
	let spanHabilidadeCriadorText = document.createTextNode(habilidades);
	let TextNodeHabilidades = document.createTextNode('Habilidades com ')

	habilidadeCriadorSpan.appendChild(spanHabilidadeCriadorText);
	habilidadeCriadorIdeiaContent.appendChild(TextNodeHabilidades);
	habilidadeCriadorIdeiaContent.appendChild(habilidadeCriadorSpan);

	habilidadeCriadorIdeiaContent.classList.add("habilidade-criador-ideia-content")

	ideiaContent.appendChild(habilidadeCriadorIdeiaContent);



	// descricao da ideia
	let descricaoIdeiaContent = document.createElement('div');
	let descricaoIdeiaContentText = document.createTextNode(descricao);

	descricaoIdeiaContent.appendChild(descricaoIdeiaContentText);

	descricaoIdeiaContent.classList.add('descricao-ideia-content');

	ideiaContent.appendChild(descricaoIdeiaContent);



	//precisa de que ? ideia content
	let precisaIdeiaContent = document.createElement('div');
	let precisaIdeiaContentSpan = document.createElement('span');
	let spanPrecisaIdeiaText = document.createTextNode(precisaDe);
	let TextNodePrecisaIdeia = document.createTextNode('precisa de ')

	precisaIdeiaContentSpan.appendChild(spanPrecisaIdeiaText);
	precisaIdeiaContent.appendChild(TextNodePrecisaIdeia);
	precisaIdeiaContent.appendChild(precisaIdeiaContentSpan);

	precisaIdeiaContent.classList.add('precisa-ideia-content');

	ideiaContent.appendChild(precisaIdeiaContent);



	// pessoas participando
	let pessoasIdeiaContent = document.createElement('div');
	let pessoasIdeiaContentSpan = document.createElement('span');
	let spanPessoasIdeiaContentText = document.createTextNode(pessoasPart);
	let TextNodePessoasIdeia = document.createTextNode(' pessoas participando')

	pessoasIdeiaContentSpan.appendChild(spanPessoasIdeiaContentText);
	pessoasIdeiaContent.appendChild(pessoasIdeiaContentSpan);
	pessoasIdeiaContent.appendChild(TextNodePessoasIdeia);

	pessoasIdeiaContent.classList.add('pessoas-ideia-content');

	ideiaContent.appendChild(pessoasIdeiaContent);




	//ver mais , pagina da ideia 
	let verMaisIdeiaContent = document.createElement('div');
	let verMaisIdeiaContentLink = document.createElement('a');
	let verMaisLinkText = document.createTextNode('Ver página da ideia');

	verMaisIdeiaContentLink.href = "ideia.html";

	verMaisIdeiaContentLink.appendChild(verMaisLinkText);
	verMaisIdeiaContent.appendChild(verMaisIdeiaContentLink);

	verMaisIdeiaContent.classList.add('ver-mais-ideia-content');


	ideiaContent.appendChild(verMaisIdeiaContent);

	// botao entrar na ideia content 

	let buttonEntrarIdeia = document.createElement('div');
	let buttonEntrarIdeiaSpan = document.createElement('span');
	let SpanButtonEntrarText = document.createTextNode('participar!');



	buttonEntrarIdeiaSpan.appendChild(SpanButtonEntrarText);
	buttonEntrarIdeia.appendChild(buttonEntrarIdeiaSpan);
	buttonEntrarIdeia.classList.add('button-entrar-ideia-content')

	ideiaContent.appendChild(buttonEntrarIdeia);

}

//
