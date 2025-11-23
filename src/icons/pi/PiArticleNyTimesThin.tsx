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

export const PiArticleNyTimesThin = (props: IconProps) => {
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
        <Path d="M128 100h104a4 4 0 0 1 0 8H128a4 4 0 0 1 0-8m104 32H128a4 4 0 0 0 0 8h104a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8m0 32H80a4 4 0 0 0 0 8h152a4 4 0 0 0 0-8M96 140a4 4 0 0 0 0-8H84V60h40v12a4 4 0 0 0 8 0V56a4 4 0 0 0-4-4H32a4 4 0 0 0-4 4v16a4 4 0 0 0 8 0V60h40v72H64a4 4 0 0 0 0 8Z" />
      </G>
    </Svg>
  );
};