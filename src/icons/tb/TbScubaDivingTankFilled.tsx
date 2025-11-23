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

export const TbScubaDivingTankFilled = (props: IconProps) => {
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
        <Path d="M17 17v2a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3v-2zM8 2a2 2 0 0 1 1.732 1h1.15a1.496 1.496 0 0 1 2.236 0H15a1 1 0 0 1 0 2l-1.883.001a2 2 0 0 1-.115.116V6.1A5 5 0 0 1 17 11v4H7v-4a5 5 0 0 1 4-4.9v-.983a2 2 0 0 1-.117-.116H9.732A2 2 0 1 1 8 2" />
      </G>
    </Svg>
  );
};