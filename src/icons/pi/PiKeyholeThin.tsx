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

export const PiKeyholeThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m36-108a36 36 0 1 0-57 29.22l-14.66 33.17A4 4 0 0 0 96 180h64a4 4 0 0 0 3.66-5.61L149 141.22A36.15 36.15 0 0 0 164 112m-23.66 29.33L153.86 172h-51.72l13.52-30.67a4 4 0 0 0-1.66-5.07 28 28 0 1 1 28 0 4 4 0 0 0-1.66 5.07" />
      </G>
    </Svg>
  );
};