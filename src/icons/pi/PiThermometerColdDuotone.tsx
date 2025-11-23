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

export const PiThermometerColdDuotone = (props: IconProps) => {
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
        <Path d="M152 138V48a32 32 0 0 0-64 0v90a56 56 0 1 0 64 0m-32 70a24 24 0 1 1 24-24 24 24 0 0 1-24 24" opacity={0.2} />
        <Path d="m248.91 77.72-20 6.49 12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM152 184a32 32 0 1 1-40-31v-33a8 8 0 0 1 16 0v33a32.06 32.06 0 0 1 24 31m-16 0a16 16 0 1 0-16 16 16 16 0 0 0 16-16m48 0a64 64 0 1 1-104-50V48a40 40 0 0 1 80 0v86a64.08 64.08 0 0 1 24 50m-16 0a48.08 48.08 0 0 0-20.58-39.4A8 8 0 0 1 144 138V48a24 24 0 0 0-48 0v90a8 8 0 0 1-3.42 6.56A48 48 0 1 0 168 184" />
      </G>
    </Svg>
  );
};