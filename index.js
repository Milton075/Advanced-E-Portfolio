

function contact(event) {
	event.preventDefault();
	const loading = document.querySelector('.modal__overlay--loading')
	const success = document.querySelector('.modal__overlay--success')
	loading.classList += " modal__overlay--visible";
	emailjs
	.sendForm(
	'service_1cp27k8',
	'template_42ifbjj',
	event.target,
	'qVDQ8ciziRY5XYN6o'
	) .then(() => {
loading.classList.remove("modal__overlay--visible")
	success.classList += " modal__overlay--visible"
	}).catch(() => {
		loading.classList.remove("modal__overlay--visible")
		alert(
			"The email service is temporarily unavailable. Please email me at mportillo080@gmail.com"
		);
})
}

let isModalOpen = false;
function toggleModal() {
	if (isModalOpen) {
		isModalOpen = false;
		return document.body.classList.remove("modal--open")
		
	}
	isModalOpen = true;
	document.body.classList += " modal--open";
}