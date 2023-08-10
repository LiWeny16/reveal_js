import React from "react"

export default function Pic(props) {
  let _className ="FLEX ROW JUS-SPA " 
  _className += props.className
  return (
    <div className={_className}>
      <div className="FLEX COL">
        <div className="P4">
          <h3>{props.data[0]}</h3>
        </div>
        <div>
          <img
            className="smallPic NOMARGIN  HOV-BIG"
            src={props.data[1]}
            alt="网络不佳"
          />
        </div>
      </div>
      {/* <div className="FLEX COL">
        <div className="P4">
          <h3>{props.data[2]}</h3>
        </div>
        <div>
          <img
            className="smallPic NOMARGIN  HOV-BIG"
            src={props.data[3]}
            alt="网络不佳"
          />
        </div>
      </div> */}
    </div>
  )
}
