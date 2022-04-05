import Pokemon from './pokemon.js';

const schuirtle = new Pokemon(
  'schuirtle',
  'wather swing',
  'A monkey that dances',
  'female',
  'A friendly hug'
);

var hrComponent = ` <hr style="  height: 10px;
background-color: black;
border: 0;"></hr>`;

var pokemonDescriptionStyle =
  'color: white; font-size: 20px; font-weight: bold';
const template = (schuirtle) => {
  return `
  ${hrComponent}
  <div style=    margin-left: auto;
  margin-right: auto;
  width: 8em">
	<h3 class="animal">${schuirtle.name}</h3>
	<ul  style="${pokemonDescriptionStyle}">
	  <li>Power: ${schuirtle.power}</li>
	  <li>Gender: ${schuirtle.gender}</li>
	  <li>About: ${schuirtle.description}</li>
    <li>Secondary power: ${schuirtle.secundaryPower}</li>
	</ul>
  </div>
  `;
};

console.log(schuirtle);

const main = document.createElement('main');
main.innerHTML = template(schuirtle);
document.body.appendChild(main);
