const btnSelectNearDateProducts = document.querySelector(
	".btn__select-near-date-products"
);
const btnNoSelectNearDateProducts = document.querySelector(
	".btn__no-select-near-date-products"
);
const boxSelectList = document.querySelectorAll(".box__select");
const checkAll = document.querySelector("#check-all");

function handleBoxSelectActive() {
	boxSelectList.forEach((boxSelect) => boxSelect.classList.toggle("active"));
}
function handleCheckedAll() {
	const items = document.querySelectorAll(".item input");
	if (checkAll.checked) {
		return items.forEach((item) => {
			item.checked = true;
		});
	} else {
		return items.forEach((item) => {
			item.checked = false;
		});
	}
}

btnSelectNearDateProducts.addEventListener("click", () => {
	btnSelectNearDateProducts.style.display = "none";
	handleBoxSelectActive();
});
btnNoSelectNearDateProducts.addEventListener("click", () => {
	const items = document.querySelectorAll(".item input");
	checkAll.checked = false;
	handleCheckedAll();
	handleBoxSelectActive();
	btnSelectNearDateProducts.style.display = "block";
});
checkAll.addEventListener("change", handleCheckedAll);
