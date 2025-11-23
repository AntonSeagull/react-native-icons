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

export const PiPlugsFill = (props: IconProps) => {
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
        <Path d="M149.66 149.66 131.31 168l18.35 18.34a8 8 0 0 1-11.32 11.32l-6.34-6.35-23.31 23.32a32.06 32.06 0 0 1-45.26 0l-5.37-5.38-28.4 28.41a8 8 0 0 1-11.32-11.32l28.41-28.4-5.38-5.37a32 32 0 0 1 0-45.26L64.69 124l-6.35-6.34a8 8 0 0 1 11.32-11.32L88 124.69l18.34-18.35a8 8 0 0 1 11.32 11.32L99.31 136 120 156.69l18.34-18.35a8 8 0 0 1 11.32 11.32m88-131.32a8 8 0 0 0-11.32 0l-28.4 28.41-5.37-5.38a32.05 32.05 0 0 0-45.26 0L124 64.69l-6.34-6.35a8 8 0 0 0-11.32 11.32l80 80a8 8 0 0 0 11.32-11.32l-6.35-6.34 23.32-23.31a32 32 0 0 0 0-45.26l-5.38-5.37 28.41-28.4a8 8 0 0 0 0-11.32" />
      </G>
    </Svg>
  );
};