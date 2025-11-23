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

export const PiBridgeFill = (props: IconProps) => {
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
        <Path d="M232 160h-8v-39.5c1.63.81 3.29 1.57 5 2.26a8 8 0 0 0 6-14.83A55.78 55.78 0 0 1 200 56a8 8 0 0 0-16 0 56 56 0 0 1-112 0 8 8 0 0 0-16 0 55.78 55.78 0 0 1-35 51.93 8 8 0 0 0 6 14.83c1.71-.69 3.37-1.45 5-2.26V160h-7.4c-6.31 0-8.6 4.78-8.6 8a8 8 0 0 0 8 8h32v24a8 8 0 0 0 16 0v-24h112v24a8 8 0 0 0 16 0v-24h32a8 8 0 0 0 0-16m-160-8a8 8 0 0 1-16 0v-47.88a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-19.68a8 8 0 0 1 16 0Zm48 0a8 8 0 0 1-16 0v-19.68a8 8 0 0 1 16 0Zm40 0a8 8 0 0 1-16 0v-47.88a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};