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

export const PiCallBellLight = (props: IconProps) => {
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
        <Path d="M24 182h208a6 6 0 0 0 0-12h-10v-18a94.1 94.1 0 0 0-88-93.8V38h18a6 6 0 0 0 0-12h-48a6 6 0 0 0 0 12h18v20.2A94.1 94.1 0 0 0 34 152v18H24a6 6 0 0 0 0 12m22-30a82 82 0 0 1 164 0v18H46Zm192 56a6 6 0 0 1-6 6H24a6 6 0 0 1 0-12h208a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};