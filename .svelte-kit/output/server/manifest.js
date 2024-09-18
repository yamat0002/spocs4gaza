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
		client: {"start":"_app/immutable/entry/start.GY5JOCv2.js","app":"_app/immutable/entry/app.DcnImCC1.js","imports":["_app/immutable/entry/start.GY5JOCv2.js","_app/immutable/chunks/entry.EED2M2iz.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/entry/app.DcnImCC1.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CBLOrU6v.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
