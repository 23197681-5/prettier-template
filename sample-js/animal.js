import Animal from './animal.js';

const monkey = new Animal(
  'monkey',
  'Gertudres',
  'female',
  'A friendly monkey',
  '1m',
  '65kg',
  13,
  '2003-9-14',
  'Omnivoros'
);

const template = (monkey) => {
  return `
  <div>
	<h3 class="animal">${monkey.name}</h3>
	<ul>
	  <li>Animal Species: ${monkey.species}</li>
	  <li>Gender: ${monkey.gender}</li>
	  <li>About: ${monkey.description}</li>
	  <li>Height: ${monkey.height}
    <li>Weight: ${monkey.weight} </li>
	  <li>Age: ${monkey.age}</li>
    <li>Born date: ${monkey.bornDate}</li>
    <li>Born date: ${monkey.foodType}</li>
	</ul>
  </div>
  `;
};

console.log(monkey);

const main = document.createElement('main');
main.innerHTML = template(monkey);
document.body.appendChild(main);
