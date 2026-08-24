import { A as e, C as t, D as n, E as r, F as i, G as a, H as o, I as s, J as c, K as l, M as u, N as d, O as f, P as p, R as m, S as h, U as g, V as _, W as v, X as y, Y as b, _ as x, b as S, c as C, d as w, f as T, g as E, h as D, i as O, j as k, k as A, l as j, m as M, p as N, q as P, s as F, u as I, v as L, w as R, x as z, y as B, z as V } from "./runtime-CsFmpt5v.js";
//#region node_modules/ohash/dist/_chunks/is-equal.mjs
function ee(e) {
	return typeof e == "string" ? `'${e}'` : new ne().serialize(e);
}
var te = " _-,;:!?.'\"()[]{}@*/\\&#%`^+<=>|~$0123456789abcdefghijklmnopqrstuvwxyz", H = /*@__PURE__*/ (function() {
	let e = /* @__PURE__ */ new Uint8Array(128);
	for (let t = 0; t < 69; t++) e[te.charCodeAt(t)] = t + 1;
	for (let t = 65; t <= 90; t++) e[t] = e[t + 32];
	return e;
})();
function U(e, t) {
	if (e === t) return 0;
	let n = Math.min(e.length, t.length), r = 0;
	for (let i = 0; i < n; i++) {
		let n = e.charCodeAt(i), a = t.charCodeAt(i);
		if (n === a) continue;
		let o = n < 128 && H[n] ? H[n] : n + 128, s = a < 128 && H[a] ? H[a] : a + 128;
		if (o !== s) return o < s ? -1 : 1;
		r === 0 && (r = n > a ? -1 : 1);
	}
	return e.length === t.length ? r : e.length < t.length ? -1 : 1;
}
var ne = /*@__PURE__*/ (function() {
	class e {
		#e = /* @__PURE__ */ new Map();
		compare(e, t) {
			let n = typeof e, r = typeof t;
			return n === "string" && r === "string" ? U(e, t) : n === "number" && r === "number" ? e - t : U(this.serialize(e, !0), this.serialize(t, !0));
		}
		serialize(e, t) {
			if (e === null) return "null";
			switch (typeof e) {
				case "string": return t ? e : `'${e}'`;
				case "bigint": return `${e}n`;
				case "object": return this.$object(e);
				case "function": return this.$function(e);
			}
			return String(e);
		}
		serializeObject(e) {
			let t = Object.prototype.toString.call(e);
			if (t !== "[object Object]") return this.serializeBuiltInType(t.length < 10 ? `unknown:${t}` : t.slice(8, -1), e);
			let n = e.constructor, r = n === Object || n === void 0 ? "" : n.name;
			if (r !== "" && globalThis[r] === n) return this.serializeBuiltInType(r, e);
			if ("toJSON" in e && typeof e.toJSON == "function") {
				let t = e.toJSON();
				return r + (typeof t == "object" && t ? this.$object(t) : `(${this.serialize(t)})`);
			}
			let i = Object.keys(e).sort(U), a = `${r}{`;
			for (let t = 0; t < i.length; t++) {
				let n = i[t];
				a += `${n}:${this.serialize(e[n])}`, t < i.length - 1 && (a += ",");
			}
			return a + "}";
		}
		serializeBuiltInType(e, t) {
			let n = this["$" + e];
			if (n) return n.call(this, t);
			if (typeof t.entries == "function") return this.serializeObjectEntries(e, t.entries());
			throw Error(`Cannot serialize ${e}`);
		}
		serializeObjectEntries(e, t) {
			let n = Array.from(t).sort((e, t) => this.compare(e[0], t[0])), r = `${e}{`;
			for (let e = 0; e < n.length; e++) {
				let [t, i] = n[e];
				r += `${this.serialize(t, !0)}:${this.serialize(i)}`, e < n.length - 1 && (r += ",");
			}
			return r + "}";
		}
		$object(e) {
			let t = this.#e.get(e);
			return t === void 0 && (this.#e.set(e, `#${this.#e.size}`), t = this.serializeObject(e), this.#e.set(e, t)), t;
		}
		$function(e) {
			let t = Function.prototype.toString.call(e);
			return t.slice(-15) === "[native code] }" ? `${e.name || ""}()[native]` : `${e.name}(${e.length})${t.replace(/\s*\n\s*/g, "")}`;
		}
		$Array(e) {
			let t = "[";
			for (let n = 0; n < e.length; n++) t += this.serialize(e[n]), n < e.length - 1 && (t += ",");
			return t + "]";
		}
		$Date(e) {
			try {
				return `Date(${e.toISOString()})`;
			} catch {
				return "Date(null)";
			}
		}
		$ArrayBuffer(e) {
			return `ArrayBuffer[${new Uint8Array(e).join(",")}]`;
		}
		$Set(e) {
			return `Set${this.$Array(Array.from(e).sort((e, t) => this.compare(e, t)))}`;
		}
		$Map(e) {
			return this.serializeObjectEntries("Map", e.entries());
		}
	}
	for (let t of [
		"Error",
		"RegExp",
		"URL"
	]) e.prototype["$" + t] = function(e) {
		return `${t}(${e})`;
	};
	for (let t of [
		"Int8Array",
		"Uint8Array",
		"Uint8ClampedArray",
		"Int16Array",
		"Uint16Array",
		"Int32Array",
		"Uint32Array",
		"Float32Array",
		"Float64Array"
	]) e.prototype["$" + t] = function(e) {
		return `${t}[${e.join(",")}]`;
	};
	for (let t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(e) {
		return `${t}[${e.join("n,")}${e.length > 0 ? "n" : ""}]`;
	};
	return e;
})();
function W(e, t) {
	return e === t || ee(e) === ee(t);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/arrays.js
function G(e, t, n) {
	let r = e.findIndex((e) => W(e, t)), i = e.findIndex((e) => W(e, n));
	if (r === -1 || i === -1) return [];
	let [a, o] = [r, i].sort((e, t) => e - t);
	return e.slice(a, o + 1);
}
//#endregion
//#region node_modules/reka-ui/dist/shared/createContext.js
function K(e, t) {
	let n = typeof e == "string" && !t ? `${e}Context` : t, r = Symbol(n);
	return [(t) => {
		let n = h(r, t);
		if (n || n === null) return n;
		throw Error(`Injection \`${r.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
	}, (e) => (A(r, e), e)];
}
//#endregion
//#region node_modules/reka-ui/dist/shared/getActiveElement.js
function q() {
	let e = document.activeElement;
	if (e == null) return null;
	for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null;) e = e.shadowRoot.activeElement;
	return e;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/handleAndDispatchCustomEvent.js
function J(e, t, n) {
	let r = n.originalEvent.target, i = new CustomEvent(e, {
		bubbles: !1,
		cancelable: !0,
		detail: n
	});
	t && r.addEventListener(e, t, { once: !0 }), r.dispatchEvent(i);
}
//#endregion
//#region node_modules/@vueuse/shared/dist/index.js
function Y(e, t) {
	return V() ? (o(e, t), !0) : !1;
}
function re() {
	let e = /* @__PURE__ */ new Set(), t = (t) => {
		e.delete(t);
	};
	return {
		on: (n) => {
			e.add(n);
			let r = () => t(n);
			return Y(r), { off: r };
		},
		off: t,
		trigger: (...t) => Promise.all(Array.from(e).map((e) => e(...t))),
		clear: () => {
			e.clear();
		}
	};
}
var X = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
var ie = (e) => e !== void 0, Z = () => {};
function ae(e, t) {
	function n(...n) {
		return new Promise((r, i) => {
			Promise.resolve(e(() => t.apply(this, n), {
				fn: t,
				thisArg: this,
				args: n
			})).then(r).catch(i);
		});
	}
	return "cancel" in e && Object.assign(n, {
		cancel: e.cancel,
		flush: e.flush,
		isPending: e.isPending
	}), n;
}
function oe(e, t = {}) {
	let n, r, i = Z, o = Z, s = a(!1), c = (e) => {
		clearTimeout(e), i(), i = Z;
	}, l;
	return Object.assign((a) => {
		let u = P(e), d = P(t.maxWait);
		return n && c(n), u <= 0 || d !== void 0 && d <= 0 ? (r &&= (c(r), void 0), s.value = !1, Promise.resolve(a())) : (s.value = !0, new Promise((e, f) => {
			i = t.rejectOnCancel ? f : e, o = e, l = a, d && !r && (r = setTimeout(() => {
				n && c(n), r = void 0, s.value = !1, e(l());
			}, d)), n = setTimeout(() => {
				r && c(r), r = void 0, s.value = !1, e(a());
			}, u);
		}));
	}, {
		cancel: () => {
			n &&= (c(n), void 0), r &&= (c(r), void 0), s.value = !1, o = Z;
		},
		flush: () => {
			if (s.value) {
				n &&= (clearTimeout(n), void 0), r &&= (clearTimeout(r), void 0), s.value = !1;
				let e = o;
				i = Z, o = Z, e(l());
			}
		},
		isPending: v(s)
	});
}
function se(e, t = 1e4) {
	return m((n, r) => {
		let i = P(e), a, o = () => setTimeout(() => {
			i = P(e), r();
		}, P(t));
		return Y(() => {
			clearTimeout(a);
		}), {
			get() {
				return n(), i;
			},
			set(e) {
				i = e, r(), clearTimeout(a), a = o();
			}
		};
	});
}
function ce(e, t = 200, n = {}) {
	return ae(oe(t, n), e);
}
function le(e, t = 200, n = {}) {
	let r = g(P(e)), i = ce(() => {
		r.value = e.value;
	}, t, n);
	return p(e, () => i()), v(r);
}
X && window.document, X && window.navigator, X && window.location;
function ue(e) {
	let t = P(e);
	return t?.$el ?? t;
}
function de(e) {
	return JSON.parse(JSON.stringify(e));
}
function fe(e, t, n, r = {}) {
	var i, a;
	let { clone: o = !1, passive: s = !1, eventName: c, deep: l = !1, defaultValue: u, shouldEmit: d } = r, f = S(), m = n || f?.emit || (f == null || (i = f.$emit) == null ? void 0 : i.bind(f)) || (f == null || (a = f.proxy) == null || (a = a.$emit) == null ? void 0 : a.bind(f?.proxy)), h = c;
	t ||= "modelValue", h ||= `update:${t.toString()}`;
	let _ = (e) => o ? typeof o == "function" ? o(e) : de(e) : e, v = () => ie(e[t]) ? _(e[t]) : u, y = (e) => {
		d ? d(e) && m(h, e) : m(h, e);
	};
	if (s) {
		let n = g(v()), r = !1;
		return p(() => e[t], (e) => {
			r || (r = !0, n.value = _(e), R(() => r = !1));
		}), p(n, (n) => {
			!r && (n !== e[t] || l) && y(n);
		}, { deep: l }), n;
	}
	return T({
		get() {
			return v();
		},
		set(e) {
			y(e);
		}
	});
}
//#endregion
//#region node_modules/reka-ui/dist/shared/renderSlotFragments.js
function pe(e) {
	return e ? e.flatMap((e) => e.type === I ? pe(e.children) : [e]) : [];
}
//#endregion
//#region node_modules/reka-ui/dist/ConfigProvider/ConfigProvider.js
var [me, he] = /*#__PURE__*/ K("ConfigProvider");
//#endregion
//#region node_modules/reka-ui/dist/shared/useDirection.js
function ge(e) {
	let t = me({ dir: g("ltr") });
	return T(() => e?.value || t.dir?.value || "ltr");
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useId.js
var _e = 0;
function ve(e, t = "reka") {
	if (e) return e;
	let n, r = me({ useId: void 0 });
	return n = r.useId ? r.useId() : "useId" in O ? d?.() : `${++_e}`, t ? `${t}-${n}` : n;
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useSelectionBehavior.js
function ye(e, t) {
	let n = g(), r = (r, i) => {
		if (t.multiple && Array.isArray(e.value)) {
			if (t.selectionBehavior === "replace") e.value = [r], n.value = r;
			else {
				let t = e.value.findIndex((e) => i(e));
				e.value = t === -1 ? [...e.value, r] : e.value.filter((e, n) => n !== t);
			}
		} else e.value = t.selectionBehavior === "replace" ? { ...r } : !Array.isArray(e.value) && i(e.value) ? void 0 : { ...r };
		return e.value;
	};
	function i(r, i, a, o) {
		if (!n?.value || !t.multiple || !Array.isArray(e.value)) return;
		let s = a().filter((e) => e.ref.dataset.disabled !== "").find((e) => e.ref === i)?.value;
		if (!s) return;
		let c = null;
		switch (r) {
			case "prev":
			case "next":
				c = G(o, n.value, s);
				break;
			case "first":
				c = G(o, n.value, o?.[0]);
				break;
			case "last": c = G(o, n.value, o.at(-1));
		}
		e.value = c;
	}
	return {
		firstValue: n,
		onSelectItem: r,
		handleMultipleReplace: i
	};
}
//#endregion
//#region node_modules/reka-ui/dist/shared/useTypeahead.js
function be(e) {
	let t = se("", 1e3);
	return {
		search: t,
		handleTypeaheadSearch: (n, r) => {
			if (t.value += n, e) e(n);
			else {
				let e = q(), n = r.map((e) => ({
					...e,
					textValue: e.value?.textValue ?? e.ref.textContent?.trim() ?? ""
				})), i = n.find((t) => t.ref === e), a = Se(n.map((e) => e.textValue), t.value, i?.textValue), o = n.find((e) => e.textValue === a);
				return o && o.ref.focus(), o?.ref;
			}
		},
		resetTypeahead: () => {
			t.value = "";
		}
	};
}
function xe(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
function Se(e, t, n) {
	let r = t.length > 1 && Array.from(t).every((e) => e === t[0]) ? t[0] : t, i = n ? e.indexOf(n) : -1, a = xe(e, Math.max(i, 0));
	r.length === 1 && (a = a.filter((e) => e !== n));
	let o = a.find((e) => e.toLowerCase().startsWith(r.toLowerCase()));
	return o === n ? void 0 : o;
}
//#endregion
//#region node_modules/reka-ui/dist/Primitive/Slot.js
var Ce = /*#__PURE__*/ B({
	name: "PrimitiveSlot",
	inheritAttrs: !1,
	setup(e, { attrs: n, slots: r }) {
		return () => {
			if (!r.default) return null;
			let e = pe(r.default()), i = e.findIndex((e) => e.type !== j);
			if (i === -1) return e;
			let a = e[i];
			delete a.props?.ref;
			let o = a.props ? t(n, a.props) : n, s = w({
				...a,
				props: {}
			}, o);
			return e.length === 1 ? s : (e[i] = s, e);
		};
	}
}), we = [
	"area",
	"img",
	"input"
], Q = /*#__PURE__*/ B({
	name: "Primitive",
	inheritAttrs: !1,
	props: {
		asChild: {
			type: Boolean,
			default: !1
		},
		as: {
			type: [String, Object],
			default: "div"
		}
	},
	setup(e, { attrs: t, slots: n }) {
		let r = e.asChild ? "template" : e.as;
		return typeof r == "string" && we.includes(r) ? () => z(r, t) : r === "template" ? () => z(Ce, t, { default: n.default }) : () => z(e.as, t, { default: n.default });
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Primitive/usePrimitiveElement.js
function Te() {
	let e = g();
	return {
		primitiveElement: e,
		currentElement: T(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : ue(e))
	};
}
//#endregion
//#region node_modules/reka-ui/dist/Collection/Collection.js
var Ee = "data-reka-collection-item";
function De(e = {}) {
	let { key: t = "", isProvider: n = !1 } = e, r = `${t}CollectionProvider`, a;
	if (n) {
		let e = g(/* @__PURE__ */ new Map());
		a = {
			collectionRef: g(),
			itemMap: e
		}, A(r, a);
	} else a = h(r);
	let o = (e = !1) => {
		let t = a.collectionRef.value;
		if (!t) return [];
		let n = Array.from(t.querySelectorAll(`[${Ee}]`)), r = new Map(n.map((e, t) => [e, t])), i = Array.from(a.itemMap.value.values()).sort((e, t) => (r.get(e.ref) ?? -1) - (r.get(t.ref) ?? -1));
		return e ? i : i.filter((e) => e.ref.dataset.disabled !== "");
	}, s = /*#__PURE__*/ B({
		name: "CollectionSlot",
		inheritAttrs: !1,
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: i } = Te();
			return p(i, () => {
				a.collectionRef.value = i.value;
			}), () => z(Ce, {
				ref: r,
				...n
			}, t);
		}
	}), c = /*#__PURE__*/ B({
		name: "CollectionItem",
		inheritAttrs: !1,
		props: { value: { validator: () => !0 } },
		setup(e, { slots: t, attrs: n }) {
			let { primitiveElement: r, currentElement: o } = Te();
			return i((t) => {
				if (o.value) {
					let n = _(o.value);
					a.itemMap.value.set(n, {
						ref: o.value,
						value: e.value
					}), t(() => a.itemMap.value.delete(n));
				}
			}), () => z(Ce, {
				...n,
				[Ee]: "",
				ref: r
			}, t);
		}
	});
	return {
		getItems: o,
		reactiveItems: T(() => Array.from(a.itemMap.value.values())),
		itemMapSize: T(() => a.itemMap.value.size),
		CollectionSlot: s,
		CollectionItem: c
	};
}
//#endregion
//#region node_modules/reka-ui/dist/RovingFocus/utils.js
var Oe = "rovingFocusGroup.onEntryFocus", ke = {
	bubbles: !1,
	cancelable: !0
}, Ae = {
	ArrowLeft: "prev",
	ArrowUp: "prev",
	ArrowRight: "next",
	ArrowDown: "next",
	PageUp: "first",
	Home: "first",
	PageDown: "last",
	End: "last"
};
function je(e, t) {
	return t === "rtl" ? e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e : e;
}
function Me(e, t, n) {
	let r = je(e.key, n);
	if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))) return Ae[r];
}
function Ne(e, t = !1) {
	let n = q();
	for (let r of e) if (r === n || (r.focus({ preventScroll: t }), q() !== n)) return;
}
function Pe(e, t) {
	return e.map((n, r) => e[(t + r) % e.length]);
}
//#endregion
//#region node_modules/reka-ui/dist/RovingFocus/RovingFocusGroup.js
var [Fe, Ie] = /*#__PURE__*/ K("RovingFocusGroup"), Le = /* @__PURE__ */ B({
	__name: "RovingFocusGroup",
	props: {
		orientation: {
			type: String,
			required: !1,
			default: void 0
		},
		dir: {
			type: String,
			required: !1
		},
		loop: {
			type: Boolean,
			required: !1,
			default: !1
		},
		currentTabStopId: {
			type: [String, null],
			required: !1
		},
		defaultCurrentTabStopId: {
			type: String,
			required: !1
		},
		preventScrollOnEntryFocus: {
			type: Boolean,
			required: !1,
			default: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1
		}
	},
	emits: ["entryFocus", "update:currentTabStopId"],
	setup(e, { expose: t, emit: n }) {
		let r = e, i = n, { loop: a, orientation: o, dir: u } = l(r), d = ge(u), p = fe(r, "currentTabStopId", i, {
			defaultValue: r.defaultCurrentTabStopId,
			passive: r.currentTabStopId === void 0
		}), m = g(!1), h = g(!1), _ = g(0), { getItems: v, CollectionSlot: y } = De({ isProvider: !0 });
		function b(e) {
			let t = !h.value;
			if (e.currentTarget && e.target === e.currentTarget && t && !m.value) {
				let t = new CustomEvent(Oe, ke);
				if (e.currentTarget.dispatchEvent(t), i("entryFocus", t), !t.defaultPrevented) {
					let e = v().map((e) => e.ref).filter((e) => e.dataset.disabled !== "");
					Ne([
						e.find((e) => e.getAttribute("data-active") === ""),
						e.find((e) => e.getAttribute("data-highlighted") === ""),
						e.find((e) => e.id === p.value),
						...e
					].filter(Boolean), r.preventScrollOnEntryFocus);
				}
			}
			h.value = !1;
		}
		function x() {
			setTimeout(() => {
				h.value = !1;
			}, 1);
		}
		return t({ getItems: v }), Ie({
			loop: a,
			dir: d,
			orientation: o,
			currentTabStopId: p,
			onItemFocus: (e) => {
				p.value = e;
			},
			onItemShiftTab: () => {
				m.value = !0;
			},
			onFocusableItemAdd: () => {
				_.value++;
			},
			onFocusableItemRemove: () => {
				_.value--;
			}
		}), (e, t) => (f(), M(c(y), null, {
			default: s(() => [L(c(Q), {
				tabindex: m.value || _.value === 0 ? -1 : 0,
				"data-orientation": c(o),
				as: e.as,
				"as-child": e.asChild,
				dir: c(d),
				style: { outline: "none" },
				onMousedown: t[0] ||= (e) => h.value = !0,
				onMouseup: x,
				onFocus: b,
				onBlur: t[1] ||= (e) => m.value = !1
			}, {
				default: s(() => [k(e.$slots, "default")]),
				_: 3
			}, 8, [
				"tabindex",
				"data-orientation",
				"as",
				"as-child",
				"dir"
			])]),
			_: 3
		}));
	}
}), Re = /* @__PURE__ */ B({
	__name: "RovingFocusItem",
	props: {
		tabStopId: {
			type: String,
			required: !1
		},
		focusable: {
			type: Boolean,
			required: !1,
			default: !0
		},
		active: {
			type: Boolean,
			required: !1
		},
		allowShiftKey: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "span"
		}
	},
	setup(e) {
		let t = e, i = Fe(), a = ve(), o = T(() => t.tabStopId || a), l = T(() => i.currentTabStopId.value === o.value), { getItems: u, CollectionItem: d } = De();
		r(() => {
			t.focusable && i.onFocusableItemAdd();
		}), n(() => {
			t.focusable && i.onFocusableItemRemove();
		}), p(() => t.focusable, (e, t) => {
			e !== t && (e ? i.onFocusableItemAdd() : i.onFocusableItemRemove());
		});
		function m(e) {
			if (e.key === "Tab" && e.shiftKey) {
				i.onItemShiftTab();
				return;
			}
			if (e.target !== e.currentTarget) return;
			let n = Me(e, i.orientation.value, i.dir.value);
			if (n !== void 0) {
				if (e.metaKey || e.ctrlKey || e.altKey || !t.allowShiftKey && e.shiftKey) return;
				e.preventDefault();
				let r = [...u().map((e) => e.ref).filter((e) => e.dataset.disabled !== "")];
				if (n === "last") r.reverse();
				else if (n === "prev" || n === "next") {
					n === "prev" && r.reverse();
					let t = r.indexOf(e.currentTarget);
					r = i.loop.value ? Pe(r, t + 1) : r.slice(t + 1);
				}
				R(() => Ne(r));
			}
		}
		return (e, t) => (f(), M(c(d), null, {
			default: s(() => [L(c(Q), {
				tabindex: l.value ? 0 : -1,
				"data-orientation": c(i).orientation.value,
				"data-active": e.active ? "" : void 0,
				"data-disabled": e.focusable ? void 0 : "",
				as: e.as,
				"as-child": e.asChild,
				onMousedown: t[0] ||= (t) => {
					e.focusable ? c(i).onItemFocus(o.value) : t.preventDefault();
				},
				onFocus: t[1] ||= (e) => c(i).onItemFocus(o.value),
				onKeydown: m
			}, {
				default: s(() => [k(e.$slots, "default")]),
				_: 3
			}, 8, [
				"tabindex",
				"data-orientation",
				"data-active",
				"data-disabled",
				"as",
				"as-child"
			])]),
			_: 3
		}));
	}
});
//#endregion
//#region node_modules/reka-ui/dist/Tree/utils.js
function $(e) {
	return e.reduce((e, t) => (e.push(t), t.children && e.push(...$(t.children)), e), []);
}
//#endregion
//#region node_modules/reka-ui/dist/Tree/TreeRoot.js
var [ze, Be] = /*#__PURE__*/ K("TreeRoot"), Ve = /* @__PURE__ */ B({
	__name: "TreeRoot",
	props: {
		modelValue: {
			type: null,
			required: !1
		},
		defaultValue: {
			type: null,
			required: !1
		},
		items: {
			type: Array,
			required: !1
		},
		expanded: {
			type: Array,
			required: !1
		},
		defaultExpanded: {
			type: Array,
			required: !1
		},
		getKey: {
			type: Function,
			required: !0
		},
		getChildren: {
			type: Function,
			required: !1,
			default: (e) => e.children
		},
		selectionBehavior: {
			type: String,
			required: !1,
			default: "toggle"
		},
		multiple: {
			type: Boolean,
			required: !1,
			skipCheck: !0
		},
		dir: {
			type: String,
			required: !1
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		propagateSelect: {
			type: Boolean,
			required: !1
		},
		bubbleSelect: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "ul"
		}
	},
	emits: ["update:modelValue", "update:expanded"],
	setup(e, { emit: t }) {
		let n = e, r = t, { items: i, multiple: a, disabled: o, propagateSelect: u, dir: d, bubbleSelect: p } = l(n), { handleTypeaheadSearch: m } = be(), h = ge(d), _ = g(), v = g(!1), y = re(), b = fe(n, "modelValue", r, {
			defaultValue: n.defaultValue ?? (a.value ? [] : void 0),
			passive: !0,
			deep: !0
		}), x = fe(n, "expanded", r, {
			defaultValue: n.defaultExpanded ?? [],
			passive: n.expanded === void 0,
			deep: !0
		}), { onSelectItem: S, handleMultipleReplace: w } = ye(b, n), E = T(() => a.value && Array.isArray(b.value) ? b.value.map((e) => n.getKey(e)) : [n.getKey(b.value ?? {})]);
		function D(e, t = 1, r) {
			return e.reduce((i, a, o) => {
				let s = n.getKey(a), c = n.getChildren(a), l = x.value.includes(s), u = {
					_id: s,
					value: a,
					index: o,
					level: t,
					parentItem: r,
					hasChildren: !!c,
					bind: {
						value: a,
						level: t,
						"aria-setsize": e.length,
						"aria-posinset": o + 1
					}
				};
				return i.push(u), c && l && i.push(...D(c, t + 1, a)), i;
			}, []);
		}
		let O = T(() => {
			let e = n.items;
			return x.value.map((e) => e), D(e ?? []);
		});
		function A(e) {
			if (v.value) y.trigger(e);
			else {
				let t = _.value?.getItems() ?? [];
				m(e.key, t);
			}
		}
		function j(e) {
			if (v.value) return;
			let t = Ae[e.key];
			R(() => {
				w(t, q(), _.value?.getItems, O.value.map((e) => e.value));
			});
		}
		function N(e) {
			if (e.parentItem != null && Array.isArray(b.value) && n.multiple) {
				let t = O.value.find((t) => e.parentItem != null && n.getKey(t.value) === n.getKey(e.parentItem));
				t != null && (n.getChildren(t.value)?.every((e) => b.value.find((t) => n.getKey(t) === n.getKey(e))) ? b.value = [...b.value, t.value] : b.value = b.value.filter((e) => n.getKey(e) !== n.getKey(t.value)), N(t));
			}
		}
		return Be({
			modelValue: b,
			selectedKeys: E,
			onSelect: (e) => {
				let t = (t) => n.getKey(t ?? {}) === n.getKey(e), r = n.multiple && Array.isArray(b.value) ? b.value?.findIndex(t) !== -1 : void 0;
				if (S(e, t), n.bubbleSelect && n.multiple && Array.isArray(b.value)) {
					let t = O.value.find((t) => n.getKey(t.value) === n.getKey(e));
					t != null && N(t);
				}
				if (n.propagateSelect && n.multiple && Array.isArray(b.value)) {
					let t = $(n.getChildren(e) ?? []);
					r ? b.value = [...b.value].filter((e) => !t.some((t) => n.getKey(e ?? {}) === n.getKey(t))) : b.value = [...b.value, ...t];
				}
			},
			expanded: x,
			onToggle(e) {
				if (!(e && n.getChildren(e))) return;
				let t = n.getKey(e) ?? e;
				x.value.includes(t) ? x.value = x.value.filter((e) => e !== t) : x.value = [...x.value, t];
			},
			getKey: n.getKey,
			getChildren: n.getChildren,
			items: i,
			expandedItems: O,
			disabled: o,
			multiple: a,
			dir: h,
			propagateSelect: u,
			bubbleSelect: p,
			isVirtual: v,
			virtualKeydownHook: y,
			handleMultipleReplace: w
		}), (e, t) => (f(), M(c(Le), {
			ref_key: "rovingFocusGroupRef",
			ref: _,
			"as-child": "",
			orientation: "vertical",
			dir: c(h)
		}, {
			default: s(() => [L(c(Q), {
				role: "tree",
				as: e.as,
				"as-child": e.asChild,
				"aria-multiselectable": c(a) ? !0 : void 0,
				onKeydown: [A, F(C(j, ["shift"]), ["up", "down"])]
			}, {
				default: s(() => [k(e.$slots, "default", {
					flattenItems: O.value,
					modelValue: c(b),
					expanded: c(x)
				})]),
				_: 3
			}, 8, [
				"as",
				"as-child",
				"aria-multiselectable",
				"onKeydown"
			])]),
			_: 3
		}, 8, ["dir"]));
	}
}), He = "tree.select", Ue = "tree.toggle", We = /* @__PURE__ */ B({
	inheritAttrs: !1,
	__name: "TreeItem",
	props: {
		value: {
			type: null,
			required: !0
		},
		level: {
			type: Number,
			required: !0
		},
		disabled: {
			type: Boolean,
			required: !1
		},
		asChild: {
			type: Boolean,
			required: !1
		},
		as: {
			type: null,
			required: !1,
			default: "li"
		}
	},
	emits: ["select", "toggle"],
	setup(e, { expose: n, emit: r }) {
		let i = e, a = r, o = ze(), { getItems: l } = De(), u = T(() => !!o.getChildren(i.value)), d = T(() => {
			let e = o.getKey(i.value);
			return o.expanded.value.includes(e);
		}), p = T(() => {
			let e = o.getKey(i.value);
			return o.selectedKeys.value.includes(e);
		}), m = T(() => {
			if (o.bubbleSelect.value && u.value && Array.isArray(o.modelValue.value)) {
				let e = $(o.getChildren(i.value) || []);
				return e.some((e) => o.modelValue.value.find((t) => o.getKey(t) === o.getKey(e))) && !e.every((e) => o.modelValue.value.find((t) => o.getKey(t) === o.getKey(e)));
			}
			if (o.propagateSelect.value && p.value && u.value && Array.isArray(o.modelValue.value)) return !$(o.getChildren(i.value) || []).every((e) => o.modelValue.value.find((t) => o.getKey(t) === o.getKey(e)));
		}), h = T(() => o.disabled.value || i.disabled);
		function g(e) {
			if (!h.value && u.value) {
				if (d.value) {
					let e = l().map((e) => e.ref), t = q(), n = e.indexOf(t), r = [...e].slice(n).find((e) => Number(e.getAttribute("data-indent")) === i.level + 1);
					r && r.focus();
				} else x(e);
			}
		}
		function _(e) {
			if (!h.value) {
				if (d.value) x(e);
				else {
					let e = l().map((e) => e.ref), t = q(), n = e.indexOf(t), r = [...e].slice(0, n).reverse().find((e) => Number(e.getAttribute("data-indent")) === i.level - 1);
					r && r.focus();
				}
			}
		}
		async function v(e) {
			h.value || (a("select", e), !e?.defaultPrevented && o.onSelect(i.value));
		}
		async function y(e) {
			h.value || (a("toggle", e), !e?.defaultPrevented && o.onToggle(i.value));
		}
		async function b(e) {
			e && J(He, v, {
				originalEvent: e,
				value: i.value,
				isExpanded: d.value,
				isSelected: p.value
			});
		}
		async function x(e) {
			e && J(Ue, y, {
				originalEvent: e,
				value: i.value,
				isExpanded: d.value,
				isSelected: p.value
			});
		}
		return n({
			isExpanded: d,
			isSelected: p,
			isIndeterminate: m,
			isDisabled: h,
			handleToggle: () => o.onToggle(i.value),
			handleSelect: () => o.onSelect(i.value)
		}), (e, n) => (f(), M(c(Re), {
			"as-child": "",
			value: e.value,
			"allow-shift-key": "",
			focusable: !h.value
		}, {
			default: s(() => [L(c(Q), t(e.$attrs, {
				role: "treeitem",
				as: e.as,
				"as-child": e.asChild,
				"aria-selected": p.value,
				"aria-expanded": u.value ? d.value : void 0,
				"aria-level": e.level,
				"aria-disabled": h.value ? !0 : void 0,
				"data-indent": e.level,
				"data-selected": p.value ? "" : void 0,
				"data-expanded": d.value ? "" : void 0,
				"data-disabled": h.value ? "" : void 0,
				onKeydown: [
					F(C(b, ["self", "prevent"]), ["enter", "space"]),
					n[0] ||= F(C((e) => c(o).dir.value === "ltr" ? g(e) : _(e), ["prevent"]), ["right"]),
					n[1] ||= F(C((e) => c(o).dir.value === "ltr" ? _(e) : g(e), ["prevent"]), ["left"])
				],
				onClick: n[2] ||= C((e) => {
					b(e), x(e);
				}, ["stop"])
			}), {
				default: s(() => [k(e.$slots, "default", {
					isExpanded: d.value,
					isSelected: p.value,
					isIndeterminate: m.value,
					isDisabled: h.value,
					handleSelect: () => c(o).onSelect(e.value),
					handleToggle: () => c(o).onToggle(e.value)
				})]),
				_: 3
			}, 16, [
				"as",
				"as-child",
				"aria-selected",
				"aria-expanded",
				"aria-level",
				"aria-disabled",
				"data-indent",
				"data-selected",
				"data-expanded",
				"data-disabled",
				"onKeydown"
			])]),
			_: 3
		}, 8, ["value", "focusable"]));
	}
}), Ge = Symbol("TreeNodeConfig"), Ke = (e) => {
	A(Ge, e);
}, qe = () => h(Ge, void 0), Je = ["aria-label"], Ye = {
	class: "tree-node-icon",
	"aria-hidden": "true"
}, Xe = {
	key: 1,
	class: "tree-node-icon-file"
}, Ze = { class: "tree-node-label" }, Qe = { class: "tree-node-actions" }, $e = {
	key: 0,
	class: "tree-children",
	role: "group"
}, et = /* @__PURE__ */ B({
	name: "TreeNode",
	__name: "TreeNode",
	props: {
		node: {},
		level: {},
		getChildren: {
			type: Function,
			default: void 0
		},
		getNodeId: {
			type: Function,
			default: void 0
		},
		getAriaLabel: {
			type: Function,
			default: void 0
		},
		getDisabled: {
			type: Function,
			default: void 0
		},
		getContentClass: {
			type: Function,
			default: void 0
		},
		enterToggles: { type: Boolean },
		onEnter: {
			type: Function,
			default: void 0
		},
		rightToggles: { type: Boolean },
		actionsFocusable: { type: Boolean },
		position: { default: void 0 },
		totalSiblings: { default: void 0 }
	},
	emits: ["select", "toggle"],
	setup(n, { emit: r }) {
		let i = n, a = r, o = qe(), l = T(() => i.getChildren ?? o?.value.getChildren), d = T(() => i.getNodeId ?? o?.value.getNodeId), p = T(() => i.getAriaLabel ?? o?.value.getAriaLabel), m = T(() => i.getDisabled ?? o?.value.getDisabled), h = T(() => i.getContentClass ?? o?.value.getContentClass), _ = T(() => i.enterToggles ?? o?.value.enterToggles ?? !0), v = T(() => i.onEnter ?? o?.value.onEnter), S = T(() => i.rightToggles ?? o?.value.rightToggles ?? !1), w = T(() => i.actionsFocusable ?? o?.value.actionsFocusable ?? !0), O = T(() => l.value ? l.value(i.node) : i.node.children), A = T(() => O.value !== void 0), j = T(() => d.value ? d.value(i.node) : void 0), P = T(() => m.value ? m.value(i.node) : !1), L = g(!1), z = ze(), B = T(() => w.value ? {} : { tabindex: -1 }), V = (e, t) => ({
			node: i.node,
			isExpanded: e,
			isSelected: t,
			isDisabled: P.value
		}), ee = (e, t) => p.value ? p.value(i.node, V(e, t)) : void 0, te = (e, t) => h.value ? h.value(i.node, V(e, t)) : void 0, H = (e) => {
			if (P.value) return;
			let t = e?.detail?.originalEvent;
			if (a("select", i.node, t), t instanceof KeyboardEvent && _.value) {
				let e = t.key;
				(e === "Enter" || e === " ") && O.value !== void 0 && a("toggle", i.node);
			}
		}, U = () => {
			P.value || !O.value || a("toggle", i.node);
		}, ne = (e) => {
			P.value || !O.value || (e.preventDefault(), e.stopPropagation(), e.stopImmediatePropagation(), a("toggle", i.node), z?.onToggle(i.node));
		}, W = (e) => {
			let t = e.closest("[role=\"tree\"]") ?? e.parentElement;
			if (!t || i.level <= 1) {
				e.focus();
				return;
			}
			let n = Array.from(t.querySelectorAll("[role=\"treeitem\"]")), r = n.indexOf(e);
			if (r <= 0) {
				e.focus();
				return;
			}
			let a = String(i.level - 1);
			for (let e = r - 1; e >= 0; --e) if (n[e]?.getAttribute("data-indent") === a) {
				n[e]?.focus();
				return;
			}
			e.focus();
		}, G = () => {
			if (!z?.expanded?.value || !z?.getKey) return !1;
			let e = z.getKey(i.node);
			return z.expanded.value.includes(e);
		}, K = (e) => {
			let t = e.currentTarget;
			if (t) {
				if (e.stopImmediatePropagation(), P.value) {
					W(t);
					return;
				}
				if (O.value && G()) {
					a("toggle", i.node), z?.onToggle(i.node), R(() => {
						t.focus();
					});
					return;
				}
				W(t);
			}
		}, q = (e) => {
			if (!P.value) {
				if (a("select", i.node, e), v.value) {
					v.value(i.node);
					return;
				}
				_.value && O.value !== void 0 && z?.onToggle(i.node);
			}
		}, J = () => {
			L.value = !0;
		}, Y = (e) => {
			let t = e.currentTarget, n = e.relatedTarget;
			t && n && t.contains(n) || (L.value = !1);
		};
		return (n, r) => {
			let o = u("TreeNode", !0);
			return f(), M(c(We), {
				id: j.value,
				value: i.node,
				level: i.level,
				class: "tree-node",
				"data-disabled": P.value ? "" : void 0,
				"aria-disabled": P.value ? "true" : void 0,
				"aria-setsize": i.totalSiblings,
				"aria-posinset": i.position,
				onSelect: H,
				onToggle: U,
				onKeydown: [
					r[2] ||= F((e) => S.value ? ne(e) : void 0, ["right"]),
					r[3] ||= F(C((e) => K(e), ["stop", "prevent"]), ["left"]),
					F(C(q, ["stop", "prevent"]), ["enter"]),
					F(C(q, ["stop", "prevent"]), ["space"])
				],
				onFocusin: J,
				onFocusout: Y
			}, {
				default: s(({ isExpanded: c, isSelected: l }) => [N("div", {
					class: b(["tree-node-content", [
						{ "tree-node-file": !O.value },
						{ "tree-node-selected": l },
						te(c, l)
					]]),
					"aria-label": ee(c, l)
				}, [
					N("span", Ye, [k(n.$slots, "icon", {
						node: i.node,
						level: i.level,
						hasChildren: A.value,
						isExpanded: c,
						isSelected: l,
						isFocused: L.value,
						isDisabled: P.value
					}, () => [O.value ? (f(), E("i", {
						key: 0,
						class: b(["fa", c ? "fa-folder-open" : "fa-folder"])
					}, null, 2)) : (f(), E("span", Xe, [...r[4] ||= [N("i", { class: "fa fa-file tree-node-icon-default" }, null, -1)]]))])]),
					N("span", Ze, [k(n.$slots, "label", {
						node: i.node,
						level: i.level,
						hasChildren: A.value,
						isExpanded: c,
						isSelected: l,
						isFocused: L.value,
						isDisabled: P.value
					}, () => [x(y(i.node.label), 1)])]),
					N("span", Qe, [k(n.$slots, "actions", {
						node: i.node,
						level: i.level,
						hasChildren: A.value,
						isExpanded: c,
						isSelected: l,
						isFocused: L.value,
						isDisabled: P.value,
						actionProps: B.value
					})])
				], 10, Je), O.value && c ? (f(), E("ul", $e, [k(n.$slots, "children", {
					node: i.node,
					level: i.level,
					hasChildren: A.value,
					isExpanded: c,
					isSelected: l,
					isFocused: L.value,
					isDisabled: P.value
				}), (f(!0), E(I, null, e(O.value, (e, c) => (f(), M(o, {
					key: d.value ? d.value(e) : e.id ?? e.path ?? String(c),
					node: e,
					level: i.level + 1,
					position: c + 1,
					"total-siblings": O.value.length,
					onSelect: r[0] ||= (e, t) => a("select", e, t),
					onToggle: r[1] ||= (e) => a("toggle", e)
				}, {
					icon: s((e) => [k(n.$slots, "icon", t({ ref_for: !0 }, e))]),
					label: s((e) => [k(n.$slots, "label", t({ ref_for: !0 }, e), () => [x(y(e.node.label ?? ""), 1)])]),
					actions: s((e) => [k(n.$slots, "actions", t({ ref_for: !0 }, e))]),
					_: 3
				}, 8, [
					"node",
					"level",
					"position",
					"total-siblings"
				]))), 128))])) : D("", !0)]),
				_: 3
			}, 8, [
				"id",
				"value",
				"level",
				"data-disabled",
				"aria-disabled",
				"aria-setsize",
				"aria-posinset",
				"onKeydown"
			]);
		};
	}
}), tt = (e) => e.replace(/[^A-Za-z0-9_-]/g, "-").replace(/-+/g, "-").replace(/^-|-$/g, ""), nt = (e) => {
	let t = 0;
	for (let n = 0; n < e.length; n += 1) t = (t << 5) - t + e.charCodeAt(n), t |= 0;
	return Math.abs(t).toString(16);
}, rt = (e = {}) => {
	let t = e.resolveGetKey ?? (() => void 0), n = e.resolveGetNodeId ?? (() => void 0), r = 0, i = /* @__PURE__ */ new WeakMap(), a = (e) => {
		if (typeof e != "object" || !e) return r += 1, `anon-${r}`;
		let t = i.get(e);
		if (t) return t;
		r += 1;
		let n = `anon-${r}`;
		return i.set(e, n), n;
	}, o = (e) => {
		let n = t();
		if (n) return n(e) || a(e);
		let r = e;
		return r?.id ?? r?.path ?? a(e);
	};
	return {
		getKey: o,
		getNodeId: (e) => {
			let t = n();
			if (t) return t(e);
			let r = o(e), i = tt(r);
			return i ? `tree-node-${i}` : `tree-node-${nt(r)}`;
		}
	};
}, it = /* @__PURE__ */ B({
	__name: "TreeView",
	props: {
		items: {},
		modelValue: { default: void 0 },
		expanded: { default: void 0 },
		multiple: { type: Boolean },
		getKey: {
			type: Function,
			default: void 0
		},
		getChildren: {
			type: Function,
			default: void 0
		},
		getNodeId: {
			type: Function,
			default: void 0
		},
		getAriaLabel: {
			type: Function,
			default: void 0
		},
		getDisabled: {
			type: Function,
			default: void 0
		},
		getContentClass: {
			type: Function,
			default: void 0
		},
		scrollContainerSelector: { default: void 0 },
		scrollOnSelect: { type: Boolean },
		variant: { default: "default" },
		enterToggles: { type: Boolean },
		onEnter: {
			type: Function,
			default: void 0
		},
		rightToggles: { type: Boolean },
		actionsVisibility: { default: "always" },
		actionsFocusable: {
			type: Boolean,
			default: !0
		},
		frameStyle: { default: "none" },
		autoFocusOnMount: {
			type: Boolean,
			default: !1
		},
		autoFocusOnItemsChange: {
			type: Boolean,
			default: !1
		},
		autoFocusTarget: { default: "selected" }
	},
	emits: [
		"select",
		"toggle",
		"update:modelValue",
		"update:expanded",
		"escape"
	],
	setup(n, { expose: i, emit: a }) {
		let o = n, l = a, u = g(null), d = T(() => {
			switch (o.actionsVisibility) {
				case "hover": return "tree-actions-hover";
				case "focus": return "tree-actions-focus";
				case "hover+focus": return "tree-actions-hover-focus";
				default: return;
			}
		}), m = T(() => {
			switch (o.frameStyle) {
				case "framed": return "tree-frame-framed";
				case "well": return "tree-frame-well";
				default: return;
			}
		}), h = T(() => o.variant === "compact" ? "tree-variant-compact" : void 0), { getKey: _, getNodeId: v } = rt({
			resolveGetKey: () => o.getKey,
			resolveGetNodeId: () => o.getNodeId
		}), S = (e) => o.getChildren ? o.getChildren(e) : e?.children;
		Ke(T(() => ({
			getChildren: S,
			getNodeId: v,
			getAriaLabel: o.getAriaLabel,
			getDisabled: o.getDisabled,
			getContentClass: o.getContentClass,
			enterToggles: o.enterToggles,
			onEnter: o.onEnter,
			rightToggles: o.rightToggles,
			actionsFocusable: o.actionsFocusable
		})));
		let w = (e) => {
			let t = v(e), n = t ? document.getElementById(t) : null;
			if (!n) return;
			let r = o.scrollContainerSelector ? n.closest(o.scrollContainerSelector) : n.parentElement;
			if (!r) return;
			let i = r.getBoundingClientRect(), a = n.getBoundingClientRect();
			if (a.top < i.top || a.bottom > i.bottom) {
				let e = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
				n.scrollIntoView({
					behavior: e ? "auto" : "smooth",
					block: "nearest"
				});
			}
		}, D = (e, t) => {
			l("select", e, t), o.scrollOnSelect && R(() => {
				w(e);
			});
		};
		p(() => o.modelValue, (e) => {
			!o.scrollOnSelect || !e || R(() => {
				w(e);
			});
		});
		let O = (e) => {
			let t = u.value?.$el;
			if (!t) return;
			let n = (e?.target ?? "selected") === "selected" ? t.querySelector("[role=\"treeitem\"][data-selected]") : null, r = t.querySelector("[role=\"treeitem\"]");
			(n ?? r)?.focus();
		}, A = (e) => e.length > 0, j = () => {
			let e = u.value?.$el, t = document.activeElement;
			return !!(e && t && e.contains(t));
		};
		return r(() => {
			!o.autoFocusOnMount || !A(o.items) || R(() => {
				O({ target: o.autoFocusTarget });
			});
		}), p(() => o.items, (e) => {
			o.autoFocusOnItemsChange && A(e) && (j() || R(() => {
				O({ target: o.autoFocusTarget });
			}));
		}), i({ focusTree: O }), (n, r) => (f(), M(c(Ve), {
			ref_key: "treeRootRef",
			ref: u,
			items: o.items,
			"get-key": c(_),
			"get-children": S,
			"model-value": o.modelValue,
			expanded: o.expanded,
			multiple: o.multiple,
			class: b(["tree", [
				d.value,
				m.value,
				h.value
			]]),
			"onUpdate:modelValue": r[1] ||= (e) => l("update:modelValue", e),
			"onUpdate:expanded": r[2] ||= (e) => l("update:expanded", e),
			onKeydown: r[3] ||= F(C((e) => l("escape"), ["stop", "prevent"]), ["esc"])
		}, {
			default: s(() => [(f(!0), E(I, null, e(o.items, (e, i) => (f(), M(et, {
				key: c(_)(e),
				node: e,
				level: 1,
				position: i + 1,
				"total-siblings": o.items.length,
				onSelect: D,
				onToggle: r[0] ||= (e) => l("toggle", e)
			}, {
				icon: s((e) => [k(n.$slots, "icon", t({ ref_for: !0 }, e))]),
				label: s((e) => [k(n.$slots, "label", t({ ref_for: !0 }, e), () => [x(y(e.node.label), 1)])]),
				actions: s((e) => [k(n.$slots, "actions", t({ ref_for: !0 }, e))]),
				children: s((e) => [k(n.$slots, "children", t({ ref_for: !0 }, e))]),
				_: 3
			}, 8, [
				"node",
				"position",
				"total-siblings"
			]))), 128))]),
			_: 3
		}, 8, [
			"items",
			"get-key",
			"model-value",
			"expanded",
			"multiple",
			"class"
		]));
	}
});
//#endregion
export { le as n, it as t };
