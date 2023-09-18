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
import MagicImg from "@Main/Img/MagicImg"
import p1_1 from "@Assets/img/1-1.png"
import p3_1 from "@Assets/img/3-1.jpg"
import p3_2 from "@Assets/img/3-2.jpg"
import p3_3 from "@Assets/img/3-3.jpg"
import p3_4 from "@Assets/img/3-4.jpg"
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
    {/* Start */}
      <Section back="black" trans="slide">
        <div className="P2">Force Feedback Gloves</div>
        <hr />
        <div className="P3">Virtual into vital</div>
      </Section>
      {/* Dire */}
      <Section back="#FFDDEE">
        <Directory></Directory>
      </Section>
      {/* 1. */}
      <Section>
        <Section>
          <h1>Background</h1>
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
      </Section>
      {/* 3. */}
      <Section>
        <Section trans="zoom">
          <Md>## 3.Application</Md>
        </Section>
        <Section>
          <h2>Emotional aspect</h2>
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
            width="80%"
            data={[
              "Relate couples",
              p3_1,
              "Feel families",
              p3_2
            ]}
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
            width="100%"
            data={[
              "Touch pets",
              p3_3,
              "Touch endangered animals",
              p3_4
            ]}
          />
        </Section>
      </Section>

      {/* 5. */}
      <Section>
        <Section trans="convex">
          <Md>## 5. About future</Md>
        </Section>
        <Section trans="convex">
          <MagicImg width="100%" data={["",p5_3]} />
        </Section>
        <Section>
          <MagicImg
            width="100%"
            data={[
              "Ready Player one",
              p5_1,
              "For wearing equipment",
              p5_2
            ]}
          />
        </Section>
      </Section>

      <Section>
        <Pie />
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
      <ListAdd className="NOLIST MARGIN-LEFT LEFT" back="black">
        <h2 data-id="box">Force Feedback Gloves</h2>
        <hr data-id="box" />
        <li data-id="box" className="P4 NOLIST">
          <span className="YELLOW">汇报人:</span> 陈启航 <br />
          <span className="YELLOW">PPT:</span> 黎文宇 <br />{" "}
          <span className="YELLOW">文案:</span> 马顺欣 <br />{" "}
          <span className="YELLOW">文字资料:</span> 夏雷、胡权升、马顺欣
        </li>
        <li data-id="box" className="P4 NOLIST">
          {" "}
          <span className="YELLOW">图片及其他资料: </span>
          <br />
          陈启航 黎文宇 谭轩 胡权升 多吉次仁
          <br /> 张彦 黄正阳 蔡泓鑫 严茁瑞 刘斯诺
        </li>
        <hr data-id="box" />
      </ListAdd>
      {/* <section>
          <section data-background="black" data-auto-animate data-auto-animate-id="8">
            <h2 data-id="box">利己VS利他</h2>
          </section>
          <section data-background="black" data-auto-animate data-auto-animate-id="8">
            <h2 data-id="box">利己VS利他</h2>
            <hr data-id="box" />
          </section>
          <section data-background="black" data-auto-animate data-auto-animate-id="8">
            <h2 data-id="box">利己VS利他</h2>
            <hr data-id="box" />
            <li  data-id="box" class="P4 NOLIST"><span class="YELLOW">汇报人:</span> 陈启航 <br /> <span class="YELLOW">PPT:</span>  黎文宇 <br/> <span class="YELLOW">文案:</span>  马顺欣 <br /> <span class="YELLOW">文字资料:</span> 夏雷、胡权升、马顺欣</li>
          </section>
          <section data-background="black" data-auto-animate data-auto-animate-id="8">
            <hr data-id="box" />
            <li  data-id="box" class="P4 NOLIST" ><span class="YELLOW">汇报人:</span> 陈启航 <br /><span class="YELLOW">PPT:</span> 黎文宇 <br /> <span class="YELLOW">文案:</span> 马顺欣 <br />  <span class="YELLOW">文字资料:</span> 夏雷、胡权升、马顺欣</li>
            <li data-id="box" class="P4 NOLIST" > <span class="YELLOW">图片及其他资料: </span><br />陈启航 黎文宇 谭轩 胡权升 多吉次仁<br /> 张彦 黄正阳 蔡泓鑫 严茁瑞 刘斯诺</li>
            <hr  data-id="box" />
          </section>
       </section> */}
    </>
  )
}
