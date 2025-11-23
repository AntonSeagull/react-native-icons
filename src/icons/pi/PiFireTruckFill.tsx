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

export const PiFireTruckFill = (props: IconProps) => {
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
        <Path d="m255.43 117-14-35a15.93 15.93 0 0 0-14.85-10H192v-8a8 8 0 0 0-16 0v64H24a8 8 0 0 0-8 8v48a16 16 0 0 0 16 16h17a32 32 0 0 0 62 0h50a32 32 0 0 0 62 0h17a16 16 0 0 0 16-16v-64a7.9 7.9 0 0 0-.57-3M80 208a16 16 0 1 1 16-16 16 16 0 0 1-16 16m112 0a16 16 0 1 1 16-16 16 16 0 0 1-16 16m0-96V88h34.58l9.6 24ZM24 96a8 8 0 0 0 0 16h128a8 8 0 0 0 0-16h-16V72h16a8 8 0 0 0 0-16H24a8 8 0 0 0 0 16h16v24Zm72-24h24v24H96Zm-40 0h24v24H56Z" />
      </G>
    </Svg>
  );
};