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

export const PiCursorTextLight = (props: IconProps) => {
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
        <Path d="M182 208a6 6 0 0 1-6 6h-16a38 38 0 0 1-32-17.55A38 38 0 0 1 96 214H80a6 6 0 0 1 0-12h16a26 26 0 0 0 26-26v-42h-18a6 6 0 0 1 0-12h18V80a26 26 0 0 0-26-26H80a6 6 0 0 1 0-12h16a38 38 0 0 1 32 17.55A38 38 0 0 1 160 42h16a6 6 0 0 1 0 12h-16a26 26 0 0 0-26 26v42h18a6 6 0 0 1 0 12h-18v42a26 26 0 0 0 26 26h16a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};