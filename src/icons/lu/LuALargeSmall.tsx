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

export const LuALargeSmall = (props: IconProps) => {
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
        <Path d="m15 16 2.536-7.328a1.02 1.02 1 0 1 1.928 0L22 16M15.697 14h5.606M2 16l4.039-9.69a.5.5 0 0 1 .923 0L11 16M3.304 13h6.392" />
      </G>
    </Svg>
  );
};