import { createSignal, Component } from "solid-js";
// import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import Editor from "./components/Editor";
import EditorContainer from "./components/EditorContainer";
import EditorTools from "./components/EditorTools";


const App: Component = () => {
  return (
    <EditorContainer>
      <EditorTools/>
      <Editor/>
    </EditorContainer>
  )
}

export default App;
