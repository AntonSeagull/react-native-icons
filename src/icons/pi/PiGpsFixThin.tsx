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

export const PiGpsFixThin = (props: IconProps) => {
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
        <Path d="M240 124h-28.1A84.11 84.11 0 0 0 132 44.1V16a4 4 0 0 0-8 0v28.1A84.11 84.11 0 0 0 44.1 124H16a4 4 0 0 0 0 8h28.1a84.11 84.11 0 0 0 79.9 79.9V240a4 4 0 0 0 8 0v-28.1a84.11 84.11 0 0 0 79.9-79.9H240a4 4 0 0 0 0-8m-112 80a76 76 0 1 1 76-76 76.08 76.08 0 0 1-76 76m0-112a36 36 0 1 0 36 36 36 36 0 0 0-36-36m0 64a28 28 0 1 1 28-28 28 28 0 0 1-28 28" />
      </G>
    </Svg>
  );
};