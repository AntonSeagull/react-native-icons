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

export const LiaBoltSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M16 6v9l4 1-3.898 10H16v-8.031l-4-1L15.898 6zm2-2h-3.512l-.472 1.328-3.903 10.973-.734 2.074 2.137.535 2.484.621V28h3.469l.496-1.273 3.898-10 .825-2.118L18 13.438Z" />
      </G>
    </Svg>
  );
};