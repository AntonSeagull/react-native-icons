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

export const SiKasasmart = (props: IconProps) => {
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
        <Path d="M12 0q-.75 0-1.5.75L7.97 3.28l8.83 8.83q1.5 1.5 1.5 3V24h3.3q2.4 0 2.4-2.4v-8.85q0-1.5-1.5-3l-9-9Q12.75 0 12 0M6.9 4.34 2.89 8.37 9.6 15.1q1.5 1.5 1.5 3V24h5.7v-8.89c-.03-.83-.6-1.46-1.06-1.94L6.91 4.34zm-5.08 5.1-.32.31q-1.5 1.5-1.5 3v8.85Q0 24 2.4 24h7.2v-5.9c-.03-.8-.56-1.42-1.06-1.95Z" />
      </G>
    </Svg>
  );
};