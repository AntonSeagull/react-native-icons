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

export const GiPalisade = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m112 144.836-9 48V279h18v-86.164zm36 0-9 48V279h18v-86.164zm216 0-9 48V279h18v-86.164zm36 0-9 48V279h18v-86.164zm-360 64-9 48V279h18v-22.164zm36 0-9 48V279h18v-22.164zm108 0-9 48V279h18v-22.164zm36 0-9 48V279h18v-22.164zm36 0-9 48V279h18v-22.164zm36 0-9 48V279h18v-22.164zm36 0-9 48V279h18v-22.164zm108 0-9 48V279h18v-22.164zm36 0-9 48V279h18v-22.164zM18 297v16h138.96v-16zm156.96 0v16h162.005v-16zm180.005 0v16H494v-16zM31 331v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331zm36 0v156h18V331z" />
      </G>
    </Svg>
  );
};