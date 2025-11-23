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

export const RiBreadFill = (props: IconProps) => {
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
        <Path d="M1 7a4 4 0 0 1 4-4h2a4 4 0 0 0-2 7.465V19a3 3 0 0 0 3 3H6a3 3 0 0 1-3-3v-8.535A4 4 0 0 1 1 7m7 15v-2a1 1 0 0 1-1-1V9.122l-.667-.236A2.001 2.001 0 0 1 7 5V3h12a4 4 0 0 1 2 7.465V19a3 3 0 0 1-3 3z" />
      </G>
    </Svg>
  );
};