import React, { useRef, useEffect, useState } from "react"
import { clueParerAll, latexParse2 } from "@Plugin/clueParser/clue.js"
import katexCss from "@Plugin/katex/katex.css?raw"
import clueCss from "clue-parser/index.css?raw"
import hljsCss from "@Plugin/highlight/monokai.css?raw"
import githubMdCss from "../../css/githubMdCss.css?raw"


const CustomButton = (props) => {
  // console.log(props);
  const [md, setMd] = useState(null)
  useEffect(() => {
    clueParerAll(`${props.md ?? props.children} `).then((e) => {
      setMd(e)
    })
  }, [])

  // if(props.children){
  //   return(<>
  //   {props.children}
  //   </>)
  // }
  return (
    <>
      <div data-id="23" dangerouslySetInnerHTML={{ __html: md }}></div>
    </>
  )
}

export default CustomButton
