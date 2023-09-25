import { AuthenticationNavigator } from '../Stack';
import TabNavigator from '../Tabs';

import { FC, NavigationContainer } from '@/imports';
import { useAuth } from '@/providers/context/AuthContextProvider';

const AppContainer: FC = () => {
  const authContext = useAuth();
  const { accessToken } = authContext;
  return <NavigationContainer>{accessToken ? <TabNavigator /> : <AuthenticationNavigator />}</NavigationContainer>;
};

export default AppContainer;
