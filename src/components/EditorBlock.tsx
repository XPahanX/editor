import { ParentComponent } from 'solid-js';
import EditorBlockBtn from './EditorBlockBtn';

const EditorBlock: ParentComponent = (props) => {
    return (
        <div class='relative'> 
            <div class='editor-block'>
                <EditorBlockBtn/>
                {props.children}
            </div>
        </div>
    )
}

export default EditorBlock;