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

export const PiDiscFill = (props: IconProps) => {
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
        <Path d="M188.3 43.31a8 8 0 0 0-.65-.5c-.23-.16-.47-.31-.71-.45a103.85 103.85 0 1 0 1.36 1ZM128 152a24 24 0 1 1 24-24 24 24 0 0 1-24 24m88-24c0 2.47-.11 4.92-.31 7.34L168 126.92a39.83 39.83 0 0 0-11-26.41l27.78-39.67A87.8 87.8 0 0 1 216 128" />
      </G>
    </Svg>
  );
};