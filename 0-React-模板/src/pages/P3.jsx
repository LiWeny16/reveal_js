import React from "react"
import Steps from "../Components/Main/Steps"
import Md from "../Components/Main/Md"
// import List1 from "../Components/List/List1"
// import List2 from "../Components/List/List2"

import ListAdd from "../Components/List/ListAdd"
import Section from "../Components/Main/Section"
import ShadowMd from "../Components/Main/Shadow/ShadowRootMD"
import Pie from "../Components/DigitalShow/Pie"
// import Pic2 from "../Components/Main/Img/Pic2"
// import Pic from "../Components/Main/Img/Pic"
import Code from "../Components/Main/Code/Code"
import Table from "../Components/DigitalShow/Table"

import outPage from "@Assets/outSidePages/ellipse/index.html?raw"

import MagicImg from "@Main/Img/MagicImg"
import pNUS from "@Assets/img/pNUS.jpg"
import Iframe from "../Components/Main/Iframe"
import p1_1 from "@Assets/img/1-1.png"

import p2_1 from "@Assets/img/2-1.jpg"
import p2_2 from "@Assets/img/2-2.jpg"
import p2_3 from "@Assets/img/2-3.jpg"
import p2_4 from "@Assets/img/2-4.jpg"

import p3_1_1 from "@Assets/img/3-1-1.jpg"
import p3_1_2 from "@Assets/img/3-1-2.jpg"
import p3_1_3 from "@Assets/img/3-1-3.jpg"
import p3_1_4 from "@Assets/img/3-1-4.jpg"

import p3_2_1 from "@Assets/img/3-2-1.jpg"
import p3_2_2 from "@Assets/img/3-2-2.jpg"
import p3_2_3 from "@Assets/img/3-2-3.jpg"
import p3_2_4 from "@Assets/img/3-2-4.jpg"

import p3_3_1 from "@Assets/img/3-3-1.jpg"
import p3_3_2 from "@Assets/img/3-3-2.jpg"

