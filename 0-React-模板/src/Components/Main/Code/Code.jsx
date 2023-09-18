import React from "react"

export default function Code(props) {
  return (
    <>
      <div className="FLEX COL">
        <div>
          <p className="P3">{props.word??""}</p>
        </div>
        <pre className="NOSCROLLTYPE">
          <code data-line-numbers={props.line} data-noescape >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{ __html: props.code }}
            ></script>
          </code>
        </pre>
      </div>
    </>
  )
}
