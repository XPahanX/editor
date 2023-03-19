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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                </svg>
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