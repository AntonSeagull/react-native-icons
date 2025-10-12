

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrUnlock = (props: IconProps) => {

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
          <Path  fill="none" d="M23,23 L23,11 L9,11 L9,23 L23,23 Z M14,17 L18,17 M11,11 L11,7 C11,4 11,1 6,1 C1,1 1,4 1,7 L1,11" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

