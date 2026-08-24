import { t as e } from "./i18n-D6k_RFjI.js";
//#region lib/shared/i18n/plain.ts
var t = (e, t) => t ? Object.entries(t).reduce((e, [t, n]) => e.split(`{${t}}`).join(String(n)), e) : e, n = (n, r) => e.global.te(n) ? e.global.t(n, r ?? {}) : t(n, r);
//#endregion
export { n as t };
