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

export const Implane = (props: IconProps) => {
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
        <Path d="M12 9.999 9.143 7.142 16 1.999l-2-2-8.571 3.429L2.731.729C1.953-.049.867-.235.317.315s-.364 1.636.414 2.414l2.698 2.698L0 13.999l2 2 5.144-6.857 2.857 2.857v4h2l1-3 3-1v-2h-4z" />
      </G>
    </Svg>
  );
};