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

export const FcShop = (props: IconProps) => {
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
        <Path fill="#CFD8DC" d="M5 19h38v19H5z" />
        <Path fill="#B0BEC5" d="M5 38h38v4H5z" />
        <Path fill="#455A64" d="M27 24h12v18H27z" />
        <Path fill="#E3F2FD" d="M9 24h14v11H9z" />
        <Path fill="#1E88E5" d="M10 25h12v9H10z" />
        <Path fill="#90A4AE" d="M36.5 33.5c-.3 0-.5.2-.5.5v2c0 .3.2.5.5.5s.5-.2.5-.5v-2c0-.3-.2-.5-.5-.5" />
        <Circle cx={24} cy={19} r={3} />
        <Circle cx={36} cy={19} r={3} />
        <Circle cx={12} cy={19} r={3} />
        <Path fill="#7CB342" d="M40 6H8c-1.1 0-2 .9-2 2v3h36V8c0-1.1-.9-2-2-2M21 11h6v8h-6zM37 11h-5l1 8h6zM11 11h5l-1 8H9z" />
        <Circle cx={30} cy={19} r={3} />
        <Path d="M45 19c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3z" />
        <Circle cx={18} cy={19} r={3} />
        <Path d="M3 19c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3z" />
        <Path d="M32 11h-5v8h6zM42 11h-5l2 8h6zM16 11h5v8h-6zM6 11h5l-2 8H3z" />
      </G>
    </Svg>
  );
};