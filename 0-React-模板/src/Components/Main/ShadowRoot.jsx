import React, { useRef, useEffect } from "react"
import { clueParerAll, latexParse2 } from "@Plugin/clueParser/clue.js"
import katexCss from "@Plugin/katex/katex.css?raw"
import clueCss from "clue-parser/index.css?raw"
const CustomButton = (md) => {
  const buttonRef = useRef(null)

  useEffect(() => {
    const button = buttonRef.current

    if (button) {
      const shadow = button.attachShadow({ mode: "open" }) // 创建并附加 Shadow DOM

      const style = document.createElement("style")
      const styleCustom = document.createElement("style")

      style.textContent = katexCss + clueCss
      styleCustom.textContent = ``
      const buttonElement = document.createElement("p")
      clueParerAll(`${md.md} `).then((e) => {
        buttonElement.innerHTML = e
      })
      //   buttonElement.textContent = 'Click me'; // 按钮显示的文本

      shadow.appendChild(style)
      shadow.appendChild(styleCustom)
      shadow.appendChild(buttonElement)
    }
  }, [])

  return <div ref={buttonRef}></div>
}

export default CustomButton
