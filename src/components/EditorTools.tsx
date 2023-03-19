import { ParentComponent } from 'solid-js';
import { render } from 'solid-js/web';
import EditorBlock from './EditorBlock';

import "../styles.css";

const EditorTools: ParentComponent = () => {

    const AddHeader = () => {
        render(() => 
            <EditorBlock>
                <h1 contentEditable aria-placeholder='Header 1'></h1>
            </EditorBlock>,
            document.getElementById("editor") as HTMLElement)
    }

    const AddParagraph = () => {
        render(() => 
            <EditorBlock>
                <p contentEditable aria-placeholder='new paragraph'></p>
            </EditorBlock>,
            document.getElementById("editor") as HTMLElement)
    }

    const AddCode = () => {
        render(() => 
            <EditorBlock>
                <code contentEditable aria-placeholder='code block'></code>
            </EditorBlock>,
            document.getElementById("editor") as HTMLElement)
    }

    // есть возможность улучшить
    // можно удалить <li></li> в приложении
    const AddList = () => {
        render(() => 
            <EditorBlock>
                <ul contentEditable>
                    <li></li>
                </ul>
            </EditorBlock>,
            document.getElementById("editor") as HTMLElement)
    }

    return (
        <div class='editor-tools'>
            <div class=''><button onClick={AddHeader}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m11 14v-2h2V6.31l-2.5 1.44V5.44L16 4h2v12h2v2h-6Z"/></svg>
            </button></div>
            <div class=''><button onClick={AddParagraph}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M9 20v-6q-2.075 0-3.537-1.463Q4 11.075 4 9t1.463-3.537Q6.925 4 9 4h9v2h-2v14h-2V6h-3v14Z"/></svg>
            </button></div>
            <div class=''><button onClick={AddCode}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
            </button></div>
            <div class=''><button onClick={AddList}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
            </button></div>
        </div>
    )
}

export default EditorTools;