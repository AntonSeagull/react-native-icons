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

export const TbMathMax = (props: IconProps) => {
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
        <Path d="M5 6a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M3 15s.616-5.544 2.332-7.93M8.637 7.112C11.354 10.425 14.519 20 17 20q3 0 4-9" />
      </G>
    </Svg>
  );
};