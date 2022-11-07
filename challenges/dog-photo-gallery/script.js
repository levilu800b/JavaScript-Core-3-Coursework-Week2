const generateDOg = document.getElementById('dog-generator');
const clearDogGenerated = document.getElementById('clear-dog-generated');
const dogGeneratorBox = document.getElementById('flex-dog-gen');

// fetch data on button click
generateDOg.addEventListener('click', () => {
	fetch(`https://dog.ceo/api/breeds/image/random`)
		.then((res) => res.json())
		.then((data) => {
			createImg(data.message);
		})
		.catch((err) => (list.innerText = 'Something went wrong'));
});

function createImg(url) {
	const listItem = document.createElement('li');
	const image = document.createElement('img');
	image.src = url;

	listItem.appendChild(image);
	dogGeneratorBox.appendChild(listItem);
}

// clear list on button click
clearDogGenerated.addEventListener('click', () => {
	dogGeneratorBox.innerHTML = '';
});
