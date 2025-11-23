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

export const FcMultipleInputs = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#90A4AE" d="M40 35v5H8v-5H4v5c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-5z" />
        <Path d="M24 23.4 17 15h14z" />
        <Path d="M22 4h4v14h-4zM31.5 26.9l-.7 1.1 3.5 1.9.6-1.2c1.6-3 2.6-4.7 3.5-5.2S41 23 44 23v-4c-7.7 0-8.4.4-12.5 7.9" />
        <Path d="m38.4 31-9 4L28 25zM16.5 26.9l.6 1.2-3.5 1.9-.6-1.2c-1.6-3-2.6-4.7-3.5-5.2C8.7 23 7 23 4 23v-4c7.7 0 8.4.4 12.5 7.9" />
        <Path d="m20 25-1.4 10-9-4z" />
      </G>
    </Svg>
  );
};