import { NetworkModalError } from '@/components/custom';
import { FC, Fragment, NetInfo, useEffect, useState } from '@/imports';
const NetworkProvider: FC<any> = (props: any) => {
  const [networkIsAvailable, setNetworkIsAvailable] = useState(true);
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setNetworkIsAvailable(true);
      } else {
        setNetworkIsAvailable(false);
      }
    });
  });
  const displayText = 'Internet is not connected, Please check the connectivity !!!';
  return (
    <Fragment>
      {props.children}
      {!networkIsAvailable ? <NetworkModalError displayText={displayText} /> : null}
    </Fragment>
  );
};

export default NetworkProvider;
