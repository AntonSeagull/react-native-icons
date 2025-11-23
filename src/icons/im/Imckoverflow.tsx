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

export const Imckoverflow = (props: IconProps) => {
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
        <Path d="M16 10v6H0v-6h2v4h12v-4zM3 11h10v2H3zm.237-2.165.433-1.953 9.763 2.164L13 10.999zM4.37 4.821l.845-1.813 9.063 4.226-.845 1.813zm11.126.827-1.218 1.587-7.934-6.088L7.224 0h.91z" />
      </G>
    </Svg>
  );
};