//#region lib/core/features/space-protocol/index.ts
var e = (e, t) => {
	let n = new URL(e, window.location.origin);
	return n.searchParams.set("protocol", t), n.toString();
}, t = async (t, n, r) => {
	let i = t.dataset.spaceProtocolFormUrl;
	if (i) try {
		let t = await fetch(e(i, n.value), { credentials: "same-origin" });
		if (!t.ok) throw Error(`Failed to fetch protocol fields with status ${t.status}`);
		r.innerHTML = await t.text();
	} catch (e) {
		console.error("Failed to load protocol fields", e);
	}
}, n = (e) => {
	let n = e.querySelector("select#id_space-access_protocol"), r = e.querySelector("#protocol_form");
	!n || !r || n.addEventListener("change", () => {
		t(e, n, r);
	});
}, r = () => {
	document.querySelectorAll("form[data-space-protocol-form-url]").forEach((e) => {
		n(e);
	});
};
//#endregion
export { r as init };
