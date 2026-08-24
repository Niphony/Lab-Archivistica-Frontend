import { n as e } from "./i18n-D6k_RFjI.js";
//#region lib/core/index.ts
var t = /* #__PURE__ */ Object.assign({
	"./features/callback-headers/index.ts": () => import("./core-feature-callback-headers-C07Ogu5H.js"),
	"./features/clipboard-field/index.ts": () => import("./core-feature-clipboard-field-CHRSzwSN.js"),
	"./features/location-replicators/index.ts": () => import("./core-feature-location-replicators-C0ncx2aL.js"),
	"./features/modal/index.ts": () => import("./core-feature-modal-CME3yrX_.js"),
	"./features/nav-collapse/index.ts": () => import("./core-feature-nav-collapse-tZqOM5c_.js"),
	"./features/package-request-delete/index.ts": () => import("./core-feature-package-request-delete-CdkFBvtu.js"),
	"./features/space-protocol/index.ts": () => import("./core-feature-space-protocol-DlLxOXqJ.js")
}), n = /^[a-z0-9-]+$/, r = (e) => {
	let t = e.split(/[,\s]+/).map((e) => e.trim()).filter(Boolean).filter((e) => n.test(e));
	return Array.from(new Set(t));
};
async function i() {
	await e();
	let n = document.body.dataset.features ?? "";
	if (!n) return;
	let i = r(n);
	for (let e of i) {
		let n = t[`./features/${e}/index.ts`];
		if (!n) {
			console.error(`Feature "${e}" is not available`);
			continue;
		}
		try {
			await (await n()).init?.();
		} catch (t) {
			console.error(`Failed to load feature "${e}"`, t);
		}
	}
}
function a() {
	if (document.readyState === "loading") {
		document.addEventListener("DOMContentLoaded", () => void i(), { once: !0 });
		return;
	}
	i();
}
a();
//#endregion
