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

export const LiaHouseDamageSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m16 2.59-.72.69-13 13 1.44 1.44L5 16.44V28h8.83L16 22h-3.62l3.63-6.21L16 20h3.55l-1.61 8H27V16.44l1.28 1.28 1.44-1.44-13-13zm0 2.85 9 9V26h-4.62L22 18h-4v-6h-2.1L10 22.11V24h3.15l-.72 2H7V14.44z" />
      </G>
    </Svg>
  );
};