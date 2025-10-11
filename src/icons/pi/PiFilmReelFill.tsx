

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFilmReelFill = (props: IconProps) => {

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
          <Path d="M232,216H183.36A103.95,103.95,0,1,0,128,232H232a8,8,0,0,0,0-16ZM80,148a20,20,0,1,1,20-20A20,20,0,0,1,80,148Zm48,48a20,20,0,1,1,20-20A20,20,0,0,1,128,196Zm0-96a20,20,0,1,1,20-20A20,20,0,0,1,128,100Zm28,28a20,20,0,1,1,20,20A20,20,0,0,1,156,128Z" />
        </G>
      </Svg>
    );
  }

