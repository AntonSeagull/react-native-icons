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

export const IoWatchOutline = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Rect width={288} height={288} x={112} y={112} rx={64} ry={64} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M176 112V40a8 8 0 0 1 8-8h144a8 8 0 0 1 8 8v72M336 400v72a8 8 0 0 1-8 8H184a8 8 0 0 1-8-8v-72" style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};