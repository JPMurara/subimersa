export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-fundo-mar.jpeg","big_wave.jpg","favicon.png","logo-imersa-store-removebg.png","logo-removebg.png","logo.jpg","service_img.jpg","subimersa_1.jpeg","subimersa_10.jpeg","subimersa_11.jpeg","subimersa_12.jpeg","subimersa_13.jpeg","subimersa_14.jpeg","subimersa_15.jpeg","subimersa_16.jpeg","subimersa_17.jpeg","subimersa_18.jpeg","subimersa_19.jpeg","subimersa_2.jpeg","subimersa_20.jpeg","subimersa_21.jpeg","subimersa_22.jpeg","subimersa_23.jpeg","subimersa_3.jpeg","subimersa_4.jpeg","subimersa_5.jpeg","subimersa_6.jpeg","subimersa_7.jpeg","subimersa_8.jpeg","subimersa_9.jpeg"]),
	mimeTypes: {".jpeg":"image/jpeg",".jpg":"image/jpeg",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.BcNu5ZKg.js","app":"_app/immutable/entry/app.DMfiAKFx.js","imports":["_app/immutable/entry/start.BcNu5ZKg.js","_app/immutable/chunks/entry.CPDyFn4u.js","_app/immutable/chunks/scheduler.DudDZvbt.js","_app/immutable/entry/app.DMfiAKFx.js","_app/immutable/chunks/scheduler.DudDZvbt.js","_app/immutable/chunks/index.BbkFrGTK.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js'))
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
