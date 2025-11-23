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

export const PiArrowSquareInThin = (props: IconProps) => {
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
        <Path d="M124 136v64a4 4 0 0 1-8 0v-54.34l-73.17 73.17a4 4 0 0 1-5.66-5.66L110.34 140H56a4 4 0 0 1 0-8h64a4 4 0 0 1 4 4m84-100H80a12 12 0 0 0-12 12v48a4 4 0 0 0 8 0V48a4 4 0 0 1 4-4h128a4 4 0 0 1 4 4v128a4 4 0 0 1-4 4h-48a4 4 0 0 0 0 8h48a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12" />
      </G>
    </Svg>
  );
};