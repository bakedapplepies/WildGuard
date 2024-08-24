import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
export const IconAddSong = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M12 4.5a.75.75 0 0 1 .75.75v6h6a.75.75 0 0 1 0 1.5h-6v6a.75.75 0 0 1-1.5 0v-6h-6a.75.75 0 0 1 0-1.5h6v-6A.75.75 0 0 1 12 4.5Z"
      clipRule="evenodd"
    />
  </Svg>
);
