//#region lib/core/features/location-replicators/index.ts
var e = (e, t) => {
	let n = t.closest("p");
	if (!n) return;
	let r = e.value === "AS";
	n.style.display = r ? "" : "none";
}, t = () => {
	let t = document.querySelector("select#id_purpose"), n = document.querySelector("select#id_replicators");
	if (!t || !n) return;
	let r = () => {
		e(t, n);
	};
	t.addEventListener("change", r), r();
};
//#endregion
export { t as init };
