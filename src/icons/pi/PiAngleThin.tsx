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

export const PiAngleThin = (props: IconProps) => {
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
        <Path d="M100 72a4 4 0 0 1 4-4 100.11 100.11 0 0 1 100 100 4 4 0 0 1-8 0 92.1 92.1 0 0 0-92-92 4 4 0 0 1-4-4m140 124H76V32a4 4 0 0 0-8 0v36H32a4 4 0 0 0 0 8h36v124a4 4 0 0 0 4 4h168a4 4 0 0 0 0-8" />
      </G>
    </Svg>
  );
};