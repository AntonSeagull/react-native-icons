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

export const RiStarOffFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m23.413 8.792-5.392 4.986L9.71 5.467 12 .5l3.386 7.34zm-4.79 11.244 2.57 2.57 1.414-1.414L2.808 1.393 1.394 2.808l5.264 5.264-6.07.72 5.934 5.488-1.575 7.928 7.054-3.948 7.053 3.948z" />
      </G>
    </Svg>
  );
};