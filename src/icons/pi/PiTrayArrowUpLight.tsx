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

export const PiTrayArrowUpLight = (props: IconProps) => {
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
        <Path d="M208 34H48a14 14 0 0 0-14 14v160a14 14 0 0 0 14 14h160a14 14 0 0 0 14-14V48a14 14 0 0 0-14-14M48 46h160a2 2 0 0 1 2 2v106h-30.69a13.9 13.9 0 0 0-9.89 4.1l-19.32 19.31a2 2 0 0 1-1.41.59h-41.38a2 2 0 0 1-1.41-.59L86.59 158.1a13.94 13.94 0 0 0-9.9-4.1H46V48a2 2 0 0 1 2-2m160 164H48a2 2 0 0 1-2-2v-42h30.69a2 2 0 0 1 1.41.59l19.31 19.31a13.94 13.94 0 0 0 9.9 4.1h41.38a13.9 13.9 0 0 0 9.89-4.1l19.32-19.31a2 2 0 0 1 1.41-.59H210v42a2 2 0 0 1-2 2M91.76 108.24a6 6 0 0 1 0-8.48l32-32a6 6 0 0 1 8.48 0l32 32a6 6 0 1 1-8.48 8.48L134 86.49V152a6 6 0 0 1-12 0V86.49l-21.76 21.75a6 6 0 0 1-8.48 0" />
      </G>
    </Svg>
  );
};