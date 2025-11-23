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

export const Imer2 = (props: IconProps) => {
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
        <Path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0M4.732 13.034a4.501 4.501 0 0 0-2.688-5.762 5.95 5.95 0 0 1 1.714-3.514c1.133-1.133 2.64-1.757 4.243-1.757s3.109.624 4.243 1.757a5.96 5.96 0 0 1 1.714 3.514 4.5 4.5 0 0 0-2.688 5.762c-.964.629-2.09.966-3.268.966s-2.304-.338-3.268-.966zm3.889-3.018A.5.5 0 0 1 9 10.5v1c0 .275-.225.5-.5.5h-1a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .379-.484L7.75 3h.5z" />
      </G>
    </Svg>
  );
};