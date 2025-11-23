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

export const SiTaichigraphics = (props: IconProps) => {
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
        <Path d="M19.343 20.672a1.94 1.94 0 0 0 1.94-1.94 1.94 1.94 0 1 0-3.88 0 1.94 1.94 0 0 0 1.94 1.94M9.058 12.796a6.858 6.858 0 1 0-2.324-9.67q-.094.148-.185.3c-.06.103-.11.205-.167.31a6.86 6.86 0 0 0 2.676 9.06m0-.003h-4.23l-2.113 3.663 2.114 3.667h4.229l2.116-3.667zm0 7.33L6.82 23.999h4.48Z" />
      </G>
    </Svg>
  );
};