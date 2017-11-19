self.addEventListener('install', function (event) {

	console.log("installed");

	event.waitUntil(

		caches.open('static')
		.then(function (cache) {

			//		cache.add('/')

			cache.addAll([
				'/',
			'vectors/toca-aqui-logo-simbolo.svg',
			'vectors/toca-aqui-logo.svg',
			'vectors/lupa-pesquisar-branco.svg',
			'vectors/logo-horizontal.svg',
			'css/explorar.css',
			'js/explorar.js'


		]);
		})

	);
});





self.addEventListener('activate', function () {

	console.log("sw activated");

});



self.addEventListener('fetch', function (event) {

	event.respondWith(

		caches.match(event.request)
		.then(function (res) {

			if (res) {

				return res;
			} else {
				return fetch(event.request);
			}
		})

	);
});
