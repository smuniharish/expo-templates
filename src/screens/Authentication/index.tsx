import { componentInterface } from '@/components/custom/interfaces';
import Login from './Login';
import { RouteNames } from '@/helpers/constants';
import { SRF } from '@/helpers/functions';

const Authentication: componentInterface[] = [
  SRF(Login, RouteNames.LOGIN_SCREEN, { headerShown: false, title: 'Login' }),
];

export default Authentication;
