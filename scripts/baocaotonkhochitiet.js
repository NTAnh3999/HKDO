const btnSelectInventoryReports = document.querySelector(
	".btn__select-inventory-reports"
);
const btnNoSelectInventoryReports = document.querySelector(
	".btn__no-select-inventory-reports"
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

btnSelectInventoryReports.addEventListener("click", () => {
	btnSelectInventoryReports.style.display = "none";
	handleBoxSelectActive();
});
btnNoSelectInventoryReports.addEventListener("click", () => {
	const items = document.querySelectorAll(".item input");
	checkAll.checked = false;
	handleCheckedAll();
	handleBoxSelectActive();
	btnSelectInventoryReports.style.display = "block";
});
checkAll.addEventListener("change", handleCheckedAll);
