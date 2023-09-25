import { FC, GestureHandlerRootView, StyleSheet } from '@/imports';

const GestureProvider: FC<any> = (props: any) => {
  const styles = StyleSheet.create({
    gesture: {
      flex: 1,
    },
  });
  return <GestureHandlerRootView style={styles.gesture}>{props.children}</GestureHandlerRootView>;
};

export default GestureProvider;
