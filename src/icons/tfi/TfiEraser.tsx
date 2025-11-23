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

export const TfiEraser = (props: IconProps) => {
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
        <Path d="M13.446 4.201 8.25 1.2c-.69-.397-1.65-.141-2.048.55l-6 10.393a1.503 1.503 0 0 0 .55 2.05l3.179 1.824 4.357-.018 5.708-9.749a1.5 1.5 0 0 0-.55-2.049m-5.733 10.8-3.518.014-2.945-1.689a.5.5 0 0 1-.183-.684l2.75-4.764 6.027 3.48zm5.417-9.254-2.781 4.75-6.032-3.483 2.75-4.764a.503.503 0 0 1 .683-.184l5.196 3a.5.5 0 0 1 .184.681M17 15v1h-7v-1z" />
      </G>
    </Svg>
  );
};