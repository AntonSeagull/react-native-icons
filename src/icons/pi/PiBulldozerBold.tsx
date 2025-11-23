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

export const PiBulldozerBold = (props: IconProps) => {
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
        <Path d="M244 196h-8a4 4 0 0 1-4-4v-32a4 4 0 0 1 4-4h8a12 12 0 0 0 0-24h-8a28 28 0 0 0-28 28v4h-9.68a44.13 44.13 0 0 0-34-31.2l-35.2-84.49A20 20 0 0 0 110.67 36H24A20 20 0 0 0 4 56v101.7A44 44 0 0 0 44 220h112a44.06 44.06 0 0 0 42.32-32H208v4a28 28 0 0 0 28 28h8a12 12 0 0 0 0-24m-106-64H68V60h40ZM44 60v72a43.9 43.9 0 0 0-16 3V60Zm112 136H44a20 20 0 0 1 0-40h112a20 20 0 0 1 0 40" />
      </G>
    </Svg>
  );
};