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

export const PiGolfThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M172 100a8 8 0 1 1-8-8 8 8 0 0 1 8 8m-40 24a8 8 0 1 0 8 8 8 8 0 0 0-8-8m80-28a84 84 0 1 1-84-84 84.09 84.09 0 0 1 84 84m-8 0a76 76 0 1 0-76 76 76.08 76.08 0 0 0 76-76m-37.43 100.26C153 201.47 140.34 204 128 204s-25-2.53-38.57-7.74a4 4 0 1 0-2.86 7.48 119.3 119.3 0 0 0 37.43 8.17V248a4 4 0 0 0 8 0v-36.09a119.3 119.3 0 0 0 37.43-8.17 4 4 0 0 0-2.86-7.48" />
      </G>
    </Svg>
  );
};