import p5_1 from "@Assets/img/5-1.jpg"
import p5_2 from "@Assets/img/5-2.jpg"
import p5_3 from "@Assets/img/5-3.jpg"
import BarChart from "../Components/DigitalShow/BarChart"
// import VideoPlayer from "../Components/Main/Video"
import Directory from "../Components/Main/Directory"
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from "@ant-design/icons"
export default function App() {
  return (
    <>
      {/* ICON */}

      {/* Start */}
      <Section trans="slide">
        <Section back="black">
          <img
            style={{ position: "absolute", top: "-107%", left: "40%" }}
            width={"20%"}
            src={pNUS}
            alt=""
          />
          <div className="P2">Force Feedback Gloves</div>
          <hr />
          <div className="P3">Virtual into vital</div>
        </Section>
        <Section back="white">
          <Iframe
            style={{
              width: "100%",
              innerHeight: "100vh",
              border: "none",
              // boxShadow: "rgb(79,79,79) 1vh 2vh 21px",
              height: "100vh"
            }}
            src={"https://ppt.bigonion.cn/0-React-%E6%A8%A1%E6%9D%BF/build/P3/"}
          ></Iframe>
        </Section>
      </Section>
      {/* 目录 */}
      {/* <Section back="#FFDDEE">
        <Directory></Directory>
      </Section> */}

      {/* 1. */}
      <Section>
        <Section>
          <hr />
          <h2>1. Background</h2>
          <hr />
        </Section>
        <ListAdd trans="convex" className="" back="white">
          <ul>
            <li>
              2000 years ago, Chinese first sent letters to commnuicate through
              words
            </li>
          </ul>
          <ul>
            <li>
              In 1876, the inventing of telephone enabled people to hear others
              far away
            </li>
          </ul>
        </ListAdd>
        <ListAdd trans="slide" className="" back="white">
          <ul>
            <li>
              In 1964, video conversation was invented, allowing people to see
              your family's smile even abroad;
            </li>
          </ul>
          <ul>
            <li>
              Today, We invented igloves, so that you can touch your love in
              every place;
            </li>
          </ul>
        </ListAdd>
        <Section>
          <MagicImg width="80%" data={[" ", p1_1]} />
        </Section>
      </Section>
      {/* 2. */}
      <Section trans="slide">
        <Section>
          <hr />
          <h2>2. Introduction</h2>
          <hr />
        </Section>
        <Section trans="slide">
          <h3>Common Gloves</h3>
          <MagicImg width={["60%", "80%"]} data={[" ", p2_1, " ", p2_2]} />
        </Section>
        <Section>
          <h3>electronic sensors and components</h3>
          <MagicImg width={["60%", "75vw"]} data={[" ", p2_3, " ", p2_4]} />
        </Section>
      </Section>

      {/* 3. */}
      <Section>
        <Section trans="zoom">
          <hr />
          <h2>3. Application</h2>
          <hr />
        </Section>
        {/* 3.1 Emotional aspect*/}
        <Section>
          <h3>3.1 Emotional aspect</h3>
        </Section>
        <ListAdd trans="convex" className="" back="white">
          <ul>
            <li> Feel our friends relatives and pets who have passed away. </li>
          </ul>
          <ul>
            <li>
              Couples can company each other and walk hand in hand with the help
              of this gloves.
            </li>
          </ul>
        </ListAdd>
        <Section trans="zoom">
          <MagicImg
            width="70%"
            data={["Relate Couples", p3_1_1, "Feel Families", p3_1_2]}
          />
        </Section>
        <ListAdd>
          <ul>
            <li>
              People who are allergic to animal hair can use this gloves to
              experience the feel of touching their pet.
            </li>
          </ul>
          <ul>
            <li>
              You can use this glove to touch endangered or dangerous animals.
            </li>
          </ul>
        </ListAdd>
        <Section trans="zoom">
          <MagicImg
            width="80%"
            data={["Touch Pets", p3_1_3, "Touch Endangered Animals", p3_1_4]}
          />
        </Section>
        {/* 3.2 HOBBY ASPECT*/}
        <Section trans="zoom">
          <h3>3.2 HOBBY ASPECT</h3>
        </Section>
        <Section trans="zoom">
          <MagicImg
            width="100%"
            data={["Video Watching", p3_2_1, "Musical Instruments", p3_2_2]}
          />
        </Section>
        <Section>
          <MagicImg
            width="100%"
            data={["Gaming", p3_2_3, "Art and Design", p3_2_4]}
          />
        </Section>

        {/* 3.3 */}
        <Section trans="zoom">
          <h3>3.3 Application In Medicine</h3>
        </Section>
        <Section trans="zoom">
          <MagicImg width="80%" data={[" ", p3_3_1, " ", p3_3_2]} />
        </Section>
      </Section>
      {/* 4. DEMO */}
      <Section>
        <Section>
          <hr />
          <h2>4. DEMO</h2>
          <hr />
        </Section>
        <Section>
          <p className="P3_5">Long Distance Interaction</p>
          <hr />
          <Steps
            data={[
              {
                title: "User",
                status: "finish",
                icon: <UserOutlined />
              },
              {
                title: "Internet",
                status: "finish",
                icon: <SolutionOutlined />
              },
              {
                title: "Transer",
                status: "process",
                icon: <LoadingOutlined />
              },
              {
                title: "User2",
                status: "wait",
                icon: <UserOutlined />
              }
            ]}
          ></Steps>
          <hr />
        </Section>
        <Section>
          <p className="P3_5">Emotional Caring</p>
        </Section>
      </Section>
      {/* 5. */}
      <Section>
        <Section trans="convex">
          <hr />
          <h2>5. About future</h2>
          <hr />
        </Section>
        <Section trans="convex">
          <MagicImg width="100%" data={["", p5_3]} />
        </Section>
        <Section>
          <MagicImg
            width="100%"
            data={["Ready Player one", p5_1, "For wearing equipment", p5_2]}
          />
        </Section>
      </Section>

      {/* <Section LISTADD>
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
      
      </Section> */}
      <Section back="white">
        <ListAdd className="NOLIST MARGIN-LEFT LEFT" back="black">
          <h2 data-id="box">OUR Team List</h2>
          <hr data-id="box" />
          <li data-id="box" className="P4 NOLIST">
            Li Wenyu, Chen Xiao, Shi Jiaqi, Xue Yufeng
          </li>
          <li data-id="box" className="P4 NOLIST">
            {/* <span className="YELLOW">图片及其他资料: </span> */}
            <br />
            Shan Wenkai, Ding Dang, Zhang Yiyi, Zhao Zifang
          </li>
          <hr data-id="box" />
        </ListAdd>
      </Section>
      <Section>
        <h2> THANK YOU!</h2>
      </Section>
    </>
  )
}
