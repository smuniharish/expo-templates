import { HomeNavigator } from '../Stack';

import { Icon } from '@/components/generic';
import { RouteNames, iconTypes } from '@/helpers/constants';
import { SRF, platformCalculate } from '@/helpers/functions';
import { heightPercent } from '@/helpers/functions/responsive';
import { useTheme } from '@/hooks';
import { FC, StyleSheet, Tabs } from '@/imports';
import { usei18n } from '@/providers/I18nProvider';

const TabNavigator: FC = () => {
  const { colors, fontSizes, iconSizes } = useTheme();
  const styles = StyleSheet.create({
    tabBarStyle: {
      backgroundColor: colors.background,
      height: platformCalculate(heightPercent(7), heightPercent(10)),
      borderTopColor: colors.primary,
      borderTopWidth: heightPercent(0.2),
    },
    tabBarLabelStyle: {
      fontSize: fontSizes.BASE,
      fontFamily: 'DMSansMedium',
      color: colors.primary,
    },
  });

  const i18nContext = usei18n();
  if (!i18nContext) return null;

  const TabsArray = [
    SRF(HomeNavigator, RouteNames.HOME_TAB, {
      title: i18nContext?.Home,
      tabBarIcon: ({ focused }: { focused: boolean }) => (
        <Icon
          type={iconTypes.Ionicons}
          name={focused ? 'home' : 'home-outline'}
          color={colors.primary}
          size={iconSizes.BASE}
        />
      ),
    }),
  ];
  return (
    <Tabs.Navigator
      initialRouteName={TabsArray[0].screen_name}
      screenOptions={{
        headerShown: false,
        tabBarAllowFontScaling: false,
        unmountOnBlur: true,
        tabBarStyle: styles.tabBarStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
      }}
    >
      {TabsArray.map((item) => (
        <Tabs.Screen name={item.screen_name} component={item.component} options={item.options} key={item.screen_name} />
      ))}
    </Tabs.Navigator>
  );
};

export default TabNavigator;
