



		function enviarForm() {
			event.preventDefault();

			var username = document.getElementById("username").value;
			var password = document.getElementById("password").value;

			if (username == "admin@gmail.com" && password == "admin123") {
				var quadrado = document.getElementById('quadrado');
  			quadrado.classList.add('zoom-out');

				setTimeout(function() {
					quadrado.classList.remove('zoom-out');
			    window.location.href = "Home.html";
				}, 500);
			} else {
				alert("Credenciais inválidas. Tente novamente.");
			}
		}


		window.addEventListener('load', function() {
  		var quadrado = document.getElementById('quadrado');
  		quadrado.addEventListener('animationend', function() {
    		quadrado.classList.remove('zoom-in');
  		});
		});

		function abrirNovaJanela() {
  			var quadrado = document.getElementById('quadrado');
  			quadrado.classList.add('zoom-out');

			setTimeout(function() {
				quadrado.classList.remove('zoom-out');
			    window.location.href = "Registro.html";
			}, 500);
		}

		function alternarTema() {
		  var quadrado = document.getElementById('quadrado');
		  quadrado.classList.toggle('dark-theme');

		  var themeButton = document.querySelector('.theme-button');
			  if (quadrado.classList.contains('dark-theme')) {
			    themeButton.classList.remove('theme-button-light');
			    themeButton.classList.add('theme-button-dark');
			  } else {
			    themeButton.classList.remove('theme-button-dark');
			    themeButton.classList.add('theme-button-light');
			  }

			  function alternarTema() {
 				 var body = document.body;
  				body.classList.toggle('dark-theme');
				}
		}
		

