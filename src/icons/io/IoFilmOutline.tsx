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

export const IoFilmOutline = (props: IconProps) => {
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
        <Rect width={416} height={320} x={48} y={96} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={384} y={336} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={384} y={256} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={384} y={176} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={384} y={96} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={48} y={336} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={48} y={256} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={48} y={176} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={48} y={96} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={256} height={160} x={128} y={96} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={256} height={160} x={128} y={256} rx={28} ry={28} style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};