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

export const LuBellElectric = (props: IconProps) => {
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
        <Path d="M18.518 17.347A7 7 0 0 1 14 19M18.8 4A11 11 0 0 1 20 9M9 9h.01" />
        <Circle cx={20} cy={16} r={2} />
        <Circle cx={9} cy={9} r={7} />
        <Rect width={10} height={6} x={4} y={16} rx={2} />
      </G>
    </Svg>
  );
};