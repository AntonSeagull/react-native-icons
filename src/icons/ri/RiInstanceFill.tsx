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

export const RiInstanceFill = (props: IconProps) => {
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
        <Path d="m12 1 9.5 5.5v11L12 23l-9.5-5.5v-11zM6.499 9.97 11 12.578v5.048h2v-5.048l4.501-2.606-1.002-1.731L12 10.845 7.501 8.24z" />
      </G>
    </Svg>
  );
};