import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconClose = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M2.25 12c0-5.383 4.367-9.75 9.75-9.75s9.75 4.367 9.75 9.75-4.367 9.75-9.75 9.75S2.25 17.383 2.25 12ZM12 3.75A8.252 8.252 0 0 0 3.75 12 8.252 8.252 0 0 0 12 20.25 8.252 8.252 0 0 0 20.25 12 8.252 8.252 0 0 0 12 3.75ZM8.47 8.47a.75.75 0 0 1 1.06 0L12 10.94l2.47-2.47a.75.75 0 1 1 1.06 1.06L13.06 12l2.47 2.47a.75.75 0 1 1-1.06 1.06L12 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06L10.94 12 8.47 9.53a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
);
