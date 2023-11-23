import React from "react"
export default function TextBox(props: TextBoxOptions) {
  let _className = "TextBoxs "
  props.className ? (_className += props.className) : undefined

  // 私有属性
  let _style: React.CSSProperties = {
    wordBreak: props?.wrap == true ? "break-word" : undefined,
    color: props?.color ? props.color : "black",
    textAlign: props?.tA ? props.tA : "center",
    fontSize: props?.fS ?? undefined
  }
  // console.log(props.props)
  return (
    <>
      <div className={_className} style={{ ...props.style, ..._style }}>
        {props.children ?? undefined}
      </div>
    </>
  )
}
