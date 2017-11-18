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



		setTimeout(display, 10)


	}


}

function fecharBarraPesquisa() {

	barraPesquisa.classList.remove('barra-pesquisa-active')

	bgBarraPesquisa.style.display = 'none'


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


// abrir explorar 

let buttonExplorarIdeias = document.querySelector("#explorar-ideias");


buttonExplorarIdeias.addEventListener('click', abrirExplorar)

function abrirExplorar() {

	window.location.replace("explorar.html")


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

//  resgatar dados do localstorage

//let userDataExplorar = null;
//testar12()



let userDataExplorar = JSON.parse(localStorage.userData);

let lStorageUser = localStorage.userData = JSON.stringify(userDataExplorar)


$(".loadings")
	.css("display", "flex")
	.fadeIn();


let l2StorageUser = JSON.parse(localStorage.userData)

if (localStorage.userData != null) {

	console.log('entrei')
	console.log(l2StorageUser)

	alterarPaginaUserName()

} else {

	window.location.replace("index.html")


}


function testar12() {
	userDataExplorar = {
		'idUser': '1',
		'name': 'Jefferson Costa',
		'email': 'jefferson@mail.com',
		'senha': '123456',
		'habilidades': 'Vendedor',
		'sobre': 'Sou uma pessoa muito legal eheheheh',
		'conquistas': [1, 2],
		'minhasIdeias': [],
		'ideiasParticipo': []
	}

}

function alterarPaginaUserName() {

	let spanUserNameMenu = document.createElement('span')
	let userNameMenu = document.querySelector('.user-name-menu')
	let spanText = document.createTextNode(l2StorageUser.name)
	spanUserNameMenu.appendChild(spanText)
	userNameMenu.appendChild(spanUserNameMenu)
	$(".loadings")
		.css("display", "flex")
		.fadeOut();


}


// POSTAR IDEIA

let buttonPostarIdeiaContent = document.querySelector('.button-postar-ideia-content');

buttonPostarIdeiaContent.addEventListener('click', postarIdeia)

function postarIdeia() {

	$(".loadings")
		.css("display", "flex")
		.fadeIn();

	let nomeIdeiaPostar = document.querySelector('#nome-ideia-postar').value.trim();

	let categoriaIdeiaPostar = document.querySelector("#categoria-ideia-postar");

	let categoriaEscolhida = categoriaIdeiaPostar.options[categoriaIdeiaPostar.selectedIndex].value;

	let descricaoIdeia = document.querySelector('#text-area-descricao').value.trim();

	let habilidadesIdeiaPostar = document.querySelector("#habilidades-ideia-postar").value.trim()

	let imagemIdeiaPostar = document.querySelector("#imagem-ideia-postar").value.trim()

	if (imagemIdeiaPostar == null) {
		imagemIdeiaPostar.value = '';
	} else {}


	if (nomeIdeiaPostar.length >= 5 && categoriaEscolhida != null && descricaoIdeia.length >= 8 && habilidadesIdeiaPostar.length >= 4) {

		requiEnviarIdeia()


	} else {

		$(".loadings")
			.css("display", "flex")
			.fadeOut();

		$(".erros-modal-login").slideDown("slow");


		function desaparecer() {
			$(".erros-modal-login").slideUp("slow");


		}

		setTimeout(desaparecer, 2000)

		console.log('erro postar ideia')
	}

	function requiEnviarIdeia() {
		$.ajax({
			crossOrigin: true,

			crossDomain: true,
			type: 'GET',
			url: 'http://rest.learncode.academy/api/tocaqui/teste-ideias6/',
			success: function (data) {
				let ideiaId = parseInt(data[data.length - 1].idIdeia);

				let id12 = ideiaId + 1;
				console.log(id12)
				enviarAoserv(id12);

			}
		});

	}


	function enviarAoserv(idIdeia) {
		$.ajax({

			crossDomain: true,
			type: 'POST',
			url: 'http://rest.learncode.academy/api/tocaqui/teste-ideias6/',
			data: {
				'idIdeia': idIdeia,
				'categoriaIdeia': categoriaEscolhida,
				'nomeIdeia': nomeIdeiaPostar,
				'nomeCriador': l2StorageUser.name,
				'habilidadesCriador': l2StorageUser.habilidades,
				'participantes': [0],
				'imagemDaIdeia': imagemIdeiaPostar,
				'descricaoDaIdeia': descricaoIdeia,
				'oqPrecisa': habilidadesIdeiaPostar,
				'termometro': '100%',
			},
			success: function (data) {

				l2StorageUser.minhasIdeias.push(idIdeia)

				localStorage.userData = JSON.stringify(l2StorageUser);

				console.log(localStorage.userData)






				//window.location.replace("explorar.html")


				adicionarIdeiaUsuarioServidor(idIdeia, l2StorageUser.idUser)



			}
		});
	}


	function adicionarIdeiaUsuarioServidor(idIdeia, idusuario) {
		$.ajax({
			crossOrigin: true,

			crossDomain: true,
			type: 'GET',
			url: 'http://rest.learncode.academy/api/tocaqui/usuarios4/',
			success: function (data) {
				for (let i = 0; i < data.length; i++) {


					if (data[i].idUser == idusuario) {

						data[i].minhasIdeias.push(idIdeia)

						let id2 = data[i].id
						let data2 = data[i].minhasIdeias

						$.ajax({
							crossDomain: true,
							type: 'PUT',
							data: {
								'idUser': data[i].idUser,
								'name': data[i].name,
								'email': data[i].email,
								'senha': data[i].senha,
								'habilidades': data[i].habilidades,
								'sobre': data[i].sobre,
								'conquistas': data[i].conquistas,
								'minhasIdeias': data2,
								'ideiasParticipo': data[i].ideiasParticipo
							},
							url: 'http://rest.learncode.academy/api/tocaqui/usuarios4/' + id2,
							success: function () {

								console.log('ideia adicionada no usuario!');



								$(".loadings")
									.css("display", "flex")
									.fadeOut();

								window.location.replace("explorar.html")

							}
						});






					}

				}

			}
		});

	}


}
