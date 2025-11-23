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

export const TbMessage2Off = (props: IconProps) => {
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
        <Path d="M8 9h1m4 0h3M8 13h5M8 4h10a3 3 0 0 1 3 3v8c0 .57-.16 1.104-.436 1.558M18 18h-3l-3 3-3-3H6a3 3 0 0 1-3-3V7c0-1.084.575-2.034 1.437-2.561M3 3l18 18" />
      </G>
    </Svg>
  );
};