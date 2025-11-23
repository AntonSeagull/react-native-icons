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

export const PiCookieFill = (props: IconProps) => {
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
        <Path d="M224 120a40 40 0 0 1-40-40 8 8 0 0 0-8-8 40 40 0 0 1-40-40 8 8 0 0 0-8-8 104 104 0 1 0 104 104 8 8 0 0 0-8-8M75.51 99.51a12 12 0 1 1 0 17 12 12 0 0 1 0-17m25 73a12 12 0 1 1 0-17 12 12 0 0 1-.02 16.98Zm23-40a12 12 0 1 1 17 0 12 12 0 0 1-17-.02Zm41 48a12 12 0 1 1 0-17 12 12 0 0 1-.02 16.98Z" />
      </G>
    </Svg>
  );
};