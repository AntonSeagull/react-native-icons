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

export const TbZodiacVirgo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M3 4a2 2 0 0 1 2 2v9M5 6a2 2 0 0 1 4 0v9M9 6a2 2 0 0 1 4 0v10a7 5 0 0 0 7 5" />
        <Path d="M12 21a7 5 0 0 0 7-5v-2a3 3 0 0 0-6 0" />
      </G>
    </Svg>
  );
};