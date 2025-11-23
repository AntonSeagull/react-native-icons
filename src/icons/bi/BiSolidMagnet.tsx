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

export const BiSolidMagnet = (props: IconProps) => {
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
        <Path d="M8 3H5a1 1 0 0 0-1 1v3h5V4a1 1 0 0 0-1-1m7 1v3h5V4a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1m0 10a3 3 0 0 1-6 0V9H4v5a8 8 0 0 0 16 0V9h-5z" />
      </G>
    </Svg>
  );
};