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

export const TbMasksTheaterOff = (props: IconProps) => {
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
        <Path d="M13 9h6.808a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718A4 4 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182M18 13h.01" />
        <Path d="M15 16.5q.985.657 1.97.451M8.632 15.982A4 4 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183a2 2 0 0 1 .514-1.531A2 2 0 0 1 4 4m4 0h2.808a2 2 0 0 1 2 2M6 8h.01" />
        <Path d="M6 12q1.146-.765 2.291-.36M3 3l18 18" />
      </G>
    </Svg>
  );
};