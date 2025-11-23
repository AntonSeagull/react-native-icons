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

export const TbSpider = (props: IconProps) => {
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
        <Path d="M5 4v2l5 5M2.5 9.5 4 11h6M4 19v-2l6-6M19 4v2l-5 5M21.5 9.5 20 11h-6M20 19v-2l-6-6" />
        <Path d="M8 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
        <Path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
      </G>
    </Svg>
  );
};