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

export const IoRepeatSharp = (props: IconProps) => {
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
        <Path d="m320 120 48 48-48 48" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Path d="M352 168H64v96M192 392l-48-48 48-48" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Path d="M160 344h288v-96" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};