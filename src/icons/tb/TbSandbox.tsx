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

export const TbSandbox = (props: IconProps) => {
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
        <Path d="M19.953 8.017 21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2l1.245-8.297A2 2 0 0 1 6.222 5H10M3 15h18M13 3l5.5 1.5M15.75 3.75l-2 7" />
        <Path d="M7 10.5q2.5-1 5 0t5 0" />
      </G>
    </Svg>
  );
};