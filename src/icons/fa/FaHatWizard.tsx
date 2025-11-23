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

export const FaHatWizard = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16m-304-64-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.96 63.96 0 0 1-1.89-45.45L416 0 228.42 107.19a128 128 0 0 0-53.46 59.15L64 416h144zm64-224 16-32 16 32 32 16-32 16-16 32-16-32-32-16z" />
      </G>
    </Svg>
  );
};