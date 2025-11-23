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

export const PiToolboxFill = (props: IconProps) => {
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
        <Path d="M224 64h-48v-8a24 24 0 0 0-24-24h-48a24 24 0 0 0-24 24v8H32a16 16 0 0 0-16 16v28a4 4 0 0 0 4 4h44V96.27A8.17 8.17 0 0 1 71.47 88 8 8 0 0 1 80 96v16h96V96.27a8.17 8.17 0 0 1 7.47-8.27 8 8 0 0 1 8.53 8v16h44a4 4 0 0 0 4-4V80a16 16 0 0 0-16-16m-64 0H96v-8a8 8 0 0 1 8-8h48a8 8 0 0 1 8 8Zm80 68v60a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-60a4 4 0 0 1 4-4h44v16a8 8 0 0 0 8.53 8 8.17 8.17 0 0 0 7.47-8.27V128h96v16a8 8 0 0 0 8.53 8 8.17 8.17 0 0 0 7.47-8.25V128h44a4 4 0 0 1 4 4" />
      </G>
    </Svg>
  );
};