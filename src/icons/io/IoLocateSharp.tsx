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

export const IoLocateSharp = (props: IconProps) => {
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
        <Path d="M256 96V56M256 456v-40M256 112a144 144 0 1 0 144 144 144 144 0 0 0-144-144ZM416 256h40M56 256h40" style={{
        fill: "none",
        stroke: "#000",
        strokeLinecap: "square",
        strokeLinejoin: "round",
        strokeWidth: 48
        }} />
      </G>
    </Svg>
  );
};