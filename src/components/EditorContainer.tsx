import { ParentComponent } from 'solid-js';

const EditorContainer: ParentComponent = (props) => {
    return (
        <div class='editor-container'>
            {props.children}
        </div>
    )
}

export default EditorContainer;