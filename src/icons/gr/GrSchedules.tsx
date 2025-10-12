

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrSchedules = (props: IconProps) => {

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
          <Path  fill="none" d="M17,7 L23,7 L23,23 L7,23 L7,19 M23,11 L17,11 M13,0 L13,3 M1,7 L17,7 M1,3 L17,3 L17,19 L1,19 L1,3 Z M5,0 L5,3 M4,11 L6,11 M8,11 L14,11 M4,15 L6,15 M8,15 L14,15" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

