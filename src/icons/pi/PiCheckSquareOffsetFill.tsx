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

export const PiCheckSquareOffsetFill = (props: IconProps) => {
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
        <Path d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200a8 8 0 0 1-5.66-2.34l-16-16a8 8 0 0 1 11.32-11.32L80 180.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-40 40A8 8 0 0 1 80 200m120-8a8 8 0 0 1-8 8h-56a8 8 0 0 1 0-16h48V72H72v64a8 8 0 0 1-16 0V64a8 8 0 0 1 8-8h128a8 8 0 0 1 8 8Z" />
      </G>
    </Svg>
  );
};