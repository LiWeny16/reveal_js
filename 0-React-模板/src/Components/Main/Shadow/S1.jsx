import * as React from "react"
import * as ReactDOM from "react-dom"

export default function App(props) {
  return (
    <ShadowView>
      {/* <style>{`在这儿也可写内部样式`}</style>
      <div>这是一个测试</div> */}
      {props.children}
    </ShadowView>
  )
}
