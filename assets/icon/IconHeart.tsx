import * as React from "react";
import Svg, {
  SvgProps,
  Rect,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
export const IconHeart = (props: SvgProps) => (
  <Svg width={44} height={44} fill="none" {...props}>
    <Rect width={44} height={44} fill="url(#a)" rx={22} />
    <Path
      fill="#FAFAFA"
      d="M22 31c-.295 0-.586-.09-.844-.262-1.762-1.196-4.322-3.047-6.16-5.288-1.874-2.283-2.774-4.631-2.746-7.172.028-2.91 2.367-5.278 5.208-5.278 2.254 0 3.75 1.383 4.542 2.39.792-1.007 2.287-2.39 4.542-2.39 2.84 0 5.175 2.367 5.208 5.278.023 2.54-.872 4.89-2.747 7.172-1.837 2.24-4.397 4.092-6.16 5.288A1.47 1.47 0 0 1 22 31Zm-4.542-16.5c-2.02 0-3.685 1.702-3.708 3.797C13.698 23.2 17.894 26.716 22 29.5c4.106-2.79 8.302-6.3 8.25-11.203-.023-2.09-1.683-3.797-3.708-3.797-2.531 0-3.862 2.56-3.872 2.587a.746.746 0 0 1-.67.413.742.742 0 0 1-.67-.417c-.014-.024-1.346-2.583-3.872-2.583Z"
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
