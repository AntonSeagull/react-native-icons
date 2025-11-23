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

export const TbEyeX = (props: IconProps) => {
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
        <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
        <Path d="M13.048 17.942A9 9 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6a18 18 0 0 1-1.362 1.975M22 22l-5-5M17 22l5-5" />
      </G>
    </Svg>
  );
};