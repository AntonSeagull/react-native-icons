

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrStakeholder = (props: IconProps) => {

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
          <Path  fill="none" d="M14,9 L18.5,11 L23,9 L23,4 L18.5,2 L14,4 L14,9 Z M7,7 C4.791,7 3,8.791 3,11 C3,13.209 4.791,15 7,15 C9.209,15 11,13.209 11,11 C11,8.791 9.209,7 7,7 L7,7 Z M1,23 L1,21 C1,17 3.5,15 7,15 C10.5,15 13,17 13,21 L13,23 L1,23 Z M14,4 L18.5,6 L23,4 M18.5,6 L18.5,11 L18.5,6 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

