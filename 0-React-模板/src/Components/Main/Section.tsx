import React from "react"
import { useEffect } from "react"

export default function Section(props: SectionOptions) {
  let _style: React.CSSProperties = {
    width: "100%",
    height: "100%"
  }

  const style = props.style ? { ...props.style, ..._style } : _style
  const transition = props.trans
  const background = props.back
  const backUrl = background?.match(/\//g) ? background : ""
  const autoAni = props.autoAni
  const autoAniId = props.autoAniId
  const className = props.className
  const html = props.html
  let [finalPropsForSection, setFinalPropsForSection] = React.useState(() => {
    return {}
  })
  /**
   * @description 注册属性名和数值
   * @param data string
   * @param name string
   */
  function assignProsForSection(data: any, name: any): any {
    if (data) {
      let additionObj = {}
      //@ts-ignore
      additionObj[`${name}`] = data
      setFinalPropsForSection((preObj) => {
        return { ...preObj, ...additionObj }
      })
    }
  }
  useEffect(() => {
    assignProsForSection(transition, "data-transition")
    assignProsForSection(background, "data-background-color")
    assignProsForSection(autoAni, "data-auto-animate")
    assignProsForSection(autoAniId, "data-auto-animate-id")
    assignProsForSection(backUrl, "data-background-image")
    assignProsForSection(background, "data-background-gradient")

    // !transition
    //   ? 1
    //   : setFinalPropsForSection((pre) => {
    //       return {
    //         ...pre,
    //         "data-transition": transition
    //       }
    //     })
    // !background
    //   ? 1
    //   : setFinalPropsForSection((pre) => {
    //       return {
    //         ...pre,
    //         "data-background-color": background
    //       }
    //     })
    // !autoAni
    //   ? 1
    //   : setFinalPropsForSection((pre) => {
    //       return {
    //         ...pre,
    //         "data-auto-animate": autoAni
    //       }
    //     })
  }, [])

  // animation ?? (propsEn.tran = 1)
  // background ?? (propsEn.back = 1)
  if (props.children) {
    //传送对象
    return (
      <>
        <section
          style={{ ...style }}
          className={className}
          {...finalPropsForSection}
        >
          {props.children}
        </section>
      </>
    )
  }
  if (html) {
    return (
      <>
        <section
          {...finalPropsForSection}
          dangerouslySetInnerHTML={{ __html: props.html }}
        ></section>
      </>
    )
  }
}
