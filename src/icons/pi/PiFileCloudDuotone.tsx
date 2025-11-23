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

export const PiFileCloudDuotone = (props: IconProps) => {
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
        <Path d="M208 88h-56V32Zm-100 48a44 44 0 0 0-42.34 32H60a28 28 0 0 0 0 56h48a44 44 0 0 0 0-88" opacity={0.2} />
        <Path d="m213.66 82.34-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v88a8 8 0 0 0 16 0V40h88v48a8 8 0 0 0 8 8h48v120h-24a8 8 0 0 0 0 16h24a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M160 51.31 188.69 80H160ZM108 128a52 52 0 0 0-48 32 36 36 0 0 0 0 72h48a52 52 0 0 0 0-104m0 88H60a20 20 0 0 1-3.81-39.64 8 8 0 0 0 16 .36 38 38 0 0 1 1.06-6.09 8 8 0 0 0 .27-1A36 36 0 1 1 108 216" />
      </G>
    </Svg>
  );
};