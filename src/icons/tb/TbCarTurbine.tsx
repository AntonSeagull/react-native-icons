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

export const TbCarTurbine = (props: IconProps) => {
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
        <Path d="M7 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" />
        <Path d="M11 9q3.733.162 6 0M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 13l-3.5-1.5M11 13l2.5 3M8.5 16l2.5-3M11 13l3.5-1.5M11 9v4" />
      </G>
    </Svg>
  );
};