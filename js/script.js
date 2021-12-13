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

// SECTION MILESTONES 1 & 2 //
// Print in DOM a box for each icon.
// let iconsContainer = document.getElementById('icons-container')
//     for (let i = 0; i < icons.length; i++) {
//         const obj = icons[i];
//         let templateBoxIcon = `
//         <div class="box-icon">
//             <i style="color:${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
//             <span class="name-icon">${obj.name}</span>
//         </div>
//     `;
// iconsContainer.innerHTML += templateBoxIcon;
// }

const selectFamily = document.getElementById('selectFamily');
selectFamily.addEventListener('change', (event) => {
    const valueFamily = selectFamily.value;
    if (valueFamily == 0) {
        let iconsContainer = document.getElementById('icons-container')
        for (let i = 0; i < icons.length; i++) {
            const obj = icons[i];
            let templateBoxIcon = `
            <div class="box-icon">
                <i style="color:${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
                <span class="name-icon">${obj.name}</span>
            </div>
        `;
    iconsContainer.innerHTML += templateBoxIcon;
        } 
    } else if (valueFamily == 1) {
        let iconsContainer = document.getElementById('icons-container')
        for (let i = 0; i < icons.length; i++) {
            const obj = icons[i];
            let templateBoxIcon = `
            <div class="box-icon">
                <i style="color:${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
                <span class="name-icon">${obj.name}</span>
            </div>
        `;
        }
    } else if (valueFamily == 2) {
        let iconsContainer = document.getElementById('icons-container');
        for (let i = 0; i < icons.length; i++) {
            const obj = icons[i];
            let templateBoxIcon = `
            <div class="box-icon">
                <i style="color:${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
                <span class="name-icon">${obj.name}</span>
            </div>
        `;
        }
    } else if (valueFamily == 3) {
        let iconsContainer = document.getElementById('icons-container')
        for (let i = 0; i < icons.length; i++) {
            const obj = icons[i];
            let templateBoxIcon = `
            <div class="box-icon">
                <i style="color:${obj.color}" class="${obj.family} ${obj.prefix}${obj.name}"></i>
                <span class="name-icon">${obj.name}</span>
            </div>
        `;
    }

}
});