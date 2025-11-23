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

export const TbAlphabetArabic = (props: IconProps) => {
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
        <Path d="M10 6v4M13 14h8q-2.518-3-4-3M13 6v9.958c0 .963 0 1.444-.293 1.743S11.943 18 11 18h-1M7 6v9.958c0 .963 0 1.444-.293 1.743S5.943 18 5 18H4" />
      </G>
    </Svg>
  );
};