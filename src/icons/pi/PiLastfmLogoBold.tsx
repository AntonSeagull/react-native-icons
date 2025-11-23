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

export const PiLastfmLogoBold = (props: IconProps) => {
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
        <Path d="M252 160a44.05 44.05 0 0 1-44 44h-17.43a60.2 60.2 0 0 1-54.37-34.63l-30.15-64.59A36.13 36.13 0 0 0 73.43 84H64a36 36 0 0 0-36 36v24a36 36 0 0 0 36 36h8a28 28 0 0 0 25.68-16.8 12 12 0 1 1 22 9.6A52 52 0 0 1 72 204h-8a60.07 60.07 0 0 1-60-60v-24a60.07 60.07 0 0 1 60-60h9.43a60.2 60.2 0 0 1 54.37 34.63l30.2 64.59A36.13 36.13 0 0 0 190.57 180H208a20 20 0 0 0 0-40h-20a40 40 0 0 1 0-80h20a36 36 0 0 1 36 36 12 12 0 0 1-24 0 12 12 0 0 0-12-12h-20a16 16 0 0 0 0 32h20a44.05 44.05 0 0 1 44 44" />
      </G>
    </Svg>
  );
};