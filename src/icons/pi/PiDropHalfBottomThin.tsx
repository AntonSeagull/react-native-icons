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

export const PiDropHalfBottomThin = (props: IconProps) => {
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
        <Path d="M171 50.37a250.2 250.2 0 0 0-40.73-37.65 4 4 0 0 0-4.58 0A250.2 250.2 0 0 0 85 50.37C58.17 81.21 44 113.58 44 144a84 84 0 0 0 168 0c0-30.42-14.17-62.79-41-93.63M189.91 188H66.09a75.6 75.6 0 0 1-11.4-24h146.62a75.6 75.6 0 0 1-11.4 24M53 156a75.4 75.4 0 0 1-1-12 93 93 0 0 1 .79-12h150.42a93 93 0 0 1 .79 12 75.4 75.4 0 0 1-1 12ZM90.9 55.77A254 254 0 0 1 128 21a254 254 0 0 1 37.1 34.81c14.37 16.55 31 40.61 36.77 68.23H54.13c5.8-27.66 22.4-51.72 36.77-68.27M128 220a75.77 75.77 0 0 1-55.35-24h110.7A75.77 75.77 0 0 1 128 220" />
      </G>
    </Svg>
  );
};