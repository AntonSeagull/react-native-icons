

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiWifi = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
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
        <G fill={color} stroke={color}>
          <Line  x1="12" y1="20" x2="12.01" y2="20" />
          <Path  d="M5 12.55a11 11 0 0 1 14.08 0" />
          <Path  d="M1.42 9a16 16 0 0 1 21.16 0" />
          <Path  d="M8.53 16.11a6 6 0 0 1 6.95 0" />
        </G>
      </Svg>
    );
  }

