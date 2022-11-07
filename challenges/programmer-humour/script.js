const mainPage = document.querySelector('.page');

fetch(`https://xkcd.now.sh/?comic=latest`)
	.then((res) => res.json())
	.then((data) => {
		console.log(data);
		createImg(data.img);
	})
	.catch((err) => (mainPage.innerText = 'Something went wrong'));

function createImg(url) {
	const image = document.createElement('img');
	image.src = url;

	mainPage.appendChild(image);
}
