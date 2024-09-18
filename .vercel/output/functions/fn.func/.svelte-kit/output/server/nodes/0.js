import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.p_SsbvCC.js","_app/immutable/chunks/scheduler.DUa3pFyD.js","_app/immutable/chunks/index.Bu3Rlg_J.js"];
export const stylesheets = [];
export const fonts = [];
