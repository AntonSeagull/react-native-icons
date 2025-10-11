

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiWaveSawtoothThin = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M234.1,131.41l-104,64a4,4,0,0,1-2.1.59,4,4,0,0,1-4-4V71.16L26.1,131.41a4,4,0,0,1-4.2-6.82l104-64A4,4,0,0,1,132,64V184.84l97.9-60.25a4,4,0,1,1,4.2,6.82Z" />
        </G>
      </Svg>
    );
  }

