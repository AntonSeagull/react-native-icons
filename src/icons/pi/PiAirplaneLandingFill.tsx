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

export const PiAirplaneLandingFill = (props: IconProps) => {
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
        <Path d="M256 216a8 8 0 0 1-8 8H104a8 8 0 0 1 0-16h144a8 8 0 0 1 8 8m-24-24a8 8 0 0 0 8-8v-35.68a40.13 40.13 0 0 0-29.28-38.54l-60.84-17-22.5-53.63a8 8 0 0 0-4.85-4.5l-5.47-1.82A16 16 0 0 0 96 48v29.39l-29.87-8.51-10.61-29.37a8 8 0 0 0-5-4.87l-5.47-1.82A16 16 0 0 0 24 48v55.72a40.12 40.12 0 0 0 29.21 38.52l176.63 49.46a8 8 0 0 0 2.16.3" />
      </G>
    </Svg>
  );
};