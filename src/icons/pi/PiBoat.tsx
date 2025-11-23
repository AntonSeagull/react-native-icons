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

export const PiBoat = (props: IconProps) => {
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
        <Path d="M221.06 110.59 208 106.23V56a16 16 0 0 0-16-16h-56V24a8 8 0 0 0-16 0v16H64a16 16 0 0 0-16 16v50.23l-13.06 4.36A16 16 0 0 0 24 125.77V152c0 61.54 97.89 86.72 102.06 87.76a8 8 0 0 0 3.88 0C134.11 238.72 232 213.54 232 152v-26.23a16 16 0 0 0-10.94-15.18M64 56h128v44.9l-61.47-20.49a8 8 0 0 0-5.06 0L64 100.9Zm152 96c0 24.91-23.68 43-43.55 53.83A228 228 0 0 1 128 223.72 227 227 0 0 1 83.81 206C47.6 186.35 40 165.79 40 152v-26.23l80-26.67V168a8 8 0 0 0 16 0V99.1l80 26.67Z" />
      </G>
    </Svg>
  );
};