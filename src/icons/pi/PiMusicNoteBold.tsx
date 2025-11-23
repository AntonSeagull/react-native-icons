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

export const PiMusicNoteBold = (props: IconProps) => {
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
        <Path d="m211.45 52.51-80-24A12 12 0 0 0 116 40v100.22A52 52 0 1 0 140 184v-79.87l64.55 19.36A12 12 0 0 0 220 112V64a12 12 0 0 0-8.55-11.49M88 212a28 28 0 1 1 28-28 28 28 0 0 1-28 28M196 95.87l-56-16.8V56.13l56 16.8Z" />
      </G>
    </Svg>
  );
};