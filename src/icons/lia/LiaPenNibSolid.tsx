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

export const LiaPenNibSolid = (props: IconProps) => {
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
        <Path d="m22 3.586-4.521 4.521-6.74 1.928a4.06 4.06 0 0 0-2.802 2.65L3.86 25.274l1.434 1.434 1.434 1.434 12.593-4.08a4.06 4.06 0 0 0 2.64-2.788l1.929-6.748L28.414 10zm0 2.828L25.586 10 23 12.586 19.414 9zm-4.29 3.711 4.165 4.164-1.842 6.45a2.06 2.06 0 0 1-1.336 1.421L7.69 25.725l5.795-5.795A2 2 0 0 0 14 20a2 2 0 0 0 0-4 2 2 0 0 0-1.93 2.516L6.275 24.31l3.563-11a2.07 2.07 0 0 1 1.437-1.348z" />
      </G>
    </Svg>
  );
};