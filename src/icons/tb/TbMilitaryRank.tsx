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

export const TbMilitaryRank = (props: IconProps) => {
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
        <Path d="M18 7v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V7l6-4z" />
        <Path d="m10 13 2-1 2 1M10 17l2-1 2 1M10 9l2-1 2 1" />
      </G>
    </Svg>
  );
};