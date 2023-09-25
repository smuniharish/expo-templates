import LottieFiles from '@/assets/lottie';
import { heightPercent, widthPercent } from '@/helpers/functions/responsive';
import { useLogSN, useTheme } from '@/hooks';
import { FC, LottieView, StyleSheet, View } from '@/imports';

const Splash: FC = () => {
  const theme = useTheme();
  useLogSN('Splash');
  const styles = StyleSheet.create({
    container: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.colors.primary,
      borderRadius: heightPercent(0),
      borderColor: theme.colors.background,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    Lottie: {
      width: widthPercent(60),
      height: widthPercent(60),
    },
  });
  return (
    <View style={styles.container}>
      <LottieView autoPlay style={styles.Lottie} source={LottieFiles.successVerification} />
    </View>
  );
};
export default Splash;
