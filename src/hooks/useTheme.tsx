import { useContext } from "@/imports"
import { ThemeContext } from "@/providers/context/ThemeContextProvider"

const useTheme = ()=>{
    const theme = useContext(ThemeContext)
    return theme
}
export default useTheme