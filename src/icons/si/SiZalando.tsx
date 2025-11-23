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

export const SiZalando = (props: IconProps) => {
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
        <Path d="M5.27 24c-.88 0-1.36-.2-1.62-.36-.36-.21-1.02-.75-1.62-2.33A27 27 0 0 1 .49 12c.02-3.66.59-6.76 1.54-9.3C2.63 1.1 3.29.56 3.65.35 3.91.21 4.39 0 5.27 0c.33 0 .72.03 1.18.1a26.1 26.1 0 0 1 8.7 3.3h.01a26.4 26.4 0 0 1 7.16 6.01c1.06 1.32 1.19 2.17 1.19 2.59s-.13 1.27-1.19 2.59a26.4 26.4 0 0 1-7.16 6h-.01a26 26 0 0 1-8.7 3.3c-.46.08-.85.11-1.18.11" />
      </G>
    </Svg>
  );
};