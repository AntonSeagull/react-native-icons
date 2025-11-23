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

export const TbPageBreak = (props: IconProps) => {
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
        <Path d="M14 3v4a1 1 0 0 0 1 1h4M19 18v1a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-1M3 14h3m4.5 0h3m4.5 0h3" />
        <Path d="M5 10V5a2 2 0 0 1 2-2h7l5 5v2" />
      </G>
    </Svg>
  );
};