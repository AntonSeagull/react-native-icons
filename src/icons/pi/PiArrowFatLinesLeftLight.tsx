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

export const PiArrowFatLinesLeftLight = (props: IconProps) => {
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
        <Path d="M152 74h-26V32a6 6 0 0 0-10.24-4.24l-96 96a6 6 0 0 0 0 8.48l96 96A6 6 0 0 0 126 224v-42h26a6 6 0 0 0 6-6V80a6 6 0 0 0-6-6m-6 96h-26a6 6 0 0 0-6 6v33.51L32.49 128 114 46.49V80a6 6 0 0 0 6 6h26Zm76-90v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0m-32 0v96a6 6 0 0 1-12 0V80a6 6 0 0 1 12 0" />
      </G>
    </Svg>
  );
};