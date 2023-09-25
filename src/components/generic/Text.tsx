import { FC, Text as T } from '@/imports';
const Text: FC<any> = (props: any) => {
  return (
    <T {...props} allowFontScaling={false}>
      {props.children}
    </T>
  );
};

export default Text;
