import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconSearch = (props: SvgProps) => (
  <Svg width={20} height={20} fill="none" {...props}>
    <Path
      fill="#A3A3A3"
      fillRule="evenodd"
      d="M3.856 1.617a8.114 8.114 0 0 1 12.621 6.746 8.114 8.114 0 0 1-1.87 5.183l4.923 4.924a.75.75 0 1 1-1.06 1.06l-4.924-4.924a8.11 8.11 0 0 1-10.92-.505 8.113 8.113 0 0 1 1.23-12.484Zm4.508.133a6.614 6.614 0 1 0 6.613 6.614M8.364 1.75a6.614 6.614 0 0 1 6.613 6.614"
      clipRule="evenodd"
    />
  </Svg>
);
