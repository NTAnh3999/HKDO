const setting = document.getElementById("setting");
const report = document.getElementById("report");
const sideBarFeatures = document.getElementById("side__bar-feature");
const sideBarReport = document.getElementById("side__bar-report");
const closeSideBarFeature = document.getElementById("close__side-bar-feature");
const closeSideBarReport = document.getElementById("close__side-bar-report");

function handleSideBarFeatures() {
	sideBarFeatures.classList.toggle("active");
}

function handleSideBarReport() {
	sideBarReport.classList.toggle("active");
}

setting.addEventListener("click", handleSideBarFeatures);
closeSideBarFeature.addEventListener("click", handleSideBarFeatures);

report.addEventListener("click", handleSideBarReport);
closeSideBarReport.addEventListener("click", handleSideBarReport);
