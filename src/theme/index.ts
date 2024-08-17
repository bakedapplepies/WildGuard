import { extendTheme } from "native-base";

/**
 * Trong cac component co the dung useTheme
 */

export const colorTheme = {
  primary: {
    50: "#FFF7F8",
    100: "#FFDEE1",
    200: "#FFC5CA",
    300: "#FFACB3",
    400: "#FF929C",
    500: "#FF7985",
    600: "#FF606E",
    700: "#D5505C",
    800: "#AA4049",
    900: "#803037",
  },
};

export const appTheme = extendTheme({
  colors: colorTheme,
  fontConfig: {
    Manrope: {
      200: {
        normal: "Manrope_200ExtraLight",
      },
      300: {
        normal: "Manrope_300Light",
      },
      400: {
        normal: "Manrope_400Regular",
      },
      500: {
        normal: "Manrope_500Medium",
      },
      600: {
        normal: "Manrope_600SemiBold",
      },
      700: {
        normal: "Manrope_700Bold",
      },
      800: {
        normal: "Manrope_800ExtraBold",
      },
      900: {
        normal: "NunitoSans_900Black",
      },
    },
  },
  fonts: {
    heading: "Manrope",
    body: "Manrope",
    mono: "Manrope",
  },
});

export type AppThemeType = typeof appTheme;
declare module "native-base" {
  interface ICustomTheme extends AppThemeType {}
}
export default appTheme;
