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

export const PiVolleyballThin = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m85 135.19a92 92 0 0 1-102.18 2.57L130.31 132h89.6a91.6 91.6 0 0 1-6.91 31.19M85.52 46.42A91.1 91.1 0 0 1 116 36.79 92 92 0 0 1 169.29 124h-39ZM219.91 124h-42.62a100.06 100.06 0 0 0-46-87.93A92.11 92.11 0 0 1 219.91 124M78.59 50.42l21.3 36.89a100.09 100.09 0 0 0-53.16 83.77A91.92 91.92 0 0 1 78.59 50.42M55 183.94a92 92 0 0 1 48.87-89.7L123.38 128l-44.79 77.58A92.8 92.8 0 0 1 55 183.94M128 220a91.4 91.4 0 0 1-42.48-10.42l21.3-36.89a100.07 100.07 0 0 0 99.1 4.16A92 92 0 0 1 128 220" />
      </G>
    </Svg>
  );
};