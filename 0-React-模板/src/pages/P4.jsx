/**
 * @description Pre 2 final English
*/
import React from "react"
import Steps from "../Components/Main/Steps"
import Md from "../Components/Main/Md"
import List1 from "../Components/List/List1"
import List2 from "../Components/List/List2"
import ListAdd from "../Components/List/ListAdd"
import Section from "../Components/Main/Section"
// import ShadowMd from "../Components/Main/Shadow/ShadowRootMD"
import Pie from "../Components/DigitalShow/Pie"
import Pic2 from "../Components/Main/Img/Pic2"
import Pic from "../Components/Main/Img/Pic"
import Code from "../Components/Main/Code/Code"
// import Table from "../Components/DigitalShow/Table"
import MagicImg from "@Main/Img/MagicImg"

import BarChart from "../Components/DigitalShow/BarChart"
import BarChart2 from "../Components/DigitalShow/BarChart2"
import VideoPlayer from "../Components/Main/Video"
import Directory from "../Components/Main/Directory"
import Pie2 from "../Components/DigitalShow/Pie2"
import LineChart from "../Components/DigitalShow/LineChart"
import Directory2 from "../Components/Main/Directory2"
// console.log(p1_1);
// import {
//   LoadingOutlined,
//   SmileOutlined,
//   SolutionOutlined,
//   UserOutlined
// } from "@ant-design/icons"

import v1 from "@Assets/video/1.mp4"

import p1_1 from "@Assets/img/1-1.jpg"
import p1_2 from "@Assets/img/1-2.jfif"
import p1_2_1 from "@Assets/img/1-2-1.jpg"
import p1_3 from "@Assets/img/1-3.png"
import p1_4 from "@Assets/img/1-4.jpg"
import p1_5 from "@Assets/img/1-5.jpg"

import p2_1 from "@Assets/img/2-1.jpg"

import p2_2_1 from "@Assets/img/2-2-1.jpg"
import p2_2_2 from "@Assets/img/2-2-2.jpg"
import p2_2_3 from "@Assets/img/2-2-3.jpg"
import p2_2_4 from "@Assets/img/2-2-4.jpg"
import p2_2_5 from "@Assets/img/2-2-5.jpg"
import p2_2_6 from "@Assets/img/2-2-6.jpg"
import p2_2_7 from "@Assets/img/2-2-7.jpg"
import p2_2_8 from "@Assets/img/2-2-8.jpg"
import p2_2_9 from "@Assets/img/2-2-9.jpg"
import p2_2_10 from "@Assets/img/2-2-10.jpg"
import p2_2_12 from "@Assets/img/2-2-12.png"
import p2_2_13 from "@Assets/img/2-2-13.png"
import p2_2_14 from "@Assets/img/2-2-14.png"
import p2_2_15 from "@Assets/img/2-2-15.png"

import p4_1_1 from "@Assets/img/4-1-1.png"
import p4_1_2 from "@Assets/img/4-1-2.png"
import p4_1_3 from "@Assets/img/4-1-3.png"
import p4_1_4 from "@Assets/img/4-1-4.png"
import p4_1_5 from "@Assets/img/4-1-5.png"
import p4_1_6 from "@Assets/img/4-1-6.png"
import p4_1_7 from "@Assets/img/4-1-7.png"
import p4_1_8 from "@Assets/img/4-1-8.png"
import p4_1_9 from "@Assets/img/4-1-9.png"
import p4_1_10 from "@Assets/img/4-1-10.png"

import p4_2_1 from "@Assets/img/4-2-1.png"
import p4_2_2 from "@Assets/img/4-2-2.png"

import p4_3_1 from "@Assets/img/4-3-1.jpg"
import p4_3_2 from "@Assets/img/4-3-2.jpg"
import p4_3_3 from "@Assets/img/4-3-3.jpg"
import p4_3_4 from "@Assets/img/4-3-4.jpg"
import p4_3_5 from "@Assets/img/4-3-5.jpg"

import p5_1 from "@Assets/img/5-1.jpg"
import p5_2 from "@Assets/img/5-2.jpg"
import p5_3 from "@Assets/img/5-3.jpg"
import p5_4 from "@Assets/img/5-4.jpg"
import p5_5 from "@Assets/img/5-5.jpg"
import p5_6 from "@Assets/img/5-6.jpg"
import p5_7 from "@Assets/img/5-7.jpg"
import p5_8 from "@Assets/img/5-8.jpg"
import p5_9 from "@Assets/img/5-9.jpg"

