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

export const PiShieldCheckeredThin = (props: IconProps) => {
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
        <Path d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1 22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76 20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 12v56q0 6.12-.49 12H132V52h76a4 4 0 0 1 4 4M44 56a4 4 0 0 1 4-4h76v72H44.49q-.49-5.88-.49-12Zm1.38 76H124v94.44a135.2 135.2 0 0 1-37.71-21.73C63.27 185.78 49.56 161.38 45.38 132m124.33 72.71A134.9 134.9 0 0 1 132 226.44V132h78.62c-4.18 29.38-17.89 53.78-40.91 72.71" />
      </G>
    </Svg>
  );
};