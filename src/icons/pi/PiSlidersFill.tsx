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

export const PiSlidersFill = (props: IconProps) => {
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
        <Path d="M84 136a28 28 0 0 1-20 26.83V216a8 8 0 0 1-16 0v-53.17a28 28 0 0 1 0-53.66V40a8 8 0 0 1 16 0v69.17A28 28 0 0 1 84 136m52-74.83V40a8 8 0 0 0-16 0v21.17a28 28 0 0 0 0 53.66V216a8 8 0 0 0 16 0V114.83a28 28 0 0 0 0-53.66m72 80V40a8 8 0 0 0-16 0v101.17a28 28 0 0 0 0 53.66V216a8 8 0 0 0 16 0v-21.17a28 28 0 0 0 0-53.66" />
      </G>
    </Svg>
  );
};