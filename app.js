const toggleSwitch = document.querySelector(".toggle input");
let basicPrice = document.querySelector("#basic-price");
let professionalPrice = document.querySelector("#professional-price");
let masterPrice = document.querySelector("#master-price");

toggleSwitch.addEventListener("click", function () {
	if (toggleSwitch.checked) {
		basicPrice.textContent = 199.99;
		professionalPrice.textContent = 249.99;
		masterPrice.textContent = 399.99;
	} else if (!toggleSwitch.checked) {
		basicPrice.textContent = 19.99;
		professionalPrice.textContent = 24.99;
		masterPrice.textContent = 39.99;
	}
});

// toggleSwitch.addEventListener("click", function () {
// 	const prices = document.querySelectorAll(".pricing-plans__price span");
// 	if (toggleSwitch.checked) {
// 		for (let price of prices) {
// 			price.textContent = Math.trunc(price.textContent * 10 * 100) / 100;
// 		}
// 	} else if (!toggleSwitch.checked) {
// 		for (let price of prices) {
// 			price.textContent = Math.trunc((price.textContent / 10) * 100) / 100;
// 		}
// 	}
// });
