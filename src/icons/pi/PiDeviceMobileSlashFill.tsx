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

export const PiDeviceMobileSlashFill = (props: IconProps) => {
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
        <Path d="M213.38 221.92a8 8 0 0 1-11.3-.54l-2.26-2.48A24 24 0 0 1 176 240H80a24 24 0 0 1-24-24V60.69L42.08 45.38a8 8 0 1 1 11.84-10.76l160 176a8 8 0 0 1-.54 11.3m-27.3-65.71a8 8 0 0 0 13.92-5.38V40a24 24 0 0 0-24-24H76.7a8 8 0 0 0-5.92 13.38Z" />
      </G>
    </Svg>
  );
};