import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconCircle = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#737373"
      fillRule="evenodd"
      d="M2.25 12c0-5.383 4.367-9.75 9.75-9.75s9.75 4.367 9.75 9.75-4.367 9.75-9.75 9.75S2.25 17.383 2.25 12ZM12 3.75A8.252 8.252 0 0 0 3.75 12 8.252 8.252 0 0 0 12 20.25 8.252 8.252 0 0 0 20.25 12 8.252 8.252 0 0 0 12 3.75Z"
      clipRule="evenodd"
    />
  </Svg>
);
