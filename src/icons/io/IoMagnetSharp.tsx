

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoMagnetSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Line  x1="191.98" y1="463.58" x2="191.98" y2="415.58" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="90.16" y1="421.4" x2="124.1" y2="387.46" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Line  x1="47.98" y1="319.58" x2="95.98" y2="319.58" strokeLinecap="square" strokeMiterlimit="10" strokeWidth="32px" />
          <Path  d="M422.2,89.82a144,144,0,0,0-203.71-.07l-67.88,67.88,67.88,67.89,67.88-67.89a48,48,0,0,1,68.46.59c18.3,18.92,17.48,49.24-1.14,67.86L286.37,293.4l67.88,67.88,66.91-66.91C477.53,238,478.53,146.22,422.2,89.82Z" />
        </G>
      </Svg>
    );
  }

