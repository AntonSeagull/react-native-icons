

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowLineUpLeftLight = (props: IconProps) => {

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
          <Path d="M230,208a6,6,0,0,1-6,6H48a6,6,0,0,1,0-12H224A6,6,0,0,1,230,208ZM72,150a6,6,0,0,0,6-6V62.49L179.76,164.24a6,6,0,0,0,8.48-8.48L86.49,54H168a6,6,0,0,0,0-12H72a6,6,0,0,0-6,6v96A6,6,0,0,0,72,150Z" />
        </G>
      </Svg>
    );
  }

