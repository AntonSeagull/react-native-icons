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

export const RiBluetoothFill = (props: IconProps) => {
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
        <Path d="m14.312 12 4.343 4.343L12.998 22h-2v-6.686l-4.364 4.364-1.414-1.415 5.778-5.778v-.97L5.22 5.737l1.414-1.415 4.364 4.364V2h2l5.657 5.657zm-1.314 1.515v5.657l2.828-2.829zm0-3.03 2.828-2.828-2.828-2.829z" />
      </G>
    </Svg>
  );
};