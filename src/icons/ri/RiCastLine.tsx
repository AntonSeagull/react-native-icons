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

export const RiCastLine = (props: IconProps) => {
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
        <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-6q0-1.021-.153-2H20V5H4v3.153A13 13 0 0 0 2 8V4a1 1 0 0 1 1-1m10 18h-2a9 9 0 0 0-9-9v-2c6.075 0 11 4.925 11 11m-4 0H7a5 5 0 0 0-5-5v-2a7 7 0 0 1 7 7m-4 0H2v-3a3 3 0 0 1 3 3" />
      </G>
    </Svg>
  );
};