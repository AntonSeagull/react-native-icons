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

export const RiRefundFill = (props: IconProps) => {
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
        <Path d="M22.005 7h-20V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zm0 2v11a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1V9zm-11 5v-2.5l-4.5 4.5h10.5v-2z" />
      </G>
    </Svg>
  );
};