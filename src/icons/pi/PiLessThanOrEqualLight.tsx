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

export const PiLessThanOrEqualLight = (props: IconProps) => {
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
        <Path d="M42 104a6 6 0 0 1 3.93-5.63l152-56a6 6 0 1 1 4.15 11.26L65.36 104l136.71 50.37A6 6 0 0 1 200 166a6.1 6.1 0 0 1-2.08-.37l-152-56A6 6 0 0 1 42 104m158 90H48a6 6 0 0 0 0 12h152a6 6 0 0 0 0-12" />
      </G>
    </Svg>
  );
};