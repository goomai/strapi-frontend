import React from "react";
import styles from "../styles/Editor.module.css";
function EditorSeoContent() {
  return (
    <div>
      <div className={`bg_secondary`}>
        <div className="py-5 container-sm">
          <h1 className="text-dark mt-4">
            Best Python Playground and Online Python Compiler
          </h1>
          <div className="pt-3 text-dark para">
            <p className="mt-0">
              This Python Playground and Online Python Compiler is one of the
              simplest, most lightweight, and fastest ones out there. Code runs
              on the browser itself helps in giving the results almost
              instantly.
            </p>
            <p className="mt-0 mb-2">There are three ways you can use this.</p>
            <ul>
              <li>Write the code directly in the Python Playground</li>
              <li>Paste the code that you have copied here</li>
              <li>
                Use the examples section to directly learn and run the example
                code
              </li>
            </ul>
            <p className="mt-0 mb-2 ">
              Apart from this, it has the following functionalities
            </p>
            <ul>
              <li>You can quickly copy the code by clicking the copy button</li>
              <li>This Python Playground tool works with Python 3</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`bg_primary`}>
        <div className="py-5 container-sm">
          <h2 className="text-dark mt-4">
            Online Python IDE and Online Python Editor
          </h2>
          <div className="pt-3 text-dark para">
            <p className="mt-0">
              This is not just an online compiler for python but a complete
              playground for python. It has the full functionalities of an
              online python editor such as multi-color display, line number
              display, editing, etc. Please try it out and give feedback.
            </p>
            <p className="mt-0">
              This tool is not a full-fledged IDE such as VSCode or Eclipse but
              it has core important features such as an editor, compiler,
              importer, etc. .
            </p>
          </div>
          <h2 className="text-dark mt-9 pb-3">
            Why Python Playground and Online Python Compiler
          </h2>

          <table className="table table-bordered para">
            <tbody>
              <tr>
                <td>⚡ Instant</td>
                <td>Run the code instantly</td>
              </tr>

              <tr>
                <td>🔁 Check Limits </td>
                <td>Unlimited</td>
              </tr>
              <tr>
                <td>📃 Examples</td>
                <td>Unlimited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={`bg_secondary`}>
        <div className="py-5 container-sm">
          <h2 className="text-dark mt-4">Python Examples</h2>
          <div className="pt-3 text-dark para">
            <p className="mt-0">
              A lot of important python examples have been built into the
              compiler itself. Click on the examples link at the top of the
              python playground and online python compiler to quickly see all
              the examples organized by categories. When you click on any of the
              examples, that example will automatically be copied into the
              Playground/Compiler and you can choose to edit and run the
              examples.
            </p>
            <p className="mt-0 mb-2">
              Below is the list of python examples that are included.{" "}
            </p>
            <ul>
              <li>Sorting - Merge Sort, Bubble Sort </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`bg_primary`}>
        <div className="py-5 container-sm">
          <h2 className="text-dark mt-4">Embed Python Compiler</h2>
          <div className="pt-3 text-dark para">
            <p className="mt-0">
              You will soon be able to embed the python compiler in your own
              blogs or any HTML pages with a single line of code. Since the
              compilation happens on the browser, python code runs almost
              instantly.
            </p>
            <p className="mt-0">
              Users can use this python playground to compile and run the
              examples in your python programming article without going out of
              the website/page. This will increase the engagement of your
              website with your audience.
            </p>
          </div>
        </div>
      </div>
      <div className={`bg_secondary`}>
        <div className="py-5 container-sm">
          <h2 className="text-dark mt-4">About Python</h2>
          <div className="pt-3 text-dark para">
            <p className="mt-0">
              Python has become the most popular programming language after
              javascript. It is now more used programming language than the
              other popular programming language such as Java, C# etc.
            </p>
            <p className="mt-0">
              Python is very easy to learn for beginners and is also used in a
              variety of computer science applications. It is used in building
              large-scale backend applications with frameworks such as Django.
              It is the defacto programming language to build most of the AI &
              ML, and Deep learning applications. It is also the go-to
              programming language for Data Science and Data Analytics. Python
              is also used as a scripting language to build various tools.
            </p>
            <p className="mt-0">
              There have been attempts even to use python to build frontend
              applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorSeoContent;
