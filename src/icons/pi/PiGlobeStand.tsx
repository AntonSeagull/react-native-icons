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

export const PiGlobeStand = (props: IconProps) => {
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
        <Path d="M136 184a80 80 0 1 0-80-80 80.09 80.09 0 0 0 80 80m0-144a64 64 0 1 1-64 64 64.07 64.07 0 0 1 64-64m77.77 133.5a8 8 0 0 1-.23 11.32 111.24 111.24 0 0 1-69.54 30.9V232h24a8 8 0 0 1 0 16h-64a8 8 0 0 1 0-16h24v-16.29A112 112 0 0 1 55.18 26.46a8 8 0 1 1 11.54 11.08 96 96 0 0 0 135.74 135.74 8 8 0 0 1 11.31.22" />
      </G>
    </Svg>
  );
};