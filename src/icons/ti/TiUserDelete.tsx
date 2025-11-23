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

export const TiUserDelete = (props: IconProps) => {
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
        <Path d="M21 14h-6a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2m-7-5c0 1.381-.56 2.631-1.464 3.535C11.631 13.44 10.381 14 9 14s-2.631-.56-3.536-1.465C4.56 11.631 4 10.381 4 9s.56-2.631 1.464-3.535C6.369 4.56 7.619 4 9 4s2.631.56 3.536 1.465A4.98 4.98 0 0 1 14 9m-5 6c-3.75 0-6 2-6 4 0 1 2.25 2 6 2 3.518 0 6-1 6-2 0-2-2.354-4-6-4" />
      </G>
    </Svg>
  );
};