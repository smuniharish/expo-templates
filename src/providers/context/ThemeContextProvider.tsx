import { fontSizes, iconSizes } from '@/config';
import { fontSizesInterface } from '@/config/fontSizes';
import { iconSizesInterface } from '@/config/iconSizes';
import { createContext, useColorScheme } from '@/imports';

type Theme = {
  colors: {
    primary: string;
    screenBackground: string;
    inputTextColor: string;
    background: string;
    card: string;
    text: string;
    black: string;
    buttonText: string;
    border: string;
    errorText: string;
    successText: string;
    orange: string;
    pink: string;
    purple: string;
    darkYellow: string;
    ramaGreen: string;
    lacon: string;
    lightPurple: string;
    backdrop: string;
    lightGray: string;
    white: string;
    gray: string;
  };
  fontSizes: fontSizesInterface;
  iconSizes: iconSizesInterface;
};
const DefaultTheme: Theme = {
  colors: {
    primary: 'rgb(43, 32, 126)',
    screenBackground: 'rgb(242,242,242)',
    inputTextColor: 'rgba(0, 0, 0, 0.8)',
    text: 'rgb(0, 0, 0)',
    background: 'rgb(255,255,255)',
    card: 'rgb(255, 255, 255)',
    black: 'rgb(0, 0, 0)',
    buttonText: 'rgb(255, 255, 255)',
    border: 'rgb(195, 193, 193)',
    errorText: 'rgb(209, 10, 0)',
    successText: 'rgb(36, 153, 0)',
    orange: 'rgb(248, 137, 34)',
    pink: 'rgb(251, 106, 112)',
    purple: 'rgb(57, 81, 133)',
    darkYellow: 'rgb(230, 182, 78)',
    ramaGreen: 'rgb(4, 102, 101)',
    lacon: 'rgb(248, 119, 74)',
    lightPurple: 'rgb(241, 148, 255)',
    backdrop: 'rgba(117, 130, 131, 0.5)',
    lightGray: 'rgba(117, 130, 131)',
    gray: 'rgba(231, 231, 231, 0.78)',
    white: 'rgb(255, 255, 255)',
  },
  fontSizes: {
    ...fontSizes,
  },
  iconSizes: {
    ...iconSizes,
  },
};
const LightTheme: Theme = {
  colors: {
    ...DefaultTheme.colors,
  },
  fontSizes: { ...fontSizes },
  iconSizes: { ...iconSizes },
};
const DarkTheme: Theme = {
  colors: {
    ...DefaultTheme.colors,
    primary: 'rgb(255, 255, 255)',
    screenBackground: 'rgba(0, 0, 0, 0.8)',
    inputTextColor: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    background: 'rgb(43, 32, 126)',
    card: 'rgb(0, 0, 0)',
    black: 'rgb(255, 255, 255)',
    buttonText: 'rgb(43, 32, 126)',
    border: 'rgb(195, 193, 193)',
    errorText: 'rgb(209, 10, 0)',
    successText: 'rgb(36, 153, 0)',
    orange: 'rgb(57, 81, 133)',
    pink: 'rgb(251, 106, 112)',
    purple: 'rgb(57, 81, 133)',
    darkYellow: 'rgb(230, 182, 78)',
    ramaGreen: 'rgb(4, 102, 101)',
    lacon: 'rgb(248, 119, 74)',
    lightPurple: 'rgb(241, 148, 255)',
    backdrop: 'rgba(117, 130, 131, 0.5)',
    lightGray: 'rgba(117, 130, 131)',
    gray: 'rgba(182, 187, 182, 0.78)',
    white: 'rgb(255, 255, 255)',
  },
  fontSizes: { ...fontSizes },
  iconSizes: { ...iconSizes },
};
export const ThemeContext = createContext<Theme>(LightTheme);

const ThemeContextProvider = (props: any) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeContext.Provider value={colorScheme === 'light' ? LightTheme : DarkTheme}>
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
