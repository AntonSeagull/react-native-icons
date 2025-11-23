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

export const FcSimCard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#009688" d="M36 45H12c-2.2 0-4-1.8-4-4V7c0-2.2 1.8-4 4-4h16.3c1.1 0 2.1.4 2.8 1.2l7.7 7.7c.8.8 1.2 1.8 1.2 2.8V41c0 2.2-1.8 4-4 4" />
        <Path fill="#FF9800" d="M32 38H16c-1.1 0-2-.9-2-2V24c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2" />
        <Path fill="#FFD54F" d="M29 30v3h5v2h-5v3h-2V22h2v6h5v2zm-15-1v2h5v2h-5v2h5v3h2v-9z" />
      </G>
    </Svg>
  );
};