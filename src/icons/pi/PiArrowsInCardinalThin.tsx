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

export const PiArrowsInCardinalThin = (props: IconProps) => {
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
        <Path d="M93.17 66.83a4 4 0 0 1 5.66-5.66L124 86.34V24a4 4 0 0 1 8 0v62.34l25.17-25.17a4 4 0 1 1 5.66 5.66l-32 32a4 4 0 0 1-5.66 0Zm37.66 90.34a4 4 0 0 0-5.66 0l-32 32a4 4 0 0 0 5.66 5.66L124 169.66V232a4 4 0 0 0 8 0v-62.34l25.17 25.17a4 4 0 0 0 5.66-5.66ZM232 124h-62.34l25.17-25.17a4 4 0 1 0-5.66-5.66l-32 32a4 4 0 0 0 0 5.66l32 32a4 4 0 0 0 5.66-5.66L169.66 132H232a4 4 0 0 0 0-8m-133.17 1.17-32-32a4 4 0 0 0-5.66 5.66L86.34 124H24a4 4 0 0 0 0 8h62.34l-25.17 25.17a4 4 0 0 0 5.66 5.66l32-32a4 4 0 0 0 0-5.66" />
      </G>
    </Svg>
  );
};