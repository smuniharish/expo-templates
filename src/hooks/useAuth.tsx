import { useContext } from '@/imports';
import { AuthContext } from '@/providers/context/AuthContextProvider';

const useAuth = () => {
  return useContext(AuthContext);
};
export default useAuth;
