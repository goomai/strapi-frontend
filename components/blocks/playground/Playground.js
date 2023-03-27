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
function Playground() {
  const [runLoading, setRunLoading] = useState(false);
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

  // Here's everything you need to run a python program in skulpt
  // grab the code from your textarea
  // get a reference to your pre element for output
  // configure the output function
  // call Sk.importMainWithBody()
  function runit() {
    setRunLoading(true);
    var prog = codeRef.current.getValue();
    console.log(prog);
    var mypre = outputRef.current;
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

  //   const runIt = () => {
  //     var prog = codeRef.current.getValue();
  //     console.log(prog);
  //     // const interpreter = jsPython();

  //     // interpreter.evaluate(prog.toString()).then((res) => {
  //     //   consoe.log(res); // 5
  //     //   outf(res);
  //     // });
  //   };

  return (
    <>
      {Sk ? (
        <div className={`bg_primary mb-10 mt-5`}>
          <div className="container-sm">
            <div className={`${styles.editor_container}`}>
              <div className={`${styles.code_ground}`}>
                <div className={`${styles.editor_options} px-md-5 px-2  mx-0`}>
                  <div className={`text-light pe-none ${styles.code_title}`}>
                    Input
                  </div>

                  <p className={`d-flex justify-content-end m-0`}>
                    {/* <MdShare role="button" className="text-light mx-2 my-0" /> */}
                    <Fab
                      style={{ backgroundColor: "transparent" }}
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
                      style={{ backgroundColor: "transparent" }}
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
                  {/* <p className={`col-md-1`}></p> */}
                  <p className={`text-light m-0`} role="button">
                    Examples
                  </p>
                  <div className="d-flex">
                    <button
                      className={`${styles.run_btn_2}`}
                      role="button"
                      // disabled={runLoading}
                      onClick={runit}
                    >
                      {runLoading ? "..." : "Run"}
                    </button>
                    {/* <div className={` ${styles.run_btn_2}`} role="button">
                      Run Visualizer
                    </div> */}
                  </div>
                </div>
                <div className="editor-styles">
                  <Editor
                    beforeMount={setEditorTheme}
                    width="100%"
                    height="calc(100% - 70px)"
                    theme="onedark"
                    defaultLanguage="python"
                    defaultValue="## Paste the code here"
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

              <div className={`${styles.output_container}`}>
                <div className={`${styles.editor_options} px-5`}>
                  <p className={`text-light pe-none m-0`}>Output</p>
                  <p className={`m-0`}>
                    {/* <MdShare role="button" className="text-light mx-2 my-0" /> */}
                    <Fab
                      style={{ backgroundColor: "transparent" }}
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
                      style={{ backgroundColor: "transparent" }}
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
                  # Output will be displayed here
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Playground;
