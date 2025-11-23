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

export const TbBrandElastic = (props: IconProps) => {
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
        <Path d="M14 2a5 5 0 0 1 5 5c0 .712-.232 1.387-.5 2 1.894.042 3.5 1.595 3.5 3.5 0 1.869-1.656 3.4-3.5 3.5q.5.938.5 1.5a2.5 2.5 0 0 1-2.5 2.5c-.787 0-1.542-.432-2-1-.786 1.73-2.476 3-4.5 3a5 5 0 0 1-4.583-7 3.5 3.5 0 0 1-.11-6.992h.195a2.5 2.5 0 0 1 2-4c.787 0 1.542.432 2 1 .786-1.73 2.476-3 4.5-3zM8.5 9l-3-1" />
        <Path d="m9.5 5-1 4 1 2 5 2 4-4M18.499 16l-3-.5-1-2.5M14.5 19l1-3.5M5.417 15 9.5 11" />
      </G>
    </Svg>
  );
};