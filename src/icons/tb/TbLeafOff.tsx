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

export const TbLeafOff = (props: IconProps) => {
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
        <Path d="M5 21c.475-4.27 2.3-7.64 6.331-9.683" />
        <Path d="M6.618 6.623C4.744 8.248 3.993 10.5 3.986 13c0 1 0 3 2 5H9c2.733 0 5.092-.635 6.92-2.087m1.899-2.099C19.043 11.942 19.806 9.38 20 6V4h-4.014c-2.863 0-5.118.405-6.861 1.118M3 3l18 18" />
      </G>
    </Svg>
  );
};