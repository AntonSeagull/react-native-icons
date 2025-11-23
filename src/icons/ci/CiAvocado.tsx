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

export const CiAvocado = (props: IconProps) => {
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
        <Path d="M11.982 21.939a8 8 0 0 1-.818-.044A7.58 7.58 0 0 1 6.1 9.6a3.58 3.58 0 0 0 .684-2.271 5.13 5.13 0 0 1 3.8-5.085 5.27 5.27 0 0 1 4.6.892 5.19 5.19 0 0 1 2.039 4.14A3.6 3.6 0 0 0 17.9 9.61a7.574 7.574 0 0 1-5.918 12.329m.009-18.877a4.5 4.5 0 0 0-1.158.152 4.126 4.126 0 0 0-3.055 4.07 4.53 4.53 0 0 1-.9 2.947 6.56 6.56 0 0 0-1.366 5.231 6.64 6.64 0 0 0 5.759 5.438 6.575 6.575 0 0 0 5.851-10.662 4.45 4.45 0 0 1-.9-2.9 4.214 4.214 0 0 0-4.228-4.273Z" />
        <Ellipse cx={11.999} cy={14.856} rx={2.5} ry={3} />
      </G>
    </Svg>
  );
};