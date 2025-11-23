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

export const TbBrandMailgun = (props: IconProps) => {
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
        <Path d="M17 12a2 2 0 1 0 4 0 9 9 0 1 0-2.987 6.697" />
        <Path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0" />
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
      </G>
    </Svg>
  );
};