//#region \0rolldown/runtime.js
var e = Object.create, t = Object.defineProperty, n = Object.getOwnPropertyDescriptor, r = Object.getOwnPropertyNames, i = Object.getPrototypeOf, a = Object.prototype.hasOwnProperty, o = (e, t) => () => (t || (e((t = { exports: {} }).exports, t), e = null), t.exports), s = (e, n) => {
	let r = {};
	for (var i in e) t(r, i, {
		get: e[i],
		enumerable: !0
	});
	return n || t(r, Symbol.toStringTag, { value: "Module" }), r;
}, c = (e, i, o, s) => {
	if (i && typeof i == "object" || typeof i == "function") for (var c = r(i), l = 0, u = c.length, d; l < u; l++) d = c[l], !a.call(e, d) && d !== o && t(e, d, {
		get: ((e) => i[e]).bind(null, d),
		enumerable: !(s = n(i, d)) || s.enumerable
	});
	return e;
}, l = (n, r, o) => (o = n == null ? {} : e(i(n)), c(r || !n || !n.__esModule || !a.call(n, "default") ? t(o, "default", {
	value: n,
	enumerable: !0
}) : o, n)), u = typeof window < "u", d = (e, t = !1) => t ? Symbol.for(e) : Symbol(e), f = (e, t, n) => p({
	l: e,
	k: t,
	s: n
}), p = (e) => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"), m = (e) => typeof e == "number" && isFinite(e), h = (e) => ne(e) === "[object Date]", g = (e) => ne(e) === "[object RegExp]", _ = (e) => A(e) && Object.keys(e).length === 0, v = Object.assign, y = Object.create, b = (e = null) => y(e), x, S = () => x ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : b(), C = Object.prototype.hasOwnProperty;
function w(e, t) {
	return C.call(e, t);
}
var T = Array.isArray, E = (e) => typeof e == "function", D = (e) => typeof e == "string", O = (e) => typeof e == "boolean", k = (e) => typeof e == "object" && !!e, ee = (e) => k(e) && E(e.then) && E(e.catch), te = Object.prototype.toString, ne = (e) => te.call(e), A = (e) => ne(e) === "[object Object]", j = (e) => e == null ? "" : T(e) || A(e) && e.toString === te ? JSON.stringify(e, null, 2) : String(e);
function re(e, t = "") {
	return e.reduce((e, n, r) => r === 0 ? e + n : e + t + n, "");
}
function ie(e, t) {
	typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack));
}
function ae(e) {
	return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/\//g, "&#x2F;").replace(/=/g, "&#x3D;");
}
function oe(e) {
	return e.replace(/&(?![a-z0-9#]{2,6};)/gi, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&apos;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var se = /^javascript:/i, ce = /^(?:href|src|action|formaction)$/i, le = /&#(?:x([0-9a-f]+)|(\d+));?/gi, ue = /&(?:Tab|NewLine);/g, de = /&colon;?/gi, fe = /[\u0000-\u0020\u007f-\u009f]/g, pe = /(?:^|[\s"'<>/])on\w+\s*=\s*["']?[^"'>]+["']?/i, me = /(^|[\s"'<>/])on(\w+\s*=)/gi, he = /(^|[\s"'<>/])((?:href|src|action|formaction)\s*=\s*)([^\s"'=<>`]+)/gi;
function ge(e, t, n) {
	let r = t || n;
	if (!r) return e;
	let i = Number.parseInt(r, t ? 16 : 10);
	return i <= 127 ? String.fromCharCode(i) : e;
}
function _e(e) {
	let t = e.replace(le, ge).replace(ue, "").replace(de, ":").replace(fe, "");
	return se.test(t);
}
function ve(e) {
	let t = /url\s*\(/gi, n = "", r = 0, i;
	for (; (i = t.exec(e)) !== null;) {
		let a = i.index, o = t.lastIndex - 1, s = o + 1, c = 1, l = null;
		for (; s < e.length; s++) {
			let t = e[s];
			if (l) {
				t === l && (l = null);
				continue;
			}
			if (t === "\"" || t === "'") l = t;
			else if (t === "(") c++;
			else if (t === ")" && (c--, c === 0)) break;
		}
		if (c !== 0) break;
		let u = e.slice(o + 1, s).trim(), d = u.startsWith("\"") && u.endsWith("\"") || u.startsWith("'") && u.endsWith("'") ? u.slice(1, -1).trim() : u;
		n += e.slice(r, a), n += _e(d) ? "url(about:blank)" : e.slice(a, s + 1), r = s + 1;
	}
	return n + e.slice(r);
}
function ye(e, t) {
	return ce.test(e) && _e(t) ? "about:blank" : oe(e.toLowerCase() === "style" ? ve(t) : t);
}
function be(e) {
	return e = e.replace(/([\w:-]+)\s*=\s*"([^"]*)"/g, (e, t, n) => `${t}="${ye(t, n)}"`), e = e.replace(/([\w:-]+)\s*=\s*'([^']*)'/g, (e, t, n) => `${t}='${ye(t, n)}'`), pe.test(e) && (e = e.replace(me, "$1&#111;n$2")), e = e.replace(he, (e, t, n, r) => _e(r) ? `${t}${n}about:blank` : e), e;
}
var xe = (e) => !k(e) || T(e);
function Se(e, t) {
	if (xe(e) || xe(t)) throw Error("Invalid value");
	let n = [{
		src: e,
		des: t
	}];
	for (; n.length;) {
		let { src: e, des: t } = n.pop();
		Object.keys(e).forEach((r) => {
			r !== "__proto__" && (k(e[r]) && !k(t[r]) && (t[r] = Array.isArray(e[r]) ? [] : b()), xe(t[r]) || xe(e[r]) ? t[r] = e[r] : n.push({
				src: e[r],
				des: t[r]
			}));
		});
	}
}
//#endregion
//#region node_modules/@intlify/message-compiler/dist/message-compiler.mjs
function Ce(e, t, n) {
	return {
		line: e,
		column: t,
		offset: n
	};
}
function we(e, t, n) {
	let r = {
		start: e,
		end: t
	};
	return n != null && (r.source = n), r;
}
var M = {
	EXPECTED_TOKEN: 1,
	INVALID_TOKEN_IN_PLACEHOLDER: 2,
	UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
	UNKNOWN_ESCAPE_SEQUENCE: 4,
	INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
	UNBALANCED_CLOSING_BRACE: 6,
	UNTERMINATED_CLOSING_BRACE: 7,
	EMPTY_PLACEHOLDER: 8,
	NOT_ALLOW_NEST_PLACEHOLDER: 9,
	INVALID_LINKED_FORMAT: 10,
	MUST_HAVE_MESSAGES_IN_PLURAL: 11,
	UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
	UNEXPECTED_EMPTY_LINKED_KEY: 13,
	UNEXPECTED_LEXICAL_ANALYSIS: 14,
	UNHANDLED_CODEGEN_NODE_TYPE: 15,
	UNHANDLED_MINIFIER_NODE_TYPE: 16
};
M.EXPECTED_TOKEN, M.INVALID_TOKEN_IN_PLACEHOLDER, M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, M.UNKNOWN_ESCAPE_SEQUENCE, M.INVALID_UNICODE_ESCAPE_SEQUENCE, M.UNBALANCED_CLOSING_BRACE, M.UNTERMINATED_CLOSING_BRACE, M.EMPTY_PLACEHOLDER, M.NOT_ALLOW_NEST_PLACEHOLDER, M.INVALID_LINKED_FORMAT, M.MUST_HAVE_MESSAGES_IN_PLURAL, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, M.UNEXPECTED_EMPTY_LINKED_KEY, M.UNEXPECTED_LEXICAL_ANALYSIS, M.UNHANDLED_CODEGEN_NODE_TYPE, M.UNHANDLED_MINIFIER_NODE_TYPE;
function Te(e, t, n = {}) {
	let { domain: r, messages: i, args: a } = n, o = SyntaxError(String(e));
	return o.code = e, t && (o.location = t), o.domain = r, o;
}
function Ee(e) {
	throw e;
}
var De = " ", Oe = "\r", ke = "\n", Ae = "\u2028", je = "\u2029";
function Me(e) {
	let t = e, n = 0, r = 1, i = 1, a = 0, o = (e) => t[e] === Oe && t[e + 1] === ke, s = (e) => t[e] === ke, c = (e) => t[e] === je, l = (e) => t[e] === Ae, u = (e) => o(e) || s(e) || c(e) || l(e), d = () => n, f = () => r, p = () => i, m = () => a, h = (e) => o(e) || c(e) || l(e) ? ke : t[e], g = () => h(n), _ = () => h(n + a);
	function v() {
		return a = 0, u(n) && (r++, i = 0), o(n) && n++, n++, i++, t[n];
	}
	function y() {
		return o(n + a) && a++, a++, t[n + a];
	}
	function b() {
		n = 0, r = 1, i = 1, a = 0;
	}
	function x(e = 0) {
		a = e;
	}
	function S() {
		let e = n + a;
		for (; e !== n;) v();
		a = 0;
	}
	return {
		index: d,
		line: f,
		column: p,
		peekOffset: m,
		charAt: h,
		currentChar: g,
		currentPeek: _,
		next: v,
		peek: y,
		reset: b,
		resetPeek: x,
		skipToPeek: S
	};
}
var Ne = void 0, Pe = "'", Fe = "tokenizer";
function N(e, t = {}) {
	let n = t.location !== !1, r = Me(e), i = () => r.index(), a = () => Ce(r.line(), r.column(), r.index()), o = a(), s = i(), c = {
		currentType: 13,
		offset: s,
		startLoc: o,
		endLoc: o,
		lastType: 13,
		lastOffset: s,
		lastStartLoc: o,
		lastEndLoc: o,
		braceNest: 0,
		inLinked: !1,
		text: ""
	}, l = () => c, { onError: u } = t;
	function d(e, t, r, ...i) {
		let a = l();
		if (t.column += r, t.offset += r, u) {
			let r = Te(e, n ? we(a.startLoc, t) : null, {
				domain: Fe,
				args: i
			});
			u(r);
		}
	}
	function f(e, t, r) {
		e.endLoc = a(), e.currentType = t;
		let i = { type: t };
		return n && (i.loc = we(e.startLoc, e.endLoc)), r != null && (i.value = r), i;
	}
	let p = (e) => f(e, 13);
	function m(e, t) {
		return e.currentChar() === t ? (e.next(), t) : (d(M.EXPECTED_TOKEN, a(), 0, t), "");
	}
	function h(e) {
		let t = "";
		for (; e.currentPeek() === De || e.currentPeek() === ke;) t += e.currentPeek(), e.peek();
		return t;
	}
	function g(e) {
		let t = h(e);
		return e.skipToPeek(), t;
	}
	function _(e) {
		if (e === Ne) return !1;
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t === 95;
	}
	function v(e) {
		if (e === Ne) return !1;
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function y(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function b(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = v(e.currentPeek() === "-" ? e.peek() : e.currentPeek());
		return e.resetPeek(), r;
	}
	function x(e, t) {
		let { currentType: n } = t;
		if (n !== 2) return !1;
		h(e);
		let r = e.currentPeek() === Pe;
		return e.resetPeek(), r;
	}
	function S(e, t) {
		let { currentType: n } = t;
		if (n !== 7) return !1;
		h(e);
		let r = e.currentPeek() === ".";
		return e.resetPeek(), r;
	}
	function C(e, t) {
		let { currentType: n } = t;
		if (n !== 8) return !1;
		h(e);
		let r = _(e.currentPeek());
		return e.resetPeek(), r;
	}
	function w(e, t) {
		let { currentType: n } = t;
		if (n !== 7 && n !== 11) return !1;
		h(e);
		let r = e.currentPeek() === ":";
		return e.resetPeek(), r;
	}
	function T(e, t) {
		let { currentType: n } = t;
		if (n !== 9) return !1;
		let r = () => {
			let t = e.currentPeek();
			return t === "{" ? _(e.peek()) : t === "@" || t === "|" || t === ":" || t === "." || t === De || !t ? !1 : t === ke ? (e.peek(), r()) : D(e, !1);
		}, i = r();
		return e.resetPeek(), i;
	}
	function E(e) {
		h(e);
		let t = e.currentPeek() === "|";
		return e.resetPeek(), t;
	}
	function D(e, t = !0) {
		let n = (t = !1, r = "") => {
			let i = e.currentPeek();
			return i === "{" || i === "@" || !i ? t : i === "|" ? r !== De && r !== ke : i === De ? (e.peek(), n(!0, De)) : i !== ke || (e.peek(), n(!0, ke));
		}, r = n();
		return t && e.resetPeek(), r;
	}
	function O(e, t) {
		let n = e.currentChar();
		if (n !== Ne) return t(n) ? (e.next(), n) : null;
	}
	function k(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36;
	}
	function ee(e) {
		return O(e, k);
	}
	function te(e) {
		let t = e.charCodeAt(0);
		return t >= 97 && t <= 122 || t >= 65 && t <= 90 || t >= 48 && t <= 57 || t === 95 || t === 36 || t === 45;
	}
	function ne(e) {
		return O(e, te);
	}
	function A(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57;
	}
	function j(e) {
		return O(e, A);
	}
	function re(e) {
		let t = e.charCodeAt(0);
		return t >= 48 && t <= 57 || t >= 65 && t <= 70 || t >= 97 && t <= 102;
	}
	function ie(e) {
		return O(e, re);
	}
	function ae(e) {
		let t = "", n = "";
		for (; t = j(e);) n += t;
		return n;
	}
	function oe(e) {
		let t = "";
		for (;;) {
			let n = e.currentChar();
			if (n === "\\") {
				let r = e.peek();
				r === "{" || r === "}" || r === "@" || r === "|" || r === "\\" ? (t += n + r, e.next(), e.next()) : (e.resetPeek(), t += n, e.next());
			} else if (n === "{" || n === "}" || n === "@" || n === "|" || !n) break;
			else if (n === De || n === ke) {
				if (D(e)) t += n, e.next();
				else if (E(e)) break;
				else t += n, e.next();
			} else t += n, e.next();
		}
		return t;
	}
	function se(e) {
		g(e);
		let t = "", n = "";
		for (; t = ne(e);) n += t;
		let r = e.currentChar();
		if (r && r !== "}" && r !== Ne && r !== De && r !== ke && r !== "　") {
			let t = me(e);
			return d(M.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n + t), n + t;
		}
		return e.currentChar() === Ne && d(M.UNTERMINATED_CLOSING_BRACE, a(), 0), n;
	}
	function ce(e) {
		g(e);
		let t = "";
		return e.currentChar() === "-" ? (e.next(), t += `-${ae(e)}`) : t += ae(e), e.currentChar() === Ne && d(M.UNTERMINATED_CLOSING_BRACE, a(), 0), t;
	}
	function le(e) {
		return e !== Pe && e !== ke;
	}
	function ue(e) {
		g(e), m(e, "'");
		let t = "", n = "";
		for (; t = O(e, le);) n += t === "\\" ? de(e) : t;
		let r = e.currentChar();
		return r === ke || r === Ne ? (d(M.UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER, a(), 0), r === ke && (e.next(), m(e, "'")), n) : (m(e, "'"), n);
	}
	function de(e) {
		let t = e.currentChar();
		switch (t) {
			case "\\":
			case "'": return e.next(), `\\${t}`;
			case "u": return fe(e, t, 4);
			case "U": return fe(e, t, 6);
			default: return d(M.UNKNOWN_ESCAPE_SEQUENCE, a(), 0, t), "";
		}
	}
	function fe(e, t, n) {
		m(e, t);
		let r = "";
		for (let i = 0; i < n; i++) {
			let n = ie(e);
			if (!n) {
				d(M.INVALID_UNICODE_ESCAPE_SEQUENCE, a(), 0, `\\${t}${r}${e.currentChar()}`);
				break;
			}
			r += n;
		}
		return `\\${t}${r}`;
	}
	function pe(e) {
		return e !== "{" && e !== "}" && e !== De && e !== ke;
	}
	function me(e) {
		g(e);
		let t = "", n = "";
		for (; t = O(e, pe);) n += t;
		return n;
	}
	function he(e) {
		let t = "", n = "";
		for (; t = ee(e);) n += t;
		return n;
	}
	function ge(e) {
		let t = (n) => {
			let r = e.currentChar();
			return r === "{" || r === "@" || r === "|" || r === "(" || r === ")" || !r || r === De ? n : (n += r, e.next(), t(n));
		};
		return t("");
	}
	function _e(e) {
		g(e);
		let t = m(e, "|");
		return g(e), t;
	}
	function ve(e, t) {
		let n = null;
		switch (e.currentChar()) {
			case "{": return t.braceNest >= 1 && d(M.NOT_ALLOW_NEST_PLACEHOLDER, a(), 0), e.next(), n = f(t, 2, "{"), g(e), t.braceNest++, n;
			case "}": return t.braceNest > 0 && t.currentType === 2 && d(M.EMPTY_PLACEHOLDER, a(), 0), e.next(), n = f(t, 3, "}"), t.braceNest--, t.braceNest > 0 && g(e), t.inLinked && t.braceNest === 0 && (t.inLinked = !1), n;
			case "@": return t.braceNest > 0 && d(M.UNTERMINATED_CLOSING_BRACE, a(), 0), n = ye(e, t) || p(t), t.braceNest = 0, n;
			default: {
				let r = !0, i = !0, o = !0;
				if (E(e)) return t.braceNest > 0 && d(M.UNTERMINATED_CLOSING_BRACE, a(), 0), n = f(t, 1, _e(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (t.braceNest > 0 && (t.currentType === 4 || t.currentType === 5 || t.currentType === 6)) return d(M.UNTERMINATED_CLOSING_BRACE, a(), 0), t.braceNest = 0, be(e, t);
				if (r = y(e, t)) return n = f(t, 4, se(e)), g(e), n;
				if (i = b(e, t)) return n = f(t, 5, ce(e)), g(e), n;
				if (o = x(e, t)) return n = f(t, 6, ue(e)), g(e), n;
				if (!r && !i && !o) return n = f(t, 12, me(e)), d(M.INVALID_TOKEN_IN_PLACEHOLDER, a(), 0, n.value), g(e), n;
				break;
			}
		}
		return n;
	}
	function ye(e, t) {
		let { currentType: n } = t, r = null, i = e.currentChar();
		switch ((n === 7 || n === 8 || n === 11 || n === 9) && (i === ke || i === De) && d(M.INVALID_LINKED_FORMAT, a(), 0), i) {
			case "@": return e.next(), r = f(t, 7, "@"), t.inLinked = !0, r;
			case ".": return g(e), e.next(), f(t, 8, ".");
			case ":": return g(e), e.next(), f(t, 9, ":");
			default: return E(e) ? (r = f(t, 1, _e(e)), t.braceNest = 0, t.inLinked = !1, r) : S(e, t) || w(e, t) ? (g(e), ye(e, t)) : C(e, t) ? (g(e), f(t, 11, he(e))) : T(e, t) ? (g(e), i === "{" ? ve(e, t) || r : f(t, 10, ge(e))) : (n === 7 && d(M.INVALID_LINKED_FORMAT, a(), 0), t.braceNest = 0, t.inLinked = !1, be(e, t));
		}
	}
	function be(e, t) {
		let n = { type: 13 };
		if (t.braceNest > 0) return ve(e, t) || p(t);
		if (t.inLinked) return ye(e, t) || p(t);
		switch (e.currentChar()) {
			case "{": return ve(e, t) || p(t);
			case "}": return d(M.UNBALANCED_CLOSING_BRACE, a(), 0), e.next(), f(t, 3, "}");
			case "@": return ye(e, t) || p(t);
			default:
				if (E(e)) return n = f(t, 1, _e(e)), t.braceNest = 0, t.inLinked = !1, n;
				if (D(e)) return f(t, 0, oe(e));
		}
		return n;
	}
	function xe() {
		let { currentType: e, offset: t, startLoc: n, endLoc: o } = c;
		return c.lastType = e, c.lastOffset = t, c.lastStartLoc = n, c.lastEndLoc = o, c.offset = i(), c.startLoc = a(), r.currentChar() === Ne ? f(c, 13) : be(r, c);
	}
	return {
		nextToken: xe,
		currentOffset: i,
		currentPosition: a,
		context: l
	};
}
var Ie = "parser", Le = /(?:\\\\|\\'|\\u([0-9a-fA-F]{4})|\\U([0-9a-fA-F]{6}))/g, Re = /\\([\\@{}|])/g;
function ze(e, t) {
	return t;
}
function Be(e, t, n) {
	switch (e) {
		case "\\\\": return "\\";
		case "\\'": return "'";
		default: {
			let e = parseInt(t || n, 16);
			return e <= 55295 || e >= 57344 ? String.fromCodePoint(e) : "�";
		}
	}
}
function Ve(e = {}) {
	let t = e.location !== !1, { onError: n } = e;
	function r(e, r, i, a, ...o) {
		let s = e.currentPosition();
		if (s.offset += a, s.column += a, n) {
			let e = Te(r, t ? we(i, s) : null, {
				domain: Ie,
				args: o
			});
			n(e);
		}
	}
	function i(e, n, r) {
		let i = { type: e };
		return t && (i.start = n, i.end = n, i.loc = {
			start: r,
			end: r
		}), i;
	}
	function a(e, n, r, i) {
		t && (e.end = n, e.loc && (e.loc.end = r));
	}
	function o(e, t) {
		let n = e.context(), r = i(3, n.offset, n.startLoc);
		return r.value = t.replace(Re, ze), a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function s(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(5, n, r);
		return o.index = parseInt(t, 10), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function c(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(4, n, r);
		return o.key = t, e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function l(e, t) {
		let { lastOffset: n, lastStartLoc: r } = e.context(), o = i(9, n, r);
		return o.value = t.replace(Le, Be), e.nextToken(), a(o, e.currentOffset(), e.currentPosition()), o;
	}
	function u(e) {
		let t = e.nextToken(), n = e.context(), { lastOffset: o, lastStartLoc: s } = n, c = i(8, o, s);
		return t.type === 11 ? (t.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, n.lastStartLoc, 0, He(t)), c.value = t.value || "", a(c, e.currentOffset(), e.currentPosition()), { node: c }) : (r(e, M.UNEXPECTED_EMPTY_LINKED_MODIFIER, n.lastStartLoc, 0), c.value = "", a(c, o, s), {
			nextConsumeToken: t,
			node: c
		});
	}
	function d(e, t) {
		let n = e.context(), r = i(7, n.offset, n.startLoc);
		return r.value = t, a(r, e.currentOffset(), e.currentPosition()), r;
	}
	function f(e) {
		let t = e.context(), n = i(6, t.offset, t.startLoc), o = e.nextToken();
		if (o.type === 8) {
			let t = u(e);
			n.modifier = t.node, o = t.nextConsumeToken || e.nextToken();
		}
		switch (o.type !== 9 && r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(o)), o = e.nextToken(), o.type === 2 && (o = e.nextToken()), o.type) {
			case 10:
				o.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(o)), n.key = d(e, o.value || "");
				break;
			case 4:
				o.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(o)), n.key = c(e, o.value || "");
				break;
			case 5:
				o.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(o)), n.key = s(e, o.value || "");
				break;
			case 6:
				o.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(o)), n.key = l(e, o.value || "");
				break;
			default: {
				r(e, M.UNEXPECTED_EMPTY_LINKED_KEY, t.lastStartLoc, 0);
				let s = e.context(), c = i(7, s.offset, s.startLoc);
				return c.value = "", a(c, s.offset, s.startLoc), n.key = c, a(n, s.offset, s.startLoc), {
					nextConsumeToken: o,
					node: n
				};
			}
		}
		return a(n, e.currentOffset(), e.currentPosition()), { node: n };
	}
	function p(e) {
		let t = e.context(), n = i(2, t.currentType === 1 ? e.currentOffset() : t.offset, t.currentType === 1 ? t.endLoc : t.startLoc);
		n.items = [];
		let u = null;
		do {
			let i = u || e.nextToken();
			switch (u = null, i.type) {
				case 0:
					i.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(i)), n.items.push(o(e, i.value || ""));
					break;
				case 5:
					i.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(i)), n.items.push(s(e, i.value || ""));
					break;
				case 4:
					i.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(i)), n.items.push(c(e, i.value || ""));
					break;
				case 6:
					i.value ?? r(e, M.UNEXPECTED_LEXICAL_ANALYSIS, t.lastStartLoc, 0, He(i)), n.items.push(l(e, i.value || ""));
					break;
				case 7: {
					let t = f(e);
					n.items.push(t.node), u = t.nextConsumeToken || null;
					break;
				}
			}
		} while (t.currentType !== 13 && t.currentType !== 1);
		return a(n, t.currentType === 1 ? t.lastOffset : e.currentOffset(), t.currentType === 1 ? t.lastEndLoc : e.currentPosition()), n;
	}
	function m(e, t, n, o) {
		let s = e.context(), c = o.items.length === 0, l = i(1, t, n);
		l.cases = [], l.cases.push(o);
		do {
			let t = p(e);
			c ||= t.items.length === 0, l.cases.push(t);
		} while (s.currentType !== 13);
		return c && r(e, M.MUST_HAVE_MESSAGES_IN_PLURAL, n, 0), a(l, e.currentOffset(), e.currentPosition()), l;
	}
	function h(e) {
		let t = e.context(), { offset: n, startLoc: r } = t, i = p(e);
		return t.currentType === 13 ? i : m(e, n, r, i);
	}
	function g(n) {
		let o = N(n, v({}, e)), s = o.context(), c = i(0, s.offset, s.startLoc);
		return t && c.loc && (c.loc.source = n), c.body = h(o), e.onCacheKey && (c.cacheKey = e.onCacheKey(n)), s.currentType !== 13 && r(o, M.UNEXPECTED_LEXICAL_ANALYSIS, s.lastStartLoc, 0, n[s.offset] || ""), a(c, o.currentOffset(), o.currentPosition()), c;
	}
	return { parse: g };
}
function He(e) {
	if (e.type === 13) return "EOF";
	let t = (e.value || "").replace(/\r?\n/gu, "\\n");
	return t.length > 10 ? t.slice(0, 9) + "…" : t;
}
function Ue(e, t = {}) {
	let n = {
		ast: e,
		helpers: /* @__PURE__ */ new Set()
	};
	return {
		context: () => n,
		helper: (e) => (n.helpers.add(e), e)
	};
}
function We(e, t) {
	for (let n = 0; n < e.length; n++) Ge(e[n], t);
}
function Ge(e, t) {
	switch (e.type) {
		case 1:
			We(e.cases, t), t.helper("plural");
			break;
		case 2:
			We(e.items, t);
			break;
		case 6:
			Ge(e.key, t), t.helper("linked"), t.helper("type");
			break;
		case 5:
			t.helper("interpolate"), t.helper("list");
			break;
		case 4: t.helper("interpolate"), t.helper("named");
	}
}
function Ke(e, t = {}) {
	let n = Ue(e);
	n.helper("normalize"), e.body && Ge(e.body, n);
	let r = n.context();
	e.helpers = Array.from(r.helpers);
}
function qe(e) {
	let t = e.body;
	return t.type === 2 ? Je(t) : t.cases.forEach((e) => Je(e)), e;
}
function Je(e) {
	if (e.items.length === 1) {
		let t = e.items[0];
		(t.type === 3 || t.type === 9) && (e.static = t.value, delete t.value);
	} else {
		let t = [];
		for (let n = 0; n < e.items.length; n++) {
			let r = e.items[n];
			if (r.type !== 3 && r.type !== 9 || r.value == null) break;
			t.push(r.value);
		}
		if (t.length === e.items.length) {
			e.static = re(t);
			for (let t = 0; t < e.items.length; t++) {
				let n = e.items[t];
				(n.type === 3 || n.type === 9) && delete n.value;
			}
		}
	}
}
function Ye(e) {
	switch (e.t = e.type, e.type) {
		case 0: {
			let t = e;
			Ye(t.body), t.b = t.body, delete t.body;
			break;
		}
		case 1: {
			let t = e, n = t.cases;
			for (let e = 0; e < n.length; e++) Ye(n[e]);
			t.c = n, delete t.cases;
			break;
		}
		case 2: {
			let t = e, n = t.items;
			for (let e = 0; e < n.length; e++) Ye(n[e]);
			t.i = n, delete t.items, t.static && (t.s = t.static, delete t.static);
			break;
		}
		case 3:
		case 9:
		case 8:
		case 7: {
			let t = e;
			t.value && (t.v = t.value, delete t.value);
			break;
		}
		case 6: {
			let t = e;
			Ye(t.key), t.k = t.key, delete t.key, t.modifier && (Ye(t.modifier), t.m = t.modifier, delete t.modifier);
			break;
		}
		case 5: {
			let t = e;
			t.i = t.index, delete t.index;
			break;
		}
		case 4: {
			let t = e;
			t.k = t.key, delete t.key;
			break;
		}
	}
	delete e.type;
}
function Xe(e, t) {
	let { filename: n, breakLineCode: r, needIndent: i } = t, a = t.location !== !1, o = {
		filename: n,
		code: "",
		column: 1,
		line: 1,
		offset: 0,
		map: void 0,
		breakLineCode: r,
		needIndent: i,
		indentLevel: 0
	};
	a && e.loc && (o.source = e.loc.source);
	let s = () => o;
	function c(e, t) {
		o.code += e;
	}
	function l(e, t = !0) {
		let n = t ? r : "";
		c(i ? n + "  ".repeat(e) : n);
	}
	function u(e = !0) {
		let t = ++o.indentLevel;
		e && l(t);
	}
	function d(e = !0) {
		let t = --o.indentLevel;
		e && l(t);
	}
	function f() {
		l(o.indentLevel);
	}
	return {
		context: s,
		push: c,
		indent: u,
		deindent: d,
		newline: f,
		helper: (e) => `_${e}`,
		needIndent: () => o.needIndent
	};
}
function Ze(e, t) {
	let { helper: n } = e;
	e.push(`${n("linked")}(`), tt(e, t.key), t.modifier ? (e.push(", "), tt(e, t.modifier), e.push(", _type")) : e.push(", undefined, _type"), e.push(")");
}
function Qe(e, t) {
	let { helper: n, needIndent: r } = e;
	e.push(`${n("normalize")}([`), e.indent(r());
	let i = t.items.length;
	for (let n = 0; n < i && (tt(e, t.items[n]), n !== i - 1); n++) e.push(", ");
	e.deindent(r()), e.push("])");
}
function $e(e, t) {
	let { helper: n, needIndent: r } = e;
	if (t.cases.length > 1) {
		e.push(`${n("plural")}([`), e.indent(r());
		let i = t.cases.length;
		for (let n = 0; n < i && (tt(e, t.cases[n]), n !== i - 1); n++) e.push(", ");
		e.deindent(r()), e.push("])");
	}
}
function et(e, t) {
	t.body ? tt(e, t.body) : e.push("null");
}
function tt(e, t) {
	let { helper: n } = e;
	switch (t.type) {
		case 0:
			et(e, t);
			break;
		case 1:
			$e(e, t);
			break;
		case 2:
			Qe(e, t);
			break;
		case 6:
			Ze(e, t);
			break;
		case 8:
			e.push(JSON.stringify(t.value), t);
			break;
		case 7:
			e.push(JSON.stringify(t.value), t);
			break;
		case 5:
			e.push(`${n("interpolate")}(${n("list")}(${t.index}))`, t);
			break;
		case 4:
			e.push(`${n("interpolate")}(${n("named")}(${JSON.stringify(t.key)}))`, t);
			break;
		case 9:
			e.push(JSON.stringify(t.value), t);
			break;
		case 3: e.push(JSON.stringify(t.value), t);
	}
}
var nt = (e, t = {}) => {
	let n = D(t.mode) ? t.mode : "normal", r = D(t.filename) ? t.filename : "message.intl";
	t.sourceMap;
	let i = t.breakLineCode == null ? n === "arrow" ? ";" : "\n" : t.breakLineCode, a = t.needIndent ? t.needIndent : n !== "arrow", o = e.helpers || [], s = Xe(e, {
		filename: r,
		breakLineCode: i,
		needIndent: a
	});
	s.push(n === "normal" ? "function __msg__ (ctx) {" : "(ctx) => {"), s.indent(a), o.length > 0 && (s.push(`const { ${re(o.map((e) => `${e}: _${e}`), ", ")} } = ctx`), s.newline()), s.push("return "), tt(s, e), s.deindent(a), s.push("}"), delete e.helpers;
	let { code: c, map: l } = s.context();
	return {
		ast: e,
		code: c,
		map: l ? l.toJSON() : void 0
	};
};
function rt(e, t = {}) {
	let n = v({}, t), r = !!n.jit, i = !!n.minify, a = n.optimize == null || n.optimize, o = Ve(n).parse(e);
	return r ? (a && qe(o), i && Ye(o), {
		ast: o,
		code: ""
	}) : (Ke(o, n), nt(o, n));
}
//#endregion
//#region node_modules/@intlify/core-base/dist/core-base.mjs
function it() {
	typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (S().__INTLIFY_PROD_DEVTOOLS__ = !1), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (S().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1);
}
function at(e) {
	return k(e) && ht(e) === 0 && (w(e, "b") || w(e, "body"));
}
var ot = ["b", "body"];
function st(e) {
	return St(e, ot);
}
var ct = ["c", "cases"];
function lt(e) {
	return St(e, ct, []);
}
var ut = ["s", "static"];
function dt(e) {
	return St(e, ut);
}
var ft = ["i", "items"];
function pt(e) {
	return St(e, ft, []);
}
var mt = ["t", "type"];
function ht(e) {
	return St(e, mt);
}
var gt = ["v", "value"];
function _t(e, t) {
	let n = St(e, gt);
	if (n != null) return n;
	throw wt(t);
}
var vt = ["m", "modifier"];
function yt(e) {
	return St(e, vt);
}
var bt = ["k", "key"];
function xt(e) {
	let t = St(e, bt);
	if (t) return t;
	throw wt(6);
}
function St(e, t, n) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (w(e, r) && e[r] != null) return e[r];
	}
	return n;
}
var Ct = [
	...ot,
	...ct,
	...ut,
	...ft,
	...bt,
	...vt,
	...gt,
	...mt
];
function wt(e) {
	return /* @__PURE__ */ Error(`unhandled node type: ${e}`);
}
function Tt(e) {
	return (t) => Et(t, e);
}
function Et(e, t) {
	let n = st(t);
	if (n == null) throw wt(0);
	if (ht(n) === 1) {
		let t = lt(n);
		return e.plural(t.reduce((t, n) => [...t, Dt(e, n)], []));
	}
	return Dt(e, n);
}
function Dt(e, t) {
	let n = dt(t);
	if (n != null) return e.type === "text" ? n : e.normalize([n]);
	{
		let n = pt(t).reduce((t, n) => [...t, Ot(e, n)], []);
		return e.normalize(n);
	}
}
function Ot(e, t) {
	let n = ht(t);
	switch (n) {
		case 3: return _t(t, n);
		case 9: return _t(t, n);
		case 4: {
			let r = t;
			if (w(r, "k") && r.k) return e.interpolate(e.named(r.k));
			if (w(r, "key") && r.key) return e.interpolate(e.named(r.key));
			throw wt(n);
		}
		case 5: {
			let r = t;
			if (w(r, "i") && m(r.i)) return e.interpolate(e.list(r.i));
			if (w(r, "index") && m(r.index)) return e.interpolate(e.list(r.index));
			throw wt(n);
		}
		case 6: {
			let n = t, r = yt(n), i = xt(n);
			return e.linked(Ot(e, i), r ? Ot(e, r) : void 0, e.type);
		}
		case 7: return _t(t, n);
		case 8: return _t(t, n);
		default: throw Error(`unhandled node on format message part: ${n}`);
	}
}
var kt = (e) => e, At = b();
function jt(e, t = {}) {
	let n = !1, r = t.onError || Ee;
	return t.onError = (e) => {
		n = !0, r(e);
	}, {
		...rt(e, t),
		detectError: n
	};
}
/* #__NO_SIDE_EFFECTS__ */
function Mt(e, t) {
	if (!__INTLIFY_DROP_MESSAGE_COMPILER__ && D(e)) {
		O(t.warnHtmlMessage) && t.warnHtmlMessage;
		let n = (t.onCacheKey || kt)(e), r = At[n];
		if (r) return r;
		let { ast: i, detectError: a } = jt(e, {
			...t,
			location: !1,
			jit: !0
		}), o = Tt(i);
		return a ? o : At[n] = o;
	}
	{
		let t = e.cacheKey;
		return t ? At[t] || (At[t] = Tt(e)) : Tt(e);
	}
}
var Nt = null;
function Pt(e) {
	Nt = e;
}
function Ft(e, t, n) {
	Nt && Nt.emit("i18n:init", {
		timestamp: Date.now(),
		i18n: e,
		version: t,
		meta: n
	});
}
var It = /* #__PURE__*/ Lt("function:translate");
function Lt(e) {
	return (t) => Nt && Nt.emit(e, t);
}
var Rt = {
	INVALID_ARGUMENT: 17,
	INVALID_DATE_ARGUMENT: 18,
	INVALID_ISO_DATE_ARGUMENT: 19,
	NOT_SUPPORT_NON_STRING_MESSAGE: 20,
	NOT_SUPPORT_LOCALE_PROMISE_VALUE: 21,
	NOT_SUPPORT_LOCALE_ASYNC_FUNCTION: 22,
	NOT_SUPPORT_LOCALE_TYPE: 23
};
function zt(e) {
	return Te(e, null, void 0);
}
Rt.INVALID_ARGUMENT, Rt.INVALID_DATE_ARGUMENT, Rt.INVALID_ISO_DATE_ARGUMENT, Rt.NOT_SUPPORT_NON_STRING_MESSAGE, Rt.NOT_SUPPORT_LOCALE_PROMISE_VALUE, Rt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION, Rt.NOT_SUPPORT_LOCALE_TYPE;
function Bt(e, t) {
	return t.locale == null ? Ht(e.locale) : Ht(t.locale);
}
var Vt;
function Ht(e) {
	if (D(e)) return e;
	if (E(e)) {
		if (e.resolvedOnce && Vt != null) return Vt;
		if (e.constructor.name === "Function") {
			let t = e();
			if (ee(t)) throw zt(Rt.NOT_SUPPORT_LOCALE_PROMISE_VALUE);
			return Vt = t;
		}
		throw zt(Rt.NOT_SUPPORT_LOCALE_ASYNC_FUNCTION);
	}
	throw zt(Rt.NOT_SUPPORT_LOCALE_TYPE);
}
function Ut(e, t, n) {
	return [.../* @__PURE__ */ new Set([n, ...T(t) ? t : k(t) ? Object.keys(t) : D(t) ? [t] : [n]])];
}
function Wt(e, t, n) {
	let r = D(n) ? n : sn, i = e;
	i.__localeChainCache ||= /* @__PURE__ */ new Map();
	let a = i.__localeChainCache.get(r);
	if (!a) {
		a = [];
		let e = [n];
		for (; T(e);) e = Gt(a, e, t);
		let o = T(t) || !A(t) ? t : t.default ? t.default : null;
		e = D(o) ? [o] : o, T(e) && Gt(a, e, !1), i.__localeChainCache.set(r, a);
	}
	return a;
}
function Gt(e, t, n) {
	let r = !0;
	for (let i = 0; i < t.length && O(r); i++) {
		let a = t[i];
		D(a) && (r = Kt(e, t[i], n));
	}
	return r;
}
function Kt(e, t, n) {
	let r, i = t.split("-");
	do
		r = qt(e, i.join("-"), n), i.splice(-1, 1);
	while (i.length && r === !0);
	return r;
}
function qt(e, t, n) {
	let r = !1;
	if (!e.includes(t) && (r = !0, t)) {
		r = t[t.length - 1] !== "!";
		let i = t.replace(/!/g, "");
		e.push(i), (T(n) || A(n)) && n[i] && (r = n[i]);
	}
	return r;
}
var Jt = [];
Jt[0] = {
	w: [0],
	i: [3, 0],
	"[": [4],
	o: [7]
}, Jt[1] = {
	w: [1],
	".": [2],
	"[": [4],
	o: [7]
}, Jt[2] = {
	w: [2],
	i: [3, 0],
	0: [3, 0]
}, Jt[3] = {
	i: [3, 0],
	0: [3, 0],
	w: [1, 1],
	".": [2, 1],
	"[": [4, 1],
	o: [7, 1]
}, Jt[4] = {
	"'": [5, 0],
	"\"": [6, 0],
	"[": [4, 2],
	"]": [1, 3],
	o: 8,
	l: [4, 0]
}, Jt[5] = {
	"'": [4, 0],
	o: 8,
	l: [5, 0]
}, Jt[6] = {
	"\"": [4, 0],
	o: 8,
	l: [6, 0]
};
var Yt = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
function Xt(e) {
	return Yt.test(e);
}
function Zt(e) {
	let t = e.charCodeAt(0);
	return t === e.charCodeAt(e.length - 1) && (t === 34 || t === 39) ? e.slice(1, -1) : e;
}
function Qt(e) {
	if (e == null) return "o";
	switch (e.charCodeAt(0)) {
		case 91:
		case 93:
		case 46:
		case 34:
		case 39: return e;
		case 95:
		case 36:
		case 45: return "i";
		case 9:
		case 10:
		case 13:
		case 160:
		case 65279:
		case 8232:
		case 8233: return "w";
	}
	return "i";
}
function $t(e) {
	let t = e.trim();
	return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : Xt(t) ? Zt(t) : "*" + t;
}
function en(e) {
	let t = [], n = -1, r = 0, i = 0, a, o, s, c, l, u, d, f = [];
	f[0] = () => {
		o === void 0 ? o = s : o += s;
	}, f[1] = () => {
		o !== void 0 && (t.push(o), o = void 0);
	}, f[2] = () => {
		f[0](), i++;
	}, f[3] = () => {
		if (i > 0) i--, r = 4, f[0]();
		else {
			if (i = 0, o === void 0 || (o = $t(o), o === !1)) return !1;
			f[1]();
		}
	};
	function p() {
		let t = e[n + 1];
		if (r === 5 && t === "'" || r === 6 && t === "\"") return n++, s = "\\" + t, f[0](), !0;
	}
	for (; r !== null;) if (n++, a = e[n], !(a === "\\" && p())) {
		if (c = Qt(a), d = Jt[r], l = d[c] || d.l || 8, l === 8 || (r = l[0], l[1] !== void 0 && (u = f[l[1]], u && (s = a, u() === !1)))) return;
		if (r === 7) return t;
	}
}
var tn = /* @__PURE__ */ new Map();
function nn(e, t) {
	return k(e) ? e[t] : null;
}
function rn(e, t) {
	if (!k(e)) return null;
	let n = tn.get(t);
	if (n || (n = en(t), n && tn.set(t, n)), !n) return null;
	let r = n.length, i = e, a = 0;
	for (; a < r;) {
		let e = n[a];
		if (Ct.includes(e) && at(i) || !k(i) || !w(i, e)) return null;
		let t = i[e];
		if (t === void 0 || E(i)) return null;
		i = t, a++;
	}
	return i;
}
var an = {
	NOT_FOUND_KEY: 1,
	FALLBACK_TO_TRANSLATE: 2,
	CANNOT_FORMAT_NUMBER: 3,
	FALLBACK_TO_NUMBER_FORMAT: 4,
	CANNOT_FORMAT_DATE: 5,
	FALLBACK_TO_DATE_FORMAT: 6,
	EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER: 7,
	INVALID_NUMBER_ARGUMENT: 8,
	INVALID_DATE_ARGUMENT: 9
};
an.NOT_FOUND_KEY, an.FALLBACK_TO_TRANSLATE, an.CANNOT_FORMAT_NUMBER, an.FALLBACK_TO_NUMBER_FORMAT, an.CANNOT_FORMAT_DATE, an.FALLBACK_TO_DATE_FORMAT, an.EXPERIMENTAL_CUSTOM_MESSAGE_COMPILER, an.INVALID_NUMBER_ARGUMENT, an.INVALID_DATE_ARGUMENT;
var on = "11.4.8", sn = "en-US", cn = (e) => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;
function ln() {
	return {
		upper: (e, t) => t === "text" && D(e) ? e.toUpperCase() : t === "vnode" && k(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
		lower: (e, t) => t === "text" && D(e) ? e.toLowerCase() : t === "vnode" && k(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
		capitalize: (e, t) => t === "text" && D(e) ? cn(e) : t === "vnode" && k(e) && "__v_isVNode" in e ? cn(e.children) : e
	};
}
var un;
function dn(e) {
	un = e;
}
var fn;
function pn(e) {
	fn = e;
}
var mn;
function hn(e) {
	mn = e;
}
var gn = null, _n = /* @__NO_SIDE_EFFECTS__ */ () => gn, vn = null, yn = (e) => {
	vn = e;
}, bn = () => vn, xn = 0;
function Sn(e = {}) {
	let t = E(e.onWarn) ? e.onWarn : ie, n = D(e.version) ? e.version : on, r = D(e.locale) || E(e.locale) ? e.locale : sn, i = E(r) ? sn : r, a = T(e.fallbackLocale) || A(e.fallbackLocale) || D(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : i, o = A(e.messages) ? e.messages : Cn(i), s = A(e.datetimeFormats) ? e.datetimeFormats : Cn(i), c = A(e.numberFormats) ? e.numberFormats : Cn(i), l = v(b(), e.modifiers, ln()), u = e.pluralRules || b(), d = E(e.missing) ? e.missing : null, f = O(e.missingWarn) || g(e.missingWarn) ? e.missingWarn : !0, p = O(e.fallbackWarn) || g(e.fallbackWarn) ? e.fallbackWarn : !0, m = !!e.fallbackFormat, h = !!e.unresolving, _ = E(e.postTranslation) ? e.postTranslation : null, y = A(e.processor) ? e.processor : null, x = !O(e.warnHtmlMessage) || e.warnHtmlMessage, S = !!e.escapeParameter, C = E(e.messageCompiler) ? e.messageCompiler : un, w = E(e.messageResolver) ? e.messageResolver : fn || nn, ee = E(e.localeFallbacker) ? e.localeFallbacker : mn || Ut, te = k(e.fallbackContext) ? e.fallbackContext : void 0, ne = e, j = k(ne.__datetimeFormatters) ? ne.__datetimeFormatters : /* @__PURE__ */ new Map(), re = k(ne.__numberFormatters) ? ne.__numberFormatters : /* @__PURE__ */ new Map(), ae = k(ne.__meta) ? ne.__meta : {};
	xn++;
	let oe = {
		version: n,
		cid: xn,
		locale: r,
		fallbackLocale: a,
		messages: o,
		modifiers: l,
		pluralRules: u,
		missing: d,
		missingWarn: f,
		fallbackWarn: p,
		fallbackFormat: m,
		unresolving: h,
		postTranslation: _,
		processor: y,
		warnHtmlMessage: x,
		escapeParameter: S,
		messageCompiler: C,
		messageResolver: w,
		localeFallbacker: ee,
		fallbackContext: te,
		onWarn: t,
		__meta: ae
	};
	return oe.datetimeFormats = s, oe.numberFormats = c, oe.__datetimeFormatters = j, oe.__numberFormatters = re, __INTLIFY_PROD_DEVTOOLS__ && Ft(oe, n, ae), oe;
}
var Cn = (e) => ({ [e]: b() });
function wn(e, t, n, r, i) {
	let { missing: a, onWarn: o } = e;
	if (a !== null) {
		let r = a(e, n, t, i);
		return D(r) ? r : t;
	}
	return t;
}
function Tn(e, t, n) {
	let r = e;
	r.__localeChainCache = /* @__PURE__ */ new Map(), e.localeFallbacker(e, n, t);
}
function En(e, t) {
	return e !== t && e.split("-")[0] === t.split("-")[0];
}
function Dn(e, t) {
	let n = t.indexOf(e);
	if (n === -1) return !1;
	for (let r = n + 1; r < t.length; r++) if (En(e, t[r])) return !0;
	return !1;
}
function On(e, t, n, r, i, a, o) {
	let { fallbackLocale: s, localeFallbacker: c, onWarn: l } = e, u = c(e, s, n);
	for (let n = 0; n < u.length; n++) {
		let a = u[n], s = (r[a] || {})[t];
		if (A(s) && D(a)) return a;
		wn(e, t, a, i, o);
	}
	return null;
}
function kn(e, t, n) {
	let r = `${e}__${t}`;
	return A(n) && !_(n) && (r = `${r}__${JSON.stringify(n)}`), r;
}
function An(e, t, n) {
	for (let r in n) {
		let n = `${t}__${r}`;
		for (let t of e.keys()) (t === n || t.startsWith(`${n}__`)) && e.delete(t);
	}
}
function jn(e, t, n, r) {
	let [, i, a, o] = e, s = n;
	return D(i) ? t.key = i : A(i) && Object.keys(i).forEach((e) => {
		r.includes(e) ? s[e] = i[e] : t[e] = i[e];
	}), D(a) ? t.locale = a : A(a) && (s = a), A(o) && (s = o), s;
}
var Mn = typeof Intl < "u";
Mn && Intl.DateTimeFormat, Mn && Intl.NumberFormat;
function Nn(e, ...t) {
	let { datetimeFormats: n, unresolving: r, onWarn: i } = e, { __datetimeFormatters: a } = e;
	if (!D(t[0]) && !h(t[0]) && !m(t[0])) return "";
	let [o, s, c, l] = Fn(...t), u = O(c.missingWarn) ? c.missingWarn : e.missingWarn, d = O(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = !!c.part, p = Bt(e, c);
	if (!D(o) || o === "") {
		let e = new Intl.DateTimeFormat(p.replace(/!/g, ""), l);
		return f ? e.formatToParts(s) : e.format(s);
	}
	let g = On(e, o, p, n, u, d, "datetime format");
	if (!D(g)) return r ? -1 : o;
	let _ = n[g][o], y = kn(g, o, l), b = a.get(y);
	return b || (b = new Intl.DateTimeFormat(g, v({}, _, l)), a.set(y, b)), f ? b.formatToParts(s) : b.format(s);
}
var Pn = [
	"localeMatcher",
	"weekday",
	"era",
	"year",
	"month",
	"day",
	"hour",
	"minute",
	"second",
	"timeZoneName",
	"formatMatcher",
	"hour12",
	"timeZone",
	"dateStyle",
	"timeStyle",
	"calendar",
	"dayPeriod",
	"numberingSystem",
	"hourCycle",
	"fractionalSecondDigits"
];
function Fn(...e) {
	let [t] = e, n = b(), r = b(), i;
	if (D(t)) {
		let e = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
		if (!e) throw zt(Rt.INVALID_ISO_DATE_ARGUMENT);
		let n = e[3] ? e[3].trim().startsWith("T") ? `${e[1].trim()}${e[3].trim()}` : `${e[1].trim()}T${e[3].trim()}` : e[1].trim();
		i = new Date(n);
		try {
			i.toISOString();
		} catch {
			throw zt(Rt.INVALID_ISO_DATE_ARGUMENT);
		}
	} else if (h(t)) {
		if (isNaN(t.getTime())) throw zt(Rt.INVALID_DATE_ARGUMENT);
		i = t;
	} else if (m(t)) i = t;
	else throw zt(Rt.INVALID_ARGUMENT);
	let a = jn(e, n, r, Pn);
	return [
		n.key || "",
		i,
		n,
		a
	];
}
function In(e, t, n) {
	An(e.__datetimeFormatters, t, n);
}
function Ln(e, ...t) {
	let { numberFormats: n, unresolving: r, onWarn: i } = e, { __numberFormatters: a } = e;
	if (!m(t[0])) return "";
	let [o, s, c, l] = zn(...t), u = O(c.missingWarn) ? c.missingWarn : e.missingWarn, d = O(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, f = !!c.part, p = Bt(e, c);
	if (!D(o) || o === "") {
		let e = new Intl.NumberFormat(p.replace(/!/g, ""), l);
		return f ? e.formatToParts(s) : e.format(s);
	}
	let h = On(e, o, p, n, u, d, "number format");
	if (!D(h)) return r ? -1 : o;
	let g = n[h][o], _ = kn(h, o, l), y = a.get(_);
	return y || (y = new Intl.NumberFormat(h, v({}, g, l)), a.set(_, y)), f ? y.formatToParts(s) : y.format(s);
}
var Rn = [
	"localeMatcher",
	"style",
	"currency",
	"currencyDisplay",
	"currencySign",
	"useGrouping",
	"minimumIntegerDigits",
	"minimumFractionDigits",
	"maximumFractionDigits",
	"minimumSignificantDigits",
	"maximumSignificantDigits",
	"compactDisplay",
	"notation",
	"signDisplay",
	"unit",
	"unitDisplay",
	"roundingMode",
	"roundingPriority",
	"roundingIncrement",
	"trailingZeroDisplay"
];
function zn(...e) {
	let [t] = e, n = b(), r = b();
	if (!m(t)) throw zt(Rt.INVALID_ARGUMENT);
	let i = t, a = jn(e, n, r, Rn);
	return [
		n.key || "",
		i,
		n,
		a
	];
}
function Bn(e, t, n) {
	An(e.__numberFormatters, t, n);
}
var Vn = (e) => e, Hn = (e) => "", Un = "text", Wn = (e) => e.length === 0 ? "" : re(e), Gn = j;
function Kn(e, t) {
	return e = Math.abs(e), t === 2 ? e === 1 ? 0 : 1 : Math.min(e, 2);
}
function qn(e) {
	let t = m(e.pluralIndex) ? e.pluralIndex : -1;
	return m(e.named?.count) ? e.named.count : m(e.named?.n) ? e.named.n : t;
}
function Jn(e = {}) {
	let t = e.locale, n = qn(e), r = D(t) && E(e.pluralRules?.[t]) ? e.pluralRules[t] : Kn, i = r === Kn ? void 0 : Kn, a = (e) => e[r(n, e.length, i)], o = e.list || [], s = (e) => o[e], c = e.named || b();
	m(e.pluralIndex) && (c.count ||= e.pluralIndex, c.n ||= e.pluralIndex);
	let l = (e) => c[e];
	function u(t, n) {
		return (E(e.messages) ? e.messages(t, !!n) : k(e.messages) ? e.messages[t] : !1) || (e.parent ? e.parent.message(t) : Hn);
	}
	let d = (t) => e.modifiers ? e.modifiers[t] : Vn, f = E(e.processor?.normalize) ? e.processor.normalize : Wn, p = E(e.processor?.interpolate) ? e.processor.interpolate : Gn, h = {
		list: s,
		named: l,
		plural: a,
		linked: (e, ...t) => {
			let [n, r] = t, i = "text", a = "";
			t.length === 1 ? k(n) ? (a = n.modifier || a, i = n.type || i) : D(n) && (a = n || a) : t.length === 2 && (D(n) && (a = n || a), D(r) && (i = r || i));
			let o = u(e, !0)(h), s = o === "" || o === void 0 ? e : o, c = i === "vnode" && T(s) && a ? s[0] : s;
			return a ? d(a)(c, i) : c;
		},
		message: u,
		type: D(e.processor?.type) ? e.processor.type : Un,
		interpolate: p,
		normalize: f,
		values: v(b(), o, c)
	};
	return h;
}
var Yn = () => "", Xn = (e) => E(e);
function Zn(e, ...t) {
	let { fallbackFormat: n, postTranslation: r, unresolving: i, messageCompiler: a, fallbackLocale: o, messages: s } = e, [c, l] = nr(...t), u = O(l.missingWarn) ? l.missingWarn : e.missingWarn, d = O(l.fallbackWarn) ? l.fallbackWarn : e.fallbackWarn, f = O(l.escapeParameter) ? l.escapeParameter : e.escapeParameter, p = !!l.resolvedMessage, m = D(l.default) || O(l.default) ? O(l.default) ? a ? c : () => c : l.default : n ? a ? c : () => c : null, h = n || m != null && (D(m) || E(m)), g = Bt(e, l);
	f && Qn(l);
	let [_, y, x] = p ? [
		c,
		g,
		s[g] || b()
	] : $n(e, c, g, o, d, u), S = _, C = c;
	if (!p && !(D(S) || at(S) || Xn(S)) && h && (S = m, C = S), !p && (!(D(S) || at(S) || Xn(S)) || !D(y))) return i ? -1 : c;
	let w = !1, T = Xn(S) ? S : er(e, c, y, S, C, () => {
		w = !0;
	});
	if (w) return S;
	let k = tr(e, T, Jn(ir(e, y, x, l))), ee = r ? r(k, c) : k;
	if (f && D(ee) && (ee = be(ee)), __INTLIFY_PROD_DEVTOOLS__) {
		let t = {
			timestamp: Date.now(),
			key: D(c) ? c : Xn(S) ? S.key : "",
			locale: y || (Xn(S) ? S.locale : ""),
			format: D(S) ? S : Xn(S) ? S.source : "",
			message: ee
		};
		t.meta = v({}, e.__meta, /* @__PURE__ */ _n() || {}), It(t);
	}
	return ee;
}
function Qn(e) {
	T(e.list) ? e.list = e.list.map((e) => D(e) ? ae(e) : e) : k(e.named) && Object.keys(e.named).forEach((t) => {
		D(e.named[t]) && (e.named[t] = ae(e.named[t]));
	});
}
function $n(e, t, n, r, i, a) {
	let { messages: o, onWarn: s, messageResolver: c, localeFallbacker: l } = e, u = l(e, r, n), d = b(), f, p = null;
	for (let n = 0; n < u.length && (f = u[n], d = o[f] || b(), (p = c(d, t)) === null && (p = d[t]), !(D(p) || at(p) || Xn(p))); n++) if (!Dn(f, u)) {
		let n = wn(e, t, f, a, "translate");
		n !== t && (p = n);
	}
	return [
		p,
		f,
		d
	];
}
function er(e, t, n, r, i, a) {
	let { messageCompiler: o, warnHtmlMessage: s } = e;
	if (Xn(r)) {
		let e = r;
		return e.locale = e.locale || n, e.key = e.key || t, e;
	}
	if (o == null) {
		let e = (() => r);
		return e.locale = n, e.key = t, e;
	}
	let c = o(r, rr(e, n, i, r, s, a));
	return c.locale = n, c.key = t, c.source = r, c;
}
function tr(e, t, n) {
	return t(n);
}
function nr(...e) {
	let [t, n, r] = e, i = b();
	if (!D(t) && !m(t) && !Xn(t) && !at(t)) throw zt(Rt.INVALID_ARGUMENT);
	let a = m(t) ? String(t) : (Xn(t), t);
	return m(n) ? i.plural = n : D(n) ? i.default = n : A(n) && !_(n) ? i.named = n : T(n) && (i.list = n), m(r) ? i.plural = r : D(r) ? i.default = r : A(r) && v(i, r), [a, i];
}
function rr(e, t, n, r, i, a) {
	return {
		locale: t,
		key: n,
		warnHtmlMessage: i,
		onError: (e) => {
			throw a && a(e), e;
		},
		onCacheKey: (e) => f(t, n, e)
	};
}
function ir(e, t, n, r) {
	let { modifiers: i, pluralRules: a, messageResolver: o, fallbackLocale: s, fallbackWarn: c, missingWarn: l, fallbackContext: u } = e, d = {
		locale: t,
		modifiers: i,
		pluralRules: a,
		messages: (r, i) => {
			let a = o(n, r);
			if (a == null && (u || i)) {
				let [n, , i] = $n(u || e, r, t, s, c, l);
				a = n ?? o(i, r);
			}
			if (D(a) || at(a)) {
				let n = !1, i = er(e, r, t, a, r, () => {
					n = !0;
				});
				return n ? Yn : i;
			}
			return Xn(a) ? a : Yn;
		}
	};
	return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), m(r.plural) && (d.pluralIndex = r.plural), d;
}
it();
//#endregion
//#region node_modules/@vue/shared/dist/shared.esm-bundler.js
// @__NO_SIDE_EFFECTS__
function ar(e) {
	let t = /* @__PURE__ */ Object.create(null);
	for (let n of e.split(",")) t[n] = 1;
	return (e) => e in t;
}
var P = {}, or = [], sr = () => {}, cr = () => !1, lr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && (e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ur = (e) => e.startsWith("onUpdate:"), F = Object.assign, dr = (e, t) => {
	let n = e.indexOf(t);
	n > -1 && e.splice(n, 1);
}, fr = Object.prototype.hasOwnProperty, I = (e, t) => fr.call(e, t), L = Array.isArray, pr = (e) => br(e) === "[object Map]", mr = (e) => br(e) === "[object Set]", hr = (e) => br(e) === "[object Date]", gr = (e) => br(e) === "[object RegExp]", R = (e) => typeof e == "function", z = (e) => typeof e == "string", _r = (e) => typeof e == "symbol", B = (e) => typeof e == "object" && !!e, vr = (e) => (B(e) || R(e)) && R(e.then) && R(e.catch), yr = Object.prototype.toString, br = (e) => yr.call(e), xr = (e) => br(e).slice(8, -1), Sr = (e) => br(e) === "[object Object]", Cr = (e) => z(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, wr = /* @__PURE__ */ ar(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"), Tr = (e) => {
	let t = /* @__PURE__ */ Object.create(null);
	return ((n) => t[n] || (t[n] = e(n)));
}, Er = /-\w/g, V = Tr((e) => e.replace(Er, (e) => e.slice(1).toUpperCase())), Dr = /\B([A-Z])/g, Or = Tr((e) => e.replace(Dr, "-$1").toLowerCase()), kr = Tr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ar = Tr((e) => e ? `on${kr(e)}` : ""), H = (e, t) => !Object.is(e, t), jr = (e, ...t) => {
	for (let n = 0; n < e.length; n++) e[n](...t);
}, Mr = (e, t, n, r = !1) => {
	Object.defineProperty(e, t, {
		configurable: !0,
		enumerable: !1,
		writable: r,
		value: n
	});
}, Nr = (e) => {
	let t = parseFloat(e);
	return isNaN(t) ? e : t;
}, Pr = (e) => {
	let t = z(e) ? Number(e) : NaN;
	return isNaN(t) ? e : t;
}, Fr, Ir = () => Fr ||= typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}, Lr = /* @__PURE__ */ ar("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol");
function Rr(e) {
	if (L(e)) {
		let t = {};
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = z(r) ? Hr(r) : Rr(r);
			if (i) for (let e in i) t[e] = i[e];
		}
		return t;
	}
	if (z(e) || B(e)) return e;
}
var zr = /;(?![^(]*\))/g, Br = /:([^]+)/, Vr = /\/\*[^]*?\*\//g;
function Hr(e) {
	let t = {};
	return e.replace(Vr, "").split(zr).forEach((e) => {
		if (e) {
			let n = e.split(Br);
			n.length > 1 && (t[n[0].trim()] = n[1].trim());
		}
	}), t;
}
function Ur(e) {
	if (!e) return "";
	if (z(e)) return e;
	let t = "";
	for (let n in e) {
		let r = e[n];
		if (z(r) || typeof r == "number") {
			let e = n.startsWith("--") ? n : Or(n);
			t += `${e}:${r};`;
		}
	}
	return t;
}
function Wr(e) {
	let t = "";
	if (z(e)) t = e;
	else if (L(e)) for (let n = 0; n < e.length; n++) {
		let r = Wr(e[n]);
		r && (t += r + " ");
	}
	else if (B(e)) for (let n in e) e[n] && (t += n + " ");
	return t.trim();
}
function Gr(e) {
	if (!e) return null;
	let { class: t, style: n } = e;
	return t && !z(t) && (e.class = Wr(t)), n && (e.style = Rr(n)), e;
}
var Kr = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", qr = /* @__PURE__ */ ar(Kr), Jr = /* @__PURE__ */ ar(Kr + ",async,autofocus,autoplay,controls,default,defer,disabled,inert,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected");
function Yr(e) {
	return !!e || e === "";
}
var Xr = /* @__PURE__ */ ar("accept,accept-charset,accesskey,action,align,allow,alt,async,autocapitalize,autocomplete,autofocus,autoplay,background,bgcolor,border,buffered,capture,challenge,charset,checked,cite,class,code,codebase,color,cols,colspan,content,contenteditable,contextmenu,controls,coords,crossorigin,csp,data,datetime,decoding,default,defer,dir,dirname,disabled,download,draggable,dropzone,enctype,enterkeyhint,for,form,formaction,formenctype,formmethod,formnovalidate,formtarget,headers,height,hidden,high,href,hreflang,http-equiv,icon,id,importance,inert,integrity,ismap,itemprop,keytype,kind,label,lang,language,loading,list,loop,low,manifest,max,maxlength,minlength,media,min,multiple,muted,name,novalidate,open,optimum,pattern,ping,placeholder,poster,preload,radiogroup,readonly,referrerpolicy,rel,required,reversed,rows,rowspan,sandbox,scope,scoped,selected,shape,size,sizes,slot,span,spellcheck,src,srcdoc,srclang,srcset,start,step,style,summary,tabindex,target,title,translate,type,usemap,value,width,wrap"), Zr = /* @__PURE__ */ ar("xmlns,accent-height,accumulate,additive,alignment-baseline,alphabetic,amplitude,arabic-form,ascent,attributeName,attributeType,azimuth,baseFrequency,baseline-shift,baseProfile,bbox,begin,bias,by,calcMode,cap-height,class,clip,clipPathUnits,clip-path,clip-rule,color,color-interpolation,color-interpolation-filters,color-profile,color-rendering,contentScriptType,contentStyleType,crossorigin,cursor,cx,cy,d,decelerate,descent,diffuseConstant,direction,display,divisor,dominant-baseline,dur,dx,dy,edgeMode,elevation,enable-background,end,exponent,fill,fill-opacity,fill-rule,filter,filterRes,filterUnits,flood-color,flood-opacity,font-family,font-size,font-size-adjust,font-stretch,font-style,font-variant,font-weight,format,from,fr,fx,fy,g1,g2,glyph-name,glyph-orientation-horizontal,glyph-orientation-vertical,glyphRef,gradientTransform,gradientUnits,hanging,height,href,hreflang,horiz-adv-x,horiz-origin-x,id,ideographic,image-rendering,in,in2,intercept,k,k1,k2,k3,k4,kernelMatrix,kernelUnitLength,kerning,keyPoints,keySplines,keyTimes,lang,lengthAdjust,letter-spacing,lighting-color,limitingConeAngle,local,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mask,maskContentUnits,maskUnits,mathematical,max,media,method,min,mode,name,numOctaves,offset,opacity,operator,order,orient,orientation,origin,overflow,overline-position,overline-thickness,panose-1,paint-order,path,pathLength,patternContentUnits,patternTransform,patternUnits,ping,pointer-events,points,pointsAtX,pointsAtY,pointsAtZ,preserveAlpha,preserveAspectRatio,primitiveUnits,r,radius,referrerPolicy,refX,refY,rel,rendering-intent,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,result,rotate,rx,ry,scale,seed,shape-rendering,slope,spacing,specularConstant,specularExponent,speed,spreadMethod,startOffset,stdDeviation,stemh,stemv,stitchTiles,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,string,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,style,surfaceScale,systemLanguage,tabindex,tableValues,target,targetX,targetY,text-anchor,text-decoration,text-rendering,textLength,to,transform,transform-origin,type,u1,u2,underline-position,underline-thickness,unicode,unicode-bidi,unicode-range,units-per-em,v-alphabetic,v-hanging,v-ideographic,v-mathematical,values,vector-effect,version,vert-adv-y,vert-origin-x,vert-origin-y,viewBox,viewTarget,visibility,width,widths,word-spacing,writing-mode,x,x-height,x1,x2,xChannelSelector,xlink:actuate,xlink:arcrole,xlink:href,xlink:role,xlink:show,xlink:title,xlink:type,xmlns:xlink,xml:base,xml:lang,xml:space,y,y1,y2,yChannelSelector,z,zoomAndPan");
function Qr(e) {
	if (e == null) return !1;
	let t = typeof e;
	return t === "string" || t === "number" || t === "boolean";
}
var $r = /[ !"#$%&'()*+,./:;<=>?@[\\\]^`{|}~]/g;
function ei(e, t) {
	return e.replace($r, (e) => t ? e === "\"" ? "\\\\\\\"" : `\\\\${e}` : `\\${e}`);
}
function ti(e, t) {
	if (e.length !== t.length) return !1;
	let n = !0;
	for (let r = 0; n && r < e.length; r++) n = ni(e[r], t[r]);
	return n;
}
function ni(e, t) {
	if (e === t) return !0;
	let n = hr(e), r = hr(t);
	if (n || r) return n && r ? e.getTime() === t.getTime() : !1;
	if (n = _r(e), r = _r(t), n || r) return e === t;
	if (n = L(e), r = L(t), n || r) return n && r ? ti(e, t) : !1;
	if (n = B(e), r = B(t), n || r) {
		if (!n || !r || Object.keys(e).length !== Object.keys(t).length) return !1;
		for (let n in e) {
			let r = e.hasOwnProperty(n), i = t.hasOwnProperty(n);
			if (r && !i || !r && i || !ni(e[n], t[n])) return !1;
		}
	}
	return String(e) === String(t);
}
function ri(e, t) {
	return e.findIndex((e) => ni(e, t));
}
var ii = (e) => !!(e && e.__v_isRef === !0), ai = (e) => z(e) ? e : e == null ? "" : L(e) || B(e) && (e.toString === yr || !R(e.toString)) ? ii(e) ? ai(e.value) : JSON.stringify(e, oi, 2) : String(e), oi = (e, t) => ii(t) ? oi(e, t.value) : pr(t) ? { [`Map(${t.size})`]: [...t.entries()].reduce((e, [t, n], r) => (e[si(t, r) + " =>"] = n, e), {}) } : mr(t) ? { [`Set(${t.size})`]: [...t.values()].map((e) => si(e)) } : _r(t) ? si(t) : B(t) && !L(t) && !Sr(t) ? String(t) : t, si = (e, t = "") => _r(e) ? `Symbol(${e.description ?? t})` : e;
function ci(e) {
	return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
//#endregion
//#region node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var U, li = class {
	constructor(e = !1) {
		this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && U && (U.active ? (this.parent = U, this.index = (U.scopes || (U.scopes = [])).push(this) - 1) : (this._active = !1, this._warnOnRun = !1));
	}
	get active() {
		return this._active;
	}
	pause() {
		if (this._active) {
			this._isPaused = !0;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].pause();
			}
			for (e = 0, t = this.effects.length; e < t; e++) this.effects[e].pause();
		}
	}
	resume() {
		if (this._active && this._isPaused) {
			this._isPaused = !1;
			let e, t;
			if (this.scopes) {
				let n = this.scopes.slice();
				for (e = 0, t = n.length; e < t; e++) n[e].resume();
			}
			let n = this.effects.slice();
			for (e = 0, t = n.length; e < t; e++) n[e].resume();
		}
	}
	run(e) {
		if (this._active) {
			let t = U;
			try {
				return U = this, e();
			} finally {
				U = t;
			}
		}
	}
	on() {
		++this._on === 1 && (this.prevScope = U, U = this);
	}
	off() {
		if (this._on > 0 && --this._on === 0) {
			if (U === this) U = this.prevScope;
			else {
				let e = U;
				for (; e;) {
					if (e.prevScope === this) {
						e.prevScope = this.prevScope;
						break;
					}
					e = e.prevScope;
				}
			}
			this.prevScope = void 0;
		}
	}
	stop(e) {
		if (this._active) {
			this._active = !1;
			let t, n;
			for (t = 0, n = this.effects.length; t < n; t++) this.effects[t].stop();
			for (this.effects.length = 0, t = 0, n = this.cleanups.length; t < n; t++) this.cleanups[t]();
			if (this.cleanups.length = 0, this.scopes) {
				let e = this.scopes.slice();
				for (t = 0, n = e.length; t < n; t++) e[t].stop(!0);
				this.scopes.length = 0;
			}
			if (!this.detached && this.parent && !e) {
				let e = this.parent.scopes.pop();
				e && e !== this && (this.parent.scopes[this.index] = e, e.index = this.index);
			}
			this.parent = void 0;
		}
	}
};
function ui(e) {
	return new li(e);
}
function di() {
	return U;
}
function fi(e, t = !1) {
	U && U.cleanups.push(e);
}
var W, pi = /* @__PURE__ */ new WeakSet(), mi = class {
	constructor(e) {
		this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, U && (U.active ? U.effects.push(this) : this.flags &= -2);
	}
	pause() {
		this.flags |= 64;
	}
	resume() {
		this.flags & 64 && (this.flags &= -65, pi.has(this) && (pi.delete(this), this.trigger()));
	}
	notify() {
		this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vi(this);
	}
	run() {
		if (!(this.flags & 1)) return this.fn();
		this.flags |= 2, Ni(this), xi(this);
		let e = W, t = ki;
		W = this, ki = !0;
		try {
			return this.fn();
		} finally {
			Si(this), W = e, ki = t, this.flags &= -3;
		}
	}
	stop() {
		if (this.flags & 1) {
			for (let e = this.deps; e; e = e.nextDep) Ti(e);
			this.deps = this.depsTail = void 0, Ni(this), this.onStop && this.onStop(), this.flags &= -2;
		}
	}
	trigger() {
		this.flags & 64 ? pi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
	}
	runIfDirty() {
		Ci(this) && this.run();
	}
	get dirty() {
		return Ci(this);
	}
}, hi = 0, gi, _i;
function vi(e, t = !1) {
	if (e.flags |= 8, t) {
		e.next = _i, _i = e;
		return;
	}
	e.next = gi, gi = e;
}
function yi() {
	hi++;
}
function bi() {
	if (--hi > 0) return;
	if (_i) {
		let e = _i;
		for (_i = void 0; e;) {
			let t = e.next;
			e.next = void 0, e.flags &= -9, e = t;
		}
	}
	let e;
	for (; gi;) {
		let t = gi;
		for (gi = void 0; t;) {
			let n = t.next;
			if (t.next = void 0, t.flags &= -9, t.flags & 1) try {
				t.trigger();
			} catch (t) {
				e ||= t;
			}
			t = n;
		}
	}
	if (e) throw e;
}
function xi(e) {
	for (let t = e.deps; t; t = t.nextDep) t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Si(e) {
	let t, n = e.depsTail, r = n;
	for (; r;) {
		let e = r.prevDep;
		r.version === -1 ? (r === n && (n = e), Ti(r), Ei(r)) : t = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = e;
	}
	e.deps = t, e.depsTail = n;
}
function Ci(e) {
	for (let t = e.deps; t; t = t.nextDep) if (t.dep.version !== t.version || t.dep.computed && (wi(t.dep.computed) || t.dep.version !== t.version)) return !0;
	return !!e._dirty;
}
function wi(e) {
	if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Pi) || (e.globalVersion = Pi, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ci(e)))) return;
	e.flags |= 2;
	let t = e.dep, n = W, r = ki;
	W = e, ki = !0;
	try {
		xi(e);
		let n = e.fn(e._value);
		(t.version === 0 || H(n, e._value)) && (e.flags |= 128, e._value = n, t.version++);
	} catch (e) {
		throw t.version++, e;
	} finally {
		W = n, ki = r, Si(e), e.flags &= -3;
	}
}
function Ti(e, t = !1) {
	let { dep: n, prevSub: r, nextSub: i } = e;
	if (r && (r.nextSub = i, e.prevSub = void 0), i && (i.prevSub = r, e.nextSub = void 0), n.subs === e && (n.subs = r, !r && n.computed)) {
		n.computed.flags &= -5;
		for (let e = n.computed.deps; e; e = e.nextDep) Ti(e, !0);
	}
	!t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ei(e) {
	let { prevDep: t, nextDep: n } = e;
	t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
function Di(e, t) {
	e.effect instanceof mi && (e = e.effect.fn);
	let n = new mi(e);
	t && F(n, t);
	try {
		n.run();
	} catch (e) {
		throw n.stop(), e;
	}
	let r = n.run.bind(n);
	return r.effect = n, r;
}
function Oi(e) {
	e.effect.stop();
}
var ki = !0, Ai = [];
function ji() {
	Ai.push(ki), ki = !1;
}
function Mi() {
	let e = Ai.pop();
	ki = e === void 0 || e;
}
function Ni(e) {
	let { cleanup: t } = e;
	if (e.cleanup = void 0, t) {
		let e = W;
		W = void 0;
		try {
			t();
		} finally {
			W = e;
		}
	}
}
var Pi = 0, Fi = class {
	constructor(e, t) {
		this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
	}
}, Ii = class {
	constructor(e) {
		this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
	}
	track(e) {
		if (!W || !ki || W === this.computed) return;
		let t = this.activeLink;
		if (t === void 0 || t.sub !== W) t = this.activeLink = new Fi(W, this), W.deps ? (t.prevDep = W.depsTail, W.depsTail.nextDep = t, W.depsTail = t) : W.deps = W.depsTail = t, Li(t);
		else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
			let e = t.nextDep;
			e.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = e), t.prevDep = W.depsTail, t.nextDep = void 0, W.depsTail.nextDep = t, W.depsTail = t, W.deps === t && (W.deps = e);
		}
		return t;
	}
	trigger(e) {
		this.version++, Pi++, this.notify(e);
	}
	notify(e) {
		yi();
		try {
			for (let e = this.subs; e; e = e.prevSub) e.sub.notify() && e.sub.dep.notify();
		} finally {
			bi();
		}
	}
};
function Li(e) {
	if (e.dep.sc++, e.sub.flags & 4) {
		let t = e.dep.computed;
		if (t && !e.dep.subs) {
			t.flags |= 20;
			for (let e = t.deps; e; e = e.nextDep) Li(e);
		}
		let n = e.dep.subs;
		n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
	}
}
var Ri = /* @__PURE__ */ new WeakMap(), zi = /* @__PURE__ */ Symbol(""), Bi = /* @__PURE__ */ Symbol(""), Vi = /* @__PURE__ */ Symbol("");
function Hi(e, t, n) {
	if (ki && W) {
		let t = Ri.get(e);
		t || Ri.set(e, t = /* @__PURE__ */ new Map());
		let r = t.get(n);
		r || (t.set(n, r = new Ii()), r.map = t, r.key = n), r.track();
	}
}
function Ui(e, t, n, r, i, a) {
	let o = Ri.get(e);
	if (!o) {
		Pi++;
		return;
	}
	let s = (e) => {
		e && e.trigger();
	};
	if (yi(), t === "clear") o.forEach(s);
	else {
		let i = L(e), a = i && Cr(n);
		if (i && n === "length") {
			let e = Number(r);
			o.forEach((t, n) => {
				(n === "length" || n === Vi || !_r(n) && n >= e) && s(t);
			});
		} else switch ((n !== void 0 || o.has(void 0)) && s(o.get(n)), a && s(o.get(Vi)), t) {
			case "add":
				i ? a && s(o.get("length")) : (s(o.get(zi)), pr(e) && s(o.get(Bi)));
				break;
			case "delete":
				i || (s(o.get(zi)), pr(e) && s(o.get(Bi)));
				break;
			case "set": pr(e) && s(o.get(zi));
		}
	}
	bi();
}
function Wi(e, t) {
	let n = Ri.get(e);
	return n && n.get(t);
}
function Gi(e) {
	let t = /* @__PURE__ */ G(e);
	return t === e ? t : (Hi(t, "iterate", Vi), /* @__PURE__ */ Na(e) ? t : t.map(Ia));
}
function Ki(e) {
	return Hi(e = /* @__PURE__ */ G(e), "iterate", Vi), e;
}
function qi(e, t) {
	return /* @__PURE__ */ Ma(e) ? La(/* @__PURE__ */ ja(e) ? Ia(t) : t) : Ia(t);
}
var Ji = {
	__proto__: null,
	[Symbol.iterator]() {
		return Yi(this, Symbol.iterator, (e) => qi(this, e));
	},
	concat(...e) {
		return Gi(this).concat(...e.map((e) => L(e) ? Gi(e) : e));
	},
	entries() {
		return Yi(this, "entries", (e) => (e[1] = qi(this, e[1]), e));
	},
	every(e, t) {
		return Zi(this, "every", e, t, void 0, arguments);
	},
	filter(e, t) {
		return Zi(this, "filter", e, t, (e) => e.map((e) => qi(this, e)), arguments);
	},
	find(e, t) {
		return Zi(this, "find", e, t, (e) => qi(this, e), arguments);
	},
	findIndex(e, t) {
		return Zi(this, "findIndex", e, t, void 0, arguments);
	},
	findLast(e, t) {
		return Zi(this, "findLast", e, t, (e) => qi(this, e), arguments);
	},
	findLastIndex(e, t) {
		return Zi(this, "findLastIndex", e, t, void 0, arguments);
	},
	forEach(e, t) {
		return Zi(this, "forEach", e, t, void 0, arguments);
	},
	includes(...e) {
		return $i(this, "includes", e);
	},
	indexOf(...e) {
		return $i(this, "indexOf", e);
	},
	join(e) {
		return Gi(this).join(e);
	},
	lastIndexOf(...e) {
		return $i(this, "lastIndexOf", e);
	},
	map(e, t) {
		return Zi(this, "map", e, t, void 0, arguments);
	},
	pop() {
		return ea(this, "pop");
	},
	push(...e) {
		return ea(this, "push", e);
	},
	reduce(e, ...t) {
		return Qi(this, "reduce", e, t);
	},
	reduceRight(e, ...t) {
		return Qi(this, "reduceRight", e, t);
	},
	shift() {
		return ea(this, "shift");
	},
	some(e, t) {
		return Zi(this, "some", e, t, void 0, arguments);
	},
	splice(...e) {
		return ea(this, "splice", e);
	},
	toReversed() {
		return Gi(this).toReversed();
	},
	toSorted(e) {
		return Gi(this).toSorted(e);
	},
	toSpliced(...e) {
		return Gi(this).toSpliced(...e);
	},
	unshift(...e) {
		return ea(this, "unshift", e);
	},
	values() {
		return Yi(this, "values", (e) => qi(this, e));
	}
};
function Yi(e, t, n) {
	let r = Ki(e), i = r[t]();
	return r !== e && !/* @__PURE__ */ Na(e) && (i._next = i.next, i.next = () => {
		let e = i._next();
		return e.done || (e.value = n(e.value)), e;
	}), i;
}
var Xi = Array.prototype;
function Zi(e, t, n, r, i, a) {
	let o = Ki(e), s = o !== e && !/* @__PURE__ */ Na(e), c = o[t];
	if (c !== Xi[t]) {
		let t = c.apply(e, a);
		return s ? Ia(t) : t;
	}
	let l = n;
	o !== e && (s ? l = function(t, r) {
		return n.call(this, qi(e, t), r, e);
	} : n.length > 2 && (l = function(t, r) {
		return n.call(this, t, r, e);
	}));
	let u = c.call(o, l, r);
	return s && i ? i(u) : u;
}
function Qi(e, t, n, r) {
	let i = Ki(e), a = i !== e && !/* @__PURE__ */ Na(e), o = n, s = !1;
	i !== e && (a ? (s = r.length === 0, o = function(t, r, i) {
		return s && (s = !1, t = qi(e, t)), n.call(this, t, qi(e, r), i, e);
	}) : n.length > 3 && (o = function(t, r, i) {
		return n.call(this, t, r, i, e);
	}));
	let c = i[t](o, ...r);
	return s ? qi(e, c) : c;
}
function $i(e, t, n) {
	let r = /* @__PURE__ */ G(e);
	Hi(r, "iterate", Vi);
	let i = r[t](...n);
	return (i === -1 || i === !1) && /* @__PURE__ */ Pa(n[0]) ? (n[0] = /* @__PURE__ */ G(n[0]), r[t](...n)) : i;
}
function ea(e, t, n = []) {
	ji(), yi();
	let r = (/* @__PURE__ */ G(e))[t].apply(e, n);
	return bi(), Mi(), r;
}
var ta = /* @__PURE__ */ ar("__proto__,__v_isRef,__isVue"), na = new Set(/* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(_r));
function ra(e) {
	_r(e) || (e = String(e));
	let t = /* @__PURE__ */ G(this);
	return Hi(t, "has", e), t.hasOwnProperty(e);
}
var ia = class {
	constructor(e = !1, t = !1) {
		this._isReadonly = e, this._isShallow = t;
	}
	get(e, t, n) {
		if (t === "__v_skip") return e.__v_skip;
		let r = this._isReadonly, i = this._isShallow;
		if (t === "__v_isReactive") return !r;
		if (t === "__v_isReadonly") return r;
		if (t === "__v_isShallow") return i;
		if (t === "__v_raw") return n === (r ? i ? wa : Ca : i ? Sa : xa).get(e) || Object.getPrototypeOf(e) === Object.getPrototypeOf(n) ? e : void 0;
		let a = L(e);
		if (!r) {
			let e;
			if (a && (e = Ji[t])) return e;
			if (t === "hasOwnProperty") return ra;
		}
		let o = Reflect.get(e, t, /* @__PURE__ */ K(e) ? e : n);
		if ((_r(t) ? na.has(t) : ta(t)) || (r || Hi(e, "get", t), i)) return o;
		if (/* @__PURE__ */ K(o)) {
			let e = a && Cr(t) ? o : o.value;
			return r && B(e) ? /* @__PURE__ */ Oa(e) : e;
		}
		return B(o) ? r ? /* @__PURE__ */ Oa(o) : /* @__PURE__ */ Ea(o) : o;
	}
}, aa = class extends ia {
	constructor(e = !1) {
		super(!1, e);
	}
	set(e, t, n, r) {
		let i = e[t], a = L(e) && Cr(t);
		if (!this._isShallow) {
			let e = /* @__PURE__ */ Ma(i);
			if (!/* @__PURE__ */ Na(n) && !/* @__PURE__ */ Ma(n) && (i = /* @__PURE__ */ G(i), n = /* @__PURE__ */ G(n)), !a && /* @__PURE__ */ K(i) && !/* @__PURE__ */ K(n)) return e || (i.value = n), !0;
		}
		let o = a ? Number(t) < e.length : I(e, t), s = Reflect.set(e, t, n, /* @__PURE__ */ K(e) ? e : r);
		return e === /* @__PURE__ */ G(r) && s && (o ? H(n, i) && Ui(e, "set", t, n, i) : Ui(e, "add", t, n)), s;
	}
	deleteProperty(e, t) {
		let n = I(e, t), r = e[t], i = Reflect.deleteProperty(e, t);
		return i && n && Ui(e, "delete", t, void 0, r), i;
	}
	has(e, t) {
		let n = Reflect.has(e, t);
		return (!_r(t) || !na.has(t)) && Hi(e, "has", t), n;
	}
	ownKeys(e) {
		return Hi(e, "iterate", L(e) ? "length" : zi), Reflect.ownKeys(e);
	}
}, oa = class extends ia {
	constructor(e = !1) {
		super(!0, e);
	}
	set(e, t) {
		return !0;
	}
	deleteProperty(e, t) {
		return !0;
	}
}, sa = /* @__PURE__ */ new aa(), ca = /* @__PURE__ */ new oa(), la = /* @__PURE__ */ new aa(!0), ua = /* @__PURE__ */ new oa(!0), da = (e) => e, fa = (e) => Reflect.getPrototypeOf(e);
function pa(e, t, n) {
	return function(...r) {
		let i = this.__v_raw, a = /* @__PURE__ */ G(i), o = pr(a), s = e === "entries" || e === Symbol.iterator && o, c = e === "keys" && o, l = i[e](...r), u = n ? da : t ? La : Ia;
		return !t && Hi(a, "iterate", c ? Bi : zi), F(Object.create(l), { next() {
			let { value: e, done: t } = l.next();
			return t ? {
				value: e,
				done: t
			} : {
				value: s ? [u(e[0]), u(e[1])] : u(e),
				done: t
			};
		} });
	};
}
function ma(e) {
	return function(...t) {
		return e === "delete" ? !1 : e === "clear" ? void 0 : this;
	};
}
function ha(e, t) {
	let n = {
		get(n) {
			let r = this.__v_raw, i = /* @__PURE__ */ G(r), a = /* @__PURE__ */ G(n);
			e || (H(n, a) && Hi(i, "get", n), Hi(i, "get", a));
			let { has: o } = fa(i), s = t ? da : e ? La : Ia;
			if (o.call(i, n)) return s(r.get(n));
			if (o.call(i, a)) return s(r.get(a));
			r !== i && r.get(n);
		},
		get size() {
			let t = this.__v_raw;
			return !e && Hi(/* @__PURE__ */ G(t), "iterate", zi), t.size;
		},
		has(t) {
			let n = this.__v_raw, r = /* @__PURE__ */ G(n), i = /* @__PURE__ */ G(t);
			return e || (H(t, i) && Hi(r, "has", t), Hi(r, "has", i)), t === i ? n.has(t) : n.has(t) || n.has(i);
		},
		forEach(n, r) {
			let i = this, a = i.__v_raw, o = /* @__PURE__ */ G(a), s = t ? da : e ? La : Ia;
			return !e && Hi(o, "iterate", zi), a.forEach((e, t) => n.call(r, s(e), s(t), i));
		}
	};
	return F(n, e ? {
		add: ma("add"),
		set: ma("set"),
		delete: ma("delete"),
		clear: ma("clear")
	} : {
		add(e) {
			let n = /* @__PURE__ */ G(this), r = fa(n), i = /* @__PURE__ */ G(e), a = !t && !/* @__PURE__ */ Na(e) && !/* @__PURE__ */ Ma(e) ? i : e;
			return r.has.call(n, a) || H(e, a) && r.has.call(n, e) || H(i, a) && r.has.call(n, i) || (n.add(a), Ui(n, "add", a, a)), this;
		},
		set(e, n) {
			!t && !/* @__PURE__ */ Na(n) && !/* @__PURE__ */ Ma(n) && (n = /* @__PURE__ */ G(n));
			let r = /* @__PURE__ */ G(this), { has: i, get: a } = fa(r), o = i.call(r, e);
			o ||= (e = /* @__PURE__ */ G(e), i.call(r, e));
			let s = a.call(r, e);
			return r.set(e, n), o ? H(n, s) && Ui(r, "set", e, n, s) : Ui(r, "add", e, n), this;
		},
		delete(e) {
			let t = /* @__PURE__ */ G(this), { has: n, get: r } = fa(t), i = n.call(t, e);
			i ||= (e = /* @__PURE__ */ G(e), n.call(t, e));
			let a = r ? r.call(t, e) : void 0, o = t.delete(e);
			return i && Ui(t, "delete", e, void 0, a), o;
		},
		clear() {
			let e = /* @__PURE__ */ G(this), t = e.size !== 0, n = e.clear();
			return t && Ui(e, "clear", void 0, void 0, void 0), n;
		}
	}), [
		"keys",
		"values",
		"entries",
		Symbol.iterator
	].forEach((r) => {
		n[r] = pa(r, e, t);
	}), n;
}
function ga(e, t) {
	let n = ha(e, t);
	return (t, r, i) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? t : Reflect.get(I(n, r) && r in t ? n : t, r, i);
}
var _a = { get: /* @__PURE__ */ ga(!1, !1) }, va = { get: /* @__PURE__ */ ga(!1, !0) }, ya = { get: /* @__PURE__ */ ga(!0, !1) }, ba = { get: /* @__PURE__ */ ga(!0, !0) }, xa = /* @__PURE__ */ new WeakMap(), Sa = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ new WeakMap();
function Ta(e) {
	switch (e) {
		case "Object":
		case "Array": return 1;
		case "Map":
		case "Set":
		case "WeakMap":
		case "WeakSet": return 2;
		default: return 0;
	}
}
// @__NO_SIDE_EFFECTS__
function Ea(e) {
	return /* @__PURE__ */ Ma(e) ? e : Aa(e, !1, sa, _a, xa);
}
// @__NO_SIDE_EFFECTS__
function Da(e) {
	return Aa(e, !1, la, va, Sa);
}
// @__NO_SIDE_EFFECTS__
function Oa(e) {
	return Aa(e, !0, ca, ya, Ca);
}
// @__NO_SIDE_EFFECTS__
function ka(e) {
	return Aa(e, !0, ua, ba, wa);
}
function Aa(e, t, n, r, i) {
	if (!B(e) || e.__v_raw && !(t && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e)) return e;
	let a = i.get(e);
	if (a) return a;
	let o = Ta(xr(e));
	if (o === 0) return e;
	let s = new Proxy(e, o === 2 ? r : n);
	return i.set(e, s), s;
}
// @__NO_SIDE_EFFECTS__
function ja(e) {
	return /* @__PURE__ */ Ma(e) ? /* @__PURE__ */ ja(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ma(e) {
	return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Na(e) {
	return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Pa(e) {
	return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function G(e) {
	let t = e && e.__v_raw;
	return t ? /* @__PURE__ */ G(t) : e;
}
function Fa(e) {
	return !I(e, "__v_skip") && Object.isExtensible(e) && Mr(e, "__v_skip", !0), e;
}
var Ia = (e) => B(e) ? /* @__PURE__ */ Ea(e) : e, La = (e) => B(e) ? /* @__PURE__ */ Oa(e) : e;
// @__NO_SIDE_EFFECTS__
function K(e) {
	return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function Ra(e) {
	return Ba(e, !1);
}
// @__NO_SIDE_EFFECTS__
function za(e) {
	return Ba(e, !0);
}
function Ba(e, t) {
	return /* @__PURE__ */ K(e) ? e : new Va(e, t);
}
var Va = class {
	constructor(e, t) {
		this.dep = new Ii(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = t ? e : /* @__PURE__ */ G(e), this._value = t ? e : Ia(e), this.__v_isShallow = t;
	}
	get value() {
		return this.dep.track(), this._value;
	}
	set value(e) {
		let t = this._rawValue, n = this.__v_isShallow || /* @__PURE__ */ Na(e) || /* @__PURE__ */ Ma(e);
		e = n ? e : /* @__PURE__ */ G(e), H(e, t) && (this._rawValue = e, this._value = n ? e : Ia(e), this.dep.trigger());
	}
};
function Ha(e) {
	e.dep && e.dep.trigger();
}
function Ua(e) {
	return /* @__PURE__ */ K(e) ? e.value : e;
}
function Wa(e) {
	return R(e) ? e() : Ua(e);
}
var Ga = {
	get: (e, t, n) => t === "__v_raw" ? e : Ua(Reflect.get(e, t, n)),
	set: (e, t, n, r) => {
		let i = e[t];
		return /* @__PURE__ */ K(i) && !/* @__PURE__ */ K(n) ? (i.value = n, !0) : Reflect.set(e, t, n, r);
	}
};
function Ka(e) {
	return /* @__PURE__ */ ja(e) ? e : new Proxy(e, Ga);
}
var qa = class {
	constructor(e) {
		this.__v_isRef = !0, this._value = void 0;
		let t = this.dep = new Ii(), { get: n, set: r } = e(t.track.bind(t), t.trigger.bind(t));
		this._get = n, this._set = r;
	}
	get value() {
		return this._value = this._get();
	}
	set value(e) {
		this._set(e);
	}
};
function Ja(e) {
	return new qa(e);
}
// @__NO_SIDE_EFFECTS__
function Ya(e) {
	let t = L(e) ? Array(e.length) : {};
	for (let n in e) t[n] = $a(e, n);
	return t;
}
var Xa = class {
	constructor(e, t, n) {
		this._object = e, this._defaultValue = n, this.__v_isRef = !0, this._value = void 0, this._key = _r(t) ? t : String(t), this._raw = /* @__PURE__ */ G(e);
		let r = !0, i = e;
		if (!L(e) || _r(this._key) || !Cr(this._key)) do
			r = !/* @__PURE__ */ Pa(i) || /* @__PURE__ */ Na(i);
		while (r && (i = i.__v_raw));
		this._shallow = r;
	}
	get value() {
		let e = this._object[this._key];
		return this._shallow && (e = Ua(e)), this._value = e === void 0 ? this._defaultValue : e;
	}
	set value(e) {
		if (this._shallow && /* @__PURE__ */ K(this._raw[this._key])) {
			let t = this._object[this._key];
			if (/* @__PURE__ */ K(t)) {
				t.value = e;
				return;
			}
		}
		this._object[this._key] = e;
	}
	get dep() {
		return Wi(this._raw, this._key);
	}
}, Za = class {
	constructor(e) {
		this._getter = e, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
	}
	get value() {
		return this._value = this._getter();
	}
};
// @__NO_SIDE_EFFECTS__
function Qa(e, t, n) {
	return /* @__PURE__ */ K(e) ? e : R(e) ? new Za(e) : B(e) && arguments.length > 1 ? $a(e, t, n) : /* @__PURE__ */ Ra(e);
}
function $a(e, t, n) {
	return new Xa(e, t, n);
}
var eo = class {
	constructor(e, t, n) {
		this.fn = e, this.setter = t, this._value = void 0, this.dep = new Ii(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = n;
	}
	notify() {
		if (this.flags |= 16, !(this.flags & 8) && W !== this) return vi(this, !0), !0;
	}
	get value() {
		let e = this.dep.track();
		return wi(this), e && (e.version = this.dep.version), this._value;
	}
	set value(e) {
		this.setter && this.setter(e);
	}
};
// @__NO_SIDE_EFFECTS__
function to(e, t, n = !1) {
	let r, i;
	return R(e) ? r = e : (r = e.get, i = e.set), new eo(r, i, n);
}
var no = {
	GET: "get",
	HAS: "has",
	ITERATE: "iterate"
}, ro = {
	SET: "set",
	ADD: "add",
	DELETE: "delete",
	CLEAR: "clear"
}, io = {}, ao = /* @__PURE__ */ new WeakMap(), oo = void 0;
function so() {
	return oo;
}
function co(e, t = !1, n = oo) {
	if (n) {
		let t = ao.get(n);
		t || ao.set(n, t = []), t.push(e);
	}
}
function lo(e, t, n = P) {
	let { immediate: r, deep: i, once: a, scheduler: o, augmentJob: s, call: c } = n, l = (e) => i ? e : /* @__PURE__ */ Na(e) || i === !1 || i === 0 ? uo(e, 1) : uo(e), u, d, f, p, m = !1, h = !1;
	if (/* @__PURE__ */ K(e) ? (d = () => e.value, m = /* @__PURE__ */ Na(e)) : /* @__PURE__ */ ja(e) ? (d = () => l(e), m = !0) : L(e) ? (h = !0, m = e.some((e) => /* @__PURE__ */ ja(e) || /* @__PURE__ */ Na(e)), d = () => e.map((e) => {
		if (/* @__PURE__ */ K(e)) return e.value;
		if (/* @__PURE__ */ ja(e)) return l(e);
		if (R(e)) return c ? c(e, 2) : e();
	})) : d = R(e) ? t ? c ? () => c(e, 2) : e : () => {
		if (f) {
			ji();
			try {
				f();
			} finally {
				Mi();
			}
		}
		let t = oo;
		oo = u;
		try {
			return c ? c(e, 3, [p]) : e(p);
		} finally {
			oo = t;
		}
	} : sr, t && i) {
		let e = d, t = i === !0 ? Infinity : i;
		d = () => uo(e(), t);
	}
	let g = di(), _ = () => {
		u.stop(), g && g.active && dr(g.effects, u);
	};
	if (a && t) {
		let e = t;
		t = (...t) => {
			let n = e(...t);
			return _(), n;
		};
	}
	let v = h ? Array(e.length).fill(io) : io, y = (e) => {
		if (!(!(u.flags & 1) || !u.dirty && !e)) {
			if (t) {
				let n = u.run();
				if (e || i || m || (h ? n.some((e, t) => H(e, v[t])) : H(n, v))) {
					f && f();
					let e = oo;
					oo = u;
					try {
						let e = [
							n,
							v === io ? void 0 : h && v[0] === io ? [] : v,
							p
						];
						v = n, c ? c(t, 3, e) : t(...e);
					} finally {
						oo = e;
					}
				}
			} else u.run();
		}
	};
	return s && s(y), u = new mi(d), u.scheduler = o ? () => o(y, !1) : y, p = (e) => co(e, !1, u), f = u.onStop = () => {
		let e = ao.get(u);
		if (e) {
			if (c) c(e, 4);
			else for (let t of e) t();
			ao.delete(u);
		}
	}, t ? r ? y(!0) : v = u.run() : o ? o(y.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function uo(e, t = Infinity, n) {
	if (t <= 0 || !B(e) || e.__v_skip || (n ||= /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t)) return e;
	if (n.set(e, t), t--, /* @__PURE__ */ K(e)) uo(e.value, t, n);
	else if (L(e)) for (let r = 0; r < e.length; r++) uo(e[r], t, n);
	else if (mr(e) || pr(e)) e.forEach((e) => {
		uo(e, t, n);
	});
	else if (Sr(e)) {
		for (let r in e) uo(e[r], t, n);
		for (let r of Object.getOwnPropertySymbols(e)) Object.prototype.propertyIsEnumerable.call(e, r) && uo(e[r], t, n);
	}
	return e;
}
//#endregion
//#region node_modules/@vue/runtime-core/dist/runtime-core.esm-bundler.js
var fo = [];
function po(e) {
	fo.push(e);
}
function mo() {
	fo.pop();
}
var ho = !1;
function go(e, ...t) {
	if (ho) return;
	ho = !0, ji();
	let n = fo.length ? fo[fo.length - 1].component : null, r = n && n.appContext.config.warnHandler, i = _o();
	if (r) To(r, n, 11, [
		e + t.map((e) => e.toString?.call(e) ?? JSON.stringify(e)).join(""),
		n && n.proxy,
		i.map(({ vnode: e }) => `at <${jd(n, e.type)}>`).join("\n"),
		i
	]);
	else {
		let n = [`[Vue warn]: ${e}`, ...t];
		i.length && n.push("\n", ...vo(i)), console.warn(...n);
	}
	Mi(), ho = !1;
}
function _o() {
	let e = fo[fo.length - 1];
	if (!e) return [];
	let t = [];
	for (; e;) {
		let n = t[0];
		n && n.vnode === e ? n.recurseCount++ : t.push({
			vnode: e,
			recurseCount: 0
		});
		let r = e.component && e.component.parent;
		e = r && r.vnode;
	}
	return t;
}
function vo(e) {
	let t = [];
	return e.forEach((e, n) => {
		t.push(...n === 0 ? [] : ["\n"], ...yo(e));
	}), t;
}
function yo({ vnode: e, recurseCount: t }) {
	let n = t > 0 ? `... (${t} recursive calls)` : "", r = e.component ? e.component.parent == null : !1, i = ` at <${jd(e.component, e.type, r)}`, a = ">" + n;
	return e.props ? [
		i,
		...bo(e.props),
		a
	] : [i + a];
}
function bo(e) {
	let t = [], n = Object.keys(e);
	return n.slice(0, 3).forEach((n) => {
		t.push(...xo(n, e[n]));
	}), n.length > 3 && t.push(" ..."), t;
}
function xo(e, t, n) {
	return z(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : /* @__PURE__ */ K(t) ? (t = xo(e, /* @__PURE__ */ G(t.value), !0), n ? t : [
		`${e}=Ref<`,
		t,
		">"
	]) : R(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = /* @__PURE__ */ G(t), n ? t : [`${e}=`, t]);
}
function So(e, t) {}
var Co = {
	SETUP_FUNCTION: 0,
	0: "SETUP_FUNCTION",
	RENDER_FUNCTION: 1,
	1: "RENDER_FUNCTION",
	NATIVE_EVENT_HANDLER: 5,
	5: "NATIVE_EVENT_HANDLER",
	COMPONENT_EVENT_HANDLER: 6,
	6: "COMPONENT_EVENT_HANDLER",
	VNODE_HOOK: 7,
	7: "VNODE_HOOK",
	DIRECTIVE_HOOK: 8,
	8: "DIRECTIVE_HOOK",
	TRANSITION_HOOK: 9,
	9: "TRANSITION_HOOK",
	APP_ERROR_HANDLER: 10,
	10: "APP_ERROR_HANDLER",
	APP_WARN_HANDLER: 11,
	11: "APP_WARN_HANDLER",
	FUNCTION_REF: 12,
	12: "FUNCTION_REF",
	ASYNC_COMPONENT_LOADER: 13,
	13: "ASYNC_COMPONENT_LOADER",
	SCHEDULER: 14,
	14: "SCHEDULER",
	COMPONENT_UPDATE: 15,
	15: "COMPONENT_UPDATE",
	APP_UNMOUNT_CLEANUP: 16,
	16: "APP_UNMOUNT_CLEANUP"
}, wo = {
	sp: "serverPrefetch hook",
	bc: "beforeCreate hook",
	c: "created hook",
	bm: "beforeMount hook",
	m: "mounted hook",
	bu: "beforeUpdate hook",
	u: "updated",
	bum: "beforeUnmount hook",
	um: "unmounted hook",
	a: "activated hook",
	da: "deactivated hook",
	ec: "errorCaptured hook",
	rtc: "renderTracked hook",
	rtg: "renderTriggered hook",
	0: "setup function",
	1: "render function",
	2: "watcher getter",
	3: "watcher callback",
	4: "watcher cleanup function",
	5: "native event handler",
	6: "component event handler",
	7: "vnode hook",
	8: "directive hook",
	9: "transition hook",
	10: "app errorHandler",
	11: "app warnHandler",
	12: "ref function",
	13: "async component loader",
	14: "scheduler flush",
	15: "component update",
	16: "app unmount cleanup function"
};
function To(e, t, n, r) {
	try {
		return r ? e(...r) : e();
	} catch (e) {
		Do(e, t, n);
	}
}
function Eo(e, t, n, r) {
	if (R(e)) {
		let i = To(e, t, n, r);
		return i && vr(i) && i.catch((e) => {
			Do(e, t, n);
		}), i;
	}
	if (L(e)) {
		let i = [];
		for (let a = 0; a < e.length; a++) i.push(Eo(e[a], t, n, r));
		return i;
	}
}
function Do(e, t, n, r = !0) {
	let i = t ? t.vnode : null, { errorHandler: a, throwUnhandledErrorInProduction: o } = t && t.appContext.config || P;
	if (t) {
		let r = t.parent, i = t.proxy, o = `https://vuejs.org/error-reference/#runtime-${n}`;
		for (; r;) {
			let t = r.ec;
			if (t) {
				for (let n = 0; n < t.length; n++) if (t[n](e, i, o) === !1) return;
			}
			r = r.parent;
		}
		if (a) {
			ji(), To(a, null, 10, [
				e,
				i,
				o
			]), Mi();
			return;
		}
	}
	Oo(e, n, i, r, o);
}
function Oo(e, t, n, r = !0, i = !1) {
	if (i) throw e;
	console.error(e);
}
var ko = [], Ao = -1, jo = [], Mo = null, No = 0, Po = /* @__PURE__ */ Promise.resolve(), Fo = null;
function Io(e) {
	let t = Fo || Po;
	return e ? t.then(this ? e.bind(this) : e) : t;
}
function Lo(e) {
	let t = Ao + 1, n = ko.length;
	for (; t < n;) {
		let r = t + n >>> 1, i = ko[r], a = Uo(i);
		a < e || a === e && i.flags & 2 ? t = r + 1 : n = r;
	}
	return t;
}
function Ro(e) {
	if (!(e.flags & 1)) {
		let t = Uo(e), n = ko[ko.length - 1];
		!n || !(e.flags & 2) && t >= Uo(n) ? ko.push(e) : ko.splice(Lo(t), 0, e), e.flags |= 1, zo();
	}
}
function zo() {
	Fo ||= Po.then(Wo);
}
function Bo(e) {
	if (!L(e)) Mo && e.id === -1 ? Mo.splice(No + 1, 0, e) : e.flags & 1 || (jo.push(e), e.flags |= 1);
	else for (let t = 0; t < e.length; t++) jo.push(e[t]);
	zo();
}
function Vo(e, t, n = Ao + 1) {
	for (; n < ko.length; n++) {
		let t = ko[n];
		if (t && t.flags & 2) {
			if (e && t.id !== e.uid) continue;
			ko.splice(n, 1), n--, t.flags & 4 && (t.flags &= -2), t(), t.flags & 4 || (t.flags &= -2);
		}
	}
}
function Ho(e) {
	if (jo.length) {
		let e = [...new Set(jo)].sort((e, t) => Uo(e) - Uo(t));
		if (jo.length = 0, Mo) {
			for (let t = 0; t < e.length; t++) Mo.push(e[t]);
			return;
		}
		for (Mo = e, No = 0; No < Mo.length; No++) {
			let e = Mo[No];
			e.flags & 4 && (e.flags &= -2), e.flags & 8 || e(), e.flags &= -2;
		}
		Mo = null, No = 0;
	}
}
var Uo = (e) => e.id == null ? e.flags & 2 ? -1 : Infinity : e.id;
function Wo(e) {
	try {
		for (Ao = 0; Ao < ko.length; Ao++) {
			let e = ko[Ao];
			e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), To(e, e.i, e.i ? 15 : 14), e.flags & 4 || (e.flags &= -2));
		}
	} finally {
		for (; Ao < ko.length; Ao++) {
			let e = ko[Ao];
			e && (e.flags &= -2);
		}
		Ao = -1, ko.length = 0, Ho(e), Fo = null, (ko.length || jo.length) && Wo(e);
	}
}
var Go, Ko = [];
function qo(e, t) {
	Go = e, Go ? (Go.enabled = !0, Ko.forEach(({ event: e, args: t }) => Go.emit(e, ...t)), Ko = []) : typeof window < "u" && window.HTMLElement && !(window.navigator?.userAgent)?.includes("jsdom") ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((e) => {
		qo(e, t);
	}), setTimeout(() => {
		Go || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ko = []);
	}, 3e3)) : Ko = [];
}
var q = null, Jo = null;
function Yo(e) {
	let t = q;
	return q = e, Jo = e && e.type.__scopeId || null, t;
}
function Xo(e) {
	Jo = e;
}
function Zo() {
	Jo = null;
}
var Qo = (e) => $o;
function $o(e, t = q, n) {
	if (!t || e._n) return e;
	let r = (...n) => {
		r._d && Bu(-1);
		let i = Yo(t), a = Fu.length, o;
		try {
			o = e(...n);
		} finally {
			for (let e = Fu.length; e > a; e--) Ru();
			Yo(i), r._d && Bu(1);
		}
		return o;
	};
	return r._n = !0, r._c = !0, r._d = !0, r;
}
function es(e, t) {
	if (q === null) return e;
	let n = Dd(q), r = e.dirs ||= [];
	for (let e = 0; e < t.length; e++) {
		let [i, a, o, s = P] = t[e];
		i && (R(i) && (i = {
			mounted: i,
			updated: i
		}), i.deep && uo(a), r.push({
			dir: i,
			instance: n,
			value: a,
			oldValue: void 0,
			arg: o,
			modifiers: s
		}));
	}
	return e;
}
function ts(e, t, n, r) {
	let i = e.dirs, a = t && t.dirs;
	for (let o = 0; o < i.length; o++) {
		let s = i[o];
		a && (s.oldValue = a[o].value);
		let c = s.dir[r];
		c && (ji(), Eo(c, n, 8, [
			e.el,
			s,
			e,
			t
		]), Mi());
	}
}
function ns(e, t) {
	if (Q) {
		let n = Q.provides, r = Q.parent && Q.parent.provides;
		r === n && (n = Q.provides = Object.create(r)), n[e] = t;
	}
}
function rs(e, t, n = !1) {
	let r = ud();
	if (r || Ml) {
		let i = Ml ? Ml._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
		if (i && e in i) return i[e];
		if (arguments.length > 1) return n && R(t) ? t.call(r && r.proxy) : t;
	}
}
function is() {
	return !!(ud() || Ml);
}
var as = /* @__PURE__ */ Symbol.for("v-scx"), os = () => rs(as);
function ss(e, t) {
	return ds(e, null, t);
}
function cs(e, t) {
	return ds(e, null, { flush: "post" });
}
function ls(e, t) {
	return ds(e, null, { flush: "sync" });
}
function us(e, t, n) {
	return ds(e, t, n);
}
function ds(e, t, n = P) {
	let { immediate: r, deep: i, flush: a, once: o } = n, s = F({}, n), c = t && r || !t && a !== "post", l;
	if (gd) {
		if (a === "sync") {
			let e = os();
			l = e.__watcherHandles ||= [];
		} else if (!c) {
			let e = () => {};
			return e.stop = sr, e.resume = sr, e.pause = sr, e;
		}
	}
	let u = Q;
	s.call = (e, t, n) => Eo(e, u, t, n);
	let d = !1;
	a === "post" ? s.scheduler = (e) => {
		J(e, u && u.suspense);
	} : a !== "sync" && (d = !0, s.scheduler = (e, t) => {
		t ? e() : Ro(e);
	}), s.augmentJob = (e) => {
		t && (e.flags |= 4), d && (e.flags |= 2, u && (e.id = u.uid, e.i = u));
	};
	let f = lo(e, t, s);
	return gd && (l ? l.push(f) : c && f()), f;
}
var fs = /* @__PURE__ */ new WeakMap(), ps = /* @__PURE__ */ Symbol("_vte"), ms = (e) => e.__isTeleport, hs = (e) => e && (e.disabled || e.disabled === ""), gs = (e) => e && (e.defer || e.defer === ""), _s = (e) => typeof SVGElement < "u" && e instanceof SVGElement, vs = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, ys = (e, t) => {
	let n = e && e.to;
	return z(n) ? t ? t(n) : null : n;
}, bs = {
	name: "Teleport",
	__isTeleport: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		let { mc: u, pc: d, pbc: f, o: { insert: p, querySelector: m, createText: h, createComment: g, parentNode: _ } } = l, v = hs(t.props), { dynamicChildren: y } = t, b = (e, t, n) => {
			e.shapeFlag & 16 && u(e.children, t, n, i, a, o, s, c);
		}, x = (e = t) => {
			let n = hs(e.props), r = e.target = ys(e.props, m), a = Ts(r, e, h, p);
			r && (o !== "svg" && _s(r) ? o = "svg" : o !== "mathml" && vs(r) && (o = "mathml"), i && i.isCE && (i.ce._teleportTargets || (i.ce._teleportTargets = /* @__PURE__ */ new Set())).add(r), n || (b(e, r, a), ws(e, !1)));
		}, S = (e) => {
			let t = () => {
				if (fs.get(e) === t) {
					if (fs.delete(e), hs(e.props)) {
						let t = _(e.el) || n;
						b(e, t, e.anchor), ws(e, !0);
					}
					x(e);
				}
			};
			fs.set(e, t), J(t, a);
		};
		if (e == null) {
			let e = t.el = h(""), i = t.anchor = h("");
			if (p(e, n, r), p(i, n, r), gs(t.props) || a && a.pendingBranch) {
				S(t);
				return;
			}
			v && (b(t, n, i), ws(t, !0)), x();
		} else {
			t.el = e.el;
			let r = t.anchor = e.anchor, u = fs.get(e);
			if (u) {
				u.flags |= 8, fs.delete(e), S(t);
				return;
			}
			t.targetStart = e.targetStart;
			let p = t.target = e.target, h = t.targetAnchor = e.targetAnchor, g = hs(e.props), _ = g ? n : p, b = g ? r : h;
			if (o === "svg" || _s(p) ? o = "svg" : (o === "mathml" || vs(p)) && (o = "mathml"), y ? (f(e.dynamicChildren, y, _, i, a, o, s), hu(e, t, !0)) : c || d(e, t, _, b, i, a, o, s, !1), v) g ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : xs(t, n, r, l, 1);
			else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
				let e = ys(t.props, m);
				e && (t.target = e, xs(t, e, null, l, 0));
			} else g && xs(t, p, h, l, 1);
			ws(t, v);
		}
	},
	remove(e, t, n, { um: r, o: { remove: i } }, a) {
		let { shapeFlag: o, children: s, anchor: c, targetStart: l, targetAnchor: u, target: d, props: f } = e, p = hs(f), m = a || !p, h = fs.get(e);
		if (h && (h.flags |= 8, fs.delete(e)), d && (i(l), i(u)), a && i(c), !h && (p || d) && o & 16) for (let e = 0; e < s.length; e++) {
			let i = s[e];
			r(i, t, n, m, !!i.dynamicChildren);
		}
	},
	move: xs,
	hydrate: Ss
};
function xs(e, t, n, { o: { insert: r }, m: i }, a = 2) {
	a === 0 && r(e.targetAnchor, t, n);
	let { el: o, anchor: s, shapeFlag: c, children: l, props: u } = e, d = a === 2;
	if (d && r(o, t, n), !fs.has(e) && (!d || hs(u)) && c & 16) for (let e = 0; e < l.length; e++) i(l[e], t, n, 2);
	d && r(s, t, n);
}
function Ss(e, t, n, r, i, a, { o: { nextSibling: o, parentNode: s, querySelector: c, insert: l, createText: u } }, d) {
	function f(e, n) {
		let r = n;
		for (; r;) {
			if (r && r.nodeType === 8) {
				if (r.data === "teleport start anchor") t.targetStart = r;
				else if (r.data === "teleport anchor") {
					t.targetAnchor = r, e._lpa = t.targetAnchor && o(t.targetAnchor);
					break;
				}
			}
			r = o(r);
		}
	}
	function p(e, t) {
		t.anchor = d(o(e), t, s(e), n, r, i, a);
	}
	let m = t.target = ys(t.props, c), h = hs(t.props);
	if (m) {
		let c = m._lpa || m.firstChild;
		t.shapeFlag & 16 && (h ? (p(e, t), f(m, c), t.targetAnchor || Ts(m, t, u, l, s(e) === m ? e : null)) : (t.anchor = o(e), f(m, c), t.targetAnchor || Ts(m, t, u, l), d(c && o(c), t, m, n, r, i, a))), ws(t, h);
	} else h && t.shapeFlag & 16 && (p(e, t), t.targetStart = e, t.targetAnchor = o(e));
	return t.anchor && o(t.anchor);
}
var Cs = bs;
function ws(e, t) {
	let n = e.ctx;
	if (n && n.ut) {
		let r, i;
		for (t ? (r = e.el, i = e.anchor) : (r = e.targetStart, i = e.targetAnchor); r && r !== i;) r.nodeType === 1 && r.setAttribute("data-v-owner", n.uid), r = r.nextSibling;
		n.ut();
	}
}
function Ts(e, t, n, r, i = null) {
	let a = t.targetStart = n(""), o = t.targetAnchor = n("");
	return a[ps] = o, e && (r(a, e, i), r(o, e, i)), o;
}
var Es = /* @__PURE__ */ Symbol("_leaveCb"), Ds = /* @__PURE__ */ Symbol("_enterCb");
function Os() {
	let e = {
		isMounted: !1,
		isLeaving: !1,
		isUnmounting: !1,
		leavingVNodes: /* @__PURE__ */ new Map()
	};
	return Vc(() => {
		e.isMounted = !0;
	}), Wc(() => {
		e.isUnmounting = !0;
	}), e;
}
var ks = [Function, Array], As = {
	mode: String,
	appear: Boolean,
	persisted: Boolean,
	onBeforeEnter: ks,
	onEnter: ks,
	onAfterEnter: ks,
	onEnterCancelled: ks,
	onBeforeLeave: ks,
	onLeave: ks,
	onAfterLeave: ks,
	onLeaveCancelled: ks,
	onBeforeAppear: ks,
	onAppear: ks,
	onAfterAppear: ks,
	onAppearCancelled: ks
}, js = (e) => {
	let t = e.subTree;
	return t.component ? js(t.component) : t;
}, Ms = {
	name: "BaseTransition",
	props: As,
	setup(e, { slots: t }) {
		let n = ud(), r = Os();
		return () => {
			let i = t.default && Bs(t.default(), !0), a = i && i.length ? Ns(i) : n.subTree ? td() : void 0;
			if (!a) return;
			let o = /* @__PURE__ */ G(e), { mode: s } = o;
			if (r.isLeaving) return Ls(a);
			let c = Rs(a);
			if (!c) return Ls(a);
			let l = Is(c, o, r, n, (e) => l = e);
			c.type !== X && zs(c, l);
			let u = n.subTree && Rs(n.subTree);
			if (u && u.type !== X && !Gu(u, c) && js(n).type !== X) {
				let e = Is(u, o, r, n);
				if (zs(u, e), s === "out-in" && c.type !== X) return r.isLeaving = !0, e.afterLeave = () => {
					r.isLeaving = !1, n.job.flags & 8 || n.update(), delete e.afterLeave, u = void 0;
				}, Ls(a);
				s === "in-out" && c.type !== X ? e.delayLeave = (e, t, n) => {
					let i = Fs(r, u);
					i[String(u.key)] = u, e[Es] = () => {
						t(), e[Es] = void 0, delete l.delayedLeave, u = void 0;
					}, l.delayedLeave = () => {
						n(), delete l.delayedLeave, u = void 0;
					};
				} : u = void 0;
			} else u &&= void 0;
			return a;
		};
	}
};
function Ns(e) {
	let t = e[0];
	if (e.length > 1) {
		for (let n of e) if (n.type !== X) {
			t = n;
			break;
		}
	}
	return t;
}
var Ps = Ms;
function Fs(e, t) {
	let { leavingVNodes: n } = e, r = n.get(t.type);
	return r || (r = /* @__PURE__ */ Object.create(null), n.set(t.type, r)), r;
}
function Is(e, t, n, r, i) {
	let { appear: a, mode: o, persisted: s = !1, onBeforeEnter: c, onEnter: l, onAfterEnter: u, onEnterCancelled: d, onBeforeLeave: f, onLeave: p, onAfterLeave: m, onLeaveCancelled: h, onBeforeAppear: g, onAppear: _, onAfterAppear: v, onAppearCancelled: y } = t, b = String(e.key), x = Fs(n, e), S = (e, t) => {
		e && Eo(e, r, 9, t);
	}, C = (e, t) => {
		let n = t[1];
		S(e, t), L(e) ? e.every((e) => e.length <= 1) && n() : e.length <= 1 && n();
	}, w = {
		mode: o,
		persisted: s,
		beforeEnter(t) {
			let r = c;
			if (!n.isMounted) {
				if (a) r = g || c;
				else return;
			}
			t[Es] && t[Es](!0);
			let i = x[b];
			i && Gu(e, i) && i.el[Es] && i.el[Es](), S(r, [t]);
		},
		enter(t) {
			if (x[b] === e) return;
			let r = l, i = u, o = d;
			if (!n.isMounted) {
				if (a) r = _ || l, i = v || u, o = y || d;
				else return;
			}
			let s = !1;
			t[Ds] = (e) => {
				s || (s = !0, S(e ? o : i, [t]), w.delayedLeave && w.delayedLeave(), t[Ds] = void 0);
			};
			let c = t[Ds].bind(null, !1);
			r ? C(r, [t, c]) : c();
		},
		leave(t, r) {
			let i = String(e.key);
			if (t[Ds] && t[Ds](!0), n.isUnmounting) return r();
			S(f, [t]);
			let a = !1;
			t[Es] = (n) => {
				a || (a = !0, r(), S(n ? h : m, [t]), t[Es] = void 0, x[i] === e && delete x[i]);
			};
			let o = t[Es].bind(null, !1);
			x[i] = e, p ? C(p, [t, o]) : o();
		},
		clone(e) {
			let a = Is(e, t, n, r, i);
			return i && i(a), a;
		}
	};
	return w;
}
function Ls(e) {
	if (kc(e)) return e = Qu(e), e.children = null, e;
}
function Rs(e) {
	if (!kc(e)) return ms(e.type) && e.children ? Ns(e.children) : e;
	if (e.component) return e.component.subTree;
	let { shapeFlag: t, children: n } = e;
	if (n) {
		if (t & 16) return n[0];
		if (t & 32 && R(n.default)) return n.default();
	}
}
function zs(e, t) {
	if (e.shapeFlag & 6 && e.component) {
		e.transition = t;
		let n = e.component.subTree;
		zs(ms(n.type) && Rs(n) || n, t);
	} else e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Bs(e, t = !1, n) {
	let r = [], i = 0;
	for (let a = 0; a < e.length; a++) {
		let o = e[a], s = n == null ? o.key : String(n) + String(o.key == null ? a : o.key);
		o.type === Y ? (o.patchFlag & 128 && i++, r = r.concat(Bs(o.children, t, s))) : (t || o.type !== X) && r.push(s == null ? o : Qu(o, { key: s }));
	}
	if (i > 1) for (let e = 0; e < r.length; e++) r[e].patchFlag = -2;
	return r;
}
// @__NO_SIDE_EFFECTS__
function Vs(e, t) {
	return R(e) ? /* @__PURE__ */ F({ name: e.name }, t, { setup: e }) : e;
}
function Hs() {
	let e = ud();
	return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function Us(e) {
	e.ids = [
		e.ids[0] + e.ids[2]++ + "-",
		0,
		0
	];
}
function Ws(e) {
	let t = ud(), n = /* @__PURE__ */ za(null);
	if (t) {
		let r = t.refs === P ? t.refs = {} : t.refs;
		Object.defineProperty(r, e, {
			enumerable: !0,
			get: () => n.value,
			set: (e) => n.value = e
		});
	}
	return n;
}
function Gs(e, t) {
	let n;
	return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
var Ks = /* @__PURE__ */ new WeakMap();
function qs(e, t, n, r, i = !1) {
	if (L(e)) {
		e.forEach((e, a) => qs(e, t && (L(t) ? t[a] : t), n, r, i));
		return;
	}
	if (Ec(r) && !i) {
		r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && qs(e, t, n, r.component.subTree);
		return;
	}
	let a = r.shapeFlag & 4 ? Dd(r.component) : r.el, o = i ? null : a, { i: s, r: c } = e, l = t && t.r, u = s.refs === P ? s.refs = {} : s.refs, d = s.setupState, f = /* @__PURE__ */ G(d), p = d === P ? cr : (e) => !Gs(u, e) && I(f, e), m = (e, t) => !(t && Gs(u, t));
	if (l != null && l !== c) {
		if (Js(t), z(l)) u[l] = null, p(l) && (d[l] = null);
		else if (/* @__PURE__ */ K(l)) {
			let e = t;
			m(l, e.k) && (l.value = null), e.k && (u[e.k] = null);
		}
	}
	if (R(c)) To(c, s, 12, [o, u]);
	else {
		let t = z(c), r = /* @__PURE__ */ K(c);
		if (t || r) {
			let s = () => {
				if (e.f) {
					let n = t ? p(c) ? d[c] : u[c] : m(c) || !e.k ? c.value : u[e.k];
					if (i) L(n) && dr(n, a);
					else if (L(n)) n.includes(a) || n.push(a);
					else if (t) u[c] = [a], p(c) && (d[c] = u[c]);
					else {
						let t = [a];
						m(c, e.k) && (c.value = t), e.k && (u[e.k] = t);
					}
				} else t ? (u[c] = o, p(c) && (d[c] = o)) : r && (m(c, e.k) && (c.value = o), e.k && (u[e.k] = o));
			};
			if (o) {
				let t = () => {
					s(), Ks.delete(e);
				};
				t.id = -1, Ks.set(e, t), J(t, n);
			} else Js(e), s();
		}
	}
}
function Js(e) {
	let t = Ks.get(e);
	t && (t.flags |= 8, Ks.delete(e));
}
var Ys = !1, Xs = () => {
	Ys ||= (console.error("Hydration completed but contains mismatches."), !0);
}, Zs = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Qs = (e) => e.namespaceURI.includes("MathML"), $s = (e) => {
	if (e.nodeType === 1) {
		if (Zs(e)) return "svg";
		if (Qs(e)) return "mathml";
	}
}, ec = (e) => e.nodeType === 8;
function tc(e) {
	let { mt: t, p: n, o: { patchProp: r, createText: i, nextSibling: a, parentNode: o, remove: s, insert: c, createComment: l } } = e, u = (e, t) => {
		if (!t.hasChildNodes()) {
			go("Attempting to hydrate existing markup but container is empty. Performing full mount instead."), n(null, e, t), Ho(), t._vnode = e;
			return;
		}
		d(t.firstChild, e, null, null, null), Ho(), t._vnode = e;
	}, d = (n, r, s, l, u, y = !1) => {
		y ||= !!r.dynamicChildren;
		let b = ec(n) && n.data === "[", x = () => h(n, r, s, l, u, b), { type: S, ref: C, shapeFlag: w, patchFlag: T } = r, E = n.nodeType;
		r.el = n, T === -2 && (y = !1, r.dynamicChildren = null);
		let D = null;
		switch (S) {
			case Nu:
				E === 3 ? (n.data !== r.children && (go("Hydration text mismatch in", n.parentNode, `
  - rendered on server: ${JSON.stringify(n.data)}
  - expected on client: ${JSON.stringify(r.children)}`), Xs(), n.data = r.children), D = a(n)) : r.children === "" ? (c(r.el = i(""), o(n), n), D = n) : D = x();
				break;
			case X:
				v(n) ? (D = a(n), _(r.el = n.content.firstChild, n, s)) : D = E !== 8 || b ? x() : a(n);
				break;
			case Pu:
				if (b && (n = a(n), E = n.nodeType), E === 1 || E === 3) {
					D = n;
					let e = !r.children.length;
					for (let t = 0; t < r.staticCount; t++) e && (r.children += D.nodeType === 1 ? D.outerHTML : D.data), t === r.staticCount - 1 && (r.anchor = D), D = a(D);
					return b ? a(D) : D;
				}
				x();
				break;
			case Y:
				D = b ? m(n, r, s, l, u, y) : x();
				break;
			default: if (w & 1) D = (E !== 1 || r.type.toLowerCase() !== n.tagName.toLowerCase()) && !v(n) ? x() : f(n, r, s, l, u, y);
			else if (w & 6) {
				r.slotScopeIds = u;
				let e = o(n);
				if (D = b ? g(n) : ec(n) && n.data === "teleport start" ? g(n, n.data, "teleport end") : a(n), t(r, e, null, s, l, $s(e), y), Ec(r) && !r.type.__asyncResolved) {
					let t;
					b ? (t = Z(Y), t.anchor = D ? D.previousSibling : e.lastChild) : t = n.nodeType === 3 ? $u("") : Z("div"), t.el = n, r.component.subTree = t;
				}
			} else w & 64 ? D = E === 8 ? r.type.hydrate(n, r, s, l, u, y, e, p) : x() : w & 128 ? D = r.type.hydrate(n, r, s, l, $s(o(n)), u, y, e, d) : go("Invalid HostVNode type:", S, `(${typeof S})`);
		}
		return C != null && qs(C, null, l, r), D;
	}, f = (e, t, n, i, a, o) => {
		o ||= !!t.dynamicChildren;
		let { type: c, dynamicProps: l, props: u, patchFlag: d, shapeFlag: f, dirs: m, transition: h } = t, g = c === "input" || c === "option";
		if (g || l || d !== -1) {
			m && ts(t, null, n, "created");
			let c = !1;
			if (v(e)) {
				c = mu(null, h) && n && n.vnode.props && n.vnode.props.appear;
				let r = e.content.firstChild;
				if (c) {
					let e = r.getAttribute("class");
					e && (r.$cls = e), h.beforeEnter(r);
				}
				_(r, e, n), t.el = e = r;
			}
			if (f & 16 && !(u && (u.innerHTML || u.textContent))) {
				let r = p(e.firstChild, t, e, n, i, a, o);
				for (r && !pc(e, 1) && (go("Hydration children mismatch on", e, "\nServer rendered element contains more child nodes than client vdom."), Xs()); r;) {
					let e = r;
					r = r.nextSibling, s(e);
				}
			} else if (f & 8) {
				let n = t.children;
				n[0] === "\n" && (e.tagName === "PRE" || e.tagName === "TEXTAREA") && (n = n.slice(1));
				let { textContent: r } = e;
				r !== n && r !== n.replace(/\r\n|\r/g, "\n") && (pc(e, 0) || (go("Hydration text content mismatch on", e, `
  - rendered on server: ${r}
  - expected on client: ${n}`), Xs()), e.textContent = t.children);
			}
			if (u) {
				let i = e.tagName.includes("-"), a = e.namespaceURI.includes("svg") ? "svg" : e.namespaceURI.includes("MathML") ? "mathml" : void 0;
				for (let o in u) if (!(m && m.some((e) => e.dir.created)) && ic(e, o, u[o], t, n) && Xs(), g && (o.endsWith("value") || o === "indeterminate") || lr(o) && !wr(o) || o[0] === "." || i && !wr(o) || l && l.includes(o)) {
					if (rc(e, o, u[o])) continue;
					r(e, o, null, u[o], a, n);
				}
			}
			let d;
			(d = u && u.onVnodeBeforeMount) && od(d, n, t), m && ts(t, null, n, "beforeMount"), ((d = u && u.onVnodeMounted) || m || c) && Au(() => {
				d && od(d, n, t), c && h.enter(e), m && ts(t, null, n, "mounted");
			}, i);
		}
		return e.nextSibling;
	}, p = (e, t, r, o, s, l, u) => {
		u ||= !!t.dynamicChildren;
		let f = t.children, p = f.length, m = !1;
		for (let t = 0; t < p; t++) {
			let h = u ? f[t] : f[t] = nd(f[t]), g = h.type === Nu;
			e ? (g && !u && t + 1 < p && nd(f[t + 1]).type === Nu && (c(i(e.data.slice(h.children.length)), r, a(e)), e.data = h.children), e = d(e, h, o, s, l, u)) : g && !h.children ? c(h.el = i(""), r) : (m || (m = !0, pc(r, 1) || (go("Hydration children mismatch on", r, "\nServer rendered element contains fewer child nodes than client vdom."), Xs())), n(null, h, r, null, o, s, $s(r), l));
		}
		return e;
	}, m = (e, t, n, r, i, s) => {
		let { slotScopeIds: u } = t;
		u && (i = i ? i.concat(u) : u);
		let d = o(e), f = p(a(e), t, d, n, r, i, s);
		return f && ec(f) && f.data === "]" ? a(t.anchor = f) : (Xs(), c(t.anchor = l("]"), d, f), f);
	}, h = (e, t, r, i, c, l) => {
		if (hc(e, t) || (go("Hydration node mismatch:\n- rendered on server:", e, e.nodeType === 3 ? "(text)" : ec(e) && e.data === "[" ? "(start of fragment)" : "", "\n- expected on client:", t.type), Xs()), t.el = null, l) {
			let t = g(e);
			for (;;) {
				let n = a(e);
				if (n && n !== t) s(n);
				else break;
			}
		}
		let u = a(e), d = o(e);
		return s(e), n(null, t, d, u, r, i, $s(d), c), r && (r.vnode.el = t.el, Gl(r, t.el)), u;
	}, g = (e, t = "[", n = "]") => {
		let r = 0;
		for (; e;) if (e = a(e), e && ec(e) && (e.data === t && r++, e.data === n)) {
			if (r === 0) return a(e);
			r--;
		}
		return e;
	}, _ = (e, t, n) => {
		let r = t.parentNode;
		r && r.replaceChild(e, t);
		let i = n;
		for (; i;) i.vnode.el === t && (i.vnode.el = i.subTree.el = e), i = i.parent;
	}, v = (e) => e.nodeType === 1 && e.tagName === "TEMPLATE";
	return [u, d];
}
var nc = /* @__PURE__ */ new Set([
	"src",
	"srcset",
	"href",
	"poster"
]);
function rc(e, t, n) {
	return nc.has(t) ? e.getAttribute(t) === (n == null ? null : `${n}`) : !1;
}
function ic(e, t, n, r, i) {
	let a, o, s, c;
	if (t === "class") e.$cls ? (s = e.$cls, delete e.$cls) : s = e.getAttribute("class"), c = Wr(n), sc(oc(s || ""), oc(c)) || (a = 2, o = "class");
	else if (t === "style") {
		s = e.getAttribute("style") || "", c = z(n) ? n : Ur(Rr(n));
		let t = cc(s), l = cc(c);
		if (r.dirs) for (let { dir: e, value: t } of r.dirs) e.name === "show" && !t && l.set("display", "none");
		i && uc(i, r, l), lc(t, l) || (a = 3, o = "style");
	} else (e instanceof SVGElement && Zr(t) || e instanceof HTMLElement && (Jr(t) || Xr(t))) && (t === "hidden" ? (s = ac(e.getAttribute(t)), c = ac(n)) : Jr(t) ? (s = e.hasAttribute(t), c = Yr(n)) : n == null ? (s = e.hasAttribute(t), c = !1) : (s = e.hasAttribute(t) ? e.getAttribute(t) : t === "value" && e.tagName === "TEXTAREA" && e.value, c = Qr(n) ? String(n) : !1), s !== c && (a = 4, o = t));
	if (a != null && !pc(e, a)) {
		let t = (e) => e === !1 ? "(not rendered)" : `${o}="${e}"`;
		return go(`Hydration ${fc[a]} mismatch on`, e, `
  - rendered on server: ${t(s)}
  - expected on client: ${t(c)}
  Note: this mismatch is check-only. The DOM will not be rectified in production due to performance overhead.
  You should fix the source of the mismatch.`), !0;
	}
	return !1;
}
function ac(e) {
	return Qr(e) ? z(e) ? e.toLowerCase() === "until-found" ? "until-found" : "" : Yr(e) ? "" : !1 : !1;
}
function oc(e) {
	return new Set(e.trim().split(/\s+/));
}
function sc(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e) if (!t.has(n)) return !1;
	return !0;
}
function cc(e) {
	let t = /* @__PURE__ */ new Map();
	for (let n of e.split(";")) {
		let [e, r] = n.split(":");
		e = e.trim(), r &&= r.trim(), e && r && t.set(e, r);
	}
	return t;
}
function lc(e, t) {
	if (e.size !== t.size) return !1;
	for (let [n, r] of e) if (r !== t.get(n)) return !1;
	return !0;
}
function uc(e, t, n) {
	let r = e.subTree;
	if (e.getCssVars && (t === r || r && r.type === Y && r.children.includes(t))) {
		let t = e.getCssVars();
		for (let e in t) {
			let r = ci(t[e]);
			n.set(`--${ei(e, !1)}`, r);
		}
	}
	t === r && e.parent && uc(e.parent, e.vnode, n);
}
var dc = "data-allow-mismatch", fc = {
	0: "text",
	1: "children",
	2: "class",
	3: "style",
	4: "attribute"
};
function pc(e, t) {
	if (t === 0 || t === 1) for (; e && !e.hasAttribute(dc);) e = e.parentElement;
	return mc(e && e.getAttribute(dc), t);
}
function mc(e, t) {
	if (e == null) return !1;
	if (e === "") return !0;
	{
		let n = e.split(",");
		return t === 0 && n.includes("children") ? !0 : n.includes(fc[t]);
	}
}
function hc(e, t) {
	return pc(e.parentElement, 1) || gc(e) || _c(t);
}
function gc(e) {
	return e.nodeType === 1 && mc(e.getAttribute(dc), 1);
}
function _c({ props: e }) {
	let t = e && e[dc];
	return typeof t == "string" && mc(t, 1);
}
var vc = Ir().requestIdleCallback || ((e) => setTimeout(e, 1)), yc = Ir().cancelIdleCallback || ((e) => clearTimeout(e)), bc = (e = 1e4) => (t) => {
	let n = vc(t, { timeout: e });
	return () => yc(n);
};
function xc(e) {
	let { top: t, left: n, bottom: r, right: i } = e.getBoundingClientRect(), { innerHeight: a, innerWidth: o } = window;
	return (t > 0 && t < a || r > 0 && r < a) && (n > 0 && n < o || i > 0 && i < o);
}
var Sc = (e) => (t, n) => {
	let r = new IntersectionObserver((e) => {
		for (let n of e) if (n.isIntersecting) {
			r.disconnect(), t();
			break;
		}
	}, e);
	return n((e) => {
		if (e instanceof Element) {
			if (xc(e)) return t(), r.disconnect(), !1;
			r.observe(e);
		}
	}), () => r.disconnect();
}, Cc = (e) => (t) => {
	if (e) {
		let n = matchMedia(e);
		if (n.matches) t();
		else return n.addEventListener("change", t, { once: !0 }), () => n.removeEventListener("change", t);
	}
}, wc = (e = []) => (t, n) => {
	z(e) && (e = [e]);
	let r = !1, i = (e) => {
		r || (r = !0, a(), t(), e.target.dispatchEvent(new e.constructor(e.type, e)));
	}, a = () => {
		n((t) => {
			for (let n of e) t.removeEventListener(n, i);
		});
	};
	return n((t) => {
		for (let n of e) t.addEventListener(n, i, { once: !0 });
	}), a;
};
function Tc(e, t) {
	if (ec(e) && e.data === "[") {
		let n = 1, r = e.nextSibling;
		for (; r;) {
			if (r.nodeType === 1) {
				if (t(r) === !1) break;
			} else if (ec(r)) {
				if (r.data === "]") {
					if (--n === 0) break;
				} else r.data === "[" && n++;
			}
			r = r.nextSibling;
		}
	} else t(e);
}
var Ec = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function Dc(e) {
	R(e) && (e = { loader: e });
	let { loader: t, loadingComponent: n, errorComponent: r, delay: i = 200, hydrate: a, timeout: o, suspensible: s = !0, onError: c } = e, l = null, u, d = 0, f = () => (d++, l = null, p()), p = () => {
		let e;
		return l || (e = l = t().catch((e) => {
			if (e = e instanceof Error ? e : Error(String(e)), c) return new Promise((t, n) => {
				c(e, () => t(f()), () => n(e), d + 1);
			});
			throw e;
		}).then((t) => e !== l && l ? l : (t && (t.__esModule || t[Symbol.toStringTag] === "Module") && (t = t.default), u = t, t)));
	};
	return /* @__PURE__ */ Vs({
		name: "AsyncComponentWrapper",
		__asyncLoader: p,
		__asyncHydrate(e, t, n) {
			let r = e.isConnected, i = !1;
			(t.bu ||= []).push(() => i = !0);
			let o = () => {
				i || !e.parentNode || r && !e.isConnected || n();
			}, s = a ? () => {
				let n = a(o, (t) => Tc(e, t));
				n && (t.bum ||= []).push(n);
			} : o;
			u ? s() : p().then(() => !t.isUnmounted && s());
		},
		get __asyncResolved() {
			return u;
		},
		setup() {
			let e = Q;
			if (Us(e), u) return () => Oc(u, e);
			let t = (t) => {
				l = null, Do(t, e, 13, !r);
			};
			if (s && e.suspense || gd) return p().then((t) => () => Oc(t, e)).catch((e) => (t(e), () => r ? Z(r, { error: e }) : null));
			let a = /* @__PURE__ */ Ra(!1), c = /* @__PURE__ */ Ra(), d = /* @__PURE__ */ Ra(!!i), f, m;
			return Gc(() => {
				f != null && clearTimeout(f), m != null && clearTimeout(m);
			}), i && (m = setTimeout(() => {
				e.isUnmounted || (d.value = !1);
			}, i)), o != null && (f = setTimeout(() => {
				if (!e.isUnmounted && !a.value && !c.value) {
					let e = /* @__PURE__ */ Error(`Async component timed out after ${o}ms.`);
					t(e), c.value = e;
				}
			}, o)), p().then(() => {
				e.isUnmounted || (a.value = !0, e.parent && kc(e.parent.vnode) && e.parent.update());
			}).catch((n) => {
				if (e.isUnmounted) {
					l = null;
					return;
				}
				t(n), c.value = n;
			}), () => {
				if (a.value && u) return Oc(u, e);
				if (c.value && r) return Z(r, { error: c.value });
				if (n && !d.value) return Oc(n, e);
			};
		}
	});
}
function Oc(e, t) {
	let { ref: n, props: r, children: i, ce: a } = t.vnode, o = Z(e, r, i);
	return o.ref = n, o.ce = a, delete t.vnode.ce, o;
}
var kc = (e) => e.type.__isKeepAlive, Ac = {
	name: "KeepAlive",
	__isKeepAlive: !0,
	props: {
		include: [
			String,
			RegExp,
			Array
		],
		exclude: [
			String,
			RegExp,
			Array
		],
		max: [String, Number]
	},
	setup(e, { slots: t }) {
		let n = ud(), r = n.ctx;
		if (!r.renderer) return () => {
			let e = t.default && t.default();
			return e && e.length === 1 ? e[0] : e;
		};
		let i = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Set(), o = null, s = n.suspense, { renderer: { p: c, m: l, um: u, o: { createElement: d } } } = r, f = d("div");
		r.activate = (e, t, n, r, i) => {
			let a = e.component;
			l(e, t, n, 0, s), c(a.vnode, e, t, n, a, s, r, e.slotScopeIds, i), J(() => {
				a.isDeactivated = !1, a.a && jr(a.a);
				let t = e.props && e.props.onVnodeMounted;
				t && od(t, a.parent, e);
			}, s);
		}, r.deactivate = (e) => {
			let t = e.component;
			vu(t.m), vu(t.a), l(e, f, null, 1, s), J(() => {
				t.da && jr(t.da);
				let n = e.props && e.props.onVnodeUnmounted;
				n && od(n, t.parent, e), t.isDeactivated = !0;
			}, s);
		};
		function p(e) {
			Ic(e), u(e, n, s, !0);
		}
		function m(e) {
			i.forEach((t, n) => {
				let r = Ad(Ec(t) ? t.type.__asyncResolved || {} : t.type);
				r && !e(r) && h(n);
			});
		}
		function h(e) {
			let t = i.get(e);
			t && (!o || !Gu(t, o)) ? p(t) : o && Ic(o), i.delete(e), a.delete(e);
		}
		us(() => [e.include, e.exclude], ([e, t]) => {
			e && m((t) => jc(e, t)), t && m((e) => !jc(t, e));
		}, {
			flush: "post",
			deep: !0
		});
		let g = null, _ = () => {
			g != null && (bu(n.subTree.type) ? J(() => {
				i.set(g, Lc(n.subTree));
			}, n.subTree.suspense) : i.set(g, Lc(n.subTree)));
		};
		return Vc(_), Uc(_), Wc(() => {
			i.forEach((e) => {
				let { subTree: t, suspense: r } = n, i = Lc(t);
				if (e.type === i.type && e.key === i.key) {
					Ic(i);
					let e = i.component.da;
					e && J(e, r);
					return;
				}
				p(e);
			});
		}), () => {
			if (g = null, !t.default) return o = null;
			let n = t.default(), r = n[0];
			if (n.length > 1) return o = null, n;
			if (!Wu(r) || !(r.shapeFlag & 4) && !(r.shapeFlag & 128)) return o = null, r;
			let s = Lc(r);
			if (s.type === X) return o = null, s;
			let c = s.type, l = Ad(Ec(s) ? s.type.__asyncResolved || {} : c), { include: u, exclude: d, max: f } = e;
			if (u && (!l || !jc(u, l)) || d && l && jc(d, l)) return s.shapeFlag &= -257, o = s, r;
			let p = s.key == null ? c : s.key, m = i.get(p);
			return s.el && (s = Qu(s), r.shapeFlag & 128 && (r.ssContent = s)), g = p, m ? (s.el = m.el, s.component = m.component, s.transition && zs(s, s.transition), s.shapeFlag |= 512, a.delete(p), a.add(p)) : (a.add(p), f && a.size > parseInt(f, 10) && h(a.values().next().value)), s.shapeFlag |= 256, o = s, bu(r.type) ? r : s;
		};
	}
};
function jc(e, t) {
	return L(e) ? e.some((e) => jc(e, t)) : z(e) ? e.split(",").includes(t) : gr(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Mc(e, t) {
	Pc(e, "a", t);
}
function Nc(e, t) {
	Pc(e, "da", t);
}
function Pc(e, t, n = Q) {
	let r = e.__wdc ||= () => {
		let t = n;
		for (; t;) {
			if (t.isDeactivated) return;
			t = t.parent;
		}
		return e();
	};
	if (Rc(t, r, n), n) {
		let e = n.parent;
		for (; e && e.parent;) kc(e.parent.vnode) && Fc(r, t, n, e), e = e.parent;
	}
}
function Fc(e, t, n, r) {
	let i = Rc(t, e, r, !0);
	Gc(() => {
		dr(r[t], i);
	}, n);
}
function Ic(e) {
	e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function Lc(e) {
	return e.shapeFlag & 128 ? e.ssContent : e;
}
function Rc(e, t, n = Q, r = !1) {
	if (n) {
		let i = n[e] || (n[e] = []), a = t.__weh ||= (...r) => {
			ji();
			let i = pd(n), a = Eo(t, n, e, r);
			return i(), Mi(), a;
		};
		return r ? i.unshift(a) : i.push(a), a;
	}
}
var zc = (e) => (t, n = Q) => {
	(!gd || e === "sp") && Rc(e, (...e) => t(...e), n);
}, Bc = zc("bm"), Vc = zc("m"), Hc = zc("bu"), Uc = zc("u"), Wc = zc("bum"), Gc = zc("um"), Kc = zc("sp"), qc = zc("rtg"), Jc = zc("rtc");
function Yc(e, t = Q) {
	Rc("ec", e, t);
}
var Xc = "components", Zc = "directives";
function Qc(e, t) {
	return nl(Xc, e, !0, t) || e;
}
var $c = /* @__PURE__ */ Symbol.for("v-ndc");
function el(e) {
	return z(e) ? nl(Xc, e, !1) || e : e || $c;
}
function tl(e) {
	return nl(Zc, e);
}
function nl(e, t, n = !0, r = !1) {
	let i = q || Q;
	if (i) {
		let n = i.type;
		if (e === Xc) {
			let e = Ad(n, !1);
			if (e && (e === t || e === V(t) || e === kr(V(t)))) return n;
		}
		let a = rl(i[e] || n[e], t) || rl(i.appContext[e], t);
		return !a && r ? n : a;
	}
}
function rl(e, t) {
	return e && (e[t] || e[V(t)] || e[kr(V(t))]);
}
function il(e, t, n, r) {
	let i, a = n && n[r], o = L(e);
	if (o || z(e)) {
		let n = o && /* @__PURE__ */ ja(e), r = !1, s = !1;
		n && (r = !/* @__PURE__ */ Na(e), s = /* @__PURE__ */ Ma(e), e = Ki(e)), i = Array(e.length);
		for (let n = 0, o = e.length; n < o; n++) i[n] = t(r ? s ? La(Ia(e[n])) : Ia(e[n]) : e[n], n, void 0, a && a[n]);
	} else if (typeof e == "number") {
		i = Array(e);
		for (let n = 0; n < e; n++) i[n] = t(n + 1, n, void 0, a && a[n]);
	} else if (B(e)) {
		if (e[Symbol.iterator]) i = Array.from(e, (e, n) => t(e, n, void 0, a && a[n]));
		else {
			let n = Object.keys(e);
			i = Array(n.length);
			for (let r = 0, o = n.length; r < o; r++) {
				let o = n[r];
				i[r] = t(e[o], o, r, a && a[r]);
			}
		}
	} else i = [];
	return n && (n[r] = i), i;
}
function al(e, t) {
	for (let n = 0; n < t.length; n++) {
		let r = t[n];
		if (L(r)) for (let t = 0; t < r.length; t++) e[r[t].name] = r[t].fn;
		else r && (e[r.name] = r.key ? (...e) => {
			let t = r.fn(...e);
			return t && (t.key = r.key), t;
		} : r.fn);
	}
	return e;
}
function ol(e, t, n, r, i, a) {
	if (n ??= {}, q.ce || q.parent && Ec(q.parent) && q.parent.ce) {
		let e = a != null && n.key == null ? F({}, n, { key: a }) : n, i = Object.keys(e).length > 0;
		return t !== "default" && (e.name = t), Lu(), Uu(Y, null, [Z("slot", e, r && r())], i ? -2 : 64);
	}
	let o = e[t];
	o && o._c && (o._d = !1);
	let s = Fu.length;
	Lu();
	let c;
	try {
		let i = o && sl(o(n)), s = n.key || a || i && i.key;
		c = Uu(Y, { key: (s && !_r(s) ? s : `_${t}`) + (!i && r ? "_fb" : "") }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
	} catch (e) {
		for (let e = Fu.length; e > s; e--) Ru();
		throw e;
	} finally {
		o && o._c && (o._d = !0);
	}
	return !i && c.scopeId && (c.slotScopeIds = [c.scopeId + "-s"]), c;
}
function sl(e) {
	return e.some((e) => !Wu(e) || !(e.type === X || e.type === Y && !sl(e.children))) ? e : null;
}
function cl(e, t) {
	let n = {};
	for (let r in e) n[t && /[A-Z]/.test(r) ? `on:${r}` : Ar(r)] = e[r];
	return n;
}
var ll = (e) => e ? hd(e) ? Dd(e) : ll(e.parent) : null, ul = /* @__PURE__ */ F(/* @__PURE__ */ Object.create(null), {
	$: (e) => e,
	$el: (e) => e.vnode.el,
	$data: (e) => e.data,
	$props: (e) => e.props,
	$attrs: (e) => e.attrs,
	$slots: (e) => e.slots,
	$refs: (e) => e.refs,
	$parent: (e) => ll(e.parent),
	$root: (e) => ll(e.root),
	$host: (e) => e.ce,
	$emit: (e) => e.emit,
	$options: (e) => e.type,
	$forceUpdate: (e) => e.f ||= () => {
		Ro(e.update);
	},
	$nextTick: (e) => e.n ||= Io.bind(e.proxy),
	$watch: (e) => sr
}), dl = (e, t) => e !== P && !e.__isScriptSetup && I(e, t), fl = {
	get({ _: e }, t) {
		if (t === "__v_skip") return !0;
		let { ctx: n, setupState: r, data: i, props: a, accessCache: o, type: s, appContext: c } = e;
		if (t[0] !== "$") {
			let e = o[t];
			if (e !== void 0) switch (e) {
				case 1: return r[t];
				case 2: return i[t];
				case 4: return n[t];
				case 3: return a[t];
			}
			else if (dl(r, t)) return o[t] = 1, r[t];
			else if (I(a, t)) return o[t] = 3, a[t];
			else if (n !== P && I(n, t)) return o[t] = 4, n[t];
			else o[t] = 0;
		}
		let l = ul[t], u, d;
		if (l) return t === "$attrs" && Hi(e.attrs, "get", ""), l(e);
		if ((u = s.__cssModules) && (u = u[t])) return u;
		if (n !== P && I(n, t)) return o[t] = 4, n[t];
		if (d = c.config.globalProperties, I(d, t)) return d[t];
	},
	set({ _: e }, t, n) {
		let { data: r, setupState: i, ctx: a } = e;
		return dl(i, t) ? (i[t] = n, !0) : I(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (a[t] = n, !0);
	},
	has({ _: { data: e, setupState: t, accessCache: n, ctx: r, appContext: i, props: a, type: o } }, s) {
		let c;
		return !!(n[s] || dl(t, s) || I(a, s) || I(r, s) || I(ul, s) || I(i.config.globalProperties, s) || (c = o.__cssModules) && c[s]);
	},
	defineProperty(e, t, n) {
		return n.get == null ? I(n, "value") && this.set(e, t, n.value, null) : e._.accessCache[t] = 0, Reflect.defineProperty(e, t, n);
	}
}, pl = /* @__PURE__ */ F({}, fl, {
	get(e, t) {
		if (t !== Symbol.unscopables) return fl.get(e, t, e);
	},
	has(e, t) {
		return t[0] !== "_" && !Lr(t);
	}
});
function ml() {
	return null;
}
function hl() {
	return null;
}
function gl(e) {}
function _l(e) {}
function vl() {
	return null;
}
function yl() {}
function bl(e, t) {
	return null;
}
function xl() {
	return Cl("useSlots").slots;
}
function Sl() {
	return Cl("useAttrs").attrs;
}
function Cl(e) {
	let t = ud();
	return t.setupContext ||= Ed(t);
}
function wl(e) {
	return L(e) ? e.reduce((e, t) => (e[t] = null, e), {}) : e;
}
function Tl(e, t) {
	let n = wl(e);
	for (let e in t) {
		if (e.startsWith("__skip")) continue;
		let r = n[e];
		r ? L(r) || R(r) ? r = n[e] = {
			type: r,
			default: t[e]
		} : r.default = t[e] : r === null && (r = n[e] = { default: t[e] }), r && t[`__skip_${e}`] && (r.skipFactory = !0);
	}
	return n;
}
function El(e, t) {
	return !e || !t ? e || t : L(e) && L(t) ? e.concat(t) : F({}, wl(e), wl(t));
}
function Dl(e, t) {
	let n = {};
	for (let r in e) t.includes(r) || Object.defineProperty(n, r, {
		enumerable: !0,
		get: () => e[r]
	});
	return n;
}
function Ol(e) {
	let t = ud(), n = gd, r = e();
	md(), n && fd(!1);
	let i = () => {
		pd(t), n && fd(!0);
	}, a = () => {
		ud() !== t && t.scope.off(), md(), n && fd(!1);
	};
	return vr(r) && (r = r.catch((e) => {
		throw i(), Promise.resolve().then(() => Promise.resolve().then(a)), e;
	})), [r, () => {
		i(), Promise.resolve().then(a);
	}];
}
function kl() {
	return {
		app: null,
		config: {
			isNativeTag: cr,
			performance: !1,
			globalProperties: {},
			optionMergeStrategies: {},
			errorHandler: void 0,
			warnHandler: void 0,
			compilerOptions: {}
		},
		mixins: [],
		components: {},
		directives: {},
		provides: /* @__PURE__ */ Object.create(null),
		optionsCache: /* @__PURE__ */ new WeakMap(),
		propsCache: /* @__PURE__ */ new WeakMap(),
		emitsCache: /* @__PURE__ */ new WeakMap()
	};
}
var Al = 0;
function jl(e, t) {
	return function(n, r = null) {
		R(n) || (n = F({}, n)), r != null && !B(r) && (r = null);
		let i = kl(), a = /* @__PURE__ */ new WeakSet(), o = [], s = !1, c = i.app = {
			_uid: Al++,
			_component: n,
			_props: r,
			_container: null,
			_context: i,
			_instance: null,
			version: Rd,
			get config() {
				return i.config;
			},
			set config(e) {},
			use(e, ...t) {
				return a.has(e) || (e && R(e.install) ? (a.add(e), e.install(c, ...t)) : R(e) && (a.add(e), e(c, ...t))), c;
			},
			mixin(e) {
				return c;
			},
			component(e, t) {
				return t ? (i.components[e] = t, c) : i.components[e];
			},
			directive(e, t) {
				return t ? (i.directives[e] = t, c) : i.directives[e];
			},
			mount(a, o, l) {
				if (!s) {
					let u = c._ceVNode || Z(n, r);
					return u.appContext = i, l === !0 ? l = "svg" : l === !1 && (l = void 0), o && t ? t(u, a) : e(u, a, l), s = !0, c._container = a, a.__vue_app__ = c, Dd(u.component);
				}
			},
			onUnmount(e) {
				o.push(e);
			},
			unmount() {
				s && (Eo(o, c._instance, 16), e(null, c._container), delete c._container.__vue_app__);
			},
			provide(e, t) {
				return i.provides[e] = t, c;
			},
			runWithContext(e) {
				let t = Ml;
				Ml = c;
				try {
					return e();
				} finally {
					Ml = t;
				}
			}
		};
		return c;
	};
}
var Ml = null;
function Nl(e, t, n = P) {
	let r = ud(), i = V(t), a = Or(t), o = Pl(e, i), s = Ja((o, s) => {
		let c, l = P, u;
		return ls(() => {
			let t = e[i];
			H(c, t) && (c = t, s());
		}), {
			get() {
				return o(), n.get ? n.get(c) : c;
			},
			set(e) {
				let o = n.set ? n.set(e) : e;
				if (!H(o, c) && !(l !== P && H(e, l))) return;
				let d = r.vnode.props, f = !!(d && (t in d || i in d || a in d) && (`onUpdate:${t}` in d || `onUpdate:${i}` in d || `onUpdate:${a}` in d));
				f || (c = e, s()), r.emit(`update:${t}`, o), H(e, l) && (H(e, o) && !H(o, u) || f && l !== P && !H(o, c)) && s(), l = e, u = o;
			}
		};
	});
	return s[Symbol.iterator] = () => {
		let e = 0;
		return { next() {
			return e < 2 ? {
				value: e++ ? o || P : s,
				done: !1
			} : { done: !0 };
		} };
	}, s;
}
var Pl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${V(t)}Modifiers`] || e[`${Or(t)}Modifiers`];
function Fl(e, t, ...n) {
	if (e.isUnmounted) return;
	let r = e.vnode.props || P, i = n, a = t.startsWith("update:"), o = a && Pl(r, t.slice(7));
	o && (o.trim && (i = n.map((e) => z(e) ? e.trim() : e)), o.number && (i = n.map(Nr)));
	let s, c = r[s = Ar(t)] || r[s = Ar(V(t))];
	!c && a && (c = r[s = Ar(Or(t))]), c && Eo(c, e, 6, i);
	let l = r[s + "Once"];
	if (l) {
		if (!e.emitted) e.emitted = {};
		else if (e.emitted[s]) return;
		e.emitted[s] = !0, Eo(l, e, 6, i);
	}
}
function Il(e, t, n = !1) {
	let r = t.emitsCache, i = r.get(e);
	if (i !== void 0) return i;
	let a = e.emits, o = {};
	return a ? (L(a) ? a.forEach((e) => o[e] = null) : F(o, a), B(e) && r.set(e, o), o) : (B(e) && r.set(e, null), null);
}
function Ll(e, t) {
	return !e || !lr(t) ? !1 : (t = t.slice(2), t = t === "Once" ? t : t.replace(/Once$/, ""), I(e, t[0].toLowerCase() + t.slice(1)) || I(e, Or(t)) || I(e, t));
}
function Rl(e) {
	let { type: t, vnode: n, proxy: r, withProxy: i, propsOptions: [a], slots: o, attrs: s, emit: c, render: l, renderCache: u, props: d, data: f, setupState: p, ctx: m, inheritAttrs: h } = e, g = Yo(e), _, v;
	try {
		if (n.shapeFlag & 4) {
			let e = i || r, t = e;
			_ = nd(l.call(t, e, u, d, p, f, m)), v = s;
		} else {
			let e = t;
			_ = nd(e.length > 1 ? e(d, {
				attrs: s,
				slots: o,
				emit: c
			}) : e(d, null)), v = t.props ? s : Bl(s);
		}
	} catch (t) {
		Fu.length = 0, Do(t, e, 1), _ = Z(X);
	}
	let y = _;
	if (v && h !== !1) {
		let e = Object.keys(v), { shapeFlag: t } = y;
		e.length && t & 7 && (a && e.some(ur) && (v = Vl(v, a)), y = Qu(y, v, !1, !0));
	}
	return n.dirs && (y = Qu(y, null, !1, !0), y.dirs = y.dirs ? y.dirs.concat(n.dirs) : n.dirs), n.transition && zs(ms(y.type) && Rs(y) || y, n.transition), _ = y, Yo(g), _;
}
function zl(e, t = !0) {
	let n;
	for (let t = 0; t < e.length; t++) {
		let r = e[t];
		if (Wu(r)) {
			if (r.type !== X || r.children === "v-if") {
				if (n) return;
				n = r;
			}
		} else return;
	}
	return n;
}
var Bl = (e) => {
	let t;
	for (let n in e) (n === "class" || n === "style" || lr(n)) && ((t ||= {})[n] = e[n]);
	return t;
}, Vl = (e, t) => {
	let n = {};
	for (let r in e) (!ur(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
	return n;
};
function Hl(e, t, n) {
	let { props: r, children: i, component: a } = e, { props: o, children: s, patchFlag: c } = t, l = a.emitsOptions;
	if (t.dirs || t.transition) return !0;
	if (n && c >= 0) {
		if (c & 1024) return !0;
		if (c & 16) return r ? Ul(r, o, l) : !!o;
		if (c & 8) {
			let e = t.dynamicProps;
			for (let t = 0; t < e.length; t++) {
				let n = e[t];
				if (Wl(o, r, n) && !Ll(l, n)) return !0;
			}
		}
	} else return (i || s) && (!s || !s.$stable) ? !0 : r === o ? !1 : r ? !o || Ul(r, o, l) : !!o;
	return !1;
}
function Ul(e, t, n) {
	let r = Object.keys(t);
	if (r.length !== Object.keys(e).length) return !0;
	for (let i = 0; i < r.length; i++) {
		let a = r[i];
		if (Wl(t, e, a) && !Ll(n, a)) return !0;
	}
	return !1;
}
function Wl(e, t, n) {
	let r = e[n], i = t[n];
	return n === "style" && B(r) && B(i) ? !ni(r, i) : r !== i;
}
function Gl({ vnode: e, parent: t, suspense: n }, r) {
	for (; t;) {
		let n = t.subTree;
		if (n.suspense && n.suspense.activeBranch === e && (n.suspense.vnode.el = n.el = r, e = n), n === e) (e = t.vnode).el = r, t = t.parent;
		else break;
	}
	n && n.activeBranch === e && (n.vnode.el = r);
}
var Kl = {}, ql = () => Object.create(Kl), Jl = (e) => Object.getPrototypeOf(e) === Kl;
function Yl(e, t, n, r = !1) {
	let i = {}, a = ql();
	e.propsDefaults = /* @__PURE__ */ Object.create(null), Zl(e, t, i, a);
	for (let t in e.propsOptions[0]) t in i || (i[t] = void 0);
	e.props = n ? r ? i : /* @__PURE__ */ Da(i) : e.type.props ? i : a, e.attrs = a;
}
function Xl(e, t, n, r) {
	let { props: i, attrs: a, vnode: { patchFlag: o } } = e, s = /* @__PURE__ */ G(i), [c] = e.propsOptions, l = !1;
	if ((r || o > 0) && !(o & 16)) {
		if (o & 8) {
			let n = e.vnode.dynamicProps;
			for (let r = 0; r < n.length; r++) {
				let o = n[r];
				if (Ll(e.emitsOptions, o)) continue;
				let u = t[o];
				if (c) {
					if (I(a, o)) u !== a[o] && (a[o] = u, l = !0);
					else {
						let t = V(o);
						i[t] = Ql(c, s, t, u, e, !1);
					}
				} else u !== a[o] && (a[o] = u, l = !0);
			}
		}
	} else {
		Zl(e, t, i, a) && (l = !0);
		let r;
		for (let a in s) (!t || !I(t, a) && ((r = Or(a)) === a || !I(t, r))) && (c ? n && (n[a] !== void 0 || n[r] !== void 0) && (i[a] = Ql(c, s, a, void 0, e, !0)) : delete i[a]);
		if (a !== s) for (let e in a) (!t || !I(t, e)) && (delete a[e], l = !0);
	}
	l && Ui(e.attrs, "set", "");
}
function Zl(e, t, n, r) {
	let [i, a] = e.propsOptions, o = !1, s;
	if (t) for (let c in t) {
		if (wr(c)) continue;
		let l = t[c], u;
		i && I(i, u = V(c)) ? !a || !a.includes(u) ? n[u] = l : (s ||= {})[u] = l : Ll(e.emitsOptions, c) || (!(c in r) || l !== r[c]) && (r[c] = l, o = !0);
	}
	if (a) {
		let t = /* @__PURE__ */ G(n), r = s || P;
		for (let o = 0; o < a.length; o++) {
			let s = a[o];
			n[s] = Ql(i, t, s, r[s], e, !I(r, s));
		}
	}
	return o;
}
function Ql(e, t, n, r, i, a) {
	let o = e[n];
	if (o != null) {
		let e = I(o, "default");
		if (e && r === void 0) {
			let e = o.default;
			if (o.type !== Function && !o.skipFactory && R(e)) {
				let { propsDefaults: a } = i;
				if (n in a) r = a[n];
				else {
					let o = pd(i);
					r = a[n] = e.call(null, t), o();
				}
			} else r = e;
			i.ce && i.ce._setProp(n, r);
		}
		o[0] && (a && !e ? r = !1 : o[1] && (r === "" || r === Or(n)) && (r = !0));
	}
	return r;
}
function $l(e, t, n = !1) {
	let r = t.propsCache, i = r.get(e);
	if (i) return i;
	let a = e.props, o = {}, s = [];
	if (!a) return B(e) && r.set(e, or), or;
	if (L(a)) for (let e = 0; e < a.length; e++) {
		let t = V(a[e]);
		eu(t) && (o[t] = P);
	}
	else if (a) for (let e in a) {
		let t = V(e);
		if (eu(t)) {
			let n = a[e], r = o[t] = L(n) || R(n) ? { type: n } : F({}, n), i = r.type, c = !1, l = !0;
			if (L(i)) for (let e = 0; e < i.length; ++e) {
				let t = i[e], n = R(t) && t.name;
				if (n === "Boolean") {
					c = !0;
					break;
				}
				n === "String" && (l = !1);
			}
			else c = R(i) && i.name === "Boolean";
			r[0] = c, r[1] = l, (c || I(r, "default")) && s.push(t);
		}
	}
	let c = [o, s];
	return B(e) && r.set(e, c), c;
}
function eu(e) {
	return e[0] !== "$" && !wr(e);
}
var tu = (e) => e === "_" || e === "_ctx" || e === "$stable", nu = (e) => L(e) ? e.map(nd) : [nd(e)], ru = (e, t, n) => {
	if (t._n) return t;
	let r = $o((...e) => nu(t(...e)), n);
	return r._c = !1, r;
}, iu = (e, t, n) => {
	let r = e._ctx;
	for (let n in e) {
		if (tu(n)) continue;
		let i = e[n];
		if (R(i)) t[n] = ru(n, i, r);
		else if (i != null) {
			let e = nu(i);
			t[n] = () => e;
		}
	}
}, au = (e, t) => {
	let n = nu(t);
	e.slots.default = () => n;
}, ou = (e, t, n) => {
	for (let r in t) (n || !tu(r)) && (e[r] = t[r]);
}, su = (e, t, n) => {
	let r = e.slots = ql();
	if (e.vnode.shapeFlag & 32) {
		let e = t._;
		e ? (ou(r, t, n), n && Mr(r, "_", e, !0)) : iu(t, r);
	} else t && au(e, t);
}, cu = (e, t, n) => {
	let { vnode: r, slots: i } = e, a = !0, o = P;
	if (r.shapeFlag & 32) {
		let e = t._;
		e ? n && e === 1 ? a = !1 : ou(i, t, n) : (a = !t.$stable, iu(t, i)), o = t;
	} else t && (au(e, t), o = { default: 1 });
	if (a) for (let e in i) !tu(e) && o[e] == null && delete i[e];
}, J = Au;
function lu(e) {
	return du(e);
}
function uu(e) {
	return du(e, tc);
}
function du(e, t) {
	let n = Ir();
	n.__VUE__ = !0;
	let { insert: r, remove: i, patchProp: a, createElement: o, createText: s, createComment: c, setText: l, setElementText: u, parentNode: d, nextSibling: f, setScopeId: p = sr, insertStaticContent: m } = e, h = (e, t, n, r = null, i = null, a = null, o = void 0, s = null, c = !!t.dynamicChildren) => {
		if (e === t) return;
		e && !Gu(e, t) && (r = de(e), oe(e, i, a, !0), e = null), t.patchFlag === -2 && (c = !1, t.dynamicChildren = null);
		let { type: l, ref: u, shapeFlag: d } = t;
		switch (l) {
			case Nu:
				g(e, t, n, r);
				break;
			case X:
				_(e, t, n, r);
				break;
			case Pu:
				e ?? v(t, n, r, o);
				break;
			case Y:
				O(e, t, n, r, i, a, o, s, c);
				break;
			default: d & 1 ? x(e, t, n, r, i, a, o, s, c) : d & 6 ? k(e, t, n, r, i, a, o, s, c) : (d & 64 || d & 128) && l.process(e, t, n, r, i, a, o, s, c, me);
		}
		u != null && i ? qs(u, e && e.ref, a, t || e, !t) : u == null && e && e.ref != null && qs(e.ref, null, a, e, !0);
	}, g = (e, t, n, i) => {
		if (e == null) r(t.el = s(t.children), n, i);
		else {
			let n = t.el = e.el;
			t.children !== e.children && l(n, t.children);
		}
	}, _ = (e, t, n, i) => {
		e == null ? r(t.el = c(t.children || ""), n, i) : t.el = e.el;
	}, v = (e, t, n, r) => {
		[e.el, e.anchor] = m(e.children, t, n, r, e.el, e.anchor);
	}, y = ({ el: e, anchor: t }, n, i) => {
		let a;
		for (; e && e !== t;) a = f(e), r(e, n, i), e = a;
		r(t, n, i);
	}, b = ({ el: e, anchor: t }) => {
		let n;
		for (; e && e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, x = (e, t, n, r, i, a, o, s, c) => {
		if (t.type === "svg" ? o = "svg" : t.type === "math" && (o = "mathml"), e == null) S(t, n, r, i, a, o, s, c);
		else {
			let n = e.el && e.el._isVueCE ? e.el : null;
			try {
				n && n._beginPatch(), T(e, t, i, a, o, s, c);
			} finally {
				n && n._endPatch();
			}
		}
	}, S = (e, t, n, i, s, c, l, d) => {
		let f, p, { props: m, shapeFlag: h, transition: g, dirs: _ } = e;
		if (f = e.el = o(e.type, c, m && m.is, m), h & 8 ? u(f, e.children) : h & 16 && w(e.children, f, null, i, s, fu(e, c), l, d), _ && ts(e, null, i, "created"), C(f, e, e.scopeId, l, i), m) {
			for (let e in m) e !== "value" && !wr(e) && a(f, e, null, m[e], c, i);
			"value" in m && a(f, "value", null, m.value, c), (p = m.onVnodeBeforeMount) && od(p, i, e);
		}
		_ && ts(e, null, i, "beforeMount");
		let v = mu(s, g);
		v && g.beforeEnter(f), r(f, t, n), ((p = m && m.onVnodeMounted) || v || _) && J(() => {
			try {
				p && od(p, i, e), v && g.enter(f), _ && ts(e, null, i, "mounted");
			} finally {}
		}, s);
	}, C = (e, t, n, r, i) => {
		if (n && p(e, n), r) for (let t = 0; t < r.length; t++) p(e, r[t]);
		if (i) {
			let n = i.subTree;
			if (t === n || bu(n.type) && (n.ssContent === t || n.ssFallback === t)) {
				let t = i.vnode;
				C(e, t, t.scopeId, t.slotScopeIds, i.parent);
			}
		}
	}, w = (e, t, n, r, i, a, o, s, c = 0) => {
		for (let l = c; l < e.length; l++) {
			let c = e[l] = s ? rd(e[l]) : nd(e[l]);
			h(null, c, t, n, r, i, a, o, s);
		}
	}, T = (e, t, n, r, i, o, s) => {
		let c = t.el = e.el, { patchFlag: l, dynamicChildren: d, dirs: f } = t;
		l |= e.patchFlag & 16;
		let p = e.props || P, m = t.props || P, h;
		if (n && pu(n, !1), (h = m.onVnodeBeforeUpdate) && od(h, n, t, e), f && ts(t, e, n, "beforeUpdate"), n && pu(n, !0), d && (!e.dynamicChildren || e.dynamicChildren.length !== d.length) && (l = 0, s = !1, d = null), (p.innerHTML && m.innerHTML == null || p.textContent && m.textContent == null) && u(c, ""), d ? E(e.dynamicChildren, d, c, n, r, fu(t, i), o) : s || j(e, t, c, null, n, r, fu(t, i), o, !1), l > 0) {
			if (l & 16) D(c, p, m, n, i);
			else if (l & 2 && p.class !== m.class && a(c, "class", null, m.class, i), l & 4 && a(c, "style", p.style, m.style, i), l & 8) {
				let e = t.dynamicProps;
				for (let t = 0; t < e.length; t++) {
					let r = e[t], o = p[r], s = m[r];
					(s !== o || r === "value") && a(c, r, o, s, i, n);
				}
			}
			l & 1 && e.children !== t.children && u(c, t.children);
		} else !s && d == null && D(c, p, m, n, i);
		((h = m.onVnodeUpdated) || f) && J(() => {
			h && od(h, n, t, e), f && ts(t, e, n, "updated");
		}, r);
	}, E = (e, t, n, r, i, a, o) => {
		for (let s = 0; s < t.length; s++) {
			let c = e[s], l = t[s], u = c.el && (c.type === Y || !Gu(c, l) || c.shapeFlag & 198) ? d(c.el) : n;
			h(c, l, u, null, r, i, a, o, !0);
		}
	}, D = (e, t, n, r, i) => {
		if (t !== n) {
			if (t !== P) for (let o in t) !wr(o) && !(o in n) && a(e, o, t[o], null, i, r);
			for (let o in n) {
				if (wr(o)) continue;
				let s = n[o], c = t[o];
				s !== c && o !== "value" && a(e, o, c, s, i, r);
			}
			"value" in n && a(e, "value", t.value, n.value, i);
		}
	}, O = (e, t, n, i, a, o, c, l, u) => {
		let d = t.el = e ? e.el : s(""), f = t.anchor = e ? e.anchor : s(""), { patchFlag: p, dynamicChildren: m, slotScopeIds: h } = t;
		h && (l = l ? l.concat(h) : h), e == null ? (r(d, n, i), r(f, n, i), w(t.children || [], n, f, a, o, c, l, u)) : p > 0 && p & 64 && m && e.dynamicChildren && e.dynamicChildren.length === m.length ? (E(e.dynamicChildren, m, n, a, o, c, l), (t.key != null || a && t === a.subTree) && hu(e, t, !0)) : j(e, t, n, f, a, o, c, l, u);
	}, k = (e, t, n, r, i, a, o, s, c) => {
		t.slotScopeIds = s, e == null ? t.shapeFlag & 512 ? i.ctx.activate(t, n, r, o, c) : ee(t, n, r, i, a, o, c) : te(e, t, c);
	}, ee = (e, t, n, r, i, a, o) => {
		let s = e.component = ld(e, r, i);
		if (kc(e) && (s.ctx.renderer = me), _d(s, !1, o), s.asyncDep) {
			if (i && i.registerDep(s, ne, o), !e.el) {
				let r = s.subTree = Z(X);
				_(null, r, t, n), e.placeholder = r.el;
			}
		} else ne(s, e, t, n, i, a, o);
	}, te = (e, t, n) => {
		let r = t.component = e.component;
		if (Hl(e, t, n)) {
			if (r.asyncDep && !r.asyncResolved) {
				A(r, t, n);
				return;
			}
			r.next = t, r.update();
		} else t.el = e.el, r.vnode = t;
	}, ne = (e, t, n, r, i, a, o) => {
		let s = () => {
			if (e.isMounted) {
				let { next: t, bu: n, u: r, parent: s, vnode: c } = e;
				{
					let n = _u(e);
					if (n) {
						t && (t.el = c.el, A(e, t, o)), n.asyncDep.then(() => {
							J(() => {
								e.isUnmounted || l();
							}, i);
						});
						return;
					}
				}
				let u = t, f;
				pu(e, !1), t ? (t.el = c.el, A(e, t, o)) : t = c, n && jr(n), (f = t.props && t.props.onVnodeBeforeUpdate) && od(f, s, t, c), pu(e, !0);
				let p = Rl(e), m = e.subTree;
				e.subTree = p, h(m, p, d(m.el), de(m), e, i, a), t.el = p.el, u === null && Gl(e, p.el), r && J(r, i), (f = t.props && t.props.onVnodeUpdated) && J(() => od(f, s, t, c), i);
			} else {
				let o, { el: s, props: c } = t, { bm: l, m: u, parent: d, root: f, type: p } = e, m = Ec(t);
				if (pu(e, !1), l && jr(l), !m && (o = c && c.onVnodeBeforeMount) && od(o, d, t), pu(e, !0), s && ge) {
					let t = () => {
						e.subTree = Rl(e), ge(s, e.subTree, e, i, null);
					};
					m && p.__asyncHydrate ? p.__asyncHydrate(s, e, t) : t();
				} else {
					f.ce && f.ce._hasShadowRoot() && f.ce._injectChildStyle(p, e.parent ? e.parent.type : void 0);
					let o = e.subTree = Rl(e);
					h(null, o, n, r, e, i, a), t.el = o.el;
				}
				if (u && J(u, i), !m && (o = c && c.onVnodeMounted)) {
					let e = t;
					J(() => od(o, d, e), i);
				}
				(t.shapeFlag & 256 || d && Ec(d.vnode) && d.vnode.shapeFlag & 256) && e.a && J(e.a, i), e.isMounted = !0, t = n = r = null;
			}
		};
		e.scope.on();
		let c = e.effect = new mi(s);
		e.scope.off();
		let l = e.update = c.run.bind(c), u = e.job = c.runIfDirty.bind(c);
		u.i = e, u.id = e.uid, c.scheduler = () => Ro(u), pu(e, !0), l();
	}, A = (e, t, n) => {
		t.component = e;
		let r = e.vnode.props;
		e.vnode = t, e.next = null, Xl(e, t.props, r, n), cu(e, t.children, n), ji(), Vo(e), Mi();
	}, j = (e, t, n, r, i, a, o, s, c = !1) => {
		let l = e && e.children, d = e ? e.shapeFlag : 0, f = t.children, { patchFlag: p, shapeFlag: m } = t;
		if (p > 0) {
			if (p & 128) {
				ie(l, f, n, r, i, a, o, s, c);
				return;
			}
			if (p & 256) {
				re(l, f, n, r, i, a, o, s, c);
				return;
			}
		}
		m & 8 ? (d & 16 && ue(l, i, a), f !== l && u(n, f)) : d & 16 ? m & 16 ? ie(l, f, n, r, i, a, o, s, c) : ue(l, i, a, !0) : (d & 8 && u(n, ""), m & 16 && w(f, n, r, i, a, o, s, c));
	}, re = (e, t, n, r, i, a, o, s, c) => {
		e ||= or, t ||= or;
		let l = e.length, u = t.length, d = Math.min(l, u), f;
		for (f = 0; f < d; f++) {
			let r = t[f] = c ? rd(t[f]) : nd(t[f]);
			h(e[f], r, n, null, i, a, o, s, c);
		}
		l > u ? ue(e, i, a, !0, !1, d) : w(t, n, r, i, a, o, s, c, d);
	}, ie = (e, t, n, r, i, a, o, s, c) => {
		let l = 0, u = t.length, d = e.length - 1, f = u - 1;
		for (; l <= d && l <= f;) {
			let r = e[l], u = t[l] = c ? rd(t[l]) : nd(t[l]);
			if (Gu(r, u)) h(r, u, n, null, i, a, o, s, c);
			else break;
			l++;
		}
		for (; l <= d && l <= f;) {
			let r = e[d], l = t[f] = c ? rd(t[f]) : nd(t[f]);
			if (Gu(r, l)) h(r, l, n, null, i, a, o, s, c);
			else break;
			d--, f--;
		}
		if (l > d) {
			if (l <= f) {
				let e = f + 1, d = e < u ? t[e].el : r;
				for (; l <= f;) h(null, t[l] = c ? rd(t[l]) : nd(t[l]), n, d, i, a, o, s, c), l++;
			}
		} else if (l > f) for (; l <= d;) oe(e[l], i, a, !0), l++;
		else {
			let p = l, m = l, g = /* @__PURE__ */ new Map();
			for (l = m; l <= f; l++) {
				let e = t[l] = c ? rd(t[l]) : nd(t[l]);
				e.key != null && g.set(e.key, l);
			}
			let _, v = 0, y = f - m + 1, b = !1, x = 0, S = Array(y);
			for (l = 0; l < y; l++) S[l] = 0;
			for (l = p; l <= d; l++) {
				let r = e[l];
				if (v >= y) {
					oe(r, i, a, !0);
					continue;
				}
				let u;
				if (r.key != null) u = g.get(r.key);
				else for (_ = m; _ <= f; _++) if (S[_ - m] === 0 && Gu(r, t[_])) {
					u = _;
					break;
				}
				u === void 0 ? oe(r, i, a, !0) : (S[u - m] = l + 1, u >= x ? x = u : b = !0, h(r, t[u], n, null, i, a, o, s, c), v++);
			}
			let C = b ? gu(S) : or;
			for (_ = C.length - 1, l = y - 1; l >= 0; l--) {
				let e = m + l, d = t[e], f = t[e + 1], p = e + 1 < u ? f.el || yu(f) : r;
				S[l] === 0 ? h(null, d, n, p, i, a, o, s, c) : b && (_ < 0 || l !== C[_] ? ae(d, n, p, 2) : _--);
			}
		}
	}, ae = (e, t, n, a, o = null) => {
		let { el: s, type: c, transition: l, children: u, shapeFlag: d } = e;
		if (d & 6) {
			ae(e.component.subTree, t, n, a);
			return;
		}
		if (d & 128) {
			e.suspense.move(t, n, a);
			return;
		}
		if (d & 64) {
			c.move(e, t, n, me);
			return;
		}
		if (c === Y) {
			r(s, t, n);
			for (let e = 0; e < u.length; e++) ae(u[e], t, n, a);
			r(e.anchor, t, n);
			return;
		}
		if (c === Pu) {
			y(e, t, n);
			return;
		}
		if (a !== 2 && d & 1 && l) {
			if (a === 0) l.persisted && !s[Es] ? r(s, t, n) : (l.beforeEnter(s), r(s, t, n), J(() => l.enter(s), o));
			else {
				let { leave: a, delayLeave: o, afterLeave: c } = l, u = () => {
					e.ctx.isUnmounted ? i(s) : r(s, t, n);
				}, d = () => {
					let e = s._isLeaving || !!s[Es];
					s._isLeaving && s[Es](!0), l.persisted && !e ? u() : a(s, () => {
						u(), c && c();
					});
				};
				o ? o(s, u, d) : d();
			}
		} else r(s, t, n);
	}, oe = (e, t, n, r = !1, i = !1) => {
		let { type: a, props: o, ref: s, children: c, dynamicChildren: l, shapeFlag: u, patchFlag: d, dirs: f, cacheIndex: p, memo: m } = e;
		if (d === -2 && (i = !1), s != null && (ji(), qs(s, null, n, e, !0), Mi()), p != null && (t.renderCache[p] = void 0), u & 256) {
			t.ctx.deactivate(e);
			return;
		}
		let h = u & 1 && f, g = !Ec(e), _;
		if (g && (_ = o && o.onVnodeBeforeUnmount) && od(_, t, e), u & 6) le(e.component, n, r);
		else {
			if (u & 128) {
				e.suspense.unmount(n, r);
				return;
			}
			h && ts(e, null, t, "beforeUnmount"), u & 64 ? e.type.remove(e, t, n, me, r) : l && !l.hasOnce && (a !== Y || d > 0 && d & 64) ? ue(l, t, n, !1, !0) : (a === Y && d & 384 || !i && u & 16) && ue(c, t, n), r && se(e);
		}
		let v = m != null && p == null;
		(g && (_ = o && o.onVnodeUnmounted) || h || v) && J(() => {
			_ && od(_, t, e), h && ts(e, null, t, "unmounted"), v && (e.el = null);
		}, n);
	}, se = (e) => {
		let { type: t, el: n, anchor: r, transition: a } = e;
		if (t === Y) {
			ce(n, r);
			return;
		}
		if (t === Pu) {
			b(e);
			return;
		}
		let o = () => {
			i(n), a && !a.persisted && a.afterLeave && a.afterLeave();
		};
		if (e.shapeFlag & 1 && a && !a.persisted) {
			let { leave: t, delayLeave: r } = a, i = () => t(n, o);
			r ? r(e.el, o, i) : i();
		} else o();
	}, ce = (e, t) => {
		let n;
		for (; e !== t;) n = f(e), i(e), e = n;
		i(t);
	}, le = (e, t, n) => {
		let { bum: r, scope: i, job: a, subTree: o, um: s, m: c, a: l } = e;
		vu(c), vu(l), r && jr(r), i.stop(), a && (a.flags |= 8, oe(o, e, t, n)), s && J(s, t), J(() => {
			e.isUnmounted = !0;
		}, t);
	}, ue = (e, t, n, r = !1, i = !1, a = 0) => {
		for (let o = a; o < e.length; o++) oe(e[o], t, n, r, i);
	}, de = (e) => {
		if (e.shapeFlag & 6) return de(e.component.subTree);
		if (e.shapeFlag & 128) return e.suspense.next();
		let t = f(e.anchor || e.el), n = t && t[ps];
		return n ? f(n) : t;
	}, fe = !1, pe = (e, t, n) => {
		let r;
		e == null ? t._vnode && (oe(t._vnode, null, null, !0), r = t._vnode.component) : h(t._vnode || null, e, t, null, null, null, n), t._vnode = e, fe ||= (fe = !0, Vo(r), Ho(), !1);
	}, me = {
		p: h,
		um: oe,
		m: ae,
		r: se,
		mt: ee,
		mc: w,
		pc: j,
		pbc: E,
		n: de,
		o: e
	}, he, ge;
	return t && ([he, ge] = t(me)), {
		render: pe,
		hydrate: he,
		createApp: jl(pe, he)
	};
}
function fu({ type: e, props: t }, n) {
	return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function pu({ effect: e, job: t }, n) {
	n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function mu(e, t) {
	return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hu(e, t, n = !1) {
	let r = e.children, i = t.children;
	if (L(r) && L(i)) for (let e = 0; e < r.length; e++) {
		let t = r[e], a = i[e];
		a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = i[e] = rd(i[e]), a.el = t.el), !n && a.patchFlag !== -2 && hu(t, a)), a.type === Nu && (a.patchFlag === -1 && (a = i[e] = rd(a)), a.el = t.el), a.type === X && !a.el && (a.el = t.el);
	}
}
function gu(e) {
	let t = e.slice(), n = [0], r, i, a, o, s, c = e.length;
	for (r = 0; r < c; r++) {
		let c = e[r];
		if (c !== 0) {
			if (i = n[n.length - 1], e[i] < c) {
				t[r] = i, n.push(r);
				continue;
			}
			for (a = 0, o = n.length - 1; a < o;) s = a + o >> 1, e[n[s]] < c ? a = s + 1 : o = s;
			c < e[n[a]] && (a > 0 && (t[r] = n[a - 1]), n[a] = r);
		}
	}
	for (a = n.length, o = n[a - 1]; a-- > 0;) n[a] = o, o = t[o];
	return n;
}
function _u(e) {
	let t = e.subTree.component;
	if (t) return t.asyncDep && !t.asyncResolved ? t : _u(t);
}
function vu(e) {
	if (e) for (let t = 0; t < e.length; t++) e[t].flags |= 8;
}
function yu(e) {
	if (e.placeholder) return e.placeholder;
	let t = e.component;
	return t ? yu(t.subTree) : null;
}
var bu = (e) => e.__isSuspense, xu = 0, Su = {
	name: "Suspense",
	__isSuspense: !0,
	process(e, t, n, r, i, a, o, s, c, l) {
		if (e == null) wu(t, n, r, i, a, o, s, c, l);
		else {
			if (a && a.deps > 0 && !e.suspense.isInFallback) {
				t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
				return;
			}
			Tu(e, t, n, r, i, o, s, c, l);
		}
	},
	hydrate: Du,
	normalize: Ou
};
function Cu(e, t) {
	let n = e.props && e.props[t];
	R(n) && n();
}
function wu(e, t, n, r, i, a, o, s, c) {
	let { p: l, o: { createElement: u } } = c, d = u("div"), f = e.suspense = Eu(e, i, r, t, d, n, a, o, s, c);
	l(null, f.pendingBranch = e.ssContent, d, null, r, f, a, o), f.deps > 0 ? (Cu(e, "onPending"), Cu(e, "onFallback"), l(null, e.ssFallback, t, n, r, null, a, o), ju(f, e.ssFallback)) : f.resolve(!1, !0);
}
function Tu(e, t, n, r, i, a, o, s, { p: c, um: l, o: { createElement: u } }) {
	let d = t.suspense = e.suspense;
	d.vnode = t, t.el = e.el;
	let f = t.ssContent, p = t.ssFallback, { activeBranch: m, pendingBranch: h, isInFallback: g, isHydrating: _ } = d;
	if (h) d.pendingBranch = f, Gu(h, f) ? (c(h, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : g && (_ || (c(m, p, n, r, i, null, a, o, s), ju(d, p)))) : (d.pendingId = xu++, _ ? (d.isHydrating = !1, d.activeBranch = h) : l(h, i, d), d.deps = 0, d.effects.length = 0, d.hiddenContainer = u("div"), g ? (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 ? d.resolve() : (c(m, p, n, r, i, null, a, o, s), ju(d, p))) : m && Gu(m, f) ? (c(m, f, n, r, i, d, a, o, s), d.resolve(!0)) : (c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0 && d.resolve()));
	else if (m && Gu(m, f)) c(m, f, n, r, i, d, a, o, s), ju(d, f);
	else if (Cu(t, "onPending"), d.pendingBranch = f, d.pendingId = f.shapeFlag & 512 ? f.component.suspenseId : xu++, c(null, f, d.hiddenContainer, null, i, d, a, o, s), d.deps <= 0) d.resolve();
	else {
		let { timeout: e, pendingId: t } = d;
		e > 0 ? setTimeout(() => {
			d.pendingId === t && d.fallback(p);
		}, e) : e === 0 && d.fallback(p);
	}
}
function Eu(e, t, n, r, i, a, o, s, c, l, u = !1) {
	let { p: d, m: f, um: p, n: m, o: { parentNode: h, remove: g } } = l, _, v = Mu(e);
	v && t && t.pendingBranch && (_ = t.pendingId, t.deps++);
	let y = e.props ? Pr(e.props.timeout) : void 0, b = a, x = {
		vnode: e,
		parent: t,
		parentComponent: n,
		namespace: o,
		container: r,
		hiddenContainer: i,
		deps: 0,
		pendingId: xu++,
		timeout: typeof y == "number" ? y : -1,
		activeBranch: null,
		isFallbackMountPending: !1,
		pendingBranch: null,
		isInFallback: !u,
		isHydrating: u,
		isUnmounted: !1,
		effects: [],
		resolve(e = !1, n = !1) {
			let { vnode: r, activeBranch: i, pendingBranch: o, pendingId: s, effects: c, parentComponent: l, container: u, isInFallback: d } = x, g = !1;
			if (x.isHydrating) x.isHydrating = !1;
			else if (!e) {
				g = i && o.transition && o.transition.mode === "out-in";
				let e = !1;
				g && (i.transition.afterLeave = () => {
					s === x.pendingId && (f(o, u, a === b && !e ? m(i) : a, 0), Bo(c), d && r.ssFallback && (r.ssFallback.el = null));
				}), i && !x.isFallbackMountPending && (h(i.el) === u && (a = m(i), e = !0), p(i, l, x, !0), !g && d && r.ssFallback && J(() => r.ssFallback.el = null, x)), g || f(o, u, a, 0);
			}
			x.isFallbackMountPending = !1, ju(x, o), x.pendingBranch = null, x.isInFallback = !1;
			let y = x.parent, S = !1;
			for (; y;) {
				if (y.pendingBranch) {
					for (let e = 0; e < c.length; e++) y.effects.push(c[e]);
					S = !0;
					break;
				}
				y = y.parent;
			}
			!S && !g && Bo(c), x.effects = [], v && t && t.pendingBranch && _ === t.pendingId && (t.deps--, t.deps === 0 && !n && t.resolve()), Cu(r, "onResolve");
		},
		fallback(e) {
			if (!x.pendingBranch) return;
			let { vnode: t, activeBranch: n, parentComponent: r, container: i, namespace: a } = x;
			Cu(t, "onFallback");
			let o = m(n), l = () => {
				x.isFallbackMountPending = !1, x.isInFallback && (d(null, e, i, o, r, null, a, s, c), ju(x, e));
			}, u = e.transition && e.transition.mode === "out-in";
			u && (x.isFallbackMountPending = !0, n.transition.afterLeave = l), x.isInFallback = !0, p(n, r, null, !0), u || l();
		},
		move(e, t, n) {
			x.activeBranch && f(x.activeBranch, e, t, n), x.container = e;
		},
		next() {
			return x.activeBranch && m(x.activeBranch);
		},
		registerDep(e, t, n) {
			let r = !!x.pendingBranch;
			r && x.deps++;
			let i = e.vnode.el;
			e.asyncDep.catch((t) => {
				Do(t, e, 0);
			}).then((a) => {
				if (e.isUnmounted || x.isUnmounted || x.pendingId !== e.suspenseId) return;
				md(), e.asyncResolved = !0;
				let { vnode: s } = e;
				yd(e, a, !1), i && (s.el = i);
				let c = !i && e.subTree.el;
				t(e, s, h(i || e.subTree.el), i ? null : m(e.subTree), x, o, n), c && (s.placeholder = null, g(c)), Gl(e, s.el), r && --x.deps === 0 && x.resolve();
			});
		},
		unmount(e, t) {
			x.isUnmounted = !0, x.activeBranch && p(x.activeBranch, n, e, t), x.pendingBranch && p(x.pendingBranch, n, e, t);
		}
	};
	return x;
}
function Du(e, t, n, r, i, a, o, s, c) {
	let l = t.suspense = Eu(t, r, n, e.parentNode, document.createElement("div"), null, i, a, o, s, !0), u = c(e, l.pendingBranch = t.ssContent, n, l, a, o);
	return l.deps === 0 && l.resolve(!1, !0), u;
}
function Ou(e) {
	let { shapeFlag: t, children: n } = e, r = t & 32;
	e.ssContent = ku(r ? n.default : n), e.ssFallback = r ? ku(n.fallback) : Z(X);
}
function ku(e) {
	let t;
	if (R(e)) {
		let n = zu && e._c;
		n && (e._d = !1, Lu()), e = e(), n && (e._d = !0, t = Iu, Ru());
	}
	return L(e) && (e = zl(e)), e = nd(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((t) => t !== e)), e;
}
function Au(e, t) {
	t && t.pendingBranch ? L(e) ? t.effects.push(...e) : t.effects.push(e) : Bo(e);
}
function ju(e, t) {
	e.activeBranch = t;
	let { vnode: n, parentComponent: r } = e, i = t.el;
	for (; !i && t.component;) t = t.component.subTree, i = t.el;
	n.el = i, r && r.subTree === n && (r.vnode.el = i, Gl(r, i));
}
function Mu(e) {
	let t = e.props && e.props.suspensible;
	return t != null && t !== !1;
}
var Y = /* @__PURE__ */ Symbol.for("v-fgt"), Nu = /* @__PURE__ */ Symbol.for("v-txt"), X = /* @__PURE__ */ Symbol.for("v-cmt"), Pu = /* @__PURE__ */ Symbol.for("v-stc"), Fu = [], Iu = null;
function Lu(e = !1) {
	Fu.push(Iu = e ? null : []);
}
function Ru() {
	Fu.pop(), Iu = Fu[Fu.length - 1] || null;
}
var zu = 1;
function Bu(e, t = !1) {
	zu += e, e < 0 && Iu && t && (Iu.hasOnce = !0);
}
function Vu(e) {
	return e.dynamicChildren = zu > 0 ? Iu || or : null, Ru(), zu > 0 && Iu && Iu.push(e), e;
}
function Hu(e, t, n, r, i, a) {
	return Vu(Yu(e, t, n, r, i, a, !0));
}
function Uu(e, t, n, r, i) {
	return Vu(Z(e, t, n, r, i, !0));
}
function Wu(e) {
	return e ? e.__v_isVNode === !0 : !1;
}
function Gu(e, t) {
	return e.type === t.type && e.key === t.key;
}
function Ku(e) {}
var qu = ({ key: e }) => e ?? null, Ju = ({ ref: e, ref_key: t, ref_for: n }) => (typeof e == "number" && (e = "" + e), e == null ? null : z(e) || /* @__PURE__ */ K(e) || R(e) ? {
	i: q,
	r: e,
	k: t,
	f: !!n
} : e);
function Yu(e, t = null, n = null, r = 0, i = null, a = e === Y ? 0 : 1, o = !1, s = !1) {
	let c = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e,
		props: t,
		key: t && qu(t),
		ref: t && Ju(t),
		scopeId: Jo,
		slotScopeIds: null,
		children: n,
		component: null,
		suspense: null,
		ssContent: null,
		ssFallback: null,
		dirs: null,
		transition: null,
		el: null,
		anchor: null,
		target: null,
		targetStart: null,
		targetAnchor: null,
		staticCount: 0,
		shapeFlag: a,
		patchFlag: r,
		dynamicProps: i,
		dynamicChildren: null,
		appContext: null,
		ctx: q
	};
	return s ? (id(c, n), a & 128 && e.normalize(c)) : n && (c.shapeFlag |= z(n) ? 8 : 16), zu > 0 && !o && Iu && (c.patchFlag > 0 || a & 6) && c.patchFlag !== 32 && Iu.push(c), c;
}
var Z = Xu;
function Xu(e, t = null, n = null, r = 0, i = null, a = !1) {
	if ((!e || e === $c) && (e = X), Wu(e)) {
		let r = Qu(e, t, !0);
		return n && id(r, n), zu > 0 && !a && Iu && (r.shapeFlag & 6 ? Iu[Iu.indexOf(e)] = r : Iu.push(r)), r.patchFlag = -2, r;
	}
	if (Md(e) && (e = e.__vccOpts), t) {
		t = Zu(t);
		let { class: e, style: n } = t;
		e && !z(e) && (t.class = Wr(e)), B(n) && (/* @__PURE__ */ Pa(n) && !L(n) && (n = F({}, n)), t.style = Rr(n));
	}
	let o = z(e) ? 1 : bu(e) ? 128 : ms(e) ? 64 : B(e) ? 4 : R(e) ? 2 : 0;
	return Yu(e, t, n, r, i, o, a, !0);
}
function Zu(e) {
	return e ? /* @__PURE__ */ Pa(e) || Jl(e) ? F({}, e) : e : null;
}
function Qu(e, t, n = !1, r = !1) {
	let { props: i, ref: a, patchFlag: o, children: s, transition: c } = e, l = t ? ad(i || {}, t) : i, u = {
		__v_isVNode: !0,
		__v_skip: !0,
		type: e.type,
		props: l,
		key: l && qu(l),
		ref: t && t.ref ? n && a ? L(a) ? a.concat(Ju(t)) : [a, Ju(t)] : Ju(t) : a,
		scopeId: e.scopeId,
		slotScopeIds: e.slotScopeIds,
		children: s,
		target: e.target,
		targetStart: e.targetStart,
		targetAnchor: e.targetAnchor,
		staticCount: e.staticCount,
		shapeFlag: e.shapeFlag,
		patchFlag: t && e.type !== Y ? o === -1 ? 16 : o | 16 : o,
		dynamicProps: e.dynamicProps,
		dynamicChildren: e.dynamicChildren,
		appContext: e.appContext,
		dirs: e.dirs,
		transition: c,
		component: e.component,
		suspense: e.suspense,
		ssContent: e.ssContent && Qu(e.ssContent),
		ssFallback: e.ssFallback && Qu(e.ssFallback),
		placeholder: e.placeholder,
		el: e.el,
		anchor: e.anchor,
		ctx: e.ctx,
		ce: e.ce
	};
	return c && r && zs(u, c.clone(u)), u;
}
function $u(e = " ", t = 0) {
	return Z(Nu, null, e, t);
}
function ed(e, t) {
	let n = Z(Pu, null, e);
	return n.staticCount = t, n;
}
function td(e = "", t = !1) {
	return t ? (Lu(), Uu(X, null, e)) : Z(X, null, e);
}
function nd(e) {
	return e == null || typeof e == "boolean" ? Z(X) : L(e) ? Z(Y, null, e.slice()) : Wu(e) ? rd(e) : Z(Nu, null, String(e));
}
function rd(e) {
	return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qu(e);
}
function id(e, t) {
	let n = 0, { shapeFlag: r } = e;
	if (t == null) t = null;
	else if (L(t)) n = 16;
	else if (typeof t == "object") {
		if (r & 65) {
			let n = t.default;
			n && (n._c && (n._d = !1), id(e, n()), n._c && (n._d = !0));
			return;
		}
		{
			n = 32;
			let r = t._;
			!r && !Jl(t) ? t._ctx = q : r === 3 && q && (q.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
		}
	} else if (R(t)) {
		if (r & 65) {
			id(e, { default: t });
			return;
		}
		t = {
			default: t,
			_ctx: q
		}, n = 32;
	} else t = String(t), r & 64 ? (n = 16, t = [$u(t)]) : n = 8;
	e.children = t, e.shapeFlag |= n;
}
function ad(...e) {
	let t = {};
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		for (let e in r) if (e === "class") t.class !== r.class && (t.class = Wr([t.class, r.class]));
		else if (e === "style") t.style = Rr([t.style, r.style]);
		else if (lr(e)) {
			let n = t[e], i = r[e];
			i && n !== i && !(L(n) && n.includes(i)) ? t[e] = n ? [].concat(n, i) : i : i == null && n == null && !ur(e) && (t[e] = i);
		} else e !== "" && (t[e] = r[e]);
	}
	return t;
}
function od(e, t, n, r = null) {
	Eo(e, t, 7, [n, r]);
}
var sd = kl(), cd = 0;
function ld(e, t, n) {
	let r = e.type, i = (t ? t.appContext : e.appContext) || sd, a = {
		uid: cd++,
		vnode: e,
		type: r,
		parent: t,
		appContext: i,
		root: null,
		next: null,
		subTree: null,
		effect: null,
		update: null,
		job: null,
		scope: new li(!0),
		render: null,
		proxy: null,
		exposed: null,
		exposeProxy: null,
		withProxy: null,
		provides: t ? t.provides : Object.create(i.provides),
		ids: t ? t.ids : [
			"",
			0,
			0
		],
		accessCache: null,
		renderCache: [],
		components: null,
		directives: null,
		propsOptions: $l(r, i),
		emitsOptions: Il(r, i),
		emit: null,
		emitted: null,
		propsDefaults: P,
		inheritAttrs: r.inheritAttrs,
		ctx: P,
		data: P,
		props: P,
		attrs: P,
		slots: P,
		refs: P,
		setupState: P,
		setupContext: null,
		suspense: n,
		suspenseId: n ? n.pendingId : 0,
		asyncDep: null,
		asyncResolved: !1,
		isMounted: !1,
		isUnmounted: !1,
		isDeactivated: !1,
		bc: null,
		c: null,
		bm: null,
		m: null,
		bu: null,
		u: null,
		um: null,
		bum: null,
		da: null,
		a: null,
		rtg: null,
		rtc: null,
		ec: null,
		sp: null
	};
	return a.ctx = { _: a }, a.root = t ? t.root : a, a.emit = Fl.bind(null, a), e.ce && e.ce(a), a;
}
var Q = null, ud = () => Q || q, dd, fd;
{
	let e = Ir(), t = (t, n) => {
		let r;
		return (r = e[t]) || (r = e[t] = []), r.push(n), (e) => {
			r.length > 1 ? r.forEach((t) => t(e)) : r[0](e);
		};
	};
	dd = t("__VUE_INSTANCE_SETTERS__", (e) => Q = e), fd = t("__VUE_SSR_SETTERS__", (e) => gd = e);
}
var pd = (e) => {
	let t = Q;
	return dd(e), e.scope.on(), () => {
		e.scope.off(), dd(t);
	};
}, md = () => {
	Q && Q.scope.off(), dd(null);
};
function hd(e) {
	return e.vnode.shapeFlag & 4;
}
var gd = !1;
function _d(e, t = !1, n = !1) {
	t && fd(t);
	let { props: r, children: i } = e.vnode, a = hd(e);
	Yl(e, r, a, t), su(e, i, n || t);
	let o = a ? vd(e, t) : void 0;
	return t && fd(!1), o;
}
function vd(e, t) {
	let n = e.type;
	e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fl);
	let { setup: r } = n;
	if (r) {
		ji();
		let n = e.setupContext = r.length > 1 ? Ed(e) : null, i = pd(e), a = To(r, e, 0, [e.props, n]), o = vr(a);
		if (Mi(), i(), (o || e.sp) && !Ec(e) && Us(e), o) {
			if (a.then(md, md), t) return a.then((n) => {
				fd(!0);
				try {
					yd(e, n, t);
				} finally {
					fd(!1);
				}
			}).catch((t) => {
				Do(t, e, 0);
			});
			e.asyncDep = a;
		} else yd(e, a, t);
	} else wd(e, t);
}
function yd(e, t, n) {
	R(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : B(t) && (e.setupState = Ka(t)), wd(e, n);
}
var bd, xd;
function Sd(e) {
	bd = e, xd = (e) => {
		e.render._rc && (e.withProxy = new Proxy(e.ctx, pl));
	};
}
var Cd = () => !bd;
function wd(e, t, n) {
	let r = e.type;
	if (!e.render) {
		if (!t && bd && !r.render) {
			let t = r.template || !1;
			if (t) {
				let { isCustomElement: n, compilerOptions: i } = e.appContext.config, { delimiters: a, compilerOptions: o } = r, s = F(F({
					isCustomElement: n,
					delimiters: a
				}, i), o);
				r.render = bd(t, s);
			}
		}
		e.render = r.render || sr, xd && xd(e);
	}
}
var Td = { get(e, t) {
	return Hi(e, "get", ""), e[t];
} };
function Ed(e) {
	return {
		attrs: new Proxy(e.attrs, Td),
		slots: e.slots,
		emit: e.emit,
		expose: (t) => {
			e.exposed = t || {};
		}
	};
}
function Dd(e) {
	return e.exposed ? e.exposeProxy ||= new Proxy(Ka(Fa(e.exposed)), {
		get(t, n) {
			if (n in t) return t[n];
			if (n in ul) return ul[n](e);
		},
		has(e, t) {
			return t in e || t in ul;
		}
	}) : e.proxy;
}
var Od = /(?:^|[-_])\w/g, kd = (e) => e.replace(Od, (e) => e.toUpperCase()).replace(/[-_]/g, "");
function Ad(e, t = !0) {
	return R(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function jd(e, t, n = !1) {
	let r = Ad(t);
	if (!r && t.__file) {
		let e = t.__file.match(/([^/\\]+)\.\w+$/);
		e && (r = e[1]);
	}
	if (!r && e) {
		let n = (e) => {
			for (let n in e) if (e[n] === t) return n;
		};
		r = n(e.components) || e.parent && n(e.parent.type.components) || n(e.appContext.components);
	}
	return r ? kd(r) : n ? "App" : "Anonymous";
}
function Md(e) {
	return R(e) && "__vccOpts" in e;
}
var Nd = (e, t) => /* @__PURE__ */ to(e, t, gd);
function Pd(e, t, n) {
	try {
		Bu(-1);
		let r = arguments.length;
		return r === 2 ? B(t) && !L(t) ? Wu(t) ? Z(e, null, [t]) : Z(e, t) : Z(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Wu(n) && (n = [n]), Z(e, t, n));
	} finally {
		Bu(1);
	}
}
function Fd() {}
function Id(e, t, n, r) {
	let i = n[r];
	if (i && Ld(i, e)) return i;
	let a = t();
	return a.memo = e.slice(), a.cacheIndex = r, n[r] = a;
}
function Ld(e, t) {
	let n = e.memo;
	if (n.length != t.length) return !1;
	for (let e = 0; e < n.length; e++) if (H(n[e], t[e])) return !1;
	return zu > 0 && Iu && Iu.push(e), !0;
}
var Rd = "3.5.41", zd = sr, Bd = wo, Vd = Go, Hd = qo, Ud = {
	createComponentInstance: ld,
	setupComponent: _d,
	renderComponentRoot: Rl,
	setCurrentRenderingInstance: Yo,
	isVNode: Wu,
	normalizeVNode: nd,
	getComponentPublicInstance: Dd,
	ensureValidVNode: sl,
	pushWarningContext: po,
	popWarningContext: mo
}, Wd = void 0, Gd = typeof window < "u" && window.trustedTypes;
if (Gd) try {
	Wd = /* @__PURE__ */ Gd.createPolicy("vue", { createHTML: (e) => e });
} catch {}
var Kd = Wd ? (e) => Wd.createHTML(e) : (e) => e, qd = "http://www.w3.org/2000/svg", Jd = "http://www.w3.org/1998/Math/MathML", Yd = typeof document < "u" ? document : null, Xd = Yd && /* @__PURE__ */ Yd.createElement("template"), Zd = {
	insert: (e, t, n) => {
		t.insertBefore(e, n || null);
	},
	remove: (e) => {
		let t = e.parentNode;
		t && t.removeChild(e);
	},
	createElement: (e, t, n, r) => {
		let i = t === "svg" ? Yd.createElementNS(qd, e) : t === "mathml" ? Yd.createElementNS(Jd, e) : n ? Yd.createElement(e, { is: n }) : Yd.createElement(e);
		return e === "select" && r && r.multiple != null && i.setAttribute("multiple", r.multiple), i;
	},
	createText: (e) => Yd.createTextNode(e),
	createComment: (e) => Yd.createComment(e),
	setText: (e, t) => {
		e.nodeValue = t;
	},
	setElementText: (e, t) => {
		e.textContent = t;
	},
	parentNode: (e) => e.parentNode,
	nextSibling: (e) => e.nextSibling,
	querySelector: (e) => Yd.querySelector(e),
	setScopeId(e, t) {
		e.setAttribute(t, "");
	},
	insertStaticContent(e, t, n, r, i, a) {
		let o = n ? n.previousSibling : t.lastChild;
		if (i && (i === a || i.nextSibling)) for (; t.insertBefore(i.cloneNode(!0), n), !(i === a || !(i = i.nextSibling)););
		else {
			Xd.innerHTML = Kd(r === "svg" ? `<svg>${e}</svg>` : r === "mathml" ? `<math>${e}</math>` : e);
			let i = Xd.content;
			if (r === "svg" || r === "mathml") {
				let e = i.firstChild;
				for (; e.firstChild;) i.appendChild(e.firstChild);
				i.removeChild(e);
			}
			t.insertBefore(i, n);
		}
		return [o ? o.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild];
	}
}, Qd = "transition", $d = "animation", ef = /* @__PURE__ */ Symbol("_vtc"), tf = {
	name: String,
	type: String,
	css: {
		type: Boolean,
		default: !0
	},
	duration: [
		String,
		Number,
		Object
	],
	enterFromClass: String,
	enterActiveClass: String,
	enterToClass: String,
	appearFromClass: String,
	appearActiveClass: String,
	appearToClass: String,
	leaveFromClass: String,
	leaveActiveClass: String,
	leaveToClass: String
}, nf = /* @__PURE__ */ F({}, As, tf), rf = /* @__PURE__ */ ((e) => (e.displayName = "Transition", e.props = nf, e))((e, { slots: t }) => Pd(Ps, sf(e), t)), af = (e, t = []) => {
	L(e) ? e.forEach((e) => e(...t)) : e && e(...t);
}, of = (e) => e ? L(e) ? e.some((e) => e.length > 1) : e.length > 1 : !1;
function sf(e) {
	let t = {};
	for (let n in e) n in tf || (t[n] = e[n]);
	if (e.css === !1) return t;
	let { name: n = "v", type: r, duration: i, enterFromClass: a = `${n}-enter-from`, enterActiveClass: o = `${n}-enter-active`, enterToClass: s = `${n}-enter-to`, appearFromClass: c = a, appearActiveClass: l = o, appearToClass: u = s, leaveFromClass: d = `${n}-leave-from`, leaveActiveClass: f = `${n}-leave-active`, leaveToClass: p = `${n}-leave-to` } = e, m = cf(i), h = m && m[0], g = m && m[1], { onBeforeEnter: _, onEnter: v, onEnterCancelled: y, onLeave: b, onLeaveCancelled: x, onBeforeAppear: S = _, onAppear: C = v, onAppearCancelled: w = y } = t, T = (e, t, n, r) => {
		e._enterCancelled = r, df(e, t ? u : s), df(e, t ? l : o), n && n();
	}, E = (e, t) => {
		e._isLeaving = !1, df(e, d), df(e, p), df(e, f), t && t();
	}, D = (e) => (t, n) => {
		let i = e ? C : v, o = () => T(t, e, n);
		af(i, [t, o]), ff(() => {
			df(t, e ? c : a), uf(t, e ? u : s), of(i) || mf(t, r, h, o);
		});
	};
	return F(t, {
		onBeforeEnter(e) {
			af(_, [e]), uf(e, a), uf(e, o);
		},
		onBeforeAppear(e) {
			af(S, [e]), uf(e, c), uf(e, l);
		},
		onEnter: D(!1),
		onAppear: D(!0),
		onLeave(e, t) {
			e._isLeaving = !0;
			let n = () => E(e, t);
			uf(e, d), e._enterCancelled ? (uf(e, f), vf(e)) : (vf(e), uf(e, f)), ff(() => {
				e._isLeaving && (df(e, d), uf(e, p), of(b) || mf(e, r, g, n));
			}), af(b, [e, n]);
		},
		onEnterCancelled(e) {
			T(e, !1, void 0, !0), af(y, [e]);
		},
		onAppearCancelled(e) {
			T(e, !0, void 0, !0), af(w, [e]);
		},
		onLeaveCancelled(e) {
			E(e), af(x, [e]);
		}
	});
}
function cf(e) {
	if (e == null) return null;
	if (B(e)) return [lf(e.enter), lf(e.leave)];
	{
		let t = lf(e);
		return [t, t];
	}
}
function lf(e) {
	return Pr(e);
}
function uf(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.add(t)), (e[ef] || (e[ef] = /* @__PURE__ */ new Set())).add(t);
}
function df(e, t) {
	t.split(/\s+/).forEach((t) => t && e.classList.remove(t));
	let n = e[ef];
	n && (n.delete(t), n.size || (e[ef] = void 0));
}
function ff(e) {
	requestAnimationFrame(() => {
		requestAnimationFrame(e);
	});
}
var pf = 0;
function mf(e, t, n, r) {
	let i = e._endId = ++pf, a = () => {
		i === e._endId && r();
	};
	if (n != null) return setTimeout(a, n);
	let { type: o, timeout: s, propCount: c } = hf(e, t);
	if (!o) return r();
	let l = o + "end", u = 0, d = () => {
		e.removeEventListener(l, f), a();
	}, f = (t) => {
		t.target === e && ++u >= c && d();
	};
	setTimeout(() => {
		u < c && d();
	}, s + 1), e.addEventListener(l, f);
}
function hf(e, t) {
	let n = window.getComputedStyle(e), r = (e) => (n[e] || "").split(", "), i = r(`${Qd}Delay`), a = r(`${Qd}Duration`), o = gf(i, a), s = r(`${$d}Delay`), c = r(`${$d}Duration`), l = gf(s, c), u = null, d = 0, f = 0;
	t === Qd ? o > 0 && (u = Qd, d = o, f = a.length) : t === $d ? l > 0 && (u = $d, d = l, f = c.length) : (d = Math.max(o, l), u = d > 0 ? o > l ? Qd : $d : null, f = u ? u === Qd ? a.length : c.length : 0);
	let p = u === Qd && /\b(?:transform|all)(?:,|$)/.test(r(`${Qd}Property`).toString());
	return {
		type: u,
		timeout: d,
		propCount: f,
		hasTransform: p
	};
}
function gf(e, t) {
	for (; e.length < t.length;) e = e.concat(e);
	return Math.max(...t.map((t, n) => _f(t) + _f(e[n])));
}
function _f(e) {
	return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function vf(e) {
	return (e ? e.ownerDocument : document).body.offsetHeight;
}
function yf(e, t, n) {
	let r = e[ef];
	r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
var bf = /* @__PURE__ */ Symbol("_vod"), xf = /* @__PURE__ */ Symbol("_vsh"), Sf = {
	name: "show",
	beforeMount(e, { value: t }, { transition: n }) {
		e[bf] = e.style.display === "none" ? "" : e.style.display, n && t ? n.beforeEnter(e) : Cf(e, t);
	},
	mounted(e, { value: t }, { transition: n }) {
		n && t && n.enter(e);
	},
	updated(e, { value: t, oldValue: n }, { transition: r }) {
		!t != !n && (r ? t ? (r.beforeEnter(e), Cf(e, !0), r.enter(e)) : r.leave(e, () => {
			Cf(e, !1);
		}) : Cf(e, t));
	},
	beforeUnmount(e, { value: t }) {
		Cf(e, t);
	}
};
function Cf(e, t) {
	e.style.display = t ? e[bf] : "none", e[xf] = !t;
}
function wf() {
	Sf.getSSRProps = ({ value: e }) => {
		if (!e) return { style: { display: "none" } };
	};
}
var Tf = /* @__PURE__ */ Symbol("");
function Ef(e) {
	let t = ud();
	if (!t) return;
	let n = t.ut = (n = e(t.proxy)) => {
		Array.from(document.querySelectorAll(`[data-v-owner="${t.uid}"]`)).forEach((e) => Of(e, n));
	}, r = () => {
		let r = e(t.proxy);
		t.ce ? Of(t.ce, r) : Df(t.subTree, r), n(r);
	};
	Hc(() => {
		Bo(r);
	}), Vc(() => {
		us(r, sr, { flush: "post" });
		let e = new MutationObserver(r);
		e.observe(t.subTree.el.parentNode, { childList: !0 }), Gc(() => e.disconnect());
	});
}
function Df(e, t) {
	if (e.shapeFlag & 128) {
		let n = e.suspense;
		e = n.activeBranch, n.pendingBranch && !n.isHydrating && n.effects.push(() => {
			Df(n.activeBranch, t);
		});
	}
	for (; e.component;) e = e.component.subTree;
	if (e.shapeFlag & 1 && e.el) Of(e.el, t);
	else if (e.type === Y) e.children.forEach((e) => Df(e, t));
	else if (e.type === Pu) {
		let { el: n, anchor: r } = e;
		for (; n && (Of(n, t), n !== r);) n = n.nextSibling;
	}
}
function Of(e, t) {
	if (e.nodeType === 1) {
		let n = e.style, r = "";
		for (let e in t) {
			let i = ci(t[e]);
			n.setProperty(`--${e}`, i), r += `--${e}: ${i};`;
		}
		n[Tf] = r;
	}
}
var kf = /(?:^|;)\s*display\s*:/;
function Af(e, t, n) {
	let r = e.style, i = z(n), a = !1;
	if (n && !i) {
		if (t) {
			if (z(t)) for (let e of t.split(";")) {
				let t = e.slice(0, e.indexOf(":")).trim();
				n[t] ?? Mf(r, t, "");
			}
			else for (let e in t) n[e] ?? Mf(r, e, "");
		}
		for (let i in n) {
			i === "display" && (a = !0);
			let o = n[i];
			o == null ? Mf(r, i, "") : If(e, i, !z(t) && t ? t[i] : void 0, o) || Mf(r, i, o);
		}
	} else if (i) {
		if (t !== n) {
			let e = r[Tf];
			e && (n += ";" + e), r.cssText = n, a = kf.test(n);
		}
	} else t && e.removeAttribute("style");
	bf in e && (e[bf] = a ? r.display : "", e[xf] && (r.display = "none"));
}
var jf = /\s*!important$/;
function Mf(e, t, n) {
	if (L(n)) n.forEach((n) => Mf(e, t, n));
	else if (n ??= "", t.startsWith("--")) e.setProperty(t, n);
	else {
		let r = Ff(e, t);
		jf.test(n) ? e.setProperty(Or(r), n.replace(jf, ""), "important") : e[r] = n;
	}
}
var Nf = [
	"Webkit",
	"Moz",
	"ms"
], Pf = {};
function Ff(e, t) {
	let n = Pf[t];
	if (n) return n;
	let r = V(t);
	if (r !== "filter" && r in e) return Pf[t] = r;
	r = kr(r);
	for (let n = 0; n < Nf.length; n++) {
		let i = Nf[n] + r;
		if (i in e) return Pf[t] = i;
	}
	return t;
}
function If(e, t, n, r) {
	return e.tagName === "TEXTAREA" && (t === "width" || t === "height") && z(r) && n === r;
}
var Lf = "http://www.w3.org/1999/xlink";
function Rf(e, t, n, r, i, a = qr(t)) {
	r && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Lf, t.slice(6, t.length)) : e.setAttributeNS(Lf, t, n) : n == null || a && !Yr(n) ? e.removeAttribute(t) : e.setAttribute(t, a ? "" : _r(n) ? String(n) : n);
}
function zf(e, t, n, r, i) {
	if (t === "innerHTML" || t === "textContent") {
		n != null && (e[t] = t === "innerHTML" ? Kd(n) : n);
		return;
	}
	let a = e.tagName;
	if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
		let r = a === "OPTION" ? e.getAttribute("value") || "" : e.value, i = n == null ? e.type === "checkbox" ? "on" : "" : String(n);
		(r !== i || !("_value" in e)) && (e.value = i), n ?? e.removeAttribute(t), e._value = n;
		return;
	}
	let o = !1;
	if (n === "" || n == null) {
		let r = typeof e[t];
		r === "boolean" ? n = Yr(n) : n == null && r === "string" ? (n = "", o = !0) : r === "number" && (n = 0, o = !0);
	}
	try {
		e[t] = n;
	} catch {}
	o && e.removeAttribute(i || t);
}
function Bf(e, t, n, r) {
	e.addEventListener(t, n, r);
}
function Vf(e, t, n, r) {
	e.removeEventListener(t, n, r);
}
var Hf = /* @__PURE__ */ Symbol("_vei");
function Uf(e, t, n, r, i = null) {
	let a = e[Hf] || (e[Hf] = {}), o = a[t];
	if (r && o) o.value = r;
	else {
		let [n, s] = Kf(t);
		r ? Bf(e, n, a[t] = Xf(r, i), s) : o && (Vf(e, n, o, s), a[t] = void 0);
	}
}
var Wf = /(Once|Passive|Capture)$/, Gf = /^on:?(?:Once|Passive|Capture)$/;
function Kf(e) {
	let t, n;
	for (; (n = e.match(Wf)) && !Gf.test(e);) t ||= {}, e = e.slice(0, e.length - n[1].length), t[n[1].toLowerCase()] = !0;
	return [e[2] === ":" ? e.slice(3) : Or(e.slice(2)), t];
}
var qf = 0, Jf = /* @__PURE__ */ Promise.resolve(), Yf = () => qf ||= (Jf.then(() => qf = 0), Date.now());
function Xf(e, t) {
	let n = (e) => {
		if (!e._vts) e._vts = Date.now();
		else if (e._vts <= n.attached) return;
		let r = n.value;
		if (L(r)) {
			let n = e.stopImmediatePropagation;
			e.stopImmediatePropagation = () => {
				n.call(e), e._stopped = !0;
			};
			let i = r.slice(), a = [e];
			for (let n = 0; n < i.length && !e._stopped; n++) {
				let e = i[n];
				e && Eo(e, t, 5, a);
			}
		} else Eo(r, t, 5, [e]);
	};
	return n.value = e, n.attached = Yf(), n;
}
var Zf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Qf = (e, t, n, r, i, a) => {
	let o = i === "svg";
	t === "class" ? yf(e, r, o) : t === "style" ? Af(e, n, r) : lr(t) ? ur(t) || Uf(e, t, n, r, a) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : $f(e, t, r, o)) ? (zf(e, t, r), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Rf(e, t, r, o, a, t !== "value")) : e._isVueCE && (ep(e, t) || e._def.__asyncLoader && (/[A-Z]/.test(t) || !z(r))) ? zf(e, V(t), r, a, t) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Rf(e, t, r, o));
};
function $f(e, t, n, r) {
	if (r) return !!(t === "innerHTML" || t === "textContent" || t in e && Zf(t) && R(n));
	if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA") return !1;
	if (t === "width" || t === "height") {
		let t = e.tagName;
		if (t === "IMG" || t === "VIDEO" || t === "CANVAS" || t === "SOURCE") return !1;
	}
	return Zf(t) && z(n) ? !1 : t in e;
}
function ep(e, t) {
	let n = e._def.props;
	if (!n) return !1;
	let r = V(t);
	return Array.isArray(n) ? n.some((e) => V(e) === r) : Object.keys(n).some((e) => V(e) === r);
}
var tp = {};
// @__NO_SIDE_EFFECTS__
function np(e, t, n) {
	let r = /* @__PURE__ */ Vs(e, t);
	Sr(r) && (r = F({}, r, t));
	class i extends ap {
		constructor(e) {
			super(r, e, n);
		}
	}
	return i.def = r, i;
}
var rp = /* @__NO_SIDE_EFFECTS__ */ ((e, t) => /* @__PURE__ */ np(e, t, Xp)), ip = typeof HTMLElement < "u" ? HTMLElement : class {}, ap = class e extends ip {
	constructor(e, t = {}, n = Yp) {
		super(), this._def = e, this._props = t, this._createApp = n, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && n !== Yp ? this._root = this.shadowRoot : e.shadowRoot === !1 ? this._root = this : (this.attachShadow(F({}, e.shadowRootOptions, { mode: "open" })), this._root = this.shadowRoot);
	}
	connectedCallback() {
		if (!this.isConnected) return;
		!this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
		let t = this;
		for (; t &&= t.assignedSlot || t.parentNode || t.host;) if (t instanceof e) {
			this._parent = t;
			break;
		}
		this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
			if (this._pendingResolve = void 0, this.isConnected) return this._resolveDef();
		}) : this._resolveDef());
	}
	_setParent(e = this._parent) {
		e && (this._instance.parent = e._instance, this._inheritParentContext(e));
	}
	_inheritParentContext(e = this._parent) {
		e && this._app && Object.setPrototypeOf(this._app._context.provides, e._instance.provides);
	}
	disconnectedCallback() {
		this._connected = !1, Io(() => {
			this._connected || (this._ob &&= (this._ob.disconnect(), null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets &&= (this._teleportTargets.clear(), void 0));
		});
	}
	_processMutations(e) {
		for (let t of e) this._setAttr(t.attributeName);
	}
	_resolveDef() {
		if (this._pendingResolve) return this._pendingResolve;
		for (let e = 0; e < this.attributes.length; e++) this._setAttr(this.attributes[e].name);
		this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
		let e = (e, t = !1) => {
			this._resolved = !0, this._pendingResolve = void 0;
			let { props: n, styles: r } = e, i;
			if (n && !L(n)) for (let e in n) {
				let t = n[e];
				(t === Number || t && t.type === Number) && (e in this._props && (this._props[e] = Pr(this._props[e])), (i ||= /* @__PURE__ */ Object.create(null))[V(e)] = !0);
			}
			this._numberProps = i, this._resolveProps(e), this.shadowRoot && this._applyStyles(r), this._mount(e);
		}, t = this._def.__asyncLoader;
		if (t) return this._pendingResolve = t().then((t) => {
			t.configureApp = this._def.configureApp, e(this._def = t, !0);
		}), this._pendingResolve;
		e(this._def);
	}
	_mount(e) {
		this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
		let t = this._instance && this._instance.exposed;
		if (t) for (let e in t) I(this, e) || Object.defineProperty(this, e, { get: () => Ua(t[e]) });
	}
	_resolveProps(e) {
		let { props: t } = e, n = L(t) ? t : Object.keys(t || {});
		for (let e of Object.keys(this)) e[0] !== "_" && n.includes(e) && this._setProp(e, this[e]);
		for (let e of n.map(V)) Object.defineProperty(this, e, {
			get() {
				return this._getProp(e);
			},
			set(t) {
				this._setProp(e, t, !0, !this._patching);
			}
		});
	}
	_setAttr(e) {
		if (e.startsWith("data-v-")) return;
		let t = this.hasAttribute(e), n = t ? this.getAttribute(e) : tp, r = V(e);
		t && this._numberProps && this._numberProps[r] && (n = Pr(n)), this._setProp(r, n, !1, !0);
	}
	_getProp(e) {
		return this._props[e];
	}
	_setProp(e, t, n = !0, r = !1) {
		if (t !== this._props[e] && (this._dirty = !0, t === tp ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), n)) {
			let n = this._ob;
			n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(Or(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(Or(e), t + "") : t || this.removeAttribute(Or(e)), n && n.observe(this, { attributes: !0 });
		}
	}
	_update() {
		let e = this._createVNode();
		this._app && (e.appContext = this._app._context), qp(e, this._root);
	}
	_createVNode() {
		let e = {};
		this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
		let t = Z(this._def, F(e, this._props));
		return this._instance || (t.ce = (e) => {
			this._instance = e, e.ce = this, e.isCE = !0;
			let t = (e, t) => {
				this.dispatchEvent(new CustomEvent(e, Sr(t[0]) ? F({ detail: t }, t[0]) : { detail: t }));
			};
			e.emit = (e, ...n) => {
				t(e, n), Or(e) !== e && t(Or(e), n);
			}, this._setParent();
		}), t;
	}
	_applyStyles(e, t, n) {
		if (!e) return;
		if (t) {
			if (t === this._def || this._styleChildren.has(t)) return;
			this._styleChildren.add(t);
		}
		let r = this._nonce, i = this.shadowRoot, a = n ? this._getStyleAnchor(n) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(i), o = null;
		for (let s = e.length - 1; s >= 0; s--) {
			let c = document.createElement("style");
			r && c.setAttribute("nonce", r), c.textContent = e[s], i.insertBefore(c, o || a), o = c, s === 0 && (n || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
		}
	}
	_getStyleAnchor(e) {
		if (!e) return null;
		let t = this._styleAnchors.get(e);
		return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
	}
	_getRootStyleInsertionAnchor(e) {
		for (let t = 0; t < e.childNodes.length; t++) {
			let n = e.childNodes[t];
			if (!(n instanceof HTMLStyleElement)) return n;
		}
		return null;
	}
	_parseSlots() {
		let e = this._slots = {}, t;
		for (; t = this.firstChild;) {
			let n = t.nodeType === 1 && t.getAttribute("slot") || "default";
			(e[n] || (e[n] = [])).push(t), this.removeChild(t);
		}
	}
	_renderSlots() {
		let e = this._getSlots(), t = this._instance.type.__scopeId;
		for (let n = 0; n < e.length; n++) {
			let r = e[n], i = r.getAttribute("name") || "default", a = this._slots[i], o = r.parentNode;
			if (a) for (let e of a) {
				if (t && e.nodeType === 1) {
					let n = t + "-s", r = document.createTreeWalker(e, 1);
					e.setAttribute(n, "");
					let i;
					for (; i = r.nextNode();) i.setAttribute(n, "");
				}
				o.insertBefore(e, r);
			}
			else for (; r.firstChild;) o.insertBefore(r.firstChild, r);
			o.removeChild(r);
		}
	}
	_getSlots() {
		let e = [this];
		this._teleportTargets && e.push(...this._teleportTargets);
		let t = /* @__PURE__ */ new Set();
		for (let n of e) {
			let e = n.querySelectorAll("slot");
			for (let n = 0; n < e.length; n++) t.add(e[n]);
		}
		return Array.from(t);
	}
	_injectChildStyle(e, t) {
		this._applyStyles(e.styles, e, t);
	}
	_beginPatch() {
		this._patching = !0, this._dirty = !1;
	}
	_endPatch() {
		this._patching = !1, this._dirty && this._instance && this._update();
	}
	_hasShadowRoot() {
		return this._def.shadowRoot !== !1;
	}
	_removeChildStyle(e) {}
};
function op(e) {
	let t = ud();
	return t && t.ce || null;
}
function sp() {
	let e = op();
	return e && e.shadowRoot;
}
function cp(e = "$style") {
	{
		let t = ud();
		if (!t) return P;
		let n = t.type.__cssModules;
		return n && n[e] || P;
	}
}
var lp = /* @__PURE__ */ new WeakMap(), up = /* @__PURE__ */ new WeakMap(), dp = /* @__PURE__ */ Symbol("_moveCb"), fp = /* @__PURE__ */ Symbol("_enterCb"), pp = /* @__PURE__ */ ((e) => (delete e.props.mode, e))({
	name: "TransitionGroup",
	props: /* @__PURE__ */ F({}, nf, {
		tag: String,
		moveClass: String
	}),
	setup(e, { slots: t }) {
		let n = ud(), r = Os(), i, a;
		return Uc(() => {
			if (!i.length) return;
			let t = e.moveClass || `${e.name || "v"}-move`;
			if (!vp(i[0].el, n.vnode.el, t)) {
				i = [];
				return;
			}
			i.forEach(mp), i.forEach(hp);
			let r = i.filter(gp);
			vf(n.vnode.el), r.forEach((e) => {
				let n = e.el, r = n.style;
				uf(n, t), r.transform = r.webkitTransform = r.transitionDuration = "";
				let i = n[dp] = (e) => {
					e && e.target !== n || (!e || e.propertyName.endsWith("transform")) && (n.removeEventListener("transitionend", i), n[dp] = null, df(n, t));
				};
				n.addEventListener("transitionend", i);
			}), i = [];
		}), () => {
			let o = /* @__PURE__ */ G(e), s = sf(o), c = o.tag || Y;
			if (i = [], a) for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.el && t.el instanceof Element && !t.el[xf] && (i.push(t), zs(t, Is(t, s, r, n)), lp.set(t, _p(t.el)));
			}
			a = t.default ? Bs(t.default()) : [];
			for (let e = 0; e < a.length; e++) {
				let t = a[e];
				t.key != null && zs(t, Is(t, s, r, n));
			}
			return Z(c, null, a);
		};
	}
});
function mp(e) {
	let t = e.el;
	t[dp] && t[dp](), t[fp] && t[fp]();
}
function hp(e) {
	up.set(e, _p(e.el));
}
function gp(e) {
	let t = lp.get(e), n = up.get(e), r = t.left - n.left, i = t.top - n.top;
	if (r || i) {
		let t = e.el, n = t.style, a = t.getBoundingClientRect(), o = 1, s = 1;
		return t.offsetWidth && (o = a.width / t.offsetWidth), t.offsetHeight && (s = a.height / t.offsetHeight), (!Number.isFinite(o) || o === 0) && (o = 1), (!Number.isFinite(s) || s === 0) && (s = 1), Math.abs(o - 1) < .01 && (o = 1), Math.abs(s - 1) < .01 && (s = 1), n.transform = n.webkitTransform = `translate(${r / o}px,${i / s}px)`, n.transitionDuration = "0s", e;
	}
}
function _p(e) {
	let t = e.getBoundingClientRect();
	return {
		left: t.left,
		top: t.top
	};
}
function vp(e, t, n) {
	let r = e.cloneNode(), i = e[ef];
	i && i.forEach((e) => {
		e.split(/\s+/).forEach((e) => e && r.classList.remove(e));
	}), n.split(/\s+/).forEach((e) => e && r.classList.add(e)), r.style.display = "none";
	let a = t.nodeType === 1 ? t : t.parentNode;
	a.appendChild(r);
	let { hasTransform: o } = hf(r);
	return a.removeChild(r), o;
}
var yp = (e) => {
	let t = e.props["onUpdate:modelValue"] || !1;
	return L(t) ? (e) => jr(t, e) : t;
};
function bp(e) {
	e.target.composing = !0;
}
function xp(e) {
	let t = e.target;
	t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
var Sp = /* @__PURE__ */ Symbol("_assign"), Cp = /* @__PURE__ */ Symbol("_initialValue");
function wp(e, t, n) {
	return t && (e = e.trim()), n && (e = Nr(e)), e;
}
var Tp = {
	created(e, { modifiers: { lazy: t, trim: n, number: r } }, i) {
		e.parentNode && (e.type === "text" ? e[Cp] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Cp] = e.defaultValue.replace(/\r\n?/g, "\n"))), e[Sp] = yp(i);
		let a = r || i.props && i.props.type === "number";
		Bf(e, t ? "change" : "input", (t) => {
			t.target.composing || e[Sp](wp(e.value, n, a));
		}), (n || a) && Bf(e, "change", () => {
			e.value = wp(e.value, n, a);
		}), t || (Bf(e, "compositionstart", bp), Bf(e, "compositionend", xp), Bf(e, "change", xp));
	},
	mounted(e, { value: t, modifiers: { trim: n, number: r } }) {
		let i = t ?? "", a = e[Cp];
		delete e[Cp], a !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== a ? e[Sp](wp(e.value, n, r)) : e.value = i;
	},
	beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: r, trim: i, number: a } }, o) {
		if (e[Sp] = yp(o), e.composing) return;
		let s = (a || e.type === "number") && !/^0\d/.test(e.value) ? Nr(e.value) : e.value, c = t ?? "";
		if (s === c) return;
		let l = e.getRootNode();
		(l instanceof Document || l instanceof ShadowRoot) && l.activeElement === e && e.type !== "range" && (r && t === n || i && e.value.trim() === c) || (e.value = c);
	}
}, Ep = {
	deep: !0,
	created(e, t, n) {
		e[Sp] = yp(n), Bf(e, "change", () => {
			let t = e._modelValue, n = jp(e), r = e.checked, i = e[Sp];
			if (L(t)) {
				let e = ri(t, n), a = e !== -1;
				if (r && !a) i(t.concat(n));
				else if (!r && a) {
					let n = [...t];
					n.splice(e, 1), i(n);
				}
			} else if (mr(t)) {
				let e = new Set(t);
				r ? e.add(n) : e.delete(n), i(e);
			} else i(Mp(e, r));
		});
	},
	mounted: Dp,
	beforeUpdate(e, t, n) {
		e[Sp] = yp(n), Dp(e, t, n);
	}
};
function Dp(e, { value: t, oldValue: n }, r) {
	e._modelValue = t;
	let i;
	if (L(t)) i = ri(t, r.props.value) > -1;
	else if (mr(t)) i = t.has(r.props.value);
	else {
		if (t === n) return;
		i = ni(t, Mp(e, !0));
	}
	e.checked !== i && (e.checked = i);
}
var Op = {
	created(e, { value: t }, n) {
		e.checked = ni(t, n.props.value), e[Sp] = yp(n), Bf(e, "change", () => {
			e[Sp](jp(e));
		});
	},
	beforeUpdate(e, { value: t, oldValue: n }, r) {
		e[Sp] = yp(r), t !== n && (e.checked = ni(t, r.props.value));
	}
}, kp = {
	deep: !0,
	created(e, { value: t, modifiers: { number: n } }, r) {
		e._modelValue = t, Bf(e, "change", () => {
			let t = Array.prototype.filter.call(e.options, (e) => e.selected).map((e) => n ? Nr(jp(e)) : jp(e));
			e[Sp](e.multiple ? mr(e._modelValue) ? new Set(t) : t : t[0]), e._assigning = !0, Io(() => {
				e._assigning = !1;
			});
		}), e[Sp] = yp(r);
	},
	mounted(e, { value: t }) {
		Ap(e, t);
	},
	beforeUpdate(e, { value: t }, n) {
		e._modelValue = t, e[Sp] = yp(n);
	},
	updated(e, { value: t }) {
		e._assigning || Ap(e, t);
	}
};
function Ap(e, t) {
	let n = e.multiple, r = L(t);
	if (!(n && !r && !mr(t))) {
		for (let i = 0, a = e.options.length; i < a; i++) {
			let a = e.options[i], o = jp(a);
			if (n) {
				if (r) {
					let e = typeof o;
					a.selected = e === "string" || e === "number" ? t.some((e) => String(e) === String(o)) : ri(t, o) > -1;
				} else a.selected = t.has(o);
			} else if (ni(jp(a), t)) {
				e.selectedIndex !== i && (e.selectedIndex = i);
				return;
			}
		}
		!n && e.selectedIndex !== -1 && (e.selectedIndex = -1);
	}
}
function jp(e) {
	return "_value" in e ? e._value : e.value;
}
function Mp(e, t) {
	let n = t ? "_trueValue" : "_falseValue";
	return n in e ? e[n] : t;
}
var Np = {
	created(e, t, n) {
		Fp(e, t, n, null, "created");
	},
	mounted(e, t, n) {
		Fp(e, t, n, null, "mounted");
	},
	beforeUpdate(e, t, n, r) {
		Fp(e, t, n, r, "beforeUpdate");
	},
	updated(e, t, n, r) {
		Fp(e, t, n, r, "updated");
	}
};
function Pp(e, t) {
	switch (e) {
		case "SELECT": return kp;
		case "TEXTAREA": return Tp;
		default: switch (t) {
			case "checkbox": return Ep;
			case "radio": return Op;
			default: return Tp;
		}
	}
}
function Fp(e, t, n, r, i) {
	let a = Pp(e.tagName, n.props && n.props.type)[i];
	a && a(e, t, n, r);
}
function Ip() {
	Tp.getSSRProps = ({ value: e }) => ({ value: e }), Op.getSSRProps = ({ value: e }, t) => {
		if (t.props && ni(t.props.value, e)) return { checked: !0 };
	}, Ep.getSSRProps = ({ value: e }, t) => {
		if (L(e)) {
			if (t.props && ri(e, t.props.value) > -1) return { checked: !0 };
		} else if (mr(e)) {
			if (t.props && e.has(t.props.value)) return { checked: !0 };
		} else if (e) return { checked: !0 };
	}, Np.getSSRProps = (e, t) => {
		if (typeof t.type != "string") return;
		let n = Pp(t.type.toUpperCase(), t.props && t.props.type);
		if (n.getSSRProps) return n.getSSRProps(e, t);
	};
}
var Lp = [
	"ctrl",
	"shift",
	"alt",
	"meta"
], Rp = {
	stop: (e) => e.stopPropagation(),
	prevent: (e) => e.preventDefault(),
	self: (e) => e.target !== e.currentTarget,
	ctrl: (e) => !e.ctrlKey,
	shift: (e) => !e.shiftKey,
	alt: (e) => !e.altKey,
	meta: (e) => !e.metaKey,
	left: (e) => "button" in e && e.button !== 0,
	middle: (e) => "button" in e && e.button !== 1,
	right: (e) => "button" in e && e.button !== 2,
	exact: (e, t) => Lp.some((n) => e[`${n}Key`] && !t.includes(n))
}, zp = (e, t) => {
	if (!e) return e;
	let n = e._withMods ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n, ...r) => {
		for (let e = 0; e < t.length; e++) {
			let r = Rp[t[e]];
			if (r && r(n, t)) return;
		}
		return e(n, ...r);
	}));
}, Bp = {
	esc: "escape",
	space: " ",
	up: "arrow-up",
	left: "arrow-left",
	right: "arrow-right",
	down: "arrow-down",
	delete: "backspace"
}, Vp = (e, t) => {
	let n = e._withKeys ||= {}, r = t.join(".");
	return n[r] || (n[r] = ((n) => {
		if (!("key" in n)) return;
		let r = Or(n.key);
		if (t.some((e) => e === r || Bp[e] === r)) return e(n);
	}));
}, Hp = /* @__PURE__ */ F({ patchProp: Qf }, Zd), Up, Wp = !1;
function Gp() {
	return Up ||= lu(Hp);
}
function Kp() {
	return Up = Wp ? Up : uu(Hp), Wp = !0, Up;
}
var qp = ((...e) => {
	Gp().render(...e);
}), Jp = ((...e) => {
	Kp().hydrate(...e);
}), Yp = ((...e) => {
	let t = Gp().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let r = Qp(e);
		if (!r) return;
		let i = t._component;
		!R(i) && !i.render && !i.template && (i.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
		let a = n(r, !1, Zp(r));
		return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), a;
	}, t;
}), Xp = ((...e) => {
	let t = Kp().createApp(...e), { mount: n } = t;
	return t.mount = (e) => {
		let t = Qp(e);
		if (t) return n(t, !0, Zp(t));
	}, t;
});
function Zp(e) {
	if (e instanceof SVGElement) return "svg";
	if (typeof MathMLElement == "function" && e instanceof MathMLElement) return "mathml";
}
function Qp(e) {
	return z(e) ? document.querySelector(e) : e;
}
var $p = !1, em = () => {
	$p || ($p = !0, Ip(), wf());
}, tm = /* @__PURE__ */ s({
	BaseTransition: () => Ps,
	BaseTransitionPropsValidators: () => As,
	Comment: () => X,
	DeprecationTypes: () => null,
	EffectScope: () => li,
	ErrorCodes: () => Co,
	ErrorTypeStrings: () => Bd,
	Fragment: () => Y,
	KeepAlive: () => Ac,
	ReactiveEffect: () => mi,
	Static: () => Pu,
	Suspense: () => Su,
	Teleport: () => Cs,
	Text: () => Nu,
	TrackOpTypes: () => no,
	Transition: () => rf,
	TransitionGroup: () => pp,
	TriggerOpTypes: () => ro,
	VueElement: () => ap,
	assertNumber: () => So,
	callWithAsyncErrorHandling: () => Eo,
	callWithErrorHandling: () => To,
	camelize: () => V,
	capitalize: () => kr,
	cloneVNode: () => Qu,
	compatUtils: () => null,
	compile: () => nm,
	computed: () => Nd,
	createApp: () => Yp,
	createBlock: () => Uu,
	createCommentVNode: () => td,
	createElementBlock: () => Hu,
	createElementVNode: () => Yu,
	createHydrationRenderer: () => uu,
	createPropsRestProxy: () => Dl,
	createRenderer: () => lu,
	createSSRApp: () => Xp,
	createSlots: () => al,
	createStaticVNode: () => ed,
	createTextVNode: () => $u,
	createVNode: () => Z,
	customRef: () => Ja,
	defineAsyncComponent: () => Dc,
	defineComponent: () => Vs,
	defineCustomElement: () => np,
	defineEmits: () => hl,
	defineExpose: () => gl,
	defineModel: () => yl,
	defineOptions: () => _l,
	defineProps: () => ml,
	defineSSRCustomElement: () => rp,
	defineSlots: () => vl,
	devtools: () => Vd,
	effect: () => Di,
	effectScope: () => ui,
	getCurrentInstance: () => ud,
	getCurrentScope: () => di,
	getCurrentWatcher: () => so,
	getTransitionRawChildren: () => Bs,
	guardReactiveProps: () => Zu,
	h: () => Pd,
	handleError: () => Do,
	hasInjectionContext: () => is,
	hydrate: () => Jp,
	hydrateOnIdle: () => bc,
	hydrateOnInteraction: () => wc,
	hydrateOnMediaQuery: () => Cc,
	hydrateOnVisible: () => Sc,
	initCustomFormatter: () => Fd,
	initDirectivesForSSR: () => em,
	inject: () => rs,
	isMemoSame: () => Ld,
	isProxy: () => Pa,
	isReactive: () => ja,
	isReadonly: () => Ma,
	isRef: () => K,
	isRuntimeOnly: () => Cd,
	isShallow: () => Na,
	isVNode: () => Wu,
	markRaw: () => Fa,
	mergeDefaults: () => Tl,
	mergeModels: () => El,
	mergeProps: () => ad,
	nextTick: () => Io,
	nodeOps: () => Zd,
	normalizeClass: () => Wr,
	normalizeProps: () => Gr,
	normalizeStyle: () => Rr,
	onActivated: () => Mc,
	onBeforeMount: () => Bc,
	onBeforeUnmount: () => Wc,
	onBeforeUpdate: () => Hc,
	onDeactivated: () => Nc,
	onErrorCaptured: () => Yc,
	onMounted: () => Vc,
	onRenderTracked: () => Jc,
	onRenderTriggered: () => qc,
	onScopeDispose: () => fi,
	onServerPrefetch: () => Kc,
	onUnmounted: () => Gc,
	onUpdated: () => Uc,
	onWatcherCleanup: () => co,
	openBlock: () => Lu,
	patchProp: () => Qf,
	popScopeId: () => Zo,
	provide: () => ns,
	proxyRefs: () => Ka,
	pushScopeId: () => Xo,
	queuePostFlushCb: () => Bo,
	reactive: () => Ea,
	readonly: () => Oa,
	ref: () => Ra,
	registerRuntimeCompiler: () => Sd,
	render: () => qp,
	renderList: () => il,
	renderSlot: () => ol,
	resolveComponent: () => Qc,
	resolveDirective: () => tl,
	resolveDynamicComponent: () => el,
	resolveFilter: () => null,
	resolveTransitionHooks: () => Is,
	setBlockTracking: () => Bu,
	setDevtoolsHook: () => Hd,
	setTransitionHooks: () => zs,
	shallowReactive: () => Da,
	shallowReadonly: () => ka,
	shallowRef: () => za,
	ssrContextKey: () => as,
	ssrUtils: () => Ud,
	stop: () => Oi,
	toDisplayString: () => ai,
	toHandlerKey: () => Ar,
	toHandlers: () => cl,
	toRaw: () => G,
	toRef: () => Qa,
	toRefs: () => Ya,
	toValue: () => Wa,
	transformVNodeArgs: () => Ku,
	triggerRef: () => Ha,
	unref: () => Ua,
	useAttrs: () => Sl,
	useCssModule: () => cp,
	useCssVars: () => Ef,
	useHost: () => op,
	useId: () => Hs,
	useModel: () => Nl,
	useSSRContext: () => os,
	useShadowRoot: () => sp,
	useSlots: () => xl,
	useTemplateRef: () => Ws,
	useTransitionState: () => Os,
	vModelCheckbox: () => Ep,
	vModelDynamic: () => Np,
	vModelRadio: () => Op,
	vModelSelect: () => kp,
	vModelText: () => Tp,
	vShow: () => Sf,
	version: () => Rd,
	warn: () => zd,
	watch: () => us,
	watchEffect: () => ss,
	watchPostEffect: () => cs,
	watchSyncEffect: () => ls,
	withAsyncContext: () => Ol,
	withCtx: () => $o,
	withDefaults: () => bl,
	withDirectives: () => es,
	withKeys: () => Vp,
	withMemo: () => Id,
	withModifiers: () => zp,
	withScopeId: () => Qo
}), nm = () => {}, rm = "11.4.8";
function im() {
	typeof __VUE_I18N_FULL_INSTALL__ != "boolean" && (S().__VUE_I18N_FULL_INSTALL__ = !0), typeof __VUE_I18N_LEGACY_API__ != "boolean" && (S().__VUE_I18N_LEGACY_API__ = !0), typeof __INTLIFY_DROP_MESSAGE_COMPILER__ != "boolean" && (S().__INTLIFY_DROP_MESSAGE_COMPILER__ = !1), typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (S().__INTLIFY_PROD_DEVTOOLS__ = !1);
}
var $ = {
	UNEXPECTED_RETURN_TYPE: 24,
	INVALID_ARGUMENT: 25,
	MUST_BE_CALL_SETUP_TOP: 26,
	NOT_INSTALLED: 27,
	REQUIRED_VALUE: 28,
	INVALID_VALUE: 29,
	CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: 30,
	NOT_INSTALLED_WITH_PROVIDE: 31,
	UNEXPECTED_ERROR: 32,
	NOT_COMPATIBLE_LEGACY_VUE_I18N: 33,
	NOT_AVAILABLE_COMPOSITION_IN_LEGACY: 34
};
function am(e, ...t) {
	return Te(e, null, void 0);
}
$.UNEXPECTED_RETURN_TYPE, $.INVALID_ARGUMENT, $.MUST_BE_CALL_SETUP_TOP, $.NOT_INSTALLED, $.UNEXPECTED_ERROR, $.REQUIRED_VALUE, $.INVALID_VALUE, $.CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN, $.NOT_INSTALLED_WITH_PROVIDE, $.NOT_COMPATIBLE_LEGACY_VUE_I18N, $.NOT_AVAILABLE_COMPOSITION_IN_LEGACY;
var om = /* #__PURE__*/ d("__translateVNode"), sm = /* #__PURE__*/ d("__datetimeParts"), cm = /* #__PURE__*/ d("__numberParts"), lm = d("__setPluralRules");
d("__intlifyMeta");
var um = /* #__PURE__*/ d("__injectWithOption"), dm = /* #__PURE__*/ d("__dispose"), fm = {
	FALLBACK_TO_ROOT: 10,
	NOT_FOUND_PARENT_SCOPE: 11,
	IGNORE_OBJ_FLATTEN: 12,
	DEPRECATE_LEGACY_MODE: 13,
	DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE: 14,
	DUPLICATE_USE_I18N_CALLING: 15
};
fm.FALLBACK_TO_ROOT, fm.NOT_FOUND_PARENT_SCOPE, fm.IGNORE_OBJ_FLATTEN, fm.DEPRECATE_LEGACY_MODE, fm.DEPRECATE_TRANSLATE_CUSTOME_DIRECTIVE, fm.DUPLICATE_USE_I18N_CALLING;
function pm(e) {
	if (!k(e) || at(e)) return e;
	for (let t in e) if (w(e, t)) {
		if (!t.includes(".")) k(e[t]) && pm(e[t]);
		else {
			let n = t.split("."), r = n.length - 1, i = e, a = !1;
			for (let e = 0; e < r; e++) {
				if (n[e] === "__proto__") throw Error(`unsafe key: ${n[e]}`);
				if (n[e] in i || (i[n[e]] = b()), !k(i[n[e]])) {
					a = !0;
					break;
				}
				i = i[n[e]];
			}
			if (a || (at(i) ? Ct.includes(n[r]) || delete e[t] : (i[n[r]] = e[t], delete e[t])), !at(i)) {
				let e = i[n[r]];
				k(e) && pm(e);
			}
		}
	}
	return e;
}
function mm(e, t) {
	let { messages: n, __i18n: r, messageResolver: i, flatJson: a } = t, o = A(n) ? n : T(r) ? b() : { [e]: b() };
	if (T(r) && r.forEach((e) => {
		if ("locale" in e && "resource" in e) {
			let { locale: t, resource: n } = e;
			t ? (o[t] = o[t] || b(), Se(n, o[t])) : Se(n, o);
		} else D(e) && Se(JSON.parse(e), o);
	}), i == null && a) for (let e in o) w(o, e) && pm(o[e]);
	return o;
}
function hm(e) {
	return e.type;
}
function gm(e, t, n) {
	let r = k(t.messages) ? t.messages : b();
	"__i18nGlobal" in n && (r = mm(e.locale.value, {
		messages: r,
		__i18n: n.__i18nGlobal
	}));
	let i = Object.keys(r);
	if (i.length && i.forEach((t) => {
		e.mergeLocaleMessage(t, r[t]);
	}), k(t.datetimeFormats)) {
		let n = Object.keys(t.datetimeFormats);
		n.length && n.forEach((n) => {
			e.mergeDateTimeFormat(n, t.datetimeFormats[n]);
		});
	}
	if (k(t.numberFormats)) {
		let n = Object.keys(t.numberFormats);
		n.length && n.forEach((n) => {
			e.mergeNumberFormat(n, t.numberFormats[n]);
		});
	}
}
function _m(e) {
	return Z(Nu, null, e, 0);
}
function vm() {
	let e = "currentInstance";
	return e in tm ? tm[e] : ud();
}
var ym = () => [], bm = () => !1, xm = 0;
function Sm(e) {
	return ((t, n, r, i) => e(n, r, vm() || void 0, i));
}
function Cm(e = {}) {
	let { __root: t, __injectWithOption: n } = e, r = t === void 0, i = e.flatJson, a = u ? Ra : za, o = !O(e.inheritLocale) || e.inheritLocale, s = a(t && o ? t.locale.value : D(e.locale) ? e.locale : sn), c = a(t && o ? t.fallbackLocale.value : D(e.fallbackLocale) || T(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value), l = a(mm(s.value, e)), d = a(A(e.datetimeFormats) ? e.datetimeFormats : { [s.value]: {} }), f = a(A(e.numberFormats) ? e.numberFormats : { [s.value]: {} }), p = t ? t.missingWarn : O(e.missingWarn) || g(e.missingWarn) ? e.missingWarn : !0, h = t ? t.fallbackWarn : O(e.fallbackWarn) || g(e.fallbackWarn) ? e.fallbackWarn : !0, _ = t ? t.fallbackRoot : !O(e.fallbackRoot) || e.fallbackRoot, y = !!e.fallbackFormat, b = E(e.missing) ? e.missing : null, x = E(e.missing) ? Sm(e.missing) : null, S = E(e.postTranslation) ? e.postTranslation : null, C = t ? t.warnHtmlMessage : !O(e.warnHtmlMessage) || e.warnHtmlMessage, ee = !!e.escapeParameter, te = t ? t.modifiers : A(e.modifiers) ? e.modifiers : {}, ne = e.pluralRules || t && t.pluralRules, j;
	j = (() => {
		r && yn(null);
		let t = {
			version: rm,
			locale: s.value,
			fallbackLocale: c.value,
			messages: l.value,
			modifiers: te,
			pluralRules: ne,
			missing: x === null ? void 0 : x,
			missingWarn: p,
			fallbackWarn: h,
			fallbackFormat: y,
			unresolving: !0,
			postTranslation: S === null ? void 0 : S,
			warnHtmlMessage: C,
			escapeParameter: ee,
			messageResolver: e.messageResolver,
			messageCompiler: e.messageCompiler,
			__meta: { framework: "vue" }
		};
		t.datetimeFormats = d.value, t.numberFormats = f.value, t.__datetimeFormatters = A(j) ? j.__datetimeFormatters : void 0, t.__numberFormatters = A(j) ? j.__numberFormatters : void 0;
		let n = Sn(t);
		return r && yn(n), n;
	})(), Tn(j, s.value, c.value);
	function re() {
		return [
			s.value,
			c.value,
			l.value,
			d.value,
			f.value
		];
	}
	let ie = Nd({
		get: () => s.value,
		set: (e) => {
			j.locale = e, s.value = e;
		}
	}), ae = Nd({
		get: () => c.value,
		set: (e) => {
			j.fallbackLocale = e, c.value = e, Tn(j, s.value, e);
		}
	}), oe = Nd(() => l.value), se = /* #__PURE__*/ Nd(() => d.value), ce = /* #__PURE__*/ Nd(() => f.value);
	function le() {
		return E(S) ? S : null;
	}
	function ue(e) {
		S = e, j.postTranslation = e;
	}
	function de() {
		return b;
	}
	function fe(e) {
		e !== null && (x = Sm(e)), b = e, j.missing = x;
	}
	let pe = (e, n, i, a, o, s) => {
		re();
		let c;
		try {
			__INTLIFY_PROD_DEVTOOLS__, r || (j.fallbackContext = t ? bn() : void 0), c = e(j);
		} finally {
			__INTLIFY_PROD_DEVTOOLS__, r || (j.fallbackContext = void 0);
		}
		if (i !== "translate exists" && m(c) && c === -1 || i === "translate exists" && !c) {
			let [e, r] = n();
			return t && _ ? a(t) : o(e);
		}
		if (s(c)) return c;
		/* istanbul ignore next */
		throw am($.UNEXPECTED_RETURN_TYPE);
	};
	function me(...e) {
		return pe((t) => Reflect.apply(Zn, null, [t, ...e]), () => nr(...e), "translate", (t) => Reflect.apply(t.t, t, [...e]), (e) => e, (e) => D(e));
	}
	function he(...e) {
		let [t, n, r] = e;
		if (r && !k(r)) throw am($.INVALID_ARGUMENT);
		return me(t, n, v({ resolvedMessage: !0 }, r || {}));
	}
	function ge(...e) {
		return pe((t) => Reflect.apply(Nn, null, [t, ...e]), () => Fn(...e), "datetime format", (t) => Reflect.apply(t.d, t, [...e]), () => "", (e) => D(e) || T(e));
	}
	function _e(...e) {
		return pe((t) => Reflect.apply(Ln, null, [t, ...e]), () => zn(...e), "number format", (t) => Reflect.apply(t.n, t, [...e]), () => "", (e) => D(e) || T(e));
	}
	function ve(e) {
		return e.map((e) => D(e) || m(e) || O(e) ? _m(String(e)) : e);
	}
	let ye = {
		normalize: ve,
		interpolate: (e) => e,
		type: "vnode"
	};
	function be(...e) {
		return pe((t) => {
			let n, r = t;
			try {
				r.processor = ye, n = Reflect.apply(Zn, null, [r, ...e]);
			} finally {
				r.processor = null;
			}
			return n;
		}, () => nr(...e), "translate", (t) => t[om](...e), (e) => [_m(e)], (e) => T(e));
	}
	function xe(...e) {
		return pe((t) => Reflect.apply(Ln, null, [t, ...e]), () => zn(...e), "number format", (t) => t[cm](...e), ym, (e) => D(e) || T(e));
	}
	function Ce(...e) {
		return pe((t) => Reflect.apply(Nn, null, [t, ...e]), () => Fn(...e), "datetime format", (t) => t[sm](...e), ym, (e) => D(e) || T(e));
	}
	function we(e) {
		ne = e, j.pluralRules = ne;
	}
	function M(e, t) {
		return pe(() => {
			if (!e) return !1;
			let n = D(t) ? t : s.value, r = D(t) ? [n] : Wt(j, c.value, n);
			for (let t = 0; t < r.length; t++) {
				let n = De(r[t]), i = j.messageResolver(n, e);
				if (i === null && (i = n[e]), at(i) || Xn(i) || D(i)) return !0;
			}
			return !1;
		}, () => [e], "translate exists", (n) => Reflect.apply(n.te, n, [e, t]), bm, (e) => O(e));
	}
	function Te(e) {
		let t = null, n = Wt(j, c.value, s.value);
		for (let r = 0; r < n.length; r++) {
			let i = l.value[n[r]] || {}, a = j.messageResolver(i, e);
			if (a != null) {
				t = a;
				break;
			}
		}
		return t;
	}
	function Ee(e) {
		return Te(e) ?? (t && t.tm(e) || {});
	}
	function De(e) {
		return l.value[e] || {};
	}
	function Oe(e, t) {
		if (i) {
			let n = { [e]: t };
			for (let e in n) w(n, e) && pm(n[e]);
			t = n[e];
		}
		l.value[e] = t, j.messages = l.value;
	}
	function ke(e, t) {
		l.value[e] = l.value[e] || {};
		let n = { [e]: t };
		if (i) for (let e in n) w(n, e) && pm(n[e]);
		t = n[e], Se(t, l.value[e]), j.messages = l.value;
	}
	function Ae(e) {
		return d.value[e] || {};
	}
	function je(e, t) {
		d.value[e] = t, j.datetimeFormats = d.value, In(j, e, t);
	}
	function Me(e, t) {
		d.value[e] = v(d.value[e] || {}, t), j.datetimeFormats = d.value, In(j, e, t);
	}
	function Ne(e) {
		return f.value[e] || {};
	}
	function Pe(e, t) {
		f.value[e] = t, j.numberFormats = f.value, Bn(j, e, t);
	}
	function Fe(e, t) {
		f.value[e] = v(f.value[e] || {}, t), j.numberFormats = f.value, Bn(j, e, t);
	}
	xm++, t && u && (us(t.locale, (e) => {
		o && (s.value = e, j.locale = e, Tn(j, s.value, c.value));
	}), us(t.fallbackLocale, (e) => {
		o && (c.value = e, j.fallbackLocale = e, Tn(j, s.value, c.value));
	}));
	let N = {
		id: xm,
		locale: ie,
		fallbackLocale: ae,
		get inheritLocale() {
			return o;
		},
		set inheritLocale(e) {
			o = e, e && t && (s.value = t.locale.value, c.value = t.fallbackLocale.value, Tn(j, s.value, c.value));
		},
		get availableLocales() {
			return Object.keys(l.value).sort();
		},
		messages: oe,
		get modifiers() {
			return te;
		},
		get pluralRules() {
			return ne || {};
		},
		get isGlobal() {
			return r;
		},
		get missingWarn() {
			return p;
		},
		set missingWarn(e) {
			p = e, j.missingWarn = p;
		},
		get fallbackWarn() {
			return h;
		},
		set fallbackWarn(e) {
			h = e, j.fallbackWarn = h;
		},
		get fallbackRoot() {
			return _;
		},
		set fallbackRoot(e) {
			_ = e;
		},
		get fallbackFormat() {
			return y;
		},
		set fallbackFormat(e) {
			y = e, j.fallbackFormat = y;
		},
		get warnHtmlMessage() {
			return C;
		},
		set warnHtmlMessage(e) {
			C = e, j.warnHtmlMessage = e;
		},
		get escapeParameter() {
			return ee;
		},
		set escapeParameter(e) {
			ee = e, j.escapeParameter = e;
		},
		t: me,
		getLocaleMessage: De,
		setLocaleMessage: Oe,
		mergeLocaleMessage: ke,
		getPostTranslationHandler: le,
		setPostTranslationHandler: ue,
		getMissingHandler: de,
		setMissingHandler: fe,
		[lm]: we
	};
	return N.datetimeFormats = se, N.numberFormats = ce, N.rt = he, N.te = M, N.tm = Ee, N.d = ge, N.n = _e, N.getDateTimeFormat = Ae, N.setDateTimeFormat = je, N.mergeDateTimeFormat = Me, N.getNumberFormat = Ne, N.setNumberFormat = Pe, N.mergeNumberFormat = Fe, N[um] = n, N[om] = be, N[sm] = Ce, N[cm] = xe, N;
}
function wm(e) {
	let t = D(e.locale) ? e.locale : sn, n = D(e.fallbackLocale) || T(e.fallbackLocale) || A(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : t, r = E(e.missing) ? e.missing : void 0, i = O(e.silentTranslationWarn) || g(e.silentTranslationWarn) ? !e.silentTranslationWarn : !0, a = O(e.silentFallbackWarn) || g(e.silentFallbackWarn) ? !e.silentFallbackWarn : !0, o = !O(e.fallbackRoot) || e.fallbackRoot, s = !!e.formatFallbackMessages, c = A(e.modifiers) ? e.modifiers : {}, l = e.pluralizationRules, u = E(e.postTranslation) ? e.postTranslation : void 0, d = !D(e.warnHtmlInMessage) || e.warnHtmlInMessage !== "off", f = !!e.escapeParameterHtml, p = !O(e.sync) || e.sync, m = e.messages;
	if (A(e.sharedMessages)) {
		let t = e.sharedMessages;
		m = Object.keys(t).reduce((e, n) => (v(e[n] || (e[n] = {}), t[n]), e), m || {});
	}
	let { __i18n: h, __root: _, __injectWithOption: y } = e, b = e.datetimeFormats, x = e.numberFormats, S = e.flatJson;
	return {
		locale: t,
		fallbackLocale: n,
		messages: m,
		flatJson: S,
		datetimeFormats: b,
		numberFormats: x,
		missing: r,
		missingWarn: i,
		fallbackWarn: a,
		fallbackRoot: o,
		fallbackFormat: s,
		modifiers: c,
		pluralRules: l,
		postTranslation: u,
		warnHtmlMessage: d,
		escapeParameter: f,
		messageResolver: e.messageResolver,
		inheritLocale: p,
		__i18n: h,
		__root: _,
		__injectWithOption: y
	};
}
function Tm(e = {}) {
	let t = Cm(wm(e)), { __extender: n } = e, r = {
		id: t.id,
		get locale() {
			return t.locale.value;
		},
		set locale(e) {
			t.locale.value = e;
		},
		get fallbackLocale() {
			return t.fallbackLocale.value;
		},
		set fallbackLocale(e) {
			t.fallbackLocale.value = e;
		},
		get messages() {
			return t.messages.value;
		},
		get datetimeFormats() {
			return t.datetimeFormats.value;
		},
		get numberFormats() {
			return t.numberFormats.value;
		},
		get availableLocales() {
			return t.availableLocales;
		},
		get missing() {
			return t.getMissingHandler();
		},
		set missing(e) {
			t.setMissingHandler(e);
		},
		get silentTranslationWarn() {
			return O(t.missingWarn) ? !t.missingWarn : t.missingWarn;
		},
		set silentTranslationWarn(e) {
			t.missingWarn = O(e) ? !e : e;
		},
		get silentFallbackWarn() {
			return O(t.fallbackWarn) ? !t.fallbackWarn : t.fallbackWarn;
		},
		set silentFallbackWarn(e) {
			t.fallbackWarn = O(e) ? !e : e;
		},
		get modifiers() {
			return t.modifiers;
		},
		get formatFallbackMessages() {
			return t.fallbackFormat;
		},
		set formatFallbackMessages(e) {
			t.fallbackFormat = e;
		},
		get postTranslation() {
			return t.getPostTranslationHandler();
		},
		set postTranslation(e) {
			t.setPostTranslationHandler(e);
		},
		get sync() {
			return t.inheritLocale;
		},
		set sync(e) {
			t.inheritLocale = e;
		},
		get warnHtmlInMessage() {
			return t.warnHtmlMessage ? "warn" : "off";
		},
		set warnHtmlInMessage(e) {
			t.warnHtmlMessage = e !== "off";
		},
		get escapeParameterHtml() {
			return t.escapeParameter;
		},
		set escapeParameterHtml(e) {
			t.escapeParameter = e;
		},
		get pluralizationRules() {
			return t.pluralRules || {};
		},
		__composer: t,
		t(...e) {
			return Reflect.apply(t.t, t, [...e]);
		},
		rt(...e) {
			return Reflect.apply(t.rt, t, [...e]);
		},
		te(e, n) {
			return t.te(e, n);
		},
		tm(e) {
			return t.tm(e);
		},
		getLocaleMessage(e) {
			return t.getLocaleMessage(e);
		},
		setLocaleMessage(e, n) {
			t.setLocaleMessage(e, n);
		},
		mergeLocaleMessage(e, n) {
			t.mergeLocaleMessage(e, n);
		},
		d(...e) {
			return Reflect.apply(t.d, t, [...e]);
		},
		getDateTimeFormat(e) {
			return t.getDateTimeFormat(e);
		},
		setDateTimeFormat(e, n) {
			t.setDateTimeFormat(e, n);
		},
		mergeDateTimeFormat(e, n) {
			t.mergeDateTimeFormat(e, n);
		},
		n(...e) {
			return Reflect.apply(t.n, t, [...e]);
		},
		getNumberFormat(e) {
			return t.getNumberFormat(e);
		},
		setNumberFormat(e, n) {
			t.setNumberFormat(e, n);
		},
		mergeNumberFormat(e, n) {
			t.mergeNumberFormat(e, n);
		}
	};
	return r.__extender = n, r;
}
function Em(e, t, n) {
	return {
		beforeCreate() {
			let r = vm();
			/* istanbul ignore if */
			if (!r) throw am($.UNEXPECTED_ERROR);
			let i = this.$options;
			if (i.i18n) {
				let r = i.i18n;
				if (i.__i18n && (r.__i18n = i.__i18n), r.__root = t, this === this.$root) this.$i18n = Dm(e, r);
				else {
					r.__injectWithOption = !0, r.__extender = n.__vueI18nExtend, this.$i18n = Tm(r);
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else if (i.__i18n) {
				if (this === this.$root) this.$i18n = Dm(e, i);
				else {
					this.$i18n = Tm({
						__i18n: i.__i18n,
						__injectWithOption: !0,
						__extender: n.__vueI18nExtend,
						__root: t
					});
					let e = this.$i18n;
					e.__extender && (e.__disposer = e.__extender(this.$i18n));
				}
			} else this.$i18n = e;
			i.__i18nGlobal && gm(t, i, i), this.$t = (...e) => this.$i18n.t(...e), this.$rt = (...e) => this.$i18n.rt(...e), this.$te = (e, t) => this.$i18n.te(e, t), this.$d = (...e) => this.$i18n.d(...e), this.$n = (...e) => this.$i18n.n(...e), this.$tm = (e) => this.$i18n.tm(e), n.__setInstance(r, this.$i18n);
		},
		mounted() {},
		unmounted() {
			let e = vm();
			/* istanbul ignore if */
			if (!e) throw am($.UNEXPECTED_ERROR);
			let t = this.$i18n;
			t && (delete this.$t, delete this.$rt, delete this.$te, delete this.$d, delete this.$n, delete this.$tm, t?.__disposer && (t.__disposer(), delete t.__disposer, delete t.__extender), n.__deleteInstance(e), delete this.$i18n);
		}
	};
}
function Dm(e, t) {
	e.locale = t.locale || e.locale, e.fallbackLocale = t.fallbackLocale || e.fallbackLocale, e.missing = t.missing || e.missing, e.silentTranslationWarn = t.silentTranslationWarn || e.silentFallbackWarn, e.silentFallbackWarn = t.silentFallbackWarn || e.silentFallbackWarn, e.formatFallbackMessages = t.formatFallbackMessages || e.formatFallbackMessages, e.postTranslation = t.postTranslation || e.postTranslation, e.warnHtmlInMessage = t.warnHtmlInMessage || e.warnHtmlInMessage, e.escapeParameterHtml = t.escapeParameterHtml || e.escapeParameterHtml, e.sync = t.sync || e.sync, e.__composer[lm](t.pluralizationRules || e.pluralizationRules);
	let n = mm(e.locale, {
		messages: t.messages,
		__i18n: t.__i18n
	});
	return Object.keys(n).forEach((t) => e.mergeLocaleMessage(t, n[t])), t.datetimeFormats && Object.keys(t.datetimeFormats).forEach((n) => e.mergeDateTimeFormat(n, t.datetimeFormats[n])), t.numberFormats && Object.keys(t.numberFormats).forEach((n) => e.mergeNumberFormat(n, t.numberFormats[n])), e;
}
var Om = {
	tag: { type: [String, Object] },
	locale: { type: String },
	scope: {
		type: String,
		validator: (e) => e === "parent" || e === "global",
		default: "parent"
	},
	i18n: { type: Object }
};
function km({ slots: e }, t) {
	return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((e, t) => [...e, ...t.type === Y ? t.children : [t]], []) : t.reduce((t, n) => {
		let r = e[n];
		return r && (t[n] = r()), t;
	}, b());
}
function Am() {
	return Y;
}
var jm = /* @__PURE__ */ Vs({
	name: "i18n-t",
	props: v({
		keypath: {
			type: String,
			required: !0
		},
		plural: {
			type: [Number, String],
			validator: (e) => m(e) || !isNaN(e)
		}
	}, Om),
	setup(e, t) {
		let { slots: n, attrs: r } = t, i = e.i18n || Hm({
			useScope: e.scope,
			__useComponent: !0
		});
		return () => {
			let a = () => {
				let r = Object.keys(n).filter((e) => e[0] !== "_"), a = b();
				e.locale && (a.locale = e.locale), e.plural !== void 0 && (a.plural = D(e.plural) ? +e.plural : e.plural);
				let o = km(t, r);
				return i[om](e.keypath, o, a);
			}, o = v(b(), r), s = D(e.tag) || k(e.tag) ? e.tag : Am();
			return k(s) ? Pd(s, o, { default: a }) : Pd(s, o, a());
		};
	}
});
function Mm(e) {
	return T(e) && !D(e[0]);
}
function Nm(e, t, n, r) {
	let { slots: i, attrs: a } = t;
	return () => {
		let t = () => {
			let t = { part: !0 }, a = b();
			e.locale && (t.locale = e.locale), D(e.format) ? t.key = e.format : k(e.format) && (D(e.format.key) && (t.key = e.format.key), a = Object.keys(e.format).reduce((t, r) => n.includes(r) ? v(b(), t, { [r]: e.format[r] }) : t, b()));
			let o = r(e.value, t, a), s = [t.key];
			return T(o) ? s = o.map((e, t) => {
				let n = i[e.type], r = n ? n({
					[e.type]: e.value,
					index: t,
					parts: o
				}) : [e.value];
				return Mm(r) && (r[0].key = `${e.type}-${t}`), r;
			}) : D(o) && (s = [o]), s;
		}, o = v(b(), a), s = D(e.tag) || k(e.tag) ? e.tag : Am();
		return k(s) ? Pd(s, o, { default: t }) : Pd(s, o, t());
	};
}
var Pm = /* @__PURE__ */ Vs({
	name: "i18n-n",
	props: v({
		value: {
			type: Number,
			required: !0
		},
		format: { type: [String, Object] }
	}, Om),
	setup(e, t) {
		let n = e.i18n || Hm({
			useScope: e.scope,
			__useComponent: !0
		});
		return Nm(e, t, Rn, (...e) => n[cm](...e));
	}
});
function Fm(e, t) {
	let n = e;
	if (e.mode === "composition") return n.__getInstance(t) || e.global;
	{
		let r = n.__getInstance(t);
		return r == null ? e.global.__composer : r.__composer;
	}
}
function Im(e) {
	let t = (t) => {
		let { instance: n, value: r } = t;
		/* istanbul ignore if */
		if (!n || !n.$) throw am($.UNEXPECTED_ERROR);
		let i = Fm(e, n.$), a = Lm(r);
		return [Reflect.apply(i.t, i, [...Rm(a)]), i];
	};
	return {
		created: (e, n) => {
			let [r, i] = t(n);
			u && (e.__i18nWatcher = us(i.locale, () => {
				n.instance && n.instance.$forceUpdate();
			})), e.__composer = i, e.textContent = r;
		},
		unmounted: (e) => {
			u && e.__i18nWatcher && (e.__i18nWatcher(), e.__i18nWatcher = void 0, delete e.__i18nWatcher), e.__composer && (e.__composer = void 0, delete e.__composer);
		},
		beforeUpdate: (e, { value: t }) => {
			if (e.__composer) {
				let n = e.__composer, r = Lm(t);
				e.textContent = Reflect.apply(n.t, n, [...Rm(r)]);
			}
		},
		getSSRProps: (e) => {
			let [n] = t(e);
			return { textContent: n };
		}
	};
}
function Lm(e) {
	if (D(e)) return { path: e };
	if (A(e)) {
		if (!("path" in e)) throw am($.REQUIRED_VALUE, "path");
		return e;
	}
	throw am($.INVALID_VALUE);
}
function Rm(e) {
	let { path: t, locale: n, args: r, choice: i, plural: a } = e, o = {}, s = r || {};
	return D(n) && (o.locale = n), m(i) && (o.plural = i), m(a) && (o.plural = a), [
		t,
		s,
		o
	];
}
function zm(e, t, ...n) {
	let r = A(n[0]) ? n[0] : {};
	(!O(r.globalInstall) || r.globalInstall) && ([jm.name, "I18nT"].forEach((t) => e.component(t, jm)), [Pm.name, "I18nN"].forEach((t) => e.component(t, Pm)), [$m.name, "I18nD"].forEach((t) => e.component(t, $m))), e.directive("t", Im(t));
}
var Bm = /* #__PURE__*/ d("global-vue-i18n");
function Vm(e = {}) {
	let t = __VUE_I18N_LEGACY_API__ && O(e.legacy) ? e.legacy : __VUE_I18N_LEGACY_API__, n = !O(e.globalInjection) || e.globalInjection, r = /* @__PURE__ */ new Map(), [i, a] = Um(e, t), o = /* #__PURE__*/ d("");
	function s(e) {
		return r.get(e) || null;
	}
	function c(e, t) {
		r.set(e, t);
	}
	function l(e) {
		r.delete(e);
	}
	let u = {
		get mode() {
			return __VUE_I18N_LEGACY_API__ && t ? "legacy" : "composition";
		},
		async install(e, ...r) {
			if (e.__VUE_I18N_SYMBOL__ = o, e.provide(e.__VUE_I18N_SYMBOL__, u), A(r[0])) {
				let e = r[0];
				u.__composerExtend = e.__composerExtend, u.__vueI18nExtend = e.__vueI18nExtend;
			}
			let i = null;
			!t && n && (i = Qm(e, u.global)), __VUE_I18N_FULL_INSTALL__ && zm(e, u, ...r), __VUE_I18N_LEGACY_API__ && t && e.mixin(Em(a, a.__composer, u));
			let s = e.unmount;
			e.unmount = () => {
				i && i(), u.dispose(), s();
			};
		},
		get global() {
			return a;
		},
		dispose() {
			i.stop();
		},
		__instances: r,
		__getInstance: s,
		__setInstance: c,
		__deleteInstance: l
	};
	return u;
}
function Hm(e = {}) {
	let t = vm();
	if (t == null) throw am($.MUST_BE_CALL_SETUP_TOP);
	if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw am($.NOT_INSTALLED);
	let n = Wm(t), r = Km(n), i = hm(t), a = Gm(e, i);
	if (a === "global") return gm(r, e, i), r;
	if (a === "parent") {
		let i = qm(n, t, e.__useComponent);
		return i ??= r, i;
	}
	if (a === "isolated") {
		if (n.mode !== "composition") throw am($.NOT_AVAILABLE_COMPOSITION_IN_LEGACY);
		let i = n, a = v({}, e);
		a.__root = qm(n, t) || r;
		let o = Cm(a);
		return i.__composerExtend && (o[dm] = i.__composerExtend(o)), di() && fi(() => {
			let e = o[dm];
			e && (e(), delete o[dm]);
		}), o;
	}
	let o = n, s = o.__getInstance(t);
	if (s == null) {
		let n = v({}, e);
		"__i18n" in i && (n.__i18n = i.__i18n), r && (n.__root = r), s = Cm(n), o.__composerExtend && (s[dm] = o.__composerExtend(s)), Ym(o, t, s), o.__setInstance(t, s);
	}
	return s;
}
function Um(e, t) {
	let n = ui(), r = __VUE_I18N_LEGACY_API__ && t ? n.run(() => Tm(e)) : n.run(() => Cm(e));
	if (r == null) throw am($.UNEXPECTED_ERROR);
	return [n, r];
}
function Wm(e) {
	let t = rs(e.isCE ? Bm : e.appContext.app.__VUE_I18N_SYMBOL__);
	/* istanbul ignore if */
	if (!t) throw am(e.isCE ? $.NOT_INSTALLED_WITH_PROVIDE : $.UNEXPECTED_ERROR);
	return t;
}
function Gm(e, t) {
	return _(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local";
}
function Km(e) {
	return e.mode === "composition" ? e.global : e.global.__composer;
}
function qm(e, t, n = !1) {
	let r = null, i = t.root, a = Jm(t, n);
	for (; a != null;) {
		let t = e;
		if (e.mode === "composition") r = t.__getInstance(a);
		else if (__VUE_I18N_LEGACY_API__) {
			let e = t.__getInstance(a);
			e != null && (r = e.__composer, n && r && !r[um] && (r = null));
		}
		if (r != null || i === a) break;
		a = a.parent;
	}
	return r;
}
function Jm(e, t = !1) {
	return e == null ? null : t && e.vnode.ctx || e.parent;
}
function Ym(e, t, n) {
	Vc(() => {}, t), Gc(() => {
		let r = n;
		e.__deleteInstance(t);
		let i = r[dm];
		i && (i(), delete r[dm]);
	}, t);
}
var Xm = [
	"locale",
	"fallbackLocale",
	"availableLocales"
], Zm = [
	"t",
	"rt",
	"d",
	"n",
	"tm",
	"te"
];
function Qm(e, t) {
	let n = Object.create(null);
	return Xm.forEach((e) => {
		let r = Object.getOwnPropertyDescriptor(t, e);
		if (!r) throw am($.UNEXPECTED_ERROR);
		let i = /* @__PURE__ */ K(r.value) ? {
			get() {
				return r.value.value;
			},
			set(e) {
				r.value.value = e;
			}
		} : { get() {
			return r.get && r.get();
		} };
		Object.defineProperty(n, e, i);
	}), e.config.globalProperties.$i18n = n, Zm.forEach((n) => {
		let r = Object.getOwnPropertyDescriptor(t, n);
		if (!r || !r.value) throw am($.UNEXPECTED_ERROR);
		Object.defineProperty(e.config.globalProperties, `$${n}`, r);
	}), () => {
		delete e.config.globalProperties.$i18n, Zm.forEach((t) => {
			delete e.config.globalProperties[`$${t}`];
		});
	};
}
var $m = /* @__PURE__ */ Vs({
	name: "i18n-d",
	props: v({
		value: {
			type: [Number, Date],
			required: !0
		},
		format: { type: [String, Object] }
	}, Om),
	setup(e, t) {
		let n = e.i18n || Hm({
			useScope: e.scope,
			__useComponent: !0
		});
		return Nm(e, t, Pn, (...e) => n[sm](...e));
	}
});
if (im(), dn(Mt), pn(rn), hn(Wt), __INTLIFY_PROD_DEVTOOLS__) {
	let e = S();
	e.__INTLIFY__ = !0, Pt(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__);
}
//#endregion
//#region lib/shared/encoding/base64.ts
var eh = /* @__PURE__ */ l((/* @__PURE__ */ o(((e) => {
	(function(e) {
		function t(e) {
			let t = atob(e);
			return Uint8Array.from(t, (e) => e.codePointAt(0));
		}
		function n(e) {
			let t = Array.from(e, (e) => String.fromCodePoint(e)).join("");
			return btoa(t);
		}
		e.encode = function(e) {
			return n(new TextEncoder().encode(e));
		}, e.decode = function(e) {
			return new TextDecoder().decode(t(e));
		};
	})(e === void 0 ? e.Base64 = {} : e);
})))(), 1), th = (e) => eh.decode(e);
//#endregion
export { il as A, K as B, ad as C, Gc as D, Vc as E, ss as F, za as G, fi as H, $o as I, Ua as J, Ya as K, es as L, Qc as M, Hs as N, Lu as O, us as P, Ja as R, rs as S, Wc as T, Ra as U, Fa as V, ka as W, ai as X, Wr as Y, $u as _, Yp as a, ud as b, zp as c, Qu as d, Nd as f, Hu as g, td as h, tm as i, ol as j, ns as k, X as l, Uu as m, Vm as n, Tp as o, Yu as p, Wa as q, Hm as r, Vp as s, th as t, Y as u, Z as v, Io as w, Pd as x, Vs as y, di as z };
