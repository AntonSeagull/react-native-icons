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

export const TbMapPinUp = (props: IconProps) => {
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
        <Path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
        <Path d="M12.789 21.324a2 2 0 0 1-2.202-.424l-4.244-4.243a8 8 0 1 1 13.59-4.626M19 22v-6M22 19l-3-3-3 3" />
      </G>
    </Svg>
  );
};