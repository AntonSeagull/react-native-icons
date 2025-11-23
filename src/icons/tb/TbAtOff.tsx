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

export const TbAtOff = (props: IconProps) => {
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
        <Path d="M9.174 9.17a4 4 0 0 0 5.646 5.668M16 12a4 4 0 0 0-4-4" />
        <Path d="M19.695 15.697A2.5 2.5 0 0 0 21 13.5V12A9 9 0 0 0 7.945 3.953M5.623 5.636A9 9 0 0 0 15.5 20.28M3 3l18 18" />
      </G>
    </Svg>
  );
};