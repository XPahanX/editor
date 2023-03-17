import { ParentComponent } from 'solid-js';
import EditorBlockBtn from './EditorBlockBtn';

const EditorBlock: ParentComponent = (props) => {
    return (
        <div class='editor-block-container relative'> 
            <div class='editor-block' onClick={(e) => e.target}>
                <EditorBlockBtn/>
                {props.children}
            </div>
        </div>
    )
}

export default EditorBlock;