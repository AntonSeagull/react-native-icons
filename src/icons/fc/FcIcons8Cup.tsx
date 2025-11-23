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

export const FcIcons8Cup = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#4CAF50" d="M40 14H8l3.8 28.3c.1 1 1 1.7 2 1.7h20.5c1 0 1.8-.7 2-1.7z" />
        <Path d="M42 14H6v-3c0-2.2 1.8-4 4-4h28c2.2 0 4 1.8 4 4z" />
        <Path d="M37.2 10H10.8l1.7-4.7c.3-.8 1-1.3 1.9-1.3h19.2c.8 0 1.6.5 1.9 1.3z" />
        <Path fill="#E8F5E9" d="M28 28.5c1.2-1.1 2-2.7 2-4.5 0-3.3-2.7-6-6-6s-6 2.7-6 6c0 1.8.8 3.4 2 4.5-1.2 1.1-2 2.7-2 4.5 0 3.3 2.7 6 6 6s6-2.7 6-6c0-1.8-.8-3.4-2-4.5M24 36c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3m0-9c-1.7 0-3-1.3-3-3s1.3-3 3-3 3 1.3 3 3-1.3 3-3 3" />
      </G>
    </Svg>
  );
};