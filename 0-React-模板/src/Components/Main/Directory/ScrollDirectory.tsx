import React from "react"
import { Carousel } from "@arco-design/web-react"
export default function ScrollDirectory(props: ScrollDirOptions) {
  if (Array.isArray(props.children)) {
    return (
      <>
        <Carousel
          animation="card"
          showArrow="never"
          indicatorPosition="outer"
          style={{ width: "100%", transform: "scale(1.2)" }}
        >
          {React.Children.map(props.children, (child, index) => {
            return (
              <div
                style={{ width: props.width, height: props.height }}
                key={index}
              >
                {child}
              </div>
            )
          })}
          {/* <div style={{ width: "50%" }}>{props.children[0]}</div>
          <div style={{ width: "50%" }}>{props.children[1]}</div>
          <div style={{ width: "50%" }}>{props.children[2]}</div> */}
        </Carousel>
      </>
    )
  } else {
    return <></>
  }
}
