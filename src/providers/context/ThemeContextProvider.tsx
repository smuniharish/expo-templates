import { fontSizes, iconSizes } from "@/config";
import { fontSizesInterface } from "@/config/fontSizes";
import { iconSizesInterface } from "@/config/iconSizes";
import { createContext, useColorScheme } from "@/imports";

type Theme = {
  colors:{
    primary:string,
    background:string,
    card:string,
    text:string,
    border:string,
    notification:string,
    test:string
  },
  fontSizes:fontSizesInterface,
  iconSizes:iconSizesInterface
};
const DefaultTheme:Theme={
  colors:{
    primary: 'rgb(0, 122, 255)',
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(216, 216, 216)',
    notification: 'rgb(255, 59, 48)',
    test: 'rgb(255, 59, 48)',
  },
  fontSizes:{
    ...fontSizes
  },
  iconSizes:{
    ...iconSizes
  }
}
const LightTheme:Theme = {
  colors:{
    ...DefaultTheme.colors,
  },
  fontSizes:{...fontSizes},
  iconSizes:{...iconSizes},
}
const DarkTheme:Theme = {
  colors:{
    ...DefaultTheme.colors,
    test:'rgb(242, 242, 242)'
  },
  fontSizes:{...fontSizes},
  iconSizes:{...iconSizes},
}
export const ThemeContext = createContext<Theme>(LightTheme);

const ThemeContextProvider = (props:any) => {
  const colorScheme = useColorScheme();
  return (
    <ThemeContext.Provider
      value={colorScheme === "light" ? LightTheme : DarkTheme}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};
export default ThemeContextProvider;
