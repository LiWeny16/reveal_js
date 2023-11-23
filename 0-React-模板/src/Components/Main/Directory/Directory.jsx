import { Carousel } from "antd"
const contentStyle = {
  margin: 0,
  height: "90vh",
  color: "black",
  lineHeight: "100vh",
  textAlign: "center",
  background: "pink",
  fontSize: "16vh",
  userSelect: "none",
  border: "none"
}

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

import MagicImg from "@Main/Img/MagicImg"

const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }
  return (
    <Carousel style={{ border: "none" }} afterChange={onChange}>
      <div>
        <h1 style={contentStyle}>2.Introduction</h1>
      </div>
      <div>
        <div style={contentStyle}>
          {/* <br /> */}
          <MagicImg width={["40vh","40vh"]} data={[" ", p2_2_1," ", p2_2_2]}></MagicImg>
        </div>
        {/* <h1 style={contentStyle}>1.Background</h1> */}
      </div>
      <div>
        <h1 style={contentStyle}>3.Application</h1>
      </div>
      <div>
        <h1 style={contentStyle}>4.DEMO</h1>
      </div>
      <div>
        <h1 style={contentStyle}>5.future</h1>
      </div>
    </Carousel>
  )
}
export default App
