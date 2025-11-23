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

export const LiaTractorSolid = (props: IconProps) => {
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
        <Path d="M7 5v7.25c-1.348.305-2.582.883-3.625 1.719l1.25 1.562A6.96 6.96 0 0 1 9 14c3.879 0 7 3.121 7 7h4.563A3.93 3.93 0 0 0 20 23c0 2.2 1.8 4 4 4s4-1.8 4-4c0-1.027-.418-1.945-1.062-2.656l2-4.969.062-.187V13h-5v-3c0-.566.434-1 1-1V7c-1.645 0-3 1.355-3 3v3h-3.312l-2.75-7.344-.25-.656Zm2 2h5.313l2.75 7.344.25.656h9.593l-1.593 4H17.75c-.918-3.996-4.48-7-8.75-7Zm0 8c-3.3 0-6 2.7-6 6s2.7 6 6 6 6-2.7 6-6-2.7-6-6-6m0 2c2.223 0 4 1.777 4 4s-1.777 4-4 4-4-1.777-4-4 1.777-4 4-4m0 2a1.999 1.999 0 1 0 0 4 1.999 1.999 0 1 0 0-4m15 2c1.117 0 2 .883 2 2s-.883 2-2 2-2-.883-2-2 .883-2 2-2" />
      </G>
    </Svg>
  );
};