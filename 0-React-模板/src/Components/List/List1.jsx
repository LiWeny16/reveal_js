import React, { Component } from "react"

export default function List1() {
  return (
    <>
      <section data-auto-animate>
        <p data-id="box">Reveal.js的优点</p>
        <p data-id="box" style={style}>
          界面优美
        </p>
        <p data-id="box" style={style}>
          运行简单
        </p>
        <p data-id="box" style={style}>
          功能强大
        </p>
      </section>
      <section data-auto-animate>
        <p data-id="box" style={style}>
          Reveal.js的优点
        </p>
        <p data-id="box">界面优美</p>
        <p data-id="box" style={style}>
          运行简单
        </p>
        <p data-id="box" style={style}>
          功能强大
        </p>
      </section>
      <section data-auto-animate>
        <p data-id="box" style={style}>
          Reveal.js的优点
        </p>
        <p data-id="box" style={style}>
          界面优美
        </p>
        <p data-id="box">运行简单</p>
        <p data-id="box" style={style}>
          功能强大
        </p>
      </section>
      <section data-auto-animate>
        <p data-id="box" style={style}>
          Reveal.js的优点
        </p>
        <p data-id="box" style={style}>
          界面优美
        </p>
        <p data-id="box" style={style}>
          运行简单
        </p>
        <p data-id="box">功能强大</p>
      </section>
    </>
  )
}

const style = { color: "pink", fontSize: 4 + "px" }
