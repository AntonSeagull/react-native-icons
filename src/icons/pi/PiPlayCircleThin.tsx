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

export const PiPlayCircleThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92 92.1 92.1 0 0 1-92 92m46.12-95.39-64-40A4 4 0 0 0 104 88v80a4 4 0 0 0 2.06 3.5 4.06 4.06 0 0 0 1.94.5 4 4 0 0 0 2.12-.61l64-40a4 4 0 0 0 0-6.78M112 160.78V95.22L164.45 128Z" />
      </G>
    </Svg>
  );
};