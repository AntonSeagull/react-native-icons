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

export const PiWineFill = (props: IconProps) => {
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
        <Path d="m205.33 103.67-21.77-73.93a8 8 0 0 0-7.67-5.74H80.11a8 8 0 0 0-7.67 5.74l-21.77 73.93a63.46 63.46 0 0 0 17.42 64.67A87.4 87.4 0 0 0 120 191.63V232H88a8 8 0 1 0 0 16h80a8 8 0 1 0 0-16h-32v-40.37a87.4 87.4 0 0 0 51.91-23.29 63.48 63.48 0 0 0 17.42-64.67M86.09 40h83.82L190 108.19c.09.3.17.6.25.9-21.42 7.68-45.54-1.6-58.63-8.23-25.19-12.75-45.19-14.37-59.94-11.93Z" />
      </G>
    </Svg>
  );
};