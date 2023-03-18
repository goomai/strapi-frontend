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

// import { jsPython } from "jspython-interpreter";
function Playground({ styles }) {
  const [runLoading, setRunLoading] = useState(false);
  const codeRef = useRef();
  const outputRef = useRef();
  function handleEditorDidMount(editor, monaco) {
    codeRef.current = editor;
  }
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
    mypre.innerHTML = mypre.innerHTML + text;
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
  useEffect(() => {
    setRunLoading(true);

    Sk.canvas = "skulpt-canvas";
    Sk.pre = "skulpt-output";
    Sk.configure({
      output: (text) => (outputRef.current.innerHTML = "> " + text),
    });
    const myPromise = Sk.misceval.asyncToPromise(() =>
      Sk.importMainWithBody(
        "<stdin>",
        false,
        "print('hello there welcome to Goom.AI')"
      )
    );
    myPromise.then(
      (mod) => {
        console.log("success", mod);
        setRunLoading(false);
      },
      (err) => {
        console.log("error", err);
        outf(<span className="text-danger">err</span>);
        setRunLoading(false);
      }
    );
  }, []);
  return (
    <>
      <div className={`bg_primary mb-10 mt-5`}>
        <div className={styles.container}>
          <div className={`${styles.editor_container}`}>
            <div className={`${styles.code_ground}`}>
              <div
                className={`${styles.editor_options} px-md-5 px-2 pt-3 mx-0`}
              >
                <div className={`text-light pe-none ${styles.code_title}`}>
                  Input
                </div>
                <p className={`d-flex`}>
                  <MdOutlineContentCopy
                    role="button"
                    className="text-light m-1 m-md-0 my-0"
                  />
                  <MdOutlineDeleteOutline
                    role="button"
                    className="text-light m-1 m-md-0 my-0 fs-20 "
                  />
                </p>
                {/* <p className={`col-md-1`}></p> */}
                <p className={`text-light`} role="button">
                  Examples
                </p>
                <div className="d-flex">
                  <button
                    className={` ${styles.run_btn}`}
                    role="button"
                    disabled={runLoading}
                    onClick={runit}
                  >
                    {runLoading ? "..." : "Run"}
                  </button>
                  <div className={` ${styles.run_btn_2}`} role="button">
                    Run Visualizer
                  </div>
                </div>
              </div>
              <Editor
                beforeMount={setEditorTheme}
                width="100%"
                height="calc(100% - 70px)"
                theme="onedark"
                defaultLanguage="python"
                defaultValue="# here there. welcome to Goom.AI"
                options={{
                  scrollBeyondLastLine: false,
                  scrollBeyondLastColumn: false,
                  scrollbar: {
                    alwaysConsumeMouseWheel: false,
                  },
                }}
                onMount={handleEditorDidMount}
              />
            </div>

            <div className={`${styles.output_container}`}>
              <div className={`${styles.editor_options} px-5 pt-3 mx-0`}>
                <p className={`text-light pe-none`}>Visualised Output</p>
                <p className={`d-flex justify-content-end`}>
                  <MdShare role="button" className="text-light mx-2 my-0" />
                  <MdOutlineContentCopy
                    role="button"
                    className="text-light mx-2 my-0"
                  />
                  <MdOutlineDeleteOutline
                    role="button"
                    className="text-light mx-2 my-0 fs-20"
                  />
                </p>
              </div>
              <div
                ref={outputRef}
                className={`${styles.output} px-5 fs-14`}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Playground;
