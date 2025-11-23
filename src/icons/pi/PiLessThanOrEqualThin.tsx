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

export const PiLessThanOrEqualThin = (props: IconProps) => {
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
        <Path d="M44 104a4 4 0 0 1 2.62-3.75l152-56a4 4 0 1 1 2.76 7.5L59.57 104l141.81 52.25A4 4 0 0 1 200 164a3.9 3.9 0 0 1-1.38-.25l-152-56A4 4 0 0 1 44 104m156 92H48a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};