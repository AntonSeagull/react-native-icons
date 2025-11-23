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

export const TiFolderDelete = (props: IconProps) => {
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
        <Path d="M18 6h-6a2 2 0 0 0-2-2H6C4.346 4 3 5.346 3 7v10c0 1.654 1.346 3 3 3h12c1.654 0 3-1.346 3-3V9c0-1.654-1.346-3-3-3M6 6h4a2 2 0 0 0 2 2h6a1 1 0 0 1 1 1H5V7a1 1 0 0 1 1-1m12 12H6a1 1 0 0 1-1-1v-7h14v7a1 1 0 0 1-1 1m-3-4H9a1 1 0 1 1 0-2h6a1 1 0 1 1 0 2" />
      </G>
    </Svg>
  );
};