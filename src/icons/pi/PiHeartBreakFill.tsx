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

export const PiHeartBreakFill = (props: IconProps) => {
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
        <Path d="M239.81 107.5c-5.19 67.42-103.7 121.23-108 123.54a8 8 0 0 1-7.58 0C119.8 228.67 16 172 16 102a62 62 0 0 1 96.47-51.55 4 4 0 0 1 .61 6.17L99.72 70a8 8 0 0 0 0 11.31l32.53 32.53L111 135a8 8 0 1 0 11.31 11.31l26.88-26.87a8 8 0 0 0 0-11.31l-32.49-32.5 17.47-17.47A61.63 61.63 0 0 1 178.41 40c36.32.23 64.18 31.29 61.4 67.5" />
      </G>
    </Svg>
  );
};