export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "spocs4gaza/_app",
	assets: new Set([".nojekyll","favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DC3OxvuM.js","app":"_app/immutable/entry/app.Cg02ULdk.js","imports":["_app/immutable/entry/start.DC3OxvuM.js","_app/immutable/chunks/entry.jJ4g7_tD.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.Cg02ULdk.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.Bu3Rlg_J.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
