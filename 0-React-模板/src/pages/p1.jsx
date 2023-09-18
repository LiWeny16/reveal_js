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
        <div className="P2">Natrue experience</div>
        <hr />
        <div className="P3">bigonion</div>
      </Section>
      <Section back="black">
        <Directory></Directory>
      </Section>
      {/* <Section>
        <VideoPlayer src="https://bigonion.cn/src/myMusic/%E9%82%A3%E5%B9%B4%E6%B2%B3%E7%95%94.mp4" />
      </Section> */}
      <Section>
        <Md
          data={`
$$
\\begin{bmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{bmatrix}
*
\\begin{bmatrix}
1&2&3\\\\
4&5&6\\\\
7&8&9
\\end{bmatrix}=?
$$
`}
        />
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
        <ListAdd className="NOLIST MARGIN-LEFT LEFT" back="white">
          <li>如来?</li>
          <li>它真来了吗？ </li>
          <li>如来...</li>
        </ListAdd>
      </Section> */}
    </>
  )
}
