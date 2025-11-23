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

export const TbZodiacLeo = (props: IconProps) => {
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
        <Path d="M13 17a4 4 0 1 0 8 0M3 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M7 7c0 3 2 5 2 9M15 7c0 4-2 6-2 10" />
      </G>
    </Svg>
  );
};