import { platformCalculate } from '@/helpers/functions';
import { FC, KeyboardAvoidingView as KAV } from '@/imports';
const KeyboardAvoidingView: FC<any> = (props: any) => {
  return (
    <KAV {...props} behavior={platformCalculate('height', 'padding')}>
      {props.children}
    </KAV>
  );
};

export default KeyboardAvoidingView;
