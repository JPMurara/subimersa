export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["bg-fundo-mar.jpeg","big_wave.jpg","CBPDS.gif","CMAS.png","favicon.ico","logo-imersa-store-removebg.png","logo-removebg.png","logo.jpg","service_img.jpg","subimersa_1.jpeg","subimersa_10.jpeg","subimersa_11.jpeg","subimersa_12.jpeg","subimersa_13.jpeg","subimersa_14.jpeg","subimersa_15.jpeg","subimersa_16.jpeg","subimersa_17.jpeg","subimersa_18.jpeg","subimersa_19.jpeg","subimersa_2.jpeg","subimersa_20.jpeg","subimersa_21.jpeg","subimersa_22.jpeg","subimersa_23.jpeg","subimersa_3.jpeg","subimersa_4.jpeg","subimersa_5.jpeg","subimersa_6.jpeg","subimersa_7.jpeg","subimersa_8.jpeg","subimersa_9.jpeg","subimersa_alunos_1.jpg","subimersa_alunos_2.jpg","subimersa_alunos_3.jpg","subimersa_trofeis.jpg"]),
	mimeTypes: {".jpeg":"image/jpeg",".jpg":"image/jpeg",".gif":"image/gif",".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.1vdOylXd.js","app":"_app/immutable/entry/app.CE-QLr6w.js","imports":["_app/immutable/entry/start.1vdOylXd.js","_app/immutable/chunks/entry.DmRKVUQ9.js","_app/immutable/chunks/scheduler.DNAmgjY3.js","_app/immutable/chunks/index.C0K4MVUk.js","_app/immutable/entry/app.CE-QLr6w.js","_app/immutable/chunks/scheduler.DNAmgjY3.js","_app/immutable/chunks/index.CuyaoOLz.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
