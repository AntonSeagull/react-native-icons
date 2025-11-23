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

export const PiCloudRain = (props: IconProps) => {
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
        <Path d="m158.66 196.44-32 48a8 8 0 1 1-13.32-8.88l32-48a8 8 0 0 1 13.32 8.88M232 92a76.08 76.08 0 0 1-76 76h-23.72l-29.62 44.44a8 8 0 1 1-13.32-8.88L113.05 168H76a52 52 0 0 1 0-104 53 53 0 0 1 8.92.76A76.08 76.08 0 0 1 232 92m-16 0a60.06 60.06 0 0 0-120-3.54 8 8 0 0 1-16-.92q.21-3.66.77-7.23A38 38 0 0 0 76 80a36 36 0 0 0 0 72h80a60.07 60.07 0 0 0 60-60" />
      </G>
    </Svg>
  );
};