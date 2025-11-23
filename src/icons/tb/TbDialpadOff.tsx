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

export const TbDialpadOff = (props: IconProps) => {
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
        <Path d="M7 7H3V3M17 3h4v4h-4zM10 6V3h4v4h-3M3 10h4v4H3zM17 13v-3h4v4h-3M14 14h-4v-4M10 17h4v4h-4zM3 3l18 18" />
      </G>
    </Svg>
  );
};