import React from "react"

export default function Code(props: any) {
  return (
    <>
      <div className="FLEX COL">
        <div>
          <p className="P3">{props.word ?? ""}</p>
        </div>
        <pre>
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
