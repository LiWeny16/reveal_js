import React from "react"
// import Steps from "../Components/Main/Steps"
// import Md from "../Components/Main/Md"
// import List1 from "../Components/List/List1"
// import List2 from "../Components/List/List2"
// import ListAdd from "../Components/List/ListAdd"
import Section from "../Components/Main/Section"
import TextBox from "@Com/Main/Text/TextBox"
// import ShadowMd from "../Components/Main/Shadow/ShadowRootMD"
// import Pie from "../Components/DigitalShow/Pie"
// import Pic2 from "../Components/Main/Img/Pic2"
// import Pic from "../Components/Main/Img/Pic"
// import Code from "../Components/Main/Code/Code"
// import Table from "../Components/DigitalShow/Table"
//@ts-ignore
import MagicImg from "@Com/Main/Img/MagicImg"
// import BarChart from "../Components/DigitalShow/BarChart"
// import BarChart2 from "../Components/DigitalShow/BarChart2"
// import VideoPlayer from "../Components/Main/Video"
// import Directory from "../Components/Main/Directory"
// import Pie2 from "../Components/DigitalShow/Pie2"
// import LineChart from "../Components/DigitalShow/LineChart"
// import Directory2 from "../Components/Main/Directory2"
// console.log(p1_1);
// import {
//   LoadingOutlined,
//   SmileOutlined,
//   SolutionOutlined,
//   UserOutlined
// } from "@ant-design/icons"

// import v1 from "@Assets/video/1.mp4"

import p1_1 from "@Assets/img/1-1.jpg"
import p1_2_1 from "@Assets/img/1-2-1.jpg"
import { gsap } from "gsap"
import TB from "@Com/Main/Layout/TB"
import LR from "@Com/Main/Layout/LR"
import Box from "@Com/Main/Layout/Box"
import MyInput from "@Com/Antd/input"
// import p2_1 from "@Assets/img/2-1.jpg"

import p2_2_1 from "@Assets/img/2-2-1.jpg"
// import p2_2_2 from "@Assets/img/2-2-2.jpg"

export default function App() {
  let [tween, setTween] = React.useState<any>()
  React.useEffect(() => {
    let a = gsap.to(".box", {
      rotation: 360,
      x: 200,
      duration: 2,
      paused: true,
    })
    setTween(a)
  }, [])
  return (
    <>
      <Section>
        <TB space={[50]}>
          <Box style={{ marginTop: "8vh" }} ali="flex-start">
            你好
          </Box>
          <Box>
            <Box min={true} move={{ y: "-40vh" }}>
              你好
            </Box>
          </Box>
        </TB>
      </Section>
      <Section>
        <Box>
          <MagicImg
            className="box"
            settings={{ layout: { L1: 24 }, magic: false }}
            onClick={() => {
              tween.restart()
            }}
            data={[{ src: p1_1 }]}
          />
        </Box>
      </Section>
      <Section>
        <Box>
          <MagicImg
            settings={{ layout: { L2: [0, 0] }, magic: false }}
            data={[
              {
                src: p1_1,
                text: (
                  <TextBox >22323232323232323233</TextBox>
                ),
                width: "50vw",
              },
              {
                src: p1_2_1,
                text: (
                  <TextBox >23</TextBox>
                ),
                width: "50vw",
              },
            ]}
          />
        </Box>
      </Section>
      <Section>test</Section>
    </>
  )
}
