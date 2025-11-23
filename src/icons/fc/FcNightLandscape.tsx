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

export const FcNightLandscape = (props: IconProps) => {
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
        <Path fill="#673AB7" d="M16.5 18 0 42h33z" />
        <Path fill="#9575CD" d="M33.6 24 19.2 42H48z" />
        <Path fill="#40C4FF" d="M42.9 6.3C43.6 7.4 44 8.6 44 10c0 3.9-3.1 7-7 7-.7 0-1.3-.1-1.9-.3 1.2 2 3.4 3.3 5.9 3.3 3.9 0 7-3.1 7-7 0-3.2-2.1-5.9-5.1-6.7" />
      </G>
    </Svg>
  );
};