

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiNumberSquareSixBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204Zm-76-16a40,40,0,0,0,5.06-79.67L146.3,86.15a12,12,0,1,0-20.6-12.3l-32.24,54A40,40,0,0,0,128,188Zm0-56a16,16,0,1,1-16,16A16,16,0,0,1,128,132Z" />
        </G>
      </Svg>
    );
  }

