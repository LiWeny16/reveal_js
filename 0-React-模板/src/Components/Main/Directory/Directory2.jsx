import React from "react"
import Section from "../Section"
import p1_1 from "@Assets/img/1-1.jpg"
import p1_2 from "@Assets/img/1-2.jfif"
import p1_3 from "@Assets/img/1-3.png"

import p4_3_4 from "@Assets/img/4-3-4.jpg"

import p5_1 from "@Assets/img/5-1.jpg"
import p5_2 from "@Assets/img/5-2.jpg"
import p5_3 from "@Assets/img/5-3.jpg"
import p5_4 from "@Assets/img/5-4.jpg"
import p5_5 from "@Assets/img/5-5.jpg"
export default function Directory2() {
  return (
    <>
      <Section className="WHITE" back={p1_1}>
        <div className="GLASS">
          <h3>1. Background</h3>
        </div>
      </Section>
      <Section className="WHITE" back={p4_3_4}>
        <div className="GLASS">
          <h3>2. Methodology</h3>
        </div>
      </Section>
      <Section className="WHITE" back={p5_2}>
        <div className="GLASS">
          <h3>3. Interview</h3>
        </div>
      </Section>
      <Section className="WHITE" back={p5_3}>
        <div className="GLASS">
          <h3>4. Data Analysis</h3>
        </div>
      </Section>
      <Section className="WHITE" back={p1_3}>
        <div className="GLASS">
          <h3>5. Conclusion & Solution</h3>
        </div>
      </Section>
    </>
  )
}
