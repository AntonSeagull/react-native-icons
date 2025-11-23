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

export const TiAt = (props: IconProps) => {
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
        <Path d="M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.95 7.95 0 0 0 4.499-1.384 1.001 1.001 0 0 0-1.127-1.653A5.95 5.95 0 0 1 12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.5a1 1 0 0 1-2 0v-3a1 1 0 0 0-1-1 .99.99 0 0 0-.938.688A3.47 3.47 0 0 0 12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.045 0 1.975-.47 2.616-1.199A2.99 2.99 0 0 0 17 15.5c1.654 0 3-1.346 3-3V12c0-4.411-3.589-8-8-8m0 9.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5" />
      </G>
    </Svg>
  );
};