import { useTheme } from '@/hooks';
import {
  AntDesign,
  Entypo,
  EvilIcons,
  FC,
  Feather,
  FontAwesome,
  FontAwesome5,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  Octicons,
  SimpleLineIcons,
  Zocial,
} from '@/imports';
interface OptionsInterface {
  type: string;
  name: string;
  color?: string;
  size?: number;
}
const IconTypes: any = {
  antDesign: AntDesign,
  evilicons: EvilIcons,
  entypo: Entypo,
  feather: Feather,
  fontAwesome5: FontAwesome5,
  fontisto: Fontisto,
  foundation: Foundation,
  ionicons: Ionicons,
  materialCommunityIcons: MaterialCommunityIcons,
  materialIcons: MaterialIcons,
  simpleLineIcons: SimpleLineIcons,
  octicons: Octicons,
  zocial: Zocial,
  fontAwesome: FontAwesome,
};
const Icon: FC<OptionsInterface> = (options: OptionsInterface) => {
  const theme = useTheme();
  const { colors, iconSizes } = theme;
  options.color = options.color || colors.primary;
  options.size = options.size || iconSizes.BASE;
  const { type, name, color, size } = options;
  const CIcon = IconTypes[type] || FontAwesome;
  return <CIcon name={name} color={color} size={size} />;
};
export default Icon;
