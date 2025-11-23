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

export const TbEyeglass2 = (props: IconProps) => {
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
        <Path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" />
        <Path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M3 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
      </G>
    </Svg>
  );
};