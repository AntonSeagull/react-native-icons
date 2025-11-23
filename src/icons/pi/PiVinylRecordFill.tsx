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

export const PiVinylRecordFill = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24M72 128a8 8 0 0 1-16 0 72.08 72.08 0 0 1 72-72 8 8 0 0 1 0 16 56.06 56.06 0 0 0-56 56m32 0a24 24 0 1 1 24 24 24 24 0 0 1-24-24m24 72a8 8 0 0 1 0-16 56.06 56.06 0 0 0 56-56 8 8 0 0 1 16 0 72.08 72.08 0 0 1-72 72" />
      </G>
    </Svg>
  );
};