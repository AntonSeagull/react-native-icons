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

export const CgSmartHomeHeat = (props: IconProps) => {
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
        <Path fill="currentColor" d="M17 11H7a1 1 0 1 0 0 2h3v2H7a3 3 0 1 1 0-6h10a3 3 0 1 1 0 6h-3v-2h3a1 1 0 1 0 0-2" />
        <Path fill="currentColor" fillRule="evenodd" d="M0 12a7 7 0 0 1 7-7h10a7 7 0 1 1 0 14H7a7 7 0 0 1-7-7m7-5h10a5 5 0 0 1 0 10H7A5 5 0 0 1 7 7" clipRule="evenodd" />
      </G>
    </Svg>
  );
};