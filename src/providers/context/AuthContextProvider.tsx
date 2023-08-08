import { createContext, useState } from "@/imports";

interface tokenInterface {
  accessToken: string | null;
  expiryTime: number | null;
}
interface userInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
}
type AuthContextType = {
  tokenDetails: tokenInterface | undefined;
  userDetails: userInterface | undefined;
  setTokenDetails: (value: any) => void;
  setUserDetails: (value: any) => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);
const AuthContextProvider = (props: any) => {
  const [tokenDetails, setTokenDetails] = useState();
  const [userDetails, setUserDetails] = useState();
  return (
    <AuthContext.Provider
      value={{ tokenDetails, userDetails, setTokenDetails, setUserDetails }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
