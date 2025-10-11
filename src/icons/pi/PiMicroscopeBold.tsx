

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMicroscopeBold = (props: IconProps) => {

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
          <Path  d="M224,204H212A92.1,92.1,0,0,0,148,60.78V32a20,20,0,0,0-20-20H80A20,20,0,0,0,60,32v96a20,20,0,0,0,20,20h48a20,20,0,0,0,20-20V85.08A68.1,68.1,0,0,1,204,152a67.39,67.39,0,0,1-24.18,52H32a12,12,0,0,0,0,24H224a12,12,0,0,0,0-24ZM124,124H84V36h40ZM72,188a12,12,0,0,1,0-24h64a12,12,0,0,1,0,24Z" />
        </G>
      </Svg>
    );
  }

