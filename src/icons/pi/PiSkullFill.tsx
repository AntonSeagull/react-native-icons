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

export const PiSkullFill = (props: IconProps) => {
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
        <Path d="M128 16C70.65 16 24 60.86 24 116c0 34.1 18.27 66 48 84.28V216a16 16 0 0 0 16 16h8a4 4 0 0 0 4-4v-27.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v28a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4v-27.75a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v28a4 4 0 0 0 4 4h8a16 16 0 0 0 16-16v-15.74C213.73 182 232 150.1 232 116c0-55.14-46.65-100-104-100M92 152a20 20 0 1 1 20-20 20 20 0 0 1-20 20m72 0a20 20 0 1 1 20-20 20 20 0 0 1-20 20" />
      </G>
    </Svg>
  );
};