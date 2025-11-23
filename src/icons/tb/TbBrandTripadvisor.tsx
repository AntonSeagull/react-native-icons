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

export const TbBrandTripadvisor = (props: IconProps) => {
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
        <Path d="M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M16 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
        <Path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zM6.5 9A4.5 4.5 0 1 1 3 10.671L2 9z" />
        <Path d="m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0" />
      </G>
    </Svg>
  );
};