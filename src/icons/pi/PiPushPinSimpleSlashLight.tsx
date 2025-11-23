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

export const PiPushPinSimpleSlashLight = (props: IconProps) => {
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
        <Path d="M85.25 40a6 6 0 0 1 6-6H192a6 6 0 0 1 0 12h-8.85l19.17 108.64a6 6 0 0 1-4.86 7 5.4 5.4 0 0 1-1.05.1 6 6 0 0 1-5.9-5L171 46H91.25a6 6 0 0 1-6-6M212 220.44a6 6 0 0 1-8.48-.4L169 182h-35v58a6 6 0 0 1-12 0v-58H40a6 6 0 0 1 0-12h11l17.38-98.67L43.56 44a6 6 0 0 1 8.88-8l160 176a6 6 0 0 1-.44 8.44M158 170 78.58 82.56 63.15 170Z" />
      </G>
    </Svg>
  );
};