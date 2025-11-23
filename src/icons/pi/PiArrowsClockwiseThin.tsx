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

export const PiArrowsClockwiseThin = (props: IconProps) => {
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
        <Path d="M220 48v48a4 4 0 0 1-4 4h-48a4 4 0 0 1 0-8h38.34l-21.45-21.46a84 84 0 0 0-118.09-.69 4 4 0 1 1-5.6-5.72 92 92 0 0 1 129.34.76L212 86.34V48a4 4 0 0 1 8 0m-30.8 138.15a83.44 83.44 0 0 1-58.68 23.91h-.47a83.52 83.52 0 0 1-58.94-24.6L49.66 164H88a4 4 0 0 0 0-8H40a4 4 0 0 0-4 4v48a4 4 0 0 0 8 0v-38.34l21.46 21.45A91.43 91.43 0 0 0 130 218.06h.51a91.45 91.45 0 0 0 64.28-26.19 4 4 0 1 0-5.6-5.72Z" />
      </G>
    </Svg>
  );
};