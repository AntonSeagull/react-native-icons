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

export const PiFadersHorizontalLight = (props: IconProps) => {
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
        <Path d="M178 80a6 6 0 0 1 6-6h32a6 6 0 0 1 0 12h-32a6 6 0 0 1-6-6M40 86h106v18a6 6 0 0 0 12 0V56a6 6 0 0 0-12 0v18H40a6 6 0 0 0 0 12m176 84h-96a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12M88 146a6 6 0 0 0-6 6v18H40a6 6 0 0 0 0 12h42v18a6 6 0 0 0 12 0v-48a6 6 0 0 0-6-6" />
      </G>
    </Svg>
  );
};