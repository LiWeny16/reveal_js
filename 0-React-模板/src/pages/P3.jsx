import React from "react"
import Steps from "../Components/Main/Steps"
import Md from "../Components/Main/Md"
import List1 from "../Components/List/List1"
import List2 from "../Components/List/List2"
import ListAdd from "../Components/List/ListAdd"
import Section from "../Components/Main/Section"
import ShadowMd from "../Components/Main/Shadow/ShadowRootMD"
import Pie from "../Components/DigitalShow/Pie"
import Pic2 from "../Components/Main/Img/Pic2"
import Pic from "../Components/Main/Img/Pic"
import Code from "../Components/Main/Code/Code"
import Table from "../Components/DigitalShow/Table"
import MagicImg from "@Main/Img/MagicImg"
import BarChart from "../Components/DigitalShow/BarChart"
import VideoPlayer from "../Components/Main/Video"
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
      <Section back="black" trans="slide">
        <div className="P2">Force Feedback Gloves</div>
        <hr />
        <div className="P3">Virtual into vital</div>
      </Section>
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
            width="100%"
            data={[
              "Relate couples",
              "assets/img/3-1.jpg",
              "Feel families",
              "assets/img/3-2.jpg"
            ]}
          />
        </Section>
        <ListAdd>
          <ul>
            <li>
              People who are allergic to animal hair can use this gloves to
              experience the feel of touching their pet.{" "}
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
              "assets/img/3-3.jpg",
              "Touch endangered animals",
              "assets/img/3-4.jpg"
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
          <MagicImg width="100%" data={["", "assets/img/5-3.jpg"]} />
        </Section>
        <Section>
          <MagicImg
            width="100%"
            data={[
              "Ready Player one",
              "assets/img/5-1.jpg",
              "For wearing equipment",
              "assets/img/5-2.jpg"
            ]}
          />
        </Section>
      </Section>

      <Section>
        <Code
          className="NOSCROLL"
          word="word"
          line="1-5|6-10|10-23"
          code="
        // 我是代码
        // 创建模型  
        const model = tf.sequential();  
        model.add(tf.layers.dense({units: 1, inputShape: [1]}));  
          
        // 编译模型  
        model.compile({loss: 'meanSquaredError', optimizer: 'sgd'});  
          
        // 准备训练数据  
        const xs = tf.tensor2d([[0], [1], [2], [3], [4], [5]], [6, 1]);  
        const ys = tf.tensor2d([[1], [3], [5], [7], [9], [11]], [6, 1]);  
          
        // 训练模型  
        model.fit(xs, ys, {epochs: 100}).then(() => {  
          // 使用模型进行预测  
          const prediction = model.predict(tf.tensor2d([6], [1, 1]));  
            
          // 打印预测结果  
          prediction.data().then((result) => {  
            console.log(result); // 输出 12.002  
          });  
        });  
   "
        />
      </Section>
      <Section trans="zoom">
        <BarChart
          data={[
            { year: "1951 年", sales: 0 },
            { year: "1952 年", sales: 52 },
            { year: "1956 年", sales: 61 },
            { year: "1957 年", sales: 45 },
            { year: "1958 年", sales: 48 },
            { year: "1959 年", sales: 38 },
            { year: "1960 年", sales: 38 },
            { year: "1962 年", sales: 38 }
          ]}
        />
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
          <MagicImg
            data={["PIC1", "http://bigonion.cn/background/wallheaven.jfif"]}
          />
        </Section>
        <Section>
          <MagicImg
            width="80%"
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
      <Section trans="convex-out">
        <ShadowMd
          className="FLEX JUS-CEN"
          style="*{font-size:4vh;}"
          md={`SHADOW MARKDOWN`}
        ></ShadowMd>
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
