import React from "react"

export default function ListAdd(props) {
  const random = Math.round(Math.random() * 10000)
  function basicSection(content, props, random) {
    let _content = content
    return (
      <>
        <section
          data-background={props.back ?? "white"}
          data-auto-animate
          data-auto-animate-id={random}
        >
          {_content}
        </section>
      </>
    )
  }
  // console.log(props.children.length);
  return (
    <>
      {basicSection(props.children[0], props, random)}
      {basicSection([props.children[0], props.children[1]], props, random)}
      {/* <section
        data-background={props.back ?? "white"}
        data-auto-animate
        data-auto-animate-id={random}
      >
        {props.children[0]}
        {props.children[1]}
      </section>
      <section
        data-background={props.back ?? "white"}
        data-auto-animate
        data-auto-animate-id={random}
      >
        {props.children[0]}
        {props.children[1]}
        {props.children[2]}
      </section> */}
    </>
  )
}
