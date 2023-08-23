import { createContext, useState } from '@/imports';
interface userInterface {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
}
type AuthContextType = {
  accessToken: string | null;
  userDetails: userInterface | undefined;
  setAccessToken: (value: any) => void;
  setUserDetails: (value: any) => void;
};
export const AuthContext = createContext<AuthContextType | null>(null);
const AuthContextProvider = (props: any) => {
  const [accessToken, setAccessToken] = useState(null);
  const [userDetails, setUserDetails] = useState();
  return (
    <AuthContext.Provider value={{ accessToken, userDetails, setAccessToken, setUserDetails }}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