export default function App() {
  return (
    <>
      <Section trans="slide">
        {/* <div className="P3_5">
          A SURVEY REPORT ON COLLEAGE
          <br /> STUDENTS STAYING UP LATE
        </div>
        <hr />
        <div className="P4">bigonion</div> */}
        <section data-auto-animate>
          <div data-id="box" className="P3_5">
            A SURVEY REPORT ON COLLEAGE
            <br /> STUDENTS STAYING UP LATE
          </div>
          <div
            data-id="box"
            style={{ width: "", height: "20px", background: "blue" }}
          >
            {" "}
          </div>
        </section>
        <section data-auto-animate>
          <div data-id="box" className="P3_5 RED">
            A SURVEY REPORT ON COLLEAGE
            <br /> STUDENTS STAYING UP LATE
          </div>
          <div
            data-id="box"
            style={{
              marginTop: "50px",
              width: "",
              height: "70px",
              background: "pink"
            }}
          >
            {" "}
          </div>
        </section>
      </Section>

      {/* Dire */}
      <Section>
        {/* <h2 className="">Outline</h2> */}
        <Directory2 />
      </Section>

      {/* 1. Background */}
      <Section>
        <Section back="linear-gradient(to right, rgb(172, 182, 229), rgb(134, 253, 232))">
          <h3>1. Introduction</h3>
        </Section>
        <Section
          className="WHITE"
          back="linear-gradient(to right, rgb(26, 41, 128), rgb(38, 208, 206))"
        >
          <h4>1.1 Background</h4>
        </Section>
        <Section>
          <MagicImg width={["100vh"]} data={[" ", p1_4]}></MagicImg>
        </Section>
        <Section>
          <MagicImg
            width={["100vh"]}
            data={["The China Sleep Research Report 2023", p1_3]}
          ></MagicImg>
          <ul style={{ float: "left" }}>
            <li className="LEFT P4">
              Nearly half of people don't get enough sleep for eight hours.{" "}
            </li>
          </ul>
        </Section>
        <Section>
          <MagicImg
            width={["45vh"]}
            data={["The health report of Chinese colleage students", p1_5]}
          ></MagicImg>
          <ul style={{ float: "left" }}>
            <li className="LEFT P4">
              For the group with graduate degree or above The sleep time is
              short and the self-evaluation of sleep quality is low.{" "}
            </li>
          </ul>
        </Section>
        <Section>
          <h4>1.2 purpose</h4>
        </Section>
        <Section>
          <MagicImg width={["100vh"]} data={[" ", p1_2_1]}></MagicImg>
        </Section>
      </Section>

      {/* 2. Questionnaire */}
      <Section>
        <Section>
          <h3>2. Methodology</h3>
        </Section>

        <Section>
          <h4>2.1 The design</h4>
        </Section>
        <Section>
          <MagicImg width={["115vh"]} data={[" ", p2_2_12]}></MagicImg>
        </Section>
        <Section>
          <MagicImg width={["115vh"]} data={[" ", p2_2_13]}></MagicImg>
        </Section>
        <Section>
          <MagicImg width={["115vh"]} data={[" ", p2_2_14]}></MagicImg>
        </Section>
        <Section>
          <MagicImg width={["115vh"]} data={[" ", p2_2_15]}></MagicImg>
        </Section>
        {/* 3.2 */}
        <Section>
          <h4>2.2 Method</h4>
        </Section>
        <Section>
          <MagicImg width={["85vh"]} data={[" ", p2_1]}></MagicImg>
        </Section>
        <ListAdd className="LEFT">
          <ul>
            <li className="P4">
              <Md
                data={`Limited collections $\\rightarrow$ Analyze data in depth`}
              ></Md>
            </li>
          </ul>
          <ul>
            <li className="P4">
              <Md
                data={` Understanding of the individuals is not deep enough $\\rightarrow$ Interview`}
              ></Md>
            </li>
          </ul>
        </ListAdd>
      </Section>

      {/* 3. Interview */}
      <Section>
        <Section>
          <h3>3. Interview</h3>
        </Section>
        <Section>
          <VideoPlayer src={v1}></VideoPlayer>
        </Section>
      </Section>

      {/* 4. Data Analysis */}
      <Section>
        <Section>
          <h3>4. Data Analysis</h3>
        </Section>

        {/* 4.1 */}
        <Section>
          <h4>4.1 independent analysis</h4>
        </Section>
        <Section>
          {/* 45 */}
          <MagicImg
            width={["75vh", "75vh"]}
            data={[
              "What time do you usually go to bed?",
              p4_1_1,
              "The average length of sleep is ",
              p4_1_2
            ]}
          ></MagicImg>
        </Section>
        {/* 67 */}
        <Section>
          <MagicImg
            width={["55vh", "105vh"]}
            data={[
              "The frequency of staying up late during your busy work/examination week is  ",
              p4_1_3,
              "The frequency you usually stay up late is ",
              p4_1_4
            ]}
          ></MagicImg>
        </Section>
        {/* 8、11 */}
        <Section>
          <MagicImg
            width={["55vh", "105vh"]}
            data={[
              "What is the possible reason for you staying up late?  ",
              p4_1_5,
              "Your opinion on staying up late",
              p4_1_6
            ]}
          ></MagicImg>
          <MagicImg
            width={["85vh"]}
            data={["What means do you usually use to compensate? ", p4_1_7]}
          ></MagicImg>
        </Section>
        {/* 15 */}

        {/* 10 13 */}
        <Section>
          <MagicImg
            width={["95vh", "105vh"]}
            data={[
              "The impact of staying up late on your health",
              p4_1_8,
              "The impact of staying up late on sleep quality",
              p4_1_9
            ]}
          ></MagicImg>
          <MagicImg
            width={["85vh"]}
            data={[
              "The impact of staying up late on the mental state of the next day",
              p4_1_10
            ]}
          ></MagicImg>
        </Section>
        {/* 14 */}

        {/* 4.2 */}
        <Section>
          <h4>4.2 correlation</h4>
        </Section>
        <Section>
          <div className="P3_5">
            North university students stay up more than south students.
          </div>
          <BarChart2
            data={[
              { name: "0-2 Times/week", Place: "South", Percentage: 44.71 },
              { name: "3-5 Times/week", Place: "South", Percentage: 32.94 },
              { name: "6-7 Times/week", Place: "South", Percentage: 22.35 },

              { name: "0-2 Times/week", Place: "North", Percentage: 30.23 },
              { name: "3-5 Times/week", Place: "North", Percentage: 39.53 },
              { name: "6-7 Times/week", Place: "North", Percentage: 30.23 }
            ]}
          ></BarChart2>
        </Section>
        <Section>
          <div className="P3_5">
            No association between sleeping time and sleeping duration
          </div>
          <MagicImg width={["100vh"]} data={[" ", p4_2_2]}></MagicImg>
        </Section>
        <Section>
          <div className="P3_5">
            No association between genders and sleeping habit
          </div>
          <MagicImg width={["100vh"]} data={[" ", p4_2_1]}></MagicImg>
        </Section>

        {/* 4.3 */}
        <Section>
          <h4>4.3 CRoSS -ANALYSLS</h4>
        </Section>
        <Section>
          <MagicImg width={["120vh"]} data={[" ", p4_3_5]}></MagicImg>
        </Section>
        <Section>
          <h4>In Terms of The Time to Sleep</h4>
          <div className="FLEX ROW JUS-CEN">
            <div className="FLEX COL">
              <div style={{ float: "left" }} className="LEFT">
                <p className="P4">the impact on sleep quality</p>
              </div>
              <MagicImg width={["60vh"]} data={[" ", p4_3_1]}></MagicImg>
            </div>
            <div className="FLEX COL">
              <div style={{ float: "left" }} className="LEFT">
                <p className="P4">
                  the impact on the mental state <br /> of the next day
                </p>
              </div>
              <MagicImg width={["60vh"]} data={[" ", p4_3_2]}></MagicImg>
            </div>
          </div>
          {/* <MagicImg
            width={["65vh", "50vh"]}
            data={[
              "the impact  on sleep quality",
              p4_3_1,
              "the impact  on the mental state of the next day",
              p4_3_2
            ]}
          ></MagicImg> */}
        </Section>
        <Section>
          <h4>In Terms of Sleep Duration</h4>
          <div className="FLEX ROW JUS-CEN">
            <div className="FLEX COL">
              <div style={{ float: "left" }} className="LEFT">
                <p className="P4">the impact on sleep quality</p>
              </div>
              <MagicImg width={["60vh"]} data={[" ", p4_3_3]}></MagicImg>
            </div>
            <div className="FLEX COL">
              <div style={{ float: "left" }} className="LEFT">
                <p className="P4">
                  the impact on the mental state <br /> of the next day
                </p>
              </div>
              <MagicImg width={["50vh"]} data={[" ", p4_3_4]}></MagicImg>
            </div>
          </div>
          {/* <MagicImg
            width={["65vh", "50vh"]}
            data={[
              "the impact  on sleep quality",
              p4_3_3,
              "the impact  on the mental state of the next day",
              p4_3_4
            ]}
          ></MagicImg> */}
        </Section>
      </Section>

      {/* 5. Conclusion */}
      <Section>
        <Section>
          <h3>5. Conclusion & Recommendation</h3>
        </Section>
        <Section>
          <h4>5.1 Conclusion</h4>
        </Section>
        <Section>
          <MagicImg
            width={["70vh", "60vh"]}
            data={[
              "literature searching",
              p5_1,
              "independent questionnaire setting",
              p5_2
            ]}
          ></MagicImg>
        </Section>
        <Section>
          <MagicImg
            width={["60vh", "70vh"]}
            data={["data analysis", p5_3, "solutions", p5_4]}
          ></MagicImg>
        </Section>
        <Section>
          <div className="FLEX COL">
            <div style={{ float: "left" }} className="LEFT">
              <p className="P4">
                complete, coherent and logical process from questionnaire design
                <br />
                focusing on specific groups to the final targeted delivery of
                questionnaires
              </p>
            </div>
            <MagicImg width={["60vh"]} data={[" ", p5_5]}></MagicImg>
            <div style={{ float: "right" }} className="RIGHT">
              <p className="P4">
                sample data is small
                <br />
                relationship between the problem and economic development is not
                taken into account
              </p>
            </div>
          </div>
        </Section>
        <Section>
          <h4>5.2 Recommendation</h4>
        </Section>
        <Section>
          <p className="P4">Establish a consistent sleep schedule</p>
          <MagicImg width={["60vh"]} data={[" ", p5_6]}></MagicImg>
          <p className="P4">Create a bedtime routine</p>
        </Section>
        <Section>
          <MagicImg
            width={["60vh", "70vh"]}
            data={[
              `Limit exposure to screens before bed`,
              p5_7,
              "Create a comfortable sleep environment",
              p5_8
            ]}
          ></MagicImg>
        </Section>
        <Section>
          <MagicImg
            width={["50vh"]}
            data={["Avoid caffeine and heavy meals close to bedtime", p5_9]}
          ></MagicImg>
        </Section>
      </Section>
      {/* 线图 */}
      {/* <Section>
        <Section>
          <h5>The Impact of staying up late on sleep quality</h5>
          <div className="FLEX ROW">
            <LineChart
              color={"green"}
              data={[
                {
                  year: "before 10pm",
                  value: 3
                },
                {
                  year: "10pm-11pm",
                  value: 5
                },
                {
                  year: "11pm-12pm",
                  value: 4.12
                },
                {
                  year: "12pm-1am",
                  value: 3.39
                },
                {
                  year: "1am-2am",
                  value: 2.86
                },
                {
                  year: "After 2am",
                  value: 3.56
                }
              ]}
            ></LineChart>
            <LineChart
              color="blue"
              data={[
                {
                  year: "Less 5h",
                  value: 3.5
                },
                {
                  year: "5-7h",
                  value: 3.6
                },
                {
                  year: "7-9h",
                  value: 3.53
                },
                {
                  year: "Over 9h",
                  value: 2.33
                }
              ]}
            ></LineChart>
          </div>
        </Section>
        <Section>
          <h5>
            The impact of staying up late {<br />} on the mental state of the
            next day
          </h5>
          <div className="FLEX ROW">
            <LineChart
              color={"pink"}
              data={[
                {
                  year: "before 10pm",
                  value: 3
                },
                {
                  year: "10pm-11pm",
                  value: 5
                },
                {
                  year: "11pm-12pm",
                  value: 4.5
                },
                {
                  year: "12pm-1am",
                  value: 3.98
                },
                {
                  year: "1am-2am",
                  value: 3.68
                },
                {
                  year: "After 2am",
                  value: 4
                }
              ]}
            ></LineChart>
            <LineChart
              color="blue"
              data={[
                {
                  year: "Less 5h",
                  value: 4
                },
                {
                  year: "5-7h",
                  value: 4.03
                },
                {
                  year: "7-9h",
                  value: 4.15
                },
                {
                  year: "Over 9h",
                  value: 3.33
                }
                // {
                //   year: "1am-2am",
                //   value: 2.86
                // },
                // {
                //   year: "After 2am",
                //   value: 3.56
                // }
              ]}
            ></LineChart>
          </div>
        </Section>
      </Section> */}
      {/* 柱状图 */}

      {/* <Section trans="zoom">
        <BarChart
          data={[
            { year: "1951 年", sales: 20 },
            { year: "1952 年", sales: 52 },
            { year: "1956 年", sales: 61 },
            { year: "1957 年", sales: 45 }
          ]}
        />
      </Section> */}
      {/* <Section>
        <Pie2></Pie2>
      </Section> */}
      <Section>
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
        <h3>THANKS!</h3>
      </Section>
    </>
  )
}
