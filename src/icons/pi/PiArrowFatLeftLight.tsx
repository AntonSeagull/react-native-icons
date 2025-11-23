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

export const PiArrowFatLeftLight = (props: IconProps) => {
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
        <Path d="M208 74h-82V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h82a14 14 0 0 0 14-14V88a14 14 0 0 0-14-14m2 94a2 2 0 0 1-2 2h-88a6 6 0 0 0-6 6v33.51L32.49 128 114 46.49V80a6 6 0 0 0 6 6h88a2 2 0 0 1 2 2Z" />
      </G>
    </Svg>
  );
};