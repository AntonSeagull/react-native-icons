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

export const IoCardOutline = (props: IconProps) => {
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
        <Rect width={416} height={320} x={48} y={96} rx={56} ry={56} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M48 192h416M128 300h48v20h-48z" style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 60
        }} />
      </G>
    </Svg>
  );
};