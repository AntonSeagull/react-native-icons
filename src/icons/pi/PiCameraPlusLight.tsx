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

export const PiCameraPlusLight = (props: IconProps) => {
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
        <Path d="M166 136a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26H96a6 6 0 0 1 0-12h26v-26a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6m64-56v112a22 22 0 0 1-22 22H48a22 22 0 0 1-22-22V80a22 22 0 0 1 22-22h28.79l11.84-17.77A14 14 0 0 1 100.28 34h55.44a14 14 0 0 1 11.65 6.23L179.21 58H208a22 22 0 0 1 22 22m-12 0a10 10 0 0 0-10-10h-32a6 6 0 0 1-5-2.67l-13.62-20.44a2 2 0 0 0-1.66-.89h-55.44a2 2 0 0 0-1.66.89L85 67.33A6 6 0 0 1 80 70H48a10 10 0 0 0-10 10v112a10 10 0 0 0 10 10h160a10 10 0 0 0 10-10Z" />
      </G>
    </Svg>
  );
};