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

export const PiPushPinSimpleSlashFill = (props: IconProps) => {
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
        <Path d="M79.25 38.69a4 4 0 0 1 3-6.69H192a8 8 0 0 1 8 8.53 8.17 8.17 0 0 1-8.27 7.47h-6.19l21.16 119.91a4 4 0 0 1-6.9 3.39Zm134.67 171.93-160-176a8 8 0 1 0-11.84 10.76L66.24 72l-16.95 96H40a8 8 0 0 0 0 16h80v56a8 8 0 0 0 16 0v-56h32.1l34 37.38a8 8 0 1 0 11.84-10.76Z" />
      </G>
    </Svg>
  );
};