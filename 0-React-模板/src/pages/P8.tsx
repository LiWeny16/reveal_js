import React, { useState } from "react"

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
import mega2560 from "@Assets/img/FYP/3/mega.png"
import mega2560_pin from "@Assets/img/FYP/3/mega2.png"
import L298N from "@Assets/img/FYP/3/L298N.jpg"
import L298N_1 from "@Assets/img/FYP/3/L298N_1.png"
import L298N_2 from "@Assets/img/FYP/3/L298N_2.png"
import esp8266 from "@Assets/img/FYP/3/esp8266.png"
import LM2596 from "@Assets/img/FYP/3/LM2596.png"
import layer from "@Assets/img/FYP/3/layer.png"
// import 2 from "@Assets/img/FYP/3/"
import motor from "@Assets/img/FYP/3/motor.png"
import encoder from "@Assets/img/FYP/3/encoder.png"

import Code from "@Com/Main/Code/Code"
import VideoPlayer from "@Com/Main/Video"
// import Table from "@Com/DigitalShow/Table"
import { Checkbox } from "@arco-design/web-react"
import ArcoDir from "@Com/Main/Directory/arcoDirectory"
import { Carousel } from "@arco-design/web-react"
import ScrollDirectory from "@Com/Main/Directory/ScrollDirectory"
import Md from "@Com/Main/Md"
// import { useTranslation } from "react-i18next"
export default function App() {
  return (
    <>
      {/* <button onClick={() => changeLanguage("en")}>English</button> */}
      {/* <button onClick={() => changeLanguage("zh")}>Chinese</button> */}
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
              P157 <br />
              Li Wenyu U2302030
            </TextBox>
          </li>
        </ListAdd>
      </Section>
      <Section>
        <section>
          <h1>1. Introduction</h1>
        </section>
        <ListAdd>
          <li style={{ textAlign: "left" }}>
            Address dangerous areas that humans cannot access
          </li>
          <li style={{ textAlign: "left" }}>
            Ability to remotely access video streams
          </li>
          <li style={{ textAlign: "left" }}>Recognize the object with AI</li>
        </ListAdd>
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
          <h1>2. Literature Review</h1>
        </section>
        <ListAdd trans="convex" className="NOLIST P3_5">
          <li>
            Remote controlled cars have been used in various practical
            applications, such as search and rescue, scientific research, and
            environmental monitoring.
          </li>
          <li>
            The development and implementation of remote-controlled cars face
            many technical challenges, such as battery life, control range, user
            interaction, and safety.
          </li>
        </ListAdd>
        <ListAdd trans="convex" className="NOLIST P3_5">
          <li>
            We are developing new technologies to address these challenges, such
            as using artificial intelligence and improved sensor technology.
          </li>
          <li>
            The field of remote-controlled cars is rapidly developing, and it is
            expected that many new innovations will emerge in the coming years.
          </li>
        </ListAdd>
        <Section>
          <MagicImg
            // settings=
            data={[
              {
                src: aicar,
                text: <TextBox color="white">AI Car</TextBox>,
                width: "40vw",
              },
            ]}
          />
        </Section>
      </Section>
      <Section trans="zoom">
        <Box>
          <h1>3. Methodology</h1>
        </Box>
      </Section>
      {/* Hardware */}
      <Section trans="zoom">
        <section>
          <h2>3.1 Hardware</h2>
        </section>
        <Section>
          <Box>
            <MagicImg
              settings={{ magic: false, layout: { L1: 12 } }}
              data={[
                {
                  src: mega2560,
                  text: (
                    <TextBox>
                      The heart of this car is the Arduino Mega 2560
                    </TextBox>
                  ),
                  width: "40vw",
                },
                {
                  src: mega2560_pin,
                  text: (
                    <TextBox>It has abundant pin and clock resources</TextBox>
                  ),
                  width: "40vw",
                },
              ]}
            />
          </Box>
        </Section>
        <section>
          <h2>L298N</h2>
        </section>
        <Section trans="zoom">
          <Box>
            <MagicImg
              settings={{ magic: false, layout: { L1: 12 } }}
              data={[
                {
                  src: L298N,
                  text: <TextBox>L298N</TextBox>,
                  width: "40vw",
                },
                {
                  src: L298N_1,
                  text: <TextBox>H bridge</TextBox>,
                  width: "40vw",
                },
              ]}
            />
          </Box>
        </Section>
        <Section>
          <Box  className="markdown-body" style={{ fontSize: "24px" }}>
            <Md
              data={`
| Pin Name    | Description                                                       |
|-------------|-------------------------------------------------------------------|
| IN1 & IN2   | Used to control the spinning direction of Motor A                 |
| IN3 & IN4   | Used to control the spinning direction of Motor B                 |
| ENA         | Enables PWM signal for Motor A                                    |
| ENB         | Enables PWM signal for Motor B                                    |
| OUT1 & OUT2 | Output pins of Motor A                                            |
| OUT3 & OUT4 | Output pins of Motor B                                            |
| 12V         | 12V input from DC power Source                                    |
| 5V          | Supplies power for the switching logic circuitry inside L298N IC  |
| GND         | Ground pin                                                        |
`}
            ></Md>
          </Box>
        </Section>
        <Section trans="convex">
          <Box>
            <h2>ESP8266</h2>
          </Box>
        </Section>
        <Section>
          <br />
          <Box>
            <TB>
              <MagicImg
                settings={{ magic: false, layout: { L1: 12 } }}
                data={[
                  {
                    src: "https://www.espressif.com/sites/default/files/hardware-feature/temperature_1.png",
                    text: <TextBox>High Durability</TextBox>,
                    width: "15vh",
                  },
                  {
                    src: "https://www.espressif.com/sites/default/files/hardware-feature/chip-slot.png",
                    text: <TextBox>Compactness</TextBox>,
                    width: "24vh",
                  },
                ]}
              />
              <MagicImg
                settings={{ magic: false, layout: { L1: 12 } }}
                data={[
                  {
                    src: "https://www.espressif.com/sites/default/files/hardware-feature/battery_1.png",
                    text: <TextBox>Power-Saving Architecture</TextBox>,
                    width: "24vh",
                  },
                  {
                    src: "https://www.espressif.com/sites/default/files/hardware-feature/chip_1.png",
                    text: <TextBox>32-bit Processor</TextBox>,
                    width: "24vh",
                  },
                ]}
              />
            </TB>
          </Box>
        </Section>
        <Section trans="convex">
          <Box>
            <MagicImg
              settings={{ magic: false, layout: { L1: 24 } }}
              data={[
                {
                  src: esp8266,
                  text: <TextBox>ESP8266</TextBox>,
                  width: "40vw",
                },
              ]}
            />
          </Box>
        </Section>
        <Section>
          <Box>
            <MagicImg
              settings={{ magic: false, layout: { L1: 24 } }}
              data={[
                {
                  src: LM2596,
                  text: <TextBox>LM2596-S</TextBox>,
                  width: "40vw",
                },
              ]}
            />{" "}
          </Box>
        </Section>
        <Section>
          <Box>
            <MagicImg
              settings={{ magic: false, layout: { L1: 12, L2: [0, 100] } }}
              data={[
                {
                  src: motor,
                  text: <TextBox>Motor</TextBox>,
                  width: "40vw",
                },
                {
                  src: encoder,
                  text: <TextBox>Encoder</TextBox>,
                  width: "40vw",
                },
              ]}
            />
          </Box>
        </Section>
      </Section>

      <Section>
        <Section>
          <Box>
            <h2>3.2 Software</h2>
          </Box>
        </Section>
        <Section>
          <Box>
            <h3>Arduino Mega2560</h3>
          </Box>
        </Section>
        <Section>
          <Box>
            <MagicImg
              // settings=
              data={[
                {
                  src: layer,
                  text: <TextBox color="white">Software Layers</TextBox>,
                  width: "40vw",
                },
              ]}
            />
          </Box>
        </Section>
        <Section>
          <Box width={"100vw"}>
            <Code
              word="Really Simple"
              line="1-10|10-22|23-38|40-51|53-64|67-68|80-83|85-99|102-105|106-116|106-122"
              width="100%"
              height="90%"
              code={`
// @开源协议 GPL3.0
// @作者 Bigonion
// @NameSpace bigonion.cn
// @github https://github.com/LiWeny16/ai_based_remote_control_car_arduino_mega2560

#include "head.h"
#include <avr/iom16u2.h>
#include "Arduino.h"


volatile int count_1 = 0;
volatile int count_2 = 0;
volatile int count_3 = 0;
volatile int count_4 = 0;
String char_sum;

unsigned long speed_previous_time = 0;
unsigned long pid_previous_time = 0;
const unsigned long speed_sample_interval = 20;
const unsigned long pid_control_interval = 50;

void interrupt_sum_encoder_1()
{
    sum_encoder(&count_1, Encoder_1_1, Encoder_1_2);
}
void interrupt_sum_encoder_2()
{
    sum_encoder(&count_2, Encoder_2_1, Encoder_2_2);
}
void interrupt_sum_encoder_3()
{
    sum_encoder(&count_3, Encoder_3_1, Encoder_3_2);
}
void interrupt_sum_encoder_4()
{
    sum_encoder(&count_4, Encoder_4_1, Encoder_4_2);
}

void setup()
{
    all_init();
    if (en_all_arg.en_all)
    {
    attachInterrupt(digitalPinToInterrupt(Encoder_1_1), interrupt_sum_encoder_1, CHANGE);
    attachInterrupt(digitalPinToInterrupt(Encoder_2_1), interrupt_sum_encoder_2, CHANGE);
    attachInterrupt(digitalPinToInterrupt(Encoder_3_1), interrupt_sum_encoder_3, CHANGE);
    attachInterrupt(digitalPinToInterrupt(Encoder_4_1), interrupt_sum_encoder_4, CHANGE);
    delay(1000);
    }
}

void loop()
{
    // 使能
    if (en_all_arg.en_all)
    {
    // 处理串口,无延时
    handle_serial_from_8266(&Serial_8266, &char_sum);

    unsigned long current_time = millis(); // 获取当前时间
    // 判断是否达到延迟时间间隔
    if (current_time - speed_previous_time >= speed_sample_interval)
    {
        // ultra_distance = use_ultrasonic();

        // 计算速度,写入speed_now
        speed_calculate(&count_1, &count_2, &count_3, &count_4, &speed_now);

        // 调整速度
        // speed_set.speed_set_1 = 0;
        // speed_set.speed_set_2 = 0;
        // speed_set.speed_set_3 = 0;
        // speed_set.speed_set_4 = 0;

        // Motor_Arg my_motor_arg_2(motor_port_yq, 50);
        // motor_control(my_motor_arg_2);

        // 计算误差,更新写入err_speed
        err_speed_1.calculate_err_motor(speed_now.speed_1, speed_set.speed_set_1);
        err_speed_2.calculate_err_motor(speed_now.speed_2, speed_set.speed_set_2);
        err_speed_3.calculate_err_motor(speed_now.speed_3, speed_set.speed_set_3);
        err_speed_4.calculate_err_motor(speed_now.speed_4, speed_set.speed_set_4);

        pid_motor_1.P = 0.25;
        pid_motor_1.I = 0.44;
        pid_motor_1.D = 0.05;

        pid_motor_2.P = 0.25;
        pid_motor_2.I = 0.44;
        pid_motor_2.D = 0.05;

        pid_motor_3.P = 0.25;
        pid_motor_3.I = 0.44;
        pid_motor_3.D = 0.05;

        pid_motor_4.P = 0.25;
        pid_motor_4.I = 0.44;
        pid_motor_4.D = 0.05;

        // 计算PID修正量
        pid_motor_1.calculate_pid_motor(&err_speed_1);
        pid_motor_2.calculate_pid_motor(&err_speed_2);
        pid_motor_3.calculate_pid_motor(&err_speed_3);
        pid_motor_4.calculate_pid_motor(&err_speed_4);

        // 执行PID输出
        if (en_all_arg.en_motor.en_motor_all)
        {
        en_all_arg.en_motor.en_motor_1 ? pid_motor_1.pid_control_motor(motor_port_zq) : (void)1;
        en_all_arg.en_motor.en_motor_2 ? pid_motor_2.pid_control_motor(motor_port_yq) : (void)1;
        en_all_arg.en_motor.en_motor_3 ? pid_motor_3.pid_control_motor(motor_port_zh) : (void)1;
        en_all_arg.en_motor.en_motor_4 ? pid_motor_4.pid_control_motor(motor_port_yh) : (void)1;
        }
        speed_previous_time = current_time; // 更新上一次执行函数的时间
    }
    if (current_time - pid_previous_time >= pid_control_interval)
    {
        pid_previous_time = current_time;
    }
    }
}
                `}
            ></Code>
          </Box>
        </Section>
      </Section>
      <Section>
        <Section>
          <Box>
            <h2>4. Preliminary Results</h2>
          </Box>
        </Section>
        <section>
          <h2>What have we done?</h2>
        </section>
        <ListAdd className="NOLIST MARGIN-VER ">
          <li style={{ textAlign: "left" }}>
            <Checkbox
              style={{ transform: "scale(3.6)", transformOrigin: "left center" }}
            >
              Assembled the car
            </Checkbox>
          </li>
          <li style={{ textAlign: "left" }}>
            <Checkbox
              style={{ transform: "scale(3.6)", transformOrigin: "left center" }}
            >
              Finished the basic movement of the car
            </Checkbox>
          </li>
          <li style={{ textAlign: "left" }}>
            <Checkbox
              style={{ transform: "scale(3.6)", transformOrigin: "left center" }}
            >
             Able to use wifi to communicate with the car
            </Checkbox>
          </li>
        </ListAdd>
      </Section>
      <Section>
        <Section>
          <Box>
            <h2>5. Future Plan ＆ Gantt Chart</h2>
          </Box>
        </Section>
        <Section>
          <Box>
            <Md
              width="100%"
              // width="fitContent"
              data={`
"
gantt
    title Project Gantt Chart
    dateFormat  YYYY-MM-DD
    section Add Camera to Project
    Camera : 2023-03-01 , 2023-03-31
    section Build a Simple Web App
    WebApp : 2023-04-01 , 2023-04-15
    section Add Backend to the Application
    Backend : 2023-04-16 , 2023-04-30
    section Test Application Usability
    Testing : 2023-05-01 , 2023-05-15".mermaid 
            `}
            ></Md>
          </Box>
        </Section>
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
      <Section>
        <Box><h1>THANKS</h1></Box>
      </Section>
    </>
  )
}
