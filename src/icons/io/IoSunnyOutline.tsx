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

export const IoSunnyOutline = (props: IconProps) => {
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
        <Path d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Circle cx={256} cy={256} r={80} style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "round",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
      </G>
    </Svg>
  );
};