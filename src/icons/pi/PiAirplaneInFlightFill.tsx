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

export const PiAirplaneInFlightFill = (props: IconProps) => {
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
        <Path d="M224 216a8 8 0 0 1-8 8H72a8 8 0 1 1 0-16h144a8 8 0 0 1 8 8M208 96h-60.68l-45.66-45.66A8 8 0 0 0 96 48h-8a16 16 0 0 0-15.17 21.06l9 26.94H59.32L37.66 74.34A8 8 0 0 0 32 72h-8A16 16 0 0 0 8.69 92.6l14.07 46.89A39.75 39.75 0 0 0 61.07 168H240a8 8 0 0 0 8-8v-24a40 40 0 0 0-40-40" />
      </G>
    </Svg>
  );
};