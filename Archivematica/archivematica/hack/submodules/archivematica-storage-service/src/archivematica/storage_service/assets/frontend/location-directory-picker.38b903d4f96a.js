import { C as e, E as t, I as n, J as r, O as i, P as a, U as o, X as s, a as c, c as l, f as u, g as d, h as f, p, r as m, t as h, v as g, x as _, y as v } from "./runtime-CsFmpt5v.js";
import { n as y, t as b } from "./i18n-D6k_RFjI.js";
import { t as x } from "./treeview-O_e403sy.js";
import { n as S, t as C } from "./client-C_wHJOl3.js";
import { t as w } from "./_plugin-vue_export-helper-B3ysoDQm.js";
//#region lib/shared/http/space.ts
var T = S(), E = async (e, t, n = {}) => T.getJson(`/api/v2/space/${e}/browse/`, {
	query: t ? { path: t } : void 0,
	...n,
	strictJson: !0
}), D = (e, t) => e ? `${e.replace(/\/$/, "")}/${t}` : t, O = (e) => {
	if (e instanceof C) {
		let t = e.bodyText?.trim();
		if (t) return t;
	}
	return e instanceof Error && e.message ? e.message : "Failed to browse space directory.";
}, k = (e) => ({
	entries: Array.isArray(e.entries) ? e.entries.map((e) => h(e)) : [],
	directories: Array.isArray(e.directories) ? e.directories.map((e) => h(e)) : []
}), A = (e, t = !1) => `${t ? "root" : "path"}:${e}`, j = (e, t) => {
	let n = new Set(e.directories);
	return e.entries.filter((e) => n.has(e)).map((e) => {
		let n = D(t, e);
		return {
			id: A(n),
			label: e,
			path: n,
			children: [],
			loaded: !1,
			loading: !1,
			loadError: null
		};
	});
}, M = (e, t) => e === "" ? t : e.split("/").filter(Boolean).pop() ?? e, N = (e, t) => ({
	id: A(e, !0),
	label: M(e, t),
	path: e,
	children: [],
	loaded: !1,
	loading: !1,
	loadError: null
});
function P(e) {
	let t = o([]), n = o(!1), r = o(null), i = async (e, t, n) => j(k(await E(e, t, n ? { signal: n } : void 0)), t);
	return {
		items: t,
		loading: u(() => n.value),
		error: u(() => r.value),
		loadRoot: async (a, o, s) => {
			if (t.value = [], r.value = null, !a) {
				r.value = "A valid space UUID is required.";
				return;
			}
			n.value = !0;
			let c = N(o, e);
			c.loading = !0, t.value = [c];
			try {
				c.children = await i(a, c.path, s), c.loaded = !0, c.loadError = null;
			} catch (e) {
				let t = O(e);
				c.loaded = !1, c.children = [], c.loadError = t, r.value = t;
			} finally {
				c.loading = !1, n.value = !1, t.value = [...t.value];
			}
		},
		expandNode: async (e, n, r) => {
			if (!(n.loading || n.loaded)) {
				n.loading = !0, n.loadError = null;
				try {
					n.children = await i(e, n.path, r), n.loaded = !0;
				} catch (e) {
					n.children = [], n.loaded = !1, n.loadError = O(e);
				} finally {
					n.loading = !1, t.value = [...t.value];
				}
			}
		},
		clearError: () => {
			r.value = null;
		}
	};
}
//#endregion
//#region lib/location-directory-picker/App.vue?vue&type=script&setup=true&lang.ts
var F = ["aria-label"], I = {
	key: 0,
	class: "picker-status",
	role: "status",
	"aria-live": "polite"
}, L = {
	key: 1,
	class: "alert alert-danger",
	role: "alert",
	"aria-live": "assertive"
}, R = { key: 2 }, z = ["onClick"], B = /*#__PURE__*/ w(/* @__PURE__ */ v({
	__name: "App",
	props: {
		spaceUuid: {},
		rootPath: {},
		selectedPath: {}
	},
	emits: ["select", "update:selectedPath"],
	setup(c, { emit: u }) {
		let h = c, _ = u, v = o(), y = o(h.selectedPath ?? ""), b = o([]), { t: S } = m(), { items: C, loading: w, error: T, loadRoot: E, expandNode: D, clearError: O } = P(S("locationDirectoryPicker.spaceRoot")), k = async () => {
			if (await E(h.spaceUuid, h.rootPath), h.selectedPath) {
				let e = B(C.value, h.selectedPath);
				e && (v.value = e);
			}
		}, A = async (e) => {
			let t = e.id;
			b.value.indexOf(t) === -1 ? b.value = [...b.value, t] : b.value = b.value.filter((e) => e !== t), await D(h.spaceUuid, e);
		}, j = (e) => {
			v.value = e;
		}, M = () => {
			v.value && (y.value = v.value.path, _("update:selectedPath", v.value.path), _("select", v.value.path));
		}, N = (e) => {
			v.value = e, M();
		};
		a(() => [h.spaceUuid, h.rootPath], () => {
			b.value = [], v.value = void 0, y.value = "", O(), k();
		}, { immediate: !1 }), a(() => h.selectedPath, (e) => {
			if (!e || !C.value.length) {
				y.value = e ?? "";
				return;
			}
			let t = B(C.value, e);
			t && (v.value = t), y.value = e;
		}), t(() => {
			k();
		});
		function B(e, t) {
			for (let n of e) {
				if (n.path === t) return n;
				if (n.children?.length) {
					let e = B(n.children, t);
					if (e) return e;
				}
			}
		}
		return (t, a) => (i(), d("section", { "aria-label": r(S)("locationDirectoryPicker.ariaLabel") }, [r(w) ? (i(), d("div", I, [a[2] ||= p("i", {
			class: "fa fa-spinner fa-spin",
			"aria-hidden": "true"
		}, null, -1), p("span", null, s(r(S)("locationDirectoryPicker.loadingDirectories")), 1)])) : r(T) ? (i(), d("div", L, [
			p("h4", null, s(r(S)("locationDirectoryPicker.loadFailed")), 1),
			p("p", null, s(r(T)), 1),
			p("button", {
				type: "button",
				class: "btn btn-default",
				onClick: k
			}, s(r(S)("locationDirectoryPicker.retry")), 1)
		])) : (i(), d("div", R, [g(r(x), {
			items: r(C),
			"model-value": v.value,
			expanded: b.value,
			"frame-style": "well",
			variant: "compact",
			"auto-focus-on-items-change": !0,
			"auto-focus-target": "first",
			"get-key": (e) => e.id,
			"get-children": (e) => e.children,
			"right-toggles": !0,
			"enter-toggles": !1,
			"actions-visibility": "always",
			"onUpdate:modelValue": a[0] ||= (e) => j(e),
			onToggle: a[1] ||= (e) => A(e)
		}, {
			actions: n(({ node: t, actionProps: n }) => [t && t.path !== c.rootPath ? (i(), d("button", e({
				key: 0,
				type: "button",
				class: "btn btn-link picker-select-action"
			}, n, { onClick: l((e) => N(t), ["stop", "prevent"]) }), s(r(S)("locationDirectoryPicker.select")), 17, z)) : f("", !0)]),
			_: 1
		}, 8, [
			"items",
			"model-value",
			"expanded",
			"get-key",
			"get-children"
		])]))], 8, F));
	}
}), [["__scopeId", "data-v-4e6fee9d"]]), ee = (e, t) => {
	let n = t.trim();
	if (!n) return "";
	let r = e.trim();
	if (!r) return n.replace(/^\/+/, "");
	if (n.startsWith("/")) return n;
	let i = n.replace(/^\/+/, "");
	return r === "/" ? `/${i}` : `${r.replace(/\/$/, "")}/${i}`;
}, V = (e, t) => {
	let n = t.trim();
	if (!n) return "";
	let r = e.trim().replace(/\/$/, "");
	return r ? r && r !== "/" && n.startsWith(`${r}/`) ? n.slice(r.length + 1) : n === r ? "" : n.replace(/^\/+/, "") : n.replace(/^\/+/, "");
}, H = "id_relative_path_browse", U = 300, W = 25, G = "data-am-location-form-backdrop", K = "data-am-location-form-fallback-modal", q = "data-am-location-form-owns-backdrop", J = () => window.StorageServiceModal, Y = async () => {
	let e = J();
	if (e) return e;
	let t = Math.ceil(U / W);
	for (let e = 0; e < t; e += 1) {
		await new Promise((e) => {
			window.setTimeout(e, W);
		});
		let e = J();
		if (e) return e;
	}
}, X = (e) => {
	if (e.setAttribute(K, "true"), e.style.display = "block", e.classList.remove("hide"), e.classList.add("in"), e.setAttribute("aria-hidden", "false"), !document.querySelector(".modal-backdrop")) {
		let t = document.createElement("div");
		t.className = "modal-backdrop fade in", t.setAttribute(G, "true"), document.body.append(t), e.setAttribute(q, "true"), document.body.classList.add("modal-open");
		return;
	}
	e.setAttribute(q, "false");
}, Z = (e) => {
	let t = e.getAttribute(q) === "true";
	if (e.removeAttribute(K), e.removeAttribute(q), e.classList.remove("in"), e.classList.add("hide"), e.style.display = "none", e.setAttribute("aria-hidden", "true"), t) {
		let e = document.querySelectorAll(`.modal-backdrop[${G}="true"]`);
		for (let t of e) t.remove();
	}
	t && document.querySelectorAll(".modal.in").length === 0 && document.querySelectorAll(".modal-backdrop").length === 0 && document.body.classList.remove("modal-open");
}, Q = async (e, t) => {
	let n = await Y();
	if (n) {
		n.show(e, t);
		return;
	}
	X(e);
}, $ = (e) => {
	if (e.getAttribute(K) === "true") {
		Z(e);
		return;
	}
	let t = J();
	if (t) {
		t.hide(e);
		return;
	}
	Z(e);
}, te = (e) => {
	let t = document.createElement("input");
	return t.id = H, t.type = "button", t.value = e, t.className = "btn", t.setAttribute("data-am-modal-target", "#directory-select-modal"), t;
}, ne = () => {
	let e = document.getElementById("id_relative_path"), t = document.getElementById("location-directory-picker"), n = document.getElementById("directory-select-modal");
	if (!(e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) || !(t instanceof HTMLElement) || !(n instanceof HTMLElement) || t.dataset.modalReady === "true") return;
	let r = t.dataset.browseLabel ?? "Browse", i = document.getElementById(H);
	i instanceof HTMLInputElement || (i = te(r), e.insertAdjacentElement("afterend", i)), i.addEventListener("click", (r) => {
		t.setAttribute("data-selected-relative-path", e.value || ""), !J() && (r.preventDefault(), Q(n, i));
	}), n.addEventListener("click", (e) => {
		let t = e.target;
		t instanceof Element && t.closest("[data-dismiss=\"modal\"]") && (e.preventDefault(), $(n));
	}), t.addEventListener("location-directory-picker:selected-path", (t) => {
		let r = t instanceof CustomEvent && t.detail ? t.detail : {};
		e.value = r.relativePath ?? "", $(n);
	}), t.dataset.modalReady = "true";
};
//#endregion
//#region lib/location-directory-picker/index.ts
async function re() {
	let e = document.getElementById("location-directory-picker");
	if (!e) throw Error("Mount element not found.");
	await y();
	let t = e.getAttribute("data-space-uuid") || "", n = e.getAttribute("data-root-path") || "", r = () => {
		let t = e.getAttribute("data-selected-relative-path");
		return t === null ? e.getAttribute("data-selected-path") || "" : ee(n, t);
	}, i = o(r()), a = () => {
		i.value = r();
	}, s = (t) => {
		i.value = t, e.setAttribute("data-selected-relative-path", V(n, t)), e.setAttribute("data-selected-path", t), e.dispatchEvent(new CustomEvent("location-directory-picker:selected-path", { detail: {
			path: t,
			relativePath: V(n, t)
		} }));
	}, l = v({
		name: "LocationDirectoryPickerRoot",
		setup() {
			return () => _(B, {
				spaceUuid: t,
				rootPath: n,
				selectedPath: i.value,
				onSelect: s
			});
		}
	}), u = c(l);
	u.use(b), u.mount(e), new MutationObserver((e) => {
		e.some((e) => e.attributeName === "data-selected-relative-path" || e.attributeName === "data-selected-path") && a();
	}).observe(e, {
		attributes: !0,
		attributeFilter: ["data-selected-relative-path", "data-selected-path"]
	});
}
re().catch((e) => {
	console.error("Failed to bootstrap app:", e);
}), ne();
//#endregion
