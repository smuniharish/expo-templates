import Providers from "@/providers";
import { Icon, Text } from "@/components/generic";
import { iconTypes } from "@/helpers/constants";
import { View } from "@/imports";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/store";
import { Splash } from "@/screens";

const index = () => {
  return (
    <PersistGate persistor={persistor} loading={<Splash />}>
      <Providers>
        <View>
          <Text>index</Text>
          <Icon type={iconTypes.FontAwesome} name="home" />
        </View>
      </Providers>
    </PersistGate>
  );
};

export default index;
