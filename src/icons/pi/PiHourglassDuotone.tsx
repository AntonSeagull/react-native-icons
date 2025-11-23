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

export const PiHourglassDuotone = (props: IconProps) => {
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
        <Path d="M188.82 82 128 128 67.2 82.4A8 8 0 0 1 64 76V40a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v35.64a8 8 0 0 1-3.18 6.36M64 180v36a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8v-35.64a8 8 0 0 0-3.18-6.38L128 128l-60.8 45.6A8 8 0 0 0 64 180" opacity={0.2} />
        <Path d="M200 75.64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v36a16.07 16.07 0 0 0 6.4 12.8l52.27 39.2-52.27 39.2A16.07 16.07 0 0 0 56 180v36a16 16 0 0 0 16 16h112a16 16 0 0 0 16-16v-35.64a16.09 16.09 0 0 0-6.35-12.77L141.27 128l52.38-39.59A16.09 16.09 0 0 0 200 75.64M184 216H72v-36l56-42 56 42.35Zm0-140.36L128 118 72 76V40h112Z" />
      </G>
    </Svg>
  );
};