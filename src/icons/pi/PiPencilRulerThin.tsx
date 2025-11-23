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

export const PiPencilRulerThin = (props: IconProps) => {
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
        <Path d="M208 36h-48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12m4 172a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-36h28a4 4 0 0 0 0-8h-28v-32h28a4 4 0 0 0 0-8h-28V92h28a4 4 0 0 0 0-8h-28V48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4ZM74.83 29.17a4 4 0 0 0-5.66 0l-32 32A4 4 0 0 0 36 64v144a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V64a4 4 0 0 0-1.17-2.83ZM44 76h24v104H44Zm56 132a4 4 0 0 1-4 4H48a4 4 0 0 1-4-4v-20h56Zm0-28H76V76h24Zm0-112H44v-2.34l28-28 28 28Z" />
      </G>
    </Svg>
  );
};