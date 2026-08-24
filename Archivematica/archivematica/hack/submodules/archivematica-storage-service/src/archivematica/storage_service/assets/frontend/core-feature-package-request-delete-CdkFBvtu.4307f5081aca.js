import { n as e, r as t } from "./client-C_wHJOl3.js";
import { t as n } from "./plain-GH5faqzX.js";
//#region lib/core/features/package-request-delete/index.ts
var r = "a.request-delete", i = "packageRequestDeleteUrl", a = "packageRequestDeleteCsrfToken", o = "h1", s = "package-delete-alert", c = "packageRequestDelete.success", l = "packageRequestDelete.failure", u = e(), d = (e, t) => {
	document.getElementById(s)?.remove();
	let n = document.querySelector(o);
	if (!n) return;
	let r = document.createElement("div");
	r.id = s, r.className = `alert ${t === "success" ? "alert-success" : "alert-warning"}`, r.textContent = e, n.insertAdjacentElement("afterend", r);
}, f = (e) => {
	if (!e || typeof e != "object") return null;
	let { message: t, error_message: n } = e;
	return typeof t == "string" && t.length > 0 ? t : typeof n == "string" && n.length > 0 ? n : null;
}, p = async (e) => {
	let r = e.dataset[i], o = e.dataset[a];
	if (!(!r || !o)) try {
		d(f(await u.requestJson(r, {
			method: "POST",
			headers: { "X-CSRFToken": o }
		})) ?? n(c), "success");
	} catch (e) {
		let r = f(t(e)?.bodyJson);
		console.error("Failed to submit package deletion request", e), d(r ?? n(l), "warning");
	}
}, m = !1, h = () => {
	m || (m = !0, document.addEventListener("click", (e) => {
		let t = e.target;
		if (!(t instanceof Element)) return;
		let n = t.closest(r);
		n && (e.preventDefault(), p(n));
	}));
}, g = () => {
	h();
};
//#endregion
export { g as init };
