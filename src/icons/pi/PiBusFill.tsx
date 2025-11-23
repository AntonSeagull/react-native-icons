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

export const PiBusFill = (props: IconProps) => {
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
        <Path d="M248 80v24a8 8 0 0 1-16 0V80a8 8 0 0 1 16 0M16 72a8 8 0 0 0-8 8v24a8 8 0 0 0 16 0V80a8 8 0 0 0-8-8m200-8v144a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-8H88v8a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V64a32 32 0 0 1 32-32h112a32 32 0 0 1 32 32m-112 84a12 12 0 1 0-12 12 12 12 0 0 0 12-12m72 0a12 12 0 1 0-12 12 12 12 0 0 0 12-12m24-76H56v40h144Z" />
      </G>
    </Svg>
  );
};