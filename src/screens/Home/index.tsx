import Dashboard from './Dashboard';

import { componentInterface } from '@/components/custom/interfaces';
import { RouteNames } from '@/helpers/constants';
import { SRF } from '@/helpers/functions';

const Home: componentInterface[] = [SRF(Dashboard, RouteNames.DASHBOARD_SCREEN, { title: 'Dashboard' })];
export default Home;
