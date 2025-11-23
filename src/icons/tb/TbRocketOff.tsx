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

export const TbRocketOff = (props: IconProps) => {
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
        <Path d="M9.29 9.275A9 9 0 0 0 9 10a6 6 0 0 0-5 3 8 8 0 0 1 7 7 6 6 0 0 0 3-5q.362-.128.708-.283m2.428-1.61A9 9 0 0 0 20 7a3 3 0 0 0-3-3 9 9 0 0 0-6.107 2.864" />
        <Path d="M7 14a6 6 0 0 0-3 6 6 6 0 0 0 6-3M14 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
      </G>
    </Svg>
  );
};