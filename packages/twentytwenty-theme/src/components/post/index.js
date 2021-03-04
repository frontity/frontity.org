import { loadable } from "frontity";
/**
 * Codesplit the post list component so it's not included if the users
 * don't load a post directly.
 */
export default loadable(() => import("./post-list"));
