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

export const PiAsclepiusThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M212 79v1a36 36 0 0 1-36 36h-44v88h12a20 20 0 0 0 13.33-34.91 4 4 0 1 1 5.34-6A28 28 0 0 1 144 212h-12v20a4 4 0 0 1-8 0v-20H96a4 4 0 0 1 0-8h28v-88H96a20 20 0 0 0 0 40 4 4 0 0 1 0 8 28 28 0 0 1 0-56h28V24a4 4 0 0 1 8 0v84h44a28 28 0 0 0 28-28v-1a27 27 0 0 0-27-27h-17a4 4 0 0 1 0-8h17a35 35 0 0 1 35 35M56 92H32a4 4 0 0 1-4-4v-8a36 36 0 0 1 36-36h32a4 4 0 0 1 0 8h-4v4a36 36 0 0 1-36 36m28-36v-4H64a28 28 0 0 0-28 28v4h20a28 28 0 0 0 28-28" />
      </G>
    </Svg>
  );
};