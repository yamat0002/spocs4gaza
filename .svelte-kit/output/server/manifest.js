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
		client: {"start":"_app/immutable/entry/start.DeBh-vMk.js","app":"_app/immutable/entry/app.B36vl9qC.js","imports":["_app/immutable/entry/start.DeBh-vMk.js","_app/immutable/chunks/entry.Ds96vQxS.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/entry/app.B36vl9qC.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.Bu3Rlg_J.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
