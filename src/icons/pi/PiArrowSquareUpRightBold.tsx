

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowSquareUpRightBold = (props: IconProps) => {

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
          <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM87.51,168.49a12,12,0,0,1,0-17L131,108H112a12,12,0,0,1,0-24h48a12,12,0,0,1,12,12v48a12,12,0,0,1-24,0V125l-43.51,43.52a12,12,0,0,1-17,0Z" />
        </G>
      </Svg>
    );
  }

