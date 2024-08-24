import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconSwap = (props: SvgProps) => (
  <Svg width={18} height={14} fill="none" {...props}>
    <Path
      fill="#737373"
      fillRule="evenodd"
      d="M5.25.125c.345 0 .625.28.625.625v10.991l3.308-3.308a.625.625 0 1 1 .884.884l-4.375 4.375a.625.625 0 0 1-.884 0L.433 9.317a.625.625 0 1 1 .884-.884l3.308 3.308V.75c0-.345.28-.625.625-.625Zm7.058.183a.625.625 0 0 1 .884 0l4.375 4.375a.625.625 0 1 1-.884.884l-3.308-3.308V13.25a.625.625 0 1 1-1.25 0V2.259L8.817 5.567a.625.625 0 1 1-.884-.884L12.308.308Z"
      clipRule="evenodd"
    />
  </Svg>
);
