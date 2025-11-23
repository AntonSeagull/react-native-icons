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

export const PiGraphicsCardFill = (props: IconProps) => {
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
        <Path d="M232 48H16a8 8 0 0 0-8 8v152a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h16v16a8 8 0 0 0 16 0v-16h112a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16m-20 72a35.8 35.8 0 0 1-5.53 19.16l-49.63-49.63A36 36 0 0 1 212 120m-96 0a35.8 35.8 0 0 1-5.53 19.16L60.84 89.53A36 36 0 0 1 116 120m-36 36a36 36 0 0 1-30.47-55.16l49.63 49.63A35.8 35.8 0 0 1 80 156m60-36a35.8 35.8 0 0 1 5.53-19.16l49.63 49.63A36 36 0 0 1 140 120" />
      </G>
    </Svg>
  );
};