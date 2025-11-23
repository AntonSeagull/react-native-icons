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

export const PiCubeFocusThin = (props: IconProps) => {
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
        <Path d="M228 48v40a4 4 0 0 1-8 0V52h-36a4 4 0 0 1 0-8h40a4 4 0 0 1 4 4M72 204H36v-36a4 4 0 0 0-8 0v40a4 4 0 0 0 4 4h40a4 4 0 0 0 0-8m152-40a4 4 0 0 0-4 4v36h-36a4 4 0 0 0 0 8h40a4 4 0 0 0 4-4v-40a4 4 0 0 0-4-4M32 92a4 4 0 0 0 4-4V52h36a4 4 0 0 0 0-8H32a4 4 0 0 0-4 4v40a4 4 0 0 0 4 4m154 71.47-56 32a4 4 0 0 1-4 0l-56-32a4 4 0 0 1-2-3.47V96a4 4 0 0 1 2-3.47l56-32a4 4 0 0 1 4 0l56 32a4 4 0 0 1 2 3.47v64a4 4 0 0 1-2 3.47M80.06 96 128 123.39 175.94 96 128 68.61ZM76 157.68l48 27.43v-54.79l-48-27.43Zm104 0v-54.79l-48 27.43v54.79Z" />
      </G>
    </Svg>
  );
};