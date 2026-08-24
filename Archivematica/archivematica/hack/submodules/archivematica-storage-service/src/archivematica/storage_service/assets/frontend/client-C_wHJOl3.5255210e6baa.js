//#region lib/shared/http/client.ts
var e = class extends Error {
	status;
	statusText;
	url;
	bodyText;
	bodyJson;
	constructor(e, t, n, r) {
		super(e), this.name = "HttpError", this.status = t.status, this.statusText = t.statusText, this.url = t.url, this.bodyText = n, this.bodyJson = r;
	}
}, t = (t) => t instanceof e ? {
	status: t.status,
	statusText: t.statusText,
	url: t.url,
	bodyText: t.bodyText ?? null,
	bodyJson: t.bodyJson ?? null
} : null, n = (e) => {
	if (!e) return null;
	try {
		return JSON.parse(e);
	} catch {
		return null;
	}
}, r = (e, t, n, r) => {
	let i = new URL(t, e);
	if (n) for (let [e, t] of Object.entries(n)) t != null && i.searchParams.set(e, String(t));
	return r && i.searchParams.set("_", String(Date.now())), i.toString();
}, i = (e) => {
	let t = `${e}=`;
	return document.cookie.split(";").map((e) => e.trim()).find((e) => e.startsWith(t))?.slice(t.length) ?? "";
}, a = () => i("storageapi_csrfid"), o = (e) => !e || ![
	"GET",
	"HEAD",
	"OPTIONS"
].includes(e.toUpperCase()), s = (e, t) => {
	let n = new Headers(t.defaultHeaders);
	e.headers && new Headers(e.headers).forEach((e, t) => n.set(t, e)), n.has("X-Requested-With") || n.set("X-Requested-With", "XMLHttpRequest");
	let r = e.body ?? null;
	if (e.json !== void 0) {
		if (r !== null) throw Error("Provide either json or body, not both.");
		r = JSON.stringify(e.json), n.has("Content-Type") || n.set("Content-Type", "application/json");
	}
	if (o(e.method ?? "GET")) {
		let e = a();
		e && !n.has("X-CSRFToken") && n.set("X-CSRFToken", e);
	}
	return {
		method: e.method ?? "GET",
		headers: n,
		body: r,
		credentials: e.credentials ?? t.credentials,
		signal: e.signal
	};
}, c = (e, t) => new Promise((n, r) => {
	if (t?.aborted) {
		r(new DOMException("Aborted", "AbortError"));
		return;
	}
	let i = setTimeout(n, e);
	t?.addEventListener("abort", () => {
		clearTimeout(i), r(new DOMException("Aborted", "AbortError"));
	}, { once: !0 });
}), l = (t = {}) => {
	let i = t.baseUrl ?? window.location.origin, a = t.defaultHeaders ?? {}, o = t.credentials ?? "same-origin", l = async (t, l = {}) => {
		l.delay && await c(l.delay, l.signal);
		let u = r(i, t, l.query, l.cacheBust), d = await fetch(u, s(l, {
			defaultHeaders: a,
			credentials: o
		}));
		if (!d.ok) {
			let t = await d.text(), r = n(t);
			throw new e(`Request failed: ${d.status}`, d, t, r ?? void 0);
		}
		let f = n(await d.text());
		if (l.strictJson && f === null) throw Error(`Expected JSON response from ${d.url || u}.`);
		return f ?? null;
	};
	return {
		requestJson: l,
		getJson: async (e, t = {}) => l(e, {
			...t,
			method: "GET"
		})
	};
};
//#endregion
export { l as n, t as r, e as t };
