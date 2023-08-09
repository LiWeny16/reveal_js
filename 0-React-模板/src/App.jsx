import React from "react"
import Steps from "./Components/Main/Steps"
import Md from "./Components/Main/Md"
import List1 from "./Components/List/List1"
import List2 from "./Components/List/List2"
import Section from "./Components/Main/Section"
import Shadow from "./Components/Main/ShadowRoot"
// import Group from "./Components/GroupTransition/Trans";
// import Scode from "./Components/Main/Scode";

import Hot from "./Components/GroupTransition/Hot"
export default function App() {
  return (
    <>
      <Section>
        <Md
          md={`
"你好".P2 

# 你好  

\`\`\`js
printf("2323")
\`\`\`
`}
        />
      </Section>
      <Section ani="fadeIn">
        <input type="text" />
      </Section>

      <Section>
        <Steps />
      </Section>
      <Section>
        <List2 t1="首先" t2="然后" t3="最后" t4="结束" size="1" sizeBig="4" />
      </Section>
      <Section>
        <Hot />
      </Section>
      <Section>
        <div className="SCODE">1+2</div>
      </Section>
      <Section>
        <div id="box">23</div>
      </Section>
    </>
  )
}
