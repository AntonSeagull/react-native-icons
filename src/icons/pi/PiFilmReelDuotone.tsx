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

export const PiFilmReelDuotone = (props: IconProps) => {
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
        <Path d="M128 32a96 96 0 1 0 96 96 96 96 0 0 0-96-96M80 144a16 16 0 1 1 16-16 16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0-96a16 16 0 1 1 16-16 16 16 0 0 1-16 16m48 48a16 16 0 1 1 16-16 16 16 0 0 1-16 16" opacity={0.2} />
        <Path d="M232 216h-48.64A103.95 103.95 0 1 0 128 232h104a8 8 0 0 0 0-16M40 128a88 88 0 1 1 88 88 88.1 88.1 0 0 1-88-88m88-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8m24 104a24 24 0 1 0-24 24 24 24 0 0 0 24-24m-32 0a8 8 0 1 1 8 8 8 8 0 0 1-8-8m56-24a24 24 0 1 0-24-24 24 24 0 0 0 24 24m0-32a8 8 0 1 1-8 8 8 8 0 0 1 8-8m-96-16a24 24 0 1 0 24 24 24 24 0 0 0-24-24m0 32a8 8 0 1 1 8-8 8 8 0 0 1-8 8" />
      </G>
    </Svg>
  );
};