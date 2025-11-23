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

export const LiaTencentWeibo = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M17 2c-4.96 0-9 4.04-9 9 0 1.531.383 2.957 1.063 4.219.394-.715.843-1.387 1.312-2.031A6.9 6.9 0 0 1 10 11c0-3.86 3.14-7 7-7s7 3.14 7 7-3.14 7-7 7a6.9 6.9 0 0 1-2.312-.406c-.344.562-.66 1.148-.938 1.781A8.9 8.9 0 0 0 17 20c4.96 0 9-4.04 9-9s-4.04-9-9-9m0 6a3 3 0 0 0-3 3c0 .336.086.637.188.938C8.457 17.242 8 25.21 8 29h2c0-3.613.418-10.742 5.406-15.469.461.293 1.008.469 1.594.469a3 3 0 0 0 0-6" />
      </G>
    </Svg>
  );
};