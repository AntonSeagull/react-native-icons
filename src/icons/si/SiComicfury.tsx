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

export const SiComicfury = (props: IconProps) => {
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
        <Path d="m0 6.959 1.899-3.256 2.725 2.736 2.973-.204L9.3 3.297l2.213 2.693 8.655-.252.406-1.085L24 5.128v5.268l-11.248 3.526-1.085 6.781H0zm2.195-.748L1.041 8.137l1.75 1.748 1.133-1.948zm7.409-.448L8.48 7.546l1.224 1.598 1.137-1.766zm3.901 3.751-1.992.349.997 2.025zm3.319-.565-1.992.348.996 2.025zm3.228-.611-1.991.349.996 2.025zm3.183-.566-1.992.349.996 2.025z" />
      </G>
    </Svg>
  );
};