

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiHashLight = (props: IconProps) => {

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
          <Path  d="M224,90H173l8.89-48.93a6,6,0,1,0-11.8-2.14L160.81,90H109l8.89-48.93a6,6,0,0,0-11.8-2.14L96.81,90H48a6,6,0,0,0,0,12H94.63l-9.46,52H32a6,6,0,0,0,0,12H83L74.1,214.93a6,6,0,0,0,4.83,7A5.64,5.64,0,0,0,80,222a6,6,0,0,0,5.89-4.93L95.19,166H147l-8.89,48.93a6,6,0,0,0,4.83,7,5.64,5.64,0,0,0,1.08.1,6,6,0,0,0,5.89-4.93L159.19,166H208a6,6,0,0,0,0-12H161.37l9.46-52H224a6,6,0,0,0,0-12Zm-74.83,64H97.37l9.46-52h51.8Z" />
        </G>
      </Svg>
    );
  }

