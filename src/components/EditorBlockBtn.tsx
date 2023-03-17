import { Component, createSignal, Show, onCleanup, onMount } from 'solid-js';

const EditorBlockBtn: Component = () => {
    const [toggle, setToggle] = createSignal(false)
    const isToggle = () => setToggle(!toggle())
    let divRef: HTMLDivElement
    let btnRef: HTMLButtonElement

    const handleClick = (event: MouseEvent) => {
        if(!divRef.contains(event.target as Node) && !btnRef.contains(event.target as Node)) {
            setToggle(false)
        }
    }

    const deleteEditorBlock = (event: MouseEvent) => {
        (event.target as Node)
            .parentElement
            ?.parentElement
            ?.parentElement
            ?.parentElement
            ?.parentElement
            ?.remove()
    }

    const moveEditorBlockUp = (event: MouseEvent) => {
        let itemParentList = document.querySelector('.editor')
        let itemList = document.querySelectorAll('.editor-block-container')

        
    }
    
    onMount(() => {
        document.addEventListener('click', handleClick)
    })
    
    onCleanup(() => {
        document.removeEventListener('click', handleClick)
    })

    return (
        <div classList={{'editor-block-btn': !toggle()}}>
            <button onClick={isToggle} ref={btnRef!}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 256 256"><path fill="currentColor" d="M104 60a12 12 0 1 1-12-12a12 12 0 0 1 12 12Zm60 12a12 12 0 1 0-12-12a12 12 0 0 0 12 12Zm-72 44a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm-72 68a12 12 0 1 0 12 12a12 12 0 0 0-12-12Zm72 0a12 12 0 1 0 12 12a12 12 0 0 0-12-12Z"/></svg>
            </button>
            <Show
                when={toggle()}
                fallback={<></>}
            >
                <div class='editor-block-menu' ref={divRef!}>
                    <div><button onClick={deleteEditorBlock}>Delete</button></div>
                    <div><button>Move Up</button></div>
                    <div><button>Move Down</button></div>
                </div>
            </Show>
        </div>
    )
}

export default EditorBlockBtn;