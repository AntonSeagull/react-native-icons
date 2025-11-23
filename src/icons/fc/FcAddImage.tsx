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

export const FcAddImage = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="#8CBCD6" d="M40 41H8c-2.2 0-4-1.8-4-4V11c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4" />
        <Circle cx={35} cy={16} r={3} fill="#B3DDF5" />
        <Path fill="#9AC9E3" d="M20 16 9 32h22z" />
        <Path fill="#B3DDF5" d="m31 22-8 10h16z" />
        <Circle cx={38} cy={38} r={10} fill="#43A047" />
        <Path d="M36 32h4v12h-4z" />
        <Path d="M32 36h12v4H32z" />
      </G>
    </Svg>
  );
};