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

export const IoCodeWorking = (props: IconProps) => {
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
        <Circle cx={256} cy={256} r={26} style={{
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 10
        }} />
        <Circle cx={346} cy={256} r={26} style={{
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 10
        }} />
        <Circle cx={166} cy={256} r={26} style={{
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 10
        }} />
        <Path d="M160 368 32 256l128-112M352 368l128-112-128-112" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 42
        }} />
      </G>
    </Svg>
  );
};