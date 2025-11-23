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

export const Imnner11 = (props: IconProps) => {
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
        <Path d="M16 6h-6l2.243-2.243C11.11 2.624 9.603 2 8 2s-3.109.624-4.243 1.757C2.624 4.89 2 6.397 2 8s.624 3.109 1.757 4.243C4.89 13.376 6.397 14 8 14a5.96 5.96 0 0 0 4.516-2.049l1.505 1.317a8 8 0 1 1-.364-10.924L16 0z" />
      </G>
    </Svg>
  );
};