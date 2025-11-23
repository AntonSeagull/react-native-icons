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

export const VscMapVertical = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5.777 2.5h6.32l-1.874 3h-6.32zm-1.875 4h6.32l1.876 3h-6.32zM11.09 6l2.334-3.735L13 1.5H5.5l-.424.235-2.5 4v.53L4.91 10l-2.334 3.735L3 14.5h7.5l.424-.235 2.5-4v-.53zm-5.313 4.5h6.32l-1.874 3h-6.32z" />
      </G>
    </Svg>
  );
};