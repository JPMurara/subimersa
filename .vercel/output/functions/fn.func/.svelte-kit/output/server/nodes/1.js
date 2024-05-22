

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.D1jnPDxC.js","_app/immutable/chunks/scheduler.DudDZvbt.js","_app/immutable/chunks/index.BbkFrGTK.js","_app/immutable/chunks/entry.CPDyFn4u.js"];
export const stylesheets = [];
export const fonts = [];
