import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CXICJOCt.js","_app/immutable/chunks/scheduler.DudDZvbt.js","_app/immutable/chunks/index.BbkFrGTK.js","_app/immutable/chunks/Icon.RMod2EEl.js"];
export const stylesheets = ["_app/immutable/assets/0.YuBjvo5z.css"];
export const fonts = [];
