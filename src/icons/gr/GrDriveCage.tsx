

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrDriveCage = (props: IconProps) => {

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
          <Path  fill="none" d="M1,23 L1,2 L23,2 L23,23 M1,8 L23,8 L1,8 Z M1,14 L23,14 L1,14 Z M1,20 L23,20 L1,20 Z M4,5 L16,5 L4,5 Z M18,5 L20,5 L18,5 Z M18,11 L20,11 L18,11 Z M18,17 L20,17 L18,17 Z M4,11 L16,11 L4,11 Z M4,17 L16,17 L4,17 Z" strokeWidth="2" />
        </G>
      </Svg>
    );
  }

