import { forwardRef, PropsWithChildren } from "react";
import { LoadingButton } from "@atlaskit/button";

import { ButtonProps } from "./types";

// eslint-disable-next-line react/display-name
export const Button = forwardRef<HTMLElement, PropsWithChildren<ButtonProps>>(
  ({ children, ...props }, ref) => {
    return (
      <LoadingButton ref={ref} {...props}>
        {children}
      </LoadingButton>
    );
  }
);
