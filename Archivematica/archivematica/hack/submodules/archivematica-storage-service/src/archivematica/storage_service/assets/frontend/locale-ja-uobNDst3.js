//#region lib/shared/i18n/locales/ja.json
var e = {
	ariaLabel: "場所ディレクトリー選択",
	loadingDirectories: "読み込み中...",
	loadFailed: "ディレクトリーを読み込めません",
	retry: "再試行",
	select: "選択",
	spaceRoot: "スペースのルート"
}, t = {
	copy: "コピー",
	copied: "コピーしました！",
	copyFailed: "コピーできませんでした。テキストを手動でコピーしてください。"
}, n = {
	pointerFile: "ポインターファイル",
	download: "ダウンロード",
	reingest: "再取り込み",
	updateStatus: "ステータスを更新",
	requestDeletion: "削除をリクエスト"
}, r = {
	delete: "削除",
	addHeader: "ヘッダーを追加"
}, i = {
	success: "パッケージ削除リクエストを送信しました。",
	failure: "パッケージ削除リクエストに失敗しました。"
}, a = {
	search: "検索:",
	show: "表示",
	entries: "件",
	showEntries: "表示件数:",
	previous: "前へ",
	next: "次へ",
	pageIndicator: "{page} / {total} ページ",
	loading: "読み込み中...",
	loadFailed: "レコードを読み込めませんでした",
	noRecords: "一致するレコードが見つかりません",
	info: "{total}件中 {start}〜{end} を表示",
	infoFiltered: "{total} 件中 {filtered} 件に絞り込み（{start} から {end} を表示）",
	infoEmpty: "0件中 0〜0 を表示"
}, o = {
	locationDirectoryPicker: e,
	clipboardField: t,
	packageActions: n,
	callbackHeaders: r,
	packageRequestDelete: i,
	tables: a
};
//#endregion
export { r as callbackHeaders, t as clipboardField, o as default, e as locationDirectoryPicker, n as packageActions, i as packageRequestDelete, a as tables };
