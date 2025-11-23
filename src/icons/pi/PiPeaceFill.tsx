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

export const PiPeaceFill = (props: IconProps) => {
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
        <Path d="m136 143.37 46 32.2a71.86 71.86 0 0 1-46 24ZM56 128a71.6 71.6 0 0 0 8.81 34.48L120 123.84V56.46A72.08 72.08 0 0 0 56 128m64 71.54v-56.17l-46 32.2a71.86 71.86 0 0 0 46 23.97m16-143.08v67.38l55.19 38.64A72 72 0 0 0 136 56.46M232 128A104 104 0 1 1 128 24a104.11 104.11 0 0 1 104 104m-16 0a88 88 0 1 0-88 88 88.1 88.1 0 0 0 88-88" />
      </G>
    </Svg>
  );
};