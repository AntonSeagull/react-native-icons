

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiCardholderLight = (props: IconProps) => {

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
          <Path  d="M208,50H48A22,22,0,0,0,26,72V184a22,22,0,0,0,22,22H208a22,22,0,0,0,22-22V72A22,22,0,0,0,208,50ZM38,94H218v20H160a6,6,0,0,0-6,6,26,26,0,0,1-52,0,6,6,0,0,0-6-6H38ZM48,62H208a10,10,0,0,1,10,10V82H38V72A10,10,0,0,1,48,62ZM208,194H48a10,10,0,0,1-10-10V126H90.47a38,38,0,0,0,75.06,0H218v58A10,10,0,0,1,208,194Z" />
        </G>
      </Svg>
    );
  }

