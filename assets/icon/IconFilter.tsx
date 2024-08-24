import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconFilter = (props: SvgProps) => (
  <Svg width={20} height={18} fill="none" {...props}>
    <Path
      fill="#A3A3A3"
      fillRule="evenodd"
      d="M13.75 2.25a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.122 0a2.251 2.251 0 0 1 4.244 0H19a.75.75 0 0 1 0 1.5h-3.128a2.251 2.251 0 0 1-4.244 0H1a.75.75 0 0 1 0-1.5h10.628Zm-5.378 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.122 0a2.25 2.25 0 0 1 4.244 0H19a.75.75 0 0 1 0 1.5H8.372a2.25 2.25 0 0 1-4.244 0H1a.75.75 0 0 1 0-1.5h3.128Zm9.622 6a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5Zm-2.122 0a2.251 2.251 0 0 1 4.244 0H19a.75.75 0 0 1 0 1.5h-3.128a2.251 2.251 0 0 1-4.244 0H1a.75.75 0 0 1 0-1.5h10.628Z"
      clipRule="evenodd"
    />
  </Svg>
);
