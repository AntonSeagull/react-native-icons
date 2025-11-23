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

export const SiTui = (props: IconProps) => {
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
        <Path d="M24 4.517a2.117 2.117 0 0 1-2.117 2.117 2.117 2.117 0 0 1-2.117-2.117A2.117 2.117 0 0 1 21.883 2.4 2.117 2.117 0 0 1 24 4.517M1.14 7.747h5.705c.564 0 .98.178 1.147.972.185.884.113 1.499-.886 1.569l-1.791.132c1.318 8.33 9.028 11.045 13.222 2.073.695-1.485.922-1.755 1.683-1.567 1.031.256 1.172.79.677 2.283-3.624 11.057-15.819 12.166-18.211-2.604l-1.455.105C.046 10.794 0 9.796 0 9.24c0-1.099.407-1.493 1.14-1.493z" />
      </G>
    </Svg>
  );
};