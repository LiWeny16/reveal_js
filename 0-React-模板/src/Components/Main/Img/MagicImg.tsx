import "react-photo-view/dist/react-photo-view.css"
import { PhotoProvider, PhotoView } from "react-photo-view"
import { Grid } from "@arco-design/web-react"
import React from "react"

const Row = Grid.Row
const Col = Grid.Col

export default function MagicImg(props: ImgOptions) {
  let _className = "MagicImage "
  let _style: React.CSSProperties = {}

  let [propsMerge, _NU_1] = React.useState<ImgOptions>({
    style: props.style ? { ...props.style, ..._style } : _style,
    className: _className + (props.className ?? ""),
    settings: {
      layout: { L1: 24, L2: [0, 0], ...props.settings?.layout },
      magic: props.settings?.magic ?? true,
    },
    data: [{ ...props.data[0] }, { ...props.data[1] }],
  })
  let img0 = propsMerge.data![0]
  let img1 = propsMerge.data![1] ?? undefined
  let isTow = propsMerge.data?.[1].src ? true : false
  let layout = propsMerge.settings!.layout!
  // console.log(propsMerge)
  let _img_style: React.CSSProperties = {
    width: img0.width,
    userSelect: "none",
  }

  if (props.data) {
    return (
      <div
        {...propsMerge}
        {...props}
        className={propsMerge.className}
        style={propsMerge.style}
      >
        <Row style={{ marginBottom: 16 }}>
          <Col span={layout.L1}>
            <Row gutter={[0, layout.L2![0]]}>
              <Col span={24}>{img0.text ?? undefined}</Col>
              <Col span={24}>
                {propsMerge.settings?.magic ? (
                  <PhotoProvider>
                    <PhotoView src={img0.src}>
                      <img
                        className="NOMARGIN HOV-BIG"
                        style={_img_style}
                        src={img0.src}
                        alt="网络不佳"
                      />
                    </PhotoView>
                  </PhotoProvider>
                ) : (
                  <img
                    className="NOMARGIN"
                    style={_img_style}
                    src={img0.src}
                    alt="网络不佳"
                  />
                )}
              </Col>
            </Row>
          </Col>
          {isTow ? (
            <Col span={12}>
              <Row gutter={[0, layout.L2![1]]}>
                <Col span={24}>{img1.text}</Col>
                <Col span={24}>
                  {propsMerge.settings?.magic ? (
                    <PhotoProvider>
                      <PhotoView src={img1.src}>
                        <img
                          className="NOMARGIN HOV-BIG"
                          style={_img_style}
                          src={img1.src}
                          alt="网络不佳"
                        />
                      </PhotoView>
                    </PhotoProvider>
                  ) : (
                    <img
                      className="NOMARGIN"
                      style={_img_style}
                      src={img1.src}
                      alt="网络不佳"
                    />
                  )}
                </Col>
              </Row>
            </Col>
          ) : undefined}
        </Row>
      </div>
    )
  }
}
