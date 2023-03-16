import { Accessor, onCleanup, Setter, Signal } from "solid-js";

// https://www.solidjs.com/tutorial/bindings_directives?solved
// need fix
export default function clickOutside(el:Element, accessor: () => false) {
  const onClick = (e: Event) => 
    !el.contains(e.target as Node) && accessor();
  document.body.addEventListener("click", onClick);
  onCleanup(() => document.body.removeEventListener("click", onClick));
}

declare module "solid-js" {
  namespace JSX {
    interface Directives {
      clickOutside: () => false;
    }
  }
}
