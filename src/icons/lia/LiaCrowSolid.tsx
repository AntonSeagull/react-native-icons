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

export const LiaCrowSolid = (props: IconProps) => {
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
        <Path d="M7 6a4 4 0 0 0-4 4v5c0 4.079 3.055 7.439 7 7.932V27h2v-4h2v4h2v-4h6.385l3.078 2h4L11 13v-3h4c0-1.657-2.204-3-4-3H9.62A3.97 3.97 0 0 0 7 6m0 2c.202 0 .392.04.576.096A1 1 0 0 0 8 10a1 1 0 0 0 .904-.576C8.96 9.608 9 9.798 9 10v4.086l.91.59L19.64 21H11c-3.308 0-6-2.692-6-6v-5c0-1.103.897-2 2-2" />
      </G>
    </Svg>
  );
};