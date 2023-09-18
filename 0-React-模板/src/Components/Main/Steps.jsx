import React from "react"
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined
} from "@ant-design/icons"
import { Steps } from "antd"
import { useState } from "react"
import { useEffect } from "react"

const App = (props) => {
  // console.log(props);
  let [items, setItems] = useState(props.data)
  useEffect(() => {
    setTimeout(() => {
      setItems((pre) => {
        return [items[0], items[1], items[2], items[3]]
      })
    }, 3000)
  }, [])
  return <Steps items={items} />
}

export default App
