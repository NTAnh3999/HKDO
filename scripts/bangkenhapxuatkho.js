const btnSelectImportManifest = document.querySelector(
	".btn__select-import-manifest"
);
const btnNoSelectImportManifest = document.querySelector(
	".btn__no-select-import-manifest"
);
const boxSelectList = document.querySelectorAll(".box__select");
const boxNotSelectList = document.querySelectorAll(".box__not-select");
const checkAll = document.querySelector("#check-all");

function handleBoxSelectActive() {
	boxSelectList.forEach((boxSelect) => boxSelect.classList.toggle("active"));
}
function handleBoxNotSelectActive() {
	boxNotSelectList.forEach((boxNotSelect) =>
		boxNotSelect.classList.toggle("active")
	);
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

btnSelectImportManifest.addEventListener("click", () => {
	btnSelectImportManifest.style.display = "none";
	handleBoxNotSelectActive();
	handleBoxSelectActive();
});
btnNoSelectImportManifest.addEventListener("click", () => {
	const items = document.querySelectorAll(".item input");
	checkAll.checked = false;
	handleCheckedAll();
	handleBoxNotSelectActive();
	handleBoxSelectActive();
	btnSelectImportManifest.style.display = "block";
});
checkAll.addEventListener("change", handleCheckedAll);
