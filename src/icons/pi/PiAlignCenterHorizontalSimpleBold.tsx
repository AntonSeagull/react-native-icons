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

export const PiAlignCenterHorizontalSimpleBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M208 76h-68V48a12 12 0 0 0-24 0v28H48a20 20 0 0 0-20 20v64a20 20 0 0 0 20 20h68v28a12 12 0 0 0 24 0v-28h68a20 20 0 0 0 20-20V96a20 20 0 0 0-20-20m-4 80H52v-56h152Z" />
      </G>
    </Svg>
  );
};