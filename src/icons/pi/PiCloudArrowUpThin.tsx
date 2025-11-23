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

export const PiCloudArrowUpThin = (props: IconProps) => {
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
        <Path d="M186.83 162.83a4 4 0 0 1-5.66 0L156 137.66V208a4 4 0 0 1-8 0v-70.34l-25.17 25.17a4 4 0 0 1-5.66-5.66l32-32a4 4 0 0 1 5.66 0l32 32a4 4 0 0 1 0 5.66M160 44a84.09 84.09 0 0 0-76.39 49.13A60 60 0 1 0 72 212h40a4 4 0 0 0 0-8H72a52 52 0 1 1 8.57-103.27A83.5 83.5 0 0 0 76 128a4 4 0 0 0 8 0 76 76 0 1 1 106.4 69.68 4 4 0 0 0 1.6 7.66 3.9 3.9 0 0 0 1.6-.33A84 84 0 0 0 160 44" />
      </G>
    </Svg>
  );
};