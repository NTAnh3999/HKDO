const btnSelectReceipts = document.querySelector(".btn__select-receipts");
const btnNoSelectReceipts = document.querySelector(".btn__no-select-receipts");
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

btnSelectReceipts.addEventListener("click", () => {
	btnSelectReceipts.style.display = "none";
	handleBoxSelectActive();
});
btnNoSelectReceipts.addEventListener("click", () => {
	const items = document.querySelectorAll(".item input");
	checkAll.checked = false;
	handleCheckedAll();
	handleBoxSelectActive();
	btnSelectReceipts.style.display = "block";
});
checkAll.addEventListener("change", handleCheckedAll);
