import React, { useRef, useEffect, useState } from "react"
import { clueParerAll, latexParse2 } from "@Plugin/clueParser/clue.js"
// import katexCss from "@Plugin/katex/katex.css?raw"
// import clueCss from "clue-parser/index.css?raw"
// import hljsCss from "@Plugin/highlight/monokai.css?raw"
// import githubMdCss from "../../css/githubMdCss.css?raw"

const CustomButton = (props: any) => {
  let _style: React.CSSProperties = {
    width: props.width ?? "",
    height: props.height ?? "",
  }
  // console.log(props);
  const [md, setMd] = useState<any>(null)
  useEffect(() => {
    clueParerAll(`${props.data ?? props.children} `).then((e:any) => {
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
      <div
        style={{ ..._style }}
        data-id="23"
        dangerouslySetInnerHTML={{ __html: md }}
      ></div>
    </>
  )
}

export default CustomButton
