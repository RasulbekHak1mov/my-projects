const form = document.querySelector('#form');
form.addEventListener('submit', e => {
	e.preventDefault();

	let name = document.querySelector('#name').value;
	let message = document.querySelector('#message').value;
	let my_text = `${name}- dan xabar keldi!%0A%0AKELGAN XABAR: ${message}%0A%0ASiz ham xabar yozishni hohlasangiz bu saytga kiring:%0Ahttps://hak1mov.netlify.app/responser/ o'zim yaratganman`
	let bot = {
		token: '6149186372:AAGaH0Z4sujPOZ-ehPPlMYRfccNE4G0j264',
		chat_id: -1001256357850,
	};
	

	fetch(`https://api.telegram.org/bot${bot.token}/sendMessage?chat_id=${bot.chat_id}&text=${my_text}`, {
			method: 'GET',
		})
		.then(response => {
			if (response.ok) {
				alert('Xabaringiz yuborildi');

				let name = document.querySelector('#name').value = '';
				let message = document.querySelector('#message').value = '';
			} else {
				alert('Xabaringiz yuborilmadi!');
			}
		})
		.catch(error => {
			console.log(error);
			alert('Xabaringiz yuborilmadi!');
		});
}); 