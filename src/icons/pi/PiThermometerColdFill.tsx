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

export const PiThermometerColdFill = (props: IconProps) => {
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
        <Path d="m248.91 77.72-20 6.49 12.34 17a8 8 0 1 1-12.94 9.4l-12.31-17-12.34 17a8 8 0 0 1-12.94-9.4l12.34-17-20-6.49A8 8 0 0 1 188 62.5l20 6.5V48a8 8 0 0 1 16 0v21l20-6.49a8 8 0 0 1 4.95 15.22ZM176 192a56 56 0 1 1-88-46V40a32 32 0 0 1 64 0v106a56.23 56.23 0 0 1 24 46m-95.18-8h78.36A40.16 40.16 0 0 0 140 157.35a8 8 0 0 1-4-6.93V40a16 16 0 0 0-32 0v110.42a8 8 0 0 1-4 6.93A40.16 40.16 0 0 0 80.82 184" />
      </G>
    </Svg>
  );
};