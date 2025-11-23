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

export const TbBrandGraphql = (props: IconProps) => {
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
        <Path d="m4 8 8-5 8 5v8l-8 5-8-5z" />
        <Path d="m12 4 7.5 12h-15z" />
        <Path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M11 21a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 16a1 1 0 1 0 2 0 1 1 0 0 0-2 0M19 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
      </G>
    </Svg>
  );
};