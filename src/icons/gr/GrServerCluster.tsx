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

export const GrServerCluster = (props: IconProps) => {
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
        <Path fill="none" stroke="#000" strokeWidth={2} d="M1 8h22V1H1zm10-3h1V4h-1zm8 0h1V4h-1zm-4 0h1V4h-1zm-4 7h1v-1h-1zm8 0h1v-1h-1zm-4 0h1v-1h-1zm-4 7h1v-1h-1zm8 0h1v-1h-1zm-4 0h1v-1h-1zM1 15h22V8H1zm0 7h22v-7H1zm20 1H3" />
      </G>
    </Svg>
  );
};