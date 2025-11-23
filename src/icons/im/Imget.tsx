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

export const Imget = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 7h-1.577A6.52 6.52 0 0 0 9 1.577V0H7v1.577A6.52 6.52 0 0 0 1.577 7H0v2h1.577A6.52 6.52 0 0 0 7 14.423V16h2v-1.577A6.52 6.52 0 0 0 14.423 9H16zm-3.612 0h-1.559A3 3 0 0 0 9 5.171V3.612A4.52 4.52 0 0 1 12.388 7M8 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2M7 3.612v1.559A3 3 0 0 0 5.171 7H3.612A4.52 4.52 0 0 1 7 3.612M3.612 9h1.559A3 3 0 0 0 7 10.829v1.559A4.52 4.52 0 0 1 3.612 9M9 12.388v-1.559A3 3 0 0 0 10.829 9h1.559A4.52 4.52 0 0 1 9 12.388" />
      </G>
    </Svg>
  );
};