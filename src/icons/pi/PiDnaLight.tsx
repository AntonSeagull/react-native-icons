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

export const PiDnaLight = (props: IconProps) => {
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
        <Path d="M198 204.5V232a6 6 0 0 1-12 0v-27.5a65.64 65.64 0 0 0-36.48-59l-48.4-24.2A77.57 77.57 0 0 1 58 51.5V24a6 6 0 0 1 12 0v27.5a65.64 65.64 0 0 0 36.48 59l48.4 24.2A77.57 77.57 0 0 1 198 204.5m-38-2.5H70.05A66 66 0 0 1 74 182h74.13a6 6 0 0 0 0-12H79.77a65.9 65.9 0 0 1 17.16-18.7 6 6 0 0 0-7.1-9.67A78.27 78.27 0 0 0 58 204.5V232a6 6 0 0 0 12 0v-18h90a6 6 0 0 0 0-12m32-184a6 6 0 0 0-6 6v18H96a6 6 0 0 0 0 12h90a66 66 0 0 1-4 20h-74.11a6 6 0 1 0 0 12h68.34a65.9 65.9 0 0 1-17.16 18.7 6 6 0 0 0 7.1 9.67A78.27 78.27 0 0 0 198 51.5V24a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};