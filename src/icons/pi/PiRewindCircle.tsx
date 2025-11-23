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

export const PiRewindCircle = (props: IconProps) => {
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
        <Path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88 88.1 88.1 0 0 1-88 88M115.58 84.84a8 8 0 0 0-8.38.76l-48 36a8 8 0 0 0 0 12.8l48 36a8 8 0 0 0 4.8 1.6 8 8 0 0 0 8-8V92a8 8 0 0 0-4.42-7.16M104 148l-26.67-20L104 108Zm75.58-63.16a8 8 0 0 0-8.38.76l-48 36a8 8 0 0 0 0 12.8l48 36a8 8 0 0 0 4.8 1.6 8 8 0 0 0 8-8V92a8 8 0 0 0-4.42-7.16M168 148l-26.67-20L168 108Z" />
      </G>
    </Svg>
  );
};