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

export const PiVinylRecord = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88m0-144a56.06 56.06 0 0 0-56 56 8 8 0 0 1-16 0 72.08 72.08 0 0 1 72-72 8 8 0 0 1 0 16m72 56a72.08 72.08 0 0 1-72 72 8 8 0 0 1 0-16 56.06 56.06 0 0 0 56-56 8 8 0 0 1 16 0m-40 0a32 32 0 1 0-32 32 32 32 0 0 0 32-32m-48 0a16 16 0 1 1 16 16 16 16 0 0 1-16-16" />
      </G>
    </Svg>
  );
};