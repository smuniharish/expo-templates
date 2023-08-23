import { Icon, Text } from '@/components/generic';
import { iconTypes } from '@/helpers/constants';
import { View } from '@/imports';
import Providers from '@/providers';

const index = () => {
  return (
    <Providers>
      <View>
        <Text>index</Text>
        <Icon type={iconTypes.FontAwesome} name="home" />
      </View>
    </Providers>
  );
};

export default index;
