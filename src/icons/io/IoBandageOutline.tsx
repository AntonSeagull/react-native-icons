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

export const IoBandageOutline = (props: IconProps) => {
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
        <Rect width={560.87} height={176.25} x={-24.43} y={167.88} rx={88.12} ry={88.12} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} transform="rotate(-45 256 256.002)" />
        <Rect width={176} height={196} x={169.41} y={156.59} rx={32} ry={32} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} transform="rotate(45 257.409 254.582)" />
        <Circle cx={256} cy={208} r={16} />
        <Circle cx={304} cy={256} r={16} />
        <Circle cx={208} cy={256} r={16} />
        <Circle cx={256} cy={304} r={16} />
      </G>
    </Svg>
  );
};