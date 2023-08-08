import { english, telugu } from "./languages"

interface languageInterface {
    id:number,
    code:string,
    name:string
}

const availableLanguages:languageInterface[] = [
    {id:1,code:'en-IN',name:"English"},
    {id:2,code:'te',name:"Telugu"},
]
const translations = {
    "en-IN":english,
    "te":telugu
}
export {availableLanguages,translations,languageInterface}