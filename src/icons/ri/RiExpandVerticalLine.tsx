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

export const RiExpandVerticalLine = (props: IconProps) => {
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
        <Path d="m12 .5 4.95 4.95-1.415 1.413-2.536-2.535V10h-2V4.328L8.467 6.86 7.052 5.447zM11 14v5.67l-2.536-2.535L7.05 18.55 12 23.5l4.95-4.95-1.414-1.414L13 19.672v-5.673z" />
      </G>
    </Svg>
  );
};