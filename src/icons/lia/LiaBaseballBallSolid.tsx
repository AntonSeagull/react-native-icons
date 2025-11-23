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

export const LiaBaseballBallSolid = (props: IconProps) => {
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
        <Path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3m0 2c3.09 0 5.883 1.286 7.883 3.346a9.2 9.2 0 0 0-2.563 2.834l1.72 1.01a7.4 7.4 0 0 1 2.105-2.295A10.94 10.94 0 0 1 27 16c0 2.257-.685 4.357-1.855 6.105a7.5 7.5 0 0 1-2.135-2.335l-1.73 1a9.4 9.4 0 0 0 2.603 2.884C21.883 25.714 19.09 27 16 27c-3.09 0-5.883-1.286-7.883-3.346a9.4 9.4 0 0 0 2.604-2.884l-1.73-1a7.5 7.5 0 0 1-2.136 2.335A10.94 10.94 0 0 1 5 16c0-2.257.685-4.357 1.855-6.105a7.4 7.4 0 0 1 2.106 2.294l1.719-1.01a9.2 9.2 0 0 0-2.563-2.833C10.117 6.286 12.91 5 16 5m-4.42 8.21-1.91.59c.22.72.33 1.46.33 2.2 0 .73-.1 1.45-.31 2.15l1.91.57a9.478 9.478 0 0 0-.02-5.51m8.84 0a9.5 9.5 0 0 0-.02 5.51l1.91-.57c-.21-.7-.31-1.42-.31-2.15 0-.74.11-1.48.33-2.2z" />
      </G>
    </Svg>
  );
};