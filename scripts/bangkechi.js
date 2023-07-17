const btnSelectExpenseStatement = document.querySelector(
	".btn__select__expense-statement"
);
const btnNoSelectExpenseStatement = document.querySelector(
	".btn__no-select__expense-statement"
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

btnSelectExpenseStatement.addEventListener("click", () => {
	btnSelectExpenseStatement.style.display = "none";
	handleBoxSelectActive();
});
btnNoSelectExpenseStatement.addEventListener("click", () => {
	const items = document.querySelectorAll(".item input");
	checkAll.checked = false;
	handleCheckedAll();
	handleBoxSelectActive();
	btnSelectExpenseStatement.style.display = "block";
});
checkAll.addEventListener("change", handleCheckedAll);
