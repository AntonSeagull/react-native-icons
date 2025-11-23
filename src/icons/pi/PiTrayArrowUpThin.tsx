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

export const PiTrayArrowUpThin = (props: IconProps) => {
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
        <Path d="M208 36H48a12 12 0 0 0-12 12v160a12 12 0 0 0 12 12h160a12 12 0 0 0 12-12V48a12 12 0 0 0-12-12M48 44h160a4 4 0 0 1 4 4v108h-32.69a11.93 11.93 0 0 0-8.48 3.51l-19.32 19.32a4 4 0 0 1-2.82 1.17h-41.38a4 4 0 0 1-2.82-1.17l-19.32-19.31a11.9 11.9 0 0 0-8.48-3.52H44V48a4 4 0 0 1 4-4m160 168H48a4 4 0 0 1-4-4v-44h32.69a4 4 0 0 1 2.82 1.17l19.32 19.31a11.9 11.9 0 0 0 8.48 3.52h41.38a11.93 11.93 0 0 0 8.48-3.51l19.32-19.32a4 4 0 0 1 2.82-1.17H212v44a4 4 0 0 1-4 4M93.17 106.83a4 4 0 0 1 0-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1-5.66 5.66L132 81.66V152a4 4 0 0 1-8 0V81.66l-25.17 25.17a4 4 0 0 1-5.66 0" />
      </G>
    </Svg>
  );
};