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

export const TbMotorbike = (props: IconProps) => {
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
        <Path d="M2 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16 16a3 3 0 1 0 6 0 3 3 0 1 0-6 0M7.5 14h5l4-4H6m1.5 4 4-4" />
        <Path d="M13 6h2l1.5 3 2 4" />
      </G>
    </Svg>
  );
};