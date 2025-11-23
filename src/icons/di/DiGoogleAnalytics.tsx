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

export const DiGoogleAnalytics = (props: IconProps) => {
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
        <Path fill="#444" d="M27.028 25.367a1.953 1.953 0 0 1-1.947 1.947H6.918a1.953 1.953 0 0 1-1.947-1.947V7.204c0-1.071.876-1.947 1.947-1.947h18.163c1.071 0 1.947.876 1.947 1.947zm0-13.18-1.992-1.342a2.344 2.344 0 1 0-4.184.828l-4.307 6.586a2.333 2.333 0 0 0-2.059.488l-2.883-1.659q.024-.159.025-.323a2.344 2.344 0 1 0-4.506.906l-2.153 1.997v2.125l3.198-2.967a2.33 2.33 0 0 0 2.717-.354l2.813 1.619a2.343 2.343 0 1 0 4.155-.986l4.277-6.54a2.332 2.332 0 0 0 2.065-.409l2.833 1.909z" />
      </G>
    </Svg>
  );
};