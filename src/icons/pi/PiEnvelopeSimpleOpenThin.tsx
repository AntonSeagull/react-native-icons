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

export const PiEnvelopeSimpleOpenThin = (props: IconProps) => {
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
        <Path d="m226.22 92.67-96-64a4 4 0 0 0-4.44 0l-96 64A4 4 0 0 0 28 96v104a12 12 0 0 0 12 12h176a12 12 0 0 0 12-12V96a4 4 0 0 0-1.78-3.33M128 36.81l89 59.3L144.17 148h-32.34L39.05 96.11ZM216 204H40a4 4 0 0 1-4-4v-96.24l72.22 51.5a4 4 0 0 0 2.33.74h34.9a4 4 0 0 0 2.33-.74l72.22-51.5V200a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};