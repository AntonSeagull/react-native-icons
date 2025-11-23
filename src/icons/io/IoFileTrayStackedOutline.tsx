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

export const IoFileTrayStackedOutline = (props: IconProps) => {
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
        <Path d="M48 336v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96" style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M48 336h144M320 336h144M192 336a64 64 0 0 0 128 0" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M384 32H128c-26 0-43 14-48 40L48 192v96a48.14 48.14 0 0 0 48 48h320a48.14 48.14 0 0 0 48-48v-96L432 72c-5-27-23-40-48-40Z" style={{
        fill: "none",
        stroke: "#000",
        strokeLinejoin: "round",
        strokeWidth: 32
        }} />
        <Path d="M48 192h144M320 192h144M192 192a64 64 0 0 0 128 0" style={{
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