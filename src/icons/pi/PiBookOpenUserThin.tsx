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

export const PiBookOpenUserThin = (props: IconProps) => {
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
        <Path d="M232 76h-72a36 36 0 0 0-32 19.54A36 36 0 0 0 96 76H24a4 4 0 0 0-4 4v120a4 4 0 0 0 4 4h72a28 28 0 0 1 28 28 4 4 0 0 0 8 0 28 28 0 0 1 28-28h72a4 4 0 0 0 4-4V80a4 4 0 0 0-4-4M96 196H28V84h68a28 28 0 0 1 28 28v97.4A35.93 35.93 0 0 0 96 196m132 0h-68a35.94 35.94 0 0 0-28 13.41V112a28 28 0 0 1 28-28h68ZM92.8 45.6a44 44 0 0 1 70.4 0 4 4 0 0 1-6.4 4.8 36 36 0 0 0-57.6 0 4 4 0 1 1-6.4-4.8" />
      </G>
    </Svg>
  );
};