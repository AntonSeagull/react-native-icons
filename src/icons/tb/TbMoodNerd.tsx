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

export const TbMoodNerd = (props: IconProps) => {
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
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
        <Path d="M6 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9.5 15a3.5 3.5 0 0 0 5 0M3.5 9H6M18 9h2.5M10 9.5q2-2 4 0" />
      </G>
    </Svg>
  );
};