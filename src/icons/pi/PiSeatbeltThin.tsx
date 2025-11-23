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

export const PiSeatbeltThin = (props: IconProps) => {
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
        <Path d="M128 108a40 40 0 1 0-40-40 40 40 0 0 0 40 40m0-72a32 32 0 1 1-32 32 32 32 0 0 1 32-32m76 188a4 4 0 0 1-4 4H56a4 4 0 0 1-2.65-7l103-90.84a68 68 0 0 0-95.44 51 4 4 0 0 1-3.94 3.37 4.5 4.5 0 0 1-.64-.05 4 4 0 0 1-3.33-4.59 76 76 0 0 1 109.8-55.46L189.35 101a4 4 0 1 1 5.3 6L66.58 220H200a4 4 0 0 1 4 4m-13.56-75.33A75.5 75.5 0 0 1 204 192a4 4 0 0 1-8 0 67.55 67.55 0 0 0-12.13-38.77 4 4 0 1 1 6.57-4.56" />
      </G>
    </Svg>
  );
};