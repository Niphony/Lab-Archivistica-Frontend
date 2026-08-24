import { t as e } from "./plain-GH5faqzX.js";
//#region lib/core/features/callback-headers/index.ts
var t = ".callback > form", n = "input[name^=\"header_\"]", r = "delete_header", i = "add_header", a = (e) => Array.from(e.querySelectorAll(n)), o = (e) => e instanceof HTMLParagraphElement && a(e).length >= 2, s = (e) => Array.from(e.querySelectorAll("p")).filter(o), c = (e, t) => e.replace(/\d+/, (e) => String(Number.parseInt(e, 10) + t)), l = (e, t = 0, n = !0) => {
	t === 0 && !n || e.forEach((e) => {
		a(e).forEach((e) => {
			t !== 0 && (e.id &&= c(e.id, t), e.name = c(e.name, t)), n && (e.value = "");
		});
	});
}, u = (t) => {
	if (t.querySelector(`a.${r}`)) return;
	let n = a(t)[1];
	if (!n) return;
	let i = document.createElement("a");
	i.href = "#", i.className = r, i.textContent = e("callbackHeaders.delete"), n.insertAdjacentElement("afterend", i);
}, d = (t) => {
	if (t.querySelector(`a.${i}`)) return;
	let n = s(t), r = n[n.length - 1];
	if (!r) return;
	let a = document.createElement("p"), o = document.createElement("a");
	o.href = "#", o.className = i, o.textContent = e("callbackHeaders.addHeader"), a.append(o), r.insertAdjacentElement("afterend", a);
}, f = (e) => {
	s(e).forEach((e) => {
		u(e);
	}), d(e);
}, p = (e) => {
	let t = e.closest("form"), n = e.closest("p");
	if (!(t instanceof HTMLFormElement) || !(n instanceof HTMLParagraphElement) || !o(n)) return;
	let r = s(t);
	if (r.length > 1) {
		let e = r.indexOf(n);
		if (e < 0) return;
		let t = r.slice(e + 1);
		l(t, -1, !1);
		let i = n.querySelector("label");
		i && t.length > 0 && t[0].prepend(i), n.remove();
		return;
	}
	l([n]);
}, m = (e) => {
	let t = e.closest("form");
	if (!(t instanceof HTMLFormElement)) return;
	let n = s(t), r = n[n.length - 1];
	if (!r) return;
	let i = r.cloneNode(!0);
	i instanceof HTMLParagraphElement && (i.querySelector("label")?.remove(), l([i], 1, !0), r.insertAdjacentElement("afterend", i));
}, h = !1, g = () => {
	h || (h = !0, document.addEventListener("click", (e) => {
		let t = e.target;
		if (!(t instanceof Element)) return;
		let n = t.closest(`.callback > form a.${r}`);
		if (n) {
			e.preventDefault(), p(n);
			return;
		}
		let a = t.closest(`.callback > form a.${i}`);
		a && (e.preventDefault(), m(a));
	}));
}, _ = () => {
	document.querySelectorAll(t).forEach((e) => {
		f(e);
	}), g();
};
//#endregion
export { _ as init };
