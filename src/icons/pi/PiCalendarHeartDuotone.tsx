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

export const PiCalendarHeartDuotone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M176 120c0 32-48 56-48 56s-48-24-48-56a24 24 0 0 1 48 0 24 24 0 0 1 48 0" opacity={0.2} />
        <Path d="M208 32h-24v-8a8 8 0 0 0-16 0v8H88v-8a8 8 0 0 0-16 0v8H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m0 176H48V48h24v8a8 8 0 0 0 16 0v-8h80v8a8 8 0 0 0 16 0v-8h24zM152 88a31.9 31.9 0 0 0-24 10.86A32 32 0 0 0 72 120c0 36.52 50.28 62.08 52.42 63.16a8 8 0 0 0 7.16 0C133.72 182.08 184 156.52 184 120a32 32 0 0 0-32-32m-24 78.93c-13.79-7.79-40-26.75-40-46.93a16 16 0 0 1 32 0 8 8 0 0 0 16 0 16 16 0 0 1 32 0c0 20.19-26.21 39.15-40 46.93" />
      </G>
    </Svg>
  );
};