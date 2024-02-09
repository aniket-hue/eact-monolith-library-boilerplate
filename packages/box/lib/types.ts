import { CSSProperties } from "react";
import IntrinsicElements = React.JSX.IntrinsicElements;

export type Spacing = number | "auto";

export type CustomCSSKeys = "marginX" | "marginY" | "paddingX" | "paddingY";

export type GetCSSPropertyType<D> = D extends keyof CSSProperties
  ? CSSProperties[D]
  : Spacing;

export type BoxPropTypes = Partial<
  {
    [k in CSSKeys]: k extends CSSKeys
      ? k extends CustomCSSKeys
        ? Spacing
        : GetCSSPropertyType<k>
      : any;
  } & IntrinsicElements["div"]
>;

export type BoxPropTypesDollared = Partial<{
  [k in `$${CSSKeys}`]: k extends `$${infer D}`
    ? D extends keyof CSSProperties
      ? GetCSSPropertyType<D>
      : any
    : any;
}>;

export type CSSKeys =
  | "overflow"
  | "cursor"
  | "zIndex"
  | "verticalAlign"
  | "display"
  | "alignItems"
  | "alignContent"
  | "justifyItems"
  | "justifyContent"
  | "flexWrap"
  | "flexDirection"
  | "flex"
  | "flexGrow"
  | "flexShrink"
  | "flexBasis"
  | "justifySelf"
  | "alignSelf"
  | "order"
  | "gridColumn"
  | "gridRow"
  | "gridAutoFlow"
  | "gridAutoColumns"
  | "gridAutoRows"
  | "gridTemplateColumns"
  | "gridTemplateRows"
  | "gridTemplateAreas"
  | "gridArea"
  | "width"
  | "maxWidth"
  | "height"
  | "maxHeight"
  | "position"
  | "top"
  | "right"
  | "left"
  | "bottom"
  | "backgroundColor"
  | "background"
  | "border"
  | "borderColor"
  | "borderRadius"
  | "borderWidth"
  | "borderStyle"
  | "margin"
  | "marginTop"
  | "marginBottom"
  | "marginLeft"
  | "marginRight"
  | "paddingY"
  | "paddingX"
  | "padding"
  | "paddingTop"
  | "paddingBottom"
  | "paddingLeft"
  | "paddingRight"
  | "transform"
  | "transition"
  | "animation"
  | "gap"
  | "boxShadow";
