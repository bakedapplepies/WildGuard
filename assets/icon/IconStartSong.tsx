import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
export const IconStartSong = (props: SvgProps) => (
  <Svg width={64} height={64} fill="none" {...props}>
    <Rect width={64} height={64} fill="url(#a)" rx={32} />
    <Path
      fill="#FAFAFA"
      d="M28.235 40.625c-.287 0-.57-.076-.82-.219a1.843 1.843 0 0 1-.912-1.609V25.203c0-.673.35-1.29.912-1.609a1.647 1.647 0 0 1 1.677.021L40.71 30.57a1.688 1.688 0 0 1 0 2.859l-11.62 6.956a1.664 1.664 0 0 1-.855.24Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={0}
        x2={64}
        y1={32}
        y2={32}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.285} stopColor="#FF5F6D" />
        <Stop offset={1} stopColor="#FFC371" />
      </LinearGradient>
    </Defs>
  </Svg>
);
