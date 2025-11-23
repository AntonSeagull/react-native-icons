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

export const TbZodiacCapricorn = (props: IconProps) => {
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
        <Path d="M4 4a3 3 0 0 1 3 3v9M7 7a3 3 0 0 1 6 0v11a3 3 0 0 1-3 3M13 17a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
      </G>
    </Svg>
  );
};