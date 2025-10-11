

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GrCoffee = (props: IconProps) => {

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
          <Path  d="M7,20 C12,20 14,15 14,10 C14,5 12,0 7,0 C2,8.74747714e-16 0,5 0,10 C2.1431319e-16,15 2,20 7,20 Z" strokeWidth="2" />
          <Path  d="M7,2 C6,3 4,7 6,10 C8,13 7.5,17 7,18 C8.5,17 10,13 8,10 C6,7 6.5,3 7,2 Z" />
        </G>
      </Svg>
    );
  }

