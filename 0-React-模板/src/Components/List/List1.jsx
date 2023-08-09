import React, { Component } from "react";

export default class List1 extends Component {
  render() {
    return (
      <>
        <section data-transition="convex">
          <section data-auto-animate>
            <p data-id="box">Reveal.js的优点</p>
            <p data-id="box" style={style}>
              界面优美
            </p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              运行简单
            </p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              功能强大
            </p>
          </section>
          <section data-auto-animate>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              Reveal.js的优点
            </p>
            <p data-id="box">界面优美</p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              运行简单
            </p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              功能强大
            </p>
          </section>
          <section data-auto-animate>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              Reveal.js的优点
            </p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              界面优美
            </p>
            <p data-id="box">运行简单</p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              功能强大
            </p>
          </section>
          <section data-auto-animate>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              Reveal.js的优点
            </p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              界面优美
            </p>
            <p data-id="box" style={{ color: "pink", fontSize: 4 + "px" }}>
              运行简单
            </p>
            <p data-id="box">功能强大</p>
          </section>
        </section>
      </>
    );
  }
}

const style ={ color: "pink", fontSize: 4 + "px" }