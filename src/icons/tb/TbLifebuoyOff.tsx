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

export const TbLifebuoyOff = (props: IconProps) => {
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
        <Path d="M9.171 9.172a4 4 0 0 0 5.65 5.663M16 12a4 4 0 0 0-4-4" />
        <Path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667-2.301A9 9 0 0 0 7.96 3.956M15 15l3.35 3.35M9 15l-3.35 3.35M5.65 5.65 9 9M18.35 5.65 15 9M3 3l18 18" />
      </G>
    </Svg>
  );
};