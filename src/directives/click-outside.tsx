import { onCleanup } from "solid-js";

// https://www.solidjs.com/tutorial/bindings_directives?solved
// надо будет пофиксить
export default function clickOutside(el:any, accessor:any) {
  const onClick = (e:any) => !el.contains(e.target) && accessor()?.();
  document.body.addEventListener("click", onClick);

  onCleanup(() => document.body.removeEventListener("click", onClick));
}