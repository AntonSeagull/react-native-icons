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

export const RiMenuFoldLine = (props: IconProps) => {
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
        <Path d="M21 18v2H3v-2zM6.596 3.903 8.01 5.318 4.828 8.5l3.182 3.182-1.414 1.414L2 8.5zM21 11v2h-9v-2zm0-7v2h-9V4z" />
      </G>
    </Svg>
  );
};