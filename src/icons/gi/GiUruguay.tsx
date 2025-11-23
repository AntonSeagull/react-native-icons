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

export const GiUruguay = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m86.627 56.843 86.84-33.014c98.7 82.092 216.765 136.019 295.685 246.884-65.653 71.335-17.208 71.745-20.095 104.064C426.444 500.632 315.248 482.712 225.14 488.17c-47.279-23.845-88.53-54.013-128.466-46.65L42.848 392z" />
      </G>
    </Svg>
  );
};