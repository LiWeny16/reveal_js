import React from "react"

export default function ListAdd(props:any) {
  const random = Math.round(Math.random() * 10000)
  function basicSection(content:any, props:any, random:any, key:any) {
    return (
      <>
        <section
          data-background={props.back ?? "white"}
          data-transition={props.trans}
          data-auto-animate
          data-auto-animate-id={random}
          data-background-image={props.backUrl ?? ""}
          className={props.className}
          key={key}
        >
          {content}
        </section>
      </>
    )
  }
  // console.log(props.children.length);
  return (
    <>
      {/* {basicSection(props.children[0], props, random)}
      {basicSection([props.children[0], props.children[1]], props, random)}
      {basicSection([props.children[0], props.children[1],props.children[2]], props, random)} */}
      {props.children.map((_: any, index: number) =>
        basicSection(props.children.slice(0, index + 1), props, random, index)
      )}
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
