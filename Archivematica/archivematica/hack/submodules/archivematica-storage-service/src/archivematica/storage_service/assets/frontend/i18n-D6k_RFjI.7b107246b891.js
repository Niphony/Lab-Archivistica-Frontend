import { n as e } from "./runtime-CsFmpt5v.js";
//#region \0rolldown_dynamic_import_helper.js
var t = (e, t, n) => {
	let r = t.lastIndexOf("?"), i = e[r === -1 || r < t.lastIndexOf("/") ? t : t.slice(0, r)];
	return i ? typeof i == "function" ? i() : Promise.resolve(i) : new Promise((e, r) => {
		(typeof queueMicrotask == "function" ? queueMicrotask : setTimeout)(r.bind(null, /* @__PURE__ */ Error("Unknown variable dynamic import: " + t + (t.split("/").length === n ? "" : ". Note that variables only represent file names one level deep."))));
	});
}, n = [
	"en",
	"es",
	"fr",
	"ja",
	"no",
	"pt",
	"pt-br",
	"sv"
], r = "en";
async function i(e) {
	n.includes(e) || (e = r);
	let i;
	try {
		i = (await t(/* #__PURE__ */ Object.assign({
			"./locales/en.json": () => import("./locale-en-DfAwA3QL.js"),
			"./locales/es.json": () => import("./locale-es-CWKgYXcf.js"),
			"./locales/fr.json": () => import("./locale-fr-BfVle7Rw.js"),
			"./locales/ja.json": () => import("./locale-ja-uobNDst3.js"),
			"./locales/no.json": () => import("./locale-no-Bwmykkbt.js"),
			"./locales/pt-br.json": () => import("./locale-pt-br-iTy-Hmy4.js"),
			"./locales/pt.json": () => import("./locale-pt-FwEXt7z7.js"),
			"./locales/sv.json": () => import("./locale-sv-paP7xrXx.js")
		}), `./locales/${e}.json`, 3)).default, o.global.setLocaleMessage(e, i), o.global.locale.value = e;
	} catch {
		o.global.locale.value = r;
	}
}
function a(e) {
	return e.replace("_", "-").toLowerCase();
}
var o = e({
	legacy: !1,
	locale: r,
	fallbackLocale: r,
	silentTranslationWarn: !0,
	silentFallbackWarn: !0
}), s = r;
if (window.StorageServiceConfig?.currentLanguage) {
	let e = a(window.StorageServiceConfig.currentLanguage);
	n.includes(e) && (s = e);
}
var c = null;
function l() {
	return c || (c = (async () => {
		try {
			await i(s);
		} catch (e) {
			console.warn("Failed to set initial locale:", e);
		}
	})(), c);
}
//#endregion
export { l as n, o as t };
