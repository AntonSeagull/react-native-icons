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

export const TbEditCircle = (props: IconProps) => {
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
        <Path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zM16 5l3 3" />
        <Path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" />
      </G>
    </Svg>
  );
};