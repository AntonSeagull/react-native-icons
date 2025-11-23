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

export const SiQuora = (props: IconProps) => {
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
        <Path d="M7.38.948A11.963 11.963 0 0 1 21.248 19.54l2.41 2.422c.732.736.21 1.99-.828 1.99l-10.71.01h-.324A11.963 11.963 0 0 1 7.382.95Zm7.322 4.428a7.172 7.172 0 1 0-5.488 13.252 7.172 7.172 0 0 0 5.489-13.252Z" />
      </G>
    </Svg>
  );
};