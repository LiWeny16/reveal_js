import React, { useRef, useEffect } from "react"
import { clueParerAll, latexParse2 } from "@Plugin/clueParser/clue.js"
import katexCss from "@Plugin/katex/katex.css?raw"
import clueCss from "@Plugin/clueParser/index.css?raw"
import hljsCss from "@Plugin/highlight/monokai.css?raw"
import githubMdCss from "../../css/githubMdCss.css?raw"

const CustomButton = (md) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current

    if (button) {
      const shadow = button.attachShadow({ mode: "open" }) // 创建并附加 Shadow DOM

      const style = document.createElement("style")
      const styleCustom = document.createElement("style")

      style.textContent = katexCss + clueCss + hljsCss + githubMdCss
      styleCustom.textContent = ``
      const shadowElement = document.createElement("div")
      clueParerAll(`${md.md} `).then((e) => {
        shadowElement.innerHTML = e
      })
      shadowElement.className="markdown-body"
      //   shadowElement.textContent = 'Click me'; // 按钮显示的文本

      shadow.appendChild(style)
      shadow.appendChild(styleCustom)
      shadow.appendChild(shadowElement)
    }
  }, [])

  return <div ref={buttonRef}></div>
}

export default CustomButton
