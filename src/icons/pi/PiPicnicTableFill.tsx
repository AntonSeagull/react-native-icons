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

export const PiPicnicTableFill = (props: IconProps) => {
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
        <Path d="m146.85 96 14.54 32H94.61l14.54-32ZM232 56v144a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16V56a16 16 0 0 1 16-16h176a16 16 0 0 1 16 16m-24 80a8 8 0 0 0-8-8h-21l-14.58-32H176a8 8 0 0 0 0-16H80a8 8 0 0 0 0 16h11.58L77 128H56a8 8 0 0 0 0 16h13.76l-13 28.69a8 8 0 1 0 14.56 6.62l16-35.31h81.34l16.05 35.31a8 8 0 0 0 14.56-6.62l-13-28.69H200a8 8 0 0 0 8-8" />
      </G>
    </Svg>
  );
};