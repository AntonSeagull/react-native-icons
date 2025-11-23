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

export const TbMeterCube = (props: IconProps) => {
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
        <Path d="M17 5h1.5a1.5 1.5 0 0 1 0 3H18h.5a1.5 1.5 0 0 1 0 3H17M4 12v6M4 14a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 9 14.5V18M9 15.5v-1a2.5 2.5 0 1 1 5 0V18" />
      </G>
    </Svg>
  );
};