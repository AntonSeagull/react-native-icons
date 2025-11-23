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

export const TbExchangeOff = (props: IconProps) => {
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
        <Path d="M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
        <Path d="M19 8v5c0 .594-.104 1.164-.294 1.692m-1.692 2.298A4.98 4.98 0 0 1 14 18h-3l3-3M14 21l-3-3M5 16v-5c0-1.632.782-3.082 1.992-4M10 6h3l-3-3M11.501 7.499 13 6M3 3l18 18" />
      </G>
    </Svg>
  );
};