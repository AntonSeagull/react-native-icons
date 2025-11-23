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

export const PiPersonSimpleTaiChiLight = (props: IconProps) => {
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
        <Path d="M128 78a30 30 0 1 0-30-30 30 30 0 0 0 30 30m0-48a18 18 0 1 1-18 18 18 18 0 0 1 18-18m94 74a6 6 0 0 1-6 6h-82v30l52.36 22.45A6 6 0 0 1 190 168v48a6 6 0 0 1-12 0v-44l-48.84-21L52 220.46a6 6 0 0 1-8-8.92l78-70.21V110H40a6 6 0 0 1 0-12h176a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};