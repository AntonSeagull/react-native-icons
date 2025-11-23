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

export const PiCameraPlusBold = (props: IconProps) => {
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
        <Path d="M172 136a12 12 0 0 1-12 12h-20v20a12 12 0 0 1-24 0v-20H96a12 12 0 0 1 0-24h20v-20a12 12 0 0 1 24 0v20h20a12 12 0 0 1 12 12m64-56v112a28 28 0 0 1-28 28H48a28 28 0 0 1-28-28V80a28 28 0 0 1 28-28h25.58l10.06-15.09A20 20 0 0 1 100.28 28h55.44a20 20 0 0 1 16.64 8.91L182.42 52H208a28 28 0 0 1 28 28m-24 0a4 4 0 0 0-4-4h-32a12 12 0 0 1-10-5.34L153.58 52h-51.16L90 70.66A12 12 0 0 1 80 76H48a4 4 0 0 0-4 4v112a4 4 0 0 0 4 4h160a4 4 0 0 0 4-4Z" />
      </G>
    </Svg>
  );
};