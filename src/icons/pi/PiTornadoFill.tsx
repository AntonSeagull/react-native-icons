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

export const PiTornadoFill = (props: IconProps) => {
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
        <Path d="M144 228a12 12 0 0 1-12 12h-16a12 12 0 0 1 0-24h16a12 12 0 0 1 12 12m76-196H60a12 12 0 0 0 0 24 12 12 0 0 1 0 24H44a12 12 0 0 0 0 24h32a12 12 0 0 1 0 24 12 12 0 0 0 0 24h48a12 12 0 0 1 0 24 12 12 0 0 0 0 24h48a12 12 0 0 0 0-24 12 12 0 0 1 0-24h16a12 12 0 0 0 0-24h-24a12 12 0 0 1 0-24 12 12 0 0 0 0-24 12 12 0 0 1 0-24h56a12 12 0 0 0 0-24" />
      </G>
    </Svg>
  );
};