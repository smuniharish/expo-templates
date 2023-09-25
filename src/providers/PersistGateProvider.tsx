import { FC, PersistGate } from '@/imports';
import { Splash } from '@/screens';
import { persistor } from '@/store';
const PersistGateProvider: FC<any> = (props: any) => {
  return (
    <PersistGate persistor={persistor} loading={<Splash />}>
      {props.children}
    </PersistGate>
  );
};

export default PersistGateProvider;
