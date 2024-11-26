import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.BdZOGjcT.js","_app/immutable/chunks/scheduler.DNAmgjY3.js","_app/immutable/chunks/index.CuyaoOLz.js","_app/immutable/chunks/Icon.CeulEuuW.js","_app/immutable/chunks/spread.CgU5AtxT.js","_app/immutable/chunks/functions.7WSLLGk3.js","_app/immutable/chunks/whatsappUtils.B6A8s0fe.js"];
export const stylesheets = ["_app/immutable/assets/0.4_eGMb8f.css"];
export const fonts = [];
