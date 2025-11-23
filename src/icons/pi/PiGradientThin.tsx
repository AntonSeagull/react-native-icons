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

export const PiGradientThin = (props: IconProps) => {
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
        <Path d="M28 104a4 4 0 0 1 4-4h80a4 4 0 0 1 0 8H32a4 4 0 0 1-4-4m196-4h-80a4 4 0 0 0 0 8h80a4 4 0 0 0 0-8M72 140H32a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m152 0h-40a4 4 0 0 0 0 8h40a4 4 0 0 0 0-8m-124 4a4 4 0 0 0 4 4h48a4 4 0 0 0 0-8h-48a4 4 0 0 0-4 4m-44 36H32a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0H88a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8m56 0h-24a4 4 0 0 0 0 8h24a4 4 0 0 0 0-8M32 68h192a4 4 0 0 0 0-8H32a4 4 0 0 0 0 8" />
      </G>
    </Svg>
  );
};