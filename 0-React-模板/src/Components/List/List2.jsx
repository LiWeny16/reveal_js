import React from "react";

export default function List2(textObj) {
  let size = textObj.size;
  let sizeBig = textObj.sizeBig;
  const style = { color: "pink", fontSize: size + "vh" };
  const style2 = { fontSize: sizeBig + "vh" };
  return (
    <>
        <section data-auto-animate>
          <h data-id="box" style={style2}>
            {textObj.t1}
          </h>
          <h data-id="box" style={style}>
            {textObj.t2}
          </h>
          <h data-id="box" style={style}>
            {textObj.t3}
          </h>
          <h data-id="box" style={style}>
            {textObj.t4}
          </h>
        </section>
        <section data-auto-animate>
          <h data-id="box" style={style}>
            {textObj.t1}
          </h>
          <h data-id="box">{textObj.t2}</h>
          <h data-id="box" style={style}>
            {textObj.t3}
          </h>
          <h data-id="box" style={style}>
            {textObj.t4}
          </h>
        </section>
        <section data-auto-animate>
          <h data-id="box" style={style}>
            {textObj.t1}
          </h>
          <h data-id="box" style={style}>
            {textObj.t2}
          </h>
          <h data-id="box">{textObj.t3}</h>
          <h data-id="box" style={style}>
            {textObj.t4}
          </h>
        </section>
        <section data-auto-animate>
          <h data-id="box" style={style}>
            {textObj.t1}
          </h>
          <h data-id="box" style={style}>
            {textObj.t2}
          </h>
          <h data-id="box" style={style}>
            {textObj.t3}
          </h>
          <h data-id="box">{textObj.t4}</h>
        </section>
    </>
  );
}
