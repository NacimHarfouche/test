let header = $("header");
let stock = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<!-- <a class="navbar-brand" href="#">Nacim Harfouche</a> -->
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
	<ul class="navbar-nav justify-content-around">
		<li>
			<a class="nav-item nav-link" href="home.html">Home <span class="sr-only">(current)</span></a>
		</li>
		<li>
			<a class="nav-item nav-link" href="projets.html">Projets</a>
		</li>
		<li>
			<a class="nav-item nav-link" href="aboutme.html">About Me</a>
		</li>
		<li>
			<a class="nav-item nav-link active" href="contact.html" tabindex="-1" aria-disabled="true">Contact</a>
		</li>
	</ul>
</div>
</nav>
<div>
					<h1>Contact</h1>
					<a href="https://www.linkedin.com/in/nacim-harfouche-912b14125/" target="_blank"><i class="fab fa-linkedin"></i></a>
					<a href="https://github.com/NacimHarfouche" target="_blank"><i class="fab fa-github-square"></i></a>
					</div>`;

// au lancement de la page
$(() => {
	header.html(stock);
	
	let divHeader = $("header>div");
	divHeader.hide().show(1300);
});
	// divHeader.prepend(`<nav class="navbar navbar-expand-lg navbar-light bg-light">
	// <!-- <a class="navbar-brand" href="#">Nacim Harfouche</a> -->
	// <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
	// 	<span class="navbar-toggler-icon"></span>
	// </button>
	// <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
	// 	<ul class="navbar-nav justify-content-around">
	// 		<li>
	// 			<a class="nav-item nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
	// 		</li>
	// 		<li>
	// 			<a class="nav-item nav-link" href="#">Projets</a>
	// 		</li>
	// 		<li>
	// 			<a class="nav-item nav-link" href="#">About Me</a>
	// 		</li>
	// 		<li>
	// 			<a class="nav-item nav-link active" href="contact.html" tabindex="-1" aria-disabled="true">Contact</a>
	// 		</li>
	// 	</ul>
	// </div>
	// </nav>`);
	// divHeader.prependTo("<p>test</p>");



// au lancement de la page
$(() => {
	divHeader.hide().show(1300);
});