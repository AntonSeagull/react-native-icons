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

export const IoWalkSharp = (props: IconProps) => {
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
        <Path d="m315.09 481.38-56.95-115.12-45-57.56a73.1 73.1 0 0 1-10.16-37.17V142h15.73A40.36 40.36 0 0 1 259 182.32v162.52" style={{
        stroke: "#000",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M128.18 291.5v-74.77l64.95-65.1" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="m376.35 295.73-83.95-56.38v-44.68l104.68 72.95zM175.13 498.58l-21.43-26.91 80.33-81.54 15.53 32.07z" />
        <Circle cx={259.02} cy={67.21} r={37.38} style={{
        stroke: "#000",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        strokeWidth: 16
        }} />
      </G>
    </Svg>
  );
};