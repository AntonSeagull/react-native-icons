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

export const PiMagnifyingGlassPlusBold = (props: IconProps) => {
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
        <Path d="M156 112a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H80a12 12 0 0 1 0-24h20V80a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m76.49 120.49a12 12 0 0 1-17 0L168 185a92.12 92.12 0 1 1 17-17l47.54 47.53a12 12 0 0 1-.05 16.96M112 180a68 68 0 1 0-68-68 68.08 68.08 0 0 0 68 68" />
      </G>
    </Svg>
  );
};