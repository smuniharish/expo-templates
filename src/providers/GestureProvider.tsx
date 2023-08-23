import { GestureHandlerRootView, StyleSheet } from '@/imports';

const GestureProvider = (props: any) => {
  const styles = StyleSheet.create({
    gesture: {
      flex: 1,
    },
  });
  return <GestureHandlerRootView style={styles.gesture}>{props.children}</GestureHandlerRootView>;
};

export default GestureProvider;
