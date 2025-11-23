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

export const TbBrandOpenvpn = (props: IconProps) => {
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
        <Path d="m15.618 20.243-2.193-5.602a3 3 0 1 0-2.849 0l-2.193 5.603" />
        <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
      </G>
    </Svg>
  );
};