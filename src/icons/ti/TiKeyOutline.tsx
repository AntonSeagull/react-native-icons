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

export const TiKeyOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10 21H4v-4.414l3.783-3.783A6 6 0 0 1 7.5 11c0-3.309 2.691-6 6-6s6 2.691 6 6-2.691 6-6 6H12v2h-2zm-4-2h2v-2h2v-2h3.5c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4c0 .559.121 1.109.359 1.639l.285.631L6 17.414zm7.5-9.002a1.002 1.002 0 0 1 0 2.002 1.001 1.001 0 0 1 0-2.002m0-1A2.001 2.001 0 1 0 13.502 13a2.001 2.001 0 0 0-.002-4.002" />
      </G>
    </Svg>
  );
};