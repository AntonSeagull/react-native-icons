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

export const PiSubsetProperOfLight = (props: IconProps) => {
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
        <Path d="M206 208a6 6 0 0 1-6 6h-72a86 86 0 0 1 0-172h72a6 6 0 0 1 0 12h-72a74 74 0 0 0 0 148h72a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};