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

export const TbTargetArrow = (props: IconProps) => {
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
        <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
        <Path d="M12 7a5 5 0 1 0 5 5" />
        <Path d="M13 3.055A9 9 0 1 0 20.941 11" />
        <Path d="M15 6v3h3l3-3h-3V3zM15 9l-3 3" />
      </G>
    </Svg>
  );
};