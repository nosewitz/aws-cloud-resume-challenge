const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://tvfqzihx2mkl4d2vjy2fibebb40qvmez.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = `Views: ${data}`;
}
updateCounter();