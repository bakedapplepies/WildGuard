import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconTaxonomy = (props: SvgProps) => (
  <Svg width={18} height={18} fill="none" {...props}>
    <Path
      fill="#080100"
      fillRule="evenodd"
      d="m14 13-4-4V5.82C11.16 5.4 12 4.3 12 3c0-1.66-1.34-3-3-3S6 1.34 6 3c0 1.3.84 2.4 2 2.82V9l-4 4H0v5h5v-3.05l4-4.2 4 4.2V18h5v-5h-4Z"
      clipRule="evenodd"
    />
  </Svg>
);
