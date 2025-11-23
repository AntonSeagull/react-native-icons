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

export const TbMickey = (props: IconProps) => {
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
        <Path d="M5.5 3a3.5 3.5 0 0 1 3.25 4.8 7 7 0 0 0-2.424 2.1A3.5 3.5 0 1 1 5.5 3M18.5 3a3.5 3.5 0 1 1-.826 6.902 7 7 0 0 0-2.424-2.103A3.5 3.5 0 0 1 18.5 3" />
        <Path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
      </G>
    </Svg>
  );
};