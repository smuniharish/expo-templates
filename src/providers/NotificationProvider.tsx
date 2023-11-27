import { infoLog, warnLog } from '@/config/logsConfig';
import { stringifyValue } from '@/helpers/functions';
import { Constants, Device, FC, Notifications, Platform, useEffect, useState } from '@/imports';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});
async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = await Notifications.getExpoPushTokenAsync({
      projectId: Constants.easConfig?.projectId,
    });
    infoLog('token', stringifyValue(token), Constants.easConfig?.projectId);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}
const NotificationProvider: FC<any> = (props: any) => {
  const [expoPushToken, setExpoPushToken] = useState<Notifications.ExpoPushToken>();
  const [notification, setNotification] = useState<Notifications.Notification>();
  infoLog(expoPushToken, notification);

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) => setExpoPushToken(token));

    const _onReceivedListener: Notifications.Subscription | undefined = Notifications.addNotificationReceivedListener(
      (notification) => {
        setNotification(notification);
      }
    );

    const _onResponseReceivedListener: Notifications.Subscription | undefined =
      Notifications.addNotificationResponseReceivedListener((response) => {
        warnLog('notification response', stringifyValue(response));
      });
    return () => {
      _onReceivedListener?.remove();
      _onResponseReceivedListener?.remove();
    };
  }, []);

  return props.children;
};
export default NotificationProvider;
