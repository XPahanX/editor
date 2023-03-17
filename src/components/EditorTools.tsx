import { ParentComponent } from 'solid-js';
import { render } from 'solid-js/web';
import EditorBlock from './EditorBlock';

import "../styles.css";

const EditorTools: ParentComponent = () => {

    const AddHeader = () => {
        render(() => 
            <EditorBlock><h1 contentEditable></h1></EditorBlock>,
            document.getElementById("editor") as HTMLElement)
    }

    const AddParagraph = () => {
        render(() => <EditorBlock><p contentEditable></p></EditorBlock>,
        document.getElementById("editor") as HTMLElement)
    }

    const AddCode = () => {
        render(() => <EditorBlock><code contentEditable></code></EditorBlock>,
        document.getElementById("editor") as HTMLElement)
    }

    return (
        <div class='editor-tools'>
            <div class=''><button onClick={AddHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="currentColor" d="M3 4h2v6h4V4h2v14H9v-6H5v6H3V4m11 14v-2h2V6.31l-2.5 1.44V5.44L16 4h2v12h2v2h-6Z"/></svg>
            </button></div>
            <div class=''><button onClick={AddParagraph}>
                
            </button></div>
            <div class=''><button onClick={AddCode}>
                
            </button></div>
        </div>
    )
}

export default EditorTools;