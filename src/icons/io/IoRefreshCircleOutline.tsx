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

export const IoRefreshCircleOutline = (props: IconProps) => {
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
        <Path d="M288 193s12.18-6-32-6a80 80 0 1 0 80 80" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 28
        }} />
        <Path d="m256 149 40 40-40 40" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 28
        }} />
        <Path d="M256 64C150 64 64 150 64 256s86 192 192 192 192-86 192-192S362 64 256 64Z" style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};