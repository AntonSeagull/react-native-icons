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

export const PiBasketballThin = (props: IconProps) => {
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
        <Path d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M60 66.07A91.22 91.22 0 0 1 83.9 124H36.09A91.7 91.7 0 0 1 60 66.07M132 124V36.09a91.63 91.63 0 0 1 58.32 24.3A99.24 99.24 0 0 0 164.09 124Zm-8 0H91.91a99.24 99.24 0 0 0-26.23-63.61A91.63 91.63 0 0 1 124 36.09Zm-40.1 8A91.22 91.22 0 0 1 60 189.93 91.7 91.7 0 0 1 36.09 132Zm8 0H124v87.91a91.63 91.63 0 0 1-58.32-24.3A99.24 99.24 0 0 0 91.91 132Zm40.1 0h32.09a99.24 99.24 0 0 0 26.23 63.61 91.63 91.63 0 0 1-58.32 24.3Zm40.1 0h47.81A91.7 91.7 0 0 1 196 189.93 91.22 91.22 0 0 1 172.1 132m0-8A91.22 91.22 0 0 1 196 66.07 91.7 91.7 0 0 1 219.91 124Z" />
      </G>
    </Svg>
  );
};