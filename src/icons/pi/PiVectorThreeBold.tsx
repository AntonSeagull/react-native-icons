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

export const PiVectorThreeBold = (props: IconProps) => {
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
        <Path d="m240.49 144.49-32 32a12 12 0 0 1-17-17L203 148h-78l-48 48h19a12 12 0 0 1 0 24H48a12 12 0 0 1-12-12v-48a12 12 0 0 1 24 0v19l48-48V53L96.49 64.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L132 53v71h71l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17" />
      </G>
    </Svg>
  );
};