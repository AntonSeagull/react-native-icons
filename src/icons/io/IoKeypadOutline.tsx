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

export const IoKeypadOutline = (props: IconProps) => {
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
        <Circle cx={256} cy={448} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={256} cy={320} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Path d="M288 192a32 32 0 1 1-32-32 32 32 0 0 1 32 32Z" style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={256} cy={64} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={384} cy={320} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={384} cy={192} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={384} cy={64} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={128} cy={320} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={128} cy={192} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={128} cy={64} r={32} style={{
        fill: "none",
        stroke: "#000",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};