import React from "react"
import Steps from "./Components/Main/Steps"
import Md from "./Components/Main/Md"
import List1 from "./Components/List/List1"
import List2 from "./Components/List/List2"
import ListAdd from "./Components/List/ListAdd"
import Section from "./Components/Main/Section"
import ShadowMd from "./Components/Main/ShadowRootMD"
import Pie from "./Components/DigitalShow/Pie"
import Pic2 from "./Components/Main/Pic2"
import Pic from "./Components/Main/Pic"
import Code from "./Components/Main/Code"
import Table from "./Components/DigitalShow/Table"
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from "@ant-design/icons"
export default function App() {
  return (
    <>
      <Section trans="convex-out">
        <ShadowMd
          className="FLEX JUS-CEN"
          style="*{font-size:4vh;}"
          md={`
|你好 |世界|
|--|--|
|Hello | world |`}
        ></ShadowMd>
      </Section>

      {/**@des 表格展示*/}
      <Section>
        <Table></Table>
      </Section>

      <Section trans="zoom" back="#FFDDEE">
        <Steps
          data={[
            {
              title: "Login",
              status: "finish",
              icon: <UserOutlined />
            },
            {
              title: "Verification",
              status: "finish",
              icon: <SolutionOutlined />
            },
            {
              title: "Pay",
              status: "process",
              icon: <LoadingOutlined />
            },
            {
              title: "Done",
              status: "wait",
              icon: <SmileOutlined />
            }
          ]}
        ></Steps>
      </Section>

      <Section>
        <Section>
          <Pic
            data={[
              "PIC1",
              "http://bigonion.cn/background/wallheaven.jfif",
              "PIC2",
              "http://bigonion.cn/background/wallheaven.jfif"
            ]}
          />
        </Section>
        <Section>
          <Pic2
            data={[
              "PIC1",
              "http://bigonion.cn/background/wallheaven.jfif",
              "PIC2",
              "http://bigonion.cn/background/wallheaven.jfif"
            ]}
          />
        </Section>
      </Section>

      {/* <Section>
        <List2 t1="首先" t2="然后" t3="最后" t4="结束" size="1" sizeBig="4" />
      </Section> */}
      <Section>
        <Pie />
      </Section>

      <Section LISTADD>
        <ListAdd className="NOLIST" back="black">
          <ul>
            <li>WHO YOU ARE</li>
          </ul>
          <ul>
            <li>你从哪里来 </li>
          </ul>
          <ul>
            <li>去哪里 </li>
          </ul>
        </ListAdd>
        <ListAdd className="NOLIST" back="white">
          <ul>
            <li>如来?</li>
          </ul>
          <ul>
            <li>它真来了吗？ </li>
          </ul>
          <ul>
            <li>如来 </li>
          </ul>
        </ListAdd>
        <ListAdd className="NOLIST MARGIN-LEFT LEFT" back="white">
          <li>如来?</li>
          <li>它真来了吗？ </li>
          <li>如来...</li>
        </ListAdd>
      </Section>
    </>
  )
}
