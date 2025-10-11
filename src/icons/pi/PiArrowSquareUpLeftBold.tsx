

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowSquareUpLeftBold = (props: IconProps) => {

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
          <Path d="M208,28H48A20,20,0,0,0,28,48V208a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V48A20,20,0,0,0,208,28Zm-4,176H52V52H204ZM84,144V96A12,12,0,0,1,96,84h48a12,12,0,0,1,0,24H125l43.52,43.51a12,12,0,0,1-17,17L108,125v19a12,12,0,0,1-24,0Z" />
        </G>
      </Svg>
    );
  }

