import React from "react"
import Steps from "./Components/Main/Steps"
import Md from "./Components/Main/Md"
import List1 from "./Components/List/List1"
import List2 from "./Components/List/List2"
import ListAdd from "./Components/List/ListAdd"
import Section from "./Components/Main/Section"
import Shadow from "./Components/Main/ShadowRoot"
// import Group from "./Components/GroupTransition/Trans";
// import Scode from "./Components/Main/Scode";

import Hot from "./Components/GroupTransition/Hot"
export default function App() {
  return (
    <>
      <Section trans="convex-out">
        <Md># 你好</Md>
      </Section>
      <Section trans="zoom-in fade-out" back="#FFDDEE">
        <Steps />
      </Section>
      <Section>
        <List1></List1>
      </Section>
      {/* <Section>
        <List2 t1="首先" t2="然后" t3="最后" t4="结束" size="1" sizeBig="4" />
      </Section> */}
      <Section>
        <Hot />
      </Section>
      <Section>
        <div className="SCODE">1+2</div>
      </Section>
      <Section>
        {/* <ListAdd back="black">
          <ul>
            <li className="NOLIST">WHO YOU ARE</li>
          </ul>
          <ul>
            <li className="NOLIST">你从哪里来 </li>
          </ul>
          <ul>
            <li className="NOLIST">去哪里 </li>
          </ul>
        </ListAdd> */}
        <ListAdd back="black">
          <ul><Md>+ "Markdown展示".P3</Md></ul>
          <ul><Md>$\gamma+1=3$</Md></ul>
          <ul><Md>$$\lambda+1=4$$</Md></ul>
        </ListAdd>
      </Section>
    </>
  )
}
