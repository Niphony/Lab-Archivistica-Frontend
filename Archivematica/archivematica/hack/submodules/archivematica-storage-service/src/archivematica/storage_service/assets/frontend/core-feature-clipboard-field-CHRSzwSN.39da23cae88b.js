import { n as e } from "./i18n-D6k_RFjI.js";
import { t } from "./plain-GH5faqzX.js";
//#region lib/core/features/clipboard-field/index.ts
var n = "am-clipboard-field", r = 1e3, i = () => ({
	copy: t("clipboardField.copy"),
	copied: t("clipboardField.copied"),
	copyFailed: t("clipboardField.copyFailed")
}), a = class extends HTMLElement {
	button = null;
	field = null;
	icon = null;
	status = null;
	resetTimerId = null;
	bound = !1;
	static get observedAttributes() {
		return ["value"];
	}
	connectedCallback() {
		this.hasAttribute("role") || this.setAttribute("role", "group"), this.querySelector(".am-clipboard-field__input-group") || this.render(), this.cacheElements(), this.classList.contains("am-clipboard-field") || this.classList.add("am-clipboard-field"), !this.bound && this.button && (this.button.addEventListener("click", this.onCopyClick), this.bound = !0);
	}
	disconnectedCallback() {
		this.button && this.bound && this.button.removeEventListener("click", this.onCopyClick), this.bound = !1, this.clearResetTimer();
	}
	attributeChangedCallback(e, t, n) {
		e === "value" && this.field && (this.field.value = n ?? "");
	}
	render() {
		let e = i(), t = this.getAttribute("value") ?? this.textContent ?? "", n = this.hasAttribute("multiline"), r = this.ownerDocument, a = r.createElement("div");
		a.className = "input-prepend am-clipboard-field__input-group";
		let o = r.createElement("button");
		o.className = "btn am-clipboard-field__button", o.type = "button", o.title = e.copy, o.setAttribute("aria-label", e.copy), o.style.margin = "0 -1px 0 0";
		let s = r.createElement("i");
		if (s.className = "icon-share am-clipboard-field__icon", s.setAttribute("aria-hidden", "true"), o.append(s), a.append(o), n) {
			let e = r.createElement("textarea");
			e.className = "input-xxlarge uneditable-input am-clipboard-field__input", e.value = t, e.disabled = !0, e.style.cursor = "default", e.style.resize = "vertical", e.style.height = "100px", a.append(e);
		} else {
			let e = r.createElement("input");
			e.type = "text", e.className = "input-xxlarge am-clipboard-field__input", e.value = t, e.disabled = !0, e.style.cursor = "default", a.append(e);
		}
		let c = r.createElement("p");
		c.className = "help-block sr-only am-clipboard-field__status", c.setAttribute("role", "status"), c.setAttribute("aria-live", "polite"), c.setAttribute("aria-atomic", "true"), this.replaceChildren(a, c);
	}
	cacheElements() {
		this.button = this.querySelector("button"), this.field = this.querySelector("input, textarea"), this.icon = this.querySelector("i.am-clipboard-field__icon"), this.status = this.querySelector("[role=\"status\"]");
	}
	clearResetTimer() {
		this.resetTimerId !== null && (window.clearTimeout(this.resetTimerId), this.resetTimerId = null);
	}
	setStatus(e) {
		this.status && (this.status.textContent = e);
	}
	setStatusVisible(e) {
		this.status && this.status.classList.toggle("sr-only", !e);
	}
	setStatusIsError(e) {
		this.status && this.status.classList.toggle("text-danger", e);
	}
	setButtonLabel(e) {
		this.button && (this.button.setAttribute("aria-label", e), this.button.setAttribute("title", e));
	}
	setCopiedIconState(e) {
		if (this.icon) {
			if (this.icon.classList.toggle("icon-share", !e), this.icon.classList.toggle("icon-ok", e), this.icon.classList.toggle("am-clipboard-field-icon-copied", e), !e) {
				this.icon.classList.remove("am-clipboard-field-icon-copied-animate");
				return;
			}
			this.icon.classList.remove("am-clipboard-field-icon-copied-animate"), this.icon.offsetWidth, this.icon.classList.add("am-clipboard-field-icon-copied-animate");
		}
	}
	resetFeedback() {
		let e = i();
		this.setCopiedIconState(!1), this.setStatus(""), this.setStatusVisible(!1), this.setStatusIsError(!1), this.setButtonLabel(e.copy);
	}
	showCopiedFeedback() {
		let e = i();
		this.clearResetTimer(), this.setCopiedIconState(!0), this.setStatus(e.copied), this.setStatusVisible(!1), this.setStatusIsError(!1), this.setButtonLabel(e.copied), this.resetTimerId = window.setTimeout(() => {
			this.resetFeedback(), this.resetTimerId = null;
		}, r);
	}
	showCopyError() {
		let e = i();
		this.clearResetTimer(), this.setCopiedIconState(!1), this.setStatus(e.copyFailed), this.setStatusVisible(!0), this.setStatusIsError(!0), this.setButtonLabel(e.copyFailed);
	}
	onCopyClick = () => {
		this.copyValue();
	};
	async copyValue() {
		if (this.field) try {
			if (!navigator.clipboard?.writeText) throw Error("Clipboard API is not available");
			await navigator.clipboard.writeText(this.field.value), this.showCopiedFeedback();
		} catch (e) {
			console.error("Failed to copy clipboard field value:", e), this.showCopyError();
		}
	}
}, o = () => {
	customElements.get(n) || customElements.define(n, a);
};
async function s() {
	try {
		await e();
	} catch (e) {
		console.warn("Failed to initialize clipboard field i18n:", e);
	} finally {
		o();
	}
}
//#endregion
export { a as AmClipboardFieldElement, o as defineAmClipboardField, s as init };
