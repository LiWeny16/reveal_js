import React from "react"

export default function Code(props: any) {
  let _style: React.CSSProperties = {
    overflow: props.scroll ?? "hidden",
    width: props.width ?? "100%",
    height: props.height ?? "100%",
  }
  return (
    <>
      <div style={{ ..._style }} className="FLEX COL">
        <pre style={{..._style}}>
          <code data-line-numbers={props.line} data-noescape>
            {/* <script
              type="text/template"
              dangerouslySetInnerHTML={{ __html: props.code }}
            ></script> */}
            {props.code}
            {/* <div dangerouslySetInnerHTML={{__html:props.code}}></div> */}
          </code>
        </pre>
      </div>
    </>
  )
}
