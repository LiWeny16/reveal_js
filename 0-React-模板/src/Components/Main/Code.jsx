import React from "react"

export default function Code(props) {
  return (
    <>
      <pre>
        <code data-line-numbers="1-10|13-22|24-31">{props.data}</code>
      </pre>
    </>
  )
}
