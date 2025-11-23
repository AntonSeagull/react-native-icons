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

export const VscEye = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8 6.003a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334m0 1a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334m0-3.336c3.076 0 5.73 2.1 6.467 5.043a.5.5 0 1 1-.97.242 5.67 5.67 0 0 0-10.995.004.5.5 0 0 1-.97-.243A6.67 6.67 0 0 1 8 3.667" />
      </G>
    </Svg>
  );
};