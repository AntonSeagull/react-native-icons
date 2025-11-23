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

export const PiHourglassSimpleBold = (props: IconProps) => {
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
        <Path d="M214 193.68 145.35 128 214 62.32l.18-.18A20 20 0 0 0 200 28H56a20 20 0 0 0-14.13 34.14l.18.18 68.6 65.68-68.6 65.68-.18.18A20 20 0 0 0 56 228h144a20 20 0 0 0 14.14-34.14ZM190 52l-62 59.39L66 52ZM66 204l62-59.39L190 204Z" />
      </G>
    </Svg>
  );
};