import React from "react"
import { useEffect } from "react"

export default function Section(props: any) {
  const transition = props.trans
  const background = props.back
  const autoAni = props.autoAni
  const autoAniId = props.autoAniId

  let [finalPropsForSection, setFinalPropsForSection] = React.useState(() => {
    return {}
  })
  function assignProsForSection(data: any, name: string) {
    if (data) {
      let additionObj = {}
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
        <section {...finalPropsForSection}>{props.children}</section>
      </>
    )
  }
  if (props.html) {
    return (
      <>
        <section
          data-transition={transition}
          dangerouslySetInnerHTML={{ __html: props.html }}
        ></section>
      </>
    )
  }
}
