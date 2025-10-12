

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcSelfie = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#FFB74D" d="M32.9,22c0-0.3,0.1-0.7,0.1-1c0-1.1,0-5.9,0-7c0-7.6-18-5-18,0c0,1.1,0,5.9,0,7c0,0.3,0,0.7,0.1,1H32.9z" />
          <Path  fill="#37474F" d="M40,44H8c-2.2,0-4-1.8-4-4V26c0-2.2,1.8-4,4-4h32c2.2,0,4,1.8,4,4v14C44,42.2,42.2,44,40,44z" />
          <Path  fill="#BBDEFB" d="M7,26v14c0,0.6,0.4,1,1,1h29c0.6,0,1-0.4,1-1V26c0-0.6-0.4-1-1-1H8C7.4,25,7,25.4,7,26z" />
          <Path  fill="#FFB74D" d="M27.5,32c0-3.8-9-2.5-9,0c0,0.5,0,3,0,3.5c0,2.5,2,4.5,4.5,4.5s4.5-2,4.5-4.5C27.5,35,27.5,32.5,27.5,32z" />
          <Circle  cx="28" cy="21" r="1" />
          <Circle  cx="20" cy="21" r="1" />
          <Circle  cx="25" cy="35.5" r=".5" />
          <Circle  cx="21" cy="35.5" r=".5" />
          <Path  d="M23,27c-3,0-8,1.3-8,11l4,3v-6.5l6-3.5l2,2.5V41l4-3c0-2-0.8-10-6-10l-0.5-1H23z" />
          <Path  d="M16,22v-3l12-7l4,5v5h6.8C38.3,15.8,36.1,6,28,6l-1-2h-3C18.5,4,10.7,6.8,9.2,22H16z" />
        </G>
      </Svg>
    );
  }

