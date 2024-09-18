

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.UoAN-YqT.js","_app/immutable/chunks/scheduler.BvLojk_z.js","_app/immutable/chunks/index.CBLOrU6v.js"];
export const stylesheets = ["_app/immutable/assets/2.DUplueus.css"];
export const fonts = [];
