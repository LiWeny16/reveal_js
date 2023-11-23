//@ts-nocheck

import JoLPlayer from "jol-player"
import {
  Player,
  ControlBar,
  PlayToggle, // PlayToggle 播放/暂停按钮 若需禁止加 disabled
  ReplayControl, // 后退按钮
  ForwardControl, // 前进按钮
  CurrentTimeDisplay,
  TimeDivider,
  PlaybackRateMenuButton, // 倍速播放选项
  VolumeMenuButton
} from "video-react"
import "video-react/dist/video-react.css" // import css

let App = (props: { src: any }) => (
  <>
    {/* <JoLPlayer
        option={{
          videoSrc:
            "https://bigonion.cn/src/myMusic/%E9%82%A3%E5%B9%B4%E6%B2%B3%E7%95%94.mp4",
          width: 520,
          height: 320,
          language: "en"
        }}
      /> */}
    {/* <ShadowRootWrapper> */}
    <Player
      // ref={(ref) => (this.player = ref)}
      playsInline
      autoPlay={false}
      src={
        props.src
      }
    >
      {/* <Shortcut clickable={false} dblclickable={false} /> */}
      {/* <BigPlayButton position="center" /> */}
      <ControlBar
        className="controlBar"
        autoHide={true}
        disableDefaultControls={false}
      />
    </Player>

    {/* </ShadowRootWrapper> */}
  </>
)

export default App
