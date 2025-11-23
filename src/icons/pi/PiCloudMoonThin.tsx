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

export const PiCloudMoonThin = (props: IconProps) => {
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
        <Path d="M172 76a72 72 0 0 0-16 1.81 68 68 0 0 0-52.68-64.09 4 4 0 0 0-4.79 4.8 60.05 60.05 0 0 1-72 72 4 4 0 0 0-4.8 4.8 68.2 68.2 0 0 0 34.44 44.78A48 48 0 0 0 92 220h80a72 72 0 0 0 0-144M31.22 99.44A69.5 69.5 0 0 0 40 100a68.07 68.07 0 0 0 68-68 70 70 0 0 0-.56-8.79A59.66 59.66 0 0 1 148 80v.11a72.27 72.27 0 0 0-44.49 45.28A48.3 48.3 0 0 0 92 124a47.75 47.75 0 0 0-29.61 10.26 60.2 60.2 0 0 1-31.17-34.82M172 212H92a40 40 0 1 1 9.43-78.88 71.6 71.6 0 0 0-1.43 10.65 4 4 0 0 0 8 .46 64.3 64.3 0 0 1 2-12.67c0-.12.07-.24.09-.36A64.06 64.06 0 1 1 172 212" />
      </G>
    </Svg>
  );
};