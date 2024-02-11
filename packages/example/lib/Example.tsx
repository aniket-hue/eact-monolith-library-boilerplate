import React, { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<{}>;

export const Example: React.FC<BoxProps> = (props) => {
  return <div>{props.children}</div>;
};
