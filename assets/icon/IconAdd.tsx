import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
export const IconAdd = (props: SvgProps) => (
  <Svg width={44} height={44} fill="none" {...props}>
    <Rect width={44} height={44} fill="url(#a)" rx={22} />
    <Path
      fill="#FAFAFA"
      fillRule="evenodd"
      d="M22 14.5a.75.75 0 0 1 .75.75v6h6a.75.75 0 0 1 0 1.5h-6v6a.75.75 0 0 1-1.5 0v-6h-6a.75.75 0 0 1 0-1.5h6v-6a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={44}
        y1={22}
        y2={22}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.285} stopColor="#FF5F6D" />
        <Stop offset={1} stopColor="#FFC371" />
      </LinearGradient>
    </Defs>
  </Svg>
);
