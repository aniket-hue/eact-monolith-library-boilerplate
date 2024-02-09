import { BoxPropTypesDollared, CSSKeys } from "./types";

export const orientationSpacing = (
  props: BoxPropTypesDollared,
  key: string extends `$${infer D}${string}`
    ? D extends "margin" | "padding"
      ? D
      : keyof BoxPropTypesDollared
    : keyof BoxPropTypesDollared
): string => {
  const margin: [number, number] = [0, 0];

  const horizontalKey = `${key}X`;
  const verticalKey = `${key}Y`;

  if (props[`${key}`]) {
    return valueHelpers(props, key);
  }

  if (props[verticalKey]) {
    margin[0] = props[verticalKey];
  }

  if (props[horizontalKey]) {
    margin[1] = props[horizontalKey];
  }

  return margin.map((e) => (e ? `${e}px` : "0px")).join(" ");
};

export const valueHelpers = (
  props: BoxPropTypesDollared,
  k: keyof BoxPropTypesDollared,
  withUnit = true
): string => {
  const key = k;

  return typeof props[key] === "string"
    ? props[key]
    : props[key] === undefined
    ? undefined
    : withUnit
    ? props[key] + "px"
    : props[key];
};

export const cssKeys: {
  [_k in CSSKeys]:
    | boolean
    | {
        fn: typeof valueHelpers | typeof orientationSpacing;
      };
} = {
  overflow: true,
  cursor: true,
  zIndex: true,
  verticalAlign: true,

  display: true,
  alignItems: true,
  alignContent: true,
  justifyItems: true,
  justifyContent: true,
  flexWrap: true,
  flexDirection: true,
  flex: {
    fn: (p, k) => valueHelpers(p, k, false),
  },
  flexGrow: true,
  flexShrink: true,
  flexBasis: true,
  justifySelf: true,
  alignSelf: true,
  order: {
    fn: (p, k) => valueHelpers(p, k, false),
  },
  gap: true,

  gridColumn: true,
  gridRow: true,
  gridAutoFlow: true,
  gridAutoColumns: true,
  gridAutoRows: true,
  gridTemplateColumns: true,
  gridTemplateRows: true,
  gridTemplateAreas: true,
  gridArea: true,

  width: true,
  maxWidth: true,
  height: true,
  maxHeight: true,

  position: true,
  top: true,
  right: true,
  left: true,
  bottom: true,

  backgroundColor: true,
  background: true,

  border: true,
  borderColor: true,
  borderRadius: true,
  borderWidth: true,
  borderStyle: true,

  margin: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  marginTop: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  marginBottom: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  marginLeft: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  marginRight: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  paddingY: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  paddingX: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  padding: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  paddingTop: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  paddingBottom: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  paddingLeft: {
    fn: (p, k) => orientationSpacing(p, k),
  },
  paddingRight: {
    fn: (p, k) => orientationSpacing(p, k),
  },

  transform: true,
  transition: true,
  animation: true,

  boxShadow: true,
};
