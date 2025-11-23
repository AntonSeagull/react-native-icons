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

export const PiArticleMediumFill = (props: IconProps) => {
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
        <Path d="M216 40H40a16 16 0 0 0-16 16v144a16 16 0 0 0 16 16h176a16 16 0 0 0 16-16V56a16 16 0 0 0-16-16M72 144a8 8 0 0 1-4.89 7.37A7.9 7.9 0 0 1 64 152H52a8 8 0 0 1 0-16h4V88h-4a8 8 0 0 1 0-16h12a8 8 0 0 1 6.91 4L92 112.12 113.09 76a8 8 0 0 1 6.91-4h12a8 8 0 0 1 0 16h-4v48h4a8 8 0 0 1 0 16h-12a7.9 7.9 0 0 1-3.11-.63A8 8 0 0 1 112 144v-34.41L98.91 132a8 8 0 0 1-13.82 0L72 109.59Zm128 40H88a8 8 0 0 1 0-16h112a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16m0-32h-40a8 8 0 0 1 0-16h40a8 8 0 0 1 0 16" />
      </G>
    </Svg>
  );
};