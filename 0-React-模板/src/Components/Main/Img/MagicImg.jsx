import "react-photo-view/dist/react-photo-view.css"
import { PhotoProvider, PhotoView } from "react-photo-view"

export default function MagicImg(props) {
  let _className = "FLEX ROW JUS-SPA "
  _className += props.className

  if (props.data) {
    return (
      <>
        <div className={_className}>
          <div className="FLEX COL">
            <div className="P3">
              <p>{props.data[0]}</p>
            </div>
            <div>
              <PhotoProvider>
                <PhotoView src={props.data[1]}>
                  <img
                    className="NOMARGIN HOV-BIG"
                    style={{ width: props.width ?? "50%" }}
                    src={props.data[1]}
                    alt="网络不佳"
                  />
                </PhotoView>
              </PhotoProvider>
            </div>
          </div>
          {props.data[2] && props.data[3] ? (
            <div className="FLEX COL">
              <div className="P3">
                <p>{props.data[2]}</p>
              </div>
              <div>
                <PhotoProvider>
                  <PhotoView src={props.data[3]}>
                    <img
                      className="NOMARGIN HOV-BIG"
                      style={{ width: props.width ?? "50%" }}
                      src={props.data[3]}
                      alt="网络不佳"
                    />
                  </PhotoView>
                </PhotoProvider>
              </div>
            </div>
          ) : undefined}
        </div>
      </>
    )
  }
}
