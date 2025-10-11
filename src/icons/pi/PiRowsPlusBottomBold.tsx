

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRowsPlusBottomBold = (props: IconProps) => {

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
          <Path d="M208,112H48a20,20,0,0,0-20,20v24a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V132A20,20,0,0,0,208,112Zm-4,40H52V136H204Zm4-116H48A20,20,0,0,0,28,56V80a20,20,0,0,0,20,20H208a20,20,0,0,0,20-20V56A20,20,0,0,0,208,36Zm-4,40H52V60H204ZM160,220a12,12,0,0,1-12,12h-8v8a12,12,0,0,1-24,0v-8h-8a12,12,0,0,1,0-24h8v-8a12,12,0,0,1,24,0v8h8A12,12,0,0,1,160,220Z" />
        </G>
      </Svg>
    );
  }

