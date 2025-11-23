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

export const PiCricket = (props: IconProps) => {
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
        <Path d="m243.31 81.37-52.68-52.68a16 16 0 0 0-22.63 0L60.69 136a16 16 0 0 0 0 22.63l20.68 20.68-47 47a8 8 0 0 0 11.32 11.32l47-47 20.68 20.68a16 16 0 0 0 22.63 0L243.31 104a16 16 0 0 0 0-22.63M124.69 200 104 179.31l29.66-29.65a8 8 0 0 0-11.32-11.32L92.69 168 72 147.31 107.31 112H160v52.69ZM232 92.69l-56 56V104a8 8 0 0 0-8-8h-44.69l56-56L232 92.68ZM60 88a28 28 0 1 0-28-28 28 28 0 0 0 28 28m0-40a12 12 0 1 1-12 12 12 12 0 0 1 12-12" />
      </G>
    </Svg>
  );
};