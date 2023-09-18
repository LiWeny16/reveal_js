import React from "react"

export default function Iframe(props) {
  return (
    <>
      <iframe style={props.style} data-src={props.src} data-preload></iframe>
    </>
  )
}
