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

export const PiEyeglassesThin = (props: IconProps) => {
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
        <Path d="M200 44a4 4 0 0 0 0 8 20 20 0 0 1 20 20v68a40 40 0 0 0-71.2 16h-41.6A40 40 0 0 0 36 140V72a20 20 0 0 1 20-20 4 4 0 0 0 0-8 28 28 0 0 0-28 28v92a40 40 0 0 0 80 0h40a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M68 196a32 32 0 1 1 32-32 32 32 0 0 1-32 32m120 0a32 32 0 1 1 32-32 32 32 0 0 1-32 32" />
      </G>
    </Svg>
  );
};