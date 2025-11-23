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

export const PiDiscLight = (props: IconProps) => {
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
        <Path d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m37.52 96a37.8 37.8 0 0 0-6.76-16.27l37-36.95A89.6 89.6 0 0 1 217.8 122ZM154 128a26 26 0 1 1-26-26 26 26 0 0 1 26 26m-26 90a90 90 0 1 1 59.22-157.71l-36.95 36.95A38 38 0 1 0 165.52 134h52.28a90.12 90.12 0 0 1-89.8 84" />
      </G>
    </Svg>
  );
};