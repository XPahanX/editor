import { ParentComponent } from 'solid-js';

const Editor: ParentComponent = (props) => {
    return (
        <div id='editor' class='editor'>
            {props.children}
        </div>
    )
}

export default Editor;