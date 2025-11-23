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

export const LiaTruckLoadingSolid = (props: IconProps) => {
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
        <Path d="M17 5v16.074L2.732 25.035l.536 1.928 16.748-4.649A5.003 5.003 0 0 0 25 27c2.757 0 5-2.243 5-5s-2.243-5-5-5a5 5 0 0 0-4.633 3.139L19 20.518V7h11V5zm-4.54 4.764L1.917 12.787l2.775 9.684 10.545-3.026zm-1.37 2.472 1.674 5.838-6.7 1.92-1.673-5.836zM25 19c1.654 0 3 1.346 3 3s-1.346 3-3 3-3-1.346-3-3 1.346-3 3-3" />
      </G>
    </Svg>
  );
};