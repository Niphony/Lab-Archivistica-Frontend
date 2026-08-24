import { A as e, B as t, F as n, G as r, J as i, L as a, O as o, P as s, T as c, U as l, X as u, Y as d, _ as f, a as p, f as m, g as h, h as g, m as _, o as v, p as y, r as b, u as x, v as S, x as C, y as w } from "./runtime-CsFmpt5v.js";
import { n as T, t as E } from "./i18n-D6k_RFjI.js";
import { n as D } from "./treeview-O_e403sy.js";
import { t as O } from "./_plugin-vue_export-helper-B3ysoDQm.js";
import { t as k } from "./plain-GH5faqzX.js";
//#region node_modules/@tanstack/table-core/build/lib/index.mjs
function A(e, t) {
	return typeof e == "function" ? e(t) : e;
}
function j(e, t) {
	return (n) => {
		t.setState((t) => ({
			...t,
			[e]: A(n, t[e])
		}));
	};
}
function M(e) {
	return e instanceof Function;
}
function ee(e) {
	return Array.isArray(e) && e.every((e) => typeof e == "number");
}
function N(e, t) {
	let n = [], r = (e) => {
		e.forEach((e) => {
			n.push(e);
			let i = t(e);
			i != null && i.length && r(i);
		});
	};
	return r(e), n;
}
function P(e, t, n) {
	let r = [], i;
	return (a) => {
		let o;
		n.key && n.debug && (o = Date.now());
		let s = e(a);
		if (!(s.length !== r.length || s.some((e, t) => r[t] !== e))) return i;
		r = s;
		let c;
		if (n.key && n.debug && (c = Date.now()), i = t(...s), n == null || n.onChange == null || n.onChange(i), n.key && n.debug && n != null && n.debug()) {
			let e = Math.round((Date.now() - o) * 100) / 100, t = Math.round((Date.now() - c) * 100) / 100, r = t / 16, i = (e, t) => {
				for (e = String(e); e.length < t;) e = " " + e;
				return e;
			};
			console.info(`%c⏱ ${i(t, 5)} /${i(e, 5)} ms`, `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * r, 120))}deg 100% 31%);`, n?.key);
		}
		return i;
	};
}
function F(e, t, n, r) {
	return {
		debug: () => e?.debugAll ?? e[t],
		key: !1,
		onChange: r
	};
}
function te(e, t, n, r) {
	let i = {
		id: `${t.id}_${n.id}`,
		row: t,
		column: n,
		getValue: () => t.getValue(r),
		renderValue: () => i.getValue() ?? e.options.renderFallbackValue,
		getContext: P(() => [
			e,
			n,
			t,
			i
		], (e, t, n, r) => ({
			table: e,
			column: t,
			row: n,
			cell: r,
			getValue: r.getValue,
			renderValue: r.renderValue
		}), F(e.options, "debugCells", "cell.getContext"))
	};
	return e._features.forEach((r) => {
		r.createCell == null || r.createCell(i, n, t, e);
	}, {}), i;
}
function ne(e, t, n, r) {
	let i = {
		...e._getDefaultColumnDef(),
		...t
	}, a = i.accessorKey, o = i.id ?? (a ? typeof String.prototype.replaceAll == "function" ? a.replaceAll(".", "_") : a.replace(/\./g, "_") : void 0) ?? (typeof i.header == "string" ? i.header : void 0), s;
	if (i.accessorFn ? s = i.accessorFn : a && (s = a.includes(".") ? (e) => {
		let t = e;
		for (let e of a.split(".")) t = t?.[e];
		return t;
	} : (e) => e[i.accessorKey]), !o) throw Error();
	let c = {
		id: `${String(o)}`,
		accessorFn: s,
		parent: r,
		depth: n,
		columnDef: i,
		columns: [],
		getFlatColumns: P(() => [!0], () => [c, ...c.columns?.flatMap((e) => e.getFlatColumns())], F(e.options, "debugColumns", "column.getFlatColumns")),
		getLeafColumns: P(() => [e._getOrderColumnsFn()], (e) => {
			var t;
			return (t = c.columns) != null && t.length ? e(c.columns.flatMap((e) => e.getLeafColumns())) : [c];
		}, F(e.options, "debugColumns", "column.getLeafColumns"))
	};
	for (let t of e._features) t.createColumn == null || t.createColumn(c, e);
	return c;
}
var I = "debugHeaders";
function re(e, t, n) {
	let r = {
		id: n.id ?? t.id,
		column: t,
		index: n.index,
		isPlaceholder: !!n.isPlaceholder,
		placeholderId: n.placeholderId,
		depth: n.depth,
		subHeaders: [],
		colSpan: 0,
		rowSpan: 0,
		headerGroup: null,
		getLeafHeaders: () => {
			let e = [], t = (n) => {
				n.subHeaders && n.subHeaders.length && n.subHeaders.map(t), e.push(n);
			};
			return t(r), e;
		},
		getContext: () => ({
			table: e,
			header: r,
			column: t
		})
	};
	return e._features.forEach((t) => {
		t.createHeader == null || t.createHeader(r, e);
	}), r;
}
var ie = { createTable: (e) => {
	e.getHeaderGroups = P(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => {
		let a = r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], o = i?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], s = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id)));
		return L(t, [
			...a,
			...s,
			...o
		], e);
	}, F(e.options, I, "getHeaderGroups")), e.getCenterHeaderGroups = P(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left,
		e.getState().columnPinning.right
	], (t, n, r, i) => (n = n.filter((e) => !(r != null && r.includes(e.id)) && !(i != null && i.includes(e.id))), L(t, n, e, "center")), F(e.options, I, "getCenterHeaderGroups")), e.getLeftHeaderGroups = P(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.left
	], (t, n, r) => L(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "left"), F(e.options, I, "getLeftHeaderGroups")), e.getRightHeaderGroups = P(() => [
		e.getAllColumns(),
		e.getVisibleLeafColumns(),
		e.getState().columnPinning.right
	], (t, n, r) => L(t, r?.map((e) => n.find((t) => t.id === e)).filter(Boolean) ?? [], e, "right"), F(e.options, I, "getRightHeaderGroups")), e.getFooterGroups = P(() => [e.getHeaderGroups()], (e) => [...e].reverse(), F(e.options, I, "getFooterGroups")), e.getLeftFooterGroups = P(() => [e.getLeftHeaderGroups()], (e) => [...e].reverse(), F(e.options, I, "getLeftFooterGroups")), e.getCenterFooterGroups = P(() => [e.getCenterHeaderGroups()], (e) => [...e].reverse(), F(e.options, I, "getCenterFooterGroups")), e.getRightFooterGroups = P(() => [e.getRightHeaderGroups()], (e) => [...e].reverse(), F(e.options, I, "getRightFooterGroups")), e.getFlatHeaders = P(() => [e.getHeaderGroups()], (e) => e.map((e) => e.headers).flat(), F(e.options, I, "getFlatHeaders")), e.getLeftFlatHeaders = P(() => [e.getLeftHeaderGroups()], (e) => e.map((e) => e.headers).flat(), F(e.options, I, "getLeftFlatHeaders")), e.getCenterFlatHeaders = P(() => [e.getCenterHeaderGroups()], (e) => e.map((e) => e.headers).flat(), F(e.options, I, "getCenterFlatHeaders")), e.getRightFlatHeaders = P(() => [e.getRightHeaderGroups()], (e) => e.map((e) => e.headers).flat(), F(e.options, I, "getRightFlatHeaders")), e.getCenterLeafHeaders = P(() => [e.getCenterFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), F(e.options, I, "getCenterLeafHeaders")), e.getLeftLeafHeaders = P(() => [e.getLeftFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), F(e.options, I, "getLeftLeafHeaders")), e.getRightLeafHeaders = P(() => [e.getRightFlatHeaders()], (e) => e.filter((e) => {
		var t;
		return !((t = e.subHeaders) != null && t.length);
	}), F(e.options, I, "getRightLeafHeaders")), e.getLeafHeaders = P(() => [
		e.getLeftHeaderGroups(),
		e.getCenterHeaderGroups(),
		e.getRightHeaderGroups()
	], (e, t, n) => [
		...e[0]?.headers ?? [],
		...t[0]?.headers ?? [],
		...n[0]?.headers ?? []
	].map((e) => e.getLeafHeaders()).flat(), F(e.options, I, "getLeafHeaders"));
} };
function L(e, t, n, r) {
	let i = 0, a = function(e, t) {
		t === void 0 && (t = 1), i = Math.max(i, t), e.filter((e) => e.getIsVisible()).forEach((e) => {
			var n;
			(n = e.columns) != null && n.length && a(e.columns, t + 1);
		}, 0);
	};
	a(e);
	let o = [], s = (e, t) => {
		let i = {
			depth: t,
			id: [r, `${t}`].filter(Boolean).join("_"),
			headers: []
		}, a = [];
		e.forEach((e) => {
			let o = [...a].reverse()[0], s = e.column.depth === i.depth, c, l = !1;
			if (s && e.column.parent ? c = e.column.parent : (c = e.column, l = !0), o && o?.column === c) o.subHeaders.push(e);
			else {
				let i = re(n, c, {
					id: [
						r,
						t,
						c.id,
						e?.id
					].filter(Boolean).join("_"),
					isPlaceholder: l,
					placeholderId: l ? `${a.filter((e) => e.column === c).length}` : void 0,
					depth: t,
					index: a.length
				});
				i.subHeaders.push(e), a.push(i);
			}
			i.headers.push(e), e.headerGroup = i;
		}), o.push(i), t > 0 && s(a, t - 1);
	};
	s(t.map((e, t) => re(n, e, {
		depth: i,
		index: t
	})), i - 1), o.reverse();
	let c = (e) => e.filter((e) => e.column.getIsVisible()).map((e) => {
		let t = 0, n = 0, r = [0];
		e.subHeaders && e.subHeaders.length ? (r = [], c(e.subHeaders).forEach((e) => {
			let { colSpan: n, rowSpan: i } = e;
			t += n, r.push(i);
		})) : t = 1;
		let i = Math.min(...r);
		return n += i, e.colSpan = t, e.rowSpan = n, {
			colSpan: t,
			rowSpan: n
		};
	});
	return c(o[0]?.headers ?? []), o;
}
var R = (e, t, n, r, i, a, o) => {
	let s = {
		id: t,
		index: r,
		original: n,
		depth: i,
		parentId: o,
		_valuesCache: {},
		_uniqueValuesCache: {},
		getValue: (t) => {
			if (s._valuesCache.hasOwnProperty(t)) return s._valuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return s._valuesCache[t] = n.accessorFn(s.original, r), s._valuesCache[t];
		},
		getUniqueValues: (t) => {
			if (s._uniqueValuesCache.hasOwnProperty(t)) return s._uniqueValuesCache[t];
			let n = e.getColumn(t);
			if (n != null && n.accessorFn) return n.columnDef.getUniqueValues ? (s._uniqueValuesCache[t] = n.columnDef.getUniqueValues(s.original, r), s._uniqueValuesCache[t]) : (s._uniqueValuesCache[t] = [s.getValue(t)], s._uniqueValuesCache[t]);
		},
		renderValue: (t) => s.getValue(t) ?? e.options.renderFallbackValue,
		subRows: a ?? [],
		getLeafRows: () => N(s.subRows, (e) => e.subRows),
		getParentRow: () => s.parentId ? e.getRow(s.parentId, !0) : void 0,
		getParentRows: () => {
			let e = [], t = s;
			for (;;) {
				let n = t.getParentRow();
				if (!n) break;
				e.push(n), t = n;
			}
			return e.reverse();
		},
		getAllCells: P(() => [e.getAllLeafColumns()], (t) => t.map((t) => te(e, s, t, t.id)), F(e.options, "debugRows", "getAllCells")),
		_getAllCellsByColumnId: P(() => [s.getAllCells()], (e) => e.reduce((e, t) => (e[t.column.id] = t, e), {}), F(e.options, "debugRows", "getAllCellsByColumnId"))
	};
	for (let t = 0; t < e._features.length; t++) {
		let n = e._features[t];
		n == null || n.createRow == null || n.createRow(s, e);
	}
	return s;
}, ae = { createColumn: (e, t) => {
	e._getFacetedRowModel = t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id), e.getFacetedRowModel = () => e._getFacetedRowModel ? e._getFacetedRowModel() : t.getPreFilteredRowModel(), e._getFacetedUniqueValues = t.options.getFacetedUniqueValues && t.options.getFacetedUniqueValues(t, e.id), e.getFacetedUniqueValues = () => e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getFacetedMinMaxValues = t.options.getFacetedMinMaxValues && t.options.getFacetedMinMaxValues(t, e.id), e.getFacetedMinMaxValues = () => {
		if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues();
	};
} }, z = (e, t, n) => {
	var r, i;
	let a = n == null || (r = n.toString()) == null ? void 0 : r.toLowerCase();
	return !!((i = e.getValue(t)) != null && (i = i.toString()) != null && (i = i.toLowerCase()) != null && i.includes(a));
};
z.autoRemove = (e) => K(e);
var oe = (e, t, n) => {
	var r;
	return !!((r = e.getValue(t)) != null && (r = r.toString()) != null && r.includes(n));
};
oe.autoRemove = (e) => K(e);
var B = (e, t, n) => {
	var r;
	return ((r = e.getValue(t)) == null || (r = r.toString()) == null ? void 0 : r.toLowerCase()) === n?.toLowerCase();
};
B.autoRemove = (e) => K(e);
var V = (e, t, n) => e.getValue(t)?.includes(n);
V.autoRemove = (e) => K(e);
var se = (e, t, n) => !n.some((n) => {
	var r;
	return !((r = e.getValue(t)) != null && r.includes(n));
});
se.autoRemove = (e) => K(e) || !(e != null && e.length);
var ce = (e, t, n) => n.some((n) => e.getValue(t)?.includes(n));
ce.autoRemove = (e) => K(e) || !(e != null && e.length);
var H = (e, t, n) => e.getValue(t) === n;
H.autoRemove = (e) => K(e);
var U = (e, t, n) => e.getValue(t) == n;
U.autoRemove = (e) => K(e);
var W = (e, t, n) => {
	let [r, i] = n, a = e.getValue(t);
	return a >= r && a <= i;
};
W.resolveFilterValue = (e) => {
	let [t, n] = e, r = typeof t == "number" ? t : parseFloat(t), i = typeof n == "number" ? n : parseFloat(n), a = t === null || Number.isNaN(r) ? -Infinity : r, o = n === null || Number.isNaN(i) ? Infinity : i;
	if (a > o) {
		let e = a;
		a = o, o = e;
	}
	return [a, o];
}, W.autoRemove = (e) => K(e) || K(e[0]) && K(e[1]);
var G = {
	includesString: z,
	includesStringSensitive: oe,
	equalsString: B,
	arrIncludes: V,
	arrIncludesAll: se,
	arrIncludesSome: ce,
	equals: H,
	weakEquals: U,
	inNumberRange: W
};
function K(e) {
	return e == null || e === "";
}
var le = {
	getDefaultColumnDef: () => ({ filterFn: "auto" }),
	getInitialState: (e) => ({
		columnFilters: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onColumnFiltersChange: j("columnFilters", e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	createColumn: (e, t) => {
		e.getAutoFilterFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			return typeof n == "string" ? G.includesString : typeof n == "number" ? G.inNumberRange : typeof n == "boolean" || typeof n == "object" && n ? G.equals : Array.isArray(n) ? G.arrIncludes : G.weakEquals;
		}, e.getFilterFn = () => M(e.columnDef.filterFn) ? e.columnDef.filterFn : e.columnDef.filterFn === "auto" ? e.getAutoFilterFn() : t.options.filterFns?.[e.columnDef.filterFn] ?? G[e.columnDef.filterFn], e.getCanFilter = () => (e.columnDef.enableColumnFilter ?? !0) && (t.options.enableColumnFilters ?? !0) && (t.options.enableFilters ?? !0) && !!e.accessorFn, e.getIsFiltered = () => e.getFilterIndex() > -1, e.getFilterValue = () => {
			var n;
			return (n = t.getState().columnFilters) == null || (n = n.find((t) => t.id === e.id)) == null ? void 0 : n.value;
		}, e.getFilterIndex = () => t.getState().columnFilters?.findIndex((t) => t.id === e.id) ?? -1, e.setFilterValue = (n) => {
			t.setColumnFilters((t) => {
				let r = e.getFilterFn(), i = t?.find((t) => t.id === e.id), a = A(n, i ? i.value : void 0);
				if (ue(r, a, e)) return t?.filter((t) => t.id !== e.id) ?? [];
				let o = {
					id: e.id,
					value: a
				};
				return i ? t?.map((t) => t.id === e.id ? o : t) ?? [] : t != null && t.length ? [...t, o] : [o];
			});
		};
	},
	createRow: (e, t) => {
		e.columnFilters = {}, e.columnFiltersMeta = {};
	},
	createTable: (e) => {
		e.setColumnFilters = (t) => {
			let n = e.getAllLeafColumns();
			e.options.onColumnFiltersChange == null || e.options.onColumnFiltersChange((e) => A(t, e)?.filter((e) => {
				let t = n.find((t) => t.id === e.id);
				return !(t && ue(t.getFilterFn(), e.value, t));
			}));
		}, e.resetColumnFilters = (t) => {
			e.setColumnFilters(t ? [] : e.initialState?.columnFilters ?? []);
		}, e.getPreFilteredRowModel = () => e.getCoreRowModel(), e.getFilteredRowModel = () => (!e._getFilteredRowModel && e.options.getFilteredRowModel && (e._getFilteredRowModel = e.options.getFilteredRowModel(e)), e.options.manualFiltering || !e._getFilteredRowModel ? e.getPreFilteredRowModel() : e._getFilteredRowModel());
	}
};
function ue(e, t, n) {
	return (e && e.autoRemove ? e.autoRemove(t, n) : !1) || t === void 0 || typeof t == "string" && !t;
}
var q = {
	sum: (e, t, n) => n.reduce((t, n) => {
		let r = n.getValue(e);
		return t + (typeof r == "number" ? r : 0);
	}, 0),
	min: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r > n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	max: (e, t, n) => {
		let r;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r < n || r === void 0 && n >= n) && (r = n);
		}), r;
	},
	extent: (e, t, n) => {
		let r, i;
		return n.forEach((t) => {
			let n = t.getValue(e);
			n != null && (r === void 0 ? n >= n && (r = i = n) : (r > n && (r = n), i < n && (i = n)));
		}), [r, i];
	},
	mean: (e, t) => {
		let n = 0, r = 0;
		if (t.forEach((t) => {
			let i = t.getValue(e);
			i != null && (i = +i) >= i && (++n, r += i);
		}), n) return r / n;
	},
	median: (e, t) => {
		if (!t.length) return;
		let n = t.map((t) => t.getValue(e));
		if (!ee(n)) return;
		if (n.length === 1) return n[0];
		let r = Math.floor(n.length / 2), i = n.sort((e, t) => e - t);
		return n.length % 2 == 0 ? (i[r - 1] + i[r]) / 2 : i[r];
	},
	unique: (e, t) => Array.from(new Set(t.map((t) => t.getValue(e))).values()),
	uniqueCount: (e, t) => new Set(t.map((t) => t.getValue(e))).size,
	count: (e, t) => t.length
}, de = {
	getDefaultColumnDef: () => ({
		aggregatedCell: (e) => {
			var t;
			return ((t = e.getValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
		},
		aggregationFn: "auto"
	}),
	getInitialState: (e) => ({
		grouping: [],
		...e
	}),
	getDefaultOptions: (e) => ({
		onGroupingChange: j("grouping", e),
		groupedColumnMode: "reorder"
	}),
	createColumn: (e, t) => {
		e.toggleGrouping = () => {
			t.setGrouping((t) => t != null && t.includes(e.id) ? t.filter((t) => t !== e.id) : [...t ?? [], e.id]);
		}, e.getCanGroup = () => (e.columnDef.enableGrouping ?? !0) && (t.options.enableGrouping ?? !0) && (!!e.accessorFn || !!e.columnDef.getGroupingValue), e.getIsGrouped = () => t.getState().grouping?.includes(e.id), e.getGroupedIndex = () => t.getState().grouping?.indexOf(e.id), e.getToggleGroupingHandler = () => {
			let t = e.getCanGroup();
			return () => {
				t && e.toggleGrouping();
			};
		}, e.getAutoAggregationFn = () => {
			let n = t.getCoreRowModel().flatRows[0]?.getValue(e.id);
			if (typeof n == "number") return q.sum;
			if (Object.prototype.toString.call(n) === "[object Date]") return q.extent;
		}, e.getAggregationFn = () => {
			if (!e) throw Error();
			return M(e.columnDef.aggregationFn) ? e.columnDef.aggregationFn : e.columnDef.aggregationFn === "auto" ? e.getAutoAggregationFn() : t.options.aggregationFns?.[e.columnDef.aggregationFn] ?? q[e.columnDef.aggregationFn];
		};
	},
	createTable: (e) => {
		e.setGrouping = (t) => e.options.onGroupingChange == null ? void 0 : e.options.onGroupingChange(t), e.resetGrouping = (t) => {
			e.setGrouping(t ? [] : e.initialState?.grouping ?? []);
		}, e.getPreGroupedRowModel = () => e.getFilteredRowModel(), e.getGroupedRowModel = () => (!e._getGroupedRowModel && e.options.getGroupedRowModel && (e._getGroupedRowModel = e.options.getGroupedRowModel(e)), e.options.manualGrouping || !e._getGroupedRowModel ? e.getPreGroupedRowModel() : e._getGroupedRowModel());
	},
	createRow: (e, t) => {
		e.getIsGrouped = () => !!e.groupingColumnId, e.getGroupingValue = (n) => {
			if (e._groupingValuesCache.hasOwnProperty(n)) return e._groupingValuesCache[n];
			let r = t.getColumn(n);
			return r != null && r.columnDef.getGroupingValue ? (e._groupingValuesCache[n] = r.columnDef.getGroupingValue(e.original), e._groupingValuesCache[n]) : e.getValue(n);
		}, e._groupingValuesCache = {};
	},
	createCell: (e, t, n, r) => {
		e.getIsGrouped = () => t.getIsGrouped() && t.id === n.groupingColumnId, e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped(), e.getIsAggregated = () => {
			var t;
			return !e.getIsGrouped() && !e.getIsPlaceholder() && !!((t = n.subRows) != null && t.length);
		};
	}
};
function fe(e, t, n) {
	if (!(t != null && t.length) || !n) return e;
	let r = e.filter((e) => !t.includes(e.id));
	return n === "remove" ? r : [...t.map((t) => e.find((e) => e.id === t)).filter(Boolean), ...r];
}
var pe = {
	getInitialState: (e) => ({
		columnOrder: [],
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnOrderChange: j("columnOrder", e) }),
	createColumn: (e, t) => {
		e.getIndex = P((e) => [X(t, e)], (t) => t.findIndex((t) => t.id === e.id), F(t.options, "debugColumns", "getIndex")), e.getIsFirstColumn = (n) => X(t, n)[0]?.id === e.id, e.getIsLastColumn = (n) => {
			let r = X(t, n);
			return r[r.length - 1]?.id === e.id;
		};
	},
	createTable: (e) => {
		e.setColumnOrder = (t) => e.options.onColumnOrderChange == null ? void 0 : e.options.onColumnOrderChange(t), e.resetColumnOrder = (t) => {
			e.setColumnOrder(t ? [] : e.initialState.columnOrder ?? []);
		}, e._getOrderColumnsFn = P(() => [
			e.getState().columnOrder,
			e.getState().grouping,
			e.options.groupedColumnMode
		], (e, t, n) => (r) => {
			let i = [];
			if (!(e != null && e.length)) i = r;
			else {
				let t = [...e], n = [...r];
				for (; n.length && t.length;) {
					let e = t.shift(), r = n.findIndex((t) => t.id === e);
					r > -1 && i.push(n.splice(r, 1)[0]);
				}
				i = [...i, ...n];
			}
			return fe(i, t, n);
		}, F(e.options, "debugTable", "_getOrderColumnsFn"));
	}
}, J = () => ({
	left: [],
	right: []
}), me = {
	getInitialState: (e) => ({
		columnPinning: J(),
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnPinningChange: j("columnPinning", e) }),
	createColumn: (e, t) => {
		e.pin = (n) => {
			let r = e.getLeafColumns().map((e) => e.id).filter(Boolean);
			t.setColumnPinning((e) => n === "right" ? {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: [...(e?.right ?? []).filter((e) => !(r != null && r.includes(e))), ...r]
			} : n === "left" ? {
				left: [...(e?.left ?? []).filter((e) => !(r != null && r.includes(e))), ...r],
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			} : {
				left: (e?.left ?? []).filter((e) => !(r != null && r.includes(e))),
				right: (e?.right ?? []).filter((e) => !(r != null && r.includes(e)))
			});
		}, e.getCanPin = () => e.getLeafColumns().some((e) => (e.columnDef.enablePinning ?? !0) && (t.options.enableColumnPinning ?? t.options.enablePinning ?? !0)), e.getIsPinned = () => {
			let n = e.getLeafColumns().map((e) => e.id), { left: r, right: i } = t.getState().columnPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "left" : o ? "right" : !1;
		}, e.getPinnedIndex = () => {
			var n;
			let r = e.getIsPinned();
			return r ? ((n = t.getState().columnPinning) == null || (n = n[r]) == null ? void 0 : n.indexOf(e.id)) ?? -1 : 0;
		};
	},
	createRow: (e, t) => {
		e.getCenterVisibleCells = P(() => [
			e._getAllVisibleCells(),
			t.getState().columnPinning.left,
			t.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.column.id));
		}, F(t.options, "debugRows", "getCenterVisibleCells")), e.getLeftVisibleCells = P(() => [e._getAllVisibleCells(), t.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "left"
		})), F(t.options, "debugRows", "getLeftVisibleCells")), e.getRightVisibleCells = P(() => [e._getAllVisibleCells(), t.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.column.id === t)).filter(Boolean).map((e) => ({
			...e,
			position: "right"
		})), F(t.options, "debugRows", "getRightVisibleCells"));
	},
	createTable: (e) => {
		e.setColumnPinning = (t) => e.options.onColumnPinningChange == null ? void 0 : e.options.onColumnPinningChange(t), e.resetColumnPinning = (t) => e.setColumnPinning(t ? J() : e.initialState?.columnPinning ?? J()), e.getIsSomeColumnsPinned = (t) => {
			let n = e.getState().columnPinning;
			return t ? !!n[t]?.length : !!(n.left?.length || n.right?.length);
		}, e.getLeftLeafColumns = P(() => [e.getAllLeafColumns(), e.getState().columnPinning.left], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), F(e.options, "debugColumns", "getLeftLeafColumns")), e.getRightLeafColumns = P(() => [e.getAllLeafColumns(), e.getState().columnPinning.right], (e, t) => (t ?? []).map((t) => e.find((e) => e.id === t)).filter(Boolean), F(e.options, "debugColumns", "getRightLeafColumns")), e.getCenterLeafColumns = P(() => [
			e.getAllLeafColumns(),
			e.getState().columnPinning.left,
			e.getState().columnPinning.right
		], (e, t, n) => {
			let r = [...t ?? [], ...n ?? []];
			return e.filter((e) => !r.includes(e.id));
		}, F(e.options, "debugColumns", "getCenterLeafColumns"));
	}
};
function he(e) {
	return e || (typeof document < "u" ? document : null);
}
var Y = {
	size: 150,
	minSize: 20,
	maxSize: 2 ** 53 - 1
}, ge = () => ({
	startOffset: null,
	startSize: null,
	deltaOffset: null,
	deltaPercentage: null,
	isResizingColumn: !1,
	columnSizingStart: []
}), _e = {
	getDefaultColumnDef: () => Y,
	getInitialState: (e) => ({
		columnSizing: {},
		columnSizingInfo: ge(),
		...e
	}),
	getDefaultOptions: (e) => ({
		columnResizeMode: "onEnd",
		columnResizeDirection: "ltr",
		onColumnSizingChange: j("columnSizing", e),
		onColumnSizingInfoChange: j("columnSizingInfo", e)
	}),
	createColumn: (e, t) => {
		e.getSize = () => {
			let n = t.getState().columnSizing[e.id];
			return Math.min(Math.max(e.columnDef.minSize ?? Y.minSize, n ?? e.columnDef.size ?? Y.size), e.columnDef.maxSize ?? Y.maxSize);
		}, e.getStart = P((e) => [
			e,
			X(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(0, e.getIndex(t)).reduce((e, t) => e + t.getSize(), 0), F(t.options, "debugColumns", "getStart")), e.getAfter = P((e) => [
			e,
			X(t, e),
			t.getState().columnSizing
		], (t, n) => n.slice(e.getIndex(t) + 1).reduce((e, t) => e + t.getSize(), 0), F(t.options, "debugColumns", "getAfter")), e.resetSize = () => {
			t.setColumnSizing((t) => {
				let { [e.id]: n, ...r } = t;
				return r;
			});
		}, e.getCanResize = () => (e.columnDef.enableResizing ?? !0) && (t.options.enableColumnResizing ?? !0), e.getIsResizing = () => t.getState().columnSizingInfo.isResizingColumn === e.id;
	},
	createHeader: (e, t) => {
		e.getSize = () => {
			let t = 0, n = (e) => {
				e.subHeaders.length ? e.subHeaders.forEach(n) : t += e.column.getSize() ?? 0;
			};
			return n(e), t;
		}, e.getStart = () => {
			if (e.index > 0) {
				let t = e.headerGroup.headers[e.index - 1];
				return t.getStart() + t.getSize();
			}
			return 0;
		}, e.getResizeHandler = (n) => {
			let r = t.getColumn(e.column.id), i = r?.getCanResize();
			return (a) => {
				if (!r || !i || (a.persist == null || a.persist(), be(a) && a.touches && a.touches.length > 1)) return;
				let o = e.getSize(), s = e ? e.getLeafHeaders().map((e) => [e.column.id, e.column.getSize()]) : [[r.id, r.getSize()]], c = be(a) ? Math.round(a.touches[0].clientX) : a.clientX, l = {}, u = (e, n) => {
					typeof n == "number" && (t.setColumnSizingInfo((e) => {
						let r = t.options.columnResizeDirection === "rtl" ? -1 : 1, i = (n - (e?.startOffset ?? 0)) * r, a = Math.max(i / (e?.startSize ?? 0), -.999999);
						return e.columnSizingStart.forEach((e) => {
							let [t, n] = e;
							l[t] = Math.round(Math.max(n + n * a, 0) * 100) / 100;
						}), {
							...e,
							deltaOffset: i,
							deltaPercentage: a
						};
					}), (t.options.columnResizeMode === "onChange" || e === "end") && t.setColumnSizing((e) => ({
						...e,
						...l
					})));
				}, d = (e) => u("move", e), f = (e) => {
					u("end", e), t.setColumnSizingInfo((e) => ({
						...e,
						isResizingColumn: !1,
						startOffset: null,
						startSize: null,
						deltaOffset: null,
						deltaPercentage: null,
						columnSizingStart: []
					}));
				}, p = he(n), m = {
					moveHandler: (e) => d(e.clientX),
					upHandler: (e) => {
						p?.removeEventListener("mousemove", m.moveHandler), p?.removeEventListener("mouseup", m.upHandler), f(e.clientX);
					}
				}, h = {
					moveHandler: (e) => (e.cancelable && (e.preventDefault(), e.stopPropagation()), d(e.touches[0].clientX), !1),
					upHandler: (e) => {
						p?.removeEventListener("touchmove", h.moveHandler), p?.removeEventListener("touchend", h.upHandler), e.cancelable && (e.preventDefault(), e.stopPropagation()), f(e.touches[0]?.clientX);
					}
				}, g = ye() ? { passive: !1 } : !1;
				be(a) ? (p?.addEventListener("touchmove", h.moveHandler, g), p?.addEventListener("touchend", h.upHandler, g)) : (p?.addEventListener("mousemove", m.moveHandler, g), p?.addEventListener("mouseup", m.upHandler, g)), t.setColumnSizingInfo((e) => ({
					...e,
					startOffset: c,
					startSize: o,
					deltaOffset: 0,
					deltaPercentage: 0,
					columnSizingStart: s,
					isResizingColumn: r.id
				}));
			};
		};
	},
	createTable: (e) => {
		e.setColumnSizing = (t) => e.options.onColumnSizingChange == null ? void 0 : e.options.onColumnSizingChange(t), e.setColumnSizingInfo = (t) => e.options.onColumnSizingInfoChange == null ? void 0 : e.options.onColumnSizingInfoChange(t), e.resetColumnSizing = (t) => {
			e.setColumnSizing(t ? {} : e.initialState.columnSizing ?? {});
		}, e.resetHeaderSizeInfo = (t) => {
			e.setColumnSizingInfo(t ? ge() : e.initialState.columnSizingInfo ?? ge());
		}, e.getTotalSize = () => e.getHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getLeftTotalSize = () => e.getLeftHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getCenterTotalSize = () => e.getCenterHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0, e.getRightTotalSize = () => e.getRightHeaderGroups()[0]?.headers.reduce((e, t) => e + t.getSize(), 0) ?? 0;
	}
}, ve = null;
function ye() {
	if (typeof ve == "boolean") return ve;
	let e = !1;
	try {
		let t = { get passive() {
			return e = !0, !1;
		} }, n = () => {};
		window.addEventListener("test", n, t), window.removeEventListener("test", n);
	} catch {
		e = !1;
	}
	return ve = e, ve;
}
function be(e) {
	return e.type === "touchstart";
}
var xe = {
	getInitialState: (e) => ({
		columnVisibility: {},
		...e
	}),
	getDefaultOptions: (e) => ({ onColumnVisibilityChange: j("columnVisibility", e) }),
	createColumn: (e, t) => {
		e.toggleVisibility = (n) => {
			e.getCanHide() && t.setColumnVisibility((t) => ({
				...t,
				[e.id]: n ?? !e.getIsVisible()
			}));
		}, e.getIsVisible = () => {
			let n = e.columns;
			return (n.length ? n.some((e) => e.getIsVisible()) : t.getState().columnVisibility?.[e.id]) ?? !0;
		}, e.getCanHide = () => (e.columnDef.enableHiding ?? !0) && (t.options.enableHiding ?? !0), e.getToggleVisibilityHandler = () => (t) => {
			e.toggleVisibility == null || e.toggleVisibility(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e._getAllVisibleCells = P(() => [e.getAllCells(), t.getState().columnVisibility], (e) => e.filter((e) => e.column.getIsVisible()), F(t.options, "debugRows", "_getAllVisibleCells")), e.getVisibleCells = P(() => [
			e.getLeftVisibleCells(),
			e.getCenterVisibleCells(),
			e.getRightVisibleCells()
		], (e, t, n) => [
			...e,
			...t,
			...n
		], F(t.options, "debugRows", "getVisibleCells"));
	},
	createTable: (e) => {
		let t = (t, n) => P(() => [n(), n().filter((e) => e.getIsVisible()).map((e) => e.id).join("_")], (e) => e.filter((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), F(e.options, "debugColumns", t));
		e.getVisibleFlatColumns = t("getVisibleFlatColumns", () => e.getAllFlatColumns()), e.getVisibleLeafColumns = t("getVisibleLeafColumns", () => e.getAllLeafColumns()), e.getLeftVisibleLeafColumns = t("getLeftVisibleLeafColumns", () => e.getLeftLeafColumns()), e.getRightVisibleLeafColumns = t("getRightVisibleLeafColumns", () => e.getRightLeafColumns()), e.getCenterVisibleLeafColumns = t("getCenterVisibleLeafColumns", () => e.getCenterLeafColumns()), e.setColumnVisibility = (t) => e.options.onColumnVisibilityChange == null ? void 0 : e.options.onColumnVisibilityChange(t), e.resetColumnVisibility = (t) => {
			e.setColumnVisibility(t ? {} : e.initialState.columnVisibility ?? {});
		}, e.toggleAllColumnsVisible = (t) => {
			t ??= !e.getIsAllColumnsVisible(), e.setColumnVisibility(e.getAllLeafColumns().reduce((e, n) => ({
				...e,
				[n.id]: t || !(n.getCanHide != null && n.getCanHide())
			}), {}));
		}, e.getIsAllColumnsVisible = () => !e.getAllLeafColumns().some((e) => !(e.getIsVisible != null && e.getIsVisible())), e.getIsSomeColumnsVisible = () => e.getAllLeafColumns().some((e) => e.getIsVisible == null ? void 0 : e.getIsVisible()), e.getToggleAllColumnsVisibilityHandler = () => (t) => {
			e.toggleAllColumnsVisible(t.target?.checked);
		};
	}
};
function X(e, t) {
	return t ? t === "center" ? e.getCenterVisibleLeafColumns() : t === "left" ? e.getLeftVisibleLeafColumns() : e.getRightVisibleLeafColumns() : e.getVisibleLeafColumns();
}
var Se = { createTable: (e) => {
	e._getGlobalFacetedRowModel = e.options.getFacetedRowModel && e.options.getFacetedRowModel(e, "__global__"), e.getGlobalFacetedRowModel = () => e.options.manualFiltering || !e._getGlobalFacetedRowModel ? e.getPreFilteredRowModel() : e._getGlobalFacetedRowModel(), e._getGlobalFacetedUniqueValues = e.options.getFacetedUniqueValues && e.options.getFacetedUniqueValues(e, "__global__"), e.getGlobalFacetedUniqueValues = () => e._getGlobalFacetedUniqueValues ? e._getGlobalFacetedUniqueValues() : /* @__PURE__ */ new Map(), e._getGlobalFacetedMinMaxValues = e.options.getFacetedMinMaxValues && e.options.getFacetedMinMaxValues(e, "__global__"), e.getGlobalFacetedMinMaxValues = () => {
		if (e._getGlobalFacetedMinMaxValues) return e._getGlobalFacetedMinMaxValues();
	};
} }, Ce = {
	getInitialState: (e) => ({
		globalFilter: void 0,
		...e
	}),
	getDefaultOptions: (e) => ({
		onGlobalFilterChange: j("globalFilter", e),
		globalFilterFn: "auto",
		getColumnCanGlobalFilter: (t) => {
			var n;
			let r = (n = e.getCoreRowModel().flatRows[0]) == null || (n = n._getAllCellsByColumnId()[t.id]) == null ? void 0 : n.getValue();
			return typeof r == "string" || typeof r == "number";
		}
	}),
	createColumn: (e, t) => {
		e.getCanGlobalFilter = () => (e.columnDef.enableGlobalFilter ?? !0) && (t.options.enableGlobalFilter ?? !0) && (t.options.enableFilters ?? !0) && ((t.options.getColumnCanGlobalFilter == null ? void 0 : t.options.getColumnCanGlobalFilter(e)) ?? !0) && !!e.accessorFn;
	},
	createTable: (e) => {
		e.getGlobalAutoFilterFn = () => G.includesString, e.getGlobalFilterFn = () => {
			let { globalFilterFn: t } = e.options;
			return M(t) ? t : t === "auto" ? e.getGlobalAutoFilterFn() : e.options.filterFns?.[t] ?? G[t];
		}, e.setGlobalFilter = (t) => {
			e.options.onGlobalFilterChange == null || e.options.onGlobalFilterChange(t);
		}, e.resetGlobalFilter = (t) => {
			e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter);
		};
	}
}, we = {
	getInitialState: (e) => ({
		expanded: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onExpandedChange: j("expanded", e),
		paginateExpandedRows: !0
	}),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetExpanded = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetExpanded ?? !e.options.manualExpanding) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetExpanded(), n = !1;
				});
			}
		}, e.setExpanded = (t) => e.options.onExpandedChange == null ? void 0 : e.options.onExpandedChange(t), e.toggleAllRowsExpanded = (t) => {
			t ?? !e.getIsAllRowsExpanded() ? e.setExpanded(!0) : e.setExpanded({});
		}, e.resetExpanded = (t) => {
			e.setExpanded(t ? {} : e.initialState?.expanded ?? {});
		}, e.getCanSomeRowsExpand = () => e.getPrePaginationRowModel().flatRows.some((e) => e.getCanExpand()), e.getToggleAllRowsExpandedHandler = () => (t) => {
			t.persist == null || t.persist(), e.toggleAllRowsExpanded();
		}, e.getIsSomeRowsExpanded = () => {
			let t = e.getState().expanded;
			return t === !0 || Object.values(t).some(Boolean);
		}, e.getIsAllRowsExpanded = () => {
			let t = e.getState().expanded;
			return typeof t == "boolean" ? t === !0 : !(!Object.keys(t).length || e.getRowModel().flatRows.some((e) => !e.getIsExpanded()));
		}, e.getExpandedDepth = () => {
			let t = 0;
			return (e.getState().expanded === !0 ? Object.keys(e.getRowModel().rowsById) : Object.keys(e.getState().expanded)).forEach((e) => {
				let n = e.split(".");
				t = Math.max(t, n.length);
			}), t;
		}, e.getPreExpandedRowModel = () => e.getSortedRowModel(), e.getExpandedRowModel = () => (!e._getExpandedRowModel && e.options.getExpandedRowModel && (e._getExpandedRowModel = e.options.getExpandedRowModel(e)), e.options.manualExpanding || !e._getExpandedRowModel ? e.getPreExpandedRowModel() : e._getExpandedRowModel());
	},
	createRow: (e, t) => {
		e.toggleExpanded = (n) => {
			t.setExpanded((r) => {
				let i = r === !0 || !!(r != null && r[e.id]), a = {};
				if (r === !0 ? Object.keys(t.getRowModel().rowsById).forEach((e) => {
					a[e] = !0;
				}) : a = r, n ??= !i, !i && n) return {
					...a,
					[e.id]: !0
				};
				if (i && !n) {
					let { [e.id]: t, ...n } = a;
					return n;
				}
				return r;
			});
		}, e.getIsExpanded = () => {
			let n = t.getState().expanded;
			return !!((t.options.getIsRowExpanded == null ? void 0 : t.options.getIsRowExpanded(e)) ?? (n === !0 || n?.[e.id]));
		}, e.getCanExpand = () => {
			var n;
			return (t.options.getRowCanExpand == null ? void 0 : t.options.getRowCanExpand(e)) ?? ((t.options.enableExpanding ?? !0) && !!((n = e.subRows) != null && n.length));
		}, e.getIsAllParentsExpanded = () => {
			let n = !0, r = e;
			for (; n && r.parentId;) r = t.getRow(r.parentId, !0), n = r.getIsExpanded();
			return n;
		}, e.getToggleExpandedHandler = () => {
			let t = e.getCanExpand();
			return () => {
				t && e.toggleExpanded();
			};
		};
	}
}, Te = 0, Ee = 10, De = () => ({
	pageIndex: Te,
	pageSize: Ee
}), Oe = {
	getInitialState: (e) => ({
		...e,
		pagination: {
			...De(),
			...e?.pagination
		}
	}),
	getDefaultOptions: (e) => ({ onPaginationChange: j("pagination", e) }),
	createTable: (e) => {
		let t = !1, n = !1;
		e._autoResetPageIndex = () => {
			if (!t) {
				e._queue(() => {
					t = !0;
				});
				return;
			}
			if (e.options.autoResetAll ?? e.options.autoResetPageIndex ?? !e.options.manualPagination) {
				if (n) return;
				n = !0, e._queue(() => {
					e.resetPageIndex(), n = !1;
				});
			}
		}, e.setPagination = (t) => e.options.onPaginationChange == null ? void 0 : e.options.onPaginationChange((e) => A(t, e)), e.resetPagination = (t) => {
			e.setPagination(t ? De() : e.initialState.pagination ?? De());
		}, e.setPageIndex = (t) => {
			e.setPagination((n) => {
				let r = A(t, n.pageIndex), i = e.options.pageCount === void 0 || e.options.pageCount === -1 ? 2 ** 53 - 1 : e.options.pageCount - 1;
				return r = Math.max(0, Math.min(r, i)), {
					...n,
					pageIndex: r
				};
			});
		}, e.resetPageIndex = (t) => {
			var n;
			e.setPageIndex(t ? Te : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageIndex) ?? Te);
		}, e.resetPageSize = (t) => {
			var n;
			e.setPageSize(t ? Ee : ((n = e.initialState) == null || (n = n.pagination) == null ? void 0 : n.pageSize) ?? Ee);
		}, e.setPageSize = (t) => {
			e.setPagination((e) => {
				let n = Math.max(1, A(t, e.pageSize)), r = e.pageSize * e.pageIndex, i = Math.floor(r / n);
				return {
					...e,
					pageIndex: i,
					pageSize: n
				};
			});
		}, e.setPageCount = (t) => e.setPagination((n) => {
			let r = A(t, e.options.pageCount ?? -1);
			return typeof r == "number" && (r = Math.max(-1, r)), {
				...n,
				pageCount: r
			};
		}), e.getPageOptions = P(() => [e.getPageCount()], (e) => {
			let t = [];
			return e && e > 0 && (t = [...Array(e)].fill(null).map((e, t) => t)), t;
		}, F(e.options, "debugTable", "getPageOptions")), e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0, e.getCanNextPage = () => {
			let { pageIndex: t } = e.getState().pagination, n = e.getPageCount();
			return n === -1 || n !== 0 && t < n - 1;
		}, e.previousPage = () => e.setPageIndex((e) => e - 1), e.nextPage = () => e.setPageIndex((e) => e + 1), e.firstPage = () => e.setPageIndex(0), e.lastPage = () => e.setPageIndex(e.getPageCount() - 1), e.getPrePaginationRowModel = () => e.getExpandedRowModel(), e.getPaginationRowModel = () => (!e._getPaginationRowModel && e.options.getPaginationRowModel && (e._getPaginationRowModel = e.options.getPaginationRowModel(e)), e.options.manualPagination || !e._getPaginationRowModel ? e.getPrePaginationRowModel() : e._getPaginationRowModel()), e.getPageCount = () => e.options.pageCount ?? Math.ceil(e.getRowCount() / e.getState().pagination.pageSize), e.getRowCount = () => e.options.rowCount ?? e.getPrePaginationRowModel().rows.length;
	}
}, ke = () => ({
	top: [],
	bottom: []
}), Ae = {
	getInitialState: (e) => ({
		rowPinning: ke(),
		...e
	}),
	getDefaultOptions: (e) => ({ onRowPinningChange: j("rowPinning", e) }),
	createRow: (e, t) => {
		e.pin = (n, r, i) => {
			let a = r ? e.getLeafRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], o = i ? e.getParentRows().map((e) => {
				let { id: t } = e;
				return t;
			}) : [], s = /* @__PURE__ */ new Set([
				...o,
				e.id,
				...a
			]);
			t.setRowPinning((e) => n === "bottom" ? {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: [...(e?.bottom ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)]
			} : n === "top" ? {
				top: [...(e?.top ?? []).filter((e) => !(s != null && s.has(e))), ...Array.from(s)],
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			} : {
				top: (e?.top ?? []).filter((e) => !(s != null && s.has(e))),
				bottom: (e?.bottom ?? []).filter((e) => !(s != null && s.has(e)))
			});
		}, e.getCanPin = () => {
			let { enableRowPinning: n, enablePinning: r } = t.options;
			return typeof n == "function" ? n(e) : n ?? r ?? !0;
		}, e.getIsPinned = () => {
			let n = [e.id], { top: r, bottom: i } = t.getState().rowPinning, a = n.some((e) => r?.includes(e)), o = n.some((e) => i?.includes(e));
			return a ? "top" : o ? "bottom" : !1;
		}, e.getPinnedIndex = () => {
			let n = e.getIsPinned();
			return n ? ((n === "top" ? t.getTopRows() : t.getBottomRows())?.map((e) => {
				let { id: t } = e;
				return t;
			}))?.indexOf(e.id) ?? -1 : -1;
		};
	},
	createTable: (e) => {
		e.setRowPinning = (t) => e.options.onRowPinningChange == null ? void 0 : e.options.onRowPinningChange(t), e.resetRowPinning = (t) => e.setRowPinning(t ? ke() : e.initialState?.rowPinning ?? ke()), e.getIsSomeRowsPinned = (t) => {
			let n = e.getState().rowPinning;
			return t ? !!n[t]?.length : !!(n.top?.length || n.bottom?.length);
		}, e._getPinnedRows = (t, n, r) => (e.options.keepPinnedRows ?? !0 ? (n ?? []).map((t) => {
			let n = e.getRow(t, !0);
			return n.getIsAllParentsExpanded() ? n : null;
		}) : (n ?? []).map((e) => t.find((t) => t.id === e))).filter(Boolean).map((e) => ({
			...e,
			position: r
		})), e.getTopRows = P(() => [e.getRowModel().rows, e.getState().rowPinning.top], (t, n) => e._getPinnedRows(t, n, "top"), F(e.options, "debugRows", "getTopRows")), e.getBottomRows = P(() => [e.getRowModel().rows, e.getState().rowPinning.bottom], (t, n) => e._getPinnedRows(t, n, "bottom"), F(e.options, "debugRows", "getBottomRows")), e.getCenterRows = P(() => [
			e.getRowModel().rows,
			e.getState().rowPinning.top,
			e.getState().rowPinning.bottom
		], (e, t, n) => {
			let r = /* @__PURE__ */ new Set([...t ?? [], ...n ?? []]);
			return e.filter((e) => !r.has(e.id));
		}, F(e.options, "debugRows", "getCenterRows"));
	}
}, je = {
	getInitialState: (e) => ({
		rowSelection: {},
		...e
	}),
	getDefaultOptions: (e) => ({
		onRowSelectionChange: j("rowSelection", e),
		enableRowSelection: !0,
		enableMultiRowSelection: !0,
		enableSubRowSelection: !0
	}),
	createTable: (e) => {
		e.setRowSelection = (t) => e.options.onRowSelectionChange == null ? void 0 : e.options.onRowSelectionChange(t), e.resetRowSelection = (t) => e.setRowSelection(t ? {} : e.initialState.rowSelection ?? {}), e.toggleAllRowsSelected = (t) => {
			e.setRowSelection((n) => {
				t = t === void 0 ? !e.getIsAllRowsSelected() : t;
				let r = { ...n }, i = e.getPreGroupedRowModel().flatRows;
				return t ? i.forEach((e) => {
					e.getCanSelect() && (r[e.id] = !0);
				}) : i.forEach((e) => {
					delete r[e.id];
				}), r;
			});
		}, e.toggleAllPageRowsSelected = (t) => e.setRowSelection((n) => {
			let r = t === void 0 ? !e.getIsAllPageRowsSelected() : t, i = { ...n };
			return e.getRowModel().rows.forEach((t) => {
				Me(i, t.id, r, !0, e);
			}), i;
		}), e.getPreSelectedRowModel = () => e.getCoreRowModel(), e.getSelectedRowModel = P(() => [e.getState().rowSelection, e.getCoreRowModel()], (t, n) => Object.keys(t).length ? Ne(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, F(e.options, "debugTable", "getSelectedRowModel")), e.getFilteredSelectedRowModel = P(() => [e.getState().rowSelection, e.getFilteredRowModel()], (t, n) => Object.keys(t).length ? Ne(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, F(e.options, "debugTable", "getFilteredSelectedRowModel")), e.getGroupedSelectedRowModel = P(() => [e.getState().rowSelection, e.getSortedRowModel()], (t, n) => Object.keys(t).length ? Ne(e, n) : {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, F(e.options, "debugTable", "getGroupedSelectedRowModel")), e.getIsAllRowsSelected = () => {
			let t = e.getFilteredRowModel().flatRows, { rowSelection: n } = e.getState(), r = !!(t.length && Object.keys(n).length);
			return r && t.some((e) => e.getCanSelect() && !n[e.id]) && (r = !1), r;
		}, e.getIsAllPageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows.filter((e) => e.getCanSelect()), { rowSelection: n } = e.getState(), r = !!t.length;
			return r && t.some((e) => !n[e.id]) && (r = !1), r;
		}, e.getIsSomeRowsSelected = () => {
			let t = Object.keys(e.getState().rowSelection ?? {}).length;
			return t > 0 && t < e.getFilteredRowModel().flatRows.length;
		}, e.getIsSomePageRowsSelected = () => {
			let t = e.getPaginationRowModel().flatRows;
			return !e.getIsAllPageRowsSelected() && t.filter((e) => e.getCanSelect()).some((e) => e.getIsSelected() || e.getIsSomeSelected());
		}, e.getToggleAllRowsSelectedHandler = () => (t) => {
			e.toggleAllRowsSelected(t.target.checked);
		}, e.getToggleAllPageRowsSelectedHandler = () => (t) => {
			e.toggleAllPageRowsSelected(t.target.checked);
		};
	},
	createRow: (e, t) => {
		e.toggleSelected = (n, r) => {
			let i = e.getIsSelected();
			t.setRowSelection((a) => {
				if (n = n === void 0 ? !i : n, e.getCanSelect() && i === n) return a;
				let o = { ...a };
				return Me(o, e.id, n, r?.selectChildren ?? !0, t), o;
			});
		}, e.getIsSelected = () => {
			let { rowSelection: n } = t.getState();
			return Pe(e, n);
		}, e.getIsSomeSelected = () => {
			let { rowSelection: n } = t.getState();
			return Fe(e, n) === "some";
		}, e.getIsAllSubRowsSelected = () => {
			let { rowSelection: n } = t.getState();
			return Fe(e, n) === "all";
		}, e.getCanSelect = () => typeof t.options.enableRowSelection == "function" ? t.options.enableRowSelection(e) : t.options.enableRowSelection ?? !0, e.getCanSelectSubRows = () => typeof t.options.enableSubRowSelection == "function" ? t.options.enableSubRowSelection(e) : t.options.enableSubRowSelection ?? !0, e.getCanMultiSelect = () => typeof t.options.enableMultiRowSelection == "function" ? t.options.enableMultiRowSelection(e) : t.options.enableMultiRowSelection ?? !0, e.getToggleSelectedHandler = () => {
			let t = e.getCanSelect();
			return (n) => {
				t && e.toggleSelected(n.target?.checked);
			};
		};
	}
}, Me = (e, t, n, r, i) => {
	var a;
	let o = i.getRow(t, !0);
	n ? (o.getCanMultiSelect() || Object.keys(e).forEach((t) => delete e[t]), o.getCanSelect() && (e[t] = !0)) : delete e[t], r && (a = o.subRows) != null && a.length && o.getCanSelectSubRows() && o.subRows.forEach((t) => Me(e, t.id, n, r, i));
};
function Ne(e, t) {
	let n = e.getState().rowSelection, r = [], i = {}, a = function(e, t) {
		return e.map((e) => {
			var t;
			let o = Pe(e, n);
			if (o && (r.push(e), i[e.id] = e), (t = e.subRows) != null && t.length && (e = {
				...e,
				subRows: a(e.subRows)
			}), o) return e;
		}).filter(Boolean);
	};
	return {
		rows: a(t.rows),
		flatRows: r,
		rowsById: i
	};
}
function Pe(e, t) {
	return t[e.id] ?? !1;
}
function Fe(e, t, n) {
	var r;
	if (!((r = e.subRows) != null && r.length)) return !1;
	let i = !0, a = !1;
	return e.subRows.forEach((e) => {
		if (!(a && !i) && (e.getCanSelect() && (Pe(e, t) ? a = !0 : i = !1), e.subRows && e.subRows.length)) {
			let n = Fe(e, t);
			n === "all" ? a = !0 : (n === "some" && (a = !0), i = !1);
		}
	}), i ? "all" : a ? "some" : !1;
}
var Ie = /([0-9]+)/gm, Le = (e, t, n) => We(Z(e.getValue(n)).toLowerCase(), Z(t.getValue(n)).toLowerCase()), Re = (e, t, n) => We(Z(e.getValue(n)), Z(t.getValue(n))), ze = (e, t, n) => Ue(Z(e.getValue(n)).toLowerCase(), Z(t.getValue(n)).toLowerCase()), Be = (e, t, n) => Ue(Z(e.getValue(n)), Z(t.getValue(n))), Ve = (e, t, n) => {
	let r = e.getValue(n), i = t.getValue(n);
	return r > i ? 1 : r < i ? -1 : 0;
}, He = (e, t, n) => Ue(e.getValue(n), t.getValue(n));
function Ue(e, t) {
	return e === t ? 0 : e > t ? 1 : -1;
}
function Z(e) {
	return typeof e == "number" ? isNaN(e) || e === Infinity || e === -Infinity ? "" : String(e) : typeof e == "string" ? e : "";
}
function We(e, t) {
	let n = e.split(Ie).filter(Boolean), r = t.split(Ie).filter(Boolean);
	for (; n.length && r.length;) {
		let e = n.shift(), t = r.shift(), i = parseInt(e, 10), a = parseInt(t, 10), o = [i, a].sort();
		if (isNaN(o[0])) {
			if (e > t) return 1;
			if (t > e) return -1;
			continue;
		}
		if (isNaN(o[1])) return isNaN(i) ? -1 : 1;
		if (i > a) return 1;
		if (a > i) return -1;
	}
	return n.length - r.length;
}
var Q = {
	alphanumeric: Le,
	alphanumericCaseSensitive: Re,
	text: ze,
	textCaseSensitive: Be,
	datetime: Ve,
	basic: He
}, Ge = [
	ie,
	xe,
	pe,
	me,
	ae,
	le,
	Se,
	Ce,
	{
		getInitialState: (e) => ({
			sorting: [],
			...e
		}),
		getDefaultColumnDef: () => ({
			sortingFn: "auto",
			sortUndefined: 1
		}),
		getDefaultOptions: (e) => ({
			onSortingChange: j("sorting", e),
			isMultiSortEvent: (e) => e.shiftKey
		}),
		createColumn: (e, t) => {
			e.getAutoSortingFn = () => {
				let n = t.getFilteredRowModel().flatRows.slice(10), r = !1;
				for (let t of n) {
					let n = t?.getValue(e.id);
					if (Object.prototype.toString.call(n) === "[object Date]") return Q.datetime;
					if (typeof n == "string" && (r = !0, n.split(Ie).length > 1)) return Q.alphanumeric;
				}
				return r ? Q.text : Q.basic;
			}, e.getAutoSortDir = () => typeof t.getFilteredRowModel().flatRows[0]?.getValue(e.id) == "string" ? "asc" : "desc", e.getSortingFn = () => {
				if (!e) throw Error();
				return M(e.columnDef.sortingFn) ? e.columnDef.sortingFn : e.columnDef.sortingFn === "auto" ? e.getAutoSortingFn() : t.options.sortingFns?.[e.columnDef.sortingFn] ?? Q[e.columnDef.sortingFn];
			}, e.toggleSorting = (n, r) => {
				let i = e.getNextSortingOrder(), a = n != null;
				t.setSorting((o) => {
					let s = o?.find((t) => t.id === e.id), c = o?.findIndex((t) => t.id === e.id), l = [], u, d = a ? n : i === "desc";
					return u = o != null && o.length && e.getCanMultiSort() && r ? s ? "toggle" : "add" : o != null && o.length && c !== o.length - 1 ? "replace" : s ? "toggle" : "replace", u === "toggle" && (a || i || (u = "remove")), u === "add" ? (l = [...o, {
						id: e.id,
						desc: d
					}], l.splice(0, l.length - (t.options.maxMultiSortColCount ?? 2 ** 53 - 1))) : l = u === "toggle" ? o.map((t) => t.id === e.id ? {
						...t,
						desc: d
					} : t) : u === "remove" ? o.filter((t) => t.id !== e.id) : [{
						id: e.id,
						desc: d
					}], l;
				});
			}, e.getFirstSortDir = () => e.columnDef.sortDescFirst ?? t.options.sortDescFirst ?? e.getAutoSortDir() === "desc" ? "desc" : "asc", e.getNextSortingOrder = (n) => {
				let r = e.getFirstSortDir(), i = e.getIsSorted();
				return i ? i !== r && (t.options.enableSortingRemoval ?? !0) && (!n || (t.options.enableMultiRemove ?? !0)) ? !1 : i === "desc" ? "asc" : "desc" : r;
			}, e.getCanSort = () => (e.columnDef.enableSorting ?? !0) && (t.options.enableSorting ?? !0) && !!e.accessorFn, e.getCanMultiSort = () => e.columnDef.enableMultiSort ?? t.options.enableMultiSort ?? !!e.accessorFn, e.getIsSorted = () => {
				let n = t.getState().sorting?.find((t) => t.id === e.id);
				return n ? n.desc ? "desc" : "asc" : !1;
			}, e.getSortIndex = () => t.getState().sorting?.findIndex((t) => t.id === e.id) ?? -1, e.clearSorting = () => {
				t.setSorting((t) => t != null && t.length ? t.filter((t) => t.id !== e.id) : []);
			}, e.getToggleSortingHandler = () => {
				let n = e.getCanSort();
				return (r) => {
					n && (r.persist == null || r.persist(), e.toggleSorting == null || e.toggleSorting(void 0, e.getCanMultiSort() ? t.options.isMultiSortEvent == null ? void 0 : t.options.isMultiSortEvent(r) : !1));
				};
			};
		},
		createTable: (e) => {
			e.setSorting = (t) => e.options.onSortingChange == null ? void 0 : e.options.onSortingChange(t), e.resetSorting = (t) => {
				e.setSorting(t ? [] : e.initialState?.sorting ?? []);
			}, e.getPreSortedRowModel = () => e.getGroupedRowModel(), e.getSortedRowModel = () => (!e._getSortedRowModel && e.options.getSortedRowModel && (e._getSortedRowModel = e.options.getSortedRowModel(e)), e.options.manualSorting || !e._getSortedRowModel ? e.getPreSortedRowModel() : e._getSortedRowModel());
		}
	},
	de,
	we,
	Oe,
	Ae,
	je,
	_e
];
function Ke(e) {
	let t = [...Ge, ...e._features ?? []], n = { _features: t }, r = n._features.reduce((e, t) => Object.assign(e, t.getDefaultOptions == null ? void 0 : t.getDefaultOptions(n)), {}), i = (e) => n.options.mergeOptions ? n.options.mergeOptions(r, e) : {
		...r,
		...e
	}, a = { ...e.initialState ?? {} };
	n._features.forEach((e) => {
		a = (e.getInitialState == null ? void 0 : e.getInitialState(a)) ?? a;
	});
	let o = [], s = !1, c = {
		_features: t,
		options: {
			...r,
			...e
		},
		initialState: a,
		_queue: (e) => {
			o.push(e), s || (s = !0, Promise.resolve().then(() => {
				for (; o.length;) o.shift()();
				s = !1;
			}).catch((e) => setTimeout(() => {
				throw e;
			})));
		},
		reset: () => {
			n.setState(n.initialState);
		},
		setOptions: (e) => {
			let t = A(e, n.options);
			n.options = i(t);
		},
		getState: () => n.options.state,
		setState: (e) => {
			n.options.onStateChange == null || n.options.onStateChange(e);
		},
		_getRowId: (e, t, r) => (n.options.getRowId == null ? void 0 : n.options.getRowId(e, t, r)) ?? `${r ? [r.id, t].join(".") : t}`,
		getCoreRowModel: () => (n._getCoreRowModel ||= n.options.getCoreRowModel(n), n._getCoreRowModel()),
		getRowModel: () => n.getPaginationRowModel(),
		getRow: (e, t) => {
			let r = (t ? n.getPrePaginationRowModel() : n.getRowModel()).rowsById[e];
			if (!r && (r = n.getCoreRowModel().rowsById[e], !r)) throw Error();
			return r;
		},
		_getDefaultColumnDef: P(() => [n.options.defaultColumn], (e) => (e ??= {}, {
			header: (e) => {
				let t = e.header.column.columnDef;
				return t.accessorKey ? t.accessorKey : t.accessorFn ? t.id : null;
			},
			cell: (e) => {
				var t;
				return ((t = e.renderValue()) == null || t.toString == null ? void 0 : t.toString()) ?? null;
			},
			...n._features.reduce((e, t) => Object.assign(e, t.getDefaultColumnDef == null ? void 0 : t.getDefaultColumnDef()), {}),
			...e
		}), F(e, "debugColumns", "_getDefaultColumnDef")),
		_getColumnDefs: () => n.options.columns,
		getAllColumns: P(() => [n._getColumnDefs()], (e) => {
			let t = function(e, r, i) {
				return i === void 0 && (i = 0), e.map((e) => {
					let a = ne(n, e, i, r), o = e;
					return a.columns = o.columns ? t(o.columns, a, i + 1) : [], a;
				});
			};
			return t(e);
		}, F(e, "debugColumns", "getAllColumns")),
		getAllFlatColumns: P(() => [n.getAllColumns()], (e) => e.flatMap((e) => e.getFlatColumns()), F(e, "debugColumns", "getAllFlatColumns")),
		_getAllFlatColumnsById: P(() => [n.getAllFlatColumns()], (e) => e.reduce((e, t) => (e[t.id] = t, e), {}), F(e, "debugColumns", "getAllFlatColumnsById")),
		getAllLeafColumns: P(() => [n.getAllColumns(), n._getOrderColumnsFn()], (e, t) => t(e.flatMap((e) => e.getLeafColumns())), F(e, "debugColumns", "getAllLeafColumns")),
		getColumn: (e) => n._getAllFlatColumnsById()[e]
	};
	Object.assign(n, c);
	for (let e = 0; e < n._features.length; e++) {
		let t = n._features[e];
		t == null || t.createTable == null || t.createTable(n);
	}
	return n;
}
function qe() {
	return (e) => P(() => [e.options.data], (t) => {
		let n = {
			rows: [],
			flatRows: [],
			rowsById: {}
		}, r = function(t, i, a) {
			i === void 0 && (i = 0);
			let o = [];
			for (let c = 0; c < t.length; c++) {
				let l = R(e, e._getRowId(t[c], c, a), t[c], c, i, void 0, a?.id);
				if (n.flatRows.push(l), n.rowsById[l.id] = l, o.push(l), e.options.getSubRows) {
					var s;
					l.originalSubRows = e.options.getSubRows(t[c], c), (s = l.originalSubRows) != null && s.length && (l.subRows = r(l.originalSubRows, i + 1, l));
				}
			}
			return o;
		};
		return n.rows = r(t), n;
	}, F(e.options, "debugTable", "getRowModel", () => e._autoResetPageIndex()));
}
function Je(e) {
	let t = [], n = (e) => {
		var r;
		t.push(e), (r = e.subRows) != null && r.length && e.getIsExpanded() && e.subRows.forEach(n);
	};
	return e.rows.forEach(n), {
		rows: t,
		flatRows: e.flatRows,
		rowsById: e.rowsById
	};
}
function Ye(e) {
	return (e) => P(() => [
		e.getState().pagination,
		e.getPrePaginationRowModel(),
		e.options.paginateExpandedRows ? void 0 : e.getState().expanded
	], (t, n) => {
		if (!n.rows.length) return n;
		let { pageSize: r, pageIndex: i } = t, { rows: a, flatRows: o, rowsById: s } = n, c = r * i, l = c + r;
		a = a.slice(c, l);
		let u;
		u = e.options.paginateExpandedRows ? {
			rows: a,
			flatRows: o,
			rowsById: s
		} : Je({
			rows: a,
			flatRows: o,
			rowsById: s
		}), u.flatRows = [];
		let d = (e) => {
			u.flatRows.push(e), e.subRows.length && e.subRows.forEach(d);
		};
		return u.rows.forEach(d), u;
	}, F(e.options, "debugTable", "getPaginationRowModel"));
}
function Xe() {
	return (e) => P(() => [e.getState().sorting, e.getPreSortedRowModel()], (t, n) => {
		if (!n.rows.length || !(t != null && t.length)) return n;
		let r = e.getState().sorting, i = [], a = r.filter((t) => e.getColumn(t.id)?.getCanSort()), o = {};
		a.forEach((t) => {
			let n = e.getColumn(t.id);
			n && (o[t.id] = {
				sortUndefined: n.columnDef.sortUndefined,
				invertSorting: n.columnDef.invertSorting,
				sortingFn: n.getSortingFn()
			});
		});
		let s = (e) => {
			let t = e.map((e) => ({ ...e }));
			return t.sort((e, t) => {
				for (let n = 0; n < a.length; n += 1) {
					let r = a[n], i = o[r.id], s = i.sortUndefined, c = r?.desc ?? !1, l = 0;
					if (s) {
						let n = e.getValue(r.id), i = t.getValue(r.id), a = n === void 0, o = i === void 0;
						if (a || o) {
							if (s === "first") return a ? -1 : 1;
							if (s === "last") return a ? 1 : -1;
							l = a && o ? 0 : a ? s : -s;
						}
					}
					if (l === 0 && (l = i.sortingFn(e, t, r.id)), l !== 0) return c && (l *= -1), i.invertSorting && (l *= -1), l;
				}
				return e.index - t.index;
			}), t.forEach((e) => {
				var t;
				i.push(e), (t = e.subRows) != null && t.length && (e.subRows = s(e.subRows));
			}), t;
		};
		return {
			rows: s(n.rows),
			flatRows: i,
			rowsById: n.rowsById
		};
	}, F(e.options, "debugTable", "getSortedRowModel", () => e._autoResetPageIndex()));
}
//#endregion
//#region node_modules/@tanstack/vue-table/build/lib/index.mjs
function Ze() {
	return !0;
}
var Qe = Symbol("merge-proxy"), $e = {
	get(e, t, n) {
		return t === Qe ? n : e.get(t);
	},
	has(e, t) {
		return e.has(t);
	},
	set: Ze,
	deleteProperty: Ze,
	getOwnPropertyDescriptor(e, t) {
		return {
			configurable: !0,
			enumerable: !0,
			get() {
				return e.get(t);
			},
			set: Ze,
			deleteProperty: Ze
		};
	},
	ownKeys(e) {
		return e.keys();
	}
};
function et(e) {
	return "value" in e ? e.value : e;
}
function $() {
	var e = [...arguments];
	return new Proxy({
		get(t) {
			for (let n = e.length - 1; n >= 0; n--) {
				let r = et(e[n])[t];
				if (r !== void 0) return r;
			}
		},
		has(t) {
			for (let n = e.length - 1; n >= 0; n--) if (t in et(e[n])) return !0;
			return !1;
		},
		keys() {
			let t = [];
			for (let n = 0; n < e.length; n++) t.push(...Object.keys(et(e[n])));
			return [...Array.from(new Set(t))];
		}
	}, $e);
}
w({
	props: ["render", "props"],
	setup: (e) => () => typeof e.render == "function" || typeof e.render == "object" ? C(e.render, e.props) : e.render
});
function tt(e) {
	return $(e, { data: i(e.data) });
}
function nt(e) {
	let i = t(e.data), a = Ke($({
		state: {},
		onStateChange: () => {},
		renderFallbackValue: null,
		mergeOptions(e, t) {
			return i ? {
				...e,
				...t
			} : $(e, t);
		}
	}, i ? tt(e) : e));
	if (i) {
		let t = r(e.data);
		s(t, () => {
			a.setState((e) => ({
				...e,
				data: t.value
			}));
		}, { immediate: !0 });
	}
	let o = l(a.initialState);
	return n(() => {
		a.setOptions((t) => {
			let n = new Proxy({}, { get: (e, t) => o.value[t] });
			return $(t, i ? tt(e) : e, {
				state: $(n, e.state ?? {}),
				onStateChange: (t) => {
					t instanceof Function ? o.value = t(o.value) : o.value = t, e.onStateChange == null || e.onStateChange(t);
				}
			});
		});
	}), a;
}
//#endregion
//#region lib/tables/TableDecisionFormCell.vue?vue&type=script&setup=true&lang.ts
var rt = ["action", "method"], it = ["value"], at = ["name", "value"], ot = { class: "ss-table-decision-form__field" }, st = ["for"], ct = ["id", "name"], lt = {
	key: 0,
	class: "errorlist"
}, ut = { class: "ss-table-decision-form__buttons" }, dt = ["name", "value"], ft = ["name", "value"], pt = /*#__PURE__*/ O(/* @__PURE__ */ w({
	__name: "TableDecisionFormCell",
	props: { cell: {} },
	setup(t) {
		let n = t, r = m(() => `ss-table-status-reason-${n.cell.eventId}`), i = m(() => n.cell.reasonErrors ?? []), c = l(n.cell.reasonValue || "");
		return s(() => n.cell.reasonValue, (e) => {
			c.value = e || "";
		}), (n, s) => (o(), h("form", {
			action: t.cell.action,
			method: t.cell.method || "post",
			class: "ss-table-decision-form"
		}, [
			y("input", {
				type: "hidden",
				name: "csrfmiddlewaretoken",
				value: t.cell.csrfToken
			}, null, 8, it),
			y("input", {
				type: "hidden",
				name: t.cell.eventIdName,
				value: t.cell.eventId
			}, null, 8, at),
			y("p", ot, [y("label", {
				for: r.value,
				class: "ss-table-decision-form__label"
			}, u(t.cell.reasonLabel), 9, st), a(y("textarea", {
				id: r.value,
				"onUpdate:modelValue": s[0] ||= (e) => c.value = e,
				name: t.cell.reasonName,
				class: "ss-table-decision-form__reason",
				cols: "40",
				rows: "10",
				required: ""
			}, null, 8, ct), [[v, c.value]])]),
			i.value.length > 0 ? (o(), h("ul", lt, [(o(!0), h(x, null, e(i.value, (e, t) => (o(), h("li", { key: `${e}-${t}` }, u(e), 1))), 128))])) : g("", !0),
			y("div", ut, [y("button", {
				type: "submit",
				name: t.cell.decisionName,
				value: t.cell.approveValue,
				class: "ss-table-decision-form__button ss-table-decision-form__button--approve"
			}, u(t.cell.approveLabel), 9, dt), y("button", {
				type: "submit",
				name: t.cell.decisionName,
				value: t.cell.rejectValue,
				class: "ss-table-decision-form__button ss-table-decision-form__button--reject"
			}, u(t.cell.rejectLabel), 9, ft)])
		], 8, rt));
	}
}), [["__scopeId", "data-v-073ab6e5"]]), mt = ["href"], ht = { key: 0 }, gt = {
	key: 0,
	class: "ss-table-action-separator"
}, _t = ["data-package-request-delete-url", "data-package-request-delete-csrf-token"], vt = {
	key: 2,
	class: "ss-table-action-separator"
}, yt = ["action"], bt = ["value"], xt = ["data-am-modal-target"], St = ["id", "aria-labelledby"], Ct = { class: "modal-header" }, wt = ["id"], Tt = { class: "modal-body" }, Et = { class: "modal-footer" }, Dt = {
	class: "btn",
	type: "button",
	"data-dismiss": "modal",
	"aria-hidden": "true"
}, Ot = {
	class: "btn btn-danger",
	type: "submit"
}, kt = /*#__PURE__*/ O(/* @__PURE__ */ w({
	__name: "TablePackageActionsCell",
	props: { cell: {} },
	setup(t) {
		let n = t, { t: r } = b(), i = m(() => r("packageActions.requestDeletion")), a = m(() => n.cell.directDelete ? `#${n.cell.directDelete.modalId}` : "");
		return (n, r) => (o(), h(x, null, [
			(o(!0), h(x, null, e(t.cell.links, (e, n) => (o(), h(x, { key: `${e.href}-${n}` }, [y("a", { href: e.href }, u(e.label), 9, mt), n < t.cell.links.length - 1 ? (o(), h("span", ht, " | ")) : g("", !0)], 64))), 128)),
			t.cell.requestDelete && t.cell.links.length > 0 ? (o(), h("span", gt, " | ")) : g("", !0),
			t.cell.requestDelete ? (o(), h("a", {
				key: 1,
				href: "#",
				class: "request-delete",
				"data-package-request-delete-url": t.cell.requestDelete.actionUrl,
				"data-package-request-delete-csrf-token": t.cell.requestDelete.csrfToken
			}, u(i.value), 9, _t)) : g("", !0),
			t.cell.directDelete && (t.cell.requestDelete || t.cell.links.length > 0) ? (o(), h("span", vt, " | ")) : g("", !0),
			t.cell.directDelete ? (o(), h("form", {
				key: 3,
				method: "post",
				action: t.cell.directDelete.actionUrl,
				class: "ss-table-package-actions-form"
			}, [
				y("input", {
					type: "hidden",
					name: "csrfmiddlewaretoken",
					value: t.cell.directDelete.csrfToken
				}, null, 8, bt),
				y("button", {
					class: "link",
					type: "button",
					"data-am-modal-target": a.value
				}, u(t.cell.directDelete.confirmLabel), 9, xt),
				y("div", {
					id: t.cell.directDelete.modalId,
					class: "confirm-modal modal hide fade",
					tabindex: "-1",
					role: "dialog",
					"aria-labelledby": t.cell.directDelete.modalLabelId,
					"aria-hidden": "true"
				}, [
					y("div", Ct, [r[0] ||= y("button", {
						type: "button",
						class: "close",
						"data-dismiss": "modal",
						"aria-hidden": "true"
					}, " × ", -1), y("h3", { id: t.cell.directDelete.modalLabelId }, u(t.cell.directDelete.modalTitle), 9, wt)]),
					y("div", Tt, [y("p", null, u(t.cell.directDelete.promptText), 1)]),
					y("div", Et, [y("button", Dt, u(t.cell.directDelete.closeLabel), 1), y("button", Ot, u(t.cell.directDelete.confirmLabel), 1)])
				], 8, St)
			], 8, yt)) : g("", !0)
		], 64));
	}
}), [["__scopeId", "data-v-7f0648b0"]]), At = ["href"], jt = {
	key: 0,
	class: "ss-table-action-separator"
}, Mt = ["href"], Nt = ["href"], Pt = ["href"], Ft = { key: 0 }, It = { key: 0 }, Lt = ["href"], Rt = { key: 0 }, zt = /*#__PURE__*/ O(/* @__PURE__ */ w({
	__name: "TableCellContent",
	props: {
		columnId: {},
		value: {}
	},
	setup(t) {
		let n = t, r = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "link" && typeof t.text == "string" && typeof t.href == "string";
		}, i = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "link-list" && Array.isArray(t.items);
		}, a = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "text-with-links" && typeof t.text == "string" && Array.isArray(t.items);
		}, s = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return typeof t.label == "string" && typeof t.href == "string";
		}, c = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "status-with-link" && typeof t.text == "string";
		}, l = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "package-actions" && Array.isArray(t.links);
		}, p = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "decision-form" && typeof t.action == "string" && typeof t.csrfToken == "string" && typeof t.eventIdName == "string" && typeof t.eventId == "number" && typeof t.reasonName == "string" && typeof t.reasonLabel == "string" && typeof t.decisionName == "string" && typeof t.approveValue == "string" && typeof t.rejectValue == "string" && typeof t.approveLabel == "string" && typeof t.rejectLabel == "string";
		}, v = m(() => n.columnId !== "actions" || !Array.isArray(n.value) ? [] : n.value.filter(s).map((e) => ({
			label: e.label,
			href: e.href,
			style: e.style ?? "default"
		}))), b = m(() => p(n.value) ? n.value : null), S = m(() => c(n.value) ? n.value : null), C = m(() => l(n.value) ? n.value : null), w = m(() => n.value === null || n.value === void 0 ? "" : typeof n.value == "string" || typeof n.value == "number" || typeof n.value == "boolean" ? String(n.value) : ""), T = m(() => r(n.value) ? n.value : null), E = m(() => i(n.value) ? n.value : null), D = m(() => a(n.value) ? n.value : null), O = (e) => e === "primary" ? "ss-table-action-link ss-table-action-link--primary" : e === "destructive" ? "ss-table-action-link ss-table-action-link--destructive" : "ss-table-action-link", k = (e) => e.separator || ", ";
		return (n, r) => t.columnId === "actions" && b.value ? (o(), _(pt, {
			key: 0,
			cell: b.value
		}, null, 8, ["cell"])) : t.columnId === "actions" && C.value ? (o(), _(kt, {
			key: 1,
			cell: C.value
		}, null, 8, ["cell"])) : t.columnId === "actions" ? (o(!0), h(x, { key: 2 }, e(v.value, (e, t) => (o(), h(x, { key: `${e.href}-${t}` }, [y("a", {
			href: e.href,
			class: d(O(e.style))
		}, u(e.label), 11, At), t < v.value.length - 1 ? (o(), h("span", jt, " | ")) : g("", !0)], 64))), 128)) : T.value ? (o(), h("a", {
			key: 3,
			href: T.value.href
		}, u(T.value.text), 9, Mt)) : S.value ? (o(), h(x, { key: 4 }, [y("span", null, u(S.value.text), 1), S.value.link ? (o(), h(x, { key: 0 }, [
			r[0] ||= y("span", null, " (", -1),
			y("a", { href: S.value.link.href }, u(S.value.link.text), 9, Nt),
			r[1] ||= y("span", null, ")", -1)
		], 64)) : g("", !0)], 64)) : E.value ? (o(), h(x, { key: 5 }, [E.value.items.length > 0 ? (o(!0), h(x, { key: 0 }, e(E.value.items, (e, t) => (o(), h(x, { key: `${e.href}-${t}` }, [y("a", { href: e.href }, u(e.text), 9, Pt), t < E.value.items.length - 1 ? (o(), h("span", Ft, u(k(E.value)), 1)) : g("", !0)], 64))), 128)) : (o(), h(x, { key: 1 }, [f(u(E.value.emptyText || ""), 1)], 64))], 64)) : D.value ? (o(), h(x, { key: 6 }, [y("span", null, u(D.value.text), 1), D.value.items.length > 0 ? (o(), h(x, { key: 0 }, [D.value.connector ? (o(), h("span", It, u(` ${D.value.connector} `), 1)) : g("", !0), (o(!0), h(x, null, e(D.value.items, (e, t) => (o(), h(x, { key: `${e.href}-${t}` }, [y("a", { href: e.href }, u(e.text), 9, Lt), t < D.value.items.length - 1 ? (o(), h("span", Rt, ", ")) : g("", !0)], 64))), 128))], 64)) : g("", !0)], 64)) : (o(), h(x, { key: 7 }, [f(u(w.value), 1)], 64));
	}
}), [["__scopeId", "data-v-fc2c5e1c"]]), Bt = { class: "ss-table-pagination__controls" }, Vt = ["disabled"], Ht = ["disabled"], Ut = /*#__PURE__*/ O(/* @__PURE__ */ w({
	__name: "TablePagination",
	props: {
		pageIndex: {},
		canPrevious: { type: Boolean },
		canNext: { type: Boolean }
	},
	emits: ["update:pageIndex"],
	setup(e, { emit: t }) {
		let n = e, r = t, { t: a } = b(), s = () => {
			n.canPrevious && r("update:pageIndex", n.pageIndex - 1);
		}, c = () => {
			n.canNext && r("update:pageIndex", n.pageIndex + 1);
		};
		return (t, n) => (o(), h("div", Bt, [y("button", {
			class: d(["ss-table-pagination__link ss-table-pagination__link--previous", { "ss-table-pagination__link--disabled": !e.canPrevious }]),
			type: "button",
			disabled: !e.canPrevious,
			onClick: s
		}, u(i(a)("tables.previous")), 11, Vt), y("button", {
			class: d(["ss-table-pagination__link ss-table-pagination__link--next", { "ss-table-pagination__link--disabled": !e.canNext }]),
			type: "button",
			disabled: !e.canNext,
			onClick: c
		}, u(i(a)("tables.next")), 11, Ht)]));
	}
}), [["__scopeId", "data-v-74ba1128"]]), Wt = (e) => e.href ? {
	kind: "link",
	text: e.text,
	href: e.href
} : e.text, Gt = (e) => {
	let t = [];
	return e.actions.pointer_file_href && t.push({
		label: k("packageActions.pointerFile"),
		href: e.actions.pointer_file_href
	}), e.actions.download_href && t.push({
		label: k("packageActions.download"),
		href: e.actions.download_href
	}), e.actions.reingest_href && t.push({
		label: k("packageActions.reingest"),
		href: e.actions.reingest_href
	}), {
		uuid: e.uuid,
		origin_pipeline: Wt(e.origin_pipeline),
		current_location: Wt(e.current_location),
		size: e.size,
		package_type: e.package_type,
		replica_of: e.replica_of,
		status: {
			kind: "status-with-link",
			text: e.status.text,
			link: e.status.update_href ? {
				text: k("packageActions.updateStatus"),
				href: e.status.update_href
			} : void 0
		},
		stored: e.stored,
		fixity_date: e.fixity_date,
		fixity_status: {
			kind: "link",
			text: e.fixity_status.text,
			href: e.fixity_status.href
		},
		actions: {
			kind: "package-actions",
			links: t,
			requestDelete: e.actions.request_delete ? {
				actionUrl: e.actions.request_delete.action_url,
				csrfToken: e.actions.request_delete.csrf_token
			} : void 0,
			directDelete: e.actions.direct_delete ? {
				actionUrl: e.actions.direct_delete.action_url,
				csrfToken: e.actions.direct_delete.csrf_token,
				modalId: e.actions.direct_delete.modal_id,
				modalLabelId: e.actions.direct_delete.modal_label_id,
				modalTitle: e.actions.direct_delete.modal_title,
				promptText: e.actions.direct_delete.prompt_text,
				closeLabel: e.actions.direct_delete.close_label,
				confirmLabel: e.actions.direct_delete.confirm_label
			} : void 0
		}
	};
}, Kt = (e) => ({
	date: e.date,
	error: e.error
}), qt = (e) => e ? "desc" : "asc", Jt = (e, t) => {
	let n = e[t];
	return n ? n.sortable ?? !0 : !1;
}, Yt = (e, t) => {
	let n = t[0];
	if (!n) return null;
	let r = e.findIndex((e) => e.key === n.id);
	return r < 0 || !Jt(e, r) ? null : r;
}, Xt = (e) => {
	let t = new URLSearchParams(), { columns: n, pagination: r, sorting: i, search: a, draw: o, filters: s } = e;
	t.set("sEcho", String(Math.max(o, 1))), t.set("iDisplayStart", String(Math.max(r.pageIndex * r.pageSize, 0))), t.set("iDisplayLength", String(Math.max(r.pageSize, 1))), t.set("sSearch", a), n.forEach((e, n) => {
		t.set(`bSortable_${n}`, String(e.sortable ?? !0));
	});
	let c = Yt(n, i);
	return c === null ? t.set("iSortingCols", "0") : (t.set("iSortingCols", "1"), t.set("iSortCol_0", String(c)), t.set("sSortDir_0", qt(i[0]?.desc))), Object.entries(s ?? {}).forEach(([e, n]) => {
		n.length > 0 && t.set(e, n);
	}), t;
}, Zt = (e) => {
	if (typeof e == "number" && Number.isFinite(e)) return Math.max(Math.trunc(e), 0);
	if (typeof e == "string") {
		let t = Number.parseInt(e, 10);
		if (!Number.isNaN(t)) return Math.max(t, 0);
	}
	return 0;
}, Qt = (e) => e instanceof DOMException && e.name === "AbortError", $t = (e) => {
	let t = l([]), n = l(0), r = l(0), i = l(!1), a = l(null), o = l(0), u = null, d = 0, f = m(() => ({
		endpoint: e.endpoint,
		filters: e.filters ?? {},
		pageIndex: e.pagination.value.pageIndex,
		pageSize: e.pagination.value.pageSize,
		search: e.search.value,
		sortId: e.sorting.value[0]?.id ?? "",
		sortDesc: e.sorting.value[0]?.desc ?? !1
	})), p = async () => {
		u?.abort();
		let s = new AbortController();
		u = s, d += 1;
		let c = d;
		o.value += 1, i.value = !0, a.value = null;
		let l = Xt({
			columns: e.columns,
			pagination: e.pagination.value,
			sorting: e.sorting.value,
			search: e.search.value,
			draw: o.value,
			filters: e.filters
		}), f = e.endpoint.includes("?") ? "&" : "?", p = `${e.endpoint}${f}${l.toString()}`;
		try {
			let i = await fetch(p, {
				method: "GET",
				headers: { "X-Requested-With": "XMLHttpRequest" },
				credentials: "same-origin",
				signal: s.signal
			});
			if (!i.ok) throw Error(`Request failed: ${i.status}`);
			let a = await i.json();
			if (c !== d) return;
			let o = Array.isArray(a.aaData) ? a.aaData : [];
			t.value = o.map(e.mapRow), n.value = Zt(a.iTotalRecords), r.value = Zt(a.iTotalDisplayRecords);
		} catch (e) {
			if (c !== d || Qt(e)) return;
			t.value = [], n.value = 0, r.value = 0, a.value = e instanceof Error ? e.message : "Request failed";
		} finally {
			c === d && (i.value = !1);
		}
	};
	return s(f, () => {
		p();
	}, { immediate: !0 }), c(() => {
		u?.abort();
	}), {
		rows: t,
		totalRecords: n,
		totalDisplayRecords: r,
		loading: i,
		error: a,
		refetch: p
	};
}, en = ({ rows: e, columns: t, displayValueForColumn: n }) => {
	let r = l(""), i = l(""), a = D(r, 100), o = m(() => t.value.filter((e) => e.key !== "actions").map((e) => e.key)), c = m(() => {
		let t = o.value, r = /* @__PURE__ */ new Map();
		for (let i of e.value) {
			let e = t.map((e) => n(i, e).toLowerCase()).join(" ");
			r.set(i, e);
		}
		return r;
	}), u = "", d = [], f = (e) => e === u ? d : (u = e, d = e.toLowerCase().trim().split(/\s+/).filter(Boolean), d);
	return s(a, (e) => {
		i.value = e;
	}), {
		searchFilterInput: r,
		globalFilter: i,
		tokenizedGlobalFilter: (e, t) => {
			let n = f(t);
			if (n.length === 0) return !0;
			let r = c.value.get(e) ?? "";
			return n.every((e) => r.includes(e));
		}
	};
}, tn = { class: "ss-table" }, nn = { class: "ss-table-controls" }, rn = { class: "ss-table-length" }, an = { class: "ss-table-length__label" }, on = ["value"], sn = ["value"], cn = { class: "ss-table-toolbar" }, ln = { class: "ss-table-toolbar__label" }, un = { class: "ss-table-grid" }, dn = ["onClick"], fn = {
	class: "ss-table-sort-indicator",
	"aria-hidden": "true"
}, pn = {
	key: 1,
	class: "ss-table-header-label"
}, mn = { key: 0 }, hn = { key: 1 }, gn = { class: "ss-table-row--odd" }, _n = ["colspan"], vn = { class: "ss-table-info" }, yn = { class: "ss-table-pagination" }, bn = /*#__PURE__*/ O(/* @__PURE__ */ w({
	__name: "App",
	props: { payload: {} },
	setup(n) {
		let r = n, { t: c, locale: p } = b(), g = [
			10,
			25,
			50,
			100
		], _ = m(() => r.payload.ui.server?.mode === "server-datatables-v1"), C = l((() => {
			if (_.value) {
				let e = r.payload.ui.server?.defaultSort;
				if (e) {
					let t = r.payload.columns.find((t) => t.key === e.columnKey && (t.sortable ?? !0));
					if (t) return [{
						id: t.key,
						desc: e.direction === "desc"
					}];
				}
			}
			let e = r.payload.columns.find((e) => e.sortable ?? !0);
			return e ? [{
				id: e.key,
				desc: !1
			}] : [];
		})()), w = l({
			pageIndex: 0,
			pageSize: 10
		}), T = (e, t) => {
			if (typeof e == "function") {
				t.value = e(t.value);
				return;
			}
			t.value = e;
		}, E = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "link" && typeof t.text == "string" && typeof t.href == "string";
		}, D = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "link-list" && Array.isArray(t.items);
		}, O = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "text-with-links" && typeof t.text == "string" && Array.isArray(t.items);
		}, k = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "status-with-link" && typeof t.text == "string";
		}, A = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return t.kind === "package-actions" && Array.isArray(t.links);
		}, j = (e) => {
			if (!e || typeof e != "object") return !1;
			let t = e;
			return typeof t.label == "string" && typeof t.href == "string";
		}, M = (e) => {
			if (e == null) return "";
			if (typeof e == "string" || typeof e == "number" || typeof e == "boolean") return String(e);
			if (Array.isArray(e)) return e.filter(j).map((e) => e.label).join(" ");
			if (E(e)) return e.text;
			if (D(e)) return e.items.map((e) => e.text).join(" ");
			if (k(e)) {
				let t = e.link?.text || "";
				return `${e.text} ${t}`.trim();
			}
			if (O(e)) {
				let t = e.items.map((e) => e.text).join(" ");
				return `${e.text} ${t}`.trim();
			}
			return A(e), "";
		}, { searchFilterInput: ee, globalFilter: N, tokenizedGlobalFilter: P } = en({
			rows: m(() => r.payload.rows),
			columns: m(() => r.payload.columns),
			displayValueForColumn: (e, t) => M(e[t])
		}), F = m(() => N.value.trim() === "" ? r.payload.rows : r.payload.rows.filter((e) => P(e, N.value)));
		s(N, () => {
			w.value.pageIndex = 0;
		});
		let te = l([]), ne = l(0), I = l(0), re = l(!1), ie = l(null), L = {
			rows: te,
			totalRecords: ne,
			totalDisplayRecords: I,
			loading: re,
			error: ie
		}, R = (() => {
			let e = r.payload.ui.server;
			return !_.value || !e ? L : r.payload.kind === "packages-server" ? $t({
				endpoint: e.endpoint,
				columns: r.payload.columns,
				pagination: w,
				sorting: C,
				search: N,
				filters: e.filters,
				mapRow: Gt
			}) : r.payload.kind === "fixity-logs-server" ? $t({
				endpoint: e.endpoint,
				columns: r.payload.columns,
				pagination: w,
				sorting: C,
				search: N,
				filters: e.filters,
				mapRow: Kt
			}) : (ie.value = "Unsupported server table kind", L);
		})(), ae = m(() => _.value ? R.rows.value : F.value), z = m(() => {
			let e = /* @__PURE__ */ new Map();
			return r.payload.columns.forEach((t) => {
				e.set(t.key, t.label);
			}), e;
		}), oe = m(() => r.payload.columns.map((e) => ({
			id: e.key,
			accessorFn: (t) => t[e.key],
			enableSorting: e.sortable ?? !0,
			sortingFn: (e, t, n) => {
				let r = M(e.getValue(n)).toLocaleLowerCase(), i = M(t.getValue(n)).toLocaleLowerCase();
				return r.localeCompare(i, void 0, {
					numeric: !0,
					sensitivity: "base"
				});
			}
		}))), B = nt({
			get data() {
				return ae.value;
			},
			get columns() {
				return oe.value;
			},
			state: {
				get sorting() {
					return C.value;
				},
				get pagination() {
					return w.value;
				}
			},
			onSortingChange: (e) => {
				T(e, C), w.value.pageIndex = 0;
			},
			onPaginationChange: (e) => T(e, w),
			manualSorting: _.value,
			manualPagination: _.value,
			getCoreRowModel: qe(),
			getSortedRowModel: _.value ? void 0 : Xe(),
			getPaginationRowModel: _.value ? void 0 : Ye()
		}), V = m(() => B.getRowModel().rows), se = [...g], ce = m(() => C.value[0]?.id ?? null), H = m(() => _.value ? R.totalRecords.value : r.payload.rows.length), U = m(() => _.value ? R.totalDisplayRecords.value : F.value.length), W = m(() => _.value ? w.value.pageIndex > 0 : B.getCanPreviousPage()), G = m(() => _.value ? (w.value.pageIndex + 1) * w.value.pageSize < U.value : B.getCanNextPage()), K = m(() => V.value.length === 0 ? 0 : w.value.pageIndex * w.value.pageSize + 1), le = m(() => V.value.length === 0 ? 0 : w.value.pageIndex * w.value.pageSize + V.value.length), ue = m(() => new Intl.NumberFormat(p.value)), q = (e) => ue.value.format(e), de = m(() => c("tables.loading")), fe = m(() => c("tables.loadFailed")), pe = m(() => _.value && R.loading.value ? de.value : _.value && R.error.value ? fe.value : c("tables.noRecords")), J = m(() => U.value < H.value ? c("tables.infoFiltered", {
			start: q(K.value),
			end: q(le.value),
			filtered: q(U.value),
			total: q(H.value)
		}) : U.value === 0 ? c("tables.infoEmpty") : c("tables.info", {
			start: q(K.value),
			end: q(le.value),
			total: q(U.value)
		})), me = (e) => e === "asc" ? "ss-table-sort-icon--asc" : e === "desc" ? "ss-table-sort-icon--desc" : "ss-table-sort-icon--unsorted", he = (e) => {
			B.setPageIndex(e);
		}, Y = (e) => {
			B.setPageSize(e), B.setPageIndex(0);
		}, ge = (e) => {
			let t = e.target;
			if (!(t instanceof HTMLSelectElement)) return;
			let n = Number.parseInt(t.value, 10);
			Number.isNaN(n) || Y(n);
		};
		return (n, r) => (o(), h("div", tn, [
			y("div", nn, [y("div", rn, [y("label", an, [
				y("span", null, u(i(c)("tables.show")), 1),
				y("select", {
					class: "ss-table-length__select",
					value: w.value.pageSize,
					onChange: ge
				}, [(o(), h(x, null, e(se, (e) => y("option", {
					key: e,
					value: e
				}, u(e), 9, sn)), 64))], 40, on),
				y("span", null, u(i(c)("tables.entries")), 1)
			])]), y("div", cn, [y("label", ln, [y("span", null, u(i(c)("tables.search")), 1), a(y("input", {
				"onUpdate:modelValue": r[0] ||= (e) => t(ee) ? ee.value = e : null,
				class: "ss-table-search-input",
				type: "search"
			}, null, 512), [[v, i(ee)]])])])]),
			y("table", un, [y("thead", null, [y("tr", null, [(o(!0), h(x, null, e(i(B).getAllLeafColumns(), (e) => (o(), h("th", { key: e.id }, [e.getCanSort() ? (o(), h("button", {
				key: 0,
				class: "ss-table-sort-button",
				type: "button",
				onClick: (t) => e.toggleSorting(e.getIsSorted() === "asc")
			}, [f(u(z.value.get(e.id) || e.id) + " ", 1), y("span", fn, [y("i", { class: d(me(e.getIsSorted())) }, null, 2)])], 8, dn)) : (o(), h("span", pn, u(z.value.get(e.id) || e.id), 1))]))), 128))])]), V.value.length > 0 ? (o(), h("tbody", mn, [(o(!0), h(x, null, e(V.value, (t, n) => (o(), h("tr", {
				key: t.id,
				class: d(n % 2 == 0 ? "ss-table-row--odd" : "ss-table-row--even")
			}, [(o(!0), h(x, null, e(t.getVisibleCells(), (e) => (o(), h("td", {
				key: e.id,
				class: d({ "ss-table-cell--sorted": ce.value === e.column.id })
			}, [S(zt, {
				"column-id": e.column.id,
				value: e.getValue()
			}, null, 8, ["column-id", "value"])], 2))), 128))], 2))), 128))])) : (o(), h("tbody", hn, [y("tr", gn, [y("td", {
				class: "ss-table-cell--empty",
				colspan: i(B).getAllLeafColumns().length
			}, u(pe.value), 9, _n)])]))]),
			y("div", vn, u(J.value), 1),
			y("div", yn, [S(Ut, {
				"page-index": w.value.pageIndex,
				"can-previous": W.value,
				"can-next": G.value,
				"onUpdate:pageIndex": he
			}, null, 8, [
				"page-index",
				"can-previous",
				"can-next"
			])])
		]));
	}
}), [["__scopeId", "data-v-73653f5a"]]), xn = (e) => {
	let t = document.getElementById(e);
	if (!t?.textContent) throw Error(`Table payload script not found: ${e}`);
	return JSON.parse(t.textContent);
}, Sn = () => {
	document.querySelectorAll("[data-table-root]").forEach((e) => {
		let t = e;
		t.closest(".row")?.classList.add("tables-content-row");
		let n = t.dataset.tableScriptId;
		if (!n) {
			console.error("Missing data-table-script-id on table root", t);
			return;
		}
		try {
			let e = xn(n);
			p(bn, { payload: e }).use(E).mount(t);
		} catch (e) {
			console.error("Failed to mount table", e);
		}
	});
};
async function Cn() {
	await T(), Sn();
}
Cn().catch((e) => {
	console.error("Failed to bootstrap tables", e);
});
//#endregion
