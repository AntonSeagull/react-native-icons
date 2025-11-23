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

export const SiProton = (props: IconProps) => {
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
        <Path d="M2.474 17.75V24h4.401v-5.979c0-.582.232-1.14.645-1.551a2.2 2.2 0 0 1 1.556-.643h4.513a7.96 7.96 0 0 0 5.612-2.318 7.9 7.9 0 0 0 2.325-5.595 7.9 7.9 0 0 0-2.325-5.596A7.96 7.96 0 0 0 13.587 0H2.474v7.812h4.401V4.129h6.416c.995 0 1.951.394 2.656 1.097.704.7 1.1 1.653 1.101 2.646a3.74 3.74 0 0 1-1.101 2.648 3.77 3.77 0 0 1-2.656 1.097H8.627a6.16 6.16 0 0 0-4.352 1.795 6.13 6.13 0 0 0-1.801 4.338" />
      </G>
    </Svg>
  );
};