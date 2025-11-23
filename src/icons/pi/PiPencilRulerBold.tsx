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

export const PiPencilRulerBold = (props: IconProps) => {
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
        <Path d="M208 28h-48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V48a20 20 0 0 0-20-20m-4 176h-40v-24h16a12 12 0 0 0 0-24h-16v-16h16a12 12 0 0 0 0-24h-16v-16h16a12 12 0 0 0 0-24h-16V52h40ZM80.49 23.51a12 12 0 0 0-17 0l-32 32A12 12 0 0 0 28 64v144a20 20 0 0 0 20 20h48a20 20 0 0 0 20-20V64a12 12 0 0 0-3.51-8.49ZM52 92h40v72H52Zm20-43 19 19H53ZM52 204v-16h40v16Z" />
      </G>
    </Svg>
  );
};