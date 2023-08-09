import React from "react"
import maps from "../../maps-Animation/maps"

export default function Section(props: any) {
  // console.log(props)
  let animation = props.ani
  if(!animation){
    animation = "convex"
  }
  if (props.children) {
    //传送对象
    return (
      <>
        <section data-transition={animation}>{props.children}</section>
      </>
    )
  }
  if (props.html) {
    return (
      <>
        <section
          data-transition={animation}
          dangerouslySetInnerHTML={{ __html: props.html }}
        ></section>
      </>
    )
  }
}
