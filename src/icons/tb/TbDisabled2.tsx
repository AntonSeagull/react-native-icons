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

export const TbDisabled2 = (props: IconProps) => {
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
        <Path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 11a5 5 0 1 0 3.95 7.95" />
        <Path d="m19 20-4-5h-4l3-5-4-3-4 1" />
      </G>
    </Svg>
  );
};