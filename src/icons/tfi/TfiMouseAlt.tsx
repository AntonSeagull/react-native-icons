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

export const TfiMouseAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M8.5 0A5.506 5.506 0 0 0 3 5.5v6C3 14.533 5.467 17 8.5 17s5.5-2.467 5.5-5.5v-6C14 2.467 11.533 0 8.5 0M13 5.5V6H9V1.051c2.244.252 4 2.139 4 4.449M8 1.051V6H4v-.5c0-2.31 1.756-4.197 4-4.449M8.5 16A4.505 4.505 0 0 1 4 11.5V7h9v4.5c0 2.481-2.019 4.5-4.5 4.5" />
      </G>
    </Svg>
  );
};