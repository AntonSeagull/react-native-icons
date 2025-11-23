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

export const PiEggCrackThin = (props: IconProps) => {
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
        <Path d="M128 20c-35.13 0-84 66.52-84 132a84 84 0 0 0 168 0c0-65.48-48.87-132-84-132m0 208a76.08 76.08 0 0 1-76-76c0-28.46 10-59.73 27.33-85.78C94.81 43 113.91 28 128 28c11.39 0 26.05 9.8 39.42 25.82L125 101.34a4 4 0 0 0 2 6.54l28.3 7.08-7.25 36.26a4 4 0 0 0 3.14 4.7 3.4 3.4 0 0 0 .78.08 4 4 0 0 0 3.92-3.22l8-40a4 4 0 0 0-2.95-4.66l-25.58-6.4 37.08-41.52q2.16 2.91 4.23 6C194 92.27 204 123.54 204 152a76.08 76.08 0 0 1-76 76" />
      </G>
    </Svg>
  );
};