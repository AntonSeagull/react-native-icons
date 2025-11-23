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

export const PiCurrencyGbpLight = (props: IconProps) => {
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
        <Path d="M190 208a6 6 0 0 1-6 6H56a6 6 0 0 1 0-12h4a30 30 0 0 0 30-30v-38H56a6 6 0 0 1 0-12h34V84a50 50 0 0 1 81.81-38.58 6 6 0 1 1-7.64 9.26A38 38 0 0 0 102 84v38h34a6 6 0 0 1 0 12h-34v38a41.88 41.88 0 0 1-12.63 30H184a6 6 0 0 1 6 6" />
      </G>
    </Svg>
  );
};