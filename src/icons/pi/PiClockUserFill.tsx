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

export const PiClockUserFill = (props: IconProps) => {
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
        <Path d="M136 72v43.06l36.42-18.22a8 8 0 1 1 7.16 14.32l-48 24A8 8 0 0 1 120 128V72a8 8 0 0 1 16 0m-8 144a88 88 0 1 1 88-88 8 8 0 0 0 16 0 104 104 0 1 0-104 104 8 8 0 0 0 0-16m86.62-17.38a32 32 0 1 0-45.24 0A40 40 0 0 0 152.27 222a8 8 0 0 0 7.73 10h64a8 8 0 0 0 7.73-10.06 40 40 0 0 0-17.11-23.32" />
      </G>
    </Svg>
  );
};