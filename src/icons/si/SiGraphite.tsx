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

export const SiGraphite = (props: IconProps) => {
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
        <Path d="m15.215 0-12 3.215-3.215 12L8.785 24l12-3.215 3.215-12zm1.958 20.966H6.827L1.655 12l5.172-8.966h10.346L22.345 12zm.68-14.823L9.86 4 4.006 9.858l2.14 8 7.995 2.141 5.853-5.857z" />
      </G>
    </Svg>
  );
};