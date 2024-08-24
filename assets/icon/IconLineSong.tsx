import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
export const IconLineSong = (props: SvgProps) => (
  <Svg width={358} height={8} fill="none" {...props}>
    <Path stroke="#737373" strokeWidth={4} d="M0 4h358" />
    <Path stroke="#FF606E" strokeWidth={4} d="M0 4h217" />
    <Circle cx={219} cy={4} r={4} fill="#FF606E" />
  </Svg>
);
