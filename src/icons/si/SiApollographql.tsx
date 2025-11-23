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

export const SiApollographql = (props: IconProps) => {
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
        <Path d="M12 0C5.372 0 0 5.373 0 12c0 6.628 5.372 12 12 12 6.627 0 12-5.372 12-12a12 12 0 0 0-.473-3.343.6.6 0 0 0-1.127.409h-.002c.265.943.402 1.928.402 2.934a10.73 10.73 0 0 1-3.163 7.637A10.73 10.73 0 0 1 12 22.8a10.73 10.73 0 0 1-7.637-3.163A10.73 10.73 0 0 1 1.2 12a10.73 10.73 0 0 1 3.163-7.637A10.73 10.73 0 0 1 12 1.2c2.576 0 5.013.896 6.958 2.54a1.466 1.466 0 1 0 .862-.84A11.95 11.95 0 0 0 12 0m-1.44 5.88-4.2 10.902h2.63l.687-1.848h3.969l-.719-2.042h-2.613l1.7-4.691 3.024 8.58h2.631L13.47 5.88Z" />
      </G>
    </Svg>
  );
};