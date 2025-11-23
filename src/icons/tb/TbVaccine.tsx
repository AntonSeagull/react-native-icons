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

export const TbVaccine = (props: IconProps) => {
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
        <Path d="m17 3 4 4M19 5l-4.5 4.5M11.5 6.5l6 6M16.5 11.5 10 18H6v-4l6.5-6.5M7.5 12.5 9 14M10.5 9.5 12 11M3 21l3-3" />
      </G>
    </Svg>
  );
};