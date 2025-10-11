

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcBusinessContact = (props: IconProps) => {

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
          <Path  fill="#673AB7" d="M40,7H8c-2.2,0-4,1.8-4,4v26c0,2.2,1.8,4,4,4h5v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2 c0,0.7-0.4,1.4-1,1.7V41h18v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2c0,0.7-0.4,1.4-1,1.7V41h5c2.2,0,4-1.8,4-4V11 C44,8.8,42.2,7,40,7z" />
          <Path  d="M31,28c0,0-1.9-4-7-4c-5.1,0-7,4-7,4v2h14V28z" />
        </G>
      </Svg>
    );
  }

