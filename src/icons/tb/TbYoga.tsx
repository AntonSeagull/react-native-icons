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

export const TbYoga = (props: IconProps) => {
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
        <Path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 20h4l1.5-3M17 20l-1-5h-5l1-7" />
        <Path d="m4 10 4-1 4-1 4 1.5 4 1.5" />
      </G>
    </Svg>
  );
};