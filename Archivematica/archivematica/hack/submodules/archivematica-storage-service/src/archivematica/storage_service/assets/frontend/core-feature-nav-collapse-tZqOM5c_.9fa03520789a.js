//#region lib/core/features/nav-collapse/index.ts
var e = "[data-am-toggle=\"collapse\"]", t = `.navbar ${e}`, n = "in", r = "(max-width: 979px)", i = !1, a = !1, o = () => typeof window.matchMedia == "function" ? window.matchMedia(r).matches : window.innerWidth <= 979, s = (e) => {
	let t = e.getAttribute("data-am-target");
	if (t?.startsWith("#")) return t;
	let n = e.getAttribute("href");
	return n?.startsWith("#") && n !== "#" ? n : null;
}, c = (e) => {
	let t = s(e);
	return t ? document.querySelector(t) : null;
}, l = (e) => {
	let t = c(e);
	return t?.classList.contains("nav-collapse") ? t : null;
}, u = (e, t) => {
	e.setAttribute("aria-expanded", String(t));
}, d = (e, t, r) => {
	if (!r) {
		e.classList.remove(n), e.removeAttribute("aria-hidden"), e.style.height = "", e.style.overflow = "";
		return;
	}
	if (e.classList.toggle(n, t), e.setAttribute("aria-hidden", String(!t)), e.classList.contains("nav-collapse")) {
		if (t) {
			e.style.height = "auto", e.style.overflow = "visible";
			return;
		}
		e.style.height = "0px", e.style.overflow = "hidden";
	}
}, f = (e) => {
	let t = l(e);
	if (!t) return;
	let r = o(), i = !r || t.classList.contains(n);
	u(e, i), d(t, i, r);
}, p = () => {
	for (let e of document.querySelectorAll(t)) f(e);
}, m = (e) => {
	let t = l(e);
	if (!t) return;
	if (!o()) {
		u(e, !0), d(t, !0, !1);
		return;
	}
	let r = t.classList.contains(n);
	d(t, !r, !0), u(e, !r);
}, h = () => {
	i || (i = !0, document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest(e);
		r?.closest(".navbar") && l(r) && (t.preventDefault(), m(r));
	}));
}, g = () => {
	a || (a = !0, window.addEventListener("resize", () => {
		p();
	}));
}, _ = () => {
	p(), h(), g();
};
//#endregion
export { _ as init };
