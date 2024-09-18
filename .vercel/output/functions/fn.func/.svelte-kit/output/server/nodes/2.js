

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.BbeRixgz.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.Bu3Rlg_J.js"];
export const stylesheets = ["_app/immutable/assets/2.CoQX2QGq.css"];
export const fonts = [];
