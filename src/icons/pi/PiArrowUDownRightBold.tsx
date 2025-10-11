

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiArrowUDownRightBold = (props: IconProps) => {

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
          <Path d="M232.49,176.49l-48,48a12,12,0,0,1-17-17L195,180H88A68,68,0,0,1,88,44h88a12,12,0,0,1,0,24H88a44,44,0,0,0,0,88H195l-27.52-27.51a12,12,0,1,1,17-17l48,48A12,12,0,0,1,232.49,176.49Z" />
        </G>
      </Svg>
    );
  }

