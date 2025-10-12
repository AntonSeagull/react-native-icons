

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FiZapOff = (props: IconProps) => {

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
          <Polyline  points="12.41 6.75 13 2 10.57 4.92" />
          <Polyline  points="18.57 12.91 21 10 15.66 10" />
          <Polyline  points="8 8 3 14 12 14 11 22 16 16" />
          <Line  x1="1" y1="1" x2="23" y2="23" />
        </G>
      </Svg>
    );
  }

