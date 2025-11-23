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

export const LiaBoldSolid = (props: IconProps) => {
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
        <Path d="M16 7c2.8 0 5 2.2 5 5 0 1.3-.5 2.398-1.3 3.3 1.902.7 3.3 2.5 3.3 4.7 0 2.8-2.2 5-5 5H7V7zm-7 8h7c1.7 0 3-1.3 3-3s-1.3-3-3-3H9zm0 8h9c1.7 0 3-1.3 3-3s-1.3-3-3-3H9zm7-18H5v22h13c3.898 0 7-3.102 7-7 0-2.102-1-4.102-2.5-5.398.3-.801.5-1.704.5-2.602 0-3.898-3.102-7-7-7m-5 6h5c.602 0 1 .398 1 1s-.398 1-1 1h-5Zm0 8h7c.602 0 1 .398 1 1s-.398 1-1 1h-7Z" />
      </G>
    </Svg>
  );
};