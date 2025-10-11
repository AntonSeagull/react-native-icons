

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowFatDownBold = (props: IconProps) => {

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
          <Path d="M235.09,131.41A12,12,0,0,0,224,124H188V48a20,20,0,0,0-20-20H88A20,20,0,0,0,68,48v76H32a12,12,0,0,0-8.48,20.49l96,96a12,12,0,0,0,17,0l96-96A12,12,0,0,0,235.09,131.41ZM128,215,61,148H80a12,12,0,0,0,12-12V52h72v84a12,12,0,0,0,12,12h19Z" />
        </G>
      </Svg>
    );
  }

