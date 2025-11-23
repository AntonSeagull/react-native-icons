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

export const IoQrCodeOutline = (props: IconProps) => {
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
        <Rect width={80} height={80} x={336} y={336} rx={8} ry={8} />
        <Rect width={64} height={64} x={272} y={272} rx={8} ry={8} />
        <Rect width={64} height={64} x={416} y={416} rx={8} ry={8} />
        <Rect width={48} height={48} x={432} y={272} rx={8} ry={8} />
        <Rect width={48} height={48} x={272} y={432} rx={8} ry={8} />
        <Rect width={80} height={80} x={336} y={96} rx={8} ry={8} />
        <Rect width={176} height={176} x={288} y={48} rx={16} ry={16} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={96} y={96} rx={8} ry={8} />
        <Rect width={176} height={176} x={48} y={48} rx={16} ry={16} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Rect width={80} height={80} x={96} y={336} rx={8} ry={8} />
        <Rect width={176} height={176} x={48} y={288} rx={16} ry={16} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};