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

export const IoMicOffSharp = (props: IconProps) => {
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
        <Path d="M432 400 96 64" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeMiterlimit: 10,
        strokeWidth: 32
        }} />
        <Path d="M368 192v48a111.7 111.7 0 0 1-2.93 25.45L390.65 291a143.1 143.1 0 0 0 9.35-51v-48ZM272 432v-48.89a143.1 143.1 0 0 0 56.65-18.83L305 340.65A112.13 112.13 0 0 1 144 240v-48h-32v48c0 74 56.1 135.12 128 143.11V432h-64v32h160v-32ZM336 236.37V128c0-44.86-35.14-80-80-80a79.68 79.68 0 0 0-69 39.34" />
        <Path d="M176 211.63V239a80.9 80.9 0 0 0 23.45 56.9 78.55 78.55 0 0 0 81 20.21Z" />
      </G>
    </Svg>
  );
};