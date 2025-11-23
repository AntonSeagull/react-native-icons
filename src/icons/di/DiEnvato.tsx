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

export const DiEnvato = (props: IconProps) => {
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
        <Path fill="#444" d="M23.032 5.072c-.668-.371-2.581-.141-4.88.57-4.022 2.75-7.417 6.8-7.654 13.305-.043.156-.44-.021-.518-.069-1.086-2.082-1.517-4.274-.61-7.437.169-.281-.384-.628-.483-.529-.199.199-1.029 1.083-1.58 2.04-2.732 4.74-.946 10.813 3.835 13.47 4.779 2.662 10.814.945 13.475-3.836 3.078-5.518.219-16.506-1.585-17.514" />
      </G>
    </Svg>
  );
};