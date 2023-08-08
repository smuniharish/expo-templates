import { LOGIN_API } from "./apiConstants"
import { postAPIWithoutTokenHelper } from "./apiHelpers"

// Initialize the api related functions with the help of apiHelpers
// const postLogin = async(username:string,password:string) =>{
//     const url = `${LOGIN_API}/username=${username}&&password=${password}`
//     try{
//         const result = await  postAPIWithoutTokenHelper(url,data)
//     }catch{

//     }
// }