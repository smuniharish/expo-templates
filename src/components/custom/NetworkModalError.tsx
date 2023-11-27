import { Text } from '../generic';

import { heightPercent } from '@/helpers/functions/responsive';
import { useTheme } from '@/hooks';
import { FC, Linking, Modal, StyleSheet, TouchableOpacity, View } from '@/imports';

interface optionsInterface {
  displayText: string;
}
const NetworkModalError: FC<optionsInterface> = (options: optionsInterface) => {
  const { colors, fontSizes } = useTheme();
  const { displayText } = options;
  const openSettingsHandler = () => {
    Linking.openSettings();
  };
  const styles = StyleSheet.create({
    backdrop: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: colors.backdrop,
      opacity: 0.5,
    },
    card: {
      marginLeft: 'auto',
      marginRight: 'auto',
      marginBottom: 'auto',
      marginTop: 'auto',
      alignItems: 'center',
      justifyContent: 'center',
      width: '80%',
      backgroundColor: colors.white || 'white',
      padding: heightPercent(2),
    },
    message: {
      fontWeight: '900',
      fontSize: fontSizes.BASE,
      fontFamily: 'DMSansMedium',
    },
    button: {
      backgroundColor: colors.primary,
      padding: heightPercent(2),
      marginVertical: heightPercent(2),
    },
    buttonText: {
      color: colors.buttonText,
      fontSize: fontSizes.BASE,
    },
  });
  return (
    <Modal transparent>
      <View style={styles.backdrop} />
      <View style={styles.card}>
        <Text style={styles.message}>{displayText}</Text>
        <TouchableOpacity onPress={openSettingsHandler} style={styles.button}>
          <Text style={styles.buttonText}>Open Settings</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default NetworkModalError;
