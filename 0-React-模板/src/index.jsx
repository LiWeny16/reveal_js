import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Reveal from "reveal.js"
// import md from "../plugin/markdown/markdown.esm";
import notes from "../plugin/notes/notes.esm.js"
import zoom from "../plugin/zoom/zoom.esm.js"
import hilight from "../plugin/highlight/highlight.esm.js"
import kit from "bigonion-kit/index.mjs"
import "./css/index.css"
import "@Plugin/clueParser/index.css"
let rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)

// let rootElement1 = document.getElementById("root1");
// const root1 = ReactDOM.createRoot(rootElement1);
// root1.render(<App />);

kit
  .sleep(1)
  .then(() => {
    ;(() => {
      Array.from(document.querySelectorAll(".SCODE")).forEach((e) => {
        console.log(e.innerHTML)
        e.innerHTML = eval(e.innerHTML)
        e.style.opacity = "100"
      })
    })()
  })
  .then(() => {
    kit.sleep(50).then(() => {
      Reveal.configure({
        // center:false,
        // controlsTutorial: false,
        // controlsBackArrows: 'hidden',
        // progress: false,
        keyboard: {
          13: "next", // go to the next slide when the ENTER key is pressed
          87: "up",
          68: "next",
          65: "left",
          83: "down"
          // 32: null, // don't do anything when SPACE is pressed (i.e. disable a Reveal.js default binding)
        }
      })
      Reveal.initialize({
        hash: true,
        dependencies:[
        ],
        katex: {
          version: "latest",
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false },
            { left: "\\(", right: "\\)", display: false },
            { left: "\\[", right: "\\]", display: true }
          ]
          // ignoredTags: ["script", "noscript", "style", "textarea", "pre"],
        },
        // Learn about plugins: https://Revealjs.com/plugins/
        plugins: [zoom, hilight, notes]
      })
    })
  })
