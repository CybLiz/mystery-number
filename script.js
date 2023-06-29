// commencer par définir les diff variables en jeux:


let button = document.getElementById('button')
let button2 = document.getElementById('button2')
let usernumb = document.getElementById('usernumb')
let chance = 1;
function refresh() {
	location.reload()
}

let mysterynumb = (Math.floor(Math.random() * 10));
console.log(mysterynumb)

button.addEventListener('click', (event) => {
	event.preventDefault();
	// déclare une nouvelle variable nbresaisi qui récupère la valeur du input donc usernumb
	const nbresaisi = parseInt(usernumb.value);

	if (chance <= 3) {

		if (nbresaisi < mysterynumb) {
			result.innerHTML += ` <div class="line"></div> <h4> ${chance} ${chance < 2 ? "<sup>er</sup>" : "<sup>éme</sup>"} Essai </h4>  ${nbresaisi} ? ... c'est ➕ `;
			console.log(chance)

			if ((chance === 3)) {
				result.innerHTML += ` <h3> Perdu !😥 </h3>		
			 <button type="submit" id="button2" onclick="refresh()" class=" btn btn-primary w-5 p-2">Rejouer</button>`;

			}

		}
		else if (nbresaisi > mysterynumb) {
			result.innerHTML += `<div class="line"></div>  <h4> ${chance} ${chance < 2 ? "<sup>er</sup>" : "<sup>éme</sup>"} Essai </h4> ${nbresaisi} ? ... c'est ➖ `;
			console.log(chance)
			if ((chance === 3)) {
				result.innerHTML += `  <h3> Perdu !😥 </h3>			
			 <button type="submit" id="button2" onclick="refresh()" class=" btn btn-primary w-5 p-2">Rejouer</button>`;

			}

		}

		else if (nbresaisi === mysterynumb) {

			result.innerHTML += ` <h4> ${chance}${chance < 2 ? "<sup>er</sup>" : "<sup>éme</sup>"}  Essai </h4> <h3> Gagné !😄 </h3>, numéro mystère : ${mysterynumb}
		 <button type="submit" id="button2" onclick="refresh()" class=" btn btn-primary w-5 p-2">Rejouer</button>` ;
		}

	}
	chance++
})




