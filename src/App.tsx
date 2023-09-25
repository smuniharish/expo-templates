import { useLogSN, useTheme } from './hooks';
import { FC, enableScreens } from './imports';
import Providers from './providers';
import AppContainer from './routes/AppContainer';

enableScreens();
const App: FC = () => {
  useLogSN('App');
  const { colors } = useTheme();
  return (
    <Providers>
      <AppContainer />
    </Providers>
  );
};

export default App;
