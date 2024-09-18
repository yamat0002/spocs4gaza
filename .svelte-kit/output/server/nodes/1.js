

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BHXdYc1d.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CBLOrU6v.js","_app/immutable/chunks/entry.EED2M2iz.js"];
export const stylesheets = [];
export const fonts = [];
