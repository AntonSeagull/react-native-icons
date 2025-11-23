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

export const PiLinuxLogoBold = (props: IconProps) => {
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
        <Path d="M231.49 217.38a12 12 0 0 1-16.89-1.9C213.19 213.72 180 171.24 180 88a52 52 0 1 0-104 0c0 83.24-33.21 125.72-34.62 127.48a12 12 0 0 1-18.78-14.95C23 200 52 162.06 52 88a76 76 0 1 1 152 0c0 74.19 29.1 112.16 29.4 112.54a12 12 0 0 1-1.91 16.84M104 120a16 16 0 1 0-16-16 16 16 0 0 0 16 16m64-16a16 16 0 1 0-16 16 16 16 0 0 0 16-16m-72.74 51 28 12a12 12 0 0 0 9.45 0l28-12a12 12 0 0 0-9.45-22l-23.27 10-23.27-10a12 12 0 0 0-9.46 22M128 184a57.12 57.12 0 0 0-38.66 15.15 12 12 0 0 0 16.23 17.69 32.86 32.86 0 0 1 44.85 0 12 12 0 1 0 16.23-17.69A57.1 57.1 0 0 0 128 184" />
      </G>
    </Svg>
  );
};