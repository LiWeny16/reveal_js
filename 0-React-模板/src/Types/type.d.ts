// import { Properties } from "csstype"

interface ImgOptions extends NormalComponentsOptions {
  data: Array<ImgData>
  settings?: ImgSettings
}
/**
 * @zh 设置
 * @en Raster number of cells to occupy
 * @defaultValue 24
 */
interface ImgSettings {
  layout?: Layout4
  magic?: boolean
  draggable?: boolean
}

interface ScrollDirOptions extends NormalComponentsOptions {}

interface ImgData {
  src: string
  text?: any
  width?: any
}
type Color = React.CSSProperties["color"]

interface TextBoxOptions extends NormalComponentsOptions, React.CSSProperties {
  wrap?: boolean
  color?: Color
  tA?: React.CSSProperties["textAlign"]
  fS?: React.CSSProperties["fontSize"]
  data?: string
}

interface NormalComponentsOptions extends React.HTMLProps<HTMLDivElement> {
  // className?: string
  children?: React.ReactNode | JSX.Element
  style?: React.CSSProperties | undefined
}

/**
 * @description 布局
 */
type Layout4 = {
  L1?: IntRange<0, 25>
  L2?: [number, number]
}

interface LayoutOptions extends NormalComponentsOptions {
  jus?: React.CSSProperties["justifyContent"]
  ali?: React.CSSProperties["alignItems"]
  dir?: React.CSSProperties["flexDirection"]
  space?: Array<number>
  order?: Array<number>
  move?: Movement
  min?: boolean
}

interface Movement {
  x?: any
  y?: any
}

/**
 * @description Section的选项
 */
interface SectionOptions extends NormalComponentsOptions {
  trans?: TransType | string
  back?: any
  autoAni?: any
  autoAniId?: any
  html?: any
}
type TransType =
  | "none"
  | "fade"
  | "slide"
  | "convex"
  | "concave"
  | "zoom"
  // | "fade-in"
  // | "fade-out"
  // | "zoom-in"
  // | "zoom-out"
  // | "convex-in"
  // | "convex-out"
  // | "slide-in"
  // | "slide-out"

type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc["length"] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc["length"]]>

type IntRange<F extends number, T extends number> = Exclude<
  Enumerate<T>,
  Enumerate<F>
>
