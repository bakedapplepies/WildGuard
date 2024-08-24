import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconShare = (props: SvgProps) => (
  <Svg width={12} height={14} fill="none" {...props}>
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M10 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8.557 3.885a2 2 0 1 0-.49-.871l-4.624 2.6a2 2 0 1 0 0 2.77l4.624 2.602A2.004 2.004 0 0 0 10 13.5a2 2 0 1 0-1.443-3.385L3.933 7.514a2.003 2.003 0 0 0 0-1.028l4.624-2.6ZM2.864 6.496a.5.5 0 0 0 .016.028.996.996 0 0 1-.016.98 1 1 0 1 1 0-1.008Zm6.256 4.528a.405.405 0 0 0 .016-.028 1 1 0 1 1-.016.028Z"
      clipRule="evenodd"
    />
  </Svg>
);
