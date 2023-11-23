import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import Reveal from "reveal.js"
// import notes from "../plugin/notes/notes.esm.js"
import zoom from "../plugin/zoom/zoom.esm.js"
import hilight from "../plugin/highlight/highlight.esm.js"
import kit from "bigonion-kit/index.mjs"
import "./css/index.less"
import "@Plugin/clueParser/index.css"
// import "../dist/reset.css"
import "../dist/reveal.css"
import "../dist/theme/white.css"
import "@arco-design/web-react/dist/css/arco.css"
// 轮播图css
// import "../plugin/katex/katex.css"

let rootElement = document.getElementById("root")
const root = ReactDOM.createRoot(rootElement)
root.render(<App />)
kit
  .sleep(100)
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
      Reveal.on("slidechanged", (event) => {
        // event.previousSlide, event.currentSlide, event.indexh, event.indexv
        // console.log(event);
      })
      Reveal.configure({
        center: true,
        // controlsTutorial: false,
        // controlsBackArrows: 'hidden',
        // progress: false,
        keyboard: {
          13: "next", // go to the next slide when the ENTER key is pressed
          87: "up",
          68: "next",
          65: "left",
          83: "down",
          9:"null"
          // 32: null, // don't do anything when SPACE is pressed (i.e. disable a Reveal.js default binding)
        }
      })
      Reveal.initialize({
        hash: true,
        dependencies: [],
        slideNumber: false,
        // katex: {
        //   version: "latest",
        //   delimiters: [
        //     { left: "$$", right: "$$", display: true },
        //     { left: "$", right: "$", display: false },
        //     { left: "\\(", right: "\\)", display: false },
        //     { left: "\\[", right: "\\]", display: true }
        //   ]
        //   // ignoredTags: ["script", "noscript", "style", "textarea", "pre"],
        // },
        // Learn about plugins: https://Revealjs.com/plugins/
        plugins: [zoom, hilight]
      })
    })
  })
