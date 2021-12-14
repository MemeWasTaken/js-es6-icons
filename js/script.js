// SECTION Icons object //
let icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'purple'
	}
];

// SECTION functions //
function printInDom(typeObj, typeObj2, typeObj3) {
	let iconsContainer = document.getElementById('icons-container');
	iconsContainer.innerHTML = '';
	for (let i = 0; i < icons.length; i++) {
	const obj = icons[i];
		if (obj.type == typeObj || obj.type == typeObj2 || obj.type == typeObj3) {
		let templateBoxIcon = `
		<li class="box-icon">
		<i style="color:${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
		<span class="name-icon">${obj.name}</span>
		</li>
		`;
		iconsContainer.innerHTML += templateBoxIcon;
		}
	}
}

// SECTION MILESTONES 1 & 2 //
// By default print all the icons
printInDom('animal', 'vegetable', 'user');


// SECTION MILESTONES 3 //
const selectFamily = document.getElementById('selectFamily');
selectFamily.addEventListener('change', (event) => {
    const valueFamily = selectFamily.value;
    if (valueFamily == 0) {
    printInDom('animal', 'vegetable', 'user');	//Print all the icons
    } else if (valueFamily == 1) {
		printInDom('animal'); //Print the animal icons
    } else if (valueFamily == 2) {
		printInDom('vegetable'); //Print the vegetable icons
    } else if (valueFamily == 3) {
		printInDom('user'); //Print the user icons
	}
});