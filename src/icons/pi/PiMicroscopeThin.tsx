

  import {
    G,
    Path,
    Svg,
    Line,
    Circle,
    Polyline
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMicroscopeThin = (props: IconProps) => {

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
          <Path  d="M224,212H194.8A83.2,83.2,0,0,0,220,152a84.1,84.1,0,0,0-80-83.9V32a12,12,0,0,0-12-12H80A12,12,0,0,0,68,32V136a12,12,0,0,0,12,12h48a12,12,0,0,0,12-12V76.11A76,76,0,0,1,182.64,212H32a4,4,0,0,0,0,8H224a4,4,0,0,0,0-8Zm-92-76a4,4,0,0,1-4,4H80a4,4,0,0,1-4-4V32a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4ZM72,180a4,4,0,0,1,0-8h64a4,4,0,0,1,0,8Z" />
        </G>
      </Svg>
    );
  }

