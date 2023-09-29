import React, { useState } from "react";
import {
  MdOutlineContentCopy,
  MdOutlineDeleteOutline,
  MdShare,
} from "react-icons/md";
import Editor from "@monaco-editor/react";
import { useRef } from "react";
import Sk from "skulpt";
import { builtinRead } from "skulpt";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import styles from "../../../styles/Editor.module.css";
import Ripples from "react-ripples";
import { Button, Fab } from "@mui/material";
// import { jsPython } from "jspython-interpreter";
function ContentPlayground({data}) {
  const [runLoading, setRunLoading] = useState(false);
  const [flag,setFlag]=useState(false);
  const codeRef = useRef();
  const outputRef = useRef();
  
  function handleEditorDidMount(editor, monaco) {
    codeRef.current = editor;
  }

  const handleEditorCopy = () => {
    const prog = codeRef.current.getValue();
    if (prog.length > 1) {
      navigator.clipboard.writeText(prog);
      toast.success("Copied to clipboard", { duration: 1500 });
    } else {
      toast.error("No content to copy", { duration: 1300 });
    }
  };
  const handleEditorDelete = () => {
    codeRef.current.setValue("");
  };

  const handleOutputCopy = () => {
    const prog = outputRef.current.innerHTML;
    if (prog.length > 1) {
      navigator.clipboard.writeText(prog);
      toast.success("Copied to clipboard", { duration: 1500 });
    } else {
      toast.error("No content to copy", { duration: 1300 });
    }
  };

  const handleOutputDelete = () => {
    outputRef.current.innerHTML = "output cleared";
  };

  const setEditorTheme = async (monaco) => {
    monaco.editor.defineTheme("onedark", {
      base: "vs-dark",
      inherit: true,
      rules: [
        {
          token: "comment",
          foreground: "#5d7988",
          fontStyle: "italic",
        },
        { token: "constant", foreground: "#e06c75" },
      ],
      colors: {
        "editor.background": "#1A1E24",
      },
    });
  };

  function outf(text) {
    var mypre = outputRef.current;
    mypre.innerHTML += text.replace(/\n/g, "<br/>");
  }
  function builtinRead(x) {
    if (
      Sk.builtinFiles === undefined ||
      Sk.builtinFiles["files"][x] === undefined
    )
      throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
  }

  function runit() {
    setRunLoading(true);
    setFlag(true)
    var prog = codeRef.current.getValue();
    console.log(prog);
    var mypre = outputRef.current;
    console.log(mypre)
    mypre.innerHTML = "";
    Sk.canvas = "skulpt-canvas";
    Sk.pre = "skulpt-output";
    Sk.configure({ output: outf, read: builtinRead });
    (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = "mycanvas";
    var myPromise = Sk.misceval.asyncToPromise(function () {
      return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(
      function (mod) {
        console.log("success");

        setRunLoading(false);
      },
      function (err) {
        console.log(err.toString());
        outf('<span class="text-danger">' + err.toString() + "</span>");
        setRunLoading(false);
      }
    );
  }
  useEffect(() => {
    // Calculate the height based on the number of lines in the editor
    const editor = codeRef.current;
    const codeGround = document.getElementById("totalheight");
    
    if (editor && codeGround) {
      const lineCount = editor.getModel().getLineCount();
      const lineHeight = 19; // Replace with the actual line height from your CSS
      const editorHeight = `${lineCount * lineHeight}px`;
      codeGround.style.height = editorHeight;
    }
  }, [data]);

  return (
    <>
      {Sk ? (
        <div className={`bg_primary mb-10 mt-5`}>
            <div style={{height:'100%',width:'100%',marginBottom:'20px'}}>
              <div className={`${styles.content_code_ground}`} style={{width:"100%",borderRadius:'8px'}}>
                <div className={`${styles.editor_options} px-md-5 px-2  mx-0`}>
                  <div className={`text-light pe-none ${styles.code_title}`}>
                    Input
                  </div>
                  <div className="d-flex">
                    <button
                      className={`${styles.run_btn_2}`}
                      role="button"
                      // disabled={runLoading}
                      onClick={runit}
                    >
                      {runLoading ? "..." : "Run"}
                    </button>
                    
                  </div>
                  <p className={`d-flex justify-content-end m-0`}>
                    <Fab
                      style={{ backgroundColor: "transparent", zIndex: 0 }}
                      className="mx-1"
                      size="small"
                      aria-label="copy"
                    >
                      <MdOutlineContentCopy
                        role="button"
                        className="text-light mx-2 my-0 rounded"
                        onClick={handleEditorCopy}
                      />
                    </Fab>
                    <Fab
                      style={{ backgroundColor: "transparent", zIndex: 0 }}
                      className="mx-1"
                      size="small"
                      aria-label="copy"
                    >
                      <MdOutlineDeleteOutline
                        role="button"
                        className="text-light mx-2 my-0 fs-20"
                        onClick={handleEditorDelete}
                      />
                    </Fab>
                  </p>
                  
                </div>
                <div className="editor-styles">
                  <Editor
                    beforeMount={setEditorTheme}
                    width="100%"
                    height="calc(100% - 70px)"
                    theme="onedark"
                    defaultLanguage="python"
                    defaultValue={data}
                    loading={<LoadingComponent/>}
                    options={{
                      fontFamily:
                        "Hack, 'Fira Code', Consolas, Menlo, Monaco, 'Andale Mono', 'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L', 'Courier New', Courier, monospace",
                      scrollBeyondLastLine: false,
                      scrollBeyondLastColumn: false,
                      scrollbar: {
                        alwaysConsumeMouseWheel: false,
                      },
                    }}
                    onMount={handleEditorDidMount}
                  />
                </div>
              </div>
            </div>
          {/* </div> */}
          {flag ?
            <div className={`${styles.output_container}`} style={{width:'100%',height:"25vh",borderRadius:'8px'}}>
                <div className={`${styles.editor_options} px-5`}>
                    <p className={`text-light pe-none m-0`}>Output</p>
                    <p className={`m-0`}>
                    {/* <MdShare role="button" className="text-light mx-2 my-0" /> */}
                    <Fab
                        style={{ backgroundColor: "transparent", zIndex: 0 }}
                        className="mx-2"
                        size="small"
                        aria-label="copy"
                    >
                        <MdOutlineContentCopy
                        role="button"
                        className="text-light"
                        onClick={handleOutputCopy}
                        />
                    </Fab>
                    <Fab
                        style={{ backgroundColor: "transparent", zIndex: 0 }}
                        className="ml-2"
                        size="small"
                        aria-label="copy"
                    >
                        <MdOutlineDeleteOutline
                        role="button"
                        className="text-light mx-2 my-0 fs-20"
                        onClick={handleOutputDelete}
                        />
                    </Fab>
                    </p>
                </div>
                <div
                    ref={outputRef}
                    className={`${styles.output} px-5 fs-14`}
                    style={{
                    fontFamily: "Consolas,monaco,monospace",
                    fontSize: ".875rem",
                    }}
                >
                    
                </div>
            </div>:
            <>
              <div
                    ref={outputRef}
                    className={`${styles.output} px-5 fs-14`}
                    style={{
                    fontFamily: "Consolas,monaco,monospace",
                    fontSize: ".875rem",
                    }}
                >
                    
                </div>
            </>  
          }
        </div>
        
      ) : null}
    </>
  );
}

export default ContentPlayground;

const LoadingComponent = () => (
  <div style={{ color: '#fff' }}>Loading...</div> 
);
