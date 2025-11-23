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

export const TiCreditCard = (props: IconProps) => {
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
        <Path d="M17 7H6c-1.654 0-3 1.346-3 3v7c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-7c0-1.654-1.346-3-3-3m1 10a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-4h13zm0-6H5v-1a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1zm-4 5h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1" />
      </G>
    </Svg>
  );
};