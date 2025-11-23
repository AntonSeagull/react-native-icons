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

export const PiReplitLogoDuotone = (props: IconProps) => {
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
        <Path d="M72 160h72v56a8 8 0 0 1-8 8H72a8 8 0 0 1-8-8v-48a8 8 0 0 1 8-8m144-64h-72v64h72a8 8 0 0 0 8-8v-48a8 8 0 0 0-8-8m-80-64H72a8 8 0 0 0-8 8v48a8 8 0 0 0 8 8h72V40a8 8 0 0 0-8-8" opacity={0.2} />
        <Path d="M216 88h-64V40a16 16 0 0 0-16-16H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64v48H72a16 16 0 0 0-16 16v48a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-48h64a16 16 0 0 0 16-16v-48a16 16 0 0 0-16-16m-80 128H72v-48h64Zm0-176v48H72V40zm80 112h-64v-48h64Z" />
      </G>
    </Svg>
  );
};