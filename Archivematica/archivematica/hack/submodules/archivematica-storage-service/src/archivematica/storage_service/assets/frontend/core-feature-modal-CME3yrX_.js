//#region lib/core/features/modal/index.ts
var e = ".modal", t = "hide", n = "modal-open", r = /* @__PURE__ */ new WeakMap(), i = !1, a = (e) => {
	let t = r.get(e);
	if (t) return t;
	let n = {
		backdrop: null,
		opener: null
	};
	return r.set(e, n), n;
}, o = () => Array.from(document.querySelectorAll(`${e}.in`)), s = (e, t, n) => e.dispatchEvent(new Event(t, {
	bubbles: !0,
	cancelable: n
})), c = (e) => e.querySelector([
	"[autofocus]",
	"button:not([disabled])",
	"[href]",
	"input:not([disabled])",
	"select:not([disabled])",
	"textarea:not([disabled])",
	"[tabindex]:not([tabindex=\"-1\"])"
].join(",")), l = (e) => {
	let t = c(e);
	if (t) {
		t.focus();
		return;
	}
	e.hasAttribute("tabindex") || e.setAttribute("tabindex", "-1"), e.focus();
}, u = (e) => {
	let t = a(e);
	if (t.backdrop) return;
	let r = document.createElement("div");
	r.className = "modal-backdrop fade", r.addEventListener("click", () => {
		_(e);
	}), document.body.append(r), r.offsetWidth, r.classList.add("in"), t.backdrop = r, document.body.classList.add(n);
}, d = (e) => {
	let t = a(e);
	t.backdrop &&= (t.backdrop.classList.remove("in"), t.backdrop.remove(), null), o().length === 0 && document.body.classList.remove(n);
}, f = (e, n) => {
	if (n) {
		e.style.display = "block", e.classList.remove(t), e.classList.add("in"), e.setAttribute("aria-hidden", "false");
		return;
	}
	e.classList.remove("in"), e.classList.add(t), e.style.display = "none", e.setAttribute("aria-hidden", "true");
}, p = (e) => e.classList.contains("in"), m = (e) => {
	for (let t of o()) t !== e && _(t, { restoreFocus: !1 });
}, h = () => document.activeElement instanceof HTMLElement ? document.activeElement : null, g = (e, t) => {
	if (p(e) || !s(e, "show", !0)) return;
	m(e);
	let n = a(e);
	n.opener = t ?? h(), f(e, !0), u(e), l(e), s(e, "shown", !1);
}, _ = (e, t = {}) => {
	if (!p(e) || !s(e, "hide", !0)) return;
	let n = a(e), r = t.restoreFocus !== !1;
	f(e, !1), d(e), r && n.opener && n.opener.focus(), n.opener = null, s(e, "hidden", !1);
}, v = (e, t) => {
	if (p(e)) {
		_(e);
		return;
	}
	g(e, t);
}, y = (e) => {
	let t = e.getAttribute("data-am-modal-target");
	if (t?.startsWith("#")) return t;
	let n = e.getAttribute("data-am-target");
	if (n?.startsWith("#")) return n;
	let r = e.getAttribute("href");
	return r?.startsWith("#") && r !== "#" ? r : null;
}, b = (e) => {
	let t = y(e);
	return t ? document.querySelector(t) : null;
}, x = () => {
	i || (i = !0, document.addEventListener("click", (t) => {
		let n = t.target;
		if (!(n instanceof Element)) return;
		let r = n.closest("[data-dismiss=\"modal\"]");
		if (r) {
			let n = r.closest(e);
			n && (t.preventDefault(), _(n));
			return;
		}
		let i = n.closest("[data-am-toggle=\"modal\"], [data-am-modal-target]");
		if (!i) return;
		let a = b(i);
		a && (t.preventDefault(), g(a, i));
	}), document.addEventListener("keydown", (e) => {
		if (e.key !== "Escape") return;
		let t = o(), n = t[t.length - 1];
		n && (e.preventDefault(), _(n));
	}));
}, S = () => {
	window.StorageServiceModal = {
		show: g,
		hide: _,
		toggle: v
	};
}, C = () => {
	x(), S();
};
//#endregion
export { _ as hideModal, C as init, g as showModal, v as toggleModal };
