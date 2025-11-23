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

export const PiMosque = (props: IconProps) => {
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
        <Path d="M224 128a23.8 23.8 0 0 0-8 1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16 41.06 136 33 136 24a8 8 0 0 0-16 0c0 9-12.16 17.06-26.24 26.44C71.07 65.54 40 86.22 40 128v1.38A24 24 0 0 0 8 152v56a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h32a8 8 0 0 0 8-8v-32a8 8 0 0 1 16 0v32a8 8 0 0 0 8 8h64a8 8 0 0 0 8-8v-56a24 24 0 0 0-24-24M102.63 63.76c9.67-6.44 19-12.68 25.37-20 6.34 7.35 15.7 13.59 25.37 20 20 13.32 42.48 28.29 46.11 56.24h-143c3.67-27.95 26.12-42.92 46.15-56.24M24 152a8 8 0 0 1 16 0v48H24Zm136 0a24 24 0 0 0-24 24v24h-16v-24a24 24 0 0 0-48 0v24H56v-64h144v64h-16v-24a24 24 0 0 0-24-24m72 48h-16v-48a8 8 0 0 1 16 0Z" />
      </G>
    </Svg>
  );
};