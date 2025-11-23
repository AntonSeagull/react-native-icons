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

export const PiSunglassesThin = (props: IconProps) => {
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
        <Path d="M200 44a4 4 0 0 0 0 8 20 20 0 0 1 20 20v60H36V72a20 20 0 0 1 20-20 4 4 0 0 0 0-8 28 28 0 0 0-28 28v92a40 40 0 0 0 80 0v-24h40v24a40 40 0 0 0 80 0V72a28 28 0 0 0-28-28M36 164v-24h2.34l49.27 49.26A32 32 0 0 1 36 164m64 0a31.83 31.83 0 0 1-6.74 19.61L49.66 140H100Zm56 0v-24h2.34l49.27 49.26A32 32 0 0 1 156 164m57.26 19.61L169.66 140H220v24a31.83 31.83 0 0 1-6.74 19.61" />
      </G>
    </Svg>
  );
};