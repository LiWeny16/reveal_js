import React from "react"

import Section from "../Components/Main/Section"
import TextBox from "@Com/Main/Text/TextBox"
import MagicImg from "@Com/Main/Img/MagicImg"

import p1_1 from "@Assets/img/FYP/2/pNUS.jpg"
import p1_2_1 from "@Assets/img/FYP/2/pNUS.jpg"
import v1 from "@Assets/video/FYP/2/face.mp4"

import TB from "@Com/Main/Layout/TB"
import LR from "@Com/Main/Layout/LR"
import Box from "@Com/Main/Layout/Box"
import ListAdd from "@Com/List/ListAdd"
import pNUS from "@Assets/img/FYP/2/pNUS.jpg"
import K210 from "@Assets/img/FYP/2/k210.png"
import arm from "@Assets/img/FYP/2/arm.jpg"
import autorun from "@Assets/img/FYP/2/autorun.jpg"
import maixbit from "@Assets/img/FYP/2/maixbit.png"
import airecog from "@Assets/img/FYP/2/airecog.jfif"
import iot from "@Assets/img/FYP/2/iot.jfif"
import aicar from "@Assets/img/FYP/3/aicar.png"

import Code from "@Com/Main/Code/Code"
import VideoPlayer from "@Com/Main/Video"
import { Checkbox } from "@arco-design/web-react"
import ArcoDir from "@Com/Main/Directory/arcoDirectory"
import { Carousel } from "@arco-design/web-react"
import ScrollDirectory from "@Com/Main/Directory/ScrollDirectory"
export default function App() {
  return (
    <>
      <Section>
        <ListAdd className="NOLIST" back="black">
          <li>
            <img
              style={{ transform: "translateY(20px)" }}
              width={"20%"}
              src={pNUS}
              alt=""
            />
            <TextBox fS={50} color="white">
              AI BASED REMOTE CONTROL CAR
            </TextBox>
          </li>
          <li>
            <hr style={{ width: "100%", background: "white" }} />
            <TextBox color="white" className="P3_5">
              P157
            </TextBox>
          </li>
        </ListAdd>
      </Section>
      <Section>
        <section>
          <h2>What have we done?</h2>
        </section>
        <section>
          <Checkbox style={{ transform: "scale(4)" }}>
            Finish basic movement of the car
          </Checkbox>
        </section>
        <section>
          <Checkbox style={{ transform: "scale(4)" }}>
            Use wifi to control the car
          </Checkbox>
        </section>
        <section>
          <h2>What are we going to do?</h2>
        </section>
        <Section back="black">
          <Box>
            <ScrollDirectory width={"60%"} height={"70vh"}>
              <MagicImg
                settings={{ magic: false }}
                data={[
                  {
                    src: arm,
                    text: <TextBox color="white">Add robot arm on car</TextBox>,
                    width: "35vw",
                  },
                ]}
              />
              <MagicImg
                settings={{ magic: false }}
                data={[
                  {
                    src: autorun,
                    text: <TextBox color="white">Tracking line</TextBox>,
                    width: "40vw",
                  },
                ]}
              />
              <MagicImg
                settings={{ magic: false }}
                data={[
                  {
                    src: airecog,
                    text: <TextBox color="white">Object detection </TextBox>,
                    width: "50vw",
                  },
                ]}
              />
              <MagicImg
                settings={{ magic: false }}
                data={[
                  {
                    src: iot,
                    text: <TextBox color="white">IOT user interface</TextBox>,
                    width: "50vw",
                  },
                ]}
              />
            </ScrollDirectory>
          </Box>
        </Section>
      </Section>

      <Section trans="convex">
        <section>
          <h1>What is K210?</h1>
        </section>
        <Section>
          <Box>
          <iframe
            height={"100%"}
            width="100%"
            style={{border:"none"}}
            src="https://www.canaan-creative.com/product/kendryteai"
          ></iframe>
          </Box>
        </Section>
        <section>
          <MagicImg
            settings={{ layout: { L1: 12 }, magic: true }}
            data={[
              {
                src: K210,
                text: <TextBox>K210</TextBox>,
                width: "50vw",
              },
              { src: maixbit, text: <TextBox>Maix Bit</TextBox> },
            ]}
          />
        </section>
      </Section>

      <Section>
        <section>
          <h1>Why is K210?</h1>
        </section>

        <Section>
          <Box>
          <Code
            className="NOSCROLL"
            word="Really Simple"
            line="1-10|10-23"
            code="
    from machine import Timer,PWM
    from board import board_info
    import time
    
    tim = Timer(Timer.TIMER0, Timer.CHANNEL0, mode=Timer.MODE_PWM)
    ch = PWM(tim, freq=500000, duty=50, pin=board_info.LED_G)
    duty=0
    dir = True
    while True:
        if dir:
            duty += 10
        else:
            duty -= 10
        if duty>100:
            duty = 100
            dir = False
        elif duty<0:
            duty = 0
            dir = True
        time.sleep(0.05)
        ch.duty(duty)

   "
          />
          </Box>
        </Section>
        <section>
          <TextBox fS={60}>Really powerful</TextBox>
        </section>
        <section>
          <VideoPlayer src={v1}></VideoPlayer>
        </section>
      </Section>

      
      <Section>
        <ListAdd className="NOLIST MARGIN-LEFT LEFT" back="black">
          <h2 data-id="box">OUR Team List</h2>
          <hr data-id="box" />
          <li data-id="box" className="P4 NOLIST">
            Li Wenyu, Pan Shijiao, Lv Xiongrui
          </li>
          {/* <li data-id="box" className="P4 NOLIST">
            <br />
            Shan Wenkai, Ding Dang, Zhang Yiyi, Zhao Zifang
          </li> */}
          <hr data-id="box" />
        </ListAdd>
      </Section>
    </>
  )
}
