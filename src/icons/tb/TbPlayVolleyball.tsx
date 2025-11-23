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

export const TbPlayVolleyball = (props: IconProps) => {
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
        <Path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
        <Path fill="currentColor" d="M20.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
        <Path d="m2 16 5 1 .5-2.5M11.5 21l2.5-5.5L8.5 12 12 8l3 4 4 2" />
      </G>
    </Svg>
  );
};