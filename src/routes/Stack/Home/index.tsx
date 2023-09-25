import { platformCalculate } from '@/helpers/functions';
import { heightPercent } from '@/helpers/functions/responsive';
import { useTheme } from '@/hooks';
import { FC, Stack, StyleSheet } from '@/imports';
import { Home } from '@/screens';

const HomeNavigator: FC = () => {
  const { colors, fontSizes } = useTheme();
  const styles = StyleSheet.create({
    headerTitleStyle: {
      fontSize: fontSizes.MD,
      fontFamily: 'DMSansMedium',
      color: colors.black,
      fontWeight: 'bold',
    },
    headerStyle: {
      backgroundColor: colors.screenBackground,
      height: platformCalculate(heightPercent(7), heightPercent(10)),
    },
    headerBackTitleStyle: {
      color: colors.black,
      fontSize: fontSizes.SM,
      fontFamily: 'DMSansMedium',
    },
  });
  return (
    <Stack.Navigator
      initialRouteName={Home[0].screen_name}
      screenOptions={{
        gestureEnabled: true,
        headerBackAllowFontScaling: false,
        headerTitleStyle: styles.headerTitleStyle,
        headerStyle: styles.headerStyle,
        headerTitleAlign: 'center',
        headerBackTitleVisible: true,
        headerBackTitleStyle: styles.headerBackTitleStyle,
      }}
    >
      {Home.map((item) => (
        <Stack.Screen
          name={item.screen_name}
          component={item.component}
          options={item.options}
          key={item.screen_name}
        />
      ))}
    </Stack.Navigator>
  );
};

export default HomeNavigator;
