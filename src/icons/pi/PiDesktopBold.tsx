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

export const PiDesktopBold = (props: IconProps) => {
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
        <Path d="M208 36H48a28 28 0 0 0-28 28v108a28 28 0 0 0 28 28h68v12H96a12 12 0 0 0 0 24h64a12 12 0 0 0 0-24h-20v-12h68a28 28 0 0 0 28-28V64a28 28 0 0 0-28-28M48 60h160a4 4 0 0 1 4 4v72H44V64a4 4 0 0 1 4-4m160 116H48a4 4 0 0 1-4-4v-12h168v12a4 4 0 0 1-4 4" />
      </G>
    </Svg>
  );
};