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

export const FcParallelTasks = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#90CAF9" d="M36 13V9H22v13h-9v4h9v13h14v-4H26v-9h10v-4H26v-9z" />
        <Path fill="#D81B60" d="M6 17h10v14H6z" />
        <Path fill="#2196F3" d="M32 6h10v10H32zM32 32h10v10H32zM32 19h10v10H32z" />
      </G>
    </Svg>
  );
};