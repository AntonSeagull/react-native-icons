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

export const PiTornadoBold = (props: IconProps) => {
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
        <Path d="M232 44a12 12 0 0 1-12 12H60a12 12 0 0 1 0-24h160a12 12 0 0 1 12 12m-56 44a12 12 0 0 0-12-12H44a12 12 0 0 0 0 24h120a12 12 0 0 0 12-12m0 44a12 12 0 0 0-12-12H76a12 12 0 0 0 0 24h88a12 12 0 0 0 12-12m-4 32h-40a12 12 0 0 0 0 24h40a12 12 0 0 0 0-24m-32 44h-16a12 12 0 0 0 0 24h16a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};