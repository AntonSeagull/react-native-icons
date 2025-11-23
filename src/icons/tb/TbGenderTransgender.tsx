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

export const TbGenderTransgender = (props: IconProps) => {
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
        <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M15 9l6-6M21 7V3h-4M9 9 3 3M3 7V3h4M5.5 8.5l3-3M12 16v5M9.5 19h5" />
      </G>
    </Svg>
  );
};