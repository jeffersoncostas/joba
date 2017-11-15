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
		modalLoginOuCadastrar.style.display = 'flex'


		modalCadastrar.style.display = 'block';

	} else {

		fecharMenuModal()
		modalLoginOuCadastrar.style.display = 'flex'

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


// Abrir a o cadastro em si ( conversa) 

let modalLoginOuCadastrar = document.querySelector('.modal-login-ou-cadastrar');

let buttonJaPossuiConta = document.querySelector('.button-ja-possui-conta');

let buttonNaoPossuiConta = document.querySelector('.button-nao-possui-conta');

buttonNaoPossuiConta.addEventListener('click', abrirModalCadastrar2)

function abrirModalCadastrar2() {
	function display() {
		modalLoginOuCadastrar.style.display = 'none'
		modalLoginOuCadastrar.style.animationName = ''
	}

	modalLoginOuCadastrar.style.animationName = 'desaparecer-cima';
	setTimeout(display, 700)

	aparecerPrimeiraMsg()
}

//

// Realizar cadastro

function aparecerPrimeiraMsg() {
	bpTocaqui[0].style.display = 'flex'
	bpTocaqui[0].style.animationName = 'aparecer-msg-cadastro'

	bpTocaqui[1].style.display = 'flex'
	bpTocaqui[1].style.animationName = 'aparecer-msg-cadastro'

}

let inputCadastrarBp = document.querySelector('#input-cadastrar-bp')

let formInput = document.querySelector('#form-input-cadastrar')

let buttonEnviarModalCadastro = document.querySelector('.button-enviar-modal-cadastro');

let bpTocaqui = document.querySelectorAll('.bp-tocaqui');


let valueNome = null;
let valueEmail = null;
let valueSenha = null;

inputCadastrarBp.addEventListener('keydown', function (event) {
	enviarPorEnter(event)
})

inputCadastrarBp.addEventListener('click', mobileScrollTeclado)


buttonEnviarModalCadastro.addEventListener('click', enviarNomeEmail)

function mobileScrollTeclado() {
	function scroll1() {
		modalCadastrar.scrollTop = modalCadastrar.scrollHeight;

	}
	setTimeout(scroll1, 500)
}

function enviarPorEnter(event) {

	if (event.which == 13 || event.which == 10) {

		enviarNomeEmail()
		event.stopImmediatePropagation();
		event.preventDefault();
	}

}

function enviarNomeEmail() {
	if (valueNome == null && valueEmail == null && valueSenha == null) {


		let valueInputCadastrarBp = document.querySelector('#input-cadastrar-bp').value.trim();


		if (valueInputCadastrarBp.length != 0 && valueInputCadastrarBp.length >= 3) {
			mostrarNaTelaCadastroUsuario(valueInputCadastrarBp)
			mostrarMensagemSucesso(2);

			valueNome = valueInputCadastrarBp;

			inputCadastrarBp.placeholder = 'digite seu e-mail';
			inputCadastrarBp.value = '';
			inputCadastrarBp.style.backgroundImage = "url('vectors/email-usuario.svg')"

		} else {
			mostrarErrosCadastro(7)
		}


	} else if (valueNome != null && valueEmail == null && valueSenha == null) {


		let valueInputCadastrarBp = document.querySelector('#input-cadastrar-bp').value.trim();


		if (valueInputCadastrarBp.length != 0 && valueInputCadastrarBp.length >= 3 && valueInputCadastrarBp.includes('@') && valueInputCadastrarBp.includes('.com')) {
			mostrarNaTelaCadastroUsuario(valueInputCadastrarBp);
			mostrarMensagemSucesso(4);
			valueEmail = valueInputCadastrarBp;

			inputCadastrarBp.type = 'password';
			inputCadastrarBp.placeholder = 'digite sua senha';
			inputCadastrarBp.value = '';
			inputCadastrarBp.style.backgroundImage = "url('vectors/senha-usuario.svg')"


		} else {
			mostrarErrosCadastro(9)
		}


	} else if (valueNome != null && valueEmail != null && valueSenha == null) {


		let valueInputCadastrarBp = document.querySelector('#input-cadastrar-bp').value.trim();


		if (valueInputCadastrarBp.length != 0 && valueInputCadastrarBp.length >= 6) {

			let valueProtegido = '******'
			console.log(valueProtegido)
			mostrarNaTelaCadastroUsuario(valueProtegido);

			valueSenha = valueInputCadastrarBp;

			requisicaoCadastrar(valueNome, valueEmail, valueSenha);
			mostrarMensagemSucesso(6);

		} else {
			mostrarErrosCadastro(10)
		}


	}



}


function mostrarErrosCadastro(numx) {
	let cadastroBPContent = document.querySelector('.cadastro-bp')

	let cloneNode = bpTocaqui[numx];

	cadastroBPContent.appendChild(cloneNode)

	cloneNode.style.display = 'flex'
	cloneNode.style.animationName = 'aparecer-msg-cadastro'
	cadastroBPContent.scrollTop = cadastroBPContent.scrollHeight;
}

function mostrarMensagemSucesso(msgSucesso, proximo) {
	let cadastroBPContent = document.querySelector('.cadastro-bp')

	let cloneNode = bpTocaqui[msgSucesso];
	let cloneNode2 = bpTocaqui[msgSucesso + 1];


	cadastroBPContent.appendChild(cloneNode)
	cadastroBPContent.appendChild(cloneNode2)

	cloneNode.style.display = 'flex'
	cloneNode.style.animationName = 'aparecer-msg-cadastro'

	cloneNode2.style.display = 'flex'
	cloneNode2.style.animationName = 'aparecer-msg-cadastro'
	cadastroBPContent.scrollTop = cadastroBPContent.scrollHeight;
}

function mostrarNaTelaCadastroUsuario(dados) {

	let cadastroBPContent = document.querySelector('.cadastro-bp')
	let bpTocaquiUserCreate = document.createElement('div');

	let cadastroImgTocaqui2Create = document.createElement('div');

	let imgBpUserCreate = document.createElement('img');

	let cadastroConversa2Create = document.createElement('div');

	let spanCadastroConversa2 = document.createElement('span');

	let spanText = document.createTextNode(dados)

	imgBpUserCreate.src = 'vectors/user.svg';

	spanCadastroConversa2.appendChild(spanText)
	spanCadastroConversa2.classList.add('cadastro-conversa-bp');

	cadastroConversa2Create.appendChild(spanCadastroConversa2);
	cadastroConversa2Create.classList.add('cadastro-conversa2');

	cadastroImgTocaqui2Create.appendChild(imgBpUserCreate);
	cadastroImgTocaqui2Create.classList.add('cadastro-img-tocaqui2');



	bpTocaquiUserCreate.appendChild(cadastroImgTocaqui2Create);
	bpTocaquiUserCreate.appendChild(cadastroConversa2Create);

	bpTocaquiUserCreate.classList.add('bp-tocaqui-user')

	cadastroBPContent.appendChild(bpTocaquiUserCreate)
	cadastroBPContent.scrollTop = cadastroBPContent.scrollHeight;
}

function requisicaoCadastrar(fullName, email, password) {
	$.ajax({
		type: 'POST',
		url: 'https://rest.learncode.academy/api/tocaqui/teste',
		data: {
			'id': '2',
			'name': fullName,
			'email': email,
			'senha': password,
			'minhasIdeias': [''],
			'ideiasParticipo': ['']
		}
	});

}



//let xhttpEnviarCadastro= new XMLHttpRequest();
//
//xhttpEnviarCadastro.onreadystatechange=function(){}
