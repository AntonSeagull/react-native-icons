import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const LuBugOff = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M12 20v-8M14.12 3.88 16 2M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2" />
        <Path d="M18 12.34V11a4 4 0 0 0-4-4h-1.3M2 2l20 20" />
        <Path d="M21 5a4 4 0 0 1-3.55 3.97M22 13h-3.34M3 21a4 4 0 0 1 3.81-4M6 13H2" />
        <Path d="M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13" />
      </G>
    </Svg>
  );
};