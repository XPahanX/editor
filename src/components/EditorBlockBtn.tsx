import { Component, createSignal, ParentComponent, Show } from 'solid-js';
import type clickOutside from '../directives/click-outside';


const EditorBlockMenu: Component = () => {
    return (
        <div class='editor-block-menu'>
            <div><button>Delete</button></div>
            <div><button>Move Up</button></div>
            <div><button>Move Down</button></div>
        </div>
    )
}

const EditorBlockBtn: ParentComponent = () => {
    const [toggle, setToggle] = createSignal(false)
    const isToggle = () => setToggle(!toggle())

    return (
        <div classList={{'editor-block-btn': !toggle()}}>
            <button onClick={isToggle}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M104 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm-72 44a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm-72 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"/></svg>
            </button>
            <Show
                when={toggle()}
                fallback={<></>}
            >
                <EditorBlockMenu/>
            </Show>
        </div>
    )
}

export default EditorBlockBtn;