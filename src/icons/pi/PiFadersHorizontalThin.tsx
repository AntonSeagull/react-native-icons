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

export const PiFadersHorizontalThin = (props: IconProps) => {
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
        <Path d="M180 80a4 4 0 0 1 4-4h32a4 4 0 0 1 0 8h-32a4 4 0 0 1-4-4M40 84h108v20a4 4 0 0 0 8 0V56a4 4 0 0 0-8 0v20H40a4 4 0 0 0 0 8m176 88h-96a4 4 0 0 0 0 8h96a4 4 0 0 0 0-8M88 148a4 4 0 0 0-4 4v20H40a4 4 0 0 0 0 8h44v20a4 4 0 0 0 8 0v-48a4 4 0 0 0-4-4" />
      </G>
    </Svg>
  );
};