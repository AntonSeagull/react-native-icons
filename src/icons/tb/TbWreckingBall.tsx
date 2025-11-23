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

export const TbWreckingBall = (props: IconProps) => {
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
        <Path d="M17 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M13 19H4M4 15h9" />
        <Path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
        <Path d="M5 15v-2a1 1 0 0 1 1-1h7M19 11V4l-6 7" />
      </G>
    </Svg>
  );
};