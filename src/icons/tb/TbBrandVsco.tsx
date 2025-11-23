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

export const TbBrandVsco = (props: IconProps) => {
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
        <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
        <Path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0M12 3v4M21 12h-4M12 21v-4M3 12h4M18.364 5.636l-2.828 2.828M18.364 18.364l-2.828-2.828M5.636 18.364l2.828-2.828M5.636 5.636l2.828 2.828" />
      </G>
    </Svg>
  );
};