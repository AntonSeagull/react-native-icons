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

export const PiCookieDuotone = (props: IconProps) => {
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
        <Path d="M224 128a96 96 0 1 1-96-96 48 48 0 0 0 48 48 48 48 0 0 0 48 48" opacity={0.2} />
        <Path d="M164.49 163.51a12 12 0 1 1-17 0 12 12 0 0 1 17 0m-81-8a12 12 0 1 0 17 0 12 12 0 0 0-16.98 0Zm9-39a12 12 0 1 0-17 0 12 12 0 0 0 17-.02Zm48-1a12 12 0 1 0 0 17 12 12 0 0 0 0-17M232 128A104 104 0 1 1 128 24a8 8 0 0 1 8 8 40 40 0 0 0 40 40 8 8 0 0 1 8 8 40 40 0 0 0 40 40 8 8 0 0 1 8 8m-16.31 7.39A56.13 56.13 0 0 1 168.5 87.5a56.13 56.13 0 0 1-47.89-47.19 88 88 0 1 0 95.08 95.08" />
      </G>
    </Svg>
  );
};