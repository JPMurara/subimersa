import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.Cu8WnIme.js","_app/immutable/chunks/scheduler.2nX1px40.js","_app/immutable/chunks/index.QFh5qn7W.js","_app/immutable/chunks/Icon.Du6COSQO.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/functions.u4bOQjgB.js"];
export const stylesheets = ["_app/immutable/assets/0.DX4_yuae.css"];
export const fonts = [];
