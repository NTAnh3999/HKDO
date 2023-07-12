const btnSelectConsolidatedInventoryReport = document.querySelector(
	".btn__select-consolidated-inventory-report"
);
const btnNoSelectConsolidatedInventoryReport = document.querySelector(
	".btn__no-select-consolidated-inventory-report"
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

btnSelectConsolidatedInventoryReport.addEventListener("click", () => {
	btnSelectConsolidatedInventoryReport.style.display = "none";
	handleBoxSelectActive();
});
btnNoSelectConsolidatedInventoryReport.addEventListener("click", () => {
	const items = document.querySelectorAll(".item input");
	checkAll.checked = false;
	handleCheckedAll();
	handleBoxSelectActive();
	btnSelectConsolidatedInventoryReport.style.display = "block";
});
checkAll.addEventListener("change", handleCheckedAll);
