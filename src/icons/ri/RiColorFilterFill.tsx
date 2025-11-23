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

export const RiColorFilterFill = (props: IconProps) => {
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
        <Path d="M16.572 8.027a5 5 0 1 0-5.101 2.945 7 7 0 0 1 5.1-2.945m-3.418 9.92a7 7 0 0 0 0-5.892 5 5 0 1 1 0 5.89m-6.88-7.92a7 7 0 0 0 5.1 2.946 5 5 0 1 1-5.1-2.946" />
      </G>
    </Svg>
  );
